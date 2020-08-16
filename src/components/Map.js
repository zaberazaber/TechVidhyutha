import React, { Component } from 'react';

class Map extends Component {
    constructor(props){
      super(props)
      this.state = {
        // no state for now..
      }
      
      // Use createRef() to create a reference to the DOM node we want
      // Learn more about Refs for React here: https://reactjs.org/docs/refs-and-the-dom.html#callback-refs
      this.myMapContainer = React.createRef()
    }
  
    componentDidMount() {
      const google = window.google
      // Instead of using: document.getElementById, use the ref we created earlier to access the element
      let map = new google.maps.Map(this.myMapContainer.current, {
        center: { lat: -34.9973268, lng: -58.582614 },
        scrollwheel: false,
        zoom: 4
      });
    }
    
    render() {
      return (
        <div className="container">
          <div ref={this.myMapContainer} id="map"></div>
          <div id="text">
            <p>Google Maps now requires the use of a valid API Key.</p>
            <a href="https://developers.google.com/maps/documentation/javascript/get-api-key">Go get one!
            </a>
          </div>
        </div>
      )
    }
}
  
  export default Map;