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
    const { filterAlbums, formData } = this.props;
    key.checked = event.target.checked;
    this.setState({[key]: key.checked });

    let yearFilter = Object.keys(formData.yearFormData).reduce((array, key) =>{
      if(formData.yearFormData[key].checked){
        array.push(formData.yearFormData[key].year);
      }
      return array;
    }, []);

    let priceFilter = Object.keys(formData.priceFormData).reduce((array, key) =>{
      if(formData.priceFormData[key].checked){
        array.push({min: formData.priceFormData[key].min, max: formData.priceFormData[key].max });
      }
      return array;
    }, []);

    filterAlbums({
      price: priceFilter,
      year: yearFilter
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
                  key={formData.priceFormData[key].min}
                  checked={formData.priceFormData[key].checked}
                  label={`${formData.priceFormData[key].min} - ${formData.priceFormData[key].max} (10)`}
                  onChange={this.handleChange(formData.priceFormData[key])}
                />
              ))}
            </Paper>
            <Paper className={classes.paper} elevation={1}>
              <Typography variant="subtitle2">by Year:</Typography>
              {Object.keys(formData.yearFormData).map(key => (
                <Form
                  key={formData.yearFormData[key].year}
                  checked={formData.yearFormData[key].checked}
                  label={formData.yearFormData[key].year}
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
  formData: PropTypes.object.isRequired,
  getFormData: PropTypes.func.isRequired,
  filterAlbums: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  formData: state.formData.formData
});

export default connect(mapStateToProps, {getFormData, filterAlbums})(withStyles(styles)(Sidebar));