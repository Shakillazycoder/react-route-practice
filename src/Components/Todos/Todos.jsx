import { useLoaderData } from "react-router-dom";
import Todo from "../Todo/Todo";

const Todos = () => {

    const todos = useLoaderData();
    return (
        <div>
            <h1>Todos: {todos.length}</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {
                todos.map((todo) => {
                    return <Todo key={todo.id} todo={todo} />
                })
            }
            </div>
        </div>
    );
};

export default Todos;