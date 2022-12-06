import { useState } from "react";

import classes from "./RightContent.module.scss";

import VideoCallIcon from "@mui/icons-material/VideoCall";
import SearchIcon from "@mui/icons-material/Search";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Modal from "../Modal";

const RIGHT_COMPONENT_DATA = [
  {
    id: 0,
    src: require("../../../../assets/images/profile2.jpg"),
    description: "Friend 1",
  },

  {
    id: 1,
    src: require("../../../../assets/images/profile2.jpg"),
    description: "Friend 2",
  },

  {
    id: 2,
    src: require("../../../../assets/images/profile2.jpg"),
    description: "Friend 3",
  },

  {
    id: 3,
    src: require("../../../../assets/images/profile2.jpg"),
    description: "Friend 4",
  },

  {
    id: 4,
    src: require("../../../../assets/images/profile2.jpg"),
    description: "Friend 5",
  },

  {
    id: 5,
    src: require("../../../../assets/images/profile2.jpg"),
    description: "Friend 6",
  },

  {
    id: 6,
    src: require("../../../../assets/images/profile2.jpg"),
    description: "Friend 7",
  },

  {
    id: 7,
    src: require("../../../../assets/images/profile2.jpg"),
    description: "Friend 8",
  },

  {
    id: 8,
    src: require("../../../../assets/images/profile2.jpg"),
    description: "Friend 9",
  },

  {
    id: 9,
    src: require("../../../../assets/images/profile2.jpg"),
    description: "Friend 10",
  },

  {
    id: 10,
    src: require("../../../../assets/images/profile2.jpg"),
    description: "Friend 11",
  },

  {
    id: 11,
    src: require("../../../../assets/images/profile2.jpg"),
    description: "Friend 12",
  },

  {
    id: 12,
    src: require("../../../../assets/images/profile2.jpg"),
    description: "Friend 13",
  },

  {
    id: 13,
    src: require("../../../../assets/images/profile2.jpg"),
    description: "Friend 14",
  },

  {
    id: 14,
    src: require("../../../../assets/images/profile2.jpg"),
    description: "Friend 15",
  },

  {
    id: 15,
    src: require("../../../../assets/images/profile2.jpg"),
    description: "Friend 16",
  },

  {
    id: 16,
    src: require("../../../../assets/images/profile2.jpg"),
    description: "Friend 17",
  },

  {
    id: 17,
    src: require("../../../../assets/images/profile2.jpg"),
    description: "Friend 18",
  },

  {
    id: 18,
    src: require("../../../../assets/images/profile2.jpg"),
    description: "Friend 19",
  },
];

const RightContent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleModal = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div className={classes.rightContent}>
      <div className={classes.rightActions}>
        <p>Contacts</p>
        <div className={classes.icons}>
          <VideoCallIcon></VideoCallIcon>
          <SearchIcon></SearchIcon>
          <MoreHorizIcon onClick={handleModal}></MoreHorizIcon>
          {isOpen && <Modal closeModal={setIsOpen} />}
        </div>
      </div>
      <div className={classes.friends}>
        {RIGHT_COMPONENT_DATA.map((data) => {
          return (
            <div className={classes.friendsContainer}>
              <img src={data.src} className={classes.rightFriendsImages}></img>
              <span>{data.description}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RightContent;
