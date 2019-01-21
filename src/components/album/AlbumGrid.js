import React, {Component} from 'react';
import Album from './Album';
import Grid from '@material-ui/core/Grid';

class AlbumGrid extends Component {
  state = {
    albums: [
      {
        title: 'rbr5tybtybntybn',
        price: '99'
      },
      {
        title: 'ttttttttttt',
        price: '22'
      },
      {
        title: 'ttt',
        price: '11'
      }
    ]
  };

  render() {
    const { albums } = this.state;

    return (
      <React.Fragment>
        <Grid container spacing={24}>
          {albums.map(album => (
            <Album
              key={album.title}
              title={album.title}
              price={album.price}
            />
          ))}
        </Grid>
      </React.Fragment>
    );
  }
}

export default AlbumGrid;