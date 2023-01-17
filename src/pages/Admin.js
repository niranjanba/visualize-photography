import React from "react";

import GalleryImageViewer from "../components/GalleryImageViewer";
import IVuploader from "../components/IVuploader";

function Admin() {
    return (
        <div className="admin-container">
            <IVuploader />
            <div className="images-grid">
                <h3>Images and Videos</h3>
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
