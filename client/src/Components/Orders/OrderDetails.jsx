import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
const StyledTableCell = styled(TableCell)(({ theme }) => ({
root: {
height: "20px"
},
[`&.${tableCellClasses.head}`]: {
backgroundColor: theme.palette.common.black,
color: theme.palette.common.white
},
[`&.${tableCellClasses.body}`]: {
fontSize: 14
}
}));
const StyledTableRow = styled(TableRow)(({ theme }) => ({
root: {
height: "20px"
},
"&:nth-of-type(odd)": {
backgroundColor: theme.palette.action.hover
},
// hide last border
"&:last-child td, &:last-child th": {
border: 0
}
}));
export default function AgGridDetail(props) {
return (
<TableContainer component={Paper}>
<Table sx={{ minWidth: 700, maxHeight:500, height:500 }} arialabel="customized table">
<TableBody>
{props.params.map((row) => (
<StyledTableRow key={row._id}>
<StyledTableCell align="right" style={{ width : 60 }}>
<img
style={{ height: 40, width : 60, borderRadius: '5%' }}
src=
{`http://localhost:3001/public/images/${row.id.image}`}
alt=""
/>
</StyledTableCell>
<StyledTableCell align="center" style={{ width : 100
}}>{row.id.titre}</StyledTableCell>
<StyledTableCell align="right" style={{ width : 40
}}>{row.quantitiy}</StyledTableCell>
<StyledTableCell align="right" style={{ width : 40
}}>{row.price.toFixed(3)}</StyledTableCell>
</StyledTableRow>
))}
</TableBody>
</Table>
</TableContainer>
);
}