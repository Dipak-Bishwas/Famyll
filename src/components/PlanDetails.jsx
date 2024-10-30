import React from "react";
import {
  Container,
  Typography,
  //   Button,
  Box,
  Grid,
  Divider,
} from "@mui/material";

const PlanDetails = () => {
  return (
    <Container maxWidth="100%">
      <Box backgroundColor="white" padding={2} borderRadius={2}>
        <Grid
          container
          justifyContent="space-between"
          alignItems="center"
          mb={2}
        >
          <Grid item>
            <Typography variant="h4">Plan Details</Typography>
          </Grid>
        </Grid>
        <Divider />
        <Box
          borderRadius={2}
          sx={{
            mt: "10px",
            p: "20px",
            backgroundColor: "#f5f4f9",
          }}
        >
          <Typography variant="h5">Basic Plan Details</Typography>
          <Typography>
            This is a brief description of the Basic Plan, highlighting its key
            features and benefits.
          </Typography>
          <Grid container alignItems="center" my={2}>
            <Grid item xs={6}>
              <Typography variant="h6">Coverage Details</Typography>
              <Typography variant="body1">
                General Practitioner: 1 visit, 156 FCFA
              </Typography>
              <Typography variant="body1">
                Specialist Care Provider: 1 visit, 156 FCFA
              </Typography>
              <Typography variant="body1">
                Radiation Therapy: 1 visit, 156 FCFA
              </Typography>
              <Typography variant="body1">
                Maternity (Labor and Delivery): 1 visit, 156 FCFA
              </Typography>
              <Typography variant="body1">
                {" "}
                Pharmacy: 1 visit, 156 FCFA
              </Typography>
              <Typography variant="body1">
                Hospitalization: 1 visit, 156 FCFA{" "}
              </Typography>{" "}
            </Grid>{" "}
            <Grid item xs={6}>
              {" "}
              <Typography variant="h6">Coverage Percentage</Typography>{" "}
              <Typography variant="body1">
                {" "}
                Pelvic exam is covered at 50%.{" "}
              </Typography>{" "}
              <Typography variant="body1">
                You can combine visit counts per covered service for one
                physical visit. For example, if you have 3 visits for CT Scanner
                at cost of 180,000 FCFA and 50%, the insurance plan will cover
                90,000 FCFA.
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default PlanDetails;
