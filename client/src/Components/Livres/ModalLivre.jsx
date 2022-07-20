import { Box, Modal, Typography } from "@mui/material";
import React from "react";
import ModifLivre from "./ModifLivre";
import AjoutLivre from "./AjoutLivre";
import CancelRoundedIcon from "@mui/icons-material/CancelRounded";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  overflow: "scroll",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  height: "100%",
  display: "block",
};
const ModalLivre = (props) => {
  return (
    <div>
      <Modal
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div style={{ textAlign: "right" }}>
            <span style={{ cursor: "pointer" }} onClick={props.handleClose}>
              <CancelRoundedIcon style={{ fontSize: "40px" }} />
            </span>
          </div>
          <Typography>
            {props._id ? (
              <ModifLivre _id={props._id} />
            ) : (
              <AjoutLivre handleClose={props.handleClose} />
            )}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default ModalLivre;
