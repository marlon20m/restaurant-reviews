import React from 'react';
import { createStyles, makeStyles } from '@material-ui/styles';
import { AppBar, Theme, Toolbar, Typography } from '@material-ui/core';
import { alpha, useTheme, experimentalStyled as styled } from '@material-ui/core/styles';

const RootStyle = styled('div')(({ theme }) => ({
  backgroundColor: '#ffffff',
}));

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      fontSize: '20px',
    },
  }),
);

const Header = () => {
  const classes = useStyles();
  return (
    <RootStyle>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h5" style={{
            fontWeight: 700, marginLeft: '105px',
          }}>
            Reviews
          </Typography>
        </Toolbar>
      </AppBar>
    </RootStyle>
  );
}

export default Header;
