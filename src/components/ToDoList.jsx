import { useState, useEffect } from "react";

const LOCAL_STORAGE_KEY = "TODOS";

export function ToDoList() {
    console.log("Todos rendered");

    const [todos, setTodos] = useState(() => {
        const value = localStorage.getItem(LOCAL_STORAGE_KEY);
        if (value == null) return [];
        return JSON.parse(value);
    });
    const [newTodoName, setNewTodoName] = useState("");

    function addTodo(e) {
        e.preventDefault();

        setTodos((prevTodos) => [
            ...prevTodos,
            { id: crypto.randomUUID(), name: newTodoName, completed: false },
        ]);
        setNewTodoName("");
    }

    function toggleTodo(id, completed) {
        setTodos((prevTodos) =>
            prevTodos.map((todo) => {
                if (todo.id === id) {
                    return { ...todo, completed };
                }
                return todo;
            })
        );
    }

    function deleteTodo(id) {
        setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    }

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
    }, [todos]);

    return (
        <div className="todo-wrapper">
            <form onSubmit={addTodo} className="form">
                <label>New Task</label>
                <input
                    type="text"
                    value={newTodoName}
                    onChange={(e) => setNewTodoName(e.target.value)}
                />
                <button>Add</button>
            </form>
            <ul className="list">
                {todos.map((todo) => (
                    <li key={todo.id}>
                        <label>
                            <input
                                type="checkbox"
                                checked={todo.completed}
                                onChange={(e) => toggleTodo(todo.id, e.target.checked)}
                            />
                            {todo.name}
                        </label>
                        <button className="delete-button" onClick={() => deleteTodo(todo.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
