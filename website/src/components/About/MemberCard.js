import React from 'react';

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import linkedin_logo from "../../assets/linkedin.png";

const useStyles = makeStyles(theme => ({
  root: {
    display: 'block',
    width: '12vw',
    transitionDuration: '0.3s',
    height: '27vw',
    margin: '1vw',

  },
  media: {
    height: 0,
    paddingTop: "160%" // 16:9
  },
}));

export default function MemberCard(props) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={props.image}
        title="team member photo"
      />
      <CardContent>
        <Typography variant="body1" color="textSecondary" component="p">
          {props.name}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.role}
        </Typography>
        <div class='logo'>
          <a href={props.linkedin}>
            <img src={linkedin_logo} alt='linkedin-logo' />
          </a>
        </div>
      </CardContent>
    </Card>
  );
}
