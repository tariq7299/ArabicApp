import { toast } from 'react-toastify'

export function handleSuccessfulResponse(response, message, successCallback) {
    const successMessage = message || response?.data?.message || 'Operation successful';
    toast.success(successMessage);
    if (successCallback && typeof successCallback === 'function') {
        successCallback();
    }
}

export function handleErrorResponse(err, message, errorCallback) {
    let errorMessage = message || 'An error occurred. Please try again later.';

    console.log("err", err)


    if (err?.response) {
        switch (err.response.status) {
            case 401:
                errorMessage = 'Please log in!';
                setTimeout(() => {
                    window.location.href = '/login';
                }, 4000);
                break;
            case 403:
                errorMessage = err.response.data?.message || 'Access denied';
                break;
            default:
                errorMessage = err.response.data?.message || errorMessage;
        }
    } else if (err.message) {
        if (Array.isArray(err.message)) {
            err.message.forEach(item => toast.error(item));
            return; // Exit early as we've already shown toasts
        } else if (!Array.isArray(err.message) && err.message > 0) {
            console.log("err.message")
            Object.keys(err.message)?.map(key => (
                Array.isArray(err.message[key]) &&
                toast.error(err.message[key]?.join(','))
            ))
        }
    } else if (err?.message && err.code !== 'ERR_CANCELED') {
        errorMessage = err.message;
    } else {

        toast.error(errorMessage);
    }


    if (errorCallback && typeof errorCallback === 'function') {
        errorCallback();
    }
}