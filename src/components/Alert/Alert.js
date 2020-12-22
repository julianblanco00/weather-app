import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert'

const AlertFunc = ({severity, text, onClose, open}) => {

    const Alert = (props) => {
        return <MuiAlert elevation={6} variant="filled" {...props} />;
    }

    return(
        <Snackbar open={open} autoHideDuration={2000} onClose={onClose}>
            <Alert severity={severity} onClose={onClose}>
                {text}
            </Alert>
        </Snackbar> 
    )
}

export default AlertFunc