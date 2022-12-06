import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { grey } from "@mui/material/colors";

import classes from "./ShowProfile.module.scss";

const theme = createTheme({
  palette: {
    primary: {
      main: grey[500],
      contrastText: "#fff",
    },
  },
});

const ShowProfile = () => {
  return (
    <div className={classes.container}>
      <div>
        <img
          className={classes.backgroundPicture}
          src={require("../../../assets/images/backgroundImg.jpg")}
          alt="poza toamna"
        ></img>
      </div>
      <div className={classes.profileInfo}>
        <div className={classes.userInfo}>
          <img
            className={classes.profilePicture}
            src={require("../../../assets/images/authImg.jpg")}
            alt="profile pic"
          ></img>
          <div className={classes.profileDetails}>
            <h1>Vlad Catalin Socaciu</h1>
            <p>110 friends</p>
            <AccountCircleIcon
              className={classes.friendsIcon}
            ></AccountCircleIcon>
            <AccountCircleIcon
              className={classes.friendsIcon}
            ></AccountCircleIcon>
            <AccountCircleIcon
              className={classes.friendsIcon}
            ></AccountCircleIcon>
            <AccountCircleIcon
              className={classes.friendsIcon}
            ></AccountCircleIcon>
            <AccountCircleIcon
              className={classes.friendsIcon}
            ></AccountCircleIcon>
            <AccountCircleIcon
              className={classes.friendsIcon}
            ></AccountCircleIcon>
          </div>
        </div>
        <div className={classes.userAction}>
          <Button variant="outlined" size="medium">
            Friends
          </Button>
          <Button variant="contained">Message</Button>
        </div>
      </div>
      <div className={classes.greyLine}></div>
      <div className={classes.buttons}>
        <ul className={classes.actions}>
          <ThemeProvider theme={theme}>
            <Button variant="contained">Posts</Button>
            <Button variant="contained">About</Button>
            <Button variant="contained">Friends</Button>
            <Button variant="contained">Photos</Button>
            <Button variant="contained">Videos</Button>
            <Button variant="contained">Check-ins</Button>
            <Button variant="contained">More</Button>
          </ThemeProvider>
        </ul>
        <ThemeProvider theme={theme}>
          <Button variant="contained" className={classes.dotButton}>
            ...
          </Button>
        </ThemeProvider>
      </div>
    </div>
  );
};

export default ShowProfile;
