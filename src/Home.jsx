import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddtoCart, Prodetails } from "./counterSlice";
import { useNavigate } from "react-router-dom";
import CartImage from './assets/shopping-cart.png'
import { Slide, ToastContainer, Zoom, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Menu_img from './assets/Menu.png'

function Home() {
  let [product, setProduct] = useState([]);
  let dispatch = useDispatch();
  let navigate = useNavigate();
  let [filtered, setFiltered] = useState([]);
  let cartcount= useSelector((state)=>state.counter.cartArr);
  let [filter, setFilter] = useState(false);
  


  async function gettingdata() {
    let response = await fetch("https://dummyjson.com/products");
    let data = await response.json();
    setProduct(data.products);
    
  }

  useEffect(() => {
    gettingdata();
  }, []);
  
  
  

  function onClickHandler(ele) {
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

  function onClickHandler1(ele){
    dispatch(Prodetails(ele))
    navigate('/Product_details')
  }

  function onClickFilter_true_false(){
    if(filter==false){
      setFilter(true)
    }

    else if(filter==true){
      setFilter(false)
    }
  }

  function onClickFilter1(){

    let Filtered=[];

    product.map((ele,ind)=>{

      if(ele.category=="beauty"){
        Filtered.push(ele);
      }
      
    })

    setFiltered(Filtered);
  }

  function onClickFilter2(){
    let Filtered=[];

    product.map((ele,ind)=>{

      if(ele.category=="fragrances"){
        Filtered.push(ele);
      }
      
    })

    setFiltered(Filtered);
  }


  function onClickFilter3(){

    let Filtered=[];

    product.map((ele,ind)=>{

      if(ele.category=="furniture"){
        Filtered.push(ele);
      }
      
    })

    setFiltered(Filtered);
  }


  function onClickFilter4(){

    let Filtered=[];

    product.map((ele,ind)=>{

      if(ele.category=="groceries"){
        Filtered.push(ele);
      }
      
    })

    setFiltered(Filtered);
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

    <div className="p-[12px] fixed w-full bg-[#588aff] flex justify-center gap-[137px] pr-[50px] items-center">
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

    <div className="p-[10px] pl-[40px] w-full bg-[rgb(184,205,255)] flex justify-start gap-[41px] pr-[50px] items-center pt-[100px]">
      <button className="pt-[10px] pb-[10px] pl-[35px] pr-[35px] bg-[#1a1a1a] text-[white] rounded-[35px]" onClick={()=>onClickFilter_true_false()}>Filter</button>

      {filter ?
      <>
      <div className="grid justify-center gap-[10px] absolute mt-[352px] bg-[#80808030] p-[38px] rounded-[10px]">
      <button className="pt-[6px] pb-[6px] pl-[35px] pr-[35px] bg-[#d09e5c] rounded-[35px] hover:bg-[#ff4040]" onClick={()=>onClickFilter1()}>Beauty</button> 
      <button className="pt-[6px] pb-[6px] pl-[35px] pr-[35px] bg-[#d09e5c] rounded-[35px] hover:bg-[#ff4040]" onClick={()=>onClickFilter4()}>Groceries</button>
      <button className="pt-[6px] pb-[6px] pl-[35px] pr-[35px] bg-[#d09e5c] rounded-[35px] hover:bg-[#ff4040]" onClick={()=>onClickFilter3()}>Furniture</button>
      <button className="pt-[6px] pb-[6px] pl-[35px] pr-[35px] bg-[#d09e5c] rounded-[35px] hover:bg-[#ff4040]" onClick={()=>onClickFilter2()}>Fragrances</button>
      </div>
      </>
      :
      <>
      </>
      }

      <div><button className="pt-[10px] pb-[10px] pl-[35px] pr-[35px] bg-[#1a1a1a] text-[white] rounded-[35px]" onClick={()=>navigate('/Delivery_Address')}>Delivery Addresss</button></div>
    </div>


    <div>
      {
        filter?
        <>
            <div className="grid grid-cols-5 pl-[30px]">
      {
        filtered.map((ele,ind)=>{
          return(
            <div className="w-[275px] mt-[30px] bg-[#c5ede1] p-[20px] rounded-[10px]" key={ele.id}>
            <div className="mb-[15px] flex justify-center hover: cursor-pointer" ><img src={ele.thumbnail} onClick={()=>onClickHandler1(ele)} alt="" /></div>
            <div className="mb-[15px] flex justify-center"><h2 className="font-[450] text-[17px]">{ele.title}</h2></div>
            <div className="mb-[15px] flex justify-center"><h2 className="font-[450] text-[17px]">Price: ${ele.price}</h2></div>
            <div className="mb-[15px] flex justify-center"><h2 className="font-[450] text-[15px]">Brand: {ele.brand}</h2></div>
    
            <div className="flex justify-around">
              <button
                className="p-[12px] text-[17px] bg-[orange] rounded-[10px] font-[450]"
                onClick={()=>onClickHandler(ele)}
              >
                Add to Cart
              </button>
    
              <button
                className="p-[12px] text-[17px] bg-[#ffff67] rounded-[10px] font-[475]"
                onClick={()=>onClickHandler(ele)}
              >
                Buy Now
              </button>
            </div>
          </div>
          )
        })
      }
    </div>
        </>
        
        :

        <>
              <div className="grid grid-cols-5 gap-[35px] bg-[#f6fdff] pt-[42px] p-[23px]">

{product.map((ele, ind) =>

{
  return (
    <div key={ele.id} className="w-[275px] shadow-xl bg-[#c5ede1] rounded-[10px]">
      <div className="w-[275px] p-[15px]" key={ele.id}>
        <div className="mb-[15px] flex justify-center hover: cursor-pointer"><img src={ele.thumbnail} onClick={()=>onClickHandler1(ele)} alt="" /></div>
        <div className="mb-[15px] flex justify-center"><h2 className="font-[450] text-[17px]">{ele.title}</h2></div>
        <div className="mb-[15px] flex justify-center"><h2 className="font-[450] text-[17px]">Price: ${ele.price}</h2></div>
        <div className="mb-[15px] flex justify-center"><h2 className="font-[450] text-[15px]">Brand: {ele.brand}</h2></div>

        <div className="flex justify-around">
          <button
            className="p-[12px] text-[17px] bg-[orange] rounded-[10px] font-[450]"
            onClick={()=>onClickHandler(ele)}
          >
            Add to Cart
          </button>

          <button
            className="p-[12px] text-[17px] bg-[#ffff67] rounded-[10px] font-[475]"
            onClick={()=>onClickHandler(ele)}
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}

)}
</div>
        </>
      }
    </div>

    </>
  );
}

export default Home;
