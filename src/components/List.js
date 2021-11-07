import { IconButton } from '@material-ui/core/';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import DeleteIcon from '@material-ui/icons/Delete';
import React, { useState } from 'react';

export default function List({ value, id, deleteI, newItem }) {
    const [Line, setLine] = useState(false);
    const completeItem = () => {
        setLine(true);
        console.log(newItem);
    };
    return (
        <div>
            <div className="list_div">
                <IconButton
                    className="deleteIcon"
                    variant="outlined"
                    color="secondary"
                    onClick={() => deleteI(id)}
                >
                    <DeleteIcon />
                </IconButton>
                <IconButton
                    className="completeIcon"
                    variant="outlined"
                    color="secondary"
                    onClick={completeItem}
                >
                    <CheckCircleIcon />
                </IconButton>
                <li style={{ textDecoration: Line ? 'line-through' : 'none' }}>{value}</li>
            </div>
        </div>
    );
}
