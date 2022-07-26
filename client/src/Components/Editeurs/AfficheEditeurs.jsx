import React, {useState} from 'react'
import MUIDataTable from "mui-datatables";
import { ThemeProvider } from "@mui/styles";
import { createTheme } from "@mui/material/styles";
import ReactLoading from 'react-loading';
import {useDispatch,useSelector} from "react-redux"
import NoteAltOutlinedIcon from '@mui/icons-material/NoteAltOutlined';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import { Button } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ModalEditeur from './ModalEditeur';
import { deleteEditeur } from '../../features/editeurSlice';

const AfficheEditeurs = () => {
    const [open, setOpenModalEditeur] = useState("");
    const [_id, set_id] = useState("");
    const dispatch = useDispatch();
    const {editeurs, isLoading, error} = useSelector((state) => state.editeurs);
    //open Modal
    const handleOpen = () => {
        setOpenModalEditeur(true);
    }
    //close Modal
    const handleCloseEditeur=()=>{
        setOpenModalEditeur(false)
    }

    // Edit Livre
    const editEditeur = (value) => {
        setOpenModalEditeur(true);
        set_id(value);
        console.log(value)
    }
    // delete livre
    const handleDelete = (id) => {
        if(window.confirm("Delete Editor Yes/No")){
            dispatch(deleteEditeur(id));
        }
    }

    const columns = [
        {
            label: "Editor Name",
            name: "maisonedit"
        },
        {
            label: "Email",
            name: "email"
        },
        {
            label: "Website",
            name: "siteweb"
        },
        {
            name: "_id",
            label: "Actions",
            options: {
            customBodyRender: (value) => (
            <div>
            <span
            onClick={()=>editEditeur(value)}
            style={{ cursor: 'pointer'}}
            >
            <VisibilityIcon color='primary' />
            </span>
            <span
            onClick={()=>editEditeur(value)}
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

    const renderEditors = () => {
        if(isLoading) return <center>
            <ReactLoading type='spokes' color='red'
                height={'8%'} width={'8%'}
            />
        </center>
        if(error) return <p>can't load editors list..</p>

        return <React.Fragment>
            {editeurs ? <ThemeProvider theme={createTheme()}>
                <MUIDataTable
                    title="Editors List"
                    data={editeurs}
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
            <ModalEditeur
            handleCloseEditeur={handleCloseEditeur}
            open={open}
            _id={_id}
            />
            )}
        </div>
        <Button variant="contained" color="primary" style={{'marginLeft': 10}} onClick={handleOpen}>
        <AddCircleRoundedIcon style={{ fontSize: "20px", }} className="me-2"/>
            Add Editor
        </Button>
        <div style={{margin:10}}>
            {renderEditors()}
        </div>
    </div>
  )
}

export default AfficheEditeurs
