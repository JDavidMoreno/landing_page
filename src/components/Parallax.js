
import React from "react";
import styles from "./Parallax.module.css";


export default function Parallax(props) {
    const dinam_styles = {
        src: {
            backgroundImage: `url(${ props.src || '' })`,
        },
        filter: {
            backgroundColor: props.filter || ''
        } 
    };
    return (
        <div className={ styles.parallax_cont }>
            <div className={ styles.parallax_filter } style={ dinam_styles.filter } />
            <div className={ styles.parallax_img } style={ dinam_styles.src }>
                <div className={ styles.parallax_test } >
                    { props.children }
                </div>
            </div>
        </div>
    );
};