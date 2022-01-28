import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';


class AlbumsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            albums: []
        };
    }

    async componentDidMount() {

        var self = this;
        await axios({
            url: "https://mg.alyomhost.net/familyhome/ar/mobile/getData",
        }).then(function (res) {
            let response = res.data

            self.setState({ albums: response })
        })
    }


    renderAlbums() {
        return this.state.albums.map(album =>
            <AlbumDetail key={album.title} album={album} />
        );
    }

    render() {
        return (
            <ScrollView>
                {this.renderAlbums()}
            </ScrollView>
        );
    }
}

export default AlbumsList;