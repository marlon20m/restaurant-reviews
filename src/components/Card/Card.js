import React from 'react';
import moment from 'moment';
import { Grid, Paper, Typography, Rating } from '@material-ui/core';
import { makeStyles, experimentalStyled as styled } from '@material-ui/core/styles';
import createStyles from '@material-ui/styles/createStyles';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  marginTop: '40px',
  padding: '1px',
  display: 'flex',
  justifyContent: 'space-between'
}));

const useStyles = makeStyles((Theme) =>
  createStyles({
    paper: {
      textAlign: 'left',
      height: '100%',
      borderRadius: '25px',
    },
    gridContainer: {
      display: 'flex',
      alignItems: 'center',
      height: '100%',
    },
  }),
);

// ----------------------------------------------------------------------

const Card = ({ reviewData }) => {

  const classes = useStyles();

  const { author, place, published_at, rating, content } = reviewData

  let date = moment(published_at, 'ddd MMM DD YYYY HH:mm:ss zz-ZZ zz').format('MM/DD/YYYY')

  return (
    <Paper className={classes.paper} elevation={4} sx={{ padding: '10px 10px' }} >
      <Grid container className={classes.gridContainer}>
        <Grid item xs={9}>
          <Typography variant='h6' sx={{ fontWeight: 'bold' }}>
            {place}
          </Typography>
          <Typography variant='h5'>
            <Rating name='read-only-rating' value={rating} readOnly />
          </Typography>
          <br />
          <Typography noWrap variant='subtitle1'>
            {content}
          </Typography>
          <br />
          <br />
          <br />
          <br />
          <RootStyle>
            <Typography variant='subtitle2' >
              {author}
            </Typography>
            <Typography variant='subtitle2' >
              {date}
            </Typography>
          </RootStyle>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Card;