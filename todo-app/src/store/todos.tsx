import { ReactNode, createContext, useState, useContext } from "react";

// Define the properties for the TodosProvider component
export type TodosProviderProps = {
    children: ReactNode;
};

// Define the Todo type
export type Todo = {
    id: string;
    task: string;
    completed: boolean;
    createdAt: Date;
};

// Define the context value type
export type TodosContextType = {
    todos: Todo[];
    handleAddToDo: (task: string) => void; // call signature
    toggleTodoAsCompleted: (id: string) => void;
    handleDeleteTodo: (id: string) => void;
};

// Create the context with a default value of null
export const todosContext = createContext<TodosContextType | null>(null);

// Create the TodosProvider component
export const TodosProvider = ({ children }: TodosProviderProps) => {
    const [todos, setTodos] = useState<Todo[]>([]);

    const handleAddToDo = (task: string) => {
        setTodos((prev) => {
            const newTodos: Todo[] = [
                {
                    id: Math.random().toString(),
                    task: task,
                    completed: false,
                    createdAt: new Date()
                },
                ...prev
            ];
            return newTodos;
        });
    };

    // Mark completed
    const toggleTodoAsCompleted = (id: string) => {
        setTodos((prev) => {
            let newTodos = prev.map((todo) => {
                if (todo.id === id) {
                    return { ...todo, completed: !todo.completed };
                }
                return todo;
            });
            return newTodos;
        });
    };

    const handleDeleteTodo = (id: string) => {
        setTodos((prev) => {
            let newTodos = prev.filter((todo) => todo.id !== id);
            return newTodos;
        });
    };

    return (
        <todosContext.Provider value={{ todos, handleAddToDo, handleDeleteTodo, toggleTodoAsCompleted }}>
            {children}
        </todosContext.Provider>
    );
};

// Create a custom hook to use the todos context
export const useTodos = () => {
    const todosConsumer = useContext(todosContext);
    if (!todosConsumer) {
        throw new Error("useTodos must be used within a TodosProvider");
    }
    return todosConsumer;
};
