import { getasyncToDo } from './store/Slices/todoSlice'
import { useDispatch, useSelector } from 'react-redux'

import { useEffect } from 'react'

import Add from './components/Add/Add'
import ToDo from './components/ToDo/ToDo'

import './App.css'

function App() {
  const dispatch = useDispatch()
  const { loading } = useSelector(state => state.todos)

  useEffect(() => {
    dispatch(getasyncToDo())
  }, [])

  return (
    <div className="app">
      {
        loading ? <div className='loader'></div> :
          <>
            <Add />
            <ToDo />
          </>
      }
    </div>
  )
}

export default App
