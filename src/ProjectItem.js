import React from 'react'

import { projects } from "./resumeData";
import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import GitHubIcon from "@material-ui/icons/GitHub";

import Box from '@material-ui/core/Box';



const useStyles = makeStyles({
    root: {
        flexGrow: 1
    },
    media: {
        height: 140,
    }, headerTitle: {
        fontFamily: "Nunito",
        fontSize: '2rem',
    },

});
const ProjectItem = () => {
    const classes = useStyles();
    
    const openInNewTabLinkdinProfile = (url) => {
        const newWindow = window.open(url)
        if (newWindow) newWindow.opener = null
    }
    

    return (
        <div style={{ marginTop: "4%" }}>
            <h1 className={classes.headerTitle}>Projects</h1>
            <Box display="flex" flexWrap="Wrap" justifyContent="center" m={1} p={1} >
                {projects.map((project, index) => {
                    return (
                        <Grid container className={classes.root} justifyContent="center" key={project.id} xs={12} sm={12} md={4} lg={4} >
                            <Card style={{ width: '70%' }} elevation={1}>
                                <CardActionArea>
                                    <CardMedia
                                        className={classes.media}
                                        image={project.image}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            {project.projectName}
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            {project.description}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button onClick={() => openInNewTabLinkdinProfile(project.githubLink)}
                                        fullWidth
                                        variant="outlined"
                                        size="small"
                                        color="primary"
                                        className={classes.button}
                                        endIcon={<GitHubIcon />}
                                    >
                                        {/* <Link
                //href={card.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                underline="none"
                color="inherit"
              >
                Code
              </Link> */}
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>

                    )
                })
                }
            </Box>
        </div>
    )

}

export default ProjectItem;
