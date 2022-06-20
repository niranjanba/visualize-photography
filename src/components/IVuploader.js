import React, { useState, useContext, useRef } from "react";
import { BiImageAlt } from "react-icons/bi";
import imageContext from "../context/imageContext";

function IVuploader() {
    const initialValues = {
        url: "",
        type: "",
        category: "",
    };
    const [values, setValues] = useState(initialValues);

    const formRef = useRef();

    // IMAGE CONTEXT
    const { uploadImage } = useContext(imageContext);

    const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(values);
        if (values.url.length > 10 && values.category.length > 3) {
            formRef.current.reset();
            setValues(initialValues);
            uploadImage(values);
        }
    };
    return (
        <div className="upload-container">
            <form className="upload-form" ref={formRef} onSubmit={handleSubmit}>
                <div>
                    <label className="form-lable" htmlFor="image">
                        Paste image url
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        name="url"
                        id="image"
                        placeholder="paste the image url"
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="video-image">Select content type</label>
                    <select
                        name="type"
                        className="form-control mb-3"
                        id="video-image"
                        onChange={handleChange}
                        defaultValue={"Select Category"}
                    >
                        <option value="Select Category">Select type</option>
                        <option value="image">Image</option>
                        <option value="video">Video</option>
                    </select>
                    <label className="form-lable" htmlFor="category">
                        Select category
                    </label>
                    <select
                        name="category"
                        id="select"
                        defaultValue="Select Category"
                        className="form-control"
                        onChange={handleChange}
                    >
                        <option value="Select Category">Select Category</option>
                        <option value="wedding">Wedding</option>
                        <option value="birthday">Birthday</option>
                        <option value="kids">Kids</option>
                        <option value="events">Events</option>
                        <option value="traditional">Traditional</option>
                        <option value="prewedding">Pre Wedding</option>
                        <option value="candid">Candid</option>
                        <option value="babyshower">Baby Shower</option>
                    </select>
                </div>
                <button type="submit" className="btn btn-lg btn-primary">
                    Upload
                </button>
            </form>
            <div className="display-image">
                {!values.image && !values.type ? (
                    <div>
                        <BiImageAlt />
                        Image Preview
                    </div>
                ) : values.type === "image" ? (
                    <img src={values.url} alt="not valid url" />
                ) : (
                    <video src={values.url} controls />
                )}
            </div>
        </div>
    );
}

export default IVuploader;
