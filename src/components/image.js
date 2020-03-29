import React from "react";
import imageStyles from "./image.module.css";


export default class Image extends React.Component {

    render() {
        let divStyles = {
            backgroundImage: `url(${ this.props.src })`,
        };

        return (
                <div style={ divStyles } className={ imageStyles.img_container }>
                    { this.props.children }
                    <img src={ this.props.src } alt={ this.props.alt || "header image" } className={ imageStyles.img_contained } style={{maxHeight: `${ window.innerHeight / 10 + 'px' }`}} />
                </div>            
        )
    }
}