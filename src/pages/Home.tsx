import React from "react";
import Categories from "../components/category/Categories";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Navbar from "../components/navbar/Navbar";

const Home: React.FC = () => {
  return (
    <div className="App">
      <Navbar logo="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png" />
      <Header
        title="Delicious Dishes for Food Lovers"
        description="A food blog with hundreds of quick and easy dinner recipes, Classic done right, incredible one pot recipes, Asian takeout at home and holiday fasting!"
        imageUrl="https://www.shutterstock.com/image-photo/wooden-cutting-board-bright-aromatic-260nw-1806953527.jpg"
      />
      <Categories />
      <Footer />
      {/* Other components */}
    </div>
  );
};

export default Home;
