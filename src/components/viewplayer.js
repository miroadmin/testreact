import React from 'react';
import Button from '@mui/material/Button';
import './playerstable.css';


const ViewPlayer = (props) => {
    return (
        <div>
            <div className='container'>
                <form onSubmit={props.callBack}>
                    <div className='form_element'>
                        <label>First Name</label>
                        <input 
                            type='text' 
                            value={props.FirstName}
                            readOnly
                        />
                    </div>
                    <div className='form_element'>
                        <label>Last Name</label>
                        <input 
                            type='text' 
                            value={props.LastName}
                            readOnly
                        />
                    </div>

                    <div className='form_element'>
                        <label>Contact Number</label>
                        <input 
                            type='text' 
                            value={props.ContactNumber}
                            readOnly
                        />
                    </div>

                    <div className='form_element'>
                        <label>Campaign Name</label>
                        <input 
                            type='text' 
                            value={props.CampaignName}
                            readOnly
                        /> 
                    </div>

                    <div className='form_element'>
                        <label>Sessions</label>
                        <input 
                            type='text' 
                            value={props.Sessions}
                            readOnly
                        />
                    </div>
                    <Button  style={{marginLeft:'200px'}} type='submit' variant="contained" color="success" size="large">Back</Button>
                </form>
            </div>
        </div>
      )
  }

export default ViewPlayer;