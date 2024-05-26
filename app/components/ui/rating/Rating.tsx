import React from "react";
import ReactStars from "react-rating-stars-component";

const Rating: React.FC = props => (
  <ReactStars size={12} activeColor="#dc2626" {...props} />
);

export default Rating;
