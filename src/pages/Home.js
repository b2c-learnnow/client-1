import React from "react";
import TopNav from "../components/TopNav";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import Carousel from "../components/Carousel";
import Features from "../components/Features";
import ProductSuggestion1 from "../components/ProductSuggestion1";
import FeaturedProducts from "../components/FeaturedProducts";
import HotDeals from "../components/HotDeals";
import Footer from "../components/Footer"
import NewArrival from "../components/NewArrival";
import ProductImage from "../assets/images/product1.jpeg";
import Product from "../elements/Product"
import HeaderNormal from "../elements/HeaderNormal"

export default function HomePage(){

const data = [
        {
          id: "1",
          name: "Slim Fit Denim Scratched High Quality Men's",
          price: "9.00",
          discount: "2.25",
          rating: "4",
          label: "New",
          image: ProductImage,
        },
        {
          id: "2",
          name: "Slim Fit Denim Scratched High Quality Men's",
          price: "9.00",
          discount: "2.25",
          rating: "4",
          label: "New",
          image: ProductImage,
        },
        {
          id: "3",
          name: "Slim Fit Denim Scratched High Quality Men's",
          price: "9.00",
          rating: "4",
          label: "New",
          image: ProductImage,
        },
        {
          id: "4",
          name: "Slim Fit Denim Scratched High Quality Men's",
          price: "9.00",
          rating: "4",
          label: "New",
          image: ProductImage,
        },
        {
          id: "5",
          name: "Slim Fit Denim Scratched High Quality Men's",
          price: "9.00",
          discount: "2.25",
          rating: "4",
          label: "New",
          image: ProductImage,
        },
        {
          id: "6",
          name: "Slim Fit Denim Scratched High Quality Men's",
          price: "9.00",
          discount: "2.25",
          rating: "4",
          label: "New",
          image: ProductImage,
        },
        {
          id: "7",
          name: "Slim Fit Denim Scratched High Quality Men's",
          price: "9.00",
          discount: "2.25",
          rating: "4",
          label: "New",
          image: ProductImage,
        },
        {
          id: "8",
          name: "Slim Fit Denim Scratched High Quality Men's",
          price: "9.00",
          discount: "2.25",
          rating: "4",
          label: "New",
          image: ProductImage,
        },
      ];
      
    return (
        <div className="w-100 h-100 m-0 p-0">
            <div>
                <TopNav />
                <Header />
                <SearchBar selectedCategory={'All Categories'} queryParams={''} />
                
                <Carousel />
                <Features />
                <ProductSuggestion1 />
                <FeaturedProducts data={data}/> 
                <HotDeals />
                <NewArrival />
                <Footer />
            </div>
        </div>
    )
}