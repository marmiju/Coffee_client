import Button from "../Button/Button";


const Banner = () => {
    return (
        <div
        className="hero min-h-screen bg-banner">
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Would you like a Cup of Delicious Coffee?</h1>
            <p className="mb-5">
            It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!!
             Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.
            </p>
            <div className="flex justify-center"><Button>Explore More</Button></div>
          </div>
        </div>
      </div>
    );
};

export default Banner;