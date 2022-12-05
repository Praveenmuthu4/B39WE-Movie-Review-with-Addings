import {useState} from "react";

// function AddMovieList(){
//   return(

    
//     <div className="container">
//       <input className="Movie-Details" placeholder="Place your Image"/>
//     <div>
//       <input className="Movie-Details" placeholder="Enter movie title" />
//       <input className="Movie-Details" placeholder="Give your rating"/>
//       <input className="Movie-Details" placeholder="Movie Content"/>
//     </div>
//     <button className="movie-button">Add Movies</button>
//     </div>
//   );
// }



function AddMovie() {
  const [newmovie, setNewmovie] = useState("vetaiyadu villaiyadu");
  const movieList = [
    {
    title:"",
    poster:"",
    rating:"",
    content:""
  }
];

  const [newmovieList, setNewmovieList] = useState(["Vikram"]);

  return (
    <div>
      <div className="container">
      <input className="Movie-Details" placeholder="Place your Image"/>
    <div>
      <input className="Movie-Details" placeholder="Enter movie title" />
      <input className="Movie-Details" placeholder="Give your rating"/>
      <input className="Movie-Details" placeholder="Movie Content"/>
    </div>

      <button onClick={() => setNewmovieList([...newmovieList, newmovie])}>Add</button>
</div>
      {newmovieList.map((move) => (
        <MovieBox color={move} />
      ))}
    </div>
  );
}

function MovieBox({ color }) {
  const newmovieList = {
    title:"",
    poster:"",
    rating:"",
    content:""
  };

  return <div style={newmovieList}></div>;


}









export default AddMovie;