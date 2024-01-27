import React from "react";
import { Link } from "react-router-dom";

const Features = ({ cards = [1, 2, 3] }) => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">
              Choose Products by Catagories
            </h2>
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
            All Catagories here
            </h1>
          </div>
          <div className="flex flex-wrap -m-4">
            {cards.map((cards) => {
              return (
                <Link to={`/categories/${cards}`} className="p-4 md:w-1/3 cursor-pointer">
                  <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                        
                      </div>
                      <h2 className="text-gray-900 text-lg title-font font-medium capitalize">
                        {cards || "Category Not Found "}
                      </h2>
                    </div>
                    <div className="flex-grow">
                      <a className="mt-3 text-indigo-500 inline-flex items-center">
                        Choose Products
                      </a>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
