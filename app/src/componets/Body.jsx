import ResturantCard from './ResturantCard'
import { useState, useEffect } from 'react'
import Shimmer from './Shimmer'
import { Link } from 'react-router-dom'

const Body = () => {
    const [listOfResturant, setlistOfResturant] = useState([])
    const [filteredResturant, setFilteredResturant] = useState([])
    const [searchText, setsearchText] = useState('')

    console.log('Body rendered');


    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {

        const data = await fetch('https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=11.8718063&lng=75.3675514&restaurantId=1274366&catalog_qa=undefined&query=Biryani&submitAction=ENTER')

        // const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.8718063&lng=75.3675514&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING')

        const json = await data.json()
        console.log('Json-body', json);


        const resturants = json.data.cards.filter(c => c.card?.card?.['@type'] === 'type.googleapis.com/swiggy.presentation.food.v2.Restaurant')

        setlistOfResturant(resturants)
        setFilteredResturant(resturants)
    }

    return listOfResturant.length === 0 ? <Shimmer /> : (
        <div className='body'>
            <div className='filter'>
                <div className='search'>
                    <input type="text" className='search-box' value={searchText} onChange={(e) => { setsearchText(e.target.value) }} />
                    <button className='search-btn' onClick={() => {
                        const filteredResturant = listOfResturant.filter((res) => res.card?.card.info.name.toLowerCase().includes(searchText.toLowerCase()))

                        setFilteredResturant(filteredResturant)
                    }}>Search</button>
                </div>
                <button className='filter-btn' onClick={() => {
                    const newList = listOfResturant.filter(res => res.card.card.info.avgRating > 4.5)
                    console.log(newList);

                    setlistOfResturant(newList)

                }}>Top Rated Resturant</button>
            </div>
            <div className='res-container'>
                {
                    filteredResturant.map(resturant => (<Link to={'/resturants/123'}> <ResturantCard resData={resturant} /></Link>))
                }

            </div>

        </div>
    )

}


export default Body