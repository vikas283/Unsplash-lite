import React from 'react';

class SearchBar extends React.Component{
    state={term:'Input'};

    render(){
        return(
            <div className="ui segment">
                <form className="ui form">
                    <div className="field">
                        <label>Enter Here</label>
                        <input 
                            type="text" 
                            value={this.state.term}
                            onChange={(event)=>this.setState({term:event.target.value})}/> 
                    </div>
                    {this.state.term}
                </form>
            
            </div>
        );
    }
}

export default SearchBar;