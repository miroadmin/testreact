import React , { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import './editplayer.css';


const AddPlayer = (props) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const [campaignName, setCampaignName] = useState('');
    const [sessions, setSessions] = useState('');
    // const [customers,setCustomers] = useState(props.customers)

    const add = () => {
        console.log('pred',props.customers)
        props.setCustomers((prevState) => ([
            ...prevState,
            {
                FirstName: "firstName",
                LastName: "lastName",
                ContactNumber: "contactNumber",
                CampaignName: "campaignName",
                Sessions: "sessions",
                // FirstName: firstName,
                // LastName: lastName,
                // ContactNumber: contactNumber,
                // CampaignName: campaignName,
                // Sessions: sessions,
            },
        ]));
        console.log('po add',props.customers)
        // props.setCustomers(customers)
        alert('sss')
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

export default AddPlayer;