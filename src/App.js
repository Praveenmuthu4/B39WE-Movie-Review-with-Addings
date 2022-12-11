import { useState } from "react";
import "./App.css";
import Addcolor from "./Addcolor";
import { Counter } from "./Counter";
import { MovieList } from "./MovieList";
import IconButton from "@mui/material/IconButton";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Routes,
  Route,
  Link,
  Navigate,
  useNavigate,
  useParams,
} from "react-router-dom";
import InfoIcon from "@mui/icons-material/Info";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import Button from "@mui/material/Button";

function App() {
  const [movieList, setMovieList] = useState([
    {
      title: "Vikram",
      poster:
        "https://m.media-amazon.com/images/M/MV5BMmJhYTYxMGEtNjQ5NS00MWZiLWEwN2ItYjJmMWE2YTU1YWYxXkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_.jpg",
      rating: 8.4,
      content:
        "Members of a black ops team must track and eliminate a gang of masked murderers.",
      trailer: "https://www.youtube.com/embed/OKBMCL-frPU",
    },
    {
      title: "RRR",
      poster:
        "https://englishtribuneimages.blob.core.windows.net/gallary-content/2021/6/Desk/2021_6$largeimg_977224513.JPG",
      rating: 8.8,
      content:
        "RRR is an upcoming Indian Telugu-language period action drama film directed by S. S. Rajamouli, and produced by D. V. V. Danayya of DVV Entertainments.",
      trailer: "https://www.youtube.com/embed/f_vbAtFSEc0",
    },
    {
      title: "Iron man 2",
      poster:
        "https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_FMjpg_UX1000_.jpg",
      rating: 7,
      content:
        "With the world now aware that he is Iron Man, billionaire inventor Tony Stark (Robert Downey Jr.) faces pressure from all sides to share his technology with the military. He is reluctant to divulge the secrets of his armored suit, fearing the information will fall into the wrong hands. With Pepper Potts (Gwyneth Paltrow) and Rhodes (Don Cheadle) by his side, Tony must forge new alliances and confront a powerful new enemy.",
      trailer: "https://www.youtube.com/embed/wKtcmiifycU",
    },
    {
      title: "No Country for Old Men",
      poster:
        "https://upload.wikimedia.org/wikipedia/en/8/8b/No_Country_for_Old_Men_poster.jpg",
      rating: 8.1,
      content:
        "A hunter's life takes a drastic turn when he discovers two million dollars while strolling through the aftermath of a drug deal. He is then pursued by a psychopathic killer who wants the money.",
      trailer: "https://www.youtube.com/embed/38A__WT3-o0",
    },
    {
      title: "Jai Bhim",
      poster:
        "https://m.media-amazon.com/images/M/MV5BY2Y5ZWMwZDgtZDQxYy00Mjk0LThhY2YtMmU1MTRmMjVhMjRiXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_FMjpg_UX1000_.jpg",
      content:
        "A tribal woman and a righteous lawyer battle in court to unravel the mystery around the disappearance of her husband, who was picked up the police on a false case",
      rating: 8.8,
      trailer: "https://www.youtube.com/embed/nnXpbTFrqXA",
    },
    {
      title: "The Avengers",
      rating: 8,
      content:
        "Marvel's The Avengers (classified under the name Marvel Avengers\n Assemble in the United Kingdom and Ireland), or simply The Avengers, is\n a 2012 American superhero film based on the Marvel Comics superhero team\n of the same name.",
      poster:
        "https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg",
      trailer: "https://www.youtube.com/embed/eOrNdBpGMv8",
    },
    {
      title: "Interstellar",
      poster: "https://m.media-amazon.com/images/I/A1JVqNMI7UL._SL1500_.jpg",
      rating: 8.6,
      content:
        "When Earth becomes uninhabitable in the future, a farmer and ex-NASA\n pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team\n of researchers, to find a new planet for humans.",
      trailer: "https://www.youtube.com/embed/zSWdZVtXT7E",
    },
    {
      title: "Baahubali",
      poster: "https://flxt.tmsimg.com/assets/p11546593_p_v10_af.jpg",
      rating: 8,
      content:
        "In the kingdom of Mahishmati, Shivudu falls in love with a young warrior woman. While trying to woo her, he learns about the conflict-ridden past of his family and his true legacy.",
      trailer: "https://www.youtube.com/embed/sOEg_YZQsTI",
    },
    {
      title: "Ratatouille",
      poster:
        "https://resizing.flixster.com/gL_JpWcD7sNHNYSwI1ff069Yyug=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzc4ZmJhZjZiLTEzNWMtNDIwOC1hYzU1LTgwZjE3ZjQzNTdiNy5qcGc=",
      rating: 8,
      content:
        "Remy, a rat, aspires to become a renowned French chef. However, he fails to realise that people despise rodents and will never enjoy a meal cooked by him.",
      trailer: "https://www.youtube.com/embed/NgsQ8mVkN8w",
    },
  ]);
  return (
    <div className="App">
      <ul>
        <li>
          <Link to="/"><Button variant="contained">Home</Button></Link>
        </li> 
        <li>
          <Link to="/movie"><Button variant="contained">Movie</Button></Link>
        </li>
        <li>
          <Link to="/color"><Button variant="contained">Color</Button></Link>
        </li>
      </ul>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/film" element={<Navigate repalce to="/movie" />} />
        <Route
          path="/movie"
          element={
            <MovieList movieList={movieList} setMovieList={setMovieList} />
          }
        />
        <Route
          path="/movie/:id"
          element={<MovieDetail movieList={movieList} />}
        />
        <Route path="/color" element={<Addcolor />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

function MovieDetail({ movieList }) {
  const navigate = useNavigate();
  const { id } = useParams();
  const movie = movieList[id];
  console.log(id, movie, movieList);
  const ratingStyle = {
    color: movie.rating >= 8.4 ? "green" : "red",
  };
  return (
    <div className="movie-details-Container">
      <iframe
        width="100%"
        height="695"
        src={movie.trailer}
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <div className="movie-Data">
        <h2 className="movie-Title">{movie.title} </h2>
        <p className="movie-details-Rating" style={ratingStyle}>
          ⭐{movie.rating}
        </p>
      </div>
      <p className="movie-Content">{movie.content}</p>
      <Button variant="contained" onClick={() => navigate(-1)}>
        <ArrowLeftIcon />
        Back
      </Button>
    </div>
  );
}

function NotFound() {
  return (
    <div>
      <img
        className="notfound"
        src="https://miro.medium.com/max/1400/1*zBFBJktPD3_z0S_35kO5Hg.gif"
        alt="not-found"
      />
    </div>
  );
}

function Home() {
  return <h1>Welcome to view MovieList</h1>;
}

export function Movie({ movie, id }) {
  const ratingStyle = {
    color: movie.rating >= 8.4 ? "green" : "red",
  };

  const [toggle, setToggle] = useState(true);
  const contentStyle = {
    display: toggle ? "block" : "none",
  };
  const navigate = useNavigate();

  return (
    <div className="movie-Container">
      <img className="movie-Poster" src={movie.poster} alt="movie-Poster" />
      <div className="movie-Data">
        <h2 className="movie-Title">
          {movie.title}
          <IconButton
            aria-label="Toggle content"
            onClick={() => setToggle(!toggle)}
            color="primary"
          >
            {toggle ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </IconButton>
          <IconButton onClick={() => navigate(`/movie/${id}`)} color="primary">
            <InfoIcon />
          </IconButton>
        </h2>
        <p className="movie-Rating" style={ratingStyle}>
          ⭐{movie.rating}
        </p>
      </div>
      {toggle ? (
        <p className="movie-Content" style={contentStyle}>
          {movie.content}
        </p>
      ) : null}
      <Counter />
    </div>
  );
}

export default App;
