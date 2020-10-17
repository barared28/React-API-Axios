import React from 'react';
import axios from '../api/config';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

export default class App extends React.Component {
    state = { photo: [] }
    handleSubmit = (term) => {
        if (term !== '') {
            axios.get('search/photos', {params : { query : term}})
                .then(res => this.setState({ photo: res.data.results }))
                .catch(err => console.log(err))
        } else {
            alert("masukkan input");
        }
    }

    render() {
        return (
            <div className="ui container" style={{ marginTop: '10px' }}>
                <SearchBar onSubmit={this.handleSubmit} />
                <ImageList image={this.state.photo} />
            </div>
        )
    }
}