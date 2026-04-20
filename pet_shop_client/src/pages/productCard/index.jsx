import BreadCrumbs from "../../components/breadcrumbs";
import CategoriesList from "../../components/categoriesList";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Spin } from "antd";
import { Status } from "../../utils/Status";
import { LoadingOutlined } from "@ant-design/icons";
import { Box, Card, Typography, CardMedia, CardContent } from "@mui/material";
import { useParams } from "react-router-dom";
import { useState } from "react";

const localBreadCrumps = [
  {
    label: "Main page",
    path: "/",
  },
  {
    label: "Categories",
    path: "",
  },
];

function ProductCard() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [selectedProduct, setSelectedProduct] = useState(null);

  const { productsList } = useSelector((state) => state.homeSlice);
  useEffect(() => {
    setSelectedProduct(
      [...productsList].find((item) => String(item.id) === String(id)),
    );
  }, [id, productsList]);
  if (!selectedProduct) return <div>Loading...</div>;
  return (
    <div>
      <BreadCrumbs crumbs={localBreadCrumps}></BreadCrumbs>
      <Typography>ProductCard</Typography>
      <Card>
        <CardMedia
          sx={{ height: 140 }}
          image={"http://localhost:3333" + selectedProduct.image}
          title={selectedProduct.title}
        />
        <CardContent>
          <Typography variant="h5"> Categories</Typography>
          <Typography variant="h5">
            Description {selectedProduct.description}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default ProductCard;
