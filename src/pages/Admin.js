import React, { useContext, useEffect, useRef, useState } from "react";
import { BiImageAlt } from "react-icons/bi";

import GalleryImageViewer from "../components/GalleryImageViewer";
import imageContext from "../context/imageContext";

function Admin() {
    const initialValues = {
        image: "",
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
        if (values.image.length > 10 && values.category.length > 3) {
            formRef.current.reset();
            setValues(initialValues);
            uploadImage(values);
        }
    };

    return (
        <div className="admin-container">
            <div className="upload-container">
                <form
                    className="upload-form"
                    ref={formRef}
                    onSubmit={handleSubmit}
                >
                    <div>
                        <label className="form-lable" htmlFor="image">
                            Paste image url
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            name="image"
                            id="image"
                            placeholder="paste the image url"
                            onChange={handleChange}
                        />
                    </div>
                    <div>
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
                            <option value="Select Category">
                                Select Category
                            </option>
                            <option value="wedding">Wedding</option>
                            <option value="birthday">Birthday</option>
                            <option value="kids">Kids</option>
                            <option value="events">Events</option>
                        </select>
                    </div>
                    <button type="submit" className="btn btn-lg btn-primary">
                        Upload
                    </button>
                </form>
                <div className="display-image">
                    {values.image ? (
                        <img src={values.image} alt="not valid url" />
                    ) : (
                        <div>
                            <BiImageAlt />
                            Image Preview
                        </div>
                    )}
                </div>
            </div>
            <div className="images-grid">
                <h3>Images</h3>
                <GalleryImageViewer
                    showFilter={true}
                    showDeleteIcons={true}
                    showStar={true}
                />
            </div>
        </div>
    );
}

export default Admin;
