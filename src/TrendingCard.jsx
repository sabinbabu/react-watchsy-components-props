import "./TrendingCard.css";

const TrendingCard = (props) => {
  const { movieDetail } = props;
  return <img class="img-thumbnail image" src={movieDetail} alt="movie" />;
};
export default TrendingCard;
