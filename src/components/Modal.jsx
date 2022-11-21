import Signup from './Signup'

function Modal() {
    return (
        <>
            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my-modal-5" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box w-11/12 max-w-5xl">
                    <Signup />
                    <div className="modal-action">
                        <label htmlFor="my-modal-5" className="btn">
                            Close
                        </label>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Modal
