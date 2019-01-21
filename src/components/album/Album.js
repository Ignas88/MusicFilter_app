import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    minWidth: 275,
    margin: '0 10px'
  },
  content: {
    paddingTop: 24,
    display: 'flex',
    justifyContent: 'space-between'
  }
};

class Album extends Component {

  render() {
    const { classes, title, price } = this.props;

    return (
      <React.Fragment>
        <Grid item xs={12}>
          <Card className={classes.card}>
            <CardContent className={classes.content}>
              <Typography component="p">
                {title}
              </Typography>
              <Typography component="p">
                {price}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </React.Fragment>
    );
  }
}

Album.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired
};

export default withStyles(styles)(Album);