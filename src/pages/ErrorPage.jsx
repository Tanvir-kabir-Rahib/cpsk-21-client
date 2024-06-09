import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const { error, status } = useRouteError();
    return (
        <div className="flex flex-col justify-center items-center h-screen text-center py-32">
            <h1 className=" text-7xl font-extrabold mb-8">Error {status || 404}</h1>
            <p className="lg:text-3xl">{error?.message}</p>
            <Link to="/" className="btn bg-lime-500 text-white mt-8 text-lg">Home Page</Link>
        </div>
    );
};

export default ErrorPage;