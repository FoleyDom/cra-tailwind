import Signup from './Signup'

function Modal() {
    return (
        <>
            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label
                        htmlFor="my-modal-3"
                        className="btn btn-sm btn-circle absolute right-2 top-2">
                        ✕
                    </label>
                    <Signup />
                </div>
            </div>
        </>
    )
}

export default Modal
