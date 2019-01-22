import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Form from './Form';

const drawerWidth = 300;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  paper: {
    margin: 20,
    padding: '20px 25px 13px 25px'
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  toolbar: theme.mixins.toolbar,
  sideHeader: {
    height: 65,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

class Sidebar extends Component {
  render() {
    const {classes} = this.props;

    return (
      <div className={classes.root}>
        <Drawer
          className={classes.drawer}
          variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
          anchor="left"
        >
          <div className={classes.toolbar}>
            <div className={classes.sideHeader}>
              <Typography variant="h4" color="textSecondary">Filter</Typography>
            </div>
            <Divider />
            <Paper className={classes.paper} elevation={1}>
              <Typography variant="subtitle2">by Price:</Typography>
              <Form />
            </Paper>
            <Paper className={classes.paper} elevation={1}>
              <Typography variant="subtitle2">by Year:</Typography>
              <Form />
            </Paper>
          </div>
        </Drawer>
      </div>
    );
  }
}

Sidebar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Sidebar);