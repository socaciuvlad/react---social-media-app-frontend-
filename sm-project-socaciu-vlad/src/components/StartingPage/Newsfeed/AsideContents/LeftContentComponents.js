import classes from "./LeftContent.module.scss";

const LeftContentComponents = (props) => {
  const showProfile = () => {
    if (props.leftData.id !== 0) {
      return;
    } else {
      props.setProfile(true);
    }
  };

  return (
    <div className={classes.linksLeft} onClick={showProfile}>
      <img
        src={props.leftData.src}
        alt="no profile image"
        className={classes.leftContentImages}
      />
      <span>{props.leftData.description}</span>
    </div>
  );
};

export default LeftContentComponents;
