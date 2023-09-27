import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { Avatar } from "@mui/material";
import { Link } from "@mui/material";

function VerticalLinearStepper({ steps }) {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel
              optional={
                index === steps.length - 1 ? (
                  <Typography variant="caption">Último Tema</Typography>
                ) : null
              }
            >
              {step.label}
            </StepLabel>
            <StepContent>
              <Box
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                }}
              >
                <Avatar
                  alt={`Paso ${index}`}
                  src={step.photo}
                  sx={{ width: 150, height: 150 }}
                />
                <Stack spacing={2} sx={{ marginLeft: 2 }}>
                  {step.description.map((item, index) => (
                    <Typography variant="caption" key={index}>
                      {item}
                    </Typography>
                  ))}
                  {step.links?.map((item, index) => (
                    <Link
                      variant="caption"
                      key={index}
                      href={item.url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {item.label}
                    </Link>
                  ))}
                </Stack>
              </Box>

              <Box sx={{ mb: 2 }}>
                <div>
                  <Button
                    disabled={step?.nextStepDisabled}
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    {index === steps.length - 1
                      ? "Finalizar Seminario"
                      : "Continuar"}
                  </Button>
                  <Button
                    disabled={index === 0}
                    onClick={handleBack}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Regresar
                  </Button>
                </div>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Typography>
            ¡FELICIDADES! Ha culminado el seminario satisfactoriamente
          </Typography>
          <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
            Reiniciar Seminario
          </Button>
        </Paper>
      )}
    </Box>
  );
}

VerticalLinearStepper.propTypes = {
  steps: PropTypes.array,
};

export default VerticalLinearStepper;