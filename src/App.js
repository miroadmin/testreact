import {Routes, Route, Link, BrowserRouter} from 'react-router-dom';
import NewPlayer from "./components/newplayer"
import ListPlayers from "./components/playerslist"
import {MdViewList, MdPlaylistAdd } from "react-icons/md";
import './App.css';


function App() {
  return (
    <>
      <header className="header">
          Players
      </header>
        <BrowserRouter>
              <SelectionMode/>
        </BrowserRouter>
    </>

  );
}

const SelectionMode = () => {
  return (
    <div>
      <Header/>
      <Routes>
          <Route path="/newplayer" exact element={<NewPlayer />} />
          <Route path="/" exact element={<ListPlayers />} />
      </Routes>
      <Footer/>
    </div>
  )
}

const Header = () => {
  return (
    <>
      <div className='menu'> 
            <Link to="/"> <MdViewList /> Players List </Link>
            <Link to="/newplayer"><MdPlaylistAdd/> New Player </Link> 
      </div> 
      <hr />

    </>
  );
};

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footerText'>
        Miro 2022
      </div>
    </div>
  )
}

export default App;
