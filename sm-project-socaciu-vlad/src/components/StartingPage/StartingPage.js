import LeftContent from "./Newsfeed/AsideContents/LeftContent";
import RightContent from "./Newsfeed/AsideContents/RightContent";
import Newsfeed from "./Newsfeed/Newsfeed";
import classes from "./StartingPage.module.scss";
import { useState } from "react";
import ShowProfile from "./Newsfeed/ShowProfile";

const POST_DATA = [
  {
    id: 0,
    username: "Vlad 1",
    postDate: "03/10/2022",
    numberOfLikes: 45,
    numberOfComments: 12,
    profileImg: "../../../assets/images/profileImg1.jpg",
    text: "This is my new dynamic post",
    comments: [
      {
        id: "C1",
        username: "Socaciu Vlad",
        date: "03/10/2022",
        comment: "This is my first dynamic content ",
      },
      {
        id: "C2",
        username: "Socaciu Vlad",
        date: "03/10/2022",
        comment: "This is my second dynamic content",
      },
    ],
  },
  {
    id: 1,
    username: "Vlad 2",
    postDate: "03/10/2022",
    numberOfLikes: 5,
    numberOfComments: 2,
    profileImg: "../../../assets/images/profileImg2.jpg",
    text: "This is my second dynamic post",
    comments: [
      {
        id: "C3",
        username: "Socaciu Vlad",
        date: "03/10/2022",
        comment: "This is my third dynamic content",
      },
      {
        id: "C4",
        username: "Socaciu Vlad",
        date: "03/10/2022",
        comment: "This is my fourth dynamic content",
      },
    ],
  },
];

const StartingPage = () => {
  const [showProfile, setShowProfile] = useState(false);

  return (
    <div className={classes.mainContainer}>
      <div className={classes.leftContent}>
        <LeftContent setProfile={setShowProfile}></LeftContent>
      </div>
      {!showProfile && (
        <div className={classes.newsfeed}>
          {POST_DATA.map((post) => {
            return <Newsfeed postData={post} key={post.id}></Newsfeed>;
          })}
        </div>
      )}

      {showProfile && <ShowProfile></ShowProfile>}

      <div className={classes.rightContent}>
        <RightContent></RightContent>
      </div>
    </div>
  );
};

export default StartingPage;
