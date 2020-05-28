import React from 'react';
import theta_tau from "../../assets/ThetaTau.png";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  root: {
    display: 'block',
    width: '15vw',
    transitionDuration: '0.3s',
    height: '15vw',
    margin: '1vw'
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
}));

export default function RecipeReviewCard() {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={theta_tau}
        title="theta tau"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          Member
        </Typography>
      </CardContent>
    </Card>
  );
}
