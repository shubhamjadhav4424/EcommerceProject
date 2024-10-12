import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {sendLoginData} from "./counterSlice";
import CartImage from './assets/shopping-cart.png'
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


function Login() {
  let [Username, setUsername] = useState();
  let [Password, setPassword] = useState();
  let [Number, setNumber] = useState();
  let [email, setEmail] = useState();
  let dispatch= useDispatch();
  let navigate= useNavigate();
  let cartcount= useSelector((state)=>state.counter.cartArr);

  function onChangeHandler_username(a) {
    setUsername(a.target.value);
  }

  function onChangeHandler_password(b) {
    setPassword(b.target.value);
  }

  function onChangeHandler_number(c) {
    setNumber(c.target.value);
  }

  function onChangeHandler_email(d){
    setEmail(d.target.value)
  }


  function savedata() {
    const obj = {
      Username,
      Password,
      Number,
      email,
    };

    dispatch(sendLoginData(obj))
    navigate('/')

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

  

  return (

    <>
    <div className="p-[12px] fixed w-full bg-[#588aff] flex justify-center gap-[137px] pr-[50px] items-center">
    <div className=" text-[35px] font-[500] hover:cursor-pointer">Shopee</div>

    <div className="flex justify-center gap-[20px] items-center">
    <div><input className="pt-[10px] pb-[10px] pl-[22px] pr-[22px] w-[355px] rounded-[29px]" type="text" placeholder="Search for products" /></div> <div><button className="pt-[10px] pb-[10px] pl-[25px] pr-[25px] rounded-[29px] bg-[#1a1a1a] font-[450] text-[white]" >Search</button></div>
    </div>


    <div>
    <div className="hover: cursor-pointer p-[5px]"><img className="h-[40px]"src={CartImage} onClick={()=>navigate('/Cart')} alt="" /></div> <div className="absolute ml-[26px] mt-[-54px] text-[white] text-[18px] bg-[black] pl-[8px] pr-[8px] rounded-[15px]"><h5 className="m-[0px]">{cartcount_increasing()}</h5></div>
    </div>

    </div>

    
    <div className="flex justify-center items-center h-[100vh]">
      <div>

        <div className="grid justify-center gap-[20px]">
            <div>
              <input
                className="border-[1px] border-black p-[10px] w-[350px] rounded-[30px]"
                type="text"
                placeholder="Enter username"
                value={Username}
                onChange={(a) => onChangeHandler_username(a)}
              />
            </div>
            <div>
              <input
                className="border-[1px] border-black p-[10px] w-[350px] rounded-[30px]"
                type="Text"
                placeholder="Enter password"
                value={Password}
                onChange={(b) => onChangeHandler_password(b)}
              />
            </div>
            <div>
              <input
                className="border-[1px] border-black p-[10px] w-[350px] rounded-[30px]"
                type="Text"
                placeholder="Enter Email Address"
                value={email}
                onChange={(d) => onChangeHandler_email(d)}
              />
            </div>
            <div>
              <input
                className="border-[1px] border-black p-[10px] w-[350px] rounded-[30px]"
                type="Text"
                placeholder="Enter mobile number"
                value={Number}
                onChange={(c) => onChangeHandler_number(c)}
              />
            </div>

            <div className="flex justify-center">
            <button className="pt-[8px] pb-[8px] pl-[35px] pr-[35px] bg-[black] text-white rounded-[30px]" onClick={()=>savedata()}>Submit</button>
            </div>
          </div>
      </div>
    </div>
    </>
  );
}

export default Login;