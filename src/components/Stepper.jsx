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
import { Avatar, Badge } from "@mui/material";
import { Link } from "@mui/material";
import { styled } from "@mui/material/styles";
import parse from "html-react-parser";

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

  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      right: -50,
      top: 20,
      border: `2px solid ${theme.palette.primary.main}`,
      padding: "0 4px",
    },
  }));

  return (
    <Box>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label}>
            {step.comingSoon ? (
              <StyledBadge badgeContent="Próximamente">
                <StepLabel
                  optional={
                    index === steps.length - 1 ? (
                      <Typography variant="caption">Último Tema</Typography>
                    ) : null
                  }
                >
                  {step.label}
                </StepLabel>
              </StyledBadge>
            ) : (
              <StepLabel
                optional={
                  index === steps.length - 1 ? (
                    <Typography variant="caption">Último Tema</Typography>
                  ) : null
                }
              >
                {step.label}
              </StepLabel>
            )}

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
                  {step.description?.map((item, index) => (
                    <div key={index}>
                      {item.title && (
                        <Typography
                          className="text-justify"
                          variant="lead"
                          key={index}
                        >
                          {parse(`${item.title}`)}
                        </Typography>
                      )}
                      {item.desc && (
                        <Typography
                          className="text-justify"
                          variant="caption"
                          key={index}
                        >
                          {parse(`${item.desc}`)}
                        </Typography>
                      )}
                    </div>
                  ))}

                  {(step.links?.length > 0 || step.videos?.length > 0) && (
                    <>
                      <Typography variant="h6" className="mt-2 mb-2">
                        Material Complementario:
                      </Typography>
                    </>
                  )}
                  {step.links?.map((item, index) => (
                    <Link
                      color="inherit"
                      variant="caption"
                      key={index}
                      href={item.url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {item.label}
                    </Link>
                  ))}
                  {step.videos?.map((video, key) => (
                    <iframe
                      key={key}
                      width="420"
                      height="345"
                      src={video.src}
                    ></iframe>
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
