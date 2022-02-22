import {useState} from 'react'
import './App.css';
import Add from './components/Add';
import MovieList from './components/MovieList';
import Search from './components/Search';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [keyword, setKeyword] = useState("")
  const [star, setStar] = useState(1)
  const [movies,setMovies] = useState([
    {
        title:'The OA',
        description:'The series is about Prairie Johnson, an adopted young woman who resurfaces after having been missing for seven years. Upon her return, Prairie calls herself "the OA" (for "original angel"), has scars on her back, and can see, despite having been blind when she disappeared.',
        posterURL:"https://fr.web.img5.acsta.net/pictures/17/01/16/14/55/202749.jpg",
        year:'2016-2019',
        type:'TV Series',
        genre:'Mystery|Drama|Supernatural Fiction',
        rate:5,
        
    },
    {
      title:"Rose Island ",
        description:"An idealistic engineer builds his own island off the Italian coast and declares it a nation, drawing the world's attention. Values are tested when the Italian Government declares him an enemy, but to change the world risks must be taken.",
        posterURL:"https://m.media-amazon.com/images/M/MV5BNDk2N2UzM2EtYWE0YS00MTljLWJiNGYtODA0MTRmZTE4YTk0XkEyXkFqcGdeQXVyNDk3ODk4OQ@@._V1_.jpg",
        year:'2020',
        type:'Movie',
        genre:'Adventure|Comedy|Drama',
        rate: 4,

    },
    {
      title:"The Handmaid's Tale",
        description:' the story of life in the dystopia of Gilead, a totalitarian society in what was the United States. Gilead is ruled by a fundamentalist regime that treats women as property of the state, and is faced with environmental disasters and a plummeting birth rate.',
        posterURL:"https://www.themoviedb.org/t/p/w500/aZ52mWwAK8Qv0QiLSzBDwrNnPPY.jpg",
        year:'2017',
        type:'TV Series',
        genre:'Drama|Sci-Fiction',
        rate: 2,

    },
    {
      title:"Into The Wild ",
        description:'After graduating from Emory University, top student and athlete Christopher McCandless abandons his possessions, gives his entire $24,000 savings account to charity and hitchhikes to Alaska to live in the wilderness. Along the way, Christopher encounters a series of characters that shape his life.',
        posterURL:"https://m.media-amazon.com/images/M/MV5BMTAwNDEyODU1MjheQTJeQWpwZ15BbWU2MDc3NDQwNw@@._V1_SX300.jpg",
        year:'2007',
        type:'Movie',
        genre:'Adventure|Biography|Drama',
        rate:5,

    },
    {
      title:"The Queen's Gambit ",
        description:'Orphaned at the tender age of nine, prodigious introvert Beth Harmon discovers and masters the game of chess in 1960s USA. But child stardom comes at a price.',
        posterURL:"https://m.media-amazon.com/images/M/MV5BM2EwMmRhMmUtMzBmMS00ZDQ3LTg4OGEtNjlkODk3ZTMxMmJlXkEyXkFqcGdeQXVyMjM5ODk1NDU@._V1_.jpg",
        year:'2020',
        type:'TV Series',
        genre:'Drama',
        rate:4,

    },
    {
      title:"The Father ",
        description:'A man refuses all assistance from his daughter as he ages. As he tries to make sense of his changing circumstances, he begins to doubt his loved ones, his own mind and even the fabric of his reality.',
        posterURL:"https://m.media-amazon.com/images/M/MV5BZGJhNWRiOWQtMjI4OS00ZjcxLTgwMTAtMzQ2ODkxY2JkOTVlXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg",
        year:'2020',
        type:'Movie',
        genre:'Drama|Mistery',
        rate: 3,

    },
    {
      title:"The Theory Of Everything ",
        description:'A look at the relationship between the famous physicist Stephen Hawking and his wife.',
        posterURL:"https://m.media-amazon.com/images/M/MV5BMTAwMTU4MDA3NDNeQTJeQWpwZ15BbWU4MDk4NTMxNTIx._V1_.jpg",
        year:'2014',
        type:'Movie',
        genre:'Biography|Romance|Drama',
        rate:4,
    }
    
])
const getData=(w)=>{
setKeyword(w)
console.log(keyword)
}
const dataRate=(s)=>{
setStar(s)
console.log(s)
}
const addMovie = (newMovies) => {
  setMovies([...movies, newMovies]);
  console.log([...movies, newMovies])
};
  return (
    <div className="App">
      <nav class="navbar navbar-dark bg-dark">
      <Search getData={getData} dataRate={dataRate} star={star}/>
      <span style={{color:'white',fontSize:'x-large',textAlign:'center',fontWeight:'bold',fontFamily:'Montserrat'}}>BERRY AND CHERRY VISION </span>
      <Add addMovie={addMovie} />
      </nav>
      <MovieList movies={movies.filter(el=>el.rate>=star && el.title.toLowerCase().includes(keyword.trim().toLowerCase()))}/>
      
    </div>
  );
}

export default App;
