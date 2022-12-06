import classes from "./Modal.module.scss";
import Button from "@mui/material/Button";
import PhoneCallbackIcon from "@mui/icons-material/PhoneCallback";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import ForumIcon from "@mui/icons-material/Forum";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import PanoramaFishEyeIcon from "@mui/icons-material/PanoramaFishEye";
import RateReviewIcon from "@mui/icons-material/RateReview";
import DangerousIcon from "@mui/icons-material/Dangerous";

import Switch from "@mui/material/Switch";

const label = { inputProps: { "aria-label": "Switch demo" } };

const MODAL_DATA = [
  {
    id: 0,
    icon: <PhoneCallbackIcon></PhoneCallbackIcon>,
    description: "Incoming call sounds",
    switchButton: <Switch {...label} defaultChecked />,
  },
  {
    id: 1,
    icon: <VolumeUpIcon></VolumeUpIcon>,
    description: "Message sounds",
    switchButton: <Switch {...label} defaultChecked />,
  },
  {
    id: 2,
    icon: <ForumIcon></ForumIcon>,
    description: "Pop-up new messages",
    switchButton: <Switch {...label} defaultChecked />,
  },
  {
    id: 3,
    icon: <ContactPageIcon></ContactPageIcon>,
    description: "Show contacts",
    switchButton: <Switch {...label} defaultChecked />,
  },
  {
    id: 4,
    icon: <PanoramaFishEyeIcon></PanoramaFishEyeIcon>,
    description: "Active Status: On",
  },
  {
    id: 5,
    icon: <RateReviewIcon></RateReviewIcon>,
    description: "Message delivery settings",
  },
  {
    id: 6,
    icon: <DangerousIcon></DangerousIcon>,
    description: "Block settings",
  },
];

const Modal = function (props) {
  const closeModal = () => {
    props.closeModal();
  };

  return (
    <div className={classes.modalBackground}>
      <div className={classes.modalContainer}>
        <div className={classes.closeModalX}>
          <span>Chat Settings</span>
          <Button variant="contained" onClick={closeModal} size="small">
            X
          </Button>
        </div>
        <div className={classes.modalContent}>
          {MODAL_DATA.map((data) => {
            return (
              <>
                <div className={classes.modalList}>
                  <div className={classes.modalPosition}>
                    {data.icon}
                    {data.description}
                  </div>
                  {data.switchButton}
                </div>
              </>
            );
          })}
        </div>
        <div className={classes.footer}>
          <button onClick={closeModal} className={classes.cancelButton}>
            cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
