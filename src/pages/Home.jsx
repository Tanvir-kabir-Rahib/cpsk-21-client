import Banner from "../components/Banner";
import OpinionBox from "../components/OpinionBox";

const Home = () => {
    return (
        <div className="flex justify-center items-center">
            <div className="w-11/12 my-5">
            <h1 className="text-2xl font-medium mb-10">Welcome into the world of <span className="text-4xl font-semibold text-lime-600">CPSSK 2021</span></h1>
                <Banner />
                <OpinionBox />
            </div>
        </div>
    );
};

export default Home;