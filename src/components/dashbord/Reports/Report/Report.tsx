import React, { useState } from 'react';
import './report.css';
import { report } from '../../../../types';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Modal from 'react-modal';
import MapContainer from './MapContainer';
import ClearIcon from '@material-ui/icons/Clear';
import IconButton from '@material-ui/core/IconButton';
import useClipboard from 'react-use-clipboard';

type props = {
  report: report;
};

const useStyles = makeStyles({
  button: {
    background:
      'linear-gradient(90deg, rgba(91,164,252,1) 0%, rgba(58,66,118,1) 100%)',
    height: '25px',
    width: '32px',
    borderRadius: '15px',
    color: 'white',
    fontSize: '12px',
    boxShadow: '0 5px 10px 0 rgba(0, 0, 0, 0.2)',
  },
});

const Report: React.FC<props> = ({ report }) => {
  const {
    category,
    description,
    latitude,
    longitude,
    urgency,
    image,
    Fname,
    Lname,
    email,
  } = report;

  const [isCopied, setCopied] = useClipboard(email);
  const classes = useStyles();
  const [isModalOpen, setIsOpenModal] = useState(false);

  return (
    <div className="report-box">
      <div className="description-box">
        <div className="name-text">
          {Lname} {Fname}
        </div>
        <div className="description-text">{description}</div>
      </div>
      <div className="urgent-box">
        {urgency ? (
          <div className="urgentCircle" />
        ) : (
          <div className="notUrgentIcon" />
        )}
      </div>
      <div className="category-text">{category.toUpperCase()}</div>
      <div className="info-button-container">
        <Button
          size="small"
          className={classes.button}
          onClick={() => setIsOpenModal(true)}
        >
          More
        </Button>
      </div>
      <Modal isOpen={isModalOpen} className="reports-modal">
        <div className="category-headertext">
          <div className="catergory-text-white">
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </div>
          <IconButton
            className="clear-icon"
            onClick={() => setIsOpenModal(false)}
          >
            <ClearIcon />
          </IconButton>
        </div>
        <div className="map-container">
          <MapContainer latitude={latitude} longitude={longitude} />
        </div>
        <div className="picture-and-text">
          <div className="text-modal">
            <div className="first-last-name">
              {Fname} {Lname}
            </div>
            <div onClick={setCopied}>{email}</div>
          </div>
          <div>
            <img src={image} className="report-Image" alt="ReportImage" />
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Report;
