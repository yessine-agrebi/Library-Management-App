import React, { useState, useEffect } from "react";
import Button from '@mui/material/Button';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import {useDispatch, useSelector} from "react-redux";
import { isDisabled } from "@testing-library/user-event/dist/utils";
import { addLivre } from "../../features/livreSlice";
import  axios  from "axios";
import { Form } from "react-bootstrap";
import { addAuteur, getAuteurs, removeSelectedAuteur } from "../../features/auteursSlice";
import { getEditeurs } from "../../features/editeurSlice";
import { getSpecialites } from "../../features/specialiteSlice";
import ModalAuteur from "../Auteurs/ModalAuteur";
const AjoutLivre=(props)=>{
const [isbn, setIsbn] = useState("");
const [titre, setTitre] = useState("");
const [couverture, setCouverture] = useState("");
const [qtestock, setQteStock] = useState("");
const [annedition, setAnnedition] = useState();
const [prix, setPrix] = useState();
const [auteurs, setAuteurs] = useState([])
const {authors} = useSelector((state) => state.authors);
const {editeurs} = useSelector((state) => state.editeurs);
const {specialites} = useSelector((state) => state.specialites);




const dispatch = useDispatch()
useEffect(() => {
  dispatch(getAuteurs());
  dispatch(getEditeurs());
  dispatch(getSpecialites());
}, [dispatch])

const [open, setOpen] = useState("");

//open Modal
const handleOpen = () => {
  setOpen(true);
}
//close Modal
const handleClose=()=>{
  setOpen(false)
}

const send = event => {
  const data = new FormData();
  data.append("isbn", isbn)
  data.append("titre", titre)
  data.append("couverture", couverture)
  data.append("qtestock", qtestock)
  data.append("auteurs", auteurs)
  //axios.post("http://localhost:3001/api/livres", data).then(res => console.log(res)).catch(err => console.log(err))
}
const handleChange = (event) => {
  setAuteurs(auteurs => [...auteurs, event.target.value]);
  console.log(auteurs);
}
const handleSubmit = async(event, props)=> {
event.preventDefault(); 
const liv={
isbn: isbn,
titre: titre,
qtestock: qtestock,
couverture: couverture,
annedition: annedition,
prix: prix
};  
dispatch(addLivre(liv))
props.handleClose();
}



return (
<div className="container">
<div>
    {open && (
    <ModalAuteur
    handleClose={handleClose}
    open={open}
    />
    )}
</div>
<Form>
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
    <Form.Control type="number" placeholder="Enter Price" value={prix} onChange={e => setPrix(e.target.value) && console.log(prix)} />
  </Form.Group>
  
  <Form.Group className="mb-3" controlId="formBasicQte">
    <Button variant="contained" color="success" onClick={handleOpen}>
        <AddCircleIcon/>
        Add Author
    </Button>
    <Form.Label>Authors</Form.Label>
    <Form.Select aria-label="Default select example" value={auteurs} onChange={handleChange}>
      <option>Select Author</option>
      {authors ? authors.map((auteur) => {
        return <option key={auteur._id} value={auteur._id}>{auteur.nomauteur}</option>
      }): "pas d'auteurs"}
    </Form.Select>
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
</div>
);}
export default AjoutLivre