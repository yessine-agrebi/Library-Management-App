import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import OrderDetails from './OrderDetails';
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
const style = {
position: 'absolute',
top: '50%',
left: '50%',
transform: 'translate(-50%, -50%)',
width: 800,
height: 600,
maxHeight: 600,
bgcolor: 'background.paper',
border: '2px solid #000',
boxShadow: 24,
color: '#000',
borderRadius: '20px',
padding: '30px 30px 70px'
};
export default function ModalArticle(props) {
return (
<div>
<Modal
open={props.open}
onClose={props.handleClose}
aria-labelledby="modal-modal-title"
aria-describedby="modal-modal-description"
>
<Box sx={style}>
{/* Close Modal */}
<div style={{ textAlign: 'right' }}>
<span
style={{ cursor: 'pointer'}}
onClick={props.handleClose}
>
<CancelRoundedIcon style={{ fontSize: "40px"}} />
</span>
</div>
<div>
<OrderDetails params={props.params} />
</div>
</Box>
</Modal>
</div>
);
}
