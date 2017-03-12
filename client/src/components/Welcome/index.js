import React, { Component, PropTypes } from 'react';
import ImageGallery from 'react-image-gallery';

import "react-image-gallery/styles/css/image-gallery.css";

class Welcome extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  };


  handleImageLoad(event) {
    console.log('Image loaded ', event.target)
  }


  render() {
    // const images = [
    //   {
    //     original: 'http://lorempixel.com/1000/600/nature/1/',
    //     thumbnail: 'http://lorempixel.com/250/150/nature/1/',
    //   },
    //   {
    //     original: 'http://lorempixel.com/1000/600/nature/2/',
    //     thumbnail: 'http://lorempixel.com/250/150/nature/2/'
    //   },
    //   {
    //     original: 'http://lorempixel.com/1000/600/nature/3/',
    //     thumbnail: 'http://lorempixel.com/250/150/nature/3/'
    //   }
    // ];
    const { images } = this.props;

    return (
      <div className="welcome">
        {/* <img src={require('../../../images/welcome_img.png')} alt="消化内镜" /> */}
        <ImageGallery
          autoPlay={true}
          showPlayButton={false}
          showFullscreenButton={false}
          showThumbnails={false}
          showNav={false}
          items={images}
          slideInterval={5000}
          onImageLoad={this.handleImageLoad}/>
      </div>
    );
  }
}

export default Welcome;
