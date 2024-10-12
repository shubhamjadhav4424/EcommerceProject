import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sendAddressData } from "./counterSlice";
import CartImage from './assets/shopping-cart.png'
import { useNavigate } from "react-router-dom";

function Delivery(){
    let [firstname, setFirstname]= useState();
    let [pincode, setPincode] = useState();
    let [mobilenumber, setMobilenumber]= useState();
    let [locality, setLocality] = useState();
    let [area, setArea] = useState();
    let [city, setCity] = useState();
    let [landmark, setLandmark]= useState();
    let [state, setState] = useState();
    let [alternate_number, setAlternate_number]= useState();
    let dispatch= useDispatch();
    let navigate = useNavigate();

    let cartcount= useSelector((state)=>state.counter.cartArr);

    function onChangeHandler_firstname(a){
        setFirstname(a.target.value)
    }

    function onChangeHandler_pincode(b){
        setPincode(b.target.value)
    }

    function onChangeHandler_mobilenumber(c){
        setMobilenumber(c.target.value)
    }

    function onChangeHandler_locality(d){
        setLocality(d.target.value)
    }

    function onChangeHandler_area(i){
        setArea(i.target.value)
    }

    function onChangeHandler_city(e){
        setCity(e.target.value)
    }

    function onChangeHandler_Landmark(f){
        setLandmark(f.target.value)
    }

    function onChangeHandler_state(g){
        setState(g.target.value)
    }

    function onChangeHandler_alternate_number(h){
        setAlternate_number(h.target.value)
    }

    function addressData(){
        let obj={
            firstname,
            pincode,
            mobilenumber,
            locality,
            area,
            city,
            landmark,
            state,
            alternate_number,
        }

        dispatch(sendAddressData(obj))
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

    return(
        <div>
            <div>
                <div>
                <div className="p-[12px] w-full bg-[#588aff] flex justify-center gap-[137px] pr-[50px] items-center">
    <div className=" text-[35px] font-[500] hover:cursor-pointer">Shopee</div>

    <div className="flex justify-center gap-[20px] items-center">
    <div><input className="pt-[10px] pb-[10px] pl-[22px] pr-[22px] w-[355px] rounded-[29px]" type="text" placeholder="Search for products" /></div> <div><button className="pt-[10px] pb-[10px] pl-[25px] pr-[25px] rounded-[29px] bg-[#1a1a1a] font-[450] text-[white]" >Search</button></div>
    </div>

    <div>
      <button className="pt-[10px] pb-[10px] pl-[35px] pr-[35px] bg-[#1a1a1a] text-[white] rounded-[35px]" onClick={()=>navigate('/Login')}>Login</button>
    </div>


    <div>
    <div className="hover: cursor-pointer p-[5px]"><img className="h-[40px]"src={CartImage} onClick={()=>navigate('/Cart')} alt="" /></div> <div className="absolute ml-[26px] mt-[-54px] text-[white] text-[18px] bg-[black] pl-[8px] pr-[8px] rounded-[15px]"><h5 className="m-[0px]">{cartcount_increasing()}</h5></div>
    </div>

    </div>

    <div className="flex justify-center items-center h-[110vh]">
        <div className="w-[1100px] bg-[aliceblue] h-[95vh]">
            <div className="grid justify-center gap-[25px] pt-[40px]">

                <div className="flex justify-center text-[22px] font-[500]">Manage Addresses</div>
                <div className="flex justify-center">Add A New Address</div>

                <div className="flex justify-center gap-[20px]">
                    <div className="grid justify-center gap-[15px]">
                        <div><input className="w-[250px] pt-[8px] pb-[8px] pl-[15px] pr-[15px] border-[1px] border-[gray]" type="text" placeholder="Name" value={firstname} onChange={(a)=>onChangeHandler_firstname(a)} /></div>
                        <div><input className="w-[250px] pt-[8px] pb-[8px] pl-[15px] pr-[15px] border-[1px] border-[gray]" type="text" placeholder="Pincode" value={pincode}  onChange={(b)=>onChangeHandler_pincode(b)} /></div>
                    </div>

                    <div className="grid justify-center gap-[15px]">
                        <div><input className="w-[250px] pt-[8px] pb-[8px] pl-[15px] pr-[15px] border-[1px] border-[gray]" type="text" placeholder="10-digit mobile number" value={mobilenumber} onChange={(c)=>onChangeHandler_mobilenumber(c)} /></div>
                        <div><input className="w-[250px] pt-[8px] pb-[8px] pl-[15px] pr-[15px] border-[1px] border-[gray]" type="text" placeholder="Locality" value={locality} onChange={(d)=>onChangeHandler_locality(d)}/></div>
                    </div>
                </div>

                <div><input className="w-[520px] h-[80px] border-[1px] border-[gray] p-[10px]" type="text" placeholder="Address (Area and Street)" value={area} onChange={(i)=>onChangeHandler_area(i)} /></div>

                <div className="flex justify-center gap-[20px]">
                    <div className="grid justify-center gap-[15px]">
                        <div><input className="w-[250px] pt-[8px] pb-[8px] pl-[15px] pr-[15px] border-[1px] border-[gray]" type="text" placeholder="City/District/Town" value={city} onChange={(e)=>onChangeHandler_city(e)} /></div>
                        <div><input className="w-[250px] pt-[8px] pb-[8px] pl-[15px] pr-[15px] border-[1px] border-[gray]" type="text" placeholder="Landmark (Option)" value={landmark} onChange={(f)=>onChangeHandler_Landmark(f)} /></div>
                    </div>

                    <div className="grid justify-center gap-[15px]">
                        <div><input className="w-[250px] pt-[8px] pb-[8px] pl-[15px] pr-[15px] border-[1px] border-[gray]" type="text" placeholder="State" value={state} onChange={(g)=>onChangeHandler_state(g)} /></div>
                        <div><input className="w-[250px] pt-[8px] pb-[8px] pl-[15px] pr-[15px] border-[1px] border-[gray]" type="text" placeholder="Alternate Phone Number" value={alternate_number} onChange={(h)=>onChangeHandler_alternate_number(h)} /></div>
                    </div>
                </div>

                <div className="grid gap-[10px]">
                    <div>Address Type</div>
                    <div className="flex gap-[10px]">
                        <div><input type="radio" /> Home</div>
                        <div><input type="radio" /> Work</div>
                    </div>
                </div>

                <div className="flex gap-[50px] items-center">
                    <div><button className="pl-[75px] pr-[75px] pt-[10px] pb-[10px] bg-[#588aff] text-white font-[500] shadow-xl" onClick={()=>addressData()}>SAVE</button></div>
                    <div><button className="text-[#2b62e2] font-[450]">CANCEL</button></div>
                </div>
                

            </div>
        </div>
    </div>
                </div>
            </div>
        </div>
    )
}

export default Delivery;