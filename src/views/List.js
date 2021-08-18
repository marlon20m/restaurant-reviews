import React from 'react';
import { createStyles, makeStyles, experimentalStyled as styled } from '@material-ui/core/styles';
import { Box, Grid, Container, Typography } from '@material-ui/core';
import { varFadeInUp, MotionInView } from '../components/animate/index';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  textAlign: 'center',
  padding: theme.spacing(10, 10),
  backgroundSize: 'contain',
  backgroundColor: '#8D95A3',
  [theme.breakpoints.up('md')]: {
    textAlign: 'left',
    padding: 0,
    height: 1820,
    overflow: 'hidden',
  },
}));

const useStyles = makeStyles((Theme) =>
  createStyles({
    title: {
      fontSize: '80px',
      [Theme.breakpoints.between(0, 320)]: {
        fontSize: '27px',
      },
      [Theme.breakpoints.between(321, 480)]: {
        fontSize: '32px',
      },
      [Theme.breakpoints.between(480, 601)]: {
        fontSize: '40px',
      },
      [Theme.breakpoints.between(601, 654)]: {
        fontSize: '55px',
      },
      [Theme.breakpoints.between(654, 961)]: {
        fontSize: '60px',
      },
      [Theme.breakpoints.between(961, 1194)]: {
        fontSize: '62px',
      },
      fontWeight: 1000,
    },
  }),
);

// ----------------------------------------------------------------------


const List = () => {
  const classes = useStyles();

  return (
    <RootStyle>
      <Container maxWidth='lg' sx={{ position: 'relative', height: '100%', width: '90%' }}>
        <Grid container alignItems='center' justifyContent={{ xs: 'center', md: 'space-between' }} sx={{ height: '100%' }}>
          <Box>
            <MotionInView variants={varFadeInUp}>
            </MotionInView>
          </Box>
        </Grid>
      </Container>
    </RootStyle>
  );
}

export default List;