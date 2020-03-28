
import React from "react";
import { grey } from '@material-ui/core/colors';
import Checkbox from '@material-ui/core/Checkbox';
import { withStyles } from '@material-ui/core/styles';

const LightCheckBox = withStyles({
    root: {
      color: grey[100],
      '&$checked': {
        color: grey[50],
      },
    },
    checked: {},
  })(props => <Checkbox color="default" {...props} />);

export default LightCheckBox;
