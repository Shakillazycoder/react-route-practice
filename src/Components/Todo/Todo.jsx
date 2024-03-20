import { useNavigate } from "react-router-dom";

const Todo = ({ todo }) => {
  const { id, title, completed } = todo;
  const navigate = useNavigate();

  const handleShowDetails = () => {
    navigate(`/todo/${id}`);
  }
  return (
    <div>
      <div className="card w-96 bg-rose-300 shadow-xl">
        <div className="card-body">
          <h2>{id}</h2>
          <h2 className="card-title">{title}</h2>
          <p>{completed ? "true" : "false"}</p>
          <div className="card-actions justify-end">
            <button onClick={handleShowDetails} className="btn btn-primary">Show Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todo;
