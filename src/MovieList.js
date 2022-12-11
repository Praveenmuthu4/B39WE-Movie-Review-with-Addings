import { Movie } from "./App";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useState } from "react";

export function MovieList({ movieList, setMovieList }) {
  const [poster, setPoster] = useState();
  const [title, setTitle] = useState();
  const [rating, setRating] = useState();
  const [content, setContent] = useState();

  const addMovie = () => {
    const newMovie = {
      poster,
      title,
      rating,
      content,
    };
    console.log(newMovie);
    setMovieList([...movieList, newMovie]);
  };

  return (
    <div>
      <div className="add-movie">
        <TextField
          id="outlined-basic"
          onChange={(event) => setPoster(event.target.value)}
          label="Give movie poster"
          variant="outlined"
        />
        <TextField
          id="outlined-basic"
          onChange={(event) => setTitle(event.target.value)}
          label="Enter movie title"
          variant="outlined"
        />
        <TextField
          id="outlined-basic"
          onChange={(event) => setRating(event.target.value)}
          label="Give your rating"
          variant="outlined"
        />
        <TextField
          id="outlined-basic"
          onChange={(event) => setContent(event.target.value)}
          label="Movie surmmary"
          variant="outlined"
        />
      </div>
      <Button variant="contained" onClick={addMovie}>
        Add Movie
      </Button>
      <div className="whole-container">
        {movieList.map((mov, index) => (
          <Movie key={index} movie={mov} id={index} />
        ))}
      </div>
    </div>
  );
}
