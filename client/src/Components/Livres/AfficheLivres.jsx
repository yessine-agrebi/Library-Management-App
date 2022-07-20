import React, { useState } from "react";
import { removeSelectedLivre } from "../../features/livreSlice";
import MUIDataTable from "mui-datatables";
import { ThemeProvider } from "@mui/styles";
import { createTheme } from "@mui/material/styles";
import ReactLoading from "react-loading";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteLivre } from "../../features/livreSlice";
import NoteAltOutlinedIcon from "@mui/icons-material/NoteAltOutlined";
import DeleteForeverRoundedIcon from "@mui/icons-material/DeleteForeverRounded";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import { Button } from "@mui/material";
import ModalLivre from "./ModalLivre";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ModalAffiche from "./ModalAffiche";

const AfficheLivres = () => {
  const [open, setOpen] = useState("");
  const [openAffiche, setOpenAffiche] = useState("");
  const [_id, set_id] = useState("");
  const dispatch = useDispatch();
  const { livres, isLoading, error } = useSelector((state) => state.livres);
  //open Modal
  const handleOpen = () => {
    setOpen(true);
  };
  //close Modal
  const handleClose = () => {
    setOpen(false);
    set_id("");
    dispatch(removeSelectedLivre());
  };
  const handleCloseAffiche = () => {
    setOpenAffiche(false);
    set_id("");
    dispatch(removeSelectedLivre());
  };
  // Edit Livre
  const editLivre = (value) => {
    setOpen(true);
    set_id(value);
    console.log(value);
  };

  const afficheLivre = (value) => {
    setOpenAffiche(true);
    set_id(value);
    console.log(value);
  };
  // delete livre
  const handleDelete = (id) => {
    if (window.confirm("Delete Book Yes/No")) {
      dispatch(deleteLivre(id));
    }
  };
  const url_imgs = "http://localhost:3001/public/images/";
  const columns = [
    {
      label: "ISBN",
      name: "isbn",
    },
    {
      label: "Title",
      name: "titre",
    },
    {
      label: "Cover",
      name: "couverture",
      options: {
        customBodyRender: (rowdata) => (
          <img
            style={{ height: 150, width: 100, borderRadius: "10%" }}
            src={`${url_imgs}${rowdata}`}
            alt=""
          />
        ),
      },
    },

    {
      label: "Price",
      name: "prix",
    },
    {
      label: "Qte Stock",
      name: "qtestock",
    },
    {
      name: "_id",
      label: "Actions",
      options: {
        customBodyRender: (value) => (
          <div>
            <span
              onClick={() => afficheLivre(value)}
              style={{ cursor: "pointer" }}
            >
              <VisibilityIcon color="primary" />
            </span>
            <span
              onClick={() => editLivre(value)}
              style={{ cursor: "pointer" }}
            >
              <NoteAltOutlinedIcon color="success" />
            </span>
            <span
              onClick={() => handleDelete(value)}
              style={{ cursor: "pointer" }}
            >
              <DeleteForeverRoundedIcon color="error" />
            </span>
          </div>
        ),
      },
    },
  ];

  const renderBooks = () => {
    if (isLoading)
      return (
        <center>
          <ReactLoading type="spokes" color="red" height={"8%"} width={"8%"} />
        </center>
      );
    if (error) return <p>can't load books list..</p>;

    return (
      <React.Fragment>
        {livres ? (
          <ThemeProvider theme={createTheme()}>
            <MUIDataTable
              title="Book List"
              data={livres}
              columns={columns}
              options={{
                rowsPerPageOptions: [5, 10, 15, 100],
              }}
            />
          </ThemeProvider>
        ) : null}
      </React.Fragment>
    );
  };

  return (
    <div style={{ position: "absolute", top: 90, left: 250, width: "75%" }}>
      <div>
        {open && <ModalLivre handleClose={handleClose} open={open} _id={_id} />}
      </div>
      <div>
        {openAffiche && (
          <ModalAffiche
            handleCloseAffiche={handleCloseAffiche}
            openAffiche={openAffiche}
            _id={_id}
          />
        )}
      </div>
      <Button
        variant="contained"
        color="primary"
        style={{ marginLeft: 10 }}
        onClick={() => handleOpen()}
      >
        <AddCircleRoundedIcon style={{ fontSize: "20px" }} className="me-2" />
        Add Book
      </Button>
      <div style={{ margin: 10 }}>{renderBooks()}</div>
    </div>
  );
};

export default AfficheLivres;
