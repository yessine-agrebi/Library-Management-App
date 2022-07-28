import React, {useState} from "react";
// import { useNavigate } from "react-router-dom";
// import { addToCart } from "../../features/cartSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLivres, removeSelectedLivre } from "../../features/livreSlice";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import {Stack, Box, Typography, Button} from "@mui/material";
import Pagination from '@mui/material/Pagination';
import Loader from "../Loader/Loader";
import Navbar from "../Navbar/Navbar";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import PreviewIcon from '@mui/icons-material/Preview';
import { addToCart } from "../../features/cartSlice";
import { useNavigate } from "react-router-dom";
import ModalAffiche from "../Livres/ModalAffiche";
const Home = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [booksPerPage] = useState(8);
  const [openAffiche, setOpenAffiche] = useState("");
  const [_id, set_id] = useState("");
  const { livres } = useSelector((state) => state.livres);
  const {cart} = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getLivres());
  }, [dispatch, cart]);
  const afficheLivre = (value) => {
    setOpenAffiche(true);
    set_id(value);
    console.log(value);
  };
  const handleCloseAffiche = () => {
    setOpenAffiche(false);
    set_id("");
    dispatch(removeSelectedLivre());
  };
  const handleAddToCart = (livre) => {
    dispatch(addToCart(livre));
  };
  // Pagination
  const indexOfLastBook = currentPage * booksPerPage;
  
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = livres.slice(indexOfFirstBook, indexOfLastBook);
  const paginate = (event, value) => {
    setCurrentPage(value);

    window.scrollTo({ top: 1800, behavior: 'smooth' });
  };

  if (!currentBooks.length) return <Loader />;
  return (
    <Box id="livres">
    <Navbar/>
    <div>
        {openAffiche && (
          <ModalAffiche
            handleCloseAffiche={handleCloseAffiche}
            openAffiche={openAffiche}
            _id={_id}
          />
        )}
      </div>
    <Stack direction="row" sx={{ gap: { lg: '100px', xs: '50px' } }} flexWrap="wrap" justifyContent="center" mt="100px">
      {currentBooks &&
        currentBooks?.map((livre) => {
          return (
            <Card key={livre._id} sx={{ MaxWidth: 445, height: 520 }}>
              <CardMedia
                component="img"
                alt="green iguana"
                height="350px"
                width="100%"
                image={`http://localhost:3001/public/images/${livre.couverture}`}
              />
              <CardContent>
                <Typography variant="h5" component="div">
                  {livre.titre}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {livre.specialite.nomspecialite}
                </Typography>
                <Typography variant="h6" color="text.secondary">
                  {livre.prix} TND
                </Typography>
              </CardContent>
              <CardActions >
              <Button variant="contained" onClick={() => handleAddToCart(livre)} >
                <AddShoppingCartIcon/>
                Add To Cart
              </Button>
                <Button variant="outlined" onClick={() => afficheLivre(livre._id)} ><PreviewIcon />Preview</Button>
              </CardActions>
            </Card>
          );
        })}
    </Stack>
    <Stack sx={{ mt: { lg: '114px', xs: '70px' } }} alignItems="center">
        {livres.length > 6 && (
          <Pagination
            color="standard"
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(livres.length / booksPerPage)}
            page={currentPage}
            onChange={paginate}
            size="large"
          />
        )}
      </Stack>
    </Box>
  );
};
export default Home;
