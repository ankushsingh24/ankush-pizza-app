import API_CLIENT from "../../../shared/services/api_client";
import { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import MenuTab from "../../../shared/widgets/Menu";

const Product = () => {
  const [category, setCategory] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getMenuData();
    getPizzaData();
  }, []); // Component Did Mount

  const getMenuData = () => {
    const promise = API_CLIENT.get(process.env.REACT_APP_MENU_URL);
    promise
      .then((result) => {
        console.log(result);
        setCategory(result.data.category); // Re-rendering
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const getPizzaData = () => {
    const promise = API_CLIENT.get(process.env.REACT_APP_PIZZA_URL);
    promise
      .then((result) => {
        console.log(result);
        setProducts(result.data.Vegetarian); // Re-rendering
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Container maxWidth="sm">
        <Box sx={{ bgcolor: "#cfe8fc", height: "100vh" }}>
          <MenuTab category={category} />
          <div>
            {products.map((product) => (
              <>
                <img src={product.assets.product_details_page[0].url} alt="" />
                <p>
                  {product.name} {product.price}
                </p>
              </>
            ))}
          </div>
        </Box>
      </Container>
    </>
  );
};

export default Product;
