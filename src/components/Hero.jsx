import ModalBtn from './ModalBtn'

function Hero() {
    return (
        <div
            className="hero min-h-screen"
            style={{
                backgroundImage: `url("https://i.ibb.co/1Lx2GtP/ameer-basheer-Yzef5d-Rpw-Wg-unsplash-1.jpg")`,
            }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl text-primary-content font-bold">Hello there</h1>
                    <p className="mb-5 text-primary-content">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi
                        exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    <ModalBtn />
                </div>
            </div>
        </div>
    )
}

export default Hero
