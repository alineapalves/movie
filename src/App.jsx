import React, {useState, useEffect} from 'react';
import CaixaFilme from './components/caixafilme';
import styled from 'styled-components';
import api from './services/api';

const Container = styled.div`
max-width: auto;
margin: 0px;
text-align: center;
color: #faf7f7;
border-color: #eeeaeb;
padding: 0px;
border: 0px;
background-color: #38161b;

`;

const ListMovie = styled.div`
display: flex;
background-color: #7f8083;
justify-content: center;
height: 550px;
padding: 0px;
border: 0px;

`;

const Imagem = styled.img`
width: 100%;
height: 450px;
`;




function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() =>{
    const endereco = '/movies';
    api.get(endereco)
    .then((response) => {
      setMovies(response.data)
    }) 

  },[])


  return (
  <Container>
    <h1>Filmes e Séries</h1>
    <Imagem src="./img/filmes3.jpg" alt="" />
    <ListMovie>
    {
      movies.map(movie => {
        return (<CaixaFilme
          key= {movie.url}
          movies={movie}
          />)
      })
    }
    
    </ListMovie>


  </Container> 
    
  )
}

export default App
