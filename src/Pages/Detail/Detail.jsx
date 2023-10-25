
import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

import DetailCard from "./DetailCard";


const Detail = () => {

    const [detail, setDetail] = useState({})


    const {id} = useParams()
  
     
    const details = useLoaderData()
  

    useEffect(()=>{

        const findDetail = details?.find(detail => detail.id === id )
        
        setDetail(findDetail);

    },[id, details])

    console.log(detail)

    return (
        <div className="mt-10 text-center justify-center">
            <DetailCard detail={detail}></DetailCard>
        </div>
    );
};

export default Detail;