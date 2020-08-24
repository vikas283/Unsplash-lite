import React from 'react';
import SearchBar from './SearchBar';
import ImageList from './ImageList';
import Axios from 'axios';
class App extends React.Component{

    state={images:[]};

    onSearchSubmit = async(term)=>{
        const response = await Axios.get('https://api.unsplash.com/search/photos',{
            params:{query:term},
            headers:{
                Authorization:'Client-ID lw0kv89D-Un4WCHG-bor8iQtALBhcRK1NF43NfUZyd4'
            }
        });
        
        this.setState({images:response.data.results});
        console.log(this.state.images);
    }
    render(){
        return(
            <div className="ui container">
                <SearchBar onSubmit={this.onSearchSubmit}/>
                <ImageList images={this.state.images}/>
            </div>
        );
    }
}

export default App;