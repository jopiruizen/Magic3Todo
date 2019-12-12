import React, { useEffect, useReducer } from 'react';
import PropTypes from 'prop-types';
import MuiGrid from '@material-ui/core/Grid';
import { spacing } from '@material-ui/system';
import { styled } from '@material-ui/styles';
import makeStyles from '@material-ui/styles/makeStyles';
import ListItem from './ListItem';

const Grid = styled(MuiGrid)(spacing);

function ListDisplay (props) {
    
    const {
        list,
        onComplete,
        onDelete,
    } = props;
    
    function renderListItems() {
        return list.map((item) => (
            <ListItem 
                data={item}
                onComplete={onComplete}
                onDelete={onDelete}
            />
        ))
    }
    return (
        <Grid xs={12}>
            {renderListItems()}
        </Grid>
    )
}

ListDisplay.propTypes = {
    list: PropTypes.arrayOf,
    onComplete: PropTypes.func,
    onDelete: PropTypes.func,
};

ListDisplay.defaultProps = {
    list:[],
    onComplete: () => {},
    onDelete: () => {},
};


export default ListDisplay;

