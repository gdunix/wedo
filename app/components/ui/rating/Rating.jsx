import React from "react";
import StarRatingComponent from "react-rating-stars-component";

const Rating = (props) => (
  <StarRatingComponent size={12} activeColor="#dc2626" {...props} />
);

export default Rating;
