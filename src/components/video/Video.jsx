import { useEffect, useState } from "react";
import { AiFillEye } from "react-icons/ai";
import "./_video.scss";
import request from "../../api";
import moment from "moment";
import numeral from "numeral";
function Video({ video }) {
  const {
    id,
    snippet: {
      channelId,
      channelTitle,
      title,
      publishedAt,
      thumbnails: { medium },
    },
  } = video;

  const [views, setViews] = useState(null);
  const [duration, setDuration] = useState(null);
  const [channelIcon, setChannelIcon] = useState(null)
  const handleDetails = (_duration, _views) => {
    const seconds = moment.duration(_duration).asSeconds();
    setDuration(moment.utc(seconds * 1000).format("mm:ss"));

    setViews(numeral(_views).format("0.a"));
  };

  useEffect(() => {
    const get_videos_details = async () => {
      const {
        data: { items },
      } = await request("/videos", {
        params: {
          part: "contentDetails,statistics",
          id: id,
        },
      });
      console.log(items);
      handleDetails(
        items[0].contentDetails.duration,
        items[0].statistics.viewCount
      );
    };
    get_videos_details();
  }, [id]);

  useEffect(() => {
    const get_channel_icon = async () => {
      const {
        data: { items },
      } = await request("/channels", {
        params: {
          part: "snippet",
          id: channelId,
        },
      });
      setChannelIcon(items[0].snippet.thumbnails.default)
    };
    get_channel_icon()
  }, [channelId]);

  return (
    <div className="video">
      <div className="video__top">
        <img src={medium.url} alt="" />
        <span>{duration}</span>
      </div>
      <div className="video__title">{title}</div>
      <div className="video__details">
        <span>
          <AiFillEye /> {views} views
        </span>
        <span>{moment(publishedAt).fromNow()} ago</span>
      </div>
      <div className="video__channel">
        <img
          src={channelIcon?.url}
          alt=""
        />
        <p>{channelTitle}</p>
      </div>
    </div>
  );
}
export default Video;
