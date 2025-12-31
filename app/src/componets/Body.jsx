import ResturantCard from './ResturantCard'
import { useState, useEffect } from 'react'
import resList from '../utils/mockData'



const Body = () => {
    const [listOfResturant, setlistOfResturant] = useState(resList)

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {

        const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.8718063&lng=75.3675514&collection=83639&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&page_type=null')

        const json = await data.json()

        console.log(json);


    }

    return (
        <div className='body'>
            <div className='filter'>
                <button className='filter-btn' onClick={() => {
                    const newList = listOfResturant.filter(res => res.card.info.avgRating > 4)
                    console.log(newList);

                    setlistOfResturant(newList)

                }}>Top Rated Resturant</button>
            </div>
            <div className='res-container'>
                {
                    listOfResturant.map(resturant => (<ResturantCard key={resturant.card.info.id} resData={resturant} />))
                }

            </div>

        </div>
    )

}


export default Body