import React from 'react';
import { Autocomplete } from '@react-google-maps/api';
import { AppBar, Toolbar, Typography, InputBase, Box } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import useStyles from './styles';

const Header = () => {
const classes = useStyles();



    return (
        <AppBar position="static">
            <Toolbar className={classes.toolbar}>
                <Typography variant="h5" className={classes.title}>
                        Ziggy: "How can I help you?"
                </Typography>
                <Box display="flex">
                    <Typography variaint="h6" className={classes.title}>
                        Look around.  I can tell you about new places!
                    </Typography>
                    {/* <Autocomplete> */}
                        <div className={classes.search}>
                            <div className={classes.searchIcon}>
                                <SearchIcon />
                            </div>
                            <InputBase placeholder="Look..." classes={{root: classes.inputRoot, input: classes.inputInput }} />
                        </div>
                    {/* </Autocomplete> */}
                </Box>
            </Toolbar>
        </AppBar>
        )
}

export default Header