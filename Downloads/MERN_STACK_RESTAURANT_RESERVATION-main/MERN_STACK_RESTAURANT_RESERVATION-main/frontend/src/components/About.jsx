import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
              <p>The only thing we're serious about is food.</p>
            </div>
            <p className="mid">
            விரும்புக" (Sappidu, Virumbuka - "Eat and Enjoy"), "சிறந்த உணவு சிறந்த பாரம்பரியம்" (Sirantha Unavu Sirantha Parambariyam - "The Best Food, The Best Heritage"), and "குழைக்கும் தாங்கும் உணவு" (Kuzhikkum Thangum Unavu - "Food that Satisfies Hunger and Cravings"). These slogans are memorable, catchy, and evoke emotions that stick in the mind of customers long after they’ve left the restaurant.In conclusion, Tamil hotel restaurant slogans serve an essential role in promoting their uniqueness and attracting customers. They convey the quality and experience of the restaurant with just a few words. It is remarkable how these catchy slogans capture the essence of the restaurant culture and provide a warm welcome to customers. They serve a purpose more than just marketing; they bring customers to the table to enjoy and savor unique flavors and grandeur cultural heritage.
            </p>
            <Link to={"/"}>
              Explore Menu{" "}
              <span>
                <HiOutlineArrowRight />
              </span>
            </Link>
          </div>
          <div className="banner">
            <img src="about.png" alt="about" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
