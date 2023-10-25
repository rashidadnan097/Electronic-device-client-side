import swal from "sweetalert";


const DetailCard = ({detail}) => {
    const {name, im1, im2, im3, im4, pro1, pro2, pro3, pro4, p1, p2, p3, p4} = detail ;

    const handleAddToCart = ()=> {

      const   addedCartsItem = [];

          const cartItems = JSON.parse(localStorage.getItem('carts'));

          if (!cartItems) {
             addedCartsItem.push(detail)
             localStorage.setItem('carts', JSON.stringify(addedCartsItem))
             swal("Good job!", "Product added successfully!", "Success!" );
          }
          else{
            addedCartsItem.push(...cartItems,detail)
            localStorage.setItem('carts', JSON.stringify(addedCartsItem))
            swal("Good job!", "Product added successfully!", "Success!" );
          }
    }
    return (
      <div className="h-[100vh]">
      <div > <img className="ml-[280px] w-[450px] h-[300px]" src={im1 || im2 || im3 || im4} alt="" />
     
      </div>
       <div className="">
      <h1 className=" text-2xl font-extrabold">Type: {pro1 || pro2 || pro3 || pro4}</h1>
       <h1 className=" text-2xl font-extrabold mt-2">Brand: {name}</h1>
       <h1 className=" text-2xl font-extrabold mt-2">Price: {p1 || p2 || p3 || p4}</h1>
       <button onClick={handleAddToCart} className="btn btn-secondary px-16 mt-4"> Add To Cart</button>
              
       </div>
   </div>
    );
};

export default DetailCard;