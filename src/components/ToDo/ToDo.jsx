import { useSelector } from 'react-redux'

import ToDoItem from '../ToDoItem/ToDoItem'

import style from './ToDo.module.css'

const ToDo = () => {
    const { todos } = useSelector(state => state.todos)

    return (
        <div className={style.todos}>
            {
                todos.map((el) => {
                    return <ToDoItem todo={el} key={el.id} />
                })
            }
        </div>
    )
}

export default ToDo