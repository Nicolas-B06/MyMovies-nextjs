import Head from "next/head";
import Image from "next/image";
import Search from "../components/search";
import styles from "../styles/Home.module.css";
import Typography from "@mui/material/Typography"

export default function Home() {
  return (
    <>
      <Head>
        <title>Home - My Movies</title>
      </Head>
      <Typography variant="h1">My Movies App</Typography>
      <Search />
    </>
  );
}
