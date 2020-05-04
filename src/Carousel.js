import React from "react";

class Carousel extends React.Component {
  state = {
    photos: [],
    active: 0,
  };
  handleclicl = (event) => {
    debugger;
    this.setState({
      active: +event.target.dataset.index,
    });
  };
  static getDerivedStateFromProps({ media }) {
    let photos = ["https://placeorgi.com/600/600"];
    if (media.length) {
      photos = media.map(({ large }) => large);
    }
    return { photos };
  }

  render() {
    const { photos, active } = this.state;
    return (
      <div className="carousel">
        <img src={photos[active]} alt="animal"></img>
        <div className="carousel-smaller">
          {photos.map((photo, index) => (
            <img
              src={photo}
              onClick={this.handleclicl}
              key={photo}
              data-index={index}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;
