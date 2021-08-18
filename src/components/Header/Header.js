import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { AppBar, Theme, Toolbar, Typography } from '@material-ui/core';
import { alpha, useTheme, experimentalStyled as styled } from '@material-ui/core/styles';
import { varFadeInLeft, MotionInView } from '../animate/index';

const RootStyle = styled('div')(({ Theme }) => ({

}));

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
        padding: Theme.spacing(10),
        fontSize: '30px',
      },
    },
  }),
);

const Header = () => {
  const classes = useStyles();
  return (
    <RootStyle>
      <AppBar position="static">
        <Toolbar>
          <MotionInView variants={varFadeInLeft}>
            <Typography variant sx={{
              marginLeft: '60px',
              fontWeight: 700,
            }} className={classes.title}>
              Reviews
            </Typography>
          </MotionInView>
        </Toolbar>
      </AppBar>
    </RootStyle>
  );
}

export default Header;
