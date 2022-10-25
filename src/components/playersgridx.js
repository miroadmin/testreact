import React , { useState, useCallback} from 'react';
import {useSelector, useDispatch} from "react-redux";
import {inser, deletX, modifX} from './redux.stories';
import ViewPlayer from "./viewplayer";

import { DataGrid, GridRowsProp, GridColDef , GridActionsCellItem, GridToolbar  } from '@mui/x-data-grid'
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Box from '@mui/material/Box';
import './playerstable.css';

const PlayersGridX = () => {
    const customers = useSelector((state) => state.players.clients);
    const dispatch = useDispatch()
    const [flag, setFlag] = useState('list');
    const [player, setPlayer] = useState('');
    const [key, setKey] = useState('');
    const [firstName, setFirstName] = useState('');
    const [session, setSession] = useState('');
    const [lastName, setLastName] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const [campaignName, setCampaignName] = useState('');
    const [sessions, setSessions] = useState('');
    const [pageSize, setPageSize] = useState(15);


    const columns: GridColDef[]  = [
        { field: 'id', headerName: 'ID', type:'number', width: 90},
        {field: 'FirstName', headerName: 'Firt Name',type:'string', editable: true , width: 250},
        {field: 'LastName', headerName: 'Last Name',type:'string',  width: 250},
        {field: 'ContactNumber', headerName: 'Telephone',type:'string', width: 200},
        {field: 'CampaignName', headerName: 'Campaign Name', type:'string',width: 230},
        {field: 'Sessions', headerName: 'Sessions',type:'string', width: 250},
        {field: 'actions',type: 'actions',
            getActions: (params) => [
                <GridActionsCellItem icon={<VisibilityIcon />} onClick={viewPlayer (params.id )} label='view' color='info' />,
                <GridActionsCellItem icon={<EditIcon />} onClick={editLine(params.id)}  label='edit' color='info'/>,
                <GridActionsCellItem icon={<DeleteIcon />} onClick={deleteLine(params.id)} label='delete' color='warning' />,
            ] 
          }
    ]; 

    /****************************** ADD PLAYER******************************************************** */
    const addLine  = () => {
        setFlag("add");
    }  

    const AddPlayer = () => {
        const [firstName, setFirstName] = useState('');
        const [lastName, setLastName] = useState('');
        const [contactNumber, setContactNumber] = useState('');
        const [campaignName, setCampaignName] = useState('');
        const [sessions, setSessions] = useState('');      
        const [id, setId] = useState(0);      

        /*      ADD PLAYER           */
        const add = () => {
            let test1='OK';
            /*       Empty data           */
            if (firstName==='' && lastName==='')
                {test1='empty'};
            /*       DUPLICATE PLAYER           */
            let test = customers.filter((player => key===player.id && (lastName===player.LastName) &&
            (contactNumber===player.ContactNumber) && (campaignName===player.CampaignName) && 
            (sessions === player.Sessions) ) ).map((filterplayer) => {
                return(filterplayer)
            });
            if (test.length > 0)  {
                alert('Just so you know, you already have this player in the database with this game!');
            }
            else if (test1==='empty')
                alert('Empty player!');
            else
                {   const ids = customers.map(object => {
                    return object.id;
                     });
                    const max = Math.max(...ids)+1;
                    dispatch(inser({FirstName: firstName,
                            LastName: lastName,
                            ContactNumber: contactNumber,
                            CampaignName: campaignName,
                            Sessions: sessions,
                            id:max,
                        }));
                }
            setFlag("list")
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
                            <option value="One Last Riddle">One Last Riddle</option>
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
/*************************************DELETE PLAYER*************************************************************** */

        const deleteLine  = useCallback(
            (key) => () => {
                setTimeout(() => {
                    customers.map((row,id) => {
                        if (row.id === key) {
                            const answer = window.confirm('Are you sure you wish to delete ' + row.LastName + ' ' +row.FirstName);
                            if (answer) {    
                                dispatch( deletX(key));
                            }
                        }
                    })             
                });
            },
            [],
        );
        
        
        
/***********************************EDIT PLAYER***************************************************** */
        const editLine   = useCallback(
            (key) => () => {
                setTimeout(() => {
                    customers.map((row,id) => {
                        if (row.id === key) {
                            setFlag("edit");
                            setPlayer(row);
                            setKey(key);
                        }
                    })             
                });
            },
            [],
        );

        const EditPlayer = () => {
            const [firstName, setFirstName] = useState(player.FirstName);
            const [lastName, setLastName] = useState(player.LastName);
            const [contactNumber, setContactNumber] = useState(player.ContactNumber);
            const [campaignName, setCampaignName] = useState(player.CampaignName);
            const [sessions, setSessions] = useState(player.Sessions);
            
            const save = () => {
                if (!(firstName===player.FirstName)  || !(lastName===player.LastName) || 
                    !(contactNumber===player.ContactNumber) || !(campaignName===player.CampaignName) || 
                    !(sessions === player.Sessions) )
                    { 
                        dispatch( modifX({FirstName: firstName, LastName: lastName, ContactNumber: contactNumber, CampaignName: campaignName, Sessions: sessions, key}))
                    }
                setFlag("list");
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
                        <Button  style={{marginLeft:'200px'}} type='submit' variant="contained" color="success" size="large">Submit</Button>
                    </form>
                </div>    
            </>
            )
        }

/********************************View******************************************************** */
    const viewPlayer = useCallback(
        (key) => () => {
            setTimeout(() => {
                customers.map((row,id) => {
                    if (row.id === key) {
                        setFlag("view");
                        setFirstName(row.FirstName);
                        setLastName(row.LastName);
                        setContactNumber(row.ContactNumber);
                        setCampaignName(row.CampaignName);
                        setSessions(row.Sessions);
                        setPlayer(row);
                        setKey(key);
                    }
                })             
            });
        },
        [],
    );

    const ViewCallBack = () => {
            setFlag("list");
        }

/********************************MAIN******************************************************** */
    if (flag==='edit') {
        return (
            <span>
                <EditPlayer  />
            </span>   
            )
        }
    else if (flag==='add') {
            return (
                <span> <AddPlayer /> </span>
        )
    }
    else if (flag==='view') {
        return (
            <>
            <span> <ViewPlayer  FirstName={firstName}  LastName={lastName} ContactNumber={contactNumber} CampaignName={campaignName} Sessions={sessions} callBack={ViewCallBack} /></span>
            </>
            )
    }
    else    {
        let vs = new Array();
        const rows: GridRowsProp = vs;
        return (
            <>
                <span style={{position: 'absolute', top:'4px', left:'48%', color:'white'}}> GRIDX</span>
                <span style={{marginLeft:'950px',fontSize: '16px' }}>
                Filter Sessions:&nbsp;
                <select value={session} style={{ width: '180px', paddingTop:'3px'}}
                                    onChange={(e) => setSession(e.target.value)}>
                                        <option value="Black Rain">Black Rain</option>
                                        <option value="One Last Riddle">One Last Riddle</option>
                                        <option value="The Burning Plague">The Burning Plague</option>
                                        <option value="The Sea Witch">The Sea Witch</option>
                                        <option value="Tomb of Horrors">Tomb of Horrors</option>
                                        <option value=""></option>
                </select>  
                <Button  variant='outlined' style={{marginLeft:'40px'}} size='small' startIcon={<AddIcon />} color='info' onClick={addLine} > New Player </Button>
                </span>
                {customers.filter(section => section.Sessions.includes(session)).map((line,key) => {
                    // const id1={id:id};
                    // line={...id1,...line}
                    vs.push(line)
                })
            }
            <Box
                    sx={{
                        height: 600,
                        width: '1375px',
                        marginLeft:'30px',
                        backgroundColor: '#e3eced',
                    }}
                >
                    <DataGrid rows={vs} columns={columns} rowHeight={25} pageSize={pageSize} 
                            rowsPerPageOptions={[5, 15, 25]} onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
                    />
                </Box>
            </>
        )
    }
}

export default PlayersGridX;