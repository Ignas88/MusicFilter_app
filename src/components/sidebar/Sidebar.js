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
  state = {
    priceFormData: {
      A: {
        label: '0 - 5',
        checked: true
      },
      B: {
        label: '5 - 10',
        checked: true
      },
      C: {
        label: '10 - 15',
        checked: true
      },
      D: {
        label: '15 - 20',
        checked: true
      }
    },
    yearFormData: {
      E: {
        label: '2000',
        checked: true
      },
      F: {
        label: '2015',
        checked: true
      },
      G: {
        label: '2017',
        checked: true
      },
      H: {
        label: '2018',
        checked: true
      }
    }
  };

  handleChange = key => event => {
    key.checked = event.target.checked;
    this.setState({[key]: key.checked });
    // console.log(key);
  };

  render() {
    const { classes } = this.props;
    const { priceFormData, yearFormData } = this.state;

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
              {Object.keys(priceFormData).map(key => (
                <Form
                  key={priceFormData[key].label}
                  checked={priceFormData[key].checked}
                  label={priceFormData[key].label}
                  onChange={this.handleChange(priceFormData[key])}
                />
              ))}
            </Paper>
            <Paper className={classes.paper} elevation={1}>
              <Typography variant="subtitle2">by Year:</Typography>
              {Object.keys(yearFormData).map(key => (
                <Form
                  key={yearFormData[key].label}
                  checked={yearFormData[key].checked}
                  label={yearFormData[key].label}
                  onChange={this.handleChange(yearFormData[key])}
                />
              ))}
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