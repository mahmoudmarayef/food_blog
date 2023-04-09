import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Categories.css";

interface Category {
  id: number;
  title: string;
  image: string;
}

function fetchCategories(): Promise<Category[]> {
  return fetch("http://127.0.0.1:8000/categories/")
    .then((response) => response.json())
    .catch((error) => console.log(error));
}

const Categories: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    fetchCategories().then((data) => setCategories(data));
  }, []);

  return (
    <section className="categories">
      <div className="categories__header">
        <h2 className="categories__title">Categories</h2>
        <hr className="categories__line" />
      </div>
      <ul className="categories__list">
        {categories?.map((category) => (
          <li key={category.id} className="categories__item">
            <Link
              to={`/recipes?category=${category.id}`}
              className="link__style"
            >
              <img
                src={"http://127.0.0.1:8000" + category.image}
                alt={category.title}
                className="categories__image"
              />
              <p className="categories__category">{category.title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Categories;
