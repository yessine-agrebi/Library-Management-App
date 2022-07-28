import React, { useState, useRef, useCallback, useMemo } from 'react';
import {useDispatch,useSelector} from "react-redux"
import {deleteOrder,updateOrder} from "../../features/orderSlice";
//npm i ag-grid-react
import { AgGridReact } from 'ag-grid-react'; // the AG Grid React Component
import 'ag-grid-community/dist/styles/ag-grid.css'; // Core grid CSS, always needed
import 'ag-grid-community/dist/styles/ag-theme-alpine.css'; // Optional theme CSS
import ListArtOrder from './ListArtOrder'
import NoteAltOutlinedIcon from '@mui/icons-material/NoteAltOutlined';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
const AfficheOrders = () => {
const dispatch= useDispatch();
const {orders} = useSelector((state) =>state.order);
const gridRef = useRef(); // Optional - for accessing Grid's API
const[status,setStatus]=useState();
const editStatusOrder=(params)=>{ 
return (<select value={status} onChange={e => {
setStatus(e.target.value);
dispatch(updateOrder({_id:params.data._id,status:e.target.value}))
}}>
<option>{params.data.status}</option>
<option>Not processed</option>
<option>Processing</option>
<option>Shipped</option>
<option>Delivered</option>
<option>Cancelled</option>
</select>)
}
const deleteOrd=(params)=>{ 
return <span
onClick={()=>{dispatch(deleteOrder(params.data._id))}}
style={{ cursor: 'pointer'}}>
<DeleteForeverRoundedIcon color='error' />
</span>
}
const ShowDetail = useCallback((event) => {
return <span
onClick={()=>{handleOpen(); setParams(event.node.data.allProduct)}}
style={{ cursor: 'pointer'}}>
<MoreHorizIcon color='warning' />
</span>
}, []);
var filterParams = {
comparator: (filterLocalDateAtMidnight, cellValue) => {
var d = cellValue.toLocaleString();
var datePartss = d.split('-');
var j = datePartss[2].substr(0,2);
var dateAsString = `${j}/${datePartss[1]}/${datePartss[0]}`;
if (dateAsString == null) return -1;
var dateParts = dateAsString.split('/');
var cellDate = new Date(
Number(dateParts[2]),
Number(dateParts[1]) - 1,
Number(dateParts[0])
);
if (filterLocalDateAtMidnight.getTime() === cellDate.getTime()) {
return 0;
}
if (cellDate < filterLocalDateAtMidnight) {
return -1;
}
if (cellDate > filterLocalDateAtMidnight) {
return 1;
}
},
browserDatePicker: true,
minValidYear: 2021,
maxValidYear: 2027,
};
function dateFormattercreatedAt(params) {
var dateAsString = params.data.createdAt.toLocaleString();
var dateParts = dateAsString.split('-');
var j = dateParts[2].substr(0,2);
return `${j}/${dateParts[1]}/${dateParts[0]}`;
}
function dateFormatterupdatedAt(params) {
var dateAsString = params.data.updatedAt.toLocaleString();
var dateParts = dateAsString.split('-');
var j = dateParts[2].substr(0,2);
return `${j}/${dateParts[1]}/${dateParts[0]}`;
}
// Each Column Definition results in one Column.
const [columnDefsOrder, setColumnDefsOrders] = useState([
{ headerName:"Details",cellRenderer: params => {
return ShowDetail(params);
},
width:100},
{ headerName: 'Client',field: 'user.username', filter: true, filter: 
'agTextColumnFilter', floatingFilter: true,},
{field: 'amount', filter: true, filter: 'agNumberColumnFilter', 
floatingFilter: true,},
{field: 'status', filter: true, filter:'agTextColumnFilter', floatingFilter: true, 
editable: 
true,cellRenderer: params => {
return
editStatusOrder(params);
},},
{field: 'createdAt' , filter: 'agDateColumnFilter',
floatingFilter: true, 
filterParams: filterParams, 
valueFormatter: dateFormattercreatedAt, },
{field: 'updatedAt', filter: 'agDateColumnFilter',
floatingFilter: true, 
filterParams: filterParams, 
valueFormatter: dateFormatterupdatedAt, },
{ headerName: 'Delete',field: '_id', cellRenderer: params => {
return deleteOrd(params);
},
width:100
},
]);
// DefaultColDef sets props common to all Columns
const defaultColDef = useMemo( ()=> ({
sortable: true
}));
const[open,setOpen] = useState("");
const[params,setParams] = useState("");
const handleOpen=()=>{ 
setOpen(true)
}
const handleClose=()=>{
setOpen(false)
setParams("")
}
return (
<div>
<div>
{open && (
<ListArtOrder
handleClose={handleClose}
open={open}
params={params}
/>
)}
</div>
{/* On div wrapping Grid a) specify theme CSS Class Class and b) sets 
Grid size */}
{orders && orders?.length > 0 ? <div className="ag-theme-alpine"
style={{position:'fixed',top:200, left: 300, width: 1210, height: 400}}>
<AgGridReact
ref={gridRef} // Ref for accessing Grid's API
rowData={orders} // Row Data for Rows
columnDefs={columnDefsOrder} // Column Defs for Columns
defaultColDef={defaultColDef} // Default Column Properties
rowSelection={'multiple'}
//onRowSelected={onRowSelected}
/>
</div>:null}
</div>
);
};
export default AfficheOrders;