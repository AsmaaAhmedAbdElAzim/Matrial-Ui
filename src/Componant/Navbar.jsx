import React from 'react'
import { Avatar, Link, Typography, useTheme } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";



export default function Navbar({drawerWidth}) {
  const themeee = useTheme()
  return (<>
  <AppBar 
  position="static" 
    // color = {themeee.palette.nav.main}
       sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}>
        <Toolbar>
          <Link
            href="#"
            color="inherit"
            variant="h6"
            sx={{
              flexGrow: 1,
              textDecoration: "none",
              "&:hover": { fontSize: "22px" },
              
            }}
          >
            My Exppansev
          </Link>
          <Typography component="p" mr={2} color='inherit'>
            Ahmed Ali
          </Typography>
          <Avatar
            alt="Remy Sharp"
            src="https://mui.com/static/images/avatar/1.jpg"
            sx={{ width: 52, height: 52 }}
          />
        </Toolbar>
      </AppBar>
  </>
    
  )
}
