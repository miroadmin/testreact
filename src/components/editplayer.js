import React from 'react';
import {Link, useLocation} from 'react-router-dom';

import {FaRegEdit} from "react-icons/fa";


const EditPlayer = () => {
    const location=useLocation();
    console.log(location.state.customer)
    return (
    <>
        <div><Link to="/" ><FaRegEdit /> Back </Link></div>

      <div> {location.state.key} </div>
      <div> {location.state.customer.FirstName} </div>
    </>
    )
}

export default EditPlayer;