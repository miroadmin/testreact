import React , { useState, useEffect } from 'react';

import Button from '@mui/material/Button';
import AddToPhotosIcon from '@mui/icons-material/AddToPhotos';
import {RiDeleteBin6Line} from "react-icons/ri";
import {FaRegEdit} from "react-icons/fa";
import './playerslist.css';

const players = 
[{FirstName: 'Joe', LastName: 'Caputo', ContactNumber: '07658312387', CampaignName: 'Black Rain', Sessions: 'Black Rain'},
{FirstName: 'Piper', LastName: 'Chapman', ContactNumber: '07142548798', CampaignName: 'Black Rain', Sessions: 'One Last Riddle'},
{FirstName: 'Tasha', LastName: 'Jefferson', ContactNumber: '07998987220', CampaignName: 'Black Rain', Sessions: 'The Burning Plague'},
{FirstName: 'Gloria', LastName: 'Mendoza', ContactNumber: '07512645873', CampaignName: 'Black Rain', Sessions: 'The Sea Witch'},
{FirstName: 'Theodore', LastName: 'Bagwell', ContactNumber: '07561384896', CampaignName: 'One Last Riddle', Sessions: 'Tomb of Horrors'},
{FirstName: 'Brad', LastName: 'Bellick', ContactNumber: '07883256418', CampaignName: 'One Last Riddle',Sessions: ''},
{FirstName: 'Lincoln', LastName: 'Burrows', ContactNumber: '07112356983', CampaignName: 'One Last Riddle',Sessions: ''},
{FirstName: 'Fernando', LastName: 'Sucre', ContactNumber: '07963212321', CampaignName: 'One Last Riddle',Sessions: ''},
{FirstName: 'Sara', LastName: 'Tancredi', ContactNumber: '07954186684', CampaignName: 'One Last Riddle',Sessions: ''},
{FirstName: 'Daryl', LastName: 'Dixon', ContactNumber: '07325649845', CampaignName: 'The Burning Plague',Sessions: ''},
{FirstName: 'Maggie', LastName: 'Greene', ContactNumber: '07459832185', CampaignName: 'The Burning Plague',Sessions: ''},
{FirstName: 'Carol', LastName: 'Peletier', ContactNumber: '07989444568', CampaignName: 'The Burning Plague',Sessions: ''},
{FirstName: 'Eugene', LastName: 'Porter', ContactNumber: '07774854987', CampaignName: 'The Burning Plague',Sessions: ''},
{FirstName: 'Billy', LastName: 'Cranston', ContactNumber: '007845222547', CampaignName: 'The Sea Witch',Sessions: ''},
{FirstName: 'Kimberly', LastName: 'Hart', ContactNumber: '07815307459', CampaignName: 'The Sea Witch',Sessions: ''},
{FirstName: 'Trini', LastName: 'Kwan', ContactNumber: '07548755285', CampaignName: 'The Sea Witch',Sessions: ''},
{FirstName: 'Tommy', LastName: 'Oliver', ContactNumber: '07989444568', CampaignName: 'The Sea Witch',Sessions: ''},
{FirstName: 'Jason', LastName: 'Scott', ContactNumber: '07774854987', CampaignName: 'The Sea Witch',Sessions: ''},
{FirstName: 'Zack', LastName: 'Taylor', ContactNumber: '07845222547', CampaignName: 'The Sea Witch',Sessions: ''},
{FirstName: 'Joyce', LastName: 'Byers', ContactNumber: '07954668187', CampaignName: 'Tomb of Horrors',Sessions: ''},
{FirstName: 'Dustin', LastName: 'Henderson', ContactNumber: '07889554857', CampaignName: 'Tomb of Horrors',Sessions: ''},
{FirstName: 'Jim', LastName: 'Hopper', ContactNumber: '07954845148', CampaignName: 'Tomb of Horrors',Sessions: ''},
{FirstName: 'Nancy', LastName: 'Wheeler', ContactNumber: '07445845711', CampaignName: 'Tomb of Horrors',Sessions: ''},
];

const Players = () => {
    const [flag, setFlag] = useState('list');
    const [customers, setCustomers] = useState(players);
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
            <div>
                <div className='title'>
                    <span>First Name</span>
                    <span>Last Name</span>
                    <span>Contact Number</span>
                    <span>Campaign Name</span>
                    <span>Session</span>
                    <AddToPhotosIcon  style={{fontSize: '30px', color: 'rgb(118, 2, 4)'}} onClick={() => addLine()}/> 
                </div>
                <hr/>
                <div>
                    {customers.map((line,id) => {
                        return (
                            <div key={id} className='list'> 
                                <span> {line.FirstName} </span>
                                <span> {line.LastName} </span>
                                <span> {line.ContactNumber} </span>
                                <span> {line.CampaignName} </span>
                                <span> {line.Sessions } </span>
                                <FaRegEdit  style={{fontSize: '20px', color: 'rgb(2, 2, 118)'}} onClick={() => editLine(id, line)}/>
                                <RiDeleteBin6Line  style={{fontSize: '20px', color: 'rgb(118, 2, 4)'}} onClick={() => deleteLine(id)}/> 
                            </div>
                        )
                    })}
                </div>   
                <hr/>
            </div>
        )
    }
}

export default Players;