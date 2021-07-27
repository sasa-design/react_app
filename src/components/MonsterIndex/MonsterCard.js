import React from 'react';
import { Grid,makeStyles,Card,CardActions,CardContent,Button,Typography } from '@material-ui/core';
import { connect } from 'react-redux'
import { getMonsterSuccess } from '../../actions/MonsterIndex/action'

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const MonsterCard = ({
    data,
    dispatchgetMonsterSuccess,
}) => {
    const classes = useStyles();
    const index = data.map((items) => {
        return (
            <Grid item>
                <Card className={classes.root}>
                    <CardContent>
                    <Grid container justifyContent="center">
                        <Typography variant="h5" component="h2">
                            {items.name}
                        </Typography>
                    </Grid>
                    <Grid container justifyContent="center">
                        <Typography variant="body2" component="p">
                            {items.types[0]}
                            {items.types[1] && (
                                <span>・{items.types[1]}</span>
                            )}
                        </Typography>
                    </Grid>
                    </CardContent>
                    <CardActions>
                        <Button size="small">More Detail</Button>
                    </CardActions>
                </Card>
            </Grid>
        )
    })
    
    return (
        <Grid container justifyContent="center" spacing={2}>
            {index}
        </Grid>
    )
}

export default connect(
    state => ({ data: state.monsterindex.data.monsters }),
    dispatch => ({ dispatchgetMonsterSuccess: monster => dispatch(getMonsterSuccess(monster)) })
)(MonsterCard)


