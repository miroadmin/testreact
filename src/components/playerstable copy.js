import React , { useState, useEffect } from 'react';

import Button from '@mui/material/Button';
import AddToPhotosIcon from '@mui/icons-material/AddToPhotos';
import {RiDeleteBin6Line} from "react-icons/ri";
import {FaRegEdit} from "react-icons/fa";
import SortIcon from '@mui/icons-material/Sort';
import './playerstable.css';
var by = require('sortby');

const columns = [
    { label: "First Name", accessor: "FirstName", sortable: true },
    { label: "Last Name", accessor: "LastName", sortable: true },
    { label: "Telephone", accessor: "ContactNumber", sortable: true },
    { label: "Campaign Name", accessor: "CampaignName", sortable: true },
    { label: "Sessions", accessor: "Sessions", sortable: true },
   ];

const PlayersTable = (props) => {
    const [flag, setFlag] = useState('list');
    const [customers, setCustomers] = useState(props.players);
    const [player, setPlayer] = useState('');
    const [key, setKey] = useState('');
    const [del, setDel] = useState(false);
    const [sort, setSort] = useState(customers);
    const [sortHelp, setSortHelp] = useState(0);

    

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

    
    const changeSort = (flag) => {
        setSortHelp(flag)
    }

    useEffect(() => {  
        switch (sortHelp){
            case 1: 
                setSort(customers.sort(by({LastName: 1, FirstName: 1})));
                break;
            case 2: 
                setSort(customers.sort(by({CampaignName: 1, LastName: 1})));
                break;            
            case 3: 
                setSort(customers.sort(by({Sessions: 1, LastName: 1})));
                break;
            default:
                setSort(customers);
        }

    }, [sortHelp, sort, customers]);
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
                <div className='titleTable'>
                    <span>First Name</span>
                    <span>Last Name</span>
                    <SortIcon  style={{fontSize: '20px', color: 'rgb(2, 2, 118)'}} onClick={ () => changeSort(1)}/>
                    <span>Contact Number</span>
                    <span>Campaign Name</span>
                    <SortIcon  style={{fontSize: '20px', color: 'rgb(2, 2, 118)'}} onClick={ () => changeSort(2)}/>
                    <span>Session</span>
                    <SortIcon  style={{fontSize: '20px', color: 'rgb(2, 2, 118)'}} onClick={ () => changeSort(3)}/>
                    <AddToPhotosIcon  style={{fontSize: '30px', color: 'rgb(118, 2, 4)'}} onClick={() => addLine()}/> 
                </div>
                <hr/>
                <div>
                    {sort.map((line,id) => {
                        return (
                            <div key={id} className='listTable'> 
                
                                <span> {line.FirstName} </span>
                                <span> {line.LastName} </span>
                                <span> {line.ContactNumber} </span>
                                <span> {line.CampaignName} </span>
                                <span> {line.Sessions } </span>
                                <FaRegEdit  style={{fontSize: '20px', color: 'rgb(118, 2, 4)'}} onClick={() => editLine(id, line)}/>
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

export default PlayersTable;