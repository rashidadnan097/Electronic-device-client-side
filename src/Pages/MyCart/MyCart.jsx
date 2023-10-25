import { useEffect, useState } from "react";
import MyCartCard from "./MyCartCard";



const MyCart = () => {
    const [carts, setCarts] = useState([])
    const [noFound, setNoFound] = useState(false)

    useEffect(()=>{
        const cartItems = JSON.parse(localStorage.getItem('carts'));
        
        if (cartItems) {
            setCarts(cartItems);
        }
        else{
            
            setNoFound("no data found")
        }
    },[])
    console.log(carts);
    return (
        <div>
            {
                noFound ? <p>{noFound} </p> :
                 <div>
                     <div className="grid grid-cols-1 md:grid-cols-2 mt-10 ml-[98px] gap-4 mb-10">
                        {
                            carts.map(brand => <MyCartCard key={brand.id} brand={brand}></MyCartCard>)
                        }
                     </div>
                </div>
            }
        </div>
    );
};

export default MyCart;