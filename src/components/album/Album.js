import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    minWidth: 275,
    padding: 15,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  image: {
    height: 50,
    width: 50,
    borderRadius: 5,
    margin: 5
  },
  font: {
    fontWeight: 500
  }
};

class Album extends Component {

  render() {
    const { classes, title, price, image, releaseDate } = this.props;

    return (
      <React.Fragment>
        <Grid item xs={12}>
          <Card className={classes.card}>
            <CardMedia image={image} className={classes.image} />
            <div className={classes.content}>
              <Typography variant="button" className={classes.font} gutterBottom>
                {title}
              </Typography>
              <Typography variant="caption">
                {releaseDate}
              </Typography>
            </div>
            <Typography variant="h5" color="textSecondary">
              $ {price}
            </Typography>
          </Card>
        </Grid>
      </React.Fragment>
    );
  }
}

Album.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  releaseDate: PropTypes.string.isRequired
};

export default withStyles(styles)(Album);