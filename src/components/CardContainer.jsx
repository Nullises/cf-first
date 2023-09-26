import { NavLink } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Box from "@mui/material/Box";
import diamante from "/diamante.png";
import berilo from "/berilo.png";
import rubi from "/rubi.png";

const cards = [
  {
    title: "Seminario El Maestro de Maestros",
    subtitle: "Diamante",
    img: diamante,
    description:
      "Conozca la vida y el ministerio de Nuestro Señor Jesucristo, en este seminario",
    url: "/jesus",
    disabled: true,
  },
  {
    title: "Seminario Escatológico",
    subtitle: "Berilo",
    img: berilo,
    description: "Prepárese para el tiempo del fin a través de este seminario",
    url: "/escatologico",
    disabled: false,
  },
  {
    title: "Seminario Isaías",
    subtitle: "Rubí",
    img: rubi,
    description:
      "En este seminario, estudiaremos al Príncipe de los Profetas, Isaías",
    url: "/isaias",
    disabled: true,
  },
];

function CardContainer() {
  return (
    <Grid container spacing={4}>
      {cards.map((card) => (
        <Grid item key={card} xs={12} sm={6} md={4}>
          <Card
            sx={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <CardMedia
              component="div"
              sx={{
                // 16:9
                pt: "56.25%",
              }}
              image={card.img}
            />
            <Box sx={{ textAlign: "center" }}>
              <strong>{card.subtitle}</strong>
            </Box>

            <CardContent sx={{ flexGrow: 1 }}>
              <Typography gutterBottom variant="h5" component="h2">
                {card.title}
              </Typography>
              <Typography>{card.description}</Typography>
            </CardContent>
            <CardActions>
              {!card.disabled ? (
                <NavLink to={card.url} exact="true">
                  Ver más
                </NavLink>
              ) : (
                <strong>¡PROXIMAMENTE!</strong>
              )}
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default CardContainer;
