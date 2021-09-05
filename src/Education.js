
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import React from 'react';
import Card from '@material-ui/core/Card';

import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import { Typography } from '@material-ui/core'
import Box from '@material-ui/core/Box';

import { educationObj } from "./educationData";

const useStyles = makeStyles((theme) => ({

    root: {
        flexGrow: 1,
  
       

    },
    media: {
        height: 140,     // as an example I am modifying width and height
        width: '33%',
        marginLeft: '33%'
    }, title: {
        fontFamily: "Nunito",

    }, description: {
        fontFamily: "Nunito",
        fontSize: '1rem',
    }, headerTitle: {
        fontFamily: "Nunito",
        fontSize: '2rem',

    },
    

}));
const Education = () => {
    const classes = useStyles();

    return (


        <div style={{ marginTop: "4%"}}>
            <h1 className={classes.headerTitle}>Education</h1>
            <Box display="flex" flexWrap="Wrap" justifyContent="center" m={1} p={1} >



                {educationObj.map((education, index) => {
                    return (

                        <Grid container className={classes.root}  key={education.id} justifyContent="center" xs={12} sm={12} md={6} lg={6}  >

                            <Card  style={{ minWidth: '70%' }} elevation={1}>

                                <CardMedia

                                    className={classes.media}
                                    image={education.image}

                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h1" className={classes.title}>
                                        {education.study}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p" className={classes.description}>
                                        {education.education}

                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p" className={classes.description}>

                                        {education.date}
                                    </Typography>
                                </CardContent>


                            </Card>


                        </Grid>

                    )


                })}

            </Box>
        </div>
    );
}

export default Education;