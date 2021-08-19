import React from 'react';
import { Grid, Paper, Typography } from '@material-ui/core';
import { createStyles, makeStyles, experimentalStyled as styled } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';

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
const Card = ({
  id, author, place, published_at, rating, content
}) => {
  const classes = useStyles();
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
              {author}
            </Typography>
          </RootStyle>
        </Grid>
      </Grid>
    </Paper >
  );
};

export default Card;