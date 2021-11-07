import { IconButton } from '@material-ui/core/';
import AddCircleSharpIcon from '@material-ui/icons/AddCircleSharp';
import ClearAllIcon from '@material-ui/icons/ClearAll';
import React from 'react';
import TaskList from './TaskList';

export default class ToDo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            complete: 0,
            remain: 0,
            currentItems: {
                text: '',
                key: undefined,
                complete: false,
            },
        };
    }

    onChangeHandler = (e) => {
        this.setState({
            currentItems: {
                text: e.target.value,
                key: Math.floor(Math.random() * 1000),
                complete: false,
            },
        });
    };

    addItem = (e) => {
        const { items, currentItems } = this.state;
        e.preventDefault();
        const newItem = currentItems;
        console.log(currentItems);
        if (newItem.text !== '') {
            const item = [...items, newItem];
            this.setState({
                items: item,
                currentItems: {
                    text: '',
                    key: undefined,
                    complete: false,
                },
            });
        }
        if (newItem.text !== '') {
            const remainedTasks = items.filter((value) => !value.complete);
            const totalRemained = remainedTasks.length + 1;
            this.setState({
                remain: totalRemained,
            });
        }
    };

    completeItem = (id) => {
        const { items } = this.state;
        const item = [...items];
        item[id].complete = true;

        this.setState({
            items: item,
        });
        const completedTasks = items.filter((value) => value.complete);
        const totalComplete = completedTasks.length;
        const remainedTasks = items.filter((value) => !value.complete);
        const totalRemained = remainedTasks.length;

        /*         console.log(completedTasks.length);
        console.log(remainedTasks.length); */

        this.setState({
            complete: totalComplete,
            remain: totalRemained,
        });
    };

    deleteItem = (key, id, comp) => {
        const { items, complete, remain } = this.state;
        if (comp) {
            const filteredItems = items.filter((item) => item.key !== key);
            this.setState({
                items: filteredItems,
                complete: complete - 1,
            });
        } else {
            const filteredItems = items.filter((item) => item.key !== key);
            this.setState({
                items: filteredItems,
                remain: remain - 1,
            });
        }
    };

    deleteAll = () => {
        this.setState({
            items: [],
            complete: 0,
            remain: 0,
            currentItems: {
                text: '',
                key: undefined,
                complete: false,
            },
        });
    };

    render() {
        const { items, complete, remain, currentItems } = this.state;
        return (
            <div>
                <div className="main_container">
                    <div className="center_container">
                        <h1>TODO APP</h1>
                        <div className="task_div">
                            <input
                                type="text"
                                placeholder="Add Task"
                                value={currentItems.text}
                                onChange={this.onChangeHandler}
                            />
                            <IconButton
                                className="newBtn"
                                variant="outlined"
                                color="primary"
                                onClick={this.addItem}
                            >
                                <AddCircleSharpIcon />
                            </IconButton>
                        </div>
                        <div className="Pending_header">Pending Tasks ({remain})</div>
                        <div className="Completed_header">Completed Tasks ({complete})</div>
                        <IconButton className="clearBtn" onClick={this.deleteAll}>
                            <ClearAllIcon />
                        </IconButton>

                        <ol>
                            {items.map((item, index) => (
                                <TaskList
                                    item={item}
                                    id={index}
                                    deleteItem={this.deleteItem}
                                    completeItem={this.completeItem}
                                />
                            ))}
                        </ol>
                    </div>
                </div>
            </div>
        );
    }
}
