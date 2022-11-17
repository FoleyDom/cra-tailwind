import Card from './Card'

function Or() {
    return (
        <div className="flex flex-col w-full lg:flex-row">
            <div className="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center">
                <div className="card card-side bg-base-100 shadow-xl">
                    <figure>
                        <img src="https://placeimg.com/200/280/arch" alt="Movie" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">New movie is released!</h2>
                        <p>Click the button to watch on Jetflix app.</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Watch</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="divider lg:divider-horizontal">OR</div>
            <div className="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center">
                content
            </div>
        </div>
    )
}

export default Or
