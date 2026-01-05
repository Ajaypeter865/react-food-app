import { useEffect } from "react"


const ResturantMenu = () => {

    useEffect(() => {
        fetchMenu()
    }, [])

   const fetchMenu = async () => {
    const data = await fetch('https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=11.8718063&lng=75.3675514&restaurantId=390778&catalog_qa=undefined&query=Biryani&submitAction=ENTER')
    console.log('Data',data);
    
    const text = await data.text()
    console.log('text',text);

    const json = await data.json()
    
    console.log('Json',json);
        
   }
    return(
        <div className="menu">
            <h1>Hello from Resturant Menu </h1>
        </div>
    )
}


export default ResturantMenu