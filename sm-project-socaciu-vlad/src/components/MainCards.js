import SingleCard from "./SingleCard";
import classes from "./AuthForm.module.scss";

const MainCards = () => {
  const users = [
    {
      id: 0,
      name: "Vlad",
      authPic: require("../assets/images/authImg.jpg"),
    },
  ];

  return (
    <div className={classes.cardContainer}>
      {users.map((user) => {
        return <SingleCard user={user} key={user.id} />;
      })}
      <SingleCard></SingleCard>
    </div>
  );
};

export default MainCards;
