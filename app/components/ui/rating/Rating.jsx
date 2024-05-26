import React from "react";
import StarRatingComponent from "react-rating-stars-component";

const Rating = (props) => (
  <StarRatingComponent size={12} activeColor="rgb(235, 84, 198)" {...props} />
);

export default Rating;
