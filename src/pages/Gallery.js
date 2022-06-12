import React, { useContext } from "react";
import GalleryImageViewer from "../components/GalleryImageViewer";
import imageContext from "../context/imageContext";

function Gallery() {
    const { images } = useContext(imageContext);
    return (
        <>
            <div className="gallery-container">
                <div className="heading">
                    <h1>Gallery</h1>
                </div>
                {images.length ? (
                    <GalleryImageViewer images={images} showFilter={true} />
                ) : (
                    <div>Loading...</div>
                )}
            </div>
        </>
    );
}

export default Gallery;
