import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Avatar,
  Typography,
  Button,
  Box,
} from "@mui/material";

const ProductsTable = () => {
  const [products, setProducts] = useState([
    {
      name: "Camera Mi 360",
      sold: 432,
      price: "$120",
      revenue: "$51,320",
      rating: 4.81,
      image: "https://via.placeholder.com/50",
    },
    {
      name: "Message Gun",
      sold: 120,
      price: "$60",
      revenue: "$23,901",
      rating: 3.44,
      image: "https://via.placeholder.com/50",
    },
    {
      name: "Redmi Note 9",
      sold: 190,
      price: "$87.6",
      revenue: "$87,211",
      rating: 2.5,
      image: "https://via.placeholder.com/50",
    },
    {
      name: "One Plus Nord CE Lite 2",
      sold: 140,
      price: "$24.1",
      revenue: "$29,809",
      rating: 4.65,
      image: "https://via.placeholder.com/50",
    },
  ]);
  

  return (
    <Box sx={{mt: 5}}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: 600 }}>
          Top Products
        </Typography>
        <Button
          variant="outlined"
          sx={{
            textTransform: "none",
            borderColor: "rgba(0, 0, 0, 0.23)",
            color: "rgba(0, 0, 0, 0.87)",
            borderRadius: "20px",
            py: 0.5,
            fontSize: "0.875rem",
            lineHeight: 1.75,
          }}
        >
          Full results
        </Button>
      </Box>
      <TableContainer sx={{ margin: "auto",}}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Product</TableCell>
              <TableCell>Sold Amount</TableCell>
              <TableCell>Unit Price</TableCell>
              <TableCell>Revenue</TableCell>
              <TableCell>Rating</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product, index) => (
              <TableRow key={index}>
                <TableCell>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <Avatar
                      src={product.image}
                      alt={product.name}
                      sx={{ mr: 2 }}
                    />
                    <Typography variant="body1">{product.name}</Typography>
                  </div>
                </TableCell>
                <TableCell>{product.sold}</TableCell>
                <TableCell>{product.price}</TableCell>
                <TableCell>{product.revenue}</TableCell>
                <TableCell>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <span>⭐</span>
                    <Typography variant="body2" sx={{ ml: 1 }}>
                      {product.rating}
                    </Typography>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default ProductsTable;
