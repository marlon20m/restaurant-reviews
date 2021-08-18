import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { alpha, useTheme, experimentalStyled as styled } from '@material-ui/core/styles';

const RootStyle = styled('div')(({ theme }) => ({
  flexGrow: 100,
}));

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 40,
  },
}));

const Header = () => {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <RootStyle>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Reviews
          </Typography>
        </Toolbar>
      </AppBar>
    </RootStyle>
  );
}

export default Header;
