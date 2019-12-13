import React, { memo, useEffect, useState } from 'react'; 
import PropTypes from 'prop-types';
import MuiGrid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { 
    Dialog, 
    DialogContent,
    DialogContentText,
    TextField, 
    DialogTitle,
    DialogActions,
} from '@material-ui/core';
import { spacing } from '@material-ui/system';
import { styled } from '@material-ui/styles';
import { useSelector, useDispatch  } from 'react-redux';
import { compose } from 'redux';
import makeStyles from '@material-ui/styles/makeStyles';

import styles from './Todo.styles';
import ListDisplay from '../UI/list/ListDisplay';
import useTodo from './useTodo';

const Grid = styled(MuiGrid)(spacing);
const useStyles = makeStyles(styles);

function TodoComponent(props) {

    const classes = useStyles();
    const {
        mainList,
        subList,
        createMainTodo,
        createSubItem,
        handleMainDelete,
        handleMainComplete,
        handleSubDelete,
        handleSubComplete,
        createDialogOpen, 
        handleDialogClose,
        handleDialogAdd,
        handleTextChange,
    } = useTodo(props);

    return(
        <div  className={classes.fullView}>
            <Grid container xs={12} className={classes.todoPage}>
                <Grid xs={3} className={classes.mainTodo}> 
                    <Grid xs={12}>
                        <ListDisplay 
                            list={mainList}
                            onComplete={handleMainComplete}
                            onDelete={handleMainDelete}
                        />
                    </Grid>
                    
                    <Grid xs={12}>
                        <Button className={classes.deleteButton}
                            variant="outlined"
                            color="primary"
                            onClick={createMainTodo}
                        >
                            Create Todo
                        </Button>
                    </Grid>
                </Grid>

                <Grid xs={9} className={classes.subTodo}> 
                    <Grid xs={12}>
                        <ListDisplay
                            list={subList}
                            onComplete={handleSubComplete}
                            onDelete={handleSubDelete}
                        />
                    </Grid>
                    
                    <Grid xs={12}>
                        <Button className={classes.deleteButton}
                            variant="outlined"
                            color="primary"
                            onClick={createSubItem}
                        >
                            Create Sub Item
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
            <Dialog open={createDialogOpen} onClose={handleDialogClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Create Tod</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="todoLabel"
                        label="Enter Todo Item"
                        type="text"
                        fullWidth
                        onChange={handleTextChange}
                    />
                    </DialogContent>
                    <DialogActions>
                    <Button onClick={handleDialogClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleDialogAdd} color="primary">
                        Add Todo
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
       
    );

}

TodoComponent.propTypes = {
  
};
  
TodoComponent.defaultProps = {
  
};

export default TodoComponent;