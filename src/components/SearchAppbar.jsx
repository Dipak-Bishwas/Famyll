// import * as React from "react";
// import { styled, alpha } from "@mui/material/styles";
// import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
// import Toolbar from "@mui/material/Toolbar";
// import IconButton from "@mui/material/IconButton";
// import Typography from "@mui/material/Typography";
// import InputBase from "@mui/material/InputBase";
// import MenuIcon from "@mui/icons-material/Menu";
// import SearchIcon from "@mui/icons-material/Search";
// import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
// import Sidebar from "./Sidebar";
// import { useState } from "react";

// const Search = styled("div")(({ theme }) => ({
//   position: "relative",
//   borderRadius: theme.shape.borderRadius,
//   backgroundColor: alpha(theme.palette.common.white, 0.15),
//   "&:hover": {
//     backgroundColor: alpha(theme.palette.common.white, 0.25),
//   },
//   marginLeft: 0,
//   width: "auto",
//   [theme.breakpoints.up("sm")]: {
//     marginLeft: theme.spacing(1),
//     width: "auto",
//   },
// }));

// const SearchIconWrapper = styled("div")(({ theme }) => ({
//   padding: theme.spacing(0, 2),
//   height: "100%",
//   position: "absolute",
//   pointerEvents: "none",
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",
// }));

// const StyledInputBase = styled(InputBase)(({ theme }) => ({
//   color: "inherit",
//   "& .MuiInputBase-input": {
//     padding: theme.spacing(1, 1, 1, 0),
//     paddingLeft: `calc(1em + ${theme.spacing(4)})`,
//     transition: theme.transitions.create("width"),
//     width: "12ch",
//     "&:focus": {
//       width: "20ch",
//     },
//   },
// }));

// // export default function SearchAppBar() {
// //   const [open, setOpen] = React.useState(true);
// //   const [selectedCategory, setSelectedCategory] = useState("My Plan");

// //   const handleCategoryClick = (category) => {
// //     setSelectedCategory(category);
// //   };

// //   const handleDrawerOpen = () => {
// //     setOpen(true);
// //   };

// //   const handleDrawerClose = () => {
// //     setOpen(false);
// //   };

// //   return (
// //     <Box sx={{ display: "flex" }}>
// //       <Sidebar
// //         selectedCategory={selectedCategory}
// //         setSelectedCategory={handleCategoryClick}
// //       />

// //       <Box component="main" sx={{ flexGrow: 1, bgcolor: "background.default" }}>
// //         <AppBar position="static" sx={{ backgroundColor: "#f5f4f9" }}>
// //           <Toolbar>
// //             <IconButton
// //               color="inherit"
// //               aria-label="open drawer"
// //               edge="start"
// //               onClick={handleDrawerOpen}
// //               sx={{ mr: 2 }}
// //             >
// //               <MenuIcon />
// //             </IconButton>
// //             <Typography variant="h6" noWrap sx={{ flexGrow: 1 }}>
// //               {selectedCategory}
// //             </Typography>
// //             <Search>
// //               <SearchIconWrapper>
// //                 <SearchIcon />
// //               </SearchIconWrapper>
// //               <StyledInputBase
// //                 placeholder="Search…"
// //                 inputProps={{ "aria-label": "search" }}
// //               />
// //             </Search>
// //             <NotificationsNoneOutlinedIcon
// //               sx={{
// //                 fontSize: "2rem",
// //                 borderRadius: "50%",
// //                 backgroundColor: "violet",
// //                 mx: 2,
// //               }}
// //             />
// //           </Toolbar>
// //         </AppBar>
// //         <Toolbar /> {/* To adjust content below the AppBar */}
// //         {/* Add your main content here */}
// //       </Box>
// //     </Box>
// //   );
// // }
