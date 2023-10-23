

import { useLoaderData } from "react-router-dom";
import Blogs from "../../Blogs/blogs";
import Banner from "../../Components/Banner/Banner";

import Brands from "../../Components/Brands/Brands";
import Footer from "../../Components/Footer/Footer";
import Faq from "../../FAQ/Faq";


const Home = () => {
   const brands = useLoaderData();
    console.log(brands);
    return (
        <div >
            <Banner></Banner>
           <Brands brands={brands}></Brands>
           <Blogs></Blogs>
            <Faq></Faq>
            <Footer></Footer>
        </div>
    );
};

export default Home;