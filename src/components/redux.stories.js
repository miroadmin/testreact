import { createSlice} from "@reduxjs/toolkit";

const players = 
[{FirstName: 'Joe', LastName: 'Caputo', ContactNumber: '07658312387', CampaignName: 'Black Rain', Sessions: 'Black Rain'},
{FirstName: 'Piper', LastName: 'Chapman', ContactNumber: '07142548798', CampaignName: 'Black Rain', Sessions: 'One Last Riddle'},
{FirstName: 'Tasha', LastName: 'Jefferson', ContactNumber: '07998987220', CampaignName: 'Black Rain', Sessions: 'The Burning Plague'},
{FirstName: 'Gloria', LastName: 'Mendoza', ContactNumber: '07512645873', CampaignName: 'Black Rain', Sessions: 'The Sea Witch'},
{FirstName: 'Theodore', LastName: 'Bagwell', ContactNumber: '07561384896', CampaignName: 'One Last Riddle', Sessions: 'Tomb of Horrors'},
{FirstName: 'Brad', LastName: 'Bellick', ContactNumber: '07883256418', CampaignName: 'One Last Riddle',Sessions: ''},
{FirstName: 'Lincoln', LastName: 'Burrows', ContactNumber: '07112356983', CampaignName: 'One Last Riddle',Sessions: ''},
{FirstName: 'Fernando', LastName: 'Sucre', ContactNumber: '07963212321', CampaignName: 'One Last Riddle',Sessions: ''},
{FirstName: 'Sara', LastName: 'Tancredi', ContactNumber: '07954186684', CampaignName: 'One Last Riddle',Sessions: ''},
{FirstName: 'Daryl', LastName: 'Dixon', ContactNumber: '07325649845', CampaignName: 'The Burning Plague',Sessions: ''},
{FirstName: 'Maggie', LastName: 'Greene', ContactNumber: '07459832185', CampaignName: 'The Burning Plague',Sessions: ''},
{FirstName: 'Carol', LastName: 'Peletier', ContactNumber: '07989444568', CampaignName: 'The Burning Plague',Sessions: ''},
{FirstName: 'Eugene', LastName: 'Porter', ContactNumber: '07774854987', CampaignName: 'The Burning Plague',Sessions: ''},
{FirstName: 'Billy', LastName: 'Cranston', ContactNumber: '007845222547', CampaignName: 'The Sea Witch',Sessions: ''},
{FirstName: 'Kimberly', LastName: 'Hart', ContactNumber: '07815307459', CampaignName: 'The Sea Witch',Sessions: ''},
{FirstName: 'Trini', LastName: 'Kwan', ContactNumber: '07548755285', CampaignName: 'The Sea Witch',Sessions: ''},
{FirstName: 'Tommy', LastName: 'Oliver', ContactNumber: '07989444568', CampaignName: 'The Sea Witch',Sessions: ''},
{FirstName: 'Jason', LastName: 'Scott', ContactNumber: '07774854987', CampaignName: 'Thse Sea Witch',Sessions: ''},
{FirstName: 'Zack', LastName: 'Taylor', ContactNumber: '07845222547', CampaignName: 'The Sea Witch',Sessions: ''},
{FirstName: 'Joyce', LastName: 'Byers', ContactNumber: '07954668187', CampaignName: 'Tomb of Horrors',Sessions: ''},
{FirstName: 'Dustin', LastName: 'Henderson', ContactNumber: '07889554857', CampaignName: 'Tomb of Horrors',Sessions: ''},
{FirstName: 'Jim', LastName: 'Hopper', ContactNumber: '07954845148', CampaignName: 'Tomb of Horrors',Sessions: ''},
{FirstName: 'Nancy', LastName: 'Wheeler', ContactNumber: '07445845711', CampaignName: 'Tomb of Horrors',Sessions: ''},
];

const playersSlice = createSlice({
    name:"players",
    initialState: {clients: players},
    reducers: {
        inser: (state, data) => {
                state.clients = [...state.clients, data.payload ]
        },
        delet: (state,key) => {
            state.clients.splice(key.payload,1);
        },
        modif: (state, data) => {
            state.clients[data.payload.key].FirstName= data.payload.FirstName;
            state.clients[data.payload.key].LastName= data.payload.LastName;
            state.clients[data.payload.key].ContactNumber= data.payload.ContactNumber;
            state.clients[data.payload.key].CampaignName= data.payload.CampaignName;
            state.clients[data.payload.key].Sessions= data.payload.Sessions;
        }
    }})
       

export const {inser, delet, modif } = playersSlice.actions;
export  {players};

export default playersSlice.reducer;