import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import jesus from "/jesus.png";
import usePath from "../hooks/usePath";

function Hero() {
  const currentPath = usePath();
  const isSeminar =
    "Estudie a su ritmo cada tema y solo haga clic en Continuar cuando sienta que ya lo ha entendido por completo.";

  return (
    <Box
      sx={{
        bgcolor: "background.paper",
        pt: 8,
        pb: 1,
      }}
    >
      <Container maxWidth="xs">
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img width={240} height={240} src={jesus} />
        </Box>
        <h1>CRISTIANISMO FELIZ (SEMINARIOS)</h1>
        <h5>
          {`Seminarios hechos por inspiración del Espíritu Santo para la
          instrucción espiritual de su pueblo. ${
            currentPath != "/" ? isSeminar : ""
          }`}
        </h5>
      </Container>
    </Box>
  );
}

export default Hero;
