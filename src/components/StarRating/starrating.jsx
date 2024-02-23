import React, { useState } from "react";

const Starrating = () => {
  const [selectedStarCount, setSelectedStarCount] = useState(0);
  const [selectedHoverStarCount, setSelectedHoverStarCount] = useState(0);
  return (
    <>
      star rating
      <div className="star">
        {[...Array(5)].map((_, index) => {
          return (
            <span
              key={index}
              className={`${
                index + 1 <= selectedStarCount || selectedHoverStarCount
                  ? "selected"
                  : ""
              }`}
              onMouseOver={() => setSelectedHoverStarCount(index + 1)}
              onMouseOut={() => setSelectedHoverStarCount(0)}
              onClick={() => setSelectedStarCount(index + 1)}
            >
              &#9733;
            </span>
          );
        })}
      </div>
      Rating Count:{selectedStarCount}
    </>
  );
};

export default Starrating;
