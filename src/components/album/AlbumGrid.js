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
    console.log(this.props);
    const { albums } = this.props;

    return (
      <React.Fragment>
        <Grid container spacing={24}>
          {albums.feed && albums.feed.entry.map(album => (
            <Album
              key={album.title}
              title={album.name.label}
              price={album.price.amount}
            />
          ))}
        </Grid>
      </React.Fragment>
    );
  }
}

AlbumGrid.propTypes = {
  albums: PropTypes.array.isRequired,
  getAlbums: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  albums: state.album.albums
});

export default connect(mapStateToProps, {getAlbums})(AlbumGrid);