import { useState, useEffect, useContext } from "react";
import ImageContext from "./imageContext";
import {
    collection,
    getDocs,
    addDoc,
    deleteDoc,
    doc,
    updateDoc,
} from "firebase/firestore/lite";
import db from "../firebase-config";

function ImagesState(props) {
    const [images, setImages] = useState([]);
    const imagesCollectionRef = collection(db, "images");
    const uploadImage = async ({ image, category }) => {
        const data = await addDoc(imagesCollectionRef, { image, category });
        // setImages([...images, { image, category, id: data.id }]);
        getImages();
    };
    const deleteImage = async (id) => {
        const imageDoc = doc(db, "images", id);
        await deleteDoc(imageDoc);
        getImages();
    };

    const updateImage = async (ele) => {
        const image = doc(db, "images", ele.id);
        await updateDoc(image, { stared: !ele.stared });
        getImages();
    };

    const getImages = async () => {
        const data = await getDocs(imagesCollectionRef);
        setImages(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    useEffect(() => {
        getImages();
    }, []);
    return (
        <ImageContext.Provider
            value={{ images, uploadImage, deleteImage, updateImage }}
        >
            {props.children}
        </ImageContext.Provider>
    );
}

export default ImagesState;

export function useImageContext() {
    return useContext(ImageContext);
}
