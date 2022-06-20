import React from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import {
    BsFillArrowLeftCircleFill,
    BsFillArrowRightCircleFill,
} from "react-icons/bs";
import imageContext from "../context/imageContext";

function VideoSlider() {
    const { content } = useContext(imageContext);

    const [videos, setVideos] = useState([]);
    const [videoIndex, setVideoIndex] = useState(0);
    const changeVideo = (state) => {
        if (state && !(videoIndex + 1 >= videos.length)) {
            setVideoIndex((prev) => prev + 1);
        } else if (videoIndex !== 0) {
            setVideoIndex((prev) => prev - 1);
        }
    };

    useEffect(() => {
        setVideos(
            content.filter((ele) => ele.type !== "image").map((ele) => ele.url)
        );
    }, [content]);
    return (
        <div className="videoplayer-container">
            <video
                src={videos.length ? videos[videoIndex] : ""}
                autoPlay
                controls
            />
            <div
                className={
                    videoIndex === 0 ? "disable arrow prev" : "arrow prev"
                }
                onClick={() => changeVideo(false)}
            >
                <BsFillArrowLeftCircleFill />
            </div>
            <div
                className={
                    videoIndex + 1 === videos.length
                        ? "arrow next disable"
                        : "arrow next"
                }
            >
                <BsFillArrowRightCircleFill onClick={() => changeVideo(true)} />
            </div>
            <div className="container-dots">
                {videos.map((e, index) => (
                    <div
                        key={index}
                        className={videoIndex === index ? "dot active" : "dot"}
                    ></div>
                ))}
            </div>
        </div>
    );
}

export default VideoSlider;
