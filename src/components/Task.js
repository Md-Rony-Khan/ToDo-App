import { IconButton } from '@material-ui/core/';
import AddCircleSharpIcon from '@material-ui/icons/AddCircleSharp';
import React, { useEffect, useState } from 'react';
import List from './List';

export default function Task() {
    const [Item, setItem] = useState('');
    const [newItem, setNewItem] = useState([]);
    const [tasksRemaining, setTasksRemaining] = useState(0);

    useEffect(() => {
        setTasksRemaining(() => newItem.filter((item) => !item.Item).length);
    }, [newItem]);

    const onChangeHandler = (e) => {
        setItem(e.target.value);
    };

    const addItem = () => {
        if (Item !== '') {
            setNewItem((oldItem) => [...oldItem, Item]);
        }
        setItem('');
    };

    const deleteItem = (id) => {
        setNewItem((oldItem) => oldItem.filter((item, index) => index !== id));
    };

    return (
        <div className="center_container">
            <h1>TODO APP</h1>
            <div className="task_div">
                <input type="text" placeholder="Add Item" value={Item} onChange={onChangeHandler} />
                <IconButton className="newBtn" variant="outlined" color="primary" onClick={addItem}>
                    <AddCircleSharpIcon />
                </IconButton>
            </div>
            <div className="header">Amount of tasks on board ({tasksRemaining})</div>
            <ol>
                {newItem.map((val, index) => (
                    // eslint-disable-next-line react/no-array-index-key
                    <List
                        value={val}
                        id={index}
                        // eslint-disable-next-line react/no-array-index-key
                        key={index}
                        deleteI={deleteItem}
                        newItem={newItem}
                        setNewItem={setNewItem}
                    />
                ))}
            </ol>
        </div>
    );
}
