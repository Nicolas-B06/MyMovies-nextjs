import React from "react";
import Typography from "@mui/material/Typography"
import { Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import classes from "./search.module.css";
import { useRouter } from "next/router";

export default function Search() {
    const [input, setInput] = React.useState<string>("");
  const router = useRouter();

  async function handleClick() {
    
    input && router.push(`/search/${input}`);
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setInput(event.target.value);
  };

  return (
    <div className={classes.searchBar}>
      <Typography variant="h4" component="div" gutterBottom>
        Recherche
      </Typography>
      <TextField
        id="Search"
        onChange={(event) => handleChange(event)}
        InputProps={{
          endAdornment: (
            <SearchIcon cursor="pointer" onClick={() => handleClick()} />
          ),
        }}
      ></TextField>
    </div>
  );
}
