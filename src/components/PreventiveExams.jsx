import {
  Box,
  Button,
  Container,
  Dialog,
  DialogTitle,
  Divider,
  Typography,
} from "@mui/material";
import React from "react";
import { Grid } from "@mui/material";

import examData from "../utlis/examData"; // Importing examData from its file

export default function PreventiveExams() {
  console.log(examData);
  const [openDialog, setOpenDialog] = React.useState(false);

  const handleDialogOpen = () => {
    setOpenDialog(true);
  };

  const handleDialogClose = (value) => {
    setOpenDialog(false);
  };
  return (
    <Container maxWidth="100%">
      <Box
        sx={{
          backgroundColor: "white",
          borderRadius: "10px",
          pl: 3,
          pr: 2,
          pb: 2,
        }}
      >
        <Box>
          <Typography
            variant="h5"
            fontWeight="bold"
            sx={{ mt: 2, pt: 2, pb: 2 }}
          >
            Your Free Preventive Exam
          </Typography>
        </Box>
        <Divider sx={{ mb: 1 }} />
        {examData.map((data, index) => (
          <Box
            key={index}
            sx={{
              mt: 2,
              pt: 1,
              backgroundColor: "white",
              borderRadius: "10px",
            }}
          >
            <Grid container justifyContent="space-between" alignItems="center">
              <Grid item>
                <Box display="flex">
                  <Typography marginLeft={0} fontWeight="bold" variant="h6">
                    {data.title}
                  </Typography>
                </Box>

                <Box display="flex" sx={{ margin: "5px 0px" }}>
                  <Typography>Exam eligibility:</Typography>
                  <Typography marginLeft={1} fontWeight="bold">
                    {data.Exam_elgibility}
                  </Typography>
                </Box>
                <Box display="flex" sx={{ margin: "5px 0px" }}>
                  <Typography>Current Status:</Typography>
                  <Typography marginLeft={1} fontWeight="bold">
                    {data.Current_status}
                  </Typography>
                </Box>
                {data.link && (
                  <Box display="flex" sx={{ margin: "5px 0px" }}>
                    <Typography>Learn more about {data.type}</Typography>
                    <Typography
                      marginLeft={1}
                      fontWeight="bold"
                      sx={{ color: "#7338ac" }}
                    >
                      {data.link}
                    </Typography>
                  </Box>
                )}
              </Grid>
              <Grid item>
                <Button
                  variant="outlined"
                  color="secondary"
                  onClick={handleDialogOpen}
                  sx={{
                    borderRadius: "50px",
                    border: "2px solid #7338ac",
                    mt: { md: -9, sm: 0 },
                    textTransform: "none",
                  }}
                >
                  Schedule
                </Button>
              </Grid>
            </Grid>
            <Divider sx={{ mt: 2 }} />
          </Box>
        ))}
      </Box>
      <Dialog
        onClose={handleDialogClose}
        open={openDialog}
        justifyContent="center"
        alignItems="center"
      >
        <DialogTitle sx={{ textAlign: "center" }}>Schedule Exam</DialogTitle>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              p: 2,
              height: 250,
              width: 320,
            }}
          >
            <Box
              component="img"
              sx={{
                marginTop: -3,
                height: 100,
                width: 100,
                marginLeft: 10,
              }}
              alt="Schedule Exam"
              src={
                "https://www.thewmch.com/wp-content/uploads/2023/02/female-doctor-using-her-digital-tablet-free-vector.jpg"
              }
            />

            <Grid Container>
              <div style={{ gap: "6px", display: "flex" }}>
                <Grid item sx={{ marginBottom: 1 }}>
                  <Typography>Lab</Typography>
                </Grid>
                <Grid item>
                  <Typography sx={{ fontWeight: "bold" }}>
                    Any Lab Name
                  </Typography>
                </Grid>
              </div>
              <div style={{ gap: "6px", display: "flex" }}>
                <Grid item sx={{ marginBottom: 1 }}>
                  <Typography>Phone Number</Typography>
                </Grid>
                <Grid item>
                  <Typography sx={{ fontWeight: "bold" }}>
                    +(012) 345 6789
                  </Typography>
                </Grid>
              </div>
              <div style={{ gap: "6px", display: "flex" }}>
                <Grid item sx={{ marginBottom: 1 }}>
                  <Typography>Email:</Typography>
                </Grid>
                <Grid item>
                  <Typography sx={{ fontWeight: "bold" }}>
                    example@email.com
                  </Typography>
                </Grid>
              </div>
              <div style={{ gap: "6px", display: "flex" }}>
                <Grid item sx={{ marginBottom: 1 }}>
                  <Typography>Business Hours</Typography>
                </Grid>
                <Grid item>
                  <Typography sx={{ fontWeight: "bold" }}>
                    8:00 AM to 2:00 PM
                  </Typography>
                </Grid>
              </div>
            </Grid>
          </Box>
          <Button
            variant="outlined"
            sx={{
              mb: 2,
              backgroundColor: "#7338ac",
              color: "white",
              borderRadius: "16px/50%",
              ":hover": {
                backgroundColor: "#b262fe",
              },
            }}
            onClick={handleDialogClose} // Close the dialog on button click
          >
            Call to Schedule
          </Button>
        </Box>
      </Dialog>
    </Container>
  );
}
