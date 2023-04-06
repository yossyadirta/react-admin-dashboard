import React, { useState } from 'react';
import { 
  LightModeOutlined, 
  DarkModeOutlined, 
  Menu as MenuIcon, 
  Search,
  SettingsOutlined,
  ArrowDropDownOutlined 
} from "@mui/icons-material";
import FlexBetween from './FlexBetween';
import { useDispatch } from 'react-redux';
import { setMode } from '../state';
import profileImage from "../assets/profile.jpg";
import { useTheme } from '@emotion/react';
import { AppBar, IconButton, InputBase, Toolbar } from '@mui/material';

const Navbar = () => {
  const dispatch = useDispatch();
  const theme = useTheme();

  console.log(theme, "<< ini theme");

  return (
    <AppBar
      sx={{
        position: "static",
        background: 'none',
        boxShadow: "none"
      }}
    >
      <Toolbar sx={{justifyContent: "space-between"}}>
        {/* left */}
        <FlexBetween>
          <IconButton onClick={() => console.log("open/close sidebar")}>
            <MenuIcon/>
          </IconButton>
          <FlexBetween
            backgroundColor={theme.palette.background.alt}
            borderRadius='9px'
            gap='3rem'
            p="0.1rem 1.5rem"
          >
            <InputBase placeholder='Search...'/>
            <IconButton>
              <Search/>
            </IconButton>
          </FlexBetween>
        </FlexBetween>

        {/* Right */}
        <FlexBetween
          gap="1.5rem"
        >
          <IconButton onClick={() => dispatch(setMode())}>
            {theme.palette.mode === 'dark' ? 
            (<DarkModeOutlined sx={{fontSize: "24px"}} />) : (<LightModeOutlined sx={{fontSize: "24px"}} />)}
          </IconButton>
          <IconButton>
            <SettingsOutlined sx={{fontSize: "24px"}} />
          </IconButton>
        </FlexBetween>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar