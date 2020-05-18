import React from "react";
import RoomsFilter from "./RoomFilter";
import RoomsList from "./RoomList";
import { RoomConsumer, withRoomConsumer } from "../context";
import Loading from "./Loading";


function RoomContainer({context}){
  const{loading,sortedRooms,rooms} =context
  if(loading){
                   return <Loading/>
             }
             return (
               <div>
                <RoomsFilter rooms={rooms} />
                 <RoomsList rooms={sortedRooms}></RoomsList>
               </div>)
}


export default withRoomConsumer (RoomContainer)

// import React from "react";
// import RoomsFilter from "./RoomFilter";
// import RoomsList from "./RoomList";
// import { RoomConsumer } from "../context";
// import Loading from "./Loading";
// export default function RoomsContainer() {
//   return (
//     <RoomConsumer>
//       {value => {
//           const {loading,sortedRooms,rooms} = value
//           if(loading){
//               return <Loading/>
//           }
//         return (
//           <div>
//             <RoomsFilter rooms={rooms} />
//             <RoomsFilter rooms={sortedRooms}></RoomsFilter>
//           </div>
//         );
//       }}
//     </RoomConsumer>
//   );
// }
