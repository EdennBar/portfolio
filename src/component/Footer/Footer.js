import { Divider } from '@material-ui/core'

import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import React from 'react'

import { IconButton } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import CopyrightIcon from '@material-ui/icons/Copyright';

const useStyles = makeStyles(() => ({
    dividerStyle: {

    },
    headerFooter: {



    },
    profileImage: {
        height: 200,
        width: 200,
        borderRadius: 400 / 2,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',

    }
}));



const Footer = () => {

    const classes = useStyles();
    const openInNewTabLinkdinProfile = (url) => {
        const newWindow = window.open(url)
        if (newWindow) newWindow.opener = null
    }
    return (
        <Grid container
            direction="column"
            justifyContent="center"
            alignItems="center" xs={12}>
            <Divider style={{ width: '100%' }}></Divider>
            <Grid item xs={12} className={classes.headerFooter}>
                <img className={classes.profileImage}
                    src="https://media-exp1.licdn.com/dms/image/C4D03AQGGtTHkCYGsWQ/profile-displayphoto-shrink_800_800/0/1628083203557?e=1635379200&v=beta&t=RpY34qm7hD0FT3JvG5TK9Rbe-BRKsARPybuUz72m-_4"
                    alt="new"
                />
            </Grid>

            <Grid></Grid>

            <Grid>

                <IconButton onClick={() => openInNewTabLinkdinProfile('https://linkedin.com/in/eden-bar-670ba71a4 ')}>
                    <LinkedInIcon fontSize="large" />
                </IconButton>
                <IconButton onClick={() => openInNewTabLinkdinProfile('https://github.com/EdennBar?tab=repositories')}>
                    <GitHubIcon fontSize="large" />
                </IconButton>
            </Grid>
            <Divider style={{ width: '100%' }}></Divider>
            <Grid>
                <p>Copyright <CopyrightIcon /> 2021</p>

            </Grid>
        </Grid>
    );
}
export default Footer;