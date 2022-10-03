import {Routes, Route, Link, BrowserRouter} from 'react-router-dom';

import Players from "./components/players";
import PlayersTable from "./components/playerstable";
import {MdViewList, MdPlaylistAdd } from "react-icons/md";
import './App.css';




function App() {

  return (
    <>
      <BrowserRouter>
          <Header/>
          <Routes>
              <Route path="/list" exact element={<Players />} />
              <Route path="/" exact element={<PlayersTable />} />
              <Route path="*" element={<NoPage />} />
          </Routes>
        </BrowserRouter>
      <Footer/>
    </>

  );
}

<Players />

const Header = () => {
  return (
    <div>
      <header className="header"> 
          <span className="titleHeader">Players </span>
          <span className="titleButton"> 
            <Link to="/" ><MdPlaylistAdd /> ver. Redux  </Link>      
            <Link to="/list" style={{marginLeft:"50px"}}> <MdViewList /> ver. without Redux </Link>
          </span>
      </header>
      <hr />

    </div>
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

const NoPage = () => {
  return <h1>404</h1>;
};

export default App;
