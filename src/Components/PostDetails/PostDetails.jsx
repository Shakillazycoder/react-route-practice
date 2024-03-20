import { useLoaderData, useNavigate } from "react-router-dom";

const PostDetails = () => {
  const post = useLoaderData();
  const navigate = useNavigate();
  const { id, title, completed } = post;

    const handleGoBack = () => {
        navigate(-1);
    }

  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2>{id}</h2>
          <h2 className="card-title">{title}</h2>
          <p>{completed ? "true" : "false"}</p>
          <div className="card-actions justify-end">
            <button onClick={handleGoBack} className="btn btn-primary">Go back</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetails;
