function ShowModal(props) {
    const closeModal = (e) => {
        props.isModal(false);
    };
    return (
        <div className="bg-modal">
            <div className="modal-contents">
                <div className="close">
                    <span onClick={closeModal} style={{ color: "black" }}>
                        +
                    </span>
                </div>
                {props.children}
            </div>
        </div>
    );
}

export default ShowModal;
