import {AiFillEye} from 'react-icons/ai'
import "./_video.scss";

function Video() {
  return <div className='video'>
    <div className='video__top'>
      <img src='https://i.ytimg.com/vi/ZdrfvtT1Ets/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBzmWpuOXAN8CqEkb1GdzBG7b3CqQ' alt='' />
      <span>01:00</span>
    </div>
    <div className='video__title'>React and Django in 1 minute :), Now you know know know</div>  
    <div className='video__details'>
      <span><AiFillEye /> 100m views</span>
      <span>1 days ago</span>
    </div>
    <div className='video__channel'>
      <img src='https://yt3.ggpht.com/ytc/AKedOLRR2uNiXJiFH-XRmtGgkdICxTuDJxCPJidKFRNCNg=s68-c-k-c0x00ffffff-no-rj' alt='' />
      <p>Exclusive davisphem</p>
    </div>
  </div>;
}
export default Video;
