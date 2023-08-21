import MovieList from "@/components/MovieList";
import SearchForm from "@/components/SearchForm";
import styles from "@/styles/Home.module.css";
import axios from "@/lib/axios";

export async function getStaticProps() {
  const res = await axios.get("/movies");
  const movieData = res.data;
  return {
    props: {
      movies: movieData.results,
    }
  }
}

export default function Home({ movies }) {

  return (
    <>
      <SearchForm />
      <MovieList className={styles.movieList} movies={movies} />
    </>
  );
}
