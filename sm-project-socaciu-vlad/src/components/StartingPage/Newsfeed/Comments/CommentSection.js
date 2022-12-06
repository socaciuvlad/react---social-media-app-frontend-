import classes from "./CommentSection.module.scss";
import { Link } from "react-router-dom";
import profilePic from "../../../../assets/images/profileImg1.jpg";

const CommentSection = (props) => {
  return (
    <div className={classes.comments}>
      <Link to="/">
        <div className={classes.userInfo}>
          <div className={classes.userContainer}>
            <img className={classes.profilePic} src={profilePic}></img>
            <p>{props.commentData.username}</p>
          </div>
          <p>{props.commentData.date}</p>
        </div>
      </Link>

      <div className={classes.commentInfo}>
        <p>{props.commentData.comment}</p>
      </div>
    </div>
  );
};

export default CommentSection;
