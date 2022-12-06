import classes from "./Newsfeed.module.scss";
import profilePic from "../../../assets/images/profileImg1.jpg";
import postPic from "../../../assets/images/post.jpg";
import { Link } from "react-router-dom";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import InfoIcon from "@mui/icons-material/Info";
import RecommendIcon from "@mui/icons-material/Recommend";
import CommentIcon from "@mui/icons-material/Comment";
import ShareIcon from "@mui/icons-material/Share";
import { useRef, useState } from "react";
import CommentSection from "./Comments/CommentSection";

const Newsfeed = (props) => {
  const [isLiked, setIsLiked] = useState(false);
  const [numberOfLikes, setNumberOfLikes] = useState(
    props.postData.numberOfLikes
  );
  const [post, setPost] = useState(props.postData);

  const commentDescription = useRef();

  const likesReactionAction = () => {
    // TODO
    setIsLiked((prevState) => {
      return !prevState;
    });

    if (isLiked) {
      setNumberOfLikes((prevState) => {
        return prevState++;
      });
    } else {
      setNumberOfLikes((prevState) => {
        return prevState--;
      });
    }
  };

  const addComment = (event) => {
    if (event.keyCode === 13) {
      const commentValue = commentDescription.current.value;

      setPost((prevState) => {
        const newComment = {
          id: "C" + prevState.comments.length,
          username: "Socaciu Vlad",
          date: "10/10/2022",
          comment: commentValue,
        };
        return {
          ...prevState,
          comments: [newComment, ...prevState.comments],
        };
      });

      commentDescription.current.value = "";
    }
  };

  return (
    <div className={classes.mainContent}>
      <article className={classes.post}>
        <div className={classes.postHeader}>
          <div className={classes.profileUserInfo}>
            <Link to="/">
              <img src={profilePic} alt="" className={classes.profileImage} />
            </Link>
            <div className={classes.profileName}>
              <span>{post.username}</span>
              <span className={classes.postInfoDate}>{post.postDate}</span>
            </div>
          </div>

          <Link to="/" className={classes.profileOptions}>
            <MoreHorizIcon></MoreHorizIcon>
          </Link>
        </div>

        <div className={classes.content}>
          <div className={classes.imgWrapper}>
            <img src={postPic} alt="post img" className={classes.imgContent} />
            <div className={classes.infoIcon}>
              <InfoIcon></InfoIcon>
            </div>
          </div>

          <strong className={classes.postTitle}>Title</strong>
          <p className={classes.postDescription}>{post.text}</p>
        </div>

        <div className={classes.reacts}>
          <div className={classes.likesNumber}>
            <RecommendIcon></RecommendIcon>
            <span className={classes.reactsCount}>{numberOfLikes} likes</span>
          </div>
          <div className={classes.commentsNumber}>
            <CommentIcon></CommentIcon>
            <span className={classes.reactsCount}>
              {post.numberOfComments} comments
            </span>
          </div>
        </div>
        <hr />
        <div className={classes.reactsActions}>
          <ul className={classes.actions}>
            <li
              className={`${classes.reaction} ${isLiked ? classes.blue : null}`}
              onClick={likesReactionAction}
            >
              <RecommendIcon></RecommendIcon>
              <span>Like</span>
            </li>
            <li className={classes.reaction}>
              <CommentIcon></CommentIcon>
              <span>Comment</span>
            </li>
            <li className={classes.reaction}>
              <ShareIcon></ShareIcon>
              <span>Share</span>
            </li>
          </ul>
        </div>

        <div className={classes.commentBoxContainer}>
          <div className={classes.insertCommentField}>
            <input
              type="text"
              placeholder="Introduceti comentariul aici"
              ref={commentDescription}
              onKeyUp={addComment}
            ></input>
          </div>
          {post.comments.map((comment) => {
            return (
              <CommentSection
                key={comment.id}
                commentData={comment}
              ></CommentSection>
            );
          })}
        </div>
      </article>
    </div>
  );
};

export default Newsfeed;
