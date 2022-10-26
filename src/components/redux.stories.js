import { createSlice} from "@reduxjs/toolkit";

const players = 
[{FirstName: 'Joe', LastName: 'Caputo', ContactNumber: '07658312387', CampaignName: 'Black Rain', Sessions: 'Black Rain',id:1},
{FirstName: 'Piper', LastName: 'Chapman', ContactNumber: '07142548798', CampaignName: 'Black Rain', Sessions: 'One Last Riddle',id:2},
{FirstName: 'Tasha', LastName: 'Jefferson', ContactNumber: '07998987220', CampaignName: 'Black Rain', Sessions: 'The Burning Plague',id:3},
{FirstName: 'Gloria', LastName: 'Mendoza', ContactNumber: '07512645873', CampaignName: 'Black Rain', Sessions: 'The Sea Witch',id:4},
{FirstName: 'Theodore', LastName: 'Bagwell', ContactNumber: '07561384896', CampaignName: 'One Last Riddle', Sessions: 'Tomb of Horrors',id:5},
{FirstName: 'Brad', LastName: 'Bellick', ContactNumber: '07883256418', CampaignName: 'One Last Riddle',Sessions: '',id:6},
{FirstName: 'Lincoln', LastName: 'Burrows', ContactNumber: '07112356983', CampaignName: 'One Last Riddle',Sessions: '',id:7},
{FirstName: 'Fernando', LastName: 'Sucre', ContactNumber: '07963212321', CampaignName: 'One Last Riddle',Sessions: '',id:8},
{FirstName: 'Sara', LastName: 'Tancredi', ContactNumber: '07954186684', CampaignName: 'One Last Riddle',Sessions: '',id:9},
{FirstName: 'Daryl', LastName: 'Dixon', ContactNumber: '07325649845', CampaignName: 'The Burning Plague',Sessions: '',id:10},
{FirstName: 'Maggie', LastName: 'Greene', ContactNumber: '07459832185', CampaignName: 'The Burning Plague',Sessions: '',id:11},
{FirstName: 'Carol', LastName: 'Peletier', ContactNumber: '07989444568', CampaignName: 'The Burning Plague',Sessions: '',id:12},
{FirstName: 'Eugene', LastName: 'Porter', ContactNumber: '07774854987', CampaignName: 'The Burning Plague',Sessions: '',id:13},
{FirstName: 'Billy', LastName: 'Cranston', ContactNumber: '007845222547', CampaignName: 'The Sea Witch',Sessions: '',id:14},
{FirstName: 'Kimberly', LastName: 'Hart', ContactNumber: '07815307459', CampaignName: 'The Sea Witch',Sessions: '',id:15},
{FirstName: 'Trini', LastName: 'Kwan', ContactNumber: '07548755285', CampaignName: 'The Sea Witch',Sessions: '',id:16},
{FirstName: 'Tommy', LastName: 'Oliver', ContactNumber: '07989444568', CampaignName: 'The Sea Witch',Sessions: '',id:17},
{FirstName: 'Jason', LastName: 'Scott', ContactNumber: '07774854987', CampaignName: 'Thse Sea Witch',Sessions: '',id:18},
{FirstName: 'Zack', LastName: 'Taylor', ContactNumber: '07845222547', CampaignName: 'The Sea Witch',Sessions: '',id:19},
{FirstName: 'Joyce', LastName: 'Byers', ContactNumber: '07954668187', CampaignName: 'Tomb of Horrors',Sessions: '',id:20},
{FirstName: 'Dustin', LastName: 'Henderson', ContactNumber: '07889554857', CampaignName: 'Tomb of Horrors',Sessions: '',id:21},
{FirstName: 'Jim', LastName: 'Hopper', ContactNumber: '07954845148', CampaignName: 'Tomb of Horrors',Sessions: '',id:22},
{FirstName: 'Nancy', LastName: 'Wheeler', ContactNumber: '07445845711', CampaignName: 'Tomb of Horrors',Sessions: '',id:23},
];

const playersSlice = createSlice({
    name:"players",
    initialState: {clients: players},
    reducers: {
        inser: (state, data) => {
                state.clients = [...state.clients, data.payload ];
        },
        delet: (state,key) => {
            state.clients.splice(key.payload,1);
        },
        deletX: (state,key) => {
            state.clients=state.clients.filter(client => client.id !== key.payload);
        },
        modif: (state, data) => {
            state.clients[data.payload.key].FirstName= data.payload.FirstName;
            state.clients[data.payload.key].LastName= data.payload.LastName;
            state.clients[data.payload.key].ContactNumber= data.payload.ContactNumber;
            state.clients[data.payload.key].CampaignName= data.payload.CampaignName;
            state.clients[data.payload.key].Sessions= data.payload.Sessions;
        },
        modifX: (state, data) => {
            state.clients.map((player,id) => {
                if (player.id===data.payload.key) {
                    state.clients[id].FirstName= data.payload.FirstName;
                    state.clients[id].LastName= data.payload.LastName;
                    state.clients[id].ContactNumber= data.payload.ContactNumber;
                    state.clients[id].CampaignName= data.payload.CampaignName;
                    state.clients[id].Sessions= data.payload.Sessions;
                }
                return state.clients
            })
        }       
    }})
       

export const {inser, delet, modif, deletX, modifX } = playersSlice.actions;
export  {players};

export default playersSlice.reducer;