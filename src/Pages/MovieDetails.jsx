import { useParams } from "react-router-dom";

function MovieDetails({ films }) {

    const { id } = useParams();
    console.log(id);

    const filmDetails = films.find(
    (item) => item.id === Number(id)
  );

  console.log(filmDetails);

    return(
        <div></div>
    )
}

export default MovieDetails