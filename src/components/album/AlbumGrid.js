import React, {Component} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Album from './Album';
import Grid from '@material-ui/core/Grid';
import {getAlbums} from "../../actions/albumActions";

class AlbumGrid extends Component {
  componentDidMount() {
    this.props.getAlbums();
  }

  render() {
    // console.log(this.props);
    const { feed } = this.props.albums;

    return (
      <React.Fragment>
        <Grid container spacing={24}>
          {feed && feed.entry.map(album => (
            <Album
              key={album.id.attributes['im:id']}
              title={album.title.label}
              price={parseFloat(album['im:price'].attributes.amount).toFixed(2)}
              image={album['im:image'][0].label}
              releaseDate={album['im:releaseDate'].attributes.label}
            />
          ))}
        </Grid>
      </React.Fragment>
    );
  }
}

AlbumGrid.propTypes = {
  albums: PropTypes.object.isRequired,
  getAlbums: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  albums: state.album.albums
});

export default connect(mapStateToProps, {getAlbums})(AlbumGrid);