import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import MovieList from "@/components/MovieList";
import SearchForm from "@/components/SearchForm";
import styles from "@/styles/Search.module.css";
import axios from "@/lib/axios";
import Head from "next/head";

export default function Search() {
  const router = useRouter();
  const q = router.query["q"];
  const [queryMovies, setQueryMovies] = useState();
  const getMovies = async (q) => {
    const response = await axios.get(`/movies?q=${q}`);
    await setQueryMovies(response.data.results);
  };

  useEffect(() => {
    if (!q) return;
    getMovies(q);
  }, [q]);

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
