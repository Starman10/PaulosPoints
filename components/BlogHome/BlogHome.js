import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import BlogSummaryCard from './BlogSummaryCard.js';

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(15),
    marginBottom: theme.spacing(15),
  },
  title: {
    marginBottom: theme.spacing(4),
  },
  bodyTextContainer: {
    textAlign: 'left'
  },
  blogGrid: {
    marginTop: theme.spacing(8),
  }
}));

const blogSummaryContent = [
  {
    title: "How Camaraderie Changed my Life and How You Can Change Lives Too",
    author: "Jackson Beard",
    date: "May 8, 2020",
    summary: 
      <>
        <p>
        Hello There,
        </p>
        <p>
        I do not normally post on LinkedIn, but this is an exception. Paulo was an exception too. This is a story about Paulo Claudio, a longtime friend who inspired countless people in pursuit of his dreams of flight.
        </p>
      </>,
    link: "/blog/HowCamaraderieChangedMyLife",
    authorIcon: "/cardProfileImgs/jacksonProfile.jpg",
  },
  {
    title: "Paulo Claudio\'s impact and inspiration to myself, and many others",
    author: "Ian Stone",
    date: "May 15, 2020",
    summary: 
      <p>
      I wasn’t quite sure how to start my story of Paulo. Considering how many friends and memories he’s made at Pulaski Academy and OSU, it’s hard to limit the number of stories and memories you want to share. I think for now, I’d like to share my personal experiences from when I had first met Paulo and how he’s influenced my life.
      </p>
    ,
    link: "/blog/PauloClaudiosImpactAndInspiration",
    authorIcon: "/cardProfileImgs/ianProfile.jpg",
  },
  {
    title: "High-Flying Inspiration",
    author: "Ashraf Moursi",
    date: "June 13, 2020",
    summary: 
      <p>It really is such a strange feeling, even a year to this day after saying goodbye to such a close friend, to be writing something like this. However, in a way, I am finding that it is not difficult for me to put on paper the great memories I have of Paulo. This is because of how strong they are and how important they are personally to me and my life.</p>
    ,
    link: "/blog/HighFlyingInspiration",
    authorIcon: "/cardProfileImgs/ashrafProfile.jpg",
  },
];

export default function BlogHome(props) {
  const classes = useStyles();
  const { content } = props;

  return (
    <Container maxWidth="md" className={classes.container}>
      <Typography variant="h3" id="Blog" className={classes.title}>Blog</Typography>
      <Grid container direction="row" justify="space-evenly" spacing={10} className={classes.blogGrid}>
        <Grid item xs={12} sm={4}>
          <BlogSummaryCard content={blogSummaryContent[2]}/>
        </Grid>
        <Grid item xs={12} sm={4}>
          <BlogSummaryCard content={blogSummaryContent[1]}/>
        </Grid>
        <Grid item xs={12} sm={4}>
          <BlogSummaryCard content={blogSummaryContent[0]}/>
        </Grid>
      </Grid>
    </Container>
  );
}