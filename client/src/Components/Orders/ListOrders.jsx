import React, { useEffect } from "react";
import { useDispatch} from "react-redux";
import {getOrders} from "../../features/orderSlice";
import AfficheOrders from "./AfficheOrders";
const ListOrders=()=>{
const dispatch = useDispatch();
useEffect(() => {
dispatch(getOrders());
},[dispatch]);
return(
<div>
<AfficheOrders/>
</div>
)
}
export default ListOrders