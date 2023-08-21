import MovieList from "@/components/MovieList";
import SearchForm from "@/components/SearchForm";
import styles from "@/styles/Search.module.css";
import axios from "@/lib/axios";
import Head from "next/head";

export async function getServerSideProps(context) {
  const { q } = context.query;
  const response = await axios.get(`/movies?q=${q}`);
  const queryMovies = response.data.results ?? [];
  return {
    props: {
      q,
      queryMovies,
    },
  }
}

export default function Search({q, queryMovies}) {

  return (
    <>
      <Head>
        <title>{q} 검색 결과 - WATCHIT</title>
      </Head>
      <SearchForm initialValue={q} />
      <h2 className={styles.title}>
        <span className={styles.keyword}>{q}</span> 검색 결과
      </h2>
      <MovieList movies={queryMovies} />
    </>
  );
}
