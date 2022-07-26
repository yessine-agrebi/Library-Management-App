import React, { useEffect } from "react";
import { Box, Modal, Typography, Stack } from "@mui/material";
import CancelRoundedIcon from "@mui/icons-material/CancelRounded";
import { useDispatch, useSelector } from "react-redux";
import { getLivreByID } from "../../features/livreSlice";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 2,
  height: "80%",
};
const ModalAffiche = (props) => {
  const dispatch = useDispatch();
  const id = props._id;
  const { livre } = useSelector((state) => state.livres);
  useEffect(() => {
    dispatch(getLivreByID(id));
  }, [dispatch, id]);
  return (
    <div>
      <Modal
        open={props.openAffiche}
        onClose={props.handleCloseAffiche}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div style={{ textAlign: "right" }}>
            <span
              style={{ cursor: "pointer" }}
              onClick={props.handleCloseAffiche}
            >
              <CancelRoundedIcon style={{ fontSize: "40px" }} />
            </span>
          </div>
          {livre ? (
            <Stack sx={{ flexDirection: "row" }}>
              <img
                src={`http://localhost:3001/public/images/${livre.couverture}`}
                style={{ width: "250px", height: "250px" }}
                alt="book"
              />
              <Stack sx={{ flexDirection: "column", marginLeft: "50px" }}>
                <Typography variant="h2" gutterBottom>
                  {livre.titre}
                </Typography>
                <Typography variant="p" gutterBottom>
                  ISBN : {livre.isbn}
                </Typography>
                <Typography variant="p" gutterBottom>
                  Edition Year : {livre.annedition}
                </Typography>
                <Typography variant="p" gutterBottom>
                  Price : {livre.prix}
                </Typography>
                <Typography variant="p" gutterBottom>
                  Q Stock: {livre.qtestock}
                </Typography>
                <Typography variant="p" gutterBottom>
                  Editor: {livre.maised ? livre.maised.maisonedit : "no editor"}
                </Typography>
                <Typography variant="p" gutterBottom>
                  Speciality: {livre.specialite
                    ? livre.specialite.nomspecialite
                    : "no specialite"}
                </Typography>
                <Typography variant="p" gutterBottom>
                  Author: {livre.auteurs ? livre.auteurs.nomauteur : "no authors"}
                </Typography>
              </Stack>
            </Stack>
          ) : (
            "book not found"
          )}
        </Box>
      </Modal>
    </div>
  );
};

export default ModalAffiche;
