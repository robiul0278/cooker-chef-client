import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import ThreeCard from "./ThreeCard";
import Header from "../Header/Header";

const RecipeDetails = () => {
  const recipe = useLoaderData();
  const [details, setDetails] = useState([]);
  // console.log(details);
  useEffect(() => {
    fetch("https://cooker-server-sbrobiulislam1212-gmailcom.vercel.app/card")
      .then((res) => res.json())
      .then((data) => setDetails(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <div>
        <div>
          <div className="hero md:py-14 bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
              <img
                src={recipe[0].picture}
                className="max-w-sm rounded-lg shadow-2xl"
              />
              <div>
                <h1 className="text-5xl font-bold">{recipe[0].name}</h1>
                <p className="py-6">{recipe[0].bio}</p>
                <p>Experience: {recipe[0].experience_years} years</p>
                <p>Total Recipe: {recipe[0].recipe_count}</p>
                <div className="flex align-middle">
                  Like: {recipe[0].likes} <FontAwesomeIcon icon={faHeart} />{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-center my-14 font-title">
            Choice Recipe
          </h1>
        </div>
        <div>
          <div className="grid container mb-7 mx-auto sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 grid-cols-1 gap-5">
            {details.map((card) => (
              <ThreeCard key={card.id} card={card}></ThreeCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;
