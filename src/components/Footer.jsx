import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      &copy; {"2023 Hecho con ♥ para la Gloria de Nuestro Señor Jesucristo"}
    </Typography>
  );
}

function Footer() {
  return (
    <Box sx={{ p: 6, display: "grid" }} component="footer">
      <Copyright />
      <Typography variant="caption" align="center">
        A menos que se indique lo contrario, las citas bíblicas hacen referencia
        a la Reina Valera 1960 (RV-1960).
      </Typography>
      <Typography variant="caption" align="center">
        A menos que se indique lo contrario, todas las fotos son tomadas de
        Unsplash o son creadas por Mojo AI y no están sujetas a Copyright
      </Typography>
    </Box>
  );
}

export default Footer;
