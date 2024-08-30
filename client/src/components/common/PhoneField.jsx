import { forwardRef } from 'react'
import { TextField } from '@mui/material'
// import { makeStyles } from '@material-ui/core/styles'
import { makeStyles } from '@mui/material'

const useStyles = makeStyles(theme => ({
    input: {
        backgroundColor: '#fff'
    }
}))

const phoneInput = (props, ref) => {
    const classes = useStyles()

    return (

        <TextField
            {...props}
            InputProps={{
                className: classes.input
            }}
            inputRef={ref}
            fullWidth
            size='small'
            label='Phone Number'
            variant='outlined'
            name='phone'
        />
    )
}
export default forwardRef(phoneInput)