import EmptyState from "../components/EmptyState";

import getCurrentuser from "../actions/getCurrentUser";
import getReservations from "../actions/getReservation";
import TripsClient from "./TripsClient";

const TripsPage = async ()=>{

    const currentUser = await getCurrentuser()

    if(!currentUser){
        return(
            <EmptyState 
                title="Unauthorized"
                subtitle="Please login"
            />
        )
    }

    const reservations = await getReservations({
        userId:currentUser.id
    })

    if(reservations.length === 0){
        return(
            <EmptyState 
                title="No trips found"
                subtitle="Look like you havent reserved any trips."
            />
        )
    }

    return(
        <TripsClient 
            reservations={reservations}
            currentUser={currentUser}
        />
    )
}

export default TripsPage