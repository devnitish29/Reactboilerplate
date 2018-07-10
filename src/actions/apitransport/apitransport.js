import axios from 'axios';
import C from './../constants';

export default function dispatchAPI(api) {
    if (api.method === 'POST') {
        return dispatch => {
            dispatch(apiStatusAsync(true, false, ''))
            let res = {
                data: {
                    email: 'asd',
                    token: 'asd',
                    role: 'asd',
                    name: 'asd',
                    userid: 'asd'
                }
            }
            api.processResponse(res.data)
            dispatch(dispatchAPIAsync(api));
            dispatch(apiStatusAsync(false, false, 'api successful'))
            history.push('/dashboard');
            // axios.create(api.getCustomConfigs()).post(api.apiEndPoint(), api.getBody(), api.getHeaders())
            //     .then(function (res) {
            //         api.processResponse(res.data)
            //         dispatch(dispatchAPIAsync(api));
            //         dispatch(apiStatusAsync(false, false, 'api successful'))
            //     })
            //     .catch(function (err) {
            //         console.log(err)
            //         dispatch(apiStatusAsync(false, true, 'api failed'))
            //     });
        }
    } else {
        return dispatch => {
            dispatch(apiStatusAsync(true, false, ''))
            axios.get(api.apiEndPoint())
                .then(function (res) {
                })
                .catch(function (err) {
                    dispatch(apiStatusAsync(false, true, 'api failed'))
                });
        }
    }
}



function dispatchAPIAsync(api) {
    return {
        type: api.type,
        payload: api.getPayload()
    }
}

function apiStatusAsync(progress, error, message) {
    return {
        type: C.APISTATUS,
        payload: {
            progress: progress,
            error: error,
            message: message
        }
    }
}