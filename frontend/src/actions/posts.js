import * as api from '../api';

//Action creator
export const getPosts = () => async (dispatch) =>  {
    try {
        const {data } = await api.fetchPosts();
        //const action = {type: 'FETCH_ALL', payload: []}
        dispatch({type: 'FETCH_ALL', payload: data});
        

    } catch (error) {
        console.log(error.message)
    }
   
}