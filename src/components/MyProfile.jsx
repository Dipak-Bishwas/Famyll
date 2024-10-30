import * as React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import { cover, profile } from "../Assets";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function MyProfile({
  setDisplayedComponent,
  toggleComponent,
  practitioner,
}) {
  const handleChangePassword = () => {
    setDisplayedComponent("ChangePassword");
    toggleComponent("ChangePassword", "Change Password");
  };
  return (
    <Container maxWidth="100%">
      <Box
        sx={{
          mt: 2,
          p: 2,
          pt: 4,
          pl: 3,
          backgroundColor: "white",
          borderRadius: "10px",
        }}
      >
        <Box
          maxWidth="100%"
          height="100px"
          sx={{
            backgroundImage: `url(${cover})`,
            backgroundPosition: "center",
          }}
        >
          {" "}
        </Box>
        <Box
          maxWidth="100%"
          display="flex"
          sx={{
            mt: -5, // Add a negative margin here
          }}
        >
          <Box
            maxWidth="100px"
            height="121px"
            borderRadius="10px"
            sx={{
              backgroundImage: `url(${profile})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              ml: 2,
              flex: 1,
            }}
          >
            {" "}
          </Box>
          <Box
            sx={{
              marginTop: "60px",
              flex: 2,
            }}
          >
            <Grid container justifyContent="space-between" alignItems="center">
              <Grid
                item
                sx={{
                  ml: 1,
                }}
              >
                <Grid container>
                  <Grid item>
                    <Typography variant="h5" fontWeight="bold" ml={2} mb={1}>
                      John Jacob Smith
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography
                      variant="subtitle1"
                      sx={{
                        borderRadius: "50px",
                        backgroundColor: "#dff3e2",
                        color: "green",
                        display: "flex",
                        alignItems: "center",
                        ml: 1,
                        padding: "3px 16px", // Adjust padding as needed
                      }}
                    >
                      <CircleIcon
                        style={{ fontSize: "1rem", marginRight: "6px" }}
                      />{" "}
                      {/* Adjust margin as needed */}
                      Covered
                    </Typography>
                  </Grid>
                </Grid>
                <Grid container ml={2}>
                  <Typography> Type:</Typography>
                  <Grid item>
                    <Typography ml={1} fontWeight="bold">
                      General Practitioner
                    </Typography>
                  </Grid>

                  <Grid item>
                    <Typography ml={2}> Medical Council Number:</Typography>
                  </Grid>
                  <Grid item>
                    <Typography ml={1} fontWeight="bold">
                      {" "}
                      8283524
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#ebf3f7",
                    borderRadius: "152px",
                    boxShadow: "none",
                    color: "black",
                    textTransform: "none",
                    mt: -2,
                    ":hover": {
                      backgroundColor: "#b262fe",
                    }
                  }}
                  onClick={handleChangePassword}
                >
                  Change Password
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Box>
          <Accordion sx={{ boxShadow: "none" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography variant="h6" fontWeight="bold">
                Basic Information
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Grid container spacing={1.5}>
                <Grid item xs={6} md={4}>
                  <Typography variant="subtitle2" mb={1}>
                    Date of Birth
                  </Typography>
                  <Typography fontWeight="bold">12/06/1986</Typography>
                </Grid>

                <Grid item xs={6} md={6}>
                  {" "}
                  <Typography variant="subtitle2" mb={1}>
                    Gender
                  </Typography>
                  <Typography fontWeight="bold">Male</Typography>
                </Grid>
              </Grid>
            </AccordionDetails>
          </Accordion>
          <Divider sx={{ mt: 2, mb: 2 }} />
          <Accordion sx={{ boxShadow: "none" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography variant="h6" fontWeight="bold">
                Contact Information
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Grid container spacing={1.5}>
                <Grid item xs={6} md={2.4}>
                  <Typography variant="subtitle2" mb={1}>
                    Phone Number
                  </Typography>
                  <Typography fontWeight="bold">+(012) 345-6789</Typography>
                </Grid>
                <Grid item xs={6} md={2.4}>
                  {" "}
                  <Typography variant="subtitle2" mb={1}>
                    Email Address
                  </Typography>
                  <Typography fontWeight="bold">example@email.com</Typography>
                </Grid>
                <Grid item xs={6} md={2.4}>
                  {" "}
                  <Typography variant="subtitle2" mb={1}>
                    City
                  </Typography>
                  <Typography fontWeight="bold">Chicago</Typography>
                </Grid>
                <Grid item xs={6} md={2.4}>
                  {" "}
                  <Typography variant="subtitle2" mb={1}>
                    State/province
                  </Typography>
                  <Typography fontWeight="bold">Illinois</Typography>
                </Grid>
                <Grid item xs={6} md={2.4}>
                  {" "}
                  <Typography variant="subtitle2" mb={1}>
                    Country
                  </Typography>
                  <Typography fontWeight="bold">United States</Typography>
                </Grid>
              </Grid>
            </AccordionDetails>
          </Accordion>
          <Divider sx={{ mt: 2, mb: 2 }} />
          <Accordion sx={{ boxShadow: "none" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography variant="h6" fontWeight="bold">
                Pre-existing Condition
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Grid container spacing={1.5}>
                <Grid item xs={6} md={4}>
                  <Typography variant="subtitle2" mb={1}>
                    High Blood Pressure. Diabetes
                  </Typography>
                  <Grid container>
                    <Grid item>
                      <Typography variant="subtitle2">Smoker:</Typography>
                    </Grid>
                    <Grid item>
                      <Typography variant="subtitle2" fontWeight="bold">
                        Yes
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </AccordionDetails>
          </Accordion>
          <Box maxWidth="100%" ml={2}>
            <Typography variant="h6" fontWeight="bold">
              Add Mobile MDN Number
            </Typography>
            <Box
              sx={{
                mt: 2,
                width: "330px",
                height: "100px",
                padding: "26px 96px",
                borderRadius: "12px",
                border: "1.5px dashed",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#7338ac",
                  color: "white",
                  borderRadius: "16px/50%",
                  ":hover": {
                    backgroundColor: "#b262fe",
                  },
                }}
              >
                Add number
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
