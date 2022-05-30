import axios from 'axios'
import {
    JOB_LIST_REQUEST,
    JOB_LIST_SUCCESS,
    JOB_LIST_FAIL,

    JOB_DETAILS_REQUEST,
    JOB_DETAILS_SUCCESS,
    JOB_DETAILS_FAIL
} from '../constants/jobConstants'


export const listJobs = () => async(dispatch, getState) => {
           
    try{
        dispatch({type: JOB_LIST_REQUEST})

        const {
            userLogin: { userInfo },
        } = getState()

        const config = {
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }
        const {data} = await axios.get('http://localhost:8001/api/jobs/get-jobs/',
        config
        )
        dispatch({type: JOB_LIST_SUCCESS, payload: data})
    }catch(error) {
        dispatch({
            type: JOB_LIST_FAIL, 
            payload: error.response && error.response.data.detail
                    ? error.response.data.message
                    : error.message,
        })
    }
}


export const listJobDetails = (id) => async(dispatch) => {
    try{
        dispatch({type: JOB_DETAILS_REQUEST})
        const jobDetail = await axios.get(`http://localhost:8001/api/jobs/${id}`)
        const hirerDetail = await axios.get(`http://localhost:8001/api/users/${jobDetail.data.posterId}`)

        const data={jobDetail, hirerDetail}
        dispatch({type: JOB_DETAILS_SUCCESS, payload: data})
    }catch(error) {
        dispatch({
            type: JOB_DETAILS_FAIL, 
            payload: error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}