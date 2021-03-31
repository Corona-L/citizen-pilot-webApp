import React, { useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardHeader,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import AddContactModal from './AddContactModal';

const contacts = [
  {
    id: '1',
    title: 'Administrative Services',
    email: 'help@cityhall.com',
    phone: '01540205777',
  },
  {
    id: '2',
    title: 'Police and Crime',
    email: 'police-and-crime@cityhall.com',
    phone: '0154020463',
  },
  {
    id: '3',
    title: 'Fire Department',
    email: 'firefighters@cityhall.com',
    phone: '0154020000',
  },
  {
    id: '4',
    title: 'Parks and Forestry Division',
    email: 'parks@cityhall.com',
    phone: '0154020476',
  },
  {
    id: '5',
    title: 'Building Department',
    email: 'buildingdepartment@cityhall.com',
    phone: '01540201234',
  },
];

const useStyles = makeStyles((theme) => ({
  list: {
    width: 300,
    height: 370,
    overflowY: 'scroll',
  },
  button: {
    padding: 0,
    width: 50,
  },
  headerDiv: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    background:
      'linear-gradient(90deg, rgba(91,164,252,1) 0%, rgba(58,66,118,1) 100%)',
  },
  titleDescription: {
    color: 'white',
  },
}));

export default function ProposalCard() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Card className={classes.list}>
      <div className={classes.headerDiv}>
        <CardHeader
          subtitle={`${contacts.length} in total`}
          title="Contacts"
          className={classes.titleDescription}
        />
        <AddContactModal />
      </div>
      <Divider />
      <List className={classes.list}>
        {contacts.map((contact, i) => (
          <ListItem divider={i < contacts.length - 1} key={contact.id}>
            <ListItemText
              primary={contact.title}
              secondary={`Phone: ${contact.phone}`}
            />
            <IconButton
              onClick={handleClick}
              edge="end"
              size="small"
              className={classes.button}
            >
              <MoreVertIcon />
            </IconButton>
            <Menu
              id="choices"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>View Details</MenuItem>
              <MenuItem onClick={handleClose}>Edit</MenuItem>
              <MenuItem onClick={handleClose}>Delete</MenuItem>
            </Menu>
          </ListItem>
        ))}
      </List>
      <Divider />
      <Box
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
        }}
      >
        <Button
          color="primary"
          endIcon={<ArrowRightIcon />}
          size="small"
          variant="text"
        >
          View all
        </Button>
      </Box>
    </Card>
  );
}
