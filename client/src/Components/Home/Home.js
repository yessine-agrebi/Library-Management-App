import React, {useState} from "react";
// import { useNavigate } from "react-router-dom";
// import { addToCart } from "../../features/cartSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLivres } from "../../features/livreSlice";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import {Stack, Box, Typography, Button} from "@mui/material";
import Pagination from '@mui/material/Pagination';
import Loader from "../Loader/Loader";
const Home = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [booksPerPage] = useState(6);
  const { livres } = useSelector((state) => state.livres);
  const dispatch = useDispatch();
  // let navigate = useNavigate();
  useEffect(() => {
    dispatch(getLivres());
  }, [dispatch]);
  // const handleAddToCart = (product) => {
  //   dispatch(addToCart(product));
  //   navigate("/cart");
  // };

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
    <Box id="livres" sx={{ mt: { lg: '109px' } }} mt="50px" p="20px">
    <Stack direction="row" sx={{ gap: { lg: '107px', xs: '50px' } }} flexWrap="wrap" justifyContent="center">
      {livres &&
        livres?.map((livre) => {
          return (
            <Card key={livre._id} sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image={`http://localhost:3001/public/images/${livre.couverture}`}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {livre.titre}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {livre.specialite.nomspecialite}
                </Typography>
                <Typography variant="h6" color="text.secondary">
                  {livre.prix} TND
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Add To Cart</Button>
                <Button size="small">Show</Button>
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