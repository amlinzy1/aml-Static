import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import TheaterIcon from "@material-ui/icons/Theaters";
import LiveTvIcon from "@material-ui/icons/LiveTv";
import SearchIcon from "@material-ui/icons/Search";
import { useNavigate } from "react-router-dom";



const useStyles = makeStyles({
  root: {
    width: "100%",
    position:"fixed",
    bottom: 0,
    backgroundColor: "#000000",
    zIndex: 100,
  },
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();
 
  useEffect(() => {
   if (value === 0) navigate('/');
   else if(value === 1) navigate('/TV');
   else if(value === 2) navigate('/movies');
   else if(value === 3) navigate('/search');
  }, [value,navigate]);
  
  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction
      style={{ color: "yellow" }} 
      label="Popular" 
      icon={<WhatshotIcon />} 
      />
      <BottomNavigationAction 
      style={{ color: "yellow" }}
       label="TV Shows" 
       icon={<LiveTvIcon />} 
       />
      <BottomNavigationAction 
      style={{ color: "yellow" }}
      label="Movies" 
      icon={<TheaterIcon />} 
      />
      <BottomNavigationAction 
      style={{ color: "yellow" }}
      label="Search" 
      icon={<SearchIcon />} 
      />
    </BottomNavigation>
  );
}