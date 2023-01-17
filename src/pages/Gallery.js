import React, { useContext } from "react";
import GalleryImageViewer from "../components/GalleryImageViewer";
import imageContext from "../context/imageContext";

function Gallery() {
    const { content } = useContext(imageContext);
    return (
        <>
            <div className="gallery-container">
                <div className="heading">
                    <h1>Gallery</h1>
                    <p>Have a look at some of our work</p>
                </div>
                {content && content.length ? (
                    <GalleryImageViewer content={content} showFilter={true} />
                ) : (
                    <h3>No Images and Videos</h3>
                )}
            </div>
        </>
    );
}

export default Gallery;
