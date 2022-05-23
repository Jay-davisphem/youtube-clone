import { HOME_VIDEOS_REQUEST } from '../actionTypes'
import request from '../../api'

export const getPopularVideos = () => async dispatch => {
  try{
    dispatch({
      type: HOME_VIDEOS_REQUEST
    }) 
    const res = request.get('/videos', params: {
      part: 'snippet,contentDetails,statistics',
      chart: "mostPopular",
      regionCode: "NG",
      maxResults: 5,
      pageToken: '',
    })
    console.log(res)
  }catch(error){}
}
