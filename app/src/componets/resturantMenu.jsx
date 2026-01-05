import { useEffect, useState } from "react"
import menuData from '../../src/utils/pl.json'
import Shimmer from "./Shimmer"

const ResturantMenu = () => {

    const[resInfo, setResInfo] = useState(null)

    useEffect(() => {
        fetchMenu()
    }, [])

   const fetchMenu = async () => {
    const data = menuData
    console.log('Data',data.data);
    setResInfo(data.data)

   }

   if(resInfo === null) return <Shimmer/>

   const {name, cuisines, costForTwoMessage, avgRating} = resInfo?.cards[2]?.card?.card?.info || {}
   const {carousel} = resInfo?.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card
   console.log(carousel);
   

   console.log('Name', name);
   
    return(
        <div className="menu">
            <h1>{name}</h1>
            <br />
            <p>{cuisines.join(', ')}</p>
            <br />
            <h2>Menu</h2>
            <br />
            <br />
            <ul>
                {carousel.map(carousel =>   <li key={carousel.dish.info.id}>{carousel.dish.info.name} - {'Rs -'}{carousel.dish.info.price/100}</li> )}
              
                {/* <li>{carousel[0].dish.info.name}</li> */}
            </ul>
        </div>
    )
}


export default ResturantMenu