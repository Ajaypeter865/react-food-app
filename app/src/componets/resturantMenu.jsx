import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import menuData from '../../src/utils/pl.json'
import Shimmer from "./Shimmer"

const ResturantMenu = () => {

    const [resInfo, setResInfo] = useState(null)


    useEffect(() => {
        fetchMenu()
    }, [])

    const fetchMenu = async () => {
        const data = 'https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=11.8718063&lng=75.3675514&restaurantId=1274366&catalog_qa=undefined&query=Biryani&submitAction=ENTER'
        console.log('Data', data.data);
        setResInfo(data.data)

    }

    if (resInfo === null) return <Shimmer />

    const { name, cuisines } = resInfo?.cards[2]?.card?.card?.info || {}

    const { carousel } = resInfo?.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card



    return (
        <div className="menu">
            <h1>{name}</h1>
            <br />
            <p>{cuisines.join(', ')}</p>
            <br />
            <h2>Menu</h2>
            <br />
            <br />
            <ul>
                {carousel.map(carousel => <li key={carousel.dish.info.id}>{carousel.dish.info.name} - {'Rs -'}{carousel.dish.info.price / 100}</li>)}

                {/* <li>{carousel[0].dish.info.name}</li> */}
            </ul>
        </div>
    )
}


export default ResturantMenu