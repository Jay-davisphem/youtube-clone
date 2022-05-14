import {AiFillEye} from 'react-icons/ai'
import "./_video.scss";

function Video() {
  return <div className='video'>
    <div className='video__top'>
      <img src='' alt='' />
      <span>01:00</span>
    </div>
    <div className='video__title'>React and Django in 1 minute :), Now you know know know</div>  
    <div className='video__details'>
      <span><AiFillEye /> 100m views</span>
      <span>1 days ago</span>
    </div>
    <div className='video__channel'>
      <img src='' alt='' />
      <p>Exclusive davisphem</p>
    </div>
  </div>;
}
export default Video;
