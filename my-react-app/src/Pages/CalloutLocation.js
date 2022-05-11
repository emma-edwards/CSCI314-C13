import * as React from 'react';
 import Hook,{useState, useRef, useEffect} from 'react';
//import {Wrapper, Status} from "@googlemaps/react-wrapper";
import {Map, GoogleApiWrapper, Marker} from 'google-maps-react';
//Map CSS
const MapStyles = {
    width: '100%',
    height: '700px',
};



export class  CalloutLocation extends React.Component{
    //CONSTRUCTOR
    constructor(props) {
        super(props);
        this.state = {
            stores: [{lat: -34.405, lng: 150.878},
                {latitude: -34.405, longitude: 150.878},
                {latitude: -34.424, longitude: 150.882},
                {latitude: -34.421, longitude: 150.909}]
        }
    }

    //FUNCTIONS
    displayMarkers = () => {
        return this.state.stores.map((store, index) => {
            return <Marker key={index} id={index} position={{
                lat: store.latitude,
                lng: store.longitude
            }}
                           onClick={() => alert("You clicked a marker")}
            />
        })
    }

    //RENDER
    render() {
        return (
            <h1>Map goes here

                <Map
                    google={this.props.google}
                    zoom={13}
                    style={MapStyles}
                    initialCenter={{lat: -34.405, lng: 150.878}}
                >
                    {this.displayMarkers()}
                </Map>

            </h1>
        );
    }
}

export default GoogleApiWrapper(
    {
        apiKey: 'AIzaSyADWRrnjbHsVNlFsQcKBfzydPxDSMRyUX4'
    })(CalloutLocation);
