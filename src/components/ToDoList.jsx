import { useState, useEffect } from "react";
import { IconX } from "@tabler/icons-react";
import { Tooltip } from "react-tippy";

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
        <div className="w-full max-w-[400px] flex flex-col items-center max-h-[400px] overflow-y-auto bg-gradient-to-r from-sky-800 to-teal-600 border-4 border-white">
            <form onSubmit={addTodo} className="flex flex-col w-full pt-6 px-6 items-center">
                <label className="text-xl">Notes</label>
                <div>
                    <input
                        className="m-3 text-black p-1"
                        type="text"
                        value={newTodoName}
                        onChange={(e) => setNewTodoName(e.target.value)}
                    />
                    <button>Add</button>
                </div>
            </form>
            <ul className="flex flex-col w-full px-4">
                {todos.map((todo) => (
                    <li
                        className="flex items-center p-2 list-none"
                        key={todo.id}>
                        <label className="flex items-center">
                            <input
                                className="flex m-2 h-5 w-5"
                                type="checkbox"
                                checked={todo.completed}
                                onChange={(e) => toggleTodo(todo.id, e.target.checked)}
                            />
                                <span className="text-l mb-1 w-[280px] truncate">
                                    <Tooltip
                                        title={todo.name}
                                        position="top"
                                    >
                                        {todo.name}
                                    </Tooltip>
                                </span>
                        </label>
                        <button className="delete-button" onClick={() => deleteTodo(todo.id)}>
                            <IconX
                                className="h-4 w-4"
                            />
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
