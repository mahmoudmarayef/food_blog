import React from "react";
import Navbar from "../navbar/Navbar";
import "./About.css";

const About: React.FC = () => {
  return (
    <>
      <Navbar logo="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png" />
      <div className="about">
        <h1>About Us</h1>
        <p>
          Welcome to our food blog! We are passionate about cooking, baking, and
          all things food-related. Our goal is to share our love of food with
          others and inspire them to try new recipes and techniques.
        </p>
        <p>
          Our recipes are all tried and tested in our own kitchens. We believe
          in using fresh, seasonal ingredients and making everything from
          scratch whenever possible. We also love to experiment with different
          flavors and cuisines, so you'll find a wide variety of recipes on our
          site.
        </p>
        <p>
          Whether you're a seasoned home cook or a beginner in the kitchen, we
          hope our blog will provide you with inspiration and helpful tips.
          Please feel free to leave comments or send us a message if you have
          any questions or feedback.
        </p>
      </div>
    </>
  );
};

export default About;
