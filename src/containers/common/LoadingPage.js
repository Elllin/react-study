import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100vw',
    height: '100vh',

    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
  },
}));

function LoadingPage() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CircularProgress size={200} />
    </div>
  );
}

export default LoadingPage;
