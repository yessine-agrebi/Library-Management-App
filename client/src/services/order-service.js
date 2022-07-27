import Axios from "../Axios/Api";
const ORDER_API = '/orders';
const GetOrder=async()=> {
return await Axios.get(ORDER_API);
}
const GetOrderById=async(id)=> { 
return await Axios.get(ORDER_API +'/' + id
);
}
const DeleteOrder=async(id)=> {
return await Axios.delete(ORDER_API +'/' + id)
}
const AddOrder=async(order)=> {
return await Axios.post(ORDER_API, order);
}
const EditOrder=async(obj)=> { 
return await Axios.put(ORDER_API + '/' + obj._id, obj )
}
export const OrderService = {
GetOrder,
GetOrderById,
DeleteOrder,
AddOrder,
EditOrder
}
