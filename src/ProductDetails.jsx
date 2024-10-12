import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Pro_details_delete, AddtoCart } from "./counterSlice";
import CartImage from './assets/shopping-cart.png';
import { Slide, ToastContainer, Zoom, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function ProductDetails(){

    let navigate= useNavigate();
    let dispatch= useDispatch();

    let pro_details= useSelector((state)=>state.counter.pro_details_cart)
    let cartcount= useSelector((state)=>state.counter.cartArr);


    function onClickHandler(ind){
        dispatch(Pro_details_delete(ind))
        navigate('/');
    }


    function sendtocart(ele){
      dispatch(AddtoCart(ele));

      toast.success('Item Added Successfully', {
        position: "top-center",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Slide,
        });
    }

    function buyforcart(ele){
      dispatch(AddtoCart(ele));

      toast.success('Item Added Successfully', {
        position: "top-center",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Slide,
        });

        setTimeout(()=>{
          navigate('/Cart');
        },1500);
    }


    function cartcount_increasing(){
        let car=[0,];
        cartcount.map((ele,ind)=>{
          return(
            car.push(ele.cartQuantity)
          )
        })
    
        let addition=car.reduce((prev,next)=>{
          return prev+next;
        })
    
        return addition;
    
      }

    return(
        <>

<ToastContainer
position="top-center"
autoClose={1500}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>

        
        <div>

        <div className="p-[12px] fixed w-full bg-[#588aff] flex justify-center gap-[180px] pr-[50px] items-center"><div className=" text-[35px] font-[500]"><button className="text-[20px] pt-[10px] pb-[10px] pl-[35px] pr-[35px] bg-[#1a1a1a] text-[white] rounded-[35px]" onClick={()=>onClickHandler()}><span>&#8637;</span> Go Back</button></div>

<div className="flex justify-center gap-[20px] items-center">
<div><input className="pt-[10px] pb-[10px] pl-[22px] pr-[22px] w-[355px] rounded-[29px]" type="text" placeholder="Search for products" /></div> <div><button className="pt-[10px] pb-[10px] pl-[25px] pr-[25px] rounded-[29px] bg-[#1a1a1a] font-[450] text-[white]" >Search</button></div>
</div>

<div>
  <button className="pt-[10px] pb-[10px] pl-[35px] pr-[35px] bg-[#1a1a1a] text-[white] rounded-[35px]">Login</button>
</div>


<div>
<div className="hover: cursor-pointer p-[5px]"><img className="h-[40px]"src={CartImage} onClick={()=>navigate('/Cart')} alt="" /></div> <div className="absolute ml-[26px] mt-[-54px] text-[white] text-[18px] bg-[black] pl-[8px] pr-[8px] rounded-[15px]"><h5 className="m-[0px]">{cartcount_increasing()}</h5></div>
</div>

</div>


            {
                pro_details.map((ele,ind)=> {
                    return(
                        <div key={ele.id} className="flex justify-center w-full pt-[77px]">
                            <div className="flex justify-center items-center text-[18px] w-[1393px] gap-[112px]">
                                <div>
                                    <img src={ele.thumbnail} className="h-[550px]" alt="" />
                                </div>

                                <div>
                                <div className="w-[650px] grid gap-[20px]">
                                <div className="text-[25px]">{ele.title}</div>
                                
                                <div>{ele.description}</div>

                                <div className="p-[.5px] w-full bg-[gray]"></div>
                                
                                <div>${ele.price}</div>

                                <div>Rating- {ele.rating}⭐</div>
                                
                                <div>{ele.warrantyInformation}</div>
                                </div>
                                </div>

                            </div>
                        </div>
                    )
                })
            }
        </div>

        {
          pro_details.map((ele,ind)=>{
            return(
              <div className="flex justify-center gap-[50px] h-[70vh]" key={ele.id}>
                <div className="w-[650px] bg-[#b4ceff] rounded-[10px] h-[400px] mt-[25px] grid justify-start p-[30px]">
                  <div>Brand - {ele.brand}</div>
                  <div>Availability Status - {ele.availabilityStatus}</div>
                  <div> Stock Available - {ele.stock} Availables</div>
                  <div>Product types - {ele.tags}</div>
                  <div>Dimensions - 
                    <div>Width - {ele.dimensions.width}</div>
                    <div>height - {ele.dimensions.height}</div>
                    <div>depth - {ele.dimensions.depth}</div>
                  </div>
                  <div>Shipping Information - {ele.shippingInformation}</div>
                  <div>Return Policy - {ele.returnPolicy}</div>
                </div>

                <div className="grid">
                <div className="flex justify-center gap-[140px] w-[650px]">

<div>
  <button className="pt-[10px] pb-[10px] pl-[50px] pr-[50px] text-[17px] bg-[#ffff67] rounded-[29px] font-[475]" onClick={()=>sendtocart(ele)} >Add to cart</button>
</div>

<div>
  <button className="pt-[10px] pb-[10px] pl-[50px] pr-[50px] text-[17px] bg-[#ff8f26] rounded-[29px] font-[475]" onClick={()=>buyforcart(ele)}>Buy Now</button>
</div>

</div>


<div className="flex justify-center">
  <div className="w-[450px] bg-[#b4ceff] rounded-[10px] h-[354px] grid gap-[15px] mt-[20px] p-[30px]">
  <div>Reviews :
    <div>Rating - {ele.reviews[0].rating}</div>
    <div>Comment - {ele.reviews[0].comment}</div>
    <div>Date - {ele.reviews[0].date}</div>
    <div>Reviewer Name - {ele.reviews[0].reviewerName}</div>
    <div>Reviewer Email - {ele.reviews[0].reviewerEmail}</div>
  </div>

  <div>Scan for more Information - <img className="h-[130px]" src={ele.meta.qrCode} alt="" /></div>

  </div>
  </div>
</div>

              </div>
            )
          })
        }

        </>
    )
}

export default ProductDetails;