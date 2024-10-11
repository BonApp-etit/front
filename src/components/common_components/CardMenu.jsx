import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import CounterButton from "../menu/buttonIncrease";
import { Add, ArrowForward } from "@mui/icons-material";
import { Box } from "@mui/material";

export default function CardMenu() {
  return (
    <Card
      sx={{
        maxWidth: 170,
        borderRadius: "16px",
        border: "0.5px",
      }}
    >
      <CardActionArea>
        <CardMedia
          component="svg"
          height="80"
          width="170"
          image="/assets/DeliciousChicken.svg"
          alt="green iguana"
        />
        <CardContent
          width="170"
          sx={{
            padding: 1, // Cambia el padding del CardContent
            pb: "0",
          }}
        >
          <Typography
            className=" tracking-tight"
            sx={{
              fontFamily: "Ubuntu, sans-serif",
              fontWeight: "700",
              fontSize: "14px",
            }}
            gutterBottom
            color="textTitle"
            variant="h5"
            component="div"
          >
            Alitas
          </Typography>
          <Typography
            sx={{
              fontFamily: "Ubuntu, sans-serif",
              fontWeight: "400",
              fontSize: "10px",
            }}
            variant="body2"
            color="textDescription"
            className="  font-normal"
          >
            Deliciosa orden de alitas empanizadas, aderezadas con...
          </Typography>

          <Box display="flex" alignItems="center">
            {/* Símbolo de moneda */}
            <Typography
              variant="body2"
              sx={{
                fontSize: "0.75rem", // Equivalente a text-xs
                color: "#424949",
                fontWeight: 500,
                marginRight: 1,
                fontFamily: "Ubuntu, sans-serif", // Especificamos la fuente Ubuntu
              }}
            >
              $
            </Typography>

            {/* Número */}
            <Typography
              variant="body1"
              sx={{
                fontSize: "0.875rem", // Equivalente a text-sm
                fontWeight: "bold",
                letterSpacing: "-0.015em", // tracking-tight
                color: "#242828",
                marginRight: 0.5,
                fontFamily: "Ubuntu, sans-serif",
              }}
            >
              50.50
            </Typography>

            {/* Moneda MXN */}
            <Typography
              variant="body2"
              sx={{
                fontSize: "0.625rem", // Equivalente a text-[10px]
                color: "#424949",
                fontWeight: "medium",
                fontFamily: "Ubuntu, sans-serif",
              }}
            >
              MXN
            </Typography>
          </Box>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{ justifyContent: "space-evenly" }}>
        <CounterButton></CounterButton>
        <Button
          variant="contained"
          color="primary"
          sx={{
            fontWeight: "medium",
            fontFamily: "Ubuntu, sans-serif",
            fontSize: "10px",
          }}
          className=" p-1 "
        >
          Comprar ahora
        </Button>
      </CardActions>

      <CardActions
        sx={{
          backgroundColor: "#FFD1C1",
          display: "flex",
          justifyContent: "space-between",
          p: "0",
          height: "20px",
        }}
      >
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#FFD1C1",
            color: "#7f110f",
            fontSize: "10px",
            width: "100%",
            height: "20px",
          }}
          endIcon={<ArrowForward />}
        >
          Detalles del producto
        </Button>
      </CardActions>
    </Card>
  );
}
