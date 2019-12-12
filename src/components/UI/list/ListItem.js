import React, { useEffect, useReducer } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import MuiGrid from '@material-ui/core/Grid';
import { spacing } from '@material-ui/system';
import { styled } from '@material-ui/styles';
import makeStyles from '@material-ui/styles/makeStyles';
import styles from './styles';

const Grid = styled(MuiGrid)(spacing);
const useStyles = makeStyles(styles);


function ListItem(props) {
    const {
        data,
        onDelete,
        onComplete,
    } = props;

    const classes = useStyles();
    
    function handleComplete(){
        onComplete(data);
    }

    function handleDelete() {
        onDelete(data);
    }

    return (
        <Grid  container xs={12}>
            <Grid xs={8}>{data.label}</Grid>
            <Grid xs={2}>
             <Button className={classes.completeButton}
                    variant="outlined"
                    color="primary"
                    onClick={handleComplete}
                >
                    Complete
                </Button>
            </Grid>
            <Grid xs={2}>
             <Button className={classes.deleteButton}
                    variant="outlined"
                    color="primary"
                    onClick={handleDelete}
                >
                    Delete
                </Button>
            </Grid>
        </Grid>
    )
}

ListItem.propTypes = {
    data: PropTypes.shape({}),
    
};

ListItem.defaultProps = {
    data: {  id: '123', label: 'Todo Item', completed: false},
};

export default ListItem;