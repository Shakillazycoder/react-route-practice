import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError()
    return (
        <div>
            <h1>Oops!!</h1>
            {
                error && <div>
                    <p>{error.message || error.statusText}</p>

                </div>
            }
            {
                error.status === 404 && <div>
                    <p>Page not found</p>
                    <Link to="/todos"><button className="btn btn-primary">Todos</button></Link>
                </div>
            }
        </div>
    );
};

export default ErrorPage;