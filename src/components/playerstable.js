import React , { useState} from 'react';
import {useSelector, useDispatch} from "react-redux";
import {inser, delet, modif} from './redux.stories';
import ViewPlayer from "./viewplayer";


import Button from '@mui/material/Button';
import AddToPhotosIcon from '@mui/icons-material/AddToPhotos';
import SearchIcon from '@mui/icons-material/Search';
import {RiDeleteBin6Line} from "react-icons/ri";
import {FaRegEdit} from "react-icons/fa";
import './playerstable.css';

const PlayersTable = () => {
    const customers = useSelector((state) => state.players.clients);
    const dispatch = useDispatch()
    const [flag, setFlag] = useState('list');
    const [player, setPlayer] = useState('');
    const [key, setKey] = useState('');
    const [session, setSession] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const [campaignName, setCampaignName] = useState('');
    const [sessions, setSessions] = useState('');

    /****************************** ADD PLAYER******************************************************** */
    const addLine  = () => {
        setFlag("add");
    }  

    const AddPlayer = () => {
        const [firstName, setFirstName] = useState('');
        const [lastName, setLastName] = useState('');
        const [contactNumber, setContactNumber] = useState('');
        const [campaignName, setCampaignName] = useState('');
        const [sessions, setSessions] = useState('');      

        /*      ADD PLAYER           */
        const add = () => {
            /*       DUPLICATE PLAYER           */
            let test = customers.filter((player => firstName===player.FirstName && (lastName===player.LastName) &&
                (contactNumber===player.ContactNumber) && (campaignName===player.CampaignName) && 
                (sessions === player.Sessions) ) ).map((filterplayer) => {
                        return(filterplayer)
            });
            
            if (test.length > 0)  {
                alert('Just so you know, you already have this player in the database with this game!')
            }
            dispatch(inser({FirstName: firstName,
                            LastName: lastName,
                            ContactNumber: contactNumber,
                            CampaignName: campaignName,
                            Sessions: sessions,}));
                setFlag("list")
        };
        
    
        return (
          <>
            <div className='container'>
                <form onSubmit={add}>
                    <div className='form_element'>
                        <label>First Name</label>
                        <input 
                            type='text' 
                            value={firstName}
                            onChange={ (e) => setFirstName(e.target.value)}/>
                    </div>
    
                    <div className='form_element'>
                        <label>Last Name</label>
                        <input 
                            type='text' 
                            value={lastName}
                            onChange={ (e) => setLastName(e.target.value)}/>
                    </div>
    
                    <div className='form_element'>
                        <label>Contact Number</label>
                        <input 
                            type='text' 
                            value={contactNumber}
                            onChange={ (e) => setContactNumber(e.target.value)}/>
                    </div>
    
                    <div className='form_element'>
                        <label>Campaign Name</label>
                        <select value={campaignName} 
                          onChange={(e) => setCampaignName(e.target.value)}>
                            <option value="Black Rain">Black Rain</option>
                            <option value="One Last Riddle">One Last Riddle</option>
                            <option value="The Burning Plague">The Burning Plague</option>
                            <option value="The Sea Witch">The Sea Witch</option>
                            <option value="Tomb of Horrors">Tomb of Horrors</option>
                            <option value=""></option>
                        </select>   
                    </div>
    
                    <div className='form_element'>
                        <label>Sessions</label>
                        <select value={sessions} 
                          onChange={(e) => setSessions(e.target.value)}>
                            <option value="Black Rain">Black Rain</option>
                            <option value="One Last Riddle">One Last Riddle</option>
                            <option value="The Burning Plague">The Burning Plague</option>
                            <option value="The Sea Witch">The Sea Witch</option>
                            <option value="Tomb of Horrors">Tomb of Horrors</option>
                            <option value=""></option>
                        </select>  
                    </div>
                    <Button  style={{marginLeft:'200px'}} type='submit' variant="contained" color="success" size="large">Submit</Button>
                </form>
            </div>    
          </>
        )
    }
/*************************************DELETE PLAYER*************************************************************** */

    const deleteLine  = (key) => {
        const answer = window.confirm('Are you sure you wish to delete this player');
        if (answer) {             
            dispatch( delet(key));
        }
    }  


/***********************************EDIT PLAYER***************************************************** */
    const editLine  = (key,line) => {
        setFlag("edit");
        setPlayer(line);
        setKey(key);
    }  

const EditPlayer = () => {
    const [firstName, setFirstName] = useState(player.FirstName);
    const [lastName, setLastName] = useState(player.LastName);
    const [contactNumber, setContactNumber] = useState(player.ContactNumber);
    const [campaignName, setCampaignName] = useState(player.CampaignName);
    const [sessions, setSessions] = useState(player.Sessions);
    
    const save = () => {
        if (!(firstName===player.FirstName)  || !(lastName===player.LastName) || 
            !(contactNumber===player.ContactNumber) || !(campaignName===player.CampaignName) || 
            !(sessions === player.Sessions) )
            { 
                dispatch( modif({FirstName: firstName, LastName: lastName, ContactNumber: contactNumber, CampaignName: campaignName, Sessions: sessions, key}))
            }
        setFlag("list");
    }

    return (
      <>
        <div className='container'>
            <form onSubmit={save}>
                <div className='form_element'>
                    <label>First Name</label>
                    <input 
                        type='text' 
                        value={firstName}
                        onChange={ (e) => setFirstName(e.target.value)}/>
                </div>

                <div className='form_element'>
                    <label>Last Name</label>
                    <input 
                        type='text' 
                        value={lastName}
                        onChange={ (e) => setLastName(e.target.value)}/>
                </div>

                <div className='form_element'>
                    <label>Contact Number</label>
                    <input 
                        type='text' 
                        value={contactNumber}
                        onChange={ (e) => setContactNumber(e.target.value)}/>
                </div>

                <div className='form_element'>
                    <label>Campaign Name</label>
                    <select value={campaignName} 
                      onChange={(e) => setCampaignName(e.target.value)}>
                        <option value="Black Rain">Black Rain</option>
                        <option value="One Last Riddle">Black Rain</option>
                        <option value="The Burning Plague">The Burning Plague</option>
                        <option value="The Sea Witch">The Sea Witch</option>
                        <option value="Tomb of Horrors">Tomb of Horrors</option>
                        <option value=""></option>
                    </select>   
                </div>

                <div className='form_element'>
                    <label>Sessions</label>
                    <select value={sessions} 
                      onChange={(e) => setSessions(e.target.value)}>
                        <option value="Black Rain">Black Rain</option>
                        <option value="One Last Riddle">One Last Riddle</option>
                        <option value="The Burning Plague">The Burning Plague</option>
                        <option value="The Sea Witch">The Sea Witch</option>
                        <option value="Tomb of Horrors">Tomb of Horrors</option>
                        <option value=""></option>
                    </select>  
                </div>
                <Button  style={{marginLeft:'200px'}} type='submit' variant="contained" color="success" size="large">Submit</Button>
            </form>
        </div>    
      </>
    )
}

/********************************View******************************************************** */
    const viewPlayer = (FirstName, LastName, ContactNumber, CampaignName, Sessions) => {
        setFlag("view");
        setFirstName(FirstName);
        setLastName(LastName);
        setContactNumber(ContactNumber);
        setCampaignName(CampaignName);
        setSessions(Sessions);
    }
    
 const ViewCallBack = () => {
        setFlag("list");
    }

/********************************MAIN******************************************************** */
    if (flag==='edit') {
        return (
            <span>
                <EditPlayer  />
            </span>   
            )
        }
    else if (flag==='add') {
            return (
                <span> <AddPlayer /> </span>
        )
    }
    else if (flag==='view') {
        return (
            <>
            <span> <ViewPlayer  FirstName={firstName}  LastName={lastName} ContactNumber={contactNumber} CampaignName={campaignName} Sessions={sessions} callBack={ViewCallBack} /></span>
            </>
            )
    }
    else    {

        return (
            <table>
                <thead >
                    <tr className='titleTable'>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Telephone</th>
                        <th>Campaign Name</th>
                        <th>Sessions</th>
                        <th><AddToPhotosIcon  style={{fontSize: '30px', color: 'rgb(118, 2, 4)'}} onClick={() => addLine()}/></th>
                        <th className='th1'></th>
                        <th className='th1'></th>
                        <th className='th1'></th>
                        <th className='th1'></th>
                        <th className='th2' >   
                                <select value={session} style={{fontSize: '20px', width: '245px', paddingTop:'3px'}}
                                    onChange={(e) => setSession(e.target.value)}>
                                        <option value="Black Rain">Black Rain</option>
                                        <option value="One Last Riddle">One Last Riddle</option>
                                        <option value="The Burning Plague">The Burning Plague</option>
                                        <option value="The Sea Witch">The Sea Witch</option>
                                        <option value="Tomb of Horrors">Tomb of Horrors</option>
                                        <option value=""></option>
                                </select>  
                        </th>
                        <th className='th3' ><SearchIcon  style={{fontSize: '30px', color: 'rgb(118, 2, 4)'}} /></th>
                    </tr>
                </thead>
                <tbody>
                    {customers.filter(section => section.Sessions.includes(session)).map((line,id) => {
                        return (
                                <tr key={id} className='listTable'>
                                    <td  className='td1' onClick= { () => {viewPlayer (line.FirstName, line.LastName, line.ContactNumber,line.CampaignName,line.Sessions )}}> {line.FirstName} </td>
                                    <td  className='td1' onClick= { () => {viewPlayer (line.FirstName, line.LastName, line.ContactNumber,line.CampaignName,line.Sessions )}} > {line.LastName} </td>
                                    <td  className='td1' onClick= { () => {viewPlayer (line.FirstName, line.LastName, line.ContactNumber,line.CampaignName,line.Sessions )}}> {line.ContactNumber} </td>
                                    <td  className='td1' onClick= { () => {viewPlayer (line.FirstName, line.LastName, line.ContactNumber,line.CampaignName,line.Sessions )}}> {line.CampaignName} </td>
                                    <td  className='td1' onClick= { () => {viewPlayer (line.FirstName, line.LastName, line.ContactNumber,line.CampaignName,line.Sessions )}}> {line.Sessions } </td>
                                    <td><FaRegEdit  style={{fontSize: '25px', color: 'rgb(118, 2, 4)'}} onClick={() => editLine(id, line)}/></td>
                                    <td><RiDeleteBin6Line  style={{fontSize: '25px', color: 'rgb(118, 2, 4)'}} onClick={() => deleteLine(id)}/></td>
                                </tr> 
                        )
                    })}
                </tbody>
        </table>
        )
    }
}

export default PlayersTable;