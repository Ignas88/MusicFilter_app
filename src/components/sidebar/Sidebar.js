import React, {Component} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Form from './Form';
import {getFormData} from "../../actions/formActions";
import {filterAlbums} from "../../actions/albumActions";

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

  componentDidMount() {
    this.props.getFormData();
  }

  handleChange = key => event => {
    key.checked = event.target.checked;
    this.setState({[key]: key.checked });
    console.log(key);
    this.props.filterAlbums({
      price: {
        min: 0,
        max:15
      },
      year: [2000,2005]
    });
  };

  render() {
    const { classes, formData } = this.props;

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
              {Object.keys(formData.priceFormData).map(key => (
                <Form
                  key={formData.priceFormData[key].label}
                  checked={formData.priceFormData[key].checked}
                  label={formData.priceFormData[key].label}
                  onChange={this.handleChange(formData.priceFormData[key])}
                />
              ))}
            </Paper>
            <Paper className={classes.paper} elevation={1}>
              <Typography variant="subtitle2">by Year:</Typography>
              {Object.keys(formData.yearFormData).map(key => (
                <Form
                  key={formData.yearFormData[key].label}
                  checked={formData.yearFormData[key].checked}
                  label={formData.yearFormData[key].label}
                  onChange={this.handleChange(formData.yearFormData[key])}
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
  getFormData: PropTypes.func.isRequired,
  formData: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  formData: state.formData.formData
});

export default connect(mapStateToProps, {getFormData, filterAlbums})(withStyles(styles)(Sidebar));