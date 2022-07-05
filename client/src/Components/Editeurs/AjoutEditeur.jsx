import React, {useState} from 'react'
import { Button, Form } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { addEditeur } from '../../features/editeurSlice';

const AjoutEditeur = () => {
    const [maisonedit, setMaisonEdit] = useState()
    const [siteweb, setSiteWeb] = useState()
    const [email, setEmail] = useState();
    
    
    const dispatch = useDispatch()
    const createEditeur = async(event) => {
        event.preventDefault();
        const editeur = {
            maisonedit: maisonedit,
            siteweb: siteweb,
            email: email
            
        };
        dispatch(addEditeur(editeur))
    }
  return (
    <div>
       <Form>
            <Form.Group className="mb-3" controlId="formBasicQte">
                <Form.Label>Maison Edit</Form.Label>
                <Form.Control type="text" placeholder="Enter Name" value={maisonedit} onChange={e => setMaisonEdit(e.target.value)} />
                
                <Form.Label>Site Web</Form.Label>
                <Form.Control type="text" placeholder="Enter Website" value={siteweb} onChange={e => setSiteWeb(e.target.value)} />
                
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter Email" value={email} onChange={e => setEmail(e.target.value)} />
                <Button variant="success" type="submit" onClick={event => createEditeur(event)}>
                Add Editor
            </Button>
            </Form.Group>
        </Form>
    </div>
  )
}

export default AjoutEditeur
