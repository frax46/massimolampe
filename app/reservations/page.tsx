import EmptyState from "../components/EmptyState";

import getCurrentuser from "../actions/getCurrentUser";
import getReservations from "../actions/getReservation";
import ReservationsClient from "./ReservationsClient";


const ReservationPage = async ()=>{

  const currentUser = await getCurrentuser()

  if(!currentUser){
    return(
      <EmptyState
        title="Unathorized"
        subtitle="Please Login"
      />
    )
    
  }

  const reservations = await getReservations({
    authorId:currentUser.id
  })

  if(reservations.length === 0){
    return(
      <EmptyState
        title="No reservation found"
        subtitle="Looks like you have no reservation on your property"
      />
    )
  }

  return(
    <ReservationsClient
      reservations={reservations}
      currentUser={currentUser}
    />
  )
}

export default ReservationPage