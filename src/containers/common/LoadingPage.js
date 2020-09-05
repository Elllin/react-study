import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

function LoadingPage() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CircularProgress size={200} />
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100vw',
    height: '100vh',

    /* ie를 제외한 최신 웹브라우저*/
    background: 'none rgba(0, 0, 0, 0.5)',

    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
  },
}));

export default LoadingPage;
