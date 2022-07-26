import React, {useState} from 'react'
import MUIDataTable from "mui-datatables";
import { ThemeProvider } from "@mui/styles";
import { createTheme } from "@mui/material/styles";
import ReactLoading from 'react-loading';
import {useDispatch,useSelector} from "react-redux"
import {deleteAuteur} from "../../features/auteursSlice";
import NoteAltOutlinedIcon from '@mui/icons-material/NoteAltOutlined';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import { Button } from '@mui/material';
import ModalAuteur from './ModalAuteur';
import VisibilityIcon from '@mui/icons-material/Visibility';

const AfficheAuteurs = () => {
    const [open, setOpenModalAuteur] = useState("");
    const [_id, set_id] = useState("");
    const dispatch = useDispatch();
    const {authors, isLoading, error} = useSelector((state) => state.authors);
    //open Modal
    const handleOpen = () => {
        setOpenModalAuteur(true);
    }
    //close Modal
    const handleCloseAuteur=()=>{
        setOpenModalAuteur(false)
    }
    
    // Edit Livre
    const editAuteur = (value) => {
        setOpenModalAuteur(true);
        set_id(value);
        console.log(value)
    }
    // delete livre
    const handleDelete = (id) => {
        if(window.confirm("Delete Book Yes/No")){
            dispatch(deleteAuteur(id));
        }
    }

    const columns = [
        {
            label: "Author Name",
            name: "nomauteur"
        },
        {
            label: "Email",
            name: "email"
        },
        {
            label: "Tel Number",
            name: "numtel"
        },
        {
            name: "_id",
            label: "Actions",
            options: {
            customBodyRender: (value) => (
            <div>
            <span
            onClick={()=>editAuteur(value)}
            style={{ cursor: 'pointer'}}
            >
            <VisibilityIcon color='primary' />
            </span>
            <span
            onClick={()=>editAuteur(value)}
            style={{ cursor: 'pointer'}}
            >
            <NoteAltOutlinedIcon color='success' />
            </span>
            <span
            onClick={(e) => handleDelete(value)}
            style={{ cursor: 'pointer'}}
            >
            <DeleteForeverRoundedIcon color='error' />
            </span>
            </div>
            )
            }
            }
    ];

    const renderAuthors = () => {
        if(isLoading) return <center>
            <ReactLoading type='spokes' color='red'
                height={'8%'} width={'8%'}
            />
        </center>
        if(error) return <p>can't load authors list..</p>

        return <React.Fragment>
            {authors ? <ThemeProvider theme={createTheme()}>
                <MUIDataTable
                    title="Authors List"
                    data={authors}
                    columns={columns}
                    options={{
                        rowsPerPageOptions:[5,10,15,100]
                    }}
                 />
            </ThemeProvider> : null}
        </React.Fragment>
    }
  return (
    <div style={{position: 'absolute','top':90,'left':250,width:'75%'}}>
        <div>
            {open && (
            <ModalAuteur
            handleCloseAuteur={handleCloseAuteur}
            open={open}
            _id={_id}
            />
            )}
        </div>
        <Button variant="contained" color="primary" style={{'marginLeft': 10}} onClick={handleOpen}>
        <AddCircleRoundedIcon style={{ fontSize: "20px", }} className="me-2"/>
            Add Author
        </Button>
        <div style={{margin:10}}>
            {renderAuthors()}
        </div>
    </div>
  )
}

export default AfficheAuteurs
