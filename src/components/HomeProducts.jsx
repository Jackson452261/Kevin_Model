import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { client } from "../../studio-react_shop/sanity";
import { AuthContext } from "./AuthContext";
import { db } from "../firebase";
import { doc, setDoc, getDoc, deleteDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import { FaHeart } from "react-icons/fa";

const HomeProduct = () => {
  const { user } = useContext(AuthContext);
  const [products, setProducts] = useState([]);
  const [favorites, setFavorites] = useState({});
  const [activeTab, setActiveTab] = useState("全部");
  const [categories, setCategories] = useState(["全部"]);
  const [loading, setLoading] = useState(true);

  // 獲取所有產品和分類
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        
        // 獲取所有分類
        const categoriesQuery = `*[_type == "category"] { name }`;
        const categoriesResult = await client.fetch(categoriesQuery);
        const categoryNames = categoriesResult.map(cat => cat.name);
        setCategories(["全部", ...categoryNames]);
        
        // 獲取所有產品
        const productsQuery = `*[_type == "product"] {
          _id,
          price,
          name,
          "slug": slug.current,
          "categoryName": category->name,
          "imageUrl": images[0].asset->url
        }`;
        const productsResult = await client.fetch(productsQuery);
        setProducts(productsResult);
      } catch (error) {
        console.error("獲取數據時發生錯誤:", error);
        toast.error("獲取產品時發生錯誤，請稍後再試");
      } finally {
        setLoading(false);
      }
    };
    
    fetchData();
  }, []);

  // 獲取用戶收藏
  useEffect(() => {
    if (user) {
      const fetchFavorites = async () => {
        const userRef = doc(db, "favorites", user.uid);
        const userSnap = await getDoc(userRef);
        if (userSnap.exists()) {
          setFavorites(userSnap.data().favorites || {});
        } else {
          setFavorites({});
        }
      };
      fetchFavorites();
    } else {
      setFavorites({});
    }
  }, [user]);

  // 切換收藏狀態
  const toggleFavorite = async (product) => {
    if (!user) {
      toast.warn("請先登入才能收藏商品", { position: "top-right", autoClose: 2000 });
      return;
    }

    const userRef = doc(db, "favorites", user.uid);
    let updatedFavorites = { ...favorites };

    try {
      if (favorites[product._id]) {
        delete updatedFavorites[product._id];
        toast.info("已取消收藏", { position: "top-right", autoClose: 2000 });

        if (Object.keys(updatedFavorites).length === 0) {
          await deleteDoc(userRef);
        } else {
          await setDoc(userRef, { favorites: updatedFavorites }, { merge: true });
        }
      } else {
        updatedFavorites[product._id] = {
          id: product._id,
          name: product.name,
          price: product.price,
          imageUrl: product.imageUrl,
          slug: product.slug,
        };

        await setDoc(userRef, { favorites: updatedFavorites }, { merge: true });
        toast.success("已加入收藏", { position: "top-right", autoClose: 2000 });
      }

      setFavorites(updatedFavorites);
    } catch (error) {
      console.error("收藏商品時發生錯誤:", error);
      toast.error("收藏商品時發生錯誤，請稍後再試", { position: "top-right", autoClose: 2000 });
    }
  };

  // 根據選擇的分類過濾產品
  const filteredProducts = activeTab === "全部" 
    ? products 
    : products.filter(product => product.categoryName === activeTab);

  if (loading) {
    return <div className="flex justify-center items-center h-64">載入中...</div>;
  }

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24">
        {/* 分類標籤 */}
        <div className="mb-8 border-b border-gray-200">
          <div className="flex space-x-8 overflow-x-auto pb-1">
            {categories.map((category) => (
              <button
                key={category}
                className={`whitespace-nowrap pb-4 px-1 font-medium text-sm ${
                  activeTab === category
                    ? "border-b-2 border-blue-500 text-blue-600"
                    : "text-gray-500 hover:text-gray-700"
                }`}
                onClick={() => setActiveTab(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* 產品網格 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <div key={product._id} className="relative group">
              {/* 收藏按鈕 */}
              <button
                className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-md z-10"
                onClick={() => toggleFavorite(product)}
              >
                <FaHeart className={`text-xl ${favorites[product._id] ? "text-red-500" : "text-gray-400"}`} />
              </button>

              {/* 產品圖片和連結 */}
              <Link to={`/product/${product.slug}`} className="block">
                <div className="overflow-hidden rounded-lg bg-gray-100 aspect-w-4 aspect-h-3">
                  <img 
                    src={product.imageUrl || '/placeholder.jpg'} 
                    alt={product.name} 
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" 
                    onError={(e) => {
                      e.target.src = '/placeholder.jpg';
                    }}
                  />
                </div>
                <div className="mt-3">
                  <h3 className="font-medium text-gray-900">{product.name}</h3>
                  <p className="mt-1 text-gray-600">${product.price}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* 無產品時顯示 */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">此分類下暫無產品</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomeProduct;