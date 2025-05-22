import { useDispatch } from 'react-redux'
import { toggleTodo, deleteTodo, editTodo } from '../redux/reducers/users'
import React from 'react'
import { useForm } from 'react-hook-form'

function TodoItem({ todoItem, index }) {
  const [showPopup, setShowPopup] = React.useState(false)
 const { register, handleSubmit, reset } = useForm({
    
  }) 
  const dispatch = useDispatch()

  const onSubmit = (data) => {
    dispatch(editTodo({ index, todo: data.todo }))
    setShowPopup(false)
    reset()
  }

  const handleChange = () => {
    dispatch(toggleTodo(index))
  }

  const handleDelete = () => {
    dispatch(deleteTodo(index))
  }

  const handleEdit = () => {
    setShowPopup(true)
  }

  return (
    <>
      <li className="flex items-center justify-between p-3 bg-gray-50 rounded hover:bg-gray-200">
        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            checked={todoItem.completed}
            onChange={handleChange}
            className="h-5 w-5 accent-red-500 cursor-pointer"
          />
          <span
            className={`${
              todoItem.completed ? 'line-through text-gray-400' : 'text-gray-800'
            }`}
          >
            {todoItem.todo}
          </span>
        </div>
        <div className="flex gap-2">
          <button
            onClick={handleEdit}
            className="text-blue-400 font-semibold cursor-pointer hover:text-blue-600 text-sm"
            title="Edit"
          >
            Edit
          </button>
          <button
            onClick={handleDelete}
            className="text-red-400 hover:text-red-600 text-xl"
            title="Delete"
          >
            🗑
          </button>
        </div>
      </li>
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
              <input
                type="text"
                className="flex-grow border rounded px-4 py-2 focus:outline-red-600"
                placeholder="Edit task ..."
                {...register('todo')}
              />
              <div className="flex gap-2">
                <button
                  type="submit"
                  className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
                >
                  Save
                </button>
                <button
                  type="button"
                  onClick={() => setShowPopup(false)}
                  className="text-orange-500 px-4 py-2 hover:underline"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  )
}

export default TodoItem