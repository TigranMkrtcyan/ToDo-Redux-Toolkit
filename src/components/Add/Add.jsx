import { useDispatch, useSelector } from 'react-redux';
import { changeText, postasyncToDo } from '../../store/Slices/todoSlice';
import style from './Add.module.css';

const Add = () => {
    const dispatch = useDispatch();
    const { text } = useSelector(state => state.todos);

    const handleAdd = () => {
        if(text.trim()) {    
            const item = {
                id: Date.now(),
                title: text,
                completed: false
            };
            dispatch(postasyncToDo(item));
        }
    };

    return (
        <div className={style.add}>
            <input 
                value={text} 
                onChange={(e) => dispatch(changeText(e.target.value))} 
                placeholder="Add new todo"
                className= {style.inp}
            />
            <button onClick={handleAdd} className= {style.btn}>+</button>
        </div>
    );
};

export default Add;