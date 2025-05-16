import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { client } from "../../studio-react_shop/sanity";
import { FiChevronDown } from "react-icons/fi";
import { motion } from "framer-motion";
import useMeasure from "react-use-measure";

// Question 元件，用於折疊/展開內容
const Question = ({ title, children, defaultOpen = false }) => {
  const [ref, { height }] = useMeasure();
  const [open, setOpen] = useState(defaultOpen);

  return (
    <motion.div
      animate={open ? "open" : "closed"}
      className="border-b-[1px] border-b-slate-300"
    >
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="flex w-full items-center justify-between gap-4 py-6"
      >
        <motion.span
          variants={{
            open: {
              color: "rgba(3, 6, 23, 1)",
            },
            closed: {
              color: "rgba(3, 6, 23, 0.8)",
            },
          }}
          className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-left text-lg font-medium"
        >
          {title}
        </motion.span>
        <motion.span
          variants={{
            open: {
              rotate: "180deg",
              color: "rgb(124 58 237)",
            },
            closed: {
              rotate: "0deg",
              color: "#030617",
            },
          }}
        >
          <FiChevronDown className="text-2xl" />
        </motion.span>
      </button>
      <motion.div
        initial={false}
        animate={{
          height: open ? height : "0px",
          marginBottom: open ? "24px" : "0px",
        }}
        className="overflow-hidden text-slate-600"
      >
        <div ref={ref}>{children}</div>
      </motion.div>
    </motion.div>
  );
};

// 主圖片顯示元件
const MainImage = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(0);
  
  if (!images || images.length === 0) {
    return <div className="h-96 bg-gray-100 flex items-center justify-center">無圖片</div>;
  }
  
  return (
    <div className="flex flex-col space-y-4">
      {/* 主圖片 */}
      <div className="relative overflow-hidden rounded-lg bg-gray-100 h-[500px]">
        <img 
          src={images[currentImage]} 
          alt="Product" 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* 縮圖列表 */}
      {images.length > 1 && (
        <div className="flex space-x-2 overflow-x-auto py-2">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setCurrentImage(index)}
              className={`flex-shrink-0 h-20 w-20 rounded-md overflow-hidden border-2 ${
                currentImage === index ? 'border-blue-500' : 'border-transparent'
              }`}
            >
              <img 
                src={image} 
                alt={`Thumbnail ${index + 1}`} 
                className="h-full w-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

// 主組件
const ProductDetail = () => {
  const { slug } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getProductDetail = async () => {
      try {
        setLoading(true);
        setError(null);

        const query = `*[_type == "product" && slug.current == $slug][0] {
          _id,
          "images": images[].asset->url,
          name,
          price,
          description,
          "slug": slug.current,
          "categoryName": category->name
        }`;

        const data = await client.fetch(query, { slug });
        if (!data) {
          throw new Error("Product not found");
        }

        setProduct(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    getProductDetail();
  }, [slug]);

  if (loading) return <div className="flex justify-center items-center h-64">Loading...</div>;
  if (error) return <div className="flex justify-center items-center h-64 text-red-500">Error: {error}</div>;

  return (
    <div className="bg-white -mt-60">
      {/* 主圖片區域 - 占據全寬，左右各留 15px padding */}
      <div className="w-full px-4 mb-8">
        <MainImage images={product.images} />
      </div>
      
      {/* 產品資訊區域 */}
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        <div className="mb-8">
          {/* 類別名稱與產品名稱 */}
          <div className="mb-4">
            <span className="mb-1 inline-block text-gray-500">
              {product.categoryName}
            </span>
            <h2 className="text-3xl font-bold text-gray-800">
              {product.name}
            </h2>
          </div>

          {/* 評價區塊 */}
          <div className="mb-6 flex items-center gap-3">
            <span className="text-sm text-gray-500 transition duration-100">
              56 Ratings
            </span>
          </div>

          {/* 價格區塊 */}
          <div className="mb-6">
            <div className="flex items-end gap-2">
              <span className="text-2xl font-bold text-gray-800">
                ${product.price}
              </span>
              <span className="mb-0.5 text-red-500 line-through">
                ${product.price + 30}
              </span>
            </div>
            <span className="text-sm text-gray-500">
              不含運費
            </span>
          </div>
          
          {/* 購買按鈕 */}
          <div className="mb-8">
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-medium transition-colors">
              加入購物車
            </button>
          </div>
        </div>

        {/* 產品描述 */}
        <div className="py-8 border-t border-gray-200">
          <h3 className="mb-6 text-xl font-semibold">
            產品描述
          </h3>
          <Question title="特色" defaultOpen>
            <p>{product.description}</p>
          </Question>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;