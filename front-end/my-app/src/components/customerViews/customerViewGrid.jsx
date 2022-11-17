import React from 'react';
import { useNavigate } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link'
import Container from '@material-ui/core/Container';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import ListAltIcon from '@mui/icons-material/ListAlt';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(12, 4),
  },
  card: {
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    border: '1px solid black',
    borderRadius: '5px',
    textAlign: 'center',
    zindex: '-1'
  },
  icon: {
    padding: theme.spacing(2, 0),
  },
  title: {
    padding: theme.spacing(2),
  },
  featureList: {
    padding: theme.spacing(2),
  },
}));


const Features = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const handleRouting = (route) => {
    if (route == 1) {
      navigate('/customerView/createOrderForm')
    }
    else if (route == 2) {
      navigate("/customerView/viewOrderForm")
    }
    else {
      navigate("/customerView/pastOrder")
    }
  }
  return (
    <Container component="section" maxWidth="lg" className={classes.root}>
      <Grid container spacing={3} alignItems="stretch">
        <Grid item xs={12} sm={4}>
          <div className={classes.card} style={{ color: "white" }}>
            <LocalShippingIcon
              color="primary"
              fontSize="large"
              className={classes.icon}
              sx={{ height: "100px", width: "100px", color: "black" }}
            />
            <Link variant="h5" component="h3" className={classes.title} onClick={() => handleRouting(1)}>
              Create Shipping Orders
            </Link>
            <Typography className={classes.featureList} variant="h6">
              Ship anything!! anywhere!!
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12} sm={4}>
          <div className={classes.card} style={{ color: "white" }} >
            <ListAltIcon
              color="primary"
              fontSize="large"
              className={classes.icon}
              sx={{ height: "100px", width: "100px", color: "black" }}
            />
            <Link variant="h5" component="h3" className={classes.title} onClick={() => handleRouting(2)}>
              View Orders In Progress
            </Link>
            <Typography className={classes.featureList} variant="h6">
              Edit or Cancel un-delivered orders
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12} sm={4}>
          <div className={classes.card} style={{ color: "white" }} >
            <WorkHistoryIcon
              color="primary"
              fontSize="large"
              className={classes.icon}
              sx={{ height: "100px", width: "100px", color: "black" }}
            />
            <Link variant="h5" component="h3" className={classes.title} onClick={() => handleRouting(3)}  >
              View past Orders
            </Link>
            <Typography variant="h6" className={classes.featureList}>
              Your History at your fingertips
            </Typography>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Features;

