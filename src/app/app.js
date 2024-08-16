import {Component} from 'react';

import TaskList from '../task-list';
import Footer from '../footer';
import '../index.css';
import AddItem from '../add-item';
import PropTypes from 'prop-types';
export default class App extends Component {
    maxId = 100;
    static defaultProps = {
        // maxId: 100,
        defaultCreated: -1,
        done: false,
        classLi: 'active',
    };

    static propTypes = {
        maxId: PropTypes.number,
        defaultCreated: PropTypes.number,
        done: PropTypes.bool,
        classLi: PropTypes.string,
    };
    state = {
        todoItems: [],
    };
    createTodoItem(label) {
        const date = new Date();

        const defaultCreated = 0;
        return {
            description: label,

            classLi: 'active',
            id: this.maxId++,
            // id: 1,
            done: false,
            dateCreated: date,
            created: `${defaultCreated} minutes ago`,
        };
    }

    deleteItem = id => {
        this.setState(({todoItems}) => {
            const idx = todoItems.findIndex(el => el.id === id);
            const newArray = todoItems.toSpliced(idx, 1);
            return {
                todoItems: newArray,
            };
        });
    };
    addExtraItem = text => {
        const newItem = this.createTodoItem(text);

        this.setState(({todoItems}) => {
            const newArray = [...todoItems, newItem];

            return {
                todoItems: newArray,
            };
        });
    };
    onToggleCompleted = id => {
        this.setState(({todoItems}) => {
            const idx = todoItems.findIndex(el => el.id === id);
            const oldItem = todoItems[idx];
            const newItem = {...oldItem, done: !oldItem.done};

            const newArray = todoItems.toSpliced(idx, 1, newItem);
            return {
                todoItems: newArray,
            };
        });
    };
    onShow = classLi => {
        let completed = [...document.querySelectorAll('.completed')];
        let active = [...document.querySelectorAll('.active')];
        if (classLi === 'active') {
            active.map(el => el.classList.remove('hidden'));
            completed.map(el => el.classList.add('hidden'));
        } else if (classLi === 'completed') {
            active.map(el => el.classList.add('hidden'));
            completed.map(el => el.classList.remove('hidden'));
        } else if (classLi === 'selected') {
            let all = [...document.querySelectorAll('.label')];
            all.map(el => el.classList.remove('hidden'));
        }
    };
    onRemove = () => {
        // let all = [...document.querySelectorAll('.label')]
        // all.map(el => el.remove())
        this.setState(todoItems => {
            return {
                todoItems: [],
            };
        });
    };
    render() {
        const {todoItems} = this.state;
        const toDo = todoItems.length - todoItems.filter(el => el.done).length;

        return (
            <section className="todoapp">
                <header className="header">
                    <h1>Todos</h1>
                    <AddItem addExtraItem={this.addExtraItem} />
                </header>
                <section className="main">
                    <TaskList
                        todos={todoItems}
                        onDeleted={this.deleteItem}
                        onToggleCompleted={this.onToggleCompleted}
                    />

                    <Footer
                        toDo={toDo}
                        onShow={this.onShow}
                        onRemove={this.onRemove}
                    />
                </section>
            </section>
        );
    }
}
