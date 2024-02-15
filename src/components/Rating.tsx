import { useState } from "react";
import { RatingTypes } from "../Types/Rating";
import Star from "./Star";
import RatingText from "./RatingText";

const Rating = ({
  maxRating = 5,
  color = "#FFB900",
  textColor = "#000",
  size = "24",
  defaultRating = 0,
  message = ["terrible", "okay", "good", "best", "excellent"],
  onRatingChange,
}: RatingTypes) => {
  const [rating, setRating] = useState(defaultRating);
  const [tempRating, setTempRating] = useState(0);

  const handleRating = (rate: number) => {
    setRating(rate);
    onRatingChange?.(rate);
  };
  return (
    <div className="flex flex-col justify-center items-center gap-2">
      <div className="flex justify-center items-center">
        {Array.from({ length: maxRating }, (_, i) => (
          <Star
            key={i}
            color={color}
            size={size}
            full={(tempRating ? tempRating : rating) > i}
            onClick={() => handleRating(i + 1)}
            onMouseEnter={() => setTempRating(i + 1)}
            onMouseLeave={() => setTempRating(0)}
          />
        ))}
      </div>
      <RatingText
        textColor={textColor}
        tempRating={tempRating}
        rating={rating}
        maxRating={maxRating}
        message={message}
      />
    </div>
  );
};

export default Rating;
