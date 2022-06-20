import { useState, useEffect, useContext, useCallback } from "react";
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
    const contentCollectionRef = collection(db, "content");
    const [content, setContent] = useState([]);
    const uploadImage = async ({ url, category, type }) => {
        await addDoc(contentCollectionRef, { url, category, type });
        getContent();
    };
    const deleteImage = async (id) => {
        const imageDoc = doc(db, "content", id);
        await deleteDoc(imageDoc);
        getContent();
    };

    const updateImage = async (ele) => {
        const image = doc(db, "content", ele.id);
        await updateDoc(image, { stared: !ele.stared });
        getContent();
    };

    const getContent = useCallback(async () => {
        const data = await getDocs(contentCollectionRef);
        setContent(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    }, []);

    useEffect(() => {
        getContent();
    }, [getContent]);
    return (
        <ImageContext.Provider
            value={{
                content,
                uploadImage,
                deleteImage,
                updateImage,
            }}
        >
            {props.children}
        </ImageContext.Provider>
    );
}

export default ImagesState;

export function useImageContext() {
    return useContext(ImageContext);
}
