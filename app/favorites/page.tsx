import EmptyState from "../components/EmptyState"

import getCurrentuser from "../actions/getCurrentUser"
import getFavoriteListings from "../actions/getFavoriteListing"
import FavoritesClient from "./FavoritesClient"

const ListingPage = async ()=>{

  const listings = await getFavoriteListings()
  const currentUser = await getCurrentuser()
  

  if(listings.length === 0){
    return(
          <EmptyState 
            title="No favorites found!"
            subtitle="Looks like you don't have any favorites"
          />    
    )
  }
  return (
    <FavoritesClient
      listings={listings}
      currentUser={currentUser}
    />
  )

  

}

export default ListingPage