

const Faq = () => {
    return (
        <div className="h-[120vh] w-full mt-16 mb-10">
           <div className="text-center mb-16"> <h1 className="text-3xl font-bold underline text-blue-600 ">FAQ’s</h1>
            <p className="mt-3 text-xl font-semibold">Thank you for your interest our products.</p></div>
            <div className="flex ">
                <div className="w-[600px]">
                <div className="collapse collapse-plus bg-base-200">
  <input type="radio" name="my-accordion-3" checked="checked" /> 
  <div className="collapse-title text-xl font-medium">
  What is your return policy?
  </div>
  <div className="collapse-content"> 
    <p>We offer a 30-day return policy. If you are not satisfied with your purchase, you can return it within 30 days for a full refund or exchange</p>
  </div>
         </div>
     <div className="collapse collapse-plus bg-base-200">
  <input type="radio" name="my-accordion-3" /> 
  <div className="collapse-title text-xl font-medium">
  How can I track my order?
  </div>
  <div className="collapse-content"> 
    <p>After your order is processed, you will receive a tracking number via email. You can use this tracking number to monitor the status of your shipment.</p>
  </div>
       </div>
    <div className="collapse collapse-plus bg-base-200">
  <input type="radio" name="my-accordion-3" /> 
  <div className="collapse-title text-xl font-medium">
  Are your products covered by a warranty?
  </div>
  <div className="collapse-content"> 
    <p>Yes, all our products come with a standard one-year warranty. Some products may have an extended warranty. Check the product page for specific warranty details.</p>
  </div>
       </div>
       <div className="collapse collapse-plus bg-base-200">
  <input type="radio" name="my-accordion-3" /> 
  <div className="collapse-title text-xl font-medium">

  Do you have a physical store where I can see your products in person?
  </div>
  <div className="collapse-content"> 
    <p>
    Currently, we operate exclusively online, but you can explore detailed product information and reviews on our website. We also offer a hassle-free return policy if you are not satisfied with your purchase.
    </p>
  </div>
       </div>

                </div>
                <div className="ml-10 ">
               <img className="h-[380px] rounded" src="https://st2.depositphotos.com/1637332/6198/i/450/depositphotos_61989025-stock-photo-business-button-faq.jpg"  />
                </div>
                
            </div>
        </div>
    );
};

export default Faq;