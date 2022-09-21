import React , { useState, useEffect } from 'react';

import Button from '@mui/material/Button';
import AddToPhotosIcon from '@mui/icons-material/AddToPhotos';
import {RiDeleteBin6Line} from "react-icons/ri";
import {FaRegEdit} from "react-icons/fa";
import './playerstable.css';

const PlayersTable = (props) => {
    const [flag, setFlag] = useState('list');
    const [customers, setCustomers] = useState(props.players);
    const [player, setPlayer] = useState('');
    const [key, setKey] = useState('');
    const [del, setDel] = useState(false);

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

            setCustomers((prevState) => ([
                    ...prevState,
                    {
                        FirstName: firstName,
                        LastName: lastName,
                        ContactNumber: contactNumber,
                        CampaignName: campaignName,
                        Sessions: sessions,
                    },
                ]));
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
/*************************************DELETE PLAYER*************************************************************** */

    const deleteLine  = (keey) => {
        const r = window.confirm('Are you sure you wish to delete this player');
        if (r) {             
            setDel(true);
            setKey(keey);
        }
    }  

    useEffect(() => {  
        if (del)  
            customers.splice(key,1);
        setDel(false);
    }, [del, key, customers])



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
            setCustomers(
                customers.map((customer,id) =>
                    id === key
                        ? { ...customer, 
                                    FirstName: firstName,
                                    LastName: lastName,
                                    ContactNumber: contactNumber,
                                    CampaignName: campaignName,
                                    Sessions: sessions
                            }
                        : { ...customer }
                )
            );
        }
        setFlag("list")
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

/********************************MAIN******************************************************** */
    if (flag==='edit') {
        return (
            <span>
                <EditPlayer kluc={key} player={player} customer={customers}/>
            </span>   
            )
        }
    else if (flag==='add') {
            return (
                <span>
                <AddPlayer customers={customers} setCustomers={setCustomers}/>
            </span>
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
                    </tr>
                </thead>
                <tbody>
                    {customers.map((line,id) => {
                        return (
                                <tr key={id} className='listTable'>
                                    <td> {line.FirstName} </td>
                                    <td> {line.LastName} </td>
                                    <td> {line.ContactNumber} </td>
                                    <td> {line.CampaignName} </td>
                                    <td> {line.Sessions } </td>
                                    <td><FaRegEdit  style={{fontSize: '25px', color: 'rgb(118, 2, 4)', height:'30px'}} onClick={() => editLine(id, line)}/></td>
                                    <td><RiDeleteBin6Line  style={{fontSize: '25px', color: 'rgb(118, 2, 4)', height:'30px'}} onClick={() => deleteLine(id)}/></td>
                                </tr> 
                        )
                    })}
                </tbody>
        </table>
        )
    }
}

export default PlayersTable;