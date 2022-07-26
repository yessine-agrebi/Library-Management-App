import { Box, Modal, Typography } from "@mui/material";
import React from 'react'
import AjoutAuteur from './AjoutAuteur'
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
const ModalAuteur = (props) => {
  return (
    <div>
      <Modal
        open={props.open}
        onClose={props.handleCloseAuteur}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
      <Box sx={style}>
      <div style={{ textAlign: 'right' }}>
<span
style={{ cursor: 'pointer'}}
onClick={props.handleCloseAuteur}
>
<CancelRoundedIcon style={{ fontSize: "40px"}} />
</span>
</div>
      <Typography>
<AjoutAuteur handleClose={props.handleCloseAuteur} />
</Typography>
      </Box>
        </Modal>
    </div>
  )
}

export default ModalAuteur
