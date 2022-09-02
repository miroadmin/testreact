import {Routes, Route, Link, BrowserRouter} from 'react-router-dom';
import NewPlayer from "./components/newplayer"
import EditPlayer from "./components/editplayer"
import ListPlayers from "./components/playerslist"
import {MdViewList, MdPlaylistAdd } from "react-icons/md";
import './App.css';

var customers =  [{FirstName: 'Joe', LastName: 'Caputo', ContactNumber: '07658312387', CampaignName: 'Black Rain', Sessions: 'Black Rain'},
{FirstName: 'Piper', LastName: 'Chapman', ContactNumber: '07142548798', CampaignName: 'Black Rain', Sessions: 'One Last Riddle'},
{FirstName: 'Tasha', LastName: 'Jefferson', ContactNumber: '07998987220', CampaignName: 'Black Rain', Sessions: 'The Burning Plague'},
{FirstName: 'Gloria', LastName: 'Mendoza', ContactNumber: '07512645873', CampaignName: 'Black Rain', Sessions: 'The Sea Witch'},
{FirstName: 'Theodore', LastName: 'Bagwell', ContactNumber: '07561384896', CampaignName: 'One Last Riddle', Sessions: 'Tomb of Horrors'}]

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
          <Route path="/new" exact element={<NewPlayer/>} />
          <Route path="/edit" exact element={<EditPlayer/>} />
          <Route path="/" exact element={<ListPlayers  customer={customers} />} />
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
            <Link to="/new"><MdPlaylistAdd/> New Player </Link> 
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
