import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteItem, cartDecrement, AddtoCart } from "./counterSlice";
import CartImage from './assets/shopping-cart.png'

function Cart() {
  let dispatch = useDispatch();
  let navigate = useNavigate();
  let mycart = useSelector((state) => state.counter.cartArr);
  


  function onClickHandler(ind) {
    dispatch(deleteItem(ind));
  }

  function onClickHandler2(ele) {
    dispatch(AddtoCart(ele));
  }

  function onClickHandler3(ind) {
    dispatch(cartDecrement(ind));
  }

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
    {
      showcart()==0?

      <>
    <div className="p-[12px] bg-[#588aff] flex justify-end pr-[50px]">
    <div className="hover: cursor-pointer p-[5px] w-[64px]"><img className="h-[40px]"src={CartImage} onClick={()=>navigate('/')} alt="" /></div><div className="absolute mr-[12px] pl-[8px] pr-[8px] bg-[black] text-white rounded-[47px] mt-[-3px]"><h5 className="m-[0px]">{showcart()}</h5></div>
    </div>

    <div className="flex justify-center items-center h-[80vh]">
      <div className="flex justify-center">
        <button className="pt-[20px] pb-[20px] pl-[45px] pr-[45px] bg-[#588aff] text-[white] rounded-[12px] font-[500] text-[18px]" onClick={()=>navigate('/')} >Continue to the shopping page</button>
      </div>
    </div>

      </>
      
      
      :
      
      <>
      
      
    <div className="p-[12px] bg-[#588aff] flex justify-end pr-[50px] fixed w-full">
    <div className="hover: cursor-pointer p-[5px] w-[64px]"><img className="h-[40px]"src={CartImage} onClick={()=>navigate('/')} alt="" /></div><div className="absolute mr-[12px] pl-[8px] pr-[8px] bg-[black] text-white rounded-[47px] mt-[-3px]"><h5 className="m-[0px]">{showcart()}</h5></div>
    </div>

    <div className="flex justify-center">
    <div className="grid justify-center p-[20px] pt-[74px] h-[318px]">
    <div className="h-[50px] bg-[#b4dcff] flex justify-center fixed w-[850px]">
      <div className="h-[50px] flex justify-center items-center font-[500] text-[20px]">Product Details</div>
    </div>
        {mycart.map((ele, ind) => {
          return (
            <div key={ele.id} className="w-[850px] h-[226px] rounded-[10px] pt-[55px]">


              <div className="flex justify-around pb-[10px] border-b-[1px] border-[black] bg-[#e2f2ff]">
                <div className="flex items-center gap-[47px]">
                  <div>
                  <img className="h-[190px]" src={ele.images} alt="" />
                  <h2 className="flex justify-center">{ele.title}</h2></div>
                  <div className="w-[200px]">{ele.description}</div>
                </div>


                <div className="grid justify-center items-center">

                  <div className="flex justify-center">Price: $ {ele.price}</div>

                  <div className="flex justify-center">
                    <button
                      className="pt-[6px] pb-[6px] pl-[25px] pr-[25px] rounded-[23px] bg-[#000000] text-[18px] text-[white]"
                      onClick={() => onClickHandler(ind)}
                    >
                      Remove
                    </button>
                  </div>

                  <div className="flex justify-center">
                  <div className="flex justify-center bg-[#588aff] h-[40px] rounded-[39px] text-[white] w-[125px]">
                    <div>
                      <button
                        className="pt-[9px] pb-[9px] w-[35px] flex justify-center"
                        onClick={() => onClickHandler2(ele)}
                      >
                        +
                      </button>
                    </div>
                    <div>
                      <h5 className="p-[8px] bg-[#000000] w-[35px] flex justify-center">
                        {ele.cartQuantity}
                      </h5>
                    </div>
                    <div>
                      <button
                        className="pt-[9px] pb-[9px] w-[35px] flex justify-center"
                        onClick={() => onClickHandler3(ind)}
                      >
                        -
                      </button  >
                    </div>
                  </div>
                  </div>

                  <div className="flex justify-center">Items Total: $ {ele.Price_change_on_quantity}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

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

        <div className="flex justify-center">
          <button className="pt-[10px] pb-[10px] pl-[67px] pr-[67px] bg-[#ff8316] text-white rounded-[3px] font-[500]" onClick={()=>navigate('/Order_summary')}>PLACE ORDER</button>
        </div>

      </div>

    </div>
      </>
    }

    </>
  );
}

export default Cart;
