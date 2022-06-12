import React, { useEffect, useState } from "react";
import { AiTwotoneDelete } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";
import { useImageContext } from "../context/ImagesState";

function GalleryImageViewer({
    showFilter,
    showDeleteIcons,
    showStar,
    showStaredOnly,
}) {
    const { deleteImage, updateImage, images } = useImageContext();
    const [popImage, setPopImage] = useState(undefined);
    const [activeBtn, setActiveBtn] = useState(0);
    const [allImages, setAllImages] = useState(images);
    const [filteredImages, setFilteredImages] = useState(allImages);

    const handleSetPopImage = (idx) => {
        setPopImage(filteredImages[idx]);
    };

    const handleClosePopImage = () => {
        setPopImage(undefined);
    };

    const filterFunc = (images, id) => {
        return images.filter((ele) => {
            return ele.id !== id;
        });
    };

    const handleDelete = (id) => {
        if (id.length) {
            deleteImage(id);
            setAllImages((prev) => filterFunc(prev, id));
            setFilteredImages((prev) => filterFunc(prev, id));
        }
    };

    const filterImages = (idx) => {
        setActiveBtn(idx);
        if (idx !== 0) {
            const filteredImgs = allImages.filter((ele) => {
                return ele.category === idx;
            });
            setFilteredImages([...filteredImgs]);
        } else {
            setFilteredImages(allImages);
        }
    };

    const updateFilterImages = (idx) => {
        if (idx !== 0) {
            const filteredImgs = images.filter((ele) => {
                return ele.category === idx;
            });
            setFilteredImages([...filteredImgs]);
        } else {
            setFilteredImages(images);
        }
    };

    useEffect(() => {
        setAllImages(images);
        updateFilterImages(activeBtn);
    }, [images]);

    if (!images.length) {
        return (
            <div>
                <p>Loading...</p>
            </div>
        );
    }

    return (
        <div className="image-container">
            {/* FITLERS FOR IMAGES */}
            {showFilter && (
                <div className="filters">
                    <button
                        className={activeBtn === 0 ? "active" : ""}
                        onClick={() => filterImages(0)}
                    >
                        All
                    </button>
                    <button
                        className={activeBtn === "wedding" ? "active" : ""}
                        onClick={() => {
                            filterImages("wedding");
                        }}
                    >
                        wedding
                    </button>
                    <button
                        className={activeBtn === "birthday" ? "active" : ""}
                        onClick={() => {
                            filterImages("birthday");
                        }}
                    >
                        Birthday
                    </button>
                    <button
                        className={activeBtn === "kids" ? "active" : ""}
                        onClick={() => {
                            filterImages("kids");
                        }}
                    >
                        Kids
                    </button>
                    <button
                        className={activeBtn === "events" ? "active" : ""}
                        onClick={() => {
                            filterImages("events");
                        }}
                    >
                        Events
                    </button>
                </div>
            )}
            {/* IMAGES DISPLAY GRID */}
            <div className="image-grid">
                {filteredImages.map((ele, idx) => {
                    if (showStaredOnly) {
                        return (
                            ele.stared && (
                                <div className="image-viewer" key={idx}>
                                    <img
                                        src={ele.image}
                                        alt=""
                                        onClick={() => handleSetPopImage(idx)}
                                    />
                                </div>
                            )
                        );
                    } else {
                        return (
                            <div className="image-viewer" key={idx}>
                                <img
                                    src={ele.image}
                                    alt=""
                                    onClick={() => handleSetPopImage(idx)}
                                />
                                {showDeleteIcons && (
                                    <div
                                        className="delete-icon"
                                        onClick={() => handleDelete(ele.id)}
                                    >
                                        <AiTwotoneDelete />
                                    </div>
                                )}
                                {showStar && (
                                    <div
                                        className={
                                            ele.stared
                                                ? "star-icon active"
                                                : "star-icon"
                                        }
                                        onClick={() => updateImage(ele)}
                                    >
                                        <AiOutlineStar />
                                    </div>
                                )}
                            </div>
                        );
                    }
                })}
            </div>
            <div className={popImage ? "pop-image" : "disp-none"}>
                <span onClick={handleClosePopImage}>&times;</span>
                <img src={popImage ? popImage.image : ""} alt="" />
            </div>
        </div>
    );
}

export default GalleryImageViewer;
