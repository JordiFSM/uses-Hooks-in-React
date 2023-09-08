import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';
import { useTodos } from '../hooks/useTodos';


export const TodoApp = () => {
    
    const {todos, todosCount, pendingTodos, handleDeleteTodo, handleNewTodo, handleToggleTodo} = useTodos();

    return (
        <>
            <h1>TodoApp: { todosCount }, <small>pendientes: { pendingTodos }</small></h1>
            <hr/>
            <div className="row">
                <div className="col-7">
                    <TodoList todos={todos} onToggleTodo={handleToggleTodo} onDeleteTodo = {handleDeleteTodo}></TodoList>
                </div>
                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <hr/>
                    <TodoAdd onNewTodo={ handleNewTodo }/>
                </div>
            </div>
        </>
    )
}
