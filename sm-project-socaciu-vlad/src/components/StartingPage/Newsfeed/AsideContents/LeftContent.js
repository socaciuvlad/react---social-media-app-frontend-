import classes from "./LeftContent.module.scss";
import LeftContentComponents from "./LeftContentComponents";

const LEFT_COMPONENT_DATA = [
  {
    id: 0,
    src: require("../../../../assets/images/authImg.jpg"),
    description: "Vlad Catalin Socaciu",
  },

  {
    id: 1,
    src: require("../../../../assets/images/users.png"),
    description: "Friends",
  },

  {
    id: 2,
    src: require("../../../../assets/images/events.png"),
    description: "Events",
  },

  {
    id: 3,
    src: require("../../../../assets/images/groups.png"),
    description: "Groups",
  },

  {
    id: 4,
    src: require("../../../../assets/images/marketplace.png"),
    description: "Marketplace",
  },

  {
    id: 5,
    src: require("../../../../assets/images/watch.png"),
    description: "History",
  },

  {
    id: 6,
    src: require("../../../../assets/images/memories.png"),
    description: "Memories",
  },

  {
    id: 7,
    src: require("../../../../assets/images/saved.png"),
    description: "Saved",
  },

  {
    id: 8,
    src: require("../../../../assets/images/pages.png"),
    description: "Pages",
  },

  {
    id: 9,
    src: require("../../../../assets/images/recent.png"),
    description: "Recent",
  },
];

const LeftContent = (props) => {
  return (
    <aside className={classes.leftContent}>
      <div className={classes.leftContainer}>
        {LEFT_COMPONENT_DATA.map((data) => {
          return (
            <LeftContentComponents
              leftData={data}
              key={data.id}
              setProfile={data.id === 0 ? props.setProfile : null}
            ></LeftContentComponents>
          );
        })}
      </div>
    </aside>
  );
};

export default LeftContent;
