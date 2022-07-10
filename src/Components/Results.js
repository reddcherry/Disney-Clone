import { useHistory } from "react-router";
import styled from "styled-components";



const Results = (props) => {
  const history = useHistory();

  const movieClickHandler=(id)=>{
    history.push("/detail/"+id);
    props.searchClearer();
  }


 const renderedResults = props.searchResultMovies.map((movie) => {
   return (
     <Container key={movie.id} onClick={movieClickHandler.bind("", movie.id)}>
       <div>
         <img src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} />
       </div>
       <div style={{marginLeft:"0.5rem"}}>
         <h3>{movie.original_title}</h3>
         <h6>{movie.release_date}</h6>
       </div>
     </Container>
   );
 });

return <Div>
 {renderedResults}
</Div>
 
};

export default Results;



const Div = styled.div`
  position: absolute;
  top: 0.35rem;
  left: 0;
  z-index:100;
  margin-top:1rem;
  margin-left:1rem;
  background:grey;
  padding:0.1rem;
  border-radius:6px;
`;

const Container = styled.div`
cursor: pointer;
height:8rem;
overflow:hidden;
 width:25rem;
 z-index:100;
  padding: 0rem;
  margin: 0rem;
  display:grid;
  grid-template-columns: 1fr 1fr;
  background:rgb(0, 0, 0);
  box-shadow: 0 2px 4px rgba(200, 200, 200, 0.3);
 margin-bottom:.1rem;
  max-width: 80vw;
  margin-left: auto;
  margin-right: auto;
  img{
   width:100%;
   height:100%;
   object-fit:cover;
  }
`;