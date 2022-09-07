import React , { useState, useEffect } from 'react';
import {RiDeleteBin6Line} from "react-icons/ri";
import {FaRegEdit} from "react-icons/fa";
import './playerslist.css';


const ListPlayers = (props) => {
    
    const [del, setDel] = useState(false);
    
    const deleteLine  = (key) => {
        const r = window.confirm('Are you sure you wish to delete this player');
        if (r) {             
            setDel(true);
        }
    }  

    useEffect((key) => {  
        if (del)  
            props.customer.splice(key,1);
        setDel(false);
    }, [del, props.customer])

    const editLine  = (line, key) => {
            props.setFlag("edit");
            props.setPlayer(line);
    }  

    return (
        <div>
             <div className='title'>
                <span>First Name</span>
                <span>Last Name</span>
                <span>Contact Number</span>
                <span>Campaign Name</span>
                <span>Session</span>
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
                            <FaRegEdit  style={{fontSize: '20px', color: 'rgb(2, 2, 118)'}} onClick={() => editLine(line, key)}/>
                            <RiDeleteBin6Line  style={{fontSize: '20px', color: 'rgb(118, 2, 4)'}} onClick={() => deleteLine(key)}/> 
                        </div>
                    )
                })}
            </div>   
            <hr/>
        </div>
        
    )
}

export default ListPlayers;