import React , { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import './editplayer.css';


const EditPlayer = (props) => {

    const [modif, setModif] = useState(false);
    const [firstName, setFirstName] = useState(props.customer.FirstName);
    const [lastName, setLastName] = useState(props.customer.LastName);
    const [contactNumber, setContactNumber] = useState(props.customer.ContactNumber);
    const [campaignName, setCampaignName] = useState(props.customer.CampaignName);
    const [sessions, setSessions] = useState(props.customer.Sessions);
    const key = props.key;

    useEffect(() => {  
      if (modif)  
        {
          props.players.splice(key,1);
          console.log(props.players);
        }
    },[modif])
    
    const save = () => {
      if (firstName===props.customer.FirstName  && lastName===props.customer.LastName && 
        contactNumber===props.customer.ContactNumber && campaignName===props.customer.CampaignName && 
          sessions === props.customer.Sessions)
          {
            return 1
          }
          else
          { 
            setModif(true);
        }
    }
    alert('tady')
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

export default EditPlayer;