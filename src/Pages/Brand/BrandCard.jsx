import { Link } from "react-router-dom";
import swal from "sweetalert";



const BrandCard = ({brand}) => {
    const {id, name, left, right, mid, im1, im2, im3, im4, pro1, pro2, pro3, pro4, p1, p2, p3, p4} = brand ;

   

    return (
       <div>
        <div className="carousel h-[300px]">
  <div id="slide1" className="carousel-item relative w-full">
    <img src={left} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src={right} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src={mid} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div> 
 
</div>
   <div>
    <h1 className="text-center mt-2 text-3xl font-bold">Our awesome brands product</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 mb-10 ml-20">
      
    <div className="card h-[350px] w-[350px] bg-base-100 shadow-xl">
  <figure><img className="h-[200px] w-[400px]" src={im1}  /></figure>
  <div className="card-body">
    <div className="flex ">
    <h2 className="card-title">Brand:{name}</h2>
    <h2 className="card-title ml-10">Type: {pro1}</h2>
    </div>
    <div className="flex">
    <div className="rating mt-3">
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
</div>
   <div><h2 className="ml-14 font-bold mt-3">Price: {p1}</h2></div>
    </div>
    <div className="card-actions ">
    <button className="btn btn-primary">Update</button>
   <Link to={`/details/${id}`}> <button  className="btn btn-primary ml-20">Details</button></Link>
    </div>
  </div>
</div>
<div className="card h-[350px] w-[350px] bg-base-100 shadow-xl">
  <figure><img className="h-[200px] w-[400px]" src={im2}  /></figure>
  <div className="card-body">
    <div className="flex ">
    <h2 className="card-title">Brand:{name}</h2>
    <h2 className="card-title ml-10">Type: {pro2}</h2>
    </div>
    <div className="flex">
    <div className="rating mt-3">
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
</div>
   <div><h2 className="ml-14 font-bold mt-3">Price: {p2}</h2></div>
    </div>
    <div className="card-actions ">
    <button className="btn btn-primary">Update</button>
    <Link to={`/details/${id}`}> <button  className="btn btn-primary ml-20">Details</button></Link>
    </div>
  </div>
</div>
<div className="card h-[350px] w-[350px] bg-base-100 shadow-xl">
  <figure><img className="h-[200px] w-[400px]" src={im3}  /></figure>
  <div className="card-body">
    <div className="flex ">
    <h2 className="card-title">Brand:{name}</h2>
    <h2 className="card-title ml-10">Type: {pro3}</h2>
    </div>
    <div className="flex">
    <div className="rating mt-3">
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
</div>
   <div><h2 className="ml-14 font-bold mt-3">Price: {p3}</h2></div>
    </div>
    <div className="card-actions ">
    <button className="btn btn-primary">Update</button>
    <Link to={`/details/${id}`}> <button  className="btn btn-primary ml-20">Details</button></Link>
    </div>
  </div>
</div>
<div className="card h-[350px] w-[350px] bg-base-100 shadow-xl">
  <figure><img className="h-[200px] w-[400px]" src={im4}  /></figure>
  <div className="card-body">
    <div className="flex ">
    <h2 className="card-title">Brand:{name}</h2>
    <h2 className="card-title ml-10">Type: {pro4}</h2>
    </div>
    <div className="flex">
    <div className="rating mt-3">
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
</div>
   <div><h2 className="ml-14 font-bold mt-3">Price: {p4}</h2></div>
    </div>
    <div className="card-actions ">
    <button className="btn btn-primary">Update</button>
    <Link to={`/details/${id}`}> <button  className="btn btn-primary ml-20">Details</button></Link>
    </div>
  </div>
</div>







    </div>
   </div>
       </div>
    );
};

export default BrandCard;