import React, { useEffect, useReducer } from 'react';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

import MuiGrid from '@material-ui/core/Grid';
import { spacing } from '@material-ui/system';
import { styled } from '@material-ui/styles';

import DeleteIcon from '@material-ui/icons/Delete';
import CheckIcon from '@material-ui/icons/Check';

import makeStyles from '@material-ui/styles/makeStyles';
import styles from './styles';

const Grid = styled(MuiGrid)(spacing);
const useStyles = makeStyles(styles);


function ListItem(props) {
    const {
        data,
        onDelete,
        onComplete,
        onSelect,
    } = props;

    const classes = useStyles();
    
    function handleComplete(){
        onComplete(data);
    }

    function handleDelete() {
        onDelete(data);
    }

    function handleSelect(){
        onSelect(data);
    }

    useEffect(()=>{
        console.log("");
        console.log(data);
    }, [])

    useEffect(()=>{
        console.log("");
        console.log(data);
    }, [data])

    function containerClass(){
        if (data.selected) {
            return classes.itemContainerSelected;
        }
        return classes.itemContainer
    }

    return (
        <div className={containerClass()} onClick={handleSelect}>
            <Grid  container xs={12}>
                <Grid xs={8}>
                    <Typography variant="body1">
                        {data.label}
                    </Typography>  
                </Grid>
                <Grid xs={2}>
                <IconButton size="small" className={classes.completeButton}
                        variant="outlined"
                        color="primary"
                        onClick={handleComplete}
                    >
                    <CheckIcon  ontSize="small" />
                    </IconButton>
                </Grid>
                <Grid xs={2}>
                <IconButton size="small" className={classes.deleteButton}
                        variant="outlined"
                        color="primary"
                        onClick={handleDelete}
                    >
                    <DeleteIcon fontSize="small" />
                    </IconButton>
                </Grid>
            </Grid>
        </div>
    )
}

ListItem.propTypes = {
    data: PropTypes.shape({}),
    
};

ListItem.defaultProps = {
    data: {  id: '123', label: 'Todo Item', completed: false, selected: false },
};

export default ListItem;