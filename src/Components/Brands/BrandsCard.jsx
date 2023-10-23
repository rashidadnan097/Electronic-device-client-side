import { Link } from "react-router-dom";



const BrandsCard = ({brand}) => {
   
   const {id, pic, name} = brand || {} 
    return (
        <Link to={`/brands/${id}`}>
        <div className="card card-compact   shadow-xl">
        <figure><img className=" w-[320px] h-[150px]" src={pic}  /></figure>
        <div className="">
          <h2 className="text-2xl font-bold text-center">{name}</h2>
        </div>
      </div>
        </Link>
    );
};

export default BrandsCard;