import API_CLIENT from "../../../shared/services/api_client";
import { useEffect } from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

const Product = () => {
  useEffect(() => {
    API_CLIENT.get(process.env.REACT_APP_MENU_URL);
    process
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <Container maxWidth="sm">
        <Box sx={{ bgcolor: "#cfe8fc", height: "100vh" }} />
      </Container>
    </>
  );
};

export default Product;
