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
        maxWidth: { xs: 170, sm: 170, md: 230, lg: 280 },
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
          alt="food"
          sx={{
            width: { xs: "100%", sm: "170px", md: "230px", lg: "280px" },
            objectFit: "cover",
            height: { xs: "80px", sm: "80px", md: "135px", lg: "164px" },
          }}
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
              fontSize: { xs: "14px", sm: "14px", md: "16px", lg: "20px" },
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
              fontSize: { xs: "10px", sm: "10px", md: "10px", lg: "12px" },
              width: "100%", // Ocupa el ancho completo
              height: { xs: "33px", sm: "33px", md: "33px", lg: "42px" }, // Altura fija según el breakpoint
              overflow: "hidden", // Oculta el desbordamiento
              textOverflow: "ellipsis", // Añade puntos suspensivos si el texto no cabe
              display: "-webkit-box", // Para limitar el número de líneas
              WebkitLineClamp: 3, // Limita a 3 líneas visibles (puedes ajustar según el caso)
              WebkitBoxOrient: "vertical", // Requerido para el corte de líneas
              lineHeight: 1.2,
              mb: "4px",
            }}
            variant="body2"
            color="textDescription"
            className="  font-normal"
          >
            Deliciosa orden de alitas empanizadas, aderezadas con un toque de
            salsa especial de la casa. Y aderezada de queso chedar y...
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
                fontSize: { xs: "14px", sm: "14px", md: "16px", lg: "20px" }, // Equivalente a text-sm
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
                fontSize: { xs: "10px", sm: "10px", md: "12px", lg: "12px" }, // Equivalente a text-[10px]
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
            fontSize: { xs: "10px", sm: "10px", md: "12px", lg: "16px" },
            padding: { xs: "4px", sm: "4px", md: "8px 16px", lg: "8px 16px" },
          }}
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
            fontSize: { xs: "10px", sm: "10px", md: "10px", lg: "12px" },
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

//height: { xs: "33px", sm: "33px", md: "33px", lg: "42px" },
