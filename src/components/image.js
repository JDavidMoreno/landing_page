import React from "react";
import imageStyles from "./image.module.css";


class Image extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mainImageHeight: 0,
        };
    }

    componentDidMount() {
        this.setState({ mainImageHeight: window.innerHeight })
    }

    render() {
        let divStyles = {
            backgroundImage: `url(${ this.props.src })`,
            height: this.props.height
        };
        return (
            <div style={ divStyles } className={ imageStyles.img_container }>
                { this.props.children }
                <img src={ this.props.src } alt={ this.props.alt || "header image" } className={ imageStyles.img_contained } style={{maxHeight: this.props.height || `${ this.state.mainImageHeight / 10 + 'px' }`, height: this.props.height}} />
            </div>            
        )
    }
}

export default Image;