import Rating from "../components/Rating";

const RatingPage = () => {
  return (
    <div className="flex flex-col gap-2">
      <Rating size="24" />
      <Rating color="#12372A" textColor="#12372A" size="28" maxRating={7} />
      <Rating color="#FF8080" textColor="#FF8080" size="32" maxRating={10} />
    </div>
  );
};

export default RatingPage;
