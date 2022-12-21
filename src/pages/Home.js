import React from "react";
import TopNav from "../components/TopNav";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import Carousel from "../components/Carousel";
import Features from "../components/Features";
import ProductSuggestion1 from "../components/ProductSuggestion1";
import FeaturedProducts from "../components/FeaturedProducts";
import HotDeals from "../components/HotDeals";
import Footer from "../components/Footer";
import NewArrival from "../components/NewArrival";
import ProductImage from "../assets/images/product1.jpeg";

const NEWPRODUCT_DATA = [
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
    id: "1",
    name: "Slim Fit Denim Scratched High Quality Men's",
    price: "9.00",
    discount: "2.25",
    rating: "4",
    label: "New",
    image: ProductImage,
  },
  {
    id: "1",
    name: "Slim Fit Denim Scratched High Quality Men's",
    price: "9.00",
    discount: "2.25",
    rating: "4",
    label: "New",
    image: ProductImage,
  },
];

const COMINGSOON_DATA = [
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
    id: "1",
    name: "Slim Fit Denim Scratched High Quality Men's",
    price: "9.00",
    discount: "2.25",
    rating: "4",
    label: "New",
    image: ProductImage,
  },
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
    id: "1",
    name: "Slim Fit Denim Scratched High Quality Men's",
    price: "9.00",
    discount: "2.25",
    rating: "4",
    label: "New",
    image: ProductImage,
  },
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
    id: "1",
    name: "Slim Fit Denim Scratched High Quality Men's",
    price: "9.00",
    discount: "2.25",
    rating: "4",
    label: "New",
    image: ProductImage,
  },
];

const PRODUCT_DATA = [
  {
    id: "1",
    name: "Slim Fit Denim Scratched High Quality Men's",
    price: "9.00",
    discount: "2.25",
    rating: "4",
    label: "New",
    image: ProductImage,
  },
];

const CARUSEL_DATA = [
  {
    headerText: "Wishlist Now",
    headerText2: "Launching Tomorrow",
    description:
      "Only one pair of AirPods per eligible Mac or eligible iPad per qualified purchaser.",
    image:
      "https://images.unsplash.com/photo-1534802046520-4f27db7f3ae5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1229&q=80",
  },
  {
    headerText: "Wishlist Now",
    headerText2: "Launching Tomorrow",
    description:
      "Only one pair of AirPods per eligible Mac or eligible iPad per qualified purchaser.",
    image:
      "https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c2hvZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  },
  {
    headerText: "Wishlist Now",
    headerText2: "Launching Tomorrow",
    description:
      "Only one pair of AirPods per eligible Mac or eligible iPad per qualified purchaser.",
    image:
      "https://images.unsplash.com/photo-1608156639585-b3a032ef9689?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZWFycGhvbmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  },
  {
    headerText: "Wishlist Now",
    headerText2: "Launching Tomorrow",
    description:
      "Only one pair of AirPods per eligible Mac or eligible iPad per qualified purchaser.",
    image:
      "https://images.unsplash.com/photo-1534802046520-4f27db7f3ae5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1229&q=80",
  },
  {
    headerText: "Wishlist Now",
    headerText2: "Launching Tomorrow",
    description:
      "Only one pair of AirPods per eligible Mac or eligible iPad per qualified purchaser.",
    image:
      "https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c2hvZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  },
  {
    headerText: "Wishlist Now",
    headerText2: "Launching Tomorrow",
    description:
      "Only one pair of AirPods per eligible Mac or eligible iPad per qualified purchaser.",
    image:
      "https://images.unsplash.com/photo-1608156639585-b3a032ef9689?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZWFycGhvbmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  },
];

const ReverseClass = "row-reverse";

export default function HomePage() {
  return (
    <div className="w-100 h-100 m-0 p-0">
      <div>
        <TopNav />
        <Header />
        <SearchBar selectedCategory={"All Categories"} queryParams={""} />
        <Carousel data={CARUSEL_DATA} />
        <Carousel data={CARUSEL_DATA} reversed={true} />
        <Features />
        <ProductSuggestion1 />
        <FeaturedProducts data={NEWPRODUCT_DATA} Title="New Product" />
        <FeaturedProducts data={COMINGSOON_DATA} Title=" Coming Soon" />
        <FeaturedProducts data={PRODUCT_DATA} Title="Product" />
        <HotDeals />
        <NewArrival />
        <Footer />
      </div>
    </div>
  );
}
