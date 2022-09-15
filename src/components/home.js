import React , { useState, useEffect } from 'react';
import {RiDeleteBin6Line} from "react-icons/ri";
import {FaRegEdit} from "react-icons/fa";
import EditPlayer from './editplayer';
import AddPlayer from './editplayer';
import './playerslist.css';

const Players = (props) => {
    const [flag, setFlag] = useState('list');
    const [customers, setCustomers] = useState(props.players);
    const [player, setPlayer] = useState('');
    const [key, setKey] = useState('');
    const [del, setDel] = useState(false);
    
    const deleteLine  = (keey) => {
        const r = window.confirm('Are you sure you wish to delete this player');
        if (r) {             
            setDel(true);
            setKey(keey);
        }
    }  

    useEffect(() => {  
        if (del)  
            props.customer.splice(key,1);
        setDel(false);
    }, [del, props.customer])

    const editLine  = (key,line) => {
        setFlag("edit");
        setPlayer(line);
        setKey(key);
    }  

    const addLine  = () => {
        setFlag("add");
    }  

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
                <AddPlayer kluc={key} player={player} customer={customers}/>
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
                    <RiDeleteBin6Line  style={{fontSize: '20px', color: 'rgb(118, 2, 4)'}} onClick={() => addLine()}/> 
                </div>
                <hr/>
                <div>
                    {props.customer
                        .map((line,key) => {
                        return (
                            <div className='list'> 
                                <span> {line.FirstName} </span>
                                <span> {line.LastName} </span>
                                <span> {line.ContactNumber} </span>
                                <span> {line.CampaignName} </span>
                                <span> {line.Sessions } </span>
                                <FaRegEdit  style={{fontSize: '20px', color: 'rgb(2, 2, 118)'}} onClick={() => editLine(key, line)}/>
                                <RiDeleteBin6Line  style={{fontSize: '20px', color: 'rgb(118, 2, 4)'}} onClick={() => deleteLine(key)}/> 
                            </div>
                        )
                    })}
                </div>   
                <hr/>
            </div>
        )
    }
}

export default Home;