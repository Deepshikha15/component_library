import React from 'react';
import { Grid, Paper,TextField } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
function TextInputBase({placeholder,value,onChange,onSubmit}){
    return(
        <>
        <Grid container xs={12}>
            <Paper component="form" square={true} onSubmit={onSubmit}>
                <AddIcon fontSize='small'
                sx={{ margin:1}}/>
                <TextField
                    variant="standard"
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    
                />
            </Paper>
        </Grid>
        </>
    )
}
export default TextInputBase;