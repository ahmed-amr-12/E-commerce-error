"use server"
import { GetMyToken } from '@/Actions/GetMyToken';
import axios from 'axios';


export type ShippingAddresstype = {
    
    shippingAddress: {
    
  details: string;
  phone: string;
  city: string;
    }
        
}

export async function creatCashOrder(cartID : string,shippingAddress: ShippingAddresstype) {


const token = await GetMyToken()


const {data} = await axios.post(`https://ecommerce.routemisr.com/api/v1/orders/${cartID}`, {shippingAddress}, {
  headers: {
    token: token as string
  }
})
return data

}








export async function creatVisaOrder(cartId : string,shippingAddress: ShippingAddresstype) {


const token = await GetMyToken()


const {data} = await axios.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=http://localhost:3000`, {shippingAddress}, {
  headers: {
    token: token as string
  }
})
return data

}