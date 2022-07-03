import { useNavigate } from "react-router-dom";
import "./style.css"
import { Paper, Divider,  MenuList, MenuItem, Typography } from '@mui/material';
import LibraryBooksOutlinedIcon from '@mui/icons-material/LibraryBooksOutlined';

//https://mui.com/material-ui/material-icons/?theme=Outlined
//https://htmlcolorcodes.com/fr/

import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import ReceiptLongOutlinedIcon from '@mui/icons-material/ReceiptLongOutlined';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';

const AdminSidebar = () => {

  const navigate = useNavigate();

  return (
    <Paper className="stylepop" >
    <MenuList >
      <MenuItem >
     
      <div onClick={()=>{navigate("/dashboard")}}  className="stylediv">
          <div >
          <DashboardOutlinedIcon sx={{ color: '#F51534'}}/>
          </div>
          <div><Typography sx={{ color: 'gray'}} >Dashboard</Typography></div>
          
        </div>
        
      </MenuItem>
      <Divider />
      <MenuItem>
     
      <div onClick={()=>{navigate("/livres")}} className="stylediv">
          <div>
          <LibraryBooksOutlinedIcon sx={{ color: '#1C15F5'}}/>
          </div>
          <div><Typography sx={{ color: 'gray'}}>Livres</Typography></div>
        </div>
        
      </MenuItem>
      <Divider />

      <MenuItem>
     
      <div onClick={()=>{navigate("/scategories/listscat")}} className="stylediv">
          <div>
          <ArticleOutlinedIcon sx={{ color: '#316610'}}/>
          </div>
          <div><Typography sx={{ color: 'gray'}}>Sub Categories</Typography></div>
        </div>
        
      </MenuItem>
      <Divider />

      <MenuItem>
     
      <div onClick={()=>{navigate("/categories/listcat")}} className="stylediv">
          <div>
          <ReceiptLongOutlinedIcon sx={{ color: '#991793'}}/>
          </div>
          <div><Typography sx={{ color: 'gray'}}>Products</Typography></div>
        </div>
        
      </MenuItem>
      <Divider />

      <MenuItem>
     
      <div onClick={()=>{navigate("/categories/listcat")}} className="stylediv">
          <div>
          <AssignmentOutlinedIcon sx={{ color: '#FFC300'}}/>
          </div>
          <div><Typography sx={{ color: 'gray'}}>Orders</Typography></div>
        </div>
        
      </MenuItem>
      <Divider />

      <MenuItem>
     
      <div onClick={()=>{navigate("/categories/listcat")}} className="stylediv">
          <div>
          <ArchiveOutlinedIcon sx={{ color: '#4190A2'}}/>
          </div>
          <div><Typography sx={{ color: 'gray'}}>PDF</Typography></div>
        </div>
        
      </MenuItem>

    </MenuList>
  </Paper>
  );
};

export default AdminSidebar;