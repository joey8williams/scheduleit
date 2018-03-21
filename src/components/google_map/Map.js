import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';


export class Map extends Component{
    componentDidMount(){
        this.loadMap();
    }
    componentDidUpdate(prevProps,prevState){
        if(prevProps.google !== this.props.google){
            this.loadMap();
        }
    }
    loadMap(){
        console.log(this.props);
        
        if(this.props && this.props.google){
            console.log('loading map');
            const {google} = this.props;
            const maps = google.maps;
            
            const mapRef = this.refs.map;
            const node = ReactDOM.findDOMNode(mapRef);
            
            let zoom = 14;
            let lat = 37.774929;
            let lng = -122.419416;
            const center = new maps.LatLng(lat, lng);
            const mapConfig = Object.assign({}, {
                zoom: zoom,
                center: center
            })
            this.map = new maps.Map(node, mapConfig);
        }
    }
    render(){
        return (
            <div ref='map'>
                Loading map..
            </div>
        );
    }
}