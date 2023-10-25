

const MyCartCard = ({brand}) => {
  const {im1, im2, im3, im4, pro1, pro2, pro3, pro4} = brand;
    return (
        <div>
            <div className="card w-80 h-80 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img  src={im1 || im2 || im3 || im4} alt="Shoes" className="rounded-xl h-48" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{pro1 || pro2 || pro3 || pro4}</h2>
    <p>Just a awesome product</p>
    <button  className="btn btn-secondary">Delate</button>
   
  </div>
</div>
        </div>
    );
};

export default MyCartCard;