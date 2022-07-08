import React, {useState, useEffect} from 'react'
import {useSelector, useDispatch }from "react-redux"
import {getAuteurs} from "../../features/auteursSlice"
import {getEditeurs} from "../../features/editeurSlice"
import { getLivreByID } from '../../features/livreSlice'
import { getSpecialites } from '../../features/specialiteSlice'
const ModifLivre = (props) => {
  const {livre} = useSelector((state) => state.livres);
  const {authors} = useSelector((state) => state.authors);
  const {editeurs} = useSelector((state) => state.editeurs);
  const {editeur} = useSelector((state) => state.editeurs);
  const {specialites} = useSelector((state) => state.specialites);
  const {spec} = useSelector((state) => state.specialites);
  
  const [_id, set_id] = useState(props._id)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAuteurs());
    dispatch(getEditeurs());
    dispatch(getSpecialites());
    dispatch(getLivreByID(_id))
    
  }, [dispatch])

  useEffect(() => {
    setIsbn(livre.isbn)
  }, [livre]);

  

  const [isbn, setIsbn] = useState("");
  const [titre, setTitre] = useState("");
  const [couverture, setCouverture] = useState("");
  const [qtestock, setQteStock] = useState("");
  const [annedition, setAnnedition] = useState();
  const [prix, setPrix] = useState("");
  const [auteurs, setAuteurs] = useState([]);
  const [maisonedit, setMaisonEdit] = useState("")
  const [specialite, setSpecialite] = useState("")

  return (
    <div>
      Hello <h1>{_id}</h1>
    </div>
  )
}

export default ModifLivre
