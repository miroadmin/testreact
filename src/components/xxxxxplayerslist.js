import React , { useState, useEffect } from 'react';
import {RiDeleteBin6Line} from "react-icons/ri";
import {FaRegEdit} from "react-icons/fa";
import './playerslist.css';


const ListPlayers = (props) => {
    
    const [del, setDel] = useState(false);
    const [keey, setKeey] = useState('');
    
    const deleteLine  = (id) => {
        const r = window.confirm('Are you sure you wish to delete this player');
        if (r) {             
            setDel(true);
            setKeey(id);
        }
    }  

    useEffect(() => {  
        if (del)  
            props.listPlayers.splice(keey,1);
        setDel(false);
    }, [del, props.listPlayers])

    const editLine  = (id,line) => {
        props.setFlag("edit");
        props.setPlayer(line);
        props.setKey(id);
    }  

    
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
                {    console.log('list:',props.listPlayers)}
                {props.listPlayers
                    .map((line,id) => {
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

export default ListPlayers;