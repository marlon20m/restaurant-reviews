import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import createStyles from '@material-ui/styles/createStyles';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { varFadeInLeft, MotionInView } from '../Animate/index';

// ----------------------------------------------------------------------

const useStyles = makeStyles((Theme) =>
  createStyles({
    title: {
      [Theme.breakpoints.between('xs', 'sm')]: {
        padding: Theme.spacing(1),
        fontSize: '22px',
      },
      [Theme.breakpoints.between('sm', 'md')]: {
        padding: Theme.spacing(3),
        fontSize: '24px',
      },
      [Theme.breakpoints.between('md', 'lg')]: {
        padding: Theme.spacing(5),
        fontSize: '26px',
      },
      [Theme.breakpoints.between('lg', 'xl')]: {
        padding: Theme.spacing(7),
        fontSize: '28px',
      },
      [Theme.breakpoints.up('xl')]: {
        padding: Theme.spacing(9),
        fontSize: '30px',
      },
    },
  }),
);

// ----------------------------------------------------------------------

const Header = () => {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar>
        <MotionInView variants={varFadeInLeft}>
          <Typography variant='' sx={{
            marginLeft: '60px',
            fontWeight: 700,
          }} className={classes.title}>
            Reviews
          </Typography>
        </MotionInView>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
