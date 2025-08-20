import { useRoutes } from "react-router-dom";
 
import Home from "./components/Home";
import ProductDetail from "./components/ProductDetail";
import Test from "./components/Test";
import Login from "./components/Login";
import Blog from "./components/Blog";
import BlogDetail from "./components/BlogDetail";

// Portfolio pages - simple placeholder components for now
const About = () => <div className="p-8"><h1 className="text-3xl font-bold">About Page</h1><p>About content will go here.</p></div>;
const Service = () => <div className="p-8"><h1 className="text-3xl font-bold">Service Page</h1><p>Service content will go here.</p></div>;
const Resume = () => <div className="p-8"><h1 className="text-3xl font-bold">Resume Page</h1><p>Resume content will go here.</p></div>;
const Portfolio = () => <div className="p-8"><h1 className="text-3xl font-bold">Portfolio Page</h1><p>Portfolio content will go here.</p></div>;
const Testimonials = () => <div className="p-8"><h1 className="text-3xl font-bold">Testimonials Page</h1><p>Testimonials content will go here.</p></div>;
const Contact = () => <div className="p-8"><h1 className="text-3xl font-bold">Contact Page</h1><p>Contact content will go here.</p></div>;

export const SetRoutes = () => {
  return useRoutes([
    { path: "/", element: <Home /> },
    { path: "/problem", element: <Test /> },
    { path: "/login", element: <Login /> },
    { path: "/product/:slug", element: <ProductDetail /> },
    { path: "/blog", element: <Blog /> },
    { path: "/blog/:slug", element: <BlogDetail /> },
    { path: "/about", element: <About /> },
    { path: "/service", element: <Service /> },
    { path: "/resume", element: <Resume /> },
    { path: "/portfolio", element: <Portfolio /> },
    { path: "/testimonials", element: <Testimonials /> },
    { path: "/contact", element: <Contact /> },
  ]);
};
