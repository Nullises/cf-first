import "./App.css";
import { Route, Routes } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import VerticalLinearStepper from "./components/Stepper";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { cf_theme } from "./theme";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import CardContainer from "./components/CardContainer";
import stepsEscatologico from "./utils/steps-escatologico";
import stepsIsaias from "./utils/steps-isaias";
import stepsJesus from "./utils/steps-jesus";

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme(cf_theme);

export default function Album() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Navbar />
      <main>
        {/* Hero unit */}
        <Hero />
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}

          <Routes>
            <Route exact path="/" element={<CardContainer />} />
            <Route
              exact
              path="/escatologico"
              element={<VerticalLinearStepper steps={stepsEscatologico} />}
            />
            <Route
              exact
              path="/isaias"
              element={<VerticalLinearStepper steps={stepsIsaias} />}
            />
            <Route
              exact
              path="/jesus"
              element={<VerticalLinearStepper steps={stepsJesus} />}
            />
          </Routes>
        </Container>
      </main>
      {/* Footer */}
      <Footer />
      {/* End footer */}
    </ThemeProvider>
  );
}
