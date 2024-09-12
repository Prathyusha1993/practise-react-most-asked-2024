import React, { useState } from 'react'

const TodoApp = () => {
    const [todoItem, setTodoItem] = useState('');
    const [todos, setTodos] = useState([]);
    const [editTodoItem, setEditTodoItem] = useState('');
    const [editText, setEditText] = useState(null);

    const handleSubmitForm = (e) => {
        e.preventDefault();
        if (todoItem.trim() === '') return;
        setTodos([...todos, todoItem]);
        setTodoItem('');
    };

    const handleDelete = (i) => {
        setTodos(todos.filter((todo, ii) => ii !== i))
    };

    const handleEdit = (index) => {
        setEditText(index);
        setEditTodoItem(todos[index]);
    };

    const hanldeEditSubmit = (e) => {
        e.preventDefault();
        if(editTodoItem.trim() === '') return;
        setTodos(todos.map((todo, i) => i === editText ? editTodoItem : todo));
        setEditTodoItem('');
        setEditText(null);
    };

    const handleCancelEditing = () => {
        setEditText(null);
        setEditTodoItem('');
    }

    return (
        <div style={{ marginTop: '20px' }}>
            <form onSubmit={handleSubmitForm}>
                <input type='text' value={todoItem} onChange={(e) => setTodoItem(e.target.value)} />
                <button type='submit'>Add</button>
            </form>
            <ul>
                {todos.map((todo, index) => (
                    
                        <li key={index}>
                            {editText === index ? (
                                <form onSubmit={(e) => hanldeEditSubmit(e, index)}>
                                    <input type='text' value={editTodoItem} onChange={(e) => setEditTodoItem(e.target.value)} />
                                    <button type='submit'>Save</button>
                                    <button onClick={handleCancelEditing}>Cancel</button>
                                </form>
                            ) : (
                                <>
                                {todo}
                                <button onClick={() => handleEdit(index)}>Edit</button>
                                <button onClick={() => handleDelete(index)}>Delete</button>
                                </>
                            )}
                            
                        </li>
                ))}
            </ul>
        </div>
    )
}

export default TodoApp;