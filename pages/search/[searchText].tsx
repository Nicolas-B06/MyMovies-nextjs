import SearchResult from "components/searchResult/searchResult";
import { GetServerSideProps } from "next";
import { fetchMovies } from "../../Services/fetch";
import { SearchMoviesResult } from "../../Model/movieModel";

type Props = {
    searchResults: SearchMoviesResult;
}

export default function Search( { searchResults } : Props) {
    return <SearchResult searchResults={searchResults} />
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const searchText = context.params?.searchText;

    if (!searchText || Array.isArray(searchText)) {
        return {
            notFound: true,
        };
    }

    const searchResult = await fetchMovies(searchText);

    return {props: {
        searchResults: searchResult,
    }}
};