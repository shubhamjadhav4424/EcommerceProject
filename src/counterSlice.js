import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  Addto_cart_increase: 0,
  cartArr:[],
  pro_details_cart:[],
  save_login_details:[],
  save_address_details: [],
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {


      AddtoCart : (state,action)=>{
        const itemIndex = state.cartArr.findIndex(
          (item) => item.id === action.payload.id
        );

        if(itemIndex >=0){
          state.cartArr[itemIndex].cartQuantity+=1;
          let increase_initial_quantity=action.payload.cartQuantity+1;
          let save_changed_price=state.cartArr[itemIndex].price*increase_initial_quantity;
          state.cartArr[itemIndex].Price_change_on_quantity=save_changed_price;
          
        }

        else{
          const tempProduct = {...action.payload, cartQuantity:1, Price_change_on_quantity:action.payload.price,};
          state.cartArr.push(tempProduct);
          
        }

      },

        deleteItem : (state,action)=>{
          state.cartArr.splice(action.payload,1)
        },

        cartDecrement : (state,action)=>{

          if(state.cartArr[action.payload].cartQuantity===1){
            state.cartArr.splice(action.payload,1)
          }

          else{
            state.cartArr[action.payload].cartQuantity -=1;
            let substracted_price= state.cartArr[action.payload].price* state.cartArr[action.payload].cartQuantity;
            state.cartArr[action.payload].Price_change_on_quantity=substracted_price;
          }
          
        },

        Prodetails : (state,action)=>{
          state.pro_details_cart.push(action.payload)
        },

        Pro_details_delete : (state,action)=>{
          state.pro_details_cart.splice(action.payload,1)
        },

        sendLoginData : (state,action)=>{
          state.save_login_details.push(action.payload);
          
        },

        sendAddressData : (state,action)=>{
          state.save_address_details.push(action.payload)
          
        },
    },
  })

export const { AddtoCart, deleteItem, cartDecrement, Prodetails, Pro_details_delete, sendLoginData, sendAddressData } = counterSlice.actions

export default counterSlice.reducer

