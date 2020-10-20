import React from 'react';

import LukeImg from '../../images/lukeocean.jpg';
import {makeStyles} from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    lukeImg: {
        height: '65%',
        width: 'auto',
        borderRadius: '50%',
    }
}));

function LukeOcean () {
    const classes=useStyles();
    return(
        <img className={classes.lukeImg} src={LukeImg} alt={"Luke / CEO"}/>
    )

}

export default LukeOcean;
