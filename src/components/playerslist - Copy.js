import React , { useState } from 'react';

import {RiDeleteBin6Line} from "react-icons/ri";
import {FaRegEdit} from "react-icons/fa";
import './playerslist.css';
import { MdColorLens } from 'react-icons/md';


const ListPlayers = (props) => {

    const styles = {
        'font-size': '25px',
    }

    const changeIcon  = () => {
        styles.color = "green";
        console.log('tady')
    }
    
    const deleteLine  = (key) => {
        const r = window.confirm('Are you sure you wish to delete this customer');
        if (r == true) {      
            props.customer.splice(key,1);
            console.log(props.customer );
        }
    }

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
                            <span onMouseEnter={changeIcon}> {line.Sessions } </span>
                            <span> {<FaRegEdit onMouseEnter={changeIcon}/>} </span>
                            <span> {<RiDeleteBin6Line  onClick={() => deleteLine(key)}/> } </span>

                        </div>
                    )
                })}
            </div>   
            <hr/>
        </>
        
    )
}

export default ListPlayers;