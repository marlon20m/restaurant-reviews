import React from 'react';
import { Link } from "react-router-dom";
import { experimentalStyled as styled } from '@material-ui/core/styles';
import { Grid, Container } from '@material-ui/core';
import { varFadeInUp, MotionInView } from '../components/Animate/index';
import Card from '../components/Card/Card';
import REVIEW_DATA from '../data/reviews.json'

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  textAlign: 'left',
  padding: theme.spacing(10, 10),
  backgroundSize: 'contain',
  height: 1000,
  backgroundColor: '#8D95A3',
  [theme.breakpoints.up('md')]: {
    textAlign: 'left',
    padding: 0,
    overflow: 'hidden',
  },
}));

// ----------------------------------------------------------------------

const List = () => {

  return (
    <RootStyle>
      <Container maxWidth='xl' sx={{ position: 'relative', height: '100%', width: '97%' }}>
        <MotionInView variants={varFadeInUp}>
          <Grid container>
            {REVIEW_DATA.map(reviewCard => (<Grid item xs={12} sm={12} md={6} lg={4} key={reviewCard.id} sx={{ padding: '38px 76px 86px' }}>
              <Link to={`/detail/${reviewCard.id}`} style={{ textDecoration: 'none' }}>
                <Card reviewData={reviewCard} /></Link>
            </Grid>))}
          </Grid>
        </MotionInView>
      </Container>
    </RootStyle>
  );
}

export default List;