import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartSimple ,faUsers , faChartLine , faListCheck ,faGears , faInfo , faQuestion} from '@fortawesome/free-solid-svg-icons';
import React from 'react'
import { Typography } from '@mui/material';
import ElectricIcon from './ElectricVehicleIcon.svg';
import Stack from '@mui/material/Stack';
import Dashboard from './Dashboard';

const drawerWidth = 240;


const Home = (props) => {
  const sidebarItems = [ 
    {
        key : "1",
        value : "Dashboard",
        icon : <FontAwesomeIcon icon={faChartLine} />
    },
    {
        key : "2",
        value : "Analytics",
        icon : <FontAwesomeIcon icon={faChartSimple} />
    },
    {
        key : "3",
        value : "Clients",
        icon : <FontAwesomeIcon icon={faUsers} />
    },
    {
        key : "4",
        value : "Task",
        icon : <FontAwesomeIcon icon={faListCheck} />
    }
  ]

  const otherOptionsIcon = [
    {
     Key : "1",
     value : "Settings",
     icon : <FontAwesomeIcon icon={faGears} />
    },
    {
     Key : "2",
     value : "About",
     icon : <FontAwesomeIcon icon={faInfo} />
    },
    {
     Key : "3",
     value : "Feedback",
     icon : <FontAwesomeIcon icon={faQuestion} />
    }
  ]
  return (
    <>
      {/* // <Box sx={{ display: 'flex' , flexDirection:"row" }}> */}
      <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar variant="regular" style={{padding:"10px"}}>
        <Stack
          direction="row"
          sx={{
            alignItems: 'center',
            flexGrow: 1,
            width: '100%',
            gap: 1,
          }}
        >
          <Stack
            direction="row"
            spacing={1}
            sx={{ justifyContent: 'center', mr: 'auto' }}
          >
            <img src={ElectricIcon} alt={'no display'} width={"70px"} height={"50px"}/>
            <Typography variant="h5" component="h1" sx={{ color: 'text.primary' ,paddingTop:"10px" }}>
              EVehicle
            </Typography>
          </Stack>
        </Stack>
      </Toolbar>
        <Divider />
        <List>
          {sidebarItems.map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
              <ListItemIcon>
                {text.icon}
              </ListItemIcon>
                <ListItemText primary={text.value} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {otherOptionsIcon.map((text, index) => (
            <ListItem key={text.Key} disablePadding>
              <ListItemButton>
               <ListItemIcon>
                {text.icon}
              </ListItemIcon>
                <ListItemText primary={text.value} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
        <Box
          component="main"  
          sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
        >
          <Dashboard data={props.data}/>
        </Box>
        </Box>
      </>
  )
}

export default Home
