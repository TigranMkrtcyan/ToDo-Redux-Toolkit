import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { deleteasyncToDo, patchasyncToDo } from '../../store/Slices/todoSlice'

import style from './ToDoItem.module.css'

const ToDoItem = ({ todo }) => {
    const dispatch = useDispatch()
    const [edit, setEdit] = useState(false)
    const [edittext, setEditText] = useState(todo.title)

    const handleToggleComplete = () => {
        dispatch(patchasyncToDo({
            id: todo.id,
            data: { completed: !todo.completed }
        }))
    }

    const remove = (id) => {
        dispatch(deleteasyncToDo(id))
    }

    return (
        <div className={style.todo}>
            <input
                type="checkbox"
                checked={todo.completed}
                onChange={handleToggleComplete}
            />
            {
                edit ? <input
                    value={edittext}
                    onChange={(e) => setEditText(e.target.value)}
                    className={style.inp}
                />
                    :
                    <span className={todo.completed ? style.line : style.title}>{edittext}</span>
            }
            <div className= {style.btns}>
                <button onClick={() => setEdit(!edit)} className={style.delete}>{edit ? "Save" : "Edit"}</button>
                <button onClick={() => remove(todo.id)} className={style.delete}>Delete</button>
            </div>
        </div>
    )
}

export default ToDoItem