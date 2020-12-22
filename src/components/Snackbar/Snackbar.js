import Snackbar from '@material-ui/core/Snackbar';

const SnackbarFunc = ({open, onClose}) => {

    return(
        <Snackbar
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
            }}
            open={open}
            onClose={onClose}
            message="Saving city..."
        />
    )
}

export default SnackbarFunc