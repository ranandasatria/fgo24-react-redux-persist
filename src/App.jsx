import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo } from './redux/reducers/users'
import TodoItem from './components/TodoItems'

function App() {
  const { register, reset, handleSubmit } = useForm()
  
  const dispatch = useDispatch()

  const todos = useSelector(state => state.users.data)

  const onSubmit = (data) => {
    dispatch(addTodo(data))
    reset()
  }

  return (
    <div className='min-h-screen bg-red-50 p-8'>
      <div className='max-w-xl mx-auto bg-white shadow-md rounded-lg p-6'>
        <h1 className='text-2xl font-bold mb-4 text-red-600'>Get things done!</h1>
        <form onSubmit={handleSubmit(onSubmit)} className='flex items-center gap-2 mb-6'>
          <input
            type="text"
            className='flex-grow border rounded px-4 py-2 focus:outline-red-600'
            placeholder='Add a new task ...'
            {...register('todo')}
          />
          <button
            type='submit'
            className='bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700'
          >Add</button>
        </form>
        <ul className='space-y-2'>
          {todos.map((todoItem, index) => (
            <TodoItem 
              key={todoItem.id} 
              todoItem={todoItem} 
              index={index}
            />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default App