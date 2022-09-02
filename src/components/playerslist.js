import React , { useState, useEffect } from 'react';
import {Link } from 'react-router-dom';

import {RiDeleteBin6Line} from "react-icons/ri";
import {FaRegEdit} from "react-icons/fa";
import './playerslist.css';


const ListPlayers = (props) => {
    
    const [del, setDel] = useState(false);
    
    useEffect((key) => {  
        if (del)  
           props.customer.splice(key,1);
        setDel(false);
    }, [del, props.customer])
    
    
    const DeleteLine  = (key) => {
        const r = window.confirm('Are you sure you wish to delete this player');
        if (r) {             
            setDel(true);
        }
    }   


    // const changeIcon  = () => {
    //     console.log('tady')
    // }
    
    return (
        <>
            <div className='listTitle'>
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
                           <span> <Link to="/edit" state={{customer:line,key:key}}><FaRegEdit /></Link>  </span> 
                            <span> {<RiDeleteBin6Line  onClick={() => DeleteLine(key)}/> } </span>

                        </div>
                    )
                })}
            </div>   
            <hr/>
        </>
        
    )
}

export default ListPlayers;