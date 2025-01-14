const Banner = () => {
    return (
        <div className="carousel rounded-3xl w-full">
            <div id="slide1" className="carousel-item relative w-full">
                <img src="/bannerPic1.jpeg" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-sm btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-sm btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src="/bannerPic2.jpeg" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-sm btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-sm btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src="/bannerPic3.jpeg" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-sm btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-sm btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src="/bannerPic4.jpeg" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-sm btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-sm btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;