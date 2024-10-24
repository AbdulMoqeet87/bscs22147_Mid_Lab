import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import MovieItem from './components/MovieItem';
import MovieList from './components/MovieList';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Hom from './Pages/Hom/hom';



function App() {
  return (
  <>
   <Router>
        <Routes>
          
          {/* <Route path='/' element={<Home/>}/>  */}
          <Route path='/' element={<hom/>}/>
          <Route path='/home' element={<Hom/>}/> 
        </Routes>
      </Router>

  </>
  );
}

export default App;
