import React from "react";
import imageStyles from "./image.module.css";


export default class Image extends React.Component {

    render() {


        let divStyles = {
            backgroundImage: `url(${ this.props.src })`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            padding: '1rem',
        };



        return (
            // <ThemeProvider theme={ theme } >
                <div style={ divStyles }>
                    { this.props.children }
                    <img src={ this.props.src } style={{width: '100vw', visibility: 'hidden', maxHeight: `${ window.innerHeight / 10 + 'px' }`}} />
                </div>
            // </ThemeProvider>
            
        )
    }
}