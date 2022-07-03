import React, {useState} from 'react'
import { Button, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { addAuteur } from '../../features/auteursSlice';
  
const AjoutAuteur = () => {
    
    const [nomauteur, setNomAuteur] = useState()
    const [email, setEmail] = useState();
    const [numtel, setNumTel] = useState()
    
    const dispatch = useDispatch()
    const createAuteur = async(event) => {
        event.preventDefault();
        const auteur = {
        nomauteur: nomauteur,
        email: email,
        numtel: numtel
        };
        dispatch(addAuteur(auteur))
    }
    return (
      <div>
        <Form>
            <Form.Group className="mb-3" controlId="formBasicQte">
                <Form.Label>Nom Auteur</Form.Label>
                <Form.Control type="text" placeholder="Enter Name" value={nomauteur} onChange={e => setNomAuteur(e.target.value)} />
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter Email" value={email} onChange={e => setEmail(e.target.value)} />
                <Form.Label>Tel</Form.Label>
                <Form.Control type="tel" placeholder="Enter Tel" value={numtel} onChange={e => setNumTel(e.target.value)} />
                <Button variant="success" type="submit" onClick={e => createAuteur(e)}>
                Add Author
            </Button>
            </Form.Group>
        </Form>
      </div>
    )
  }
  
  export default AjoutAuteur
  