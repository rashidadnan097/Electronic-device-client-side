import Swal from "sweetalert2";



const AddProduct = () => {
    const handleAddProduct = e =>{
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const brand = form.brand.value;
        const type = form.type.value;
        const price = form.price.value;
        const description = form.description.value;
        const photo = form.photo.value;

        const newCard = {name, brand, type, price, description, photo};
       
        console.log(newCard);

        // send data to the server

        fetch('http://localhost:3000/card', {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(newCard)
        })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          if (data.insertedId) {
            Swal.fire({
              title: 'Success!',
              text: 'Do you want to continue',
              icon: 'success',
              confirmButtonText: 'Cool'
            })
           }
        })
        
        
    }
    
    return (
        <div className="bg-gray-400 p-24">
            <h1 className="text-3xl font-extrabold text-center mb-6">This Is Product Section</h1>
            <form onSubmit={handleAddProduct}>
                {/* form name and brand name row */}
                <div className="flex mb-4">
                <div className="form-control md:w-1/2">
                    <label className="label">
                     <span className="label-text font-medium">Product Name</span>
                   </label>
                     <label className="input-group">
                      
                        <input type="text" name="name" placeholder="Product Name" className="input input-bordered w-full" />
                         </label>
                   </div>
                   <div className="form-control md:w-1/2 ml-4">
                    <label className="label">
                     <span className="label-text font-medium">Brand Name</span>
                   </label>
                     <label className="input-group">
                      
                        <input type="text" name="brand" placeholder="Brand Name" className="input input-bordered w-full" />
                         </label>
                   </div>
                </div> 
                 {/* form type and price row */}
                <div className="flex mb-4">
                <div className="form-control md:w-1/2">
                    <label className="label">
                     <span className="label-text font-medium">Product Type</span>
                   </label>
                     <label className="input-group">
                      
                        <input type="text" name="type" placeholder="Product Type" className="input input-bordered w-full" />
                         </label>
                   </div>
                   <div className="form-control md:w-1/2 ml-4">
                    <label className="label">
                     <span className="label-text font-medium">Price</span>
                   </label>
                     <label className="input-group">
                      
                        <input type="text" name="price" placeholder="Price" className="input input-bordered w-full" />
                         </label>
                   </div>
                </div>
                  {/* form description and review row */}
                <div className="flex mb-4">

                <div className="form-control md:w-1/2 ">
                    <label className="label">
                     <span className="label-text font-medium">Description</span>
                   </label>
                     <label className="input-group">
                      
                     <textarea type="text" name="description" className="textarea textarea-bordered w-full" placeholder="Description"></textarea>
                         </label>
                   </div>

                   <div className="form-control md:w-1/2 ml-4">
                    <label className="label">
                     <span className="label-text font-medium">Reviews</span>
                   </label>
                     <label className="input-group">
                      
                     <div className="rating">
                 <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
               <input type="radio" name="rating-2" className="mask mask-star-2  bg-orange-400" />
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
             <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                 <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
</div>
                         </label>
                   </div>

                </div>
                  {/* form photo url row */}
                  <div className="flex">
                <div className="form-control w-full mb-8">
                    <label className="label">
                     <span className="label-text font-medium">Photo</span>
                   </label>
                     <label className="input-group">
                      
                        <input type="text" name="photo" placeholder="Photo url" className="input input-bordered w-full" />
                         </label>
                   </div>                 
                </div>
                  <button className="btn btn-block" type="submit" value="Add coffee">Add Product</button>
            </form>
        </div>
    );
};

export default AddProduct;