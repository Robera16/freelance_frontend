import axios from 'axios'
import {
    JOB_LIST_REQUEST,
    JOB_LIST_SUCCESS,
    JOB_LIST_FAIL,

    JOB_DETAILS_REQUEST,
    JOB_DETAILS_SUCCESS,
    JOB_DETAILS_FAIL
} from '../constants/jobConstants'


export const listJobs = () => async(dispatch) => {
    try{
        dispatch({type: JOB_LIST_REQUEST})
        const {data} = await axios.get('http://127.0.0.1:8000/jobs/')
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
        const {data} = await axios.get(`http://127.0.0.1:8000/jobs/${id}`)
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