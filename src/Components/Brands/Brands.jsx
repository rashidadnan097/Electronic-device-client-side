import BrandsCard from "./BrandsCard";



const Brands = ({brands}) => {
    console.log(brands)
    return (
        <div>
            <h1 className="mt-10 text-center underline text-3xl font-bold text-red-600">Our Brands</h1>
           <div className="grid grid-cols-1 md:grid-cols-3 mt-10 gap-4">
            {
                brands?.map ( brand => <BrandsCard key={brand.id} brand={brand}></BrandsCard>)
            }
           </div>
        </div>
    );
};

export default Brands;