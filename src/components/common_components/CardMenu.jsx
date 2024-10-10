import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import CounterButton from "../menu/buttonIncrease";

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
          height="100"
          width="170"
          image="/assets/DeliciousChicken.svg"
          alt="green iguana"
        />
        <CardContent
          width="170"
          sx={{
            padding: 1, // Cambia el padding del CardContent
          }}
        >
          <Typography
            className="font-ubuntu font-bold text-sm  tracking-tight"
            gutterBottom
            color="textTitle"
            variant="h5"
            component="div"
          >
            Alitas
          </Typography>
          <Typography
            variant="body2"
            color="textDescription"
            className="font-ubuntu text-[10px] font-normal"
          >
            Deliciosa orden de alitas empanizadas, aderezadas con...
          </Typography>

          <Typography
            variant="body2"
            color="textPrimary"
            className="font-ubuntu"
          >
            $50 MXN
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{ justifyContent: "space-evenly" }}>
        <CounterButton></CounterButton>
        <Button
          variant="contained"
          color="primary"
          className="font-ubuntu font-medium text-[10px] p-1 "
        >
          Comprar ahora
        </Button>
      </CardActions>
    </Card>
  );
}
