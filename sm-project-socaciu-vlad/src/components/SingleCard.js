import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { Button, CardActionArea, CardActions } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import classes from "./AuthForm.module.scss";

const SingleCard = (props) => {
  const user = props.user;

  if (user) {
    return (
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="190"
            image={user.authPic}
            alt="Auth Pic"
          />
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary" className={classes.picButton}>
            {user.name}
          </Button>
        </CardActions>
      </Card>
    );
  }

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <div className={classes.plusIcon}>
          <AddCircleIcon
            sx={{ fontSize: "90px" }}
            color="primary"
          ></AddCircleIcon>
        </div>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" className={classes.plusButton}>
          Add account
        </Button>
      </CardActions>
    </Card>
  );
};

export default SingleCard;
