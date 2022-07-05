import React, { useState, useEffect } from "react";
import Button from '@mui/material/Button';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import {useDispatch, useSelector} from "react-redux";
import { addLivre, getLivres } from "../../features/livreSlice";
import  axios  from "axios";
import { Form } from "react-bootstrap";
import { getAuteurs} from "../../features/auteursSlice";
import { getEditeurs } from "../../features/editeurSlice";
import { getSpecialites } from "../../features/specialiteSlice";
import ModalAuteur from "../Auteurs/ModalAuteur";
import ClearIcon from '@mui/icons-material/Clear';
import ModalEditeur from "../Editeurs/ModalEditeur";

const AjoutLivre=(props)=>{
const [isbn, setIsbn] = useState("");
const [titre, setTitre] = useState("");
const [couverture, setCouverture] = useState("");
const [qtestock, setQteStock] = useState("");
const [annedition, setAnnedition] = useState();
const [prix, setPrix] = useState("");
const [auteurs, setAuteurs] = useState([]);
const [maisonedit, setMaisonEdit] = useState("")
const [specialite, setSpecialite] = useState("")
{/* Global States */}
const {authors} = useSelector((state) => state.authors);
const {editeurs} = useSelector((state) => state.editeurs);
const {specialites} = useSelector((state) => state.specialites);




const dispatch = useDispatch()
useEffect(() => {
  dispatch(getAuteurs());
  dispatch(getEditeurs());
  dispatch(getSpecialites());
}, [dispatch])

const [openModalAuteur, setOpenModalAuteur] = useState();
const [openModalEditeur, setopenModalEditeur] = useState();
//open Modal
const handleOpen = (action) => {
  if(action === "auteur") {
    setOpenModalAuteur(true);
  }
  else if(action === "editeur"){
    setopenModalEditeur(true)
  }
  
}
//close Modal
const handleCloseAuteur=()=>{
    setOpenModalAuteur(false)
}
const handleCloseEditeur=()=>{
  setopenModalEditeur(false)
}


const send = async (event) => {
  event.preventDefault()
  const formData = new FormData();
  formData.append("isbn", isbn)
  formData.append("titre", titre)
  formData.append("prix", prix)
  formData.append("annedition", annedition)
  formData.append("couverture", couverture)
  formData.append("qtestock", qtestock)
  formData.append("auteurs", auteurs)
  formData.append("maisonedit", maisonedit)
  formData.append("specialite", specialite)
  console.log(formData)
  await axios.post("http://localhost:3001/api/livres", formData, {
  }).then(res => {
      console.log(res)
  })
  dispatch(getLivres())
}

const handleChange = (event) => {
  setAuteurs(auteurs => [...auteurs, event.target.value]);
}

const handleChangeEditeurs = (event) => {
  setMaisonEdit(event.target.value)
  console.log(event.target.value)
}

const handleChangeSpec = (event) => {
  setSpecialite(event.target.value)
}

const handleFileChange = (e) => {
  setCouverture(e.target.files[0])
}


return (
<div className="container">
<div>
  {openModalAuteur && 
    <ModalAuteur
    handleCloseAuteur={handleCloseAuteur}
    open={openModalAuteur}
    />
  }
  {
    openModalEditeur && 
    <ModalEditeur
    handleCloseEditeur={handleCloseEditeur}
    open={openModalEditeur}
    />
  }
</div>
<Form encType="multipart/form-data" onSubmit={send} >
  <Form.Group className="mb-3" controlId="formBasicIsbn">
    <Form.Label>ISBN</Form.Label>
    <Form.Control type="text" placeholder="Enter ISBN Number" value={isbn} onChange={e => setIsbn(e.target.value)} />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicTitre">
    <Form.Label>Title</Form.Label>
    <Form.Control type="text" placeholder="Enter Title" value={titre} onChange={e => setTitre(e.target.value)} />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicQte">
    <Form.Label>Qte Stock</Form.Label>
    <Form.Control type="number" placeholder="Enter Stock Qte" value={qtestock} onChange={e => setQteStock(e.target.value)} />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicQte">
    <Form.Label>Edition Year</Form.Label>
    <Form.Control type="number" placeholder="Enter Edition Year" value={annedition} onChange={e => setAnnedition(e.target.value)} />
  </Form.Group>
  
  <Form.Group className="mb-3" controlId="formBasicQte">
    <Form.Label>Price</Form.Label>
    <Form.Control type="number" placeholder="Enter Price" value={prix} onChange={e => setPrix(e.target.value)} />
  </Form.Group>
  {/* Authors   */}
  <Form.Group className="mb-3" controlId="formBasicQte">
    <Button variant="contained" color="success" style={{width: "150px", "margin-bottom": "5px"}} onClick={() =>handleOpen('auteur')} >
        <AddCircleIcon/>
        Add Author
    </Button>
    <Form.Select aria-label="Default select example"  onChange={handleChange}>
      <option>Select Author</option>
      {authors ? authors.map((auteur) => {
        return <option key={auteur._id} value={auteur._id}>{auteur.nomauteur}</option>
      }): "pas d'auteurs"}
    </Form.Select>
    {auteurs ? auteurs.map(auteur => {
      const selected = authors.filter(auth => {
      return auth._id === auteur
  });
    return <Button key={selected[0]._id} variant="outlined" color="primary" className="d-flex mt-1"> {selected[0].nomauteur} <ClearIcon></ClearIcon> </Button>
    }) : ""}
  </Form.Group>
  {/* Editors */}
  <Form.Group className="mb-3" controlId="formBasicQte">
    <Button variant="contained" color="success" style={{width: "150px", "marginBottom": "5px"}} onClick={() =>handleOpen('editeur')}>
        <AddCircleIcon/>
        Add Editor
    </Button>
    <Form.Select aria-label="Default select example"  onChange={handleChangeEditeurs}>
      <option>Select Editor</option>
      {editeurs ? editeurs.map((editeur) => {
        return <option key={editeur._id} value={editeur._id}>{editeur.maisonedit}</option>
      }): "pas d'editeurs"}
    </Form.Select>
    {maisonedit ? 
    <Button key={maisonedit} variant="outlined" color="primary" className="d-flex mt-1"> {maisonedit} <ClearIcon></ClearIcon> </Button>
    : ""
    }
  </Form.Group>
  {/* Specialites */}
  <Form.Group>
  <Form.Select aria-label="Default select example"  onChange={handleChangeSpec}>
      <option>Select Specialite</option>
      {specialites ? specialites.map((spec) => {
        return <option key={spec._id} value={spec._id}>{spec.nomspecialite}</option>
      }): "pas de specialites"}
    </Form.Select>
    {specialite ? 
    <Button key={specialite} variant="outlined" color="primary" className="d-flex mt-1"> {specialite} <ClearIcon></ClearIcon> </Button>
    : ""
    }
  </Form.Group>
  <Form.Group controlId="formFile" className="mt-2 mb-2">
    <Form.Control type="file" onChange={handleFileChange}/>
  </Form.Group>
  <Button variant="outlined" color="success" type="submit">
    Submit
  </Button>
</Form>
</div>
);}
export default AjoutLivre