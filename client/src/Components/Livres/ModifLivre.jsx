import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { useDispatch, useSelector } from "react-redux";
import {
  getLivreByID,
  getLivres,
  updateLivre,
} from "../../features/livreSlice";
import axios from "axios";
import { Form } from "react-bootstrap";
import { getAuteurs } from "../../features/auteursSlice";
import { getEditeurByID, getEditeurs } from "../../features/editeurSlice";
import {
  getSpecialiteByID,
  getSpecialites,
} from "../../features/specialiteSlice";
import ModalAuteur from "../Auteurs/ModalAuteur";
import ClearIcon from "@mui/icons-material/Clear";
import ModalEditeur from "../Editeurs/ModalEditeur";
import { livreService } from "../../services/livres";
import { auteurService } from "../../services/auteurs";

const ModifLivre = (props) => {
  const [_id, set_id] = useState(props._id);
  const [isbn, setIsbn] = useState("");
  const [titre, setTitre] = useState("");
  const [couverture, setCouverture] = useState("");
  const [qtestock, setQteStock] = useState("");
  const [annedition, setAnnedition] = useState();
  const [prix, setPrix] = useState("");
  const [auteurs, setAuteurs] = useState([{}]);
  const [maised, setMaisonEdit] = useState("");
  const [specialite, setSpecialite] = useState("");
  //Global States
  const { authors } = useSelector((state) => state.authors);
  const { editeurs } = useSelector((state) => state.editeurs);
  const { editeur } = useSelector((state) => state.editeurs);
  const { specialites } = useSelector((state) => state.specialites);
  const { spec } = useSelector((state) => state.specialites);
  const { livre } = useSelector((state) => state.livres);
  //fetch data
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAuteurs());
    dispatch(getEditeurs());
    dispatch(getSpecialites());
    dispatch(getLivreByID(_id));
<<<<<<< HEAD
=======
    console.log("the id is " + _id);
>>>>>>> 32b11f3e0eddfaf6f31c616c6610e4c90cb3ef5d
  }, []);

  useEffect(() => {
    setIsbn(livre.isbn);
    setTitre(livre.titre);
    setCouverture(livre.couverture);
    setQteStock(livre.qtestock);
    setAnnedition(livre.annedition);
    setPrix(livre.prix);
    setAuteurs(livre.auteurs);
    setMaisonEdit(livre.maised);
    setSpecialite(livre.specialite);
<<<<<<< HEAD
=======
    console.log(auteurs);
>>>>>>> 32b11f3e0eddfaf6f31c616c6610e4c90cb3ef5d
  }, []);

  // modals states
  const [openModalAuteur, setOpenModalAuteur] = useState();
  const [openModalEditeur, setopenModalEditeur] = useState();
  //open Modal
  const handleOpen = (action) => {
    if (action === "auteur") {
      setOpenModalAuteur(true);
    } else if (action === "editeur") {
      setopenModalEditeur(true);
    }
  };
  //close Modal
  const handleCloseAuteur = () => {
    setOpenModalAuteur(false);
  };
  const handleCloseEditeur = () => {
    setopenModalEditeur(false);
  };

  // send data to backend
  const send = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("_id", _id);
    formData.append("isbn", isbn);
    formData.append("titre", titre);
    formData.append("prix", prix);
    formData.append("annedition", annedition);
    formData.append("couverture", couverture);
    formData.append("qtestock", qtestock);
    formData.append("auteurs", auteurs);
    formData.append("maised", maised);
    formData.append("specialite", specialite);
    await axios
      .put("http://localhost:3001/api/livres/" + livre._id, formData)
      .then((res) => {
        console.log(res.data);
      });
    dispatch(getLivres());
  };
  //change state auteurs
  const handleChange = (event) => {
    console.log("event", auteurs);
    console.log("value", event.target.value);
    setAuteurs((auteurs) => [...auteurs, event.target.value]);
  };
  //change state editeurs
  const handleChangeEditeurs = (event) => {
    setMaisonEdit(event.target.value);
    dispatch(getEditeurByID(event.target.value));
    console.log(event.target.value);
  };
  // change state specialite
  const handleChangeSpec = (event) => {
    setSpecialite(event.target.value);
    dispatch(getSpecialiteByID(event.target.value));
  };
  // image handler
  const handleFileChange = (e) => {
    setCouverture(e.target.files[0]);
  };

  const deleteSelectedAuthor = (auteur) => {
<<<<<<< HEAD
    const array = [...auteurs] // make a separate copy of the array
    var index = array.indexOf(auteur);
    if(index > -1) {
      array.splice(index, 1); //remove
    }
    console.log(index)
    setAuteurs(array);
    dispatch(getAuteurs())
=======
    const index = auteurs.findIndex((object) => {
      //console.log(object._id);
      return object._id === auteur._id;
    });
    if (index > -1) {
      // only splice array when item is found
      auteurs.splice(index, 1); // 2nd parameter means remove one item only
    }

    setAuteurs(auteurs);
    dispatch(getAuteurs());
    //console.log("new auterus", auteurs);
>>>>>>> 32b11f3e0eddfaf6f31c616c6610e4c90cb3ef5d
  };

  return (
    <div className="container">
      <div>
        {openModalAuteur && (
          <ModalAuteur
            handleCloseAuteur={handleCloseAuteur}
            open={openModalAuteur}
          />
        )}
        {openModalEditeur && (
          <ModalEditeur
            handleCloseEditeur={handleCloseEditeur}
            open={openModalEditeur}
          />
        )}
      </div>
      <Form encType="multipart/form-data" onSubmit={send}>
        <Form.Group className="mb-3" controlId="formBasicIsbn">
          <Form.Label>ISBN</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter ISBN Number"
            value={isbn}
            onChange={(e) => setIsbn(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicTitre">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Title"
            value={titre}
            onChange={(e) => setTitre(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicQte">
          <Form.Label>Qte Stock</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter Stock Qte"
            value={qtestock}
            onChange={(e) => setQteStock(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicQte">
          <Form.Label>Edition Year</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter Edition Year"
            value={annedition}
            onChange={(e) => setAnnedition(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicQte">
          <Form.Label>Price</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter Price"
            value={prix}
            onChange={(e) => setPrix(e.target.value)}
          />
        </Form.Group>
        {/* Authors   */}
        <Form.Group className="mb-3" controlId="formBasicQte">
          <Button
            variant="contained"
            color="success"
            style={{ width: "150px", "margin-bottom": "5px" }}
            onClick={() => handleOpen("auteur")}
          >
            <AddCircleIcon className="me-1" />
            Add Author
          </Button>
          <Form.Select
            aria-label="Default select example"
            value={auteurs}
            onChange={handleChange}
          >
            <option>Select Author</option>
            {authors
              ? authors.map((auteur) => {
                  return (
                    <option key={auteur._id} value={auteur._id}>
                      {auteur.nomauteur}
                    </option>
                  );
                })
              : "pas d'auteurs"}
          </Form.Select>
          {auteurs
            ? auteurs.map((auteur) => {
                return (
                  <Button
                    key={auteur._id}
                    variant="outlined"
                    color="primary"
                    className="d-flex mt-1"
                    onClick={() => deleteSelectedAuthor(auteur)}
                  >
                    {auteur.nomauteur} <ClearIcon />
                  </Button>
                );
              })
            : ""}
        </Form.Group>
        {/* Editors */}
        <Form.Group className="mb-3" controlId="formBasicQte">
          <Button
            variant="contained"
            color="success"
            style={{ width: "150px", marginBottom: "5px" }}
            onClick={() => handleOpen("editeur")}
          >
            <AddCircleIcon className="me-1" />
            Add Editor
          </Button>
          <Form.Select
            aria-label="Default select example"
            onChange={handleChangeEditeurs}
          >
            <option>Select Editor</option>
            {editeurs
              ? editeurs.map((editeur) => {
                  return (
                    <option key={editeur._id} value={editeur._id}>
                      {editeur.maisonedit}
                    </option>
                  );
                })
              : "pas d'editeurs"}
          </Form.Select>
          {editeur && maised ? (
            <Button
              key={editeur._id}
              variant="outlined"
              color="primary"
              className="d-flex mt-2"
            >
              {editeur.maisonedit}
              <ClearIcon onClick={(e) => setMaisonEdit("")}></ClearIcon>
            </Button>
          ) : (
            ""
          )}
        </Form.Group>
        {/* Specialites */}
        <Form.Group>
          <Form.Select
            aria-label="Default select example"
            onChange={handleChangeSpec}
          >
            <option>Select Specialite</option>
            {specialites
              ? specialites.map((spec) => {
                  return (
                    <option key={spec._id} value={spec._id}>
                      {spec.nomspecialite}
                    </option>
                  );
                })
              : "pas de specialites"}
          </Form.Select>
          {spec && specialite ? (
            <Button
              key={spec._id}
              variant="outlined"
              color="primary"
              className="d-flex mt-2"
            >
              {" "}
              {spec.nomspecialite}{" "}
              <ClearIcon onClick={(e) => setSpecialite("")}></ClearIcon>{" "}
            </Button>
          ) : (
            ""
          )}
        </Form.Group>
        <Form.Group controlId="formFile" className="mt-2 mb-2">
          <Form.Control type="file" onChange={handleFileChange} />
        </Form.Group>
        <Button variant="outlined" color="success" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};
export default ModifLivre;
