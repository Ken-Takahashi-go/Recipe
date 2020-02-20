import React from "react";
import "./recipe.css";

const Recipe = ({ title, calories, image, ingredients }) => {
  return (
    <div className="recipe">
      <h1>{title}</h1>
      <p>{calories}</p>
      <ol>
        {ingredients.map(ingredients => (
          <li>{ingredients.text}</li>
        ))}
      </ol>
      <img src={image} alt="" />
    </div>
  );
};

export default Recipe;
