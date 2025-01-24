import TrendingCard from "./TrendingCard";
const Trending = () => {
  const moviesData = [
    "https://media.gqindia.com/wp-content/uploads/2020/05/The-Godfather-440x570.jpg",
    "https://myhotposters.com/cdn/shop/products/HP2827_a1a3c425-1238-4585-a0a8-27315b7972ce_1024x1024.jpg?v=1571445025",
    "https://hips.hearstapps.com/hmg-prod/images/best-romantic-movies-2023-love-again-64075f6a2f1d1.jpg?crop=1xw:1xh;center,top&resize=980:*",
    "https://www.myvue.com/-/jssmedia/vuecinemas/img/import/c8037d2d-f30d-4100-9dd6-3c9fd60fd306_furiosa_posters_main-one-sheet_712px.jpg",
    "https://m.media-amazon.com/images/M/MV5BN2JkMDc5MGQtZjg3YS00NmFiLWIyZmQtZTJmNTM5MjVmYTQ4XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg",
    "https://m.media-amazon.com/images/M/MV5BYzYyN2FiZmUtYWYzMy00MzViLWJkZTMtOGY1ZjgzNWMwN2YxXkEyXkFqcGc@._V1_.jpg",
    "https://i.redd.it/the-6-movies-that-have-cracked-the-imdb-top-250-highest-v0-su4udsvhc0tb1.jpg?width=1000&format=pjpg&auto=webp&s=ade6c33ff04bcbf0cf84336a900d8fa47e095bc7",
  ];
  return (
    <div class="mt-5 ms-5 pt-4">
      <h2>
        <b>Trending</b>
      </h2>
      <div class=" w-100 overflow-scroll">
        <div class="d-flex py-5 my-5">
          {moviesData.map((movieDetail) => (
            <TrendingCard movieDetail={movieDetail} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Trending;
