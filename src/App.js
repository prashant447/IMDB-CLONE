
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './component/home/Home';
import Header from './component/header/Header';
import MovieList from './component/movielist/MovieList';
import MovieDetail from './component/moveDetail/MovieDetail';

function App() {
  return (
    <>
        <BrowserRouter>
        <Header/>
        <Routes>
          <Route exact path='/' element = {<Home/>}></Route>
          <Route exact path='/movies/:type' element = {<MovieList/>}></Route>
          <Route exact path='/movie/:id' element = {<MovieDetail/>}></Route>
          <Route exact path='*/' element = {<h1>Error</h1>}></Route>
        </Routes>
        </BrowserRouter>
    






    </>
  );
}

export default App;
