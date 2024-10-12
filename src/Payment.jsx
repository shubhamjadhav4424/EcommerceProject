import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import BhimUPI from "./assets/Bhim.png";
import Gpay from "./assets/google-pay-removebg-preview.png";
import Ppe from "./assets/Phonepe.png";
import { useNavigate } from "react-router-dom";
import { Accordion, AccordionItem } from '@szhsin/react-accordion';

function Payment() {
  let mycart = useSelector((state) => state.counter.cartArr);
  let [bhimupi, setBhimupi] = useState(false);
  let [gift, setGift] = useState(false);
  let [giftcardcode, setGiftcardcode] = useState();
  let navigate = useNavigate();
  let [display, setDisplay] = useState();
  // let [second, setSecond] = useState(60);
  // let [minutes, setMinutes] = useState(4);



  function bhim() {
    if (bhimupi == false) {
      setBhimupi(true);
    } else {
      setBhimupi(false);
    }
  }

  function giftHandler() {
    if (gift == false) {
      setGift(true);
    } else {
      setGift(false);
    }
  }

  function showcart() {
    let cartValue = [0];

    mycart.map((ele, ind) => {
      cartValue.push(ele.cartQuantity);
    });

    let addition = cartValue.reduce((pre, next) => {
      return pre + next;
    });

    return addition;
  }

  function Total_Amount() {
    let cartValue = [0];

    mycart.map((ele, ind) => {
      cartValue.push(ele.Price_change_on_quantity);
    });

    let addition = cartValue.reduce((pre, next) => {
      return pre + next;
    });

    return addition;
  }

  function onChangeHandler(e) {
    setGiftcardcode(e.target.value);
  }

  // function secondscount(){
  //     for (let i=0; i<=120; i++) {

  //         setTimeout(()=>{
  //           setSecond(second-i);
  //           },i*1000)
  //     }
  // }

  // function minutescount(){

  //   for( let i=0; i<=4; i++){
  //     setTimeout(()=>{
  //     setMinutes(4-i);
  //     }, i*60000)
  //   }
  // }

  // useEffect(()=>{
  //   secondscount();
  //   minutescount();
  // },[])

  

  
  // useEffect(() => {
  //   const seconds = minutes * 60; 
  //   let rs = seconds;
  
  //   const countdown = () => {
  //     if (rs >=  0) {
  //       const mins = Math.floor(rs / 60);
  //       const secs = rs % 60;
  
  //       setMinutes(mins);
  //       setSecond(secs);
  
  //       rs--;
  
  //       setTimeout(countdown, 1000);
  //     }
  //   };
  
  //   countdown();
  
     
  //   return () => {
  //     clearTimeout(countdown);
  //   };
  // }, []);
  

  function Gift_card_minus() {
    if (giftcardcode == "Shubham30") {
      if (Total_Amount() >= 500) {
        setDisplay(
          `Final Amount Payable - ${
            Total_Amount() - (Total_Amount() * 30) / 100
          }`
        );
      } else {
        setDisplay("This code is valid for shopping amount more than $500");
      }
    } else {
      setDisplay("Please enter valid gift card code");
    }
  }

  return (
    <>
      <div className="flex pl-[210px] p-[12px] bg-[#588aff] fixed w-full">
        <div className=" text-[35px] font-[500] hover:cursor-pointer">
          Shopee
        </div>
      </div>

      <div className="flex justify-center mb-[600px]">
        <div className="mt-[100px] h-[50px] grid gap-[20px]">
          <div className="bg-[#e2f2ff] flex justify-center gap-[48px] p-[10px]">
            <div className="grid w-[513px] gap-[10px]">
              <div className="text-[gray] flex items-center gap-[10px]">
                <span className="pl-[5px] pr-[5px] pt-[2px] pb-[2px] bg-[gray] text-[10px] text-white">
                  1
                </span>
                <span>LOGIN</span>
              </div>
            </div>

            <div>
              <button className="pt-[10px] pb-[10px] pl-[35px] pr-[35px] rounded-[2px] w-[150px] bg-white border-[1px] border-[gray] text-[#588aff] font-[500]">
                Completed
              </button>
            </div>
          </div>

          <div className="bg-[#e2f2ff] flex justify-center gap-[48px] p-[20px]">
            <div className="grid w-[513px] gap-[15px]">
              <div className="text-[gray] flex items-center gap-[10px]">
                <span className="pl-[5px] pr-[5px] pt-[2px] pb-[2px] bg-[gray] text-[10px] text-white">
                  2
                </span>
                <span>DELIVERY ADDRESS</span>
              </div>
            </div>

            <div>
              <button className="pt-[10px] pb-[10px] pl-[35px] pr-[35px] w-[150px] rounded-[2px] bg-white border-[1px] border-[gray] text-[#588aff] font-[500]">
                Submitted
              </button>
            </div>
          </div>

          <div className="bg-[#e2f2ff] flex justify-center gap-[48px] p-[20px]">
            <div className="grid w-[513px] gap-[15px]">
              <div className="text-[gray] flex items-center gap-[10px]">
                <span className="pl-[5px] pr-[5px] pt-[2px] pb-[2px] bg-[gray] text-[10px] text-white">
                  3
                </span>
                <span>ORDER SUMMARY</span>
              </div>
            </div>

            <div>
              <button className="pt-[10px] pb-[10px] pl-[35px] pr-[35px] rounded-[2px] w-[150px] bg-white border-[1px] border-[gray] text-[#588aff] font-[500]">
                Reviewed
              </button>
            </div>
          </div>

          <div className="w-[750px]">
            <div className="w-full bg-[#4366ff] text-white p-[10px] pl-[72PX] flex items-center gap-[20px]">
              <span className="pl-[5px] pr-[5px] pt-[2px] pb-[2px] bg-[#ffffff] text-black text-[13px]">
                4
              </span>
              <span>PAYMENT OPTIONS</span>
            </div>
          </div>

          <Accordion className="grid gap-[20px]">
            <AccordionItem className="bg-[#f7fbff] py-[18px] pl-[20px] pr-[20px] hover:bg-[#f0f0f0] cursor-pointer" header="BHIM UPI"> 
              <div className="pt-[20px] grid gap-[20px]">
              <div className="flex justify-center gap-[15px] border-t-[1px] border-[black] pt-[20px]"><div><img className="h-[30px]" src={BhimUPI} alt="logo" /></div> <div className="text-[18px]">BHIM UPI</div></div>
              <div className="flex justify-center"><button className="pt-[10px] pb-[10px] pr-[35px] pl-[35px] shadow-lg bg-[orange] text-[white]">Continue</button></div>
              </div>
            </AccordionItem>

            <AccordionItem className="bg-[#f7fbff] py-[18px] pl-[20px] pr-[20px] hover:bg-[#f0f0f0] cursor-pointer" header="Google Pay"> 
              <div className="pt-[20px] grid gap-[20px]">
              <div className="flex justify-center gap-[15px] border-t-[1px] border-[black] pt-[20px]"><div><img className="h-[30px]" src={Gpay} alt="logo" /></div> <div className="text-[18px]">Google Pay</div></div>
              <div className="flex justify-center"><button className="pt-[10px] pb-[10px] pr-[35px] pl-[35px] shadow-lg bg-[orange] text-[white]">Continue</button></div>
              </div>
            </AccordionItem>

            <AccordionItem className="bg-[#f7fbff] py-[18px] pl-[20px] pr-[20px] hover:bg-[#f0f0f0] cursor-pointer" header="Phone Pe"> 
              <div className="pt-[20px] grid gap-[20px]">
              <div className="flex justify-center gap-[px] border-t-[1px] border-[black] pt-[20px]"><div><img className="h-[30px]" src={Ppe} alt="logo" /></div> <div className="text-[18px]">Phone Pe</div></div>
              <div className="flex justify-center"><button className="pt-[10px] pb-[10px] pr-[35px] pl-[35px] shadow-lg bg-[orange] text-[white]">Continue</button></div>
              </div>
            </AccordionItem>
          </Accordion>

          <div className="bg-[#e2f2ff] p-[20px] grid gap-[24px]">
            <div
              className="flex gap-[20px] hover:cursor-pointer"
              onClick={() => giftHandler()}
            >
              <span>+</span>
              <span>Add Gift Card</span>
            </div>

            {gift ? (
              <>
                <div className="flex justify-center gap-[28px]">
                  <input
                    className="p-[8px] w-[320px] rounded-[30px]"
                    type="text"
                    placeholder="Enter Gift Card Code"
                    value={giftcardcode}
                    onChange={(e) => onChangeHandler(e)}
                  />{" "}
                  <button
                    className="pt-[5px] pb-[5px] pl-[35px] pr-[35px] rounded-[29px] bg-[orange]"
                    onClick={() => Gift_card_minus()}
                  >
                    Submit
                  </button>
                </div>
                <div className="flex justify-center font-[500]">{display}</div>
              </>
            ) : (
              <></>
            )}
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
          </div>
        </div>
      </div>
    </>
  );
}

export default Payment;
