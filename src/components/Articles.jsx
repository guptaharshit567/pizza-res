import React, { useState } from "react";
import grilledtomatoes from "../assets/grilled-tomatoes.png";
import snacksForTravel from "../assets/meal-prep-ideas.png";
import postWorkoutRecipes from "../assets/meal-prep-ideas2.png";
import grilledcorn from "../assets/grilled-corn.png";
import wrap from "../assets/wrap.png";
import cheesesoup from "../assets/cheese-soup.png";

const articlesData = [
  {
    image: grilledtomatoes,
    title: "Grilled Tomatoes at Home",
    description:
      "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
  },
  {
    image: snacksForTravel,
    title: "Snacks for Travel",
    description:
      "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
  },
  {
    image: postWorkoutRecipes,
    title: "Post-workout Recipes",
    description:
      "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
  },
  {
    image: grilledcorn,
    title: "How To Grill Corn",
    description:
      "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
  },
  {
    image: wrap,
    title: "Crunchwrap Supreme",
    description:
      "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
  },
  {
    image: cheesesoup,
    title: "Brocolli Cheese Soup",
    description:
      "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
  },
];

const Articles = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 3;
  const totalPages = Math.ceil(articlesData.length / articlesPerPage);

  // Calculate the articles to display based on the current page
  const startIndex = (currentPage - 1) * articlesPerPage;
  const selectedArticles = articlesData.slice(
    startIndex,
    startIndex + articlesPerPage
  );

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="Articles">
      <h1>Latest Articles</h1>
      <div className="cards">
        {selectedArticles.map((article, index) => (
          <div key={index} className="img-card">
            <img src={article.image} alt={article.title} />
            <h3>{article.title}</h3>
            <p>{article.description}</p>
            <button className="Articlebtn">Read More</button>
          </div>
        ))}
      </div>
      <div className="pagination">
        <button onClick={handlePreviousPage} disabled={currentPage === 1}>
          &lt;
        </button>
        <span>
          {currentPage}/{totalPages}
        </span>
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Articles;
