import React from "react";
import imageStyles from "./image.module.css";
import { withTheme } from '@material-ui/core/styles';


class Image extends React.Component {

    render() {
        let divStyles = {
            backgroundImage: `url(${ this.props.src })`,
            height: this.props.height
        };
        return (
            <div style={ divStyles } className={ imageStyles.img_container }>
                { this.props.children }
                <img src={ this.props.src } alt={ this.props.alt || "header image" } className={ imageStyles.img_contained } style={{maxHeight: this.props.height || `${ window.innerHeight / 10 + 'px' }`, height: this.props.height}} />
            </div>            
        )
    }
}

export default withTheme(Image);