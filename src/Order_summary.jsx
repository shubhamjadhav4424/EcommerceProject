import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


function Order_summary() {
  let mycart = useSelector((state) => state.counter.cartArr);
  let Login_info= useSelector((state)=> state.counter.save_login_details);
  let address_Info= useSelector((state)=> state.counter.save_address_details);

  let login_length= Login_info.length;
  let address_length= address_Info.length;
  
  
  
  let navigate= useNavigate();
  

  function showcart(){

    let cartValue=[0,];

    mycart.map((ele,ind)=>{
      cartValue.push(ele.cartQuantity);
    })
    

    let addition=cartValue.reduce((pre,next)=>{
      return pre+next;
    })

    return addition;
    
  }


  function Total_Amount(){

    let cartValue=[0,];

    mycart.map((ele,ind)=>{
      cartValue.push(ele.Price_change_on_quantity);
    })
    

    let addition=cartValue.reduce((pre,next)=>{
      return pre+next;
    })

    return addition;
    
  }

  return (
    <>


<div className="flex pl-[210px] p-[12px] bg-[#588aff] fixed w-full">
        <div className=" text-[35px] font-[500] hover:cursor-pointer">
          Shopee
        </div>
      </div>

      
    <div className="flex justify-center">

      <div className="h-[150vh]">

      <div className="grid gap-[20px]">

      <div className="bg-[#e2f2ff] flex justify-center gap-[48px] p-[10px] mt-[94px]">
        <div className="grid w-[513px] gap-[10px]">
        <div className="text-[gray] flex items-center gap-[10px]" > <span className="pl-[5px] pr-[5px] pt-[2px] pb-[2px] bg-[gray] text-[10px] text-white">1</span> <span>LOGIN</span></div>
        {
          Login_info.map((ele,ind)=>{
            return(
              <div className="flex gap-[20px]" key={ele.id}>
                <div>{ele.Username}</div>
                <div>{ele.Number}</div>
              </div>
            )
          })
        }

        </div>

        <div><button className="pt-[10px] pb-[10px] pl-[45px] pr-[45px] rounded-[2px] bg-white border-[1px] border-[gray] text-[#588aff] font-[500]" onClick={()=>navigate('/Login')}>CHANGE</button></div>
        
      </div>



      <div className="bg-[#e2f2ff] flex justify-center gap-[48px] p-[20px]">
        <div className="grid w-[513px] gap-[15px]">
        <div className="text-[gray] flex items-center gap-[10px]" > <span className="pl-[5px] pr-[5px] pt-[2px] pb-[2px] bg-[gray] text-[10px] text-white">2</span> <span>DELIVERY ADDRESS</span></div>
        {
          address_Info.map((ele,ind)=>{
            return(
              <div>
                <div>First Name - {ele.firstname}</div>
                <div>House Name/Bunglo Name/Flat/Apartment/Society - {ele.area}</div>
                <div>Landmark - {ele.landmark}</div>
                <div>Locality - {ele.locality}</div>
                <div>City - {ele.city}</div>
                <div>State - {ele.state}</div>
                <div>Pincode - {ele.pincode}</div>
                <div>Mobile Number - {ele.mobilenumber}</div>
                <div>Alternate Phone Number- {ele.alternate_number}</div>
                <div></div>
              </div>
            )
          })
        }

        </div>

        <div><button className="pt-[10px] pb-[10px] pl-[45px] pr-[45px] rounded-[2px] bg-white border-[1px] border-[gray] text-[#588aff] font-[500]" onClick={()=>navigate('/Delivery_Address')}>CHANGE</button></div>
        
      </div>


      <div className="w-full bg-[#4366ff] text-white p-[10px] pl-[72PX] flex items-center gap-[20px]"><span className="pl-[5px] pr-[5px] pt-[2px] pb-[2px] bg-[gray] text-white text-[13px]">3</span> <span>ORDER SUMMARY</span></div>

      {
      
      mycart.map((ele,ind)=>{
          return(
            <div key={ele.id} className="grid justify-center w-full">

              <div className="flex justify-center items-center gap-[38px] bg-[#e2f2ff] border-[1px] border-b-[black] p-[10px]">
                <div className="w-[224px]">
                <div className="w-[224px]"><img className="h-[200px]" src={ele.images} alt="" /></div>
                <div>{ele.title}</div>
                </div>

                <div>
                  <div className="w-[301px]">{ele.description}</div>
                </div>

                <div>
                  <div className="w-[237px]">Delivery details - {ele.shippingInformation}</div>
                </div>
              </div>
            </div>
          )
        })
      }


      <div>
        {
          Login_info.map((ele,ind)=>{
            return(
              <div className="pl-[65px] p-[20px] bg-[#e2f2ff]">
                Order Confirmation will be sent <span className="font-[500]">{ele.email}</span>
              </div>
            )
          })
        }
      </div>


      <div className="bg-[#e2f2ff] p-[20px] mb-[50px]"><div className="text-[gray] flex items-center gap-[10px]"> <span className="pl-[5px] pr-[5px] pt-[2px] pb-[2px] bg-[gray] text-[10px] text-white">4</span> <span>PAYMENT OPTIONS</span></div></div>
    </div>
      </div>

      <div>
        
      <div className="w-[350px] grid justify-center gap-[15px] p-[20px] pt-[100px]">
        <div className="h-[250px] bg-[#e2f2ff] rounded-[10px]">
          <div className="h-[50px] pt-[10px] pb-[10px] pl-[108px] pr-[108px] border-b-[1px] border-[black] font-[500]">
            Price Details
          </div>

          <div className="grid gap-[25px] pt-[20px]">

          <div className="flex justify-center font-[400] text-[18px]">
            Total Number of Items : {showcart()} items
          </div>

          <div className="flex justify-center font-[400] text-[18px]">
            Delivery Charges - ₹120 Free
          </div>

          <div className="flex justify-center">
          <div className="flex justify-center font-[600] text-[18px] w-[220px]">
            Total Amount - $ {Total_Amount()}
          </div>
          </div>

          </div>

        </div>


        {
          login_length&&address_length>0?
          <>
        <div className="flex justify-center">
          <button className="pt-[10px] pb-[10px] pl-[67px] pr-[67px] bg-[#ff8316] text-white rounded-[3px] font-[500]" onClick={()=>navigate('/Payment')}>Continue</button>
        </div>
          </>
          :
          <>
        <div className="flex justify-center">
          <button className="font-[500] pl-[25px] pr-[25px] text-[18px]">Login and Delivery address required to proceed further</button>
        </div>
          </>
        }

      </div>

      </div>

    </div>
    </>
  );
}

export default Order_summary;
