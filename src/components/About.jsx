import React from "react";

const About = () => {
  return (
    <div className="About">
      <div className="about-content">
        <img
          src="https://imgmediagumlet.lbb.in/media/2020/05/5ebd024e2f9e98375766d7ac_1589445198193.jpg?fm=webp&w=750&h=500&dpr=1"
          alt="recipe"
          className="about-image"
        />
        <div className="about-text">
          <h1>About Us</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries.
          </p>
          <button className="read-btn">Read More</button>
        </div>
      </div>
    </div>
  );
};

export default About;
