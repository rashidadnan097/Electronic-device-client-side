import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import BrandCard from "./BrandCard";


const Brand = () => {

    const [brand, setBrand] = useState({})


    const id = useParams()
  
     
    const brands = useLoaderData()
  

    useEffect(()=>{

        const findBrand = brands?.find(brand => brand.id === id )
        
        setBrand(findBrand);

    },[id, brands])

    console.log(brand)

    return (
        <div>
            <BrandCard brand={brand}></BrandCard>
        </div>
    );
};

export default Brand;