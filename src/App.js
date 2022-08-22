import {Routes, Route, Link, BrowserRouter} from 'react-router-dom';
import NewPlayer from "./components/newplayer"
import ListPlayers from "./components/playerslist"
import './App.css';

function App() {
  return (
    <>
      <header className="header">
          Players
        <BrowserRouter>
              <SelectionMode/>
        </BrowserRouter>
      </header>
    </>

  );
}

const SelectionMode = () => {
  return
    <div>
      <Header/>
      <Routes>
          <Route path="/newplayer" exact element={<NewPlayer />} />
          <Route path="/" exact element={<ListPlayers />} />
      </Routes>
      <Footer/>
    </div>
}

const Header = () => {
  return (
    <div>
        <Link to="/newplayer"> New Player </Link> 
        <Link to="/"> Players list </Link>
    </div> 


  );
};

const Footer = () => {
  return (
    <div>
    Footer
    </div>
  )
}

export default App;
