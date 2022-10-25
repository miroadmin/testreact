import {Routes, Route, Link, BrowserRouter} from 'react-router-dom';
import Players from "./components/players";
import PlayersTable from "./components/playerstable";
import PlayersGridSimple from "./components/playersgridsimple";
import PlayersGridX from "./components/playersgridx";
import {MdViewList, MdPlaylistAdd } from "react-icons/md";
import './App.css';




function App() {

  return (
    <>
      <BrowserRouter>
          <Header/>
          <Routes>
              <Route path="/list" exact element={<Players/>} />
              <Route path="/redux" exact element={<PlayersTable />} />
              <Route path="/" exact element={<PlayersGridX />} />
              <Route path="/grid" exact element={<PlayersGridSimple />} />
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
            <Link to="/" style={{marginLeft:"50px" , color: 'rgb(227, 227, 232)' }}> <MdViewList />GridX </Link>
            <Link to="/redux" style={{marginLeft:"50px" , color: 'rgb(227, 227, 232)'} }><MdPlaylistAdd />Redux</Link>      
            <Link to="/grid" style={{marginLeft:"50px" , color: 'rgb(227, 227, 232)' }}> <MdViewList />Grid </Link>
            <Link to="/list" style={{marginLeft:"50px" , color: 'rgb(227, 227, 232)' }}> <MdViewList />Classics </Link>
          </span>
      </header>
      <hr />

    </div>
  );
};

const Footer = () => {
  return (
    <div className='footer'>
      <a className='footerGitHub' href="https://github.com/miroadmin/testreact" target="_blank" rel="noopener noreferrer" > Visit GitHub</a>
      <span className='footerText'>Miro 2022</span>
    </div>
  )
}

const NoPage = () => {
  return <h1>404</h1>;
};

export default App;
