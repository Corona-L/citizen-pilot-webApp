import React, { useState } from 'react';
import './report.css';
// import { report } from '../../../../types';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Modal from 'react-modal';
import MapContainer from './MapContainer';
import ClearIcon from '@material-ui/icons/Clear';
import IconButton from '@material-ui/core/IconButton';
import useClipboard from 'react-use-clipboard';

type report = {
  category: string;
  createdAt: string;
  description: string;
  id: number;
  image: string;
  latitude: number;
  longitude: number;
  updatedAt: string;
  urgency: boolean;
  user: {
    createdAt: string;
    email: string;
    favourites: null;
    fname: string;
    id: number;
    lname: string;
    updatedAt: string;
    voted: null;
  };
};

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
  const [isCopied, setCopied] = useClipboard(report.user.email);
  const classes = useStyles();
  const [isModalOpen, setIsOpenModal] = useState(false);

  return (
    <div className="report-box">
      <div className="description-box">
        <div className="name-text">
          {report.user.fname} {report.user.lname}
        </div>
        <div className="description-text">
          {report.description.slice(0, 40)}...
        </div>
      </div>
      <div className="urgent-box">
        {report.urgency ? (
          <div className="urgentCircle" />
        ) : (
          <div className="notUrgentIcon" />
        )}
      </div>
      <div className="category-text">{report.category.toUpperCase()}</div>
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
            {report.category.charAt(0).toUpperCase() + report.category.slice(1)}
          </div>
          <IconButton
            className="clear-icon"
            onClick={() => setIsOpenModal(false)}
          >
            <ClearIcon />
          </IconButton>
        </div>
        <div className="description">
          {report.description}
        </div>
        <div className="map-container">
          <MapContainer
            latitude={report.latitude}
            longitude={report.longitude}
          />
        </div>
        <div className="picture-and-text">
          <div className="text-modal">
            <div className="first-last-name">
              Submitted by:
               {report.user.fname} {report.user.lname}
            </div>
            <div className="first-last-name" onClick={setCopied}>{report.user.email}</div>
          </div>
          <div>
            <img
              src={report.image}
              className="report-Image"
              alt="ReportImage"
            />
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Report;
