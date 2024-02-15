import { RatingTextTypes } from "../Types/Rating";

const RatingText = ({
  textColor,
  tempRating,
  rating,
  maxRating,
  message,
}: RatingTextTypes) => {
  return (
    <div className="flex gap-2 justify-center items-center min-h-8">
      <p className={`text-[${textColor}] m-0`}>{tempRating || rating || ""}</p>
      <p className={`text-[${textColor}] m-0 capitalize`}>
        {message?.length === maxRating
          ? message[tempRating ? tempRating - 1 : rating - 1]
          : ""}
      </p>
    </div>
  );
};

export default RatingText;
