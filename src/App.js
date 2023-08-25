import { actions,original,comedymovies } from './url';
import './App.css';
import Banner from './Components/Banner/Banner';
import NavBar from './Components/Navbar/NavBar';
import RowPost from './Components/RowPost/RowPost';


function App() {
  return (
   <div className='App'>
  <NavBar/>
  <Banner/>
  <RowPost url={original} title ="Netflix Orginals" />
  <RowPost url={actions} title ="Action" isSmall/>
  <RowPost url={comedymovies} title ="Comdey Movie" isSmall/>
   </div>
  );
}

export default App;
