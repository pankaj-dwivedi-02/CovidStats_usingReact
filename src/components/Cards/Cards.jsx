import React from 'react';
import {Card, CardContent, Typography, Grid} from '@material-ui/core';
import styles from './Cards.module.css';
import CountUP from 'react-countup';
import cx from 'classnames';

const Cards = ({data:{confirmed, recovered, deaths,lastUpdate}}) => {
    if(!confirmed){
        return 'loading......'
    }
    
    return (
        <div className={styles.container}>
            <Grid container spacing={4} justify='center'>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.infected)}>
                    <CardContent>
                        <Typography color = "textSecondary" gutterBottom>Infected</Typography>
                        <Typography variant = "h5" >
                            <CountUP 
                            start={0}
                            end={confirmed.value}
                            duration={2.5}
                            separator=','
                            />
                            </Typography>
                        <Typography color = "textSecondary" >{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant = "body2">Confirmed cases</Typography>
                    </CardContent>
                    

                </Grid>

                <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.Active)}>
                    <CardContent>
                        <Typography color = "textSecondary" gutterBottom>Active</Typography>
                        <Typography variant = "h5" >
                            <CountUP 
                            start={0}
                            end={confirmed.value - recovered.value -deaths.value}
                            duration={2.5}
                            separator=','
                            />
                            </Typography>
                        <Typography color = "textSecondary" >{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant = "body2">Active cases</Typography>
                    </CardContent>
                    

                </Grid>



                <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.recovered)}>
                    <CardContent>
                        <Typography color = "textSecondary" gutterBottom>Recovered</Typography>
                        <Typography variant = "h5" >
                        <CountUP 
                            start={0}
                            end={recovered.value}
                            duration={2.5}
                            separator=','
                            />
                            
                            </Typography>
                        <Typography color = "textSecondary" >{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant = "body2">Recovered cases</Typography>
                    </CardContent>
                    

                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.deaths)}>
                    <CardContent>
                        <Typography color = "textSecondary" gutterBottom>Deaths</Typography>
                        <Typography variant = "h5" >
                        <CountUP 
                            start={0}
                            end={deaths.value}
                            duration={2.5}
                            separator=','
                            />
                        </Typography>
                        <Typography color = "textSecondary" >{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant = "body2">Death cases</Typography>
                    </CardContent>
                    

                </Grid>

            </Grid>
        </div>
    );
}

export default Cards;