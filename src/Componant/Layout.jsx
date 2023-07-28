import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import DrawerComponent from "./DrawerComponent";
import { Box } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import {deepOrange} from '@mui/material/colors'

const drawerWidth = 240;
export default function Layout() {
  const [myMoad, setMyMoad] = useState(localStorage.getItem('currentMoad')=== null ?
  'dark':localStorage.getItem('currentMoad') === 'light'?
  'light' : 'dark');

  const darkTheme = createTheme({
    palette: {
      myMoad,
      ...(myMoad === 'light'
        ? {
            // palette values for light mode
        nav:{
          main: deepOrange[600]
        }
          }
        : {
            // palette values for dark mode
            nav:{
              main: deepOrange[200]
            }
          }),
    },
  });
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        
          <Navbar drawerWidth={drawerWidth} />

          <DrawerComponent drawerWidth={drawerWidth} setMyMoad={setMyMoad} />
          <Box
            sx={{
              ml: `${drawerWidth}px`,
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Outlet />
          </Box>
        
      </ThemeProvider>
    </>
  );
}
