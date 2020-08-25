import React from 'react';


class ImageCard extends React.Component{

    constructor(props){
        super(props);
        this.state={spans:0};
        this.imageRef = React.createRef();
    }

    componentDidMount=()=>{
        console.log(this.imageRef);
        this.imageRef.current.addEventListener('load',this.setSpans);
    }
    setSpans = ()=>{
        const height = this.imageRef.current.clientHeight;
        console.log(height);
        const spans = Math.ceil(height/10);
        this.setState({spans:spans});
    }

    render(){
        return(
            <div className={{gridRowEnd:`span ${this.state.spans}`}}>
                <img 
                    ref={this.imageRef} 
                    src={this.props.image.urls.regular}
                    alt={this.props.image.description}/>
            </div>
        );
    }
}

export default ImageCard;