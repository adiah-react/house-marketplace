import rentCategoryImage from "../assets/jpg/rentCategoryImage.jpg";
import sellCategoryImage from "../assets/jpg/sellCategoryImage.jpg";

import { Link } from "react-router-dom";

const Explore = () => {
  return (
    <div className="explore">
      <header>
        <p className="pageHeader">Explore</p>
      </header>
      <main>
        {/* slider */}
        <p className="exploreCategoryHeading">Categories</p>
        <div className="exploreCategories">
          <Link to="/category/rent">
            <img
              src={rentCategoryImage}
              alt="rent"
              className="exploreCategoryImg"
            />

            <p className="exploreCategoryName">Places for rent</p>
          </Link>

          <Link to="/category/sale">
            <img
              src={sellCategoryImage}
              alt="rent"
              className="exploreCategoryImg"
            />

            <p className="exploreCategoryName">Places for sale</p>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Explore;
