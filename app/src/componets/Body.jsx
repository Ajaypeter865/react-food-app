import ResturantCard from './ResturantCard'
import resList from '../utils/mockData'



const Body = () => {
    return (
        <div className='body'>
            <div className='filter'>
                <button className='filter-btn'>Top Rated Resturant</button>
            </div>
            <div className='res-container'>
                {
                    resList.map(resturant => (<ResturantCard key={resturant.card.info.id} resData={resturant} />))
                }

            </div>

        </div>
    )

}


export default Body