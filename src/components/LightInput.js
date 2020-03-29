
import React from "react";
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';

const LightInput = withStyles({
    root: {
        backgroundColor: 'white',
        borderTopLeftRadius: 4,
        borderTopRightRadius: 4,
    }
})(props => <TextField {...props} />)


export default LightInput;