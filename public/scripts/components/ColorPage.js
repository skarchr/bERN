import React, {PropTypes} from 'react';

class ColorPage extends React.Component{
    
    render(){

        var styleColor = {color:this.props.color};

        return (
            <p>
                {this.props.text} are <strong style={styleColor}>{this.props.color}</strong>!
            </p>
        );
    }
}

ColorPage.propTypes = {
    text:PropTypes.string.isRequired,
    color:PropTypes.string.isRequired
}

export default ColorPage;