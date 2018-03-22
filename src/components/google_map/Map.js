import React, {Component} from 'react';
import ReactDOM from 'react-dom';


class Map extends Component{
    componentDidMount(){
        this.loadMap();
        this.forceUpdate();
    }
    componentDidUpdate(prevProps,prevState){
        if(prevProps.google !== this.props.google){
            console.log('updating map props');
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
            console.log(this.map);
        }
    }
    render(){
        const style={
            width:'94vw',
            height:'29vh'
        }
        return (
            <div ref="map" style={style}>Loading map..</div>
        );
    }
}

export default Map;