import { useContext, useEffect } from "react";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import { motion } from "framer-motion";
import { AuthContext } from "./AuthContext";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

export const Navbar = () => {
  return (
    <div className="bg-gray-50">
      <FlipNav />
      <div className="h-72" />
    </div>
  );
};

const FlipNav = () => {
  return (
    <nav className="bg-white p-4 border-b-[1px] border-gray-200 flex items-center justify-between relative">
      <NavLeft />
      <NavRight />
    </nav>
  );
};

const NavLeft = () => {
  return (
    <div className="flex items-center gap-6">
      <NavLink to="/" text="首頁" />
      <NavLink to="/problem" text="問與答Q&A" />
      <NavLink to="/community" text="Community" />
      <NavLink to="/pricing" text="Pricing" />
      <NavLink to="/company" text="關於我" />
    </div>
  );
};

const NavLink = ({ to, text }) => {
  return (
    <Link
      to={to}
      className="hidden lg:block h-[30px] overflow-hidden font-medium"
    >
      <motion.div whileHover={{ y: -30 }}>
        <span className="flex items-center h-[30px] text-gray-500">{text}</span>
        <span className="flex items-center h-[30px] text-indigo-600">
          {text}
        </span>
      </motion.div>
    </Link>
  );
};

const NavRight = () => {
  const { user, setUser } = useContext(AuthContext);
  useEffect(() => {
    if (user) {
      toast.success("🎉 登入成功！", {
        position: "top-right",
        autoClose: 2000,
      });
    }
  }, [user]); // 當 user 變化時執行
 

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null);
      toast.success("🎉 登出成功！", {
        position: "top-right",
        autoClose: 2000,
      });
    } catch (error) {
      console.error("登出錯誤:", error.message);
    }
  };

  return (
    <div className="flex items-center gap-4">
      {user ? (
        
        // **顯示登出按鈕**
        <motion.button
          onClick={handleLogout}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-4 py-2 bg-red-600 text-white font-medium rounded-md whitespace-nowrap"
        >
          登出
        </motion.button>
      ) : (
        // **未登入時顯示登入按鈕**
        <Link to="/login">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 py-2 bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent font-medium rounded-md whitespace-nowrap"
          >
            登入
          </motion.button>
        </Link>
      )}
    </div>
  );
};

export default Navbar;
