import React , { useState, useEffect } from 'react';
import {Link, useLocation} from 'react-router-dom';

import {FaRegEdit} from "react-icons/fa";
import {RiArrowGoBackFill} from "react-icons/ri";
import {HiSave} from "react-icons/hi";
import './editplayer.css';


const EditPlayer = () => {
    const location=useLocation();
    const [firstName, setFirstName] = useState(location.state.customer.FirstName);
    const [lastName, setLastName] = useState(location.state.customer.LastName);
    const [contactNumber, setContactNumber] = useState(location.state.customer.ContactNumber);
    const [campaignName, setCampaignName] = useState(location.state.customer.CampaignName);
    const [sessions, setSessions] = useState(location.state.customer.Sessions);

    const save = (event) => {
      <Link to="/" ><HiSave /> Submit </Link>
      // event.preventDefault();
      // createUser();
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
                <button type='submit'>Submit</button>
                {/* <button onClick={save}>Submit</button> */}
            </form>
        </div>    
      </>
    )
}

export default EditPlayer;