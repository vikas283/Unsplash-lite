import React from 'react';

class SearchBar extends React.Component{
    state={term:''};

    onFormSubmit = (event)=>{
        event.preventDefault();
        this.props.onSubmit(this.state.term);
    }

    render(){
        return(
            <div className="ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label>Enter Here</label>
                        <input 
                            value={this.state.term}
                            type="text" 
                            onChange={(event)=>this.setState({term:event.target.value})}
                            /> 
                    </div>
                {this.state.term}
                </form>
            </div>
        );
    };
}

export default SearchBar;