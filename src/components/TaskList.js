import { IconButton } from '@material-ui/core/';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import DeleteIcon from '@material-ui/icons/Delete';
import React from 'react';

export default function TaskList({ item, id, deleteItem, completeItem }) {
    return (
        <div>
            <div className="list_div">
                <IconButton
                    className="deleteIcon"
                    variant="outlined"
                    color="secondary"
                    onClick={() => deleteItem(item.key, id, item.complete)}
                >
                    <DeleteIcon />
                </IconButton>
                <IconButton
                    className="completeIcon"
                    variant="outlined"
                    color="secondary"
                    onClick={() => completeItem(id)}
                >
                    <CheckCircleIcon />
                </IconButton>
                <li style={{ textDecoration: item.complete ? 'line-through red' : 'none' }}>
                    {item.text}
                </li>
            </div>
        </div>
    );
}
