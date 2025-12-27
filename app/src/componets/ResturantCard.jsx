const ResturantCard = (props) => {

  const { resData } = props
  const { name, cuisines, avgRating, deliveryTime } = resData?.card.info
  return (
    <div className='res-card' style={{ backgroundColor: '#f0f0f0' }}>
      <img className='res-logo' src={'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/' + resData.card.info.cloudinaryImageId} alt="res-logo" />
      <h3>{name}</h3>
      <h4>{cuisines.join(',')}</h4>
      <h4>{avgRating} Rating</h4>
      <h4>{resData.card.info.sla.deliveryTime} Minutes</h4>

    </div>
  )
}


export default ResturantCard