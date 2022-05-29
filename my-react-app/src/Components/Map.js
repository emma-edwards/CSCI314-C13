import * as React from 'react';
//import {Wrapper, Status} from "@googlemaps/react-wrapper";
import {Map, GoogleApiWrapper, Marker} from 'google-maps-react';
//import geocoder from 'google-geocoder';

{/*REFERENCES
Google
05/5/2022
developers.google.com/maps/documentation/javascript/react-map
"Adding a Map and Markers to a React Application" (Last updated May 20, 2022)
Google Maps Platform Documentation

Rachael Njeri
10/5/2022
digitalocean.com/community/tutorials/how-to-integrate-the-google-maps-api-into-react-applications
"How to Integrate the Google Maps API into React Applications" (Dec 12, 2019)
DigitalOcean Community Tutorial


Jessica Betts
10/5/2022
dev.to/jessicabetts/how-to-use-google-maps-api-and-react-js-26c2
"How to use the Google MAps API with React.js" (Apr 25, 2019)
DEV Community Tutorial
*/}

{/*const geocode = geocoder({
    key: 'AIzaSyADWRrnjbHsVNlFsQcKBfzydPxDSMRyUX4'
});
*/}

export class CalloutMap extends React.Component{
    //CONSTRUCTOR
    constructor(props) {
        super(props);
        this.state = {
            stores: [{lat: -34.405, lng: 150.878},
                {latitude: -34.405, longitude: 150.878},
                {latitude: -34.424, longitude: 150.882},
                {latitude: -34.421, longitude: 150.909}],
        }
    }

    //FUNCTIONS
    //Jessica Betts (2019)
    //Display initial markers, essentially hardcoded for the demonstration
    displayMarkers = () => {
        return this.state.stores.map((store, index) => {
            return (<Marker key={index} id={index} position={{
                lat: store.latitude,
                lng: store.longitude
                }}
                           onClick={() => alert("You clicked a marker")}
            />
            )
        })
    }
    //Code to fetch a marker
    fetchMarker = () => {
        const location = this.props.position;
        return this.state.stores.map((store, index) => {
            return (<Marker key={index} id={index} position={{location}}
                            onClick={() => alert("You clicked a marker")}
                />
            )
        })
    }
    /*
        callBack = (latlng) => {
            console.log(latlng[0]);
            console.log(latlng[1]);
        }

        geoTest = (callBack) => {
            let latlng = new Array(2);
            let address = '223 Edenbridge Dr, Toronto';
            geocode.find({'address': address}, function(results, status)
            {
                    latlng[0] = results[0].geometry.location.lat();
                    latlng[1] = results[1].geometry.location.lng();
            })
            //console.log(geo.find('223 Edenbridge Dr, Toronto'));
        }
    */
    /*
        checkTextInput = (e) => {
            if (location.trim()) {
                alert('Please Enter Location');
                window.location.href = '/submitClaim'
            }else if (customerNotes.trim()) {
                alert('Please Enter Notes');
                window.location.href = '/submitClaim'
            }else{
                handleClick(e);
            }
        }

        handleClick = (e) => {
            e.preventDefault()
            const request={location, customerNotes}
            console.log(request)
            fetch("http://localhost:8080/request/addRequest",{
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify(request)
            }).then(()=>{
                console.log("Request added")
                window.location.href = '/MemberHome'
            })
        }
*/
    //RENDER
    // Rachael Njeri (2019)
    render() {
        return (
            <div>Map goes here
                <Map
                    google={this.props.google}
                    zoom={13}
                    style={this.props.style}
                    initialCenter={this.props.center}
                >
                    {this.displayMarkers()}
                    {this.fetchMarker()}
                </Map>
            </div>
        )
    }
}

export default GoogleApiWrapper(
    {
        apiKey: 'AIzaSyADWRrnjbHsVNlFsQcKBfzydPxDSMRyUX4'
    })(Map);
