import { AiFillDelete } from 'react-icons/ai'
import { useAlert } from 'react-alert'

import './TaskItem.scss'

const TaskItem = ({ task, fatchTasks }) => {
  const alert = useAlert()

  const handleTaskDeletion = async () => {
    try {
      const tasks = JSON.parse(localStorage.getItem('tasks'))
      const filteredTasks = tasks.filter(t => t._id !== task._id)
      localStorage.setItem('tasks', JSON.stringify(filteredTasks))

      await fatchTasks()

      await alert.success('Item removido com sucesso!')
    } catch (_err) {
      await alert.error('Algo de inesperado aconteceu!')
    }
  }

  const handleTaskCompletionChange = async (e) => {
    try {
      const tasks = JSON.parse(localStorage.getItem('tasks'))
      const updatedTasks = tasks.map(t => t._id === task._id ? { ...t, isCompleted: e.target.checked } : t)
      localStorage.setItem('tasks', JSON.stringify(updatedTasks))

      await fatchTasks()

      await alert.success('A tarefa foi modificada com sucesso')
    } catch (_err) {
      await alert.error('Algo inesperado aconteceu')
    }
  }

  return (
        <>
            <div className="task-item-container">
                <div className="task-description">
                    <label className={
                        task.isCompleted
                          ? 'checkbox-container-completed'
                          : 'checkbox-container'
                    }>
                        {task.description}
                        <input type="checkbox"
                            defaultChecked={task.isCompleted}
                            onChange={(e) => handleTaskCompletionChange(e)}
                        />
                        <span
                            className={
                                task.isCompleted
                                  ? 'checkmark completed'
                                  : 'checkmark'
                            }
                        ></span>
                    </label>
                </div>

                <div className="delete">
                    <AiFillDelete
                        size={18}
                        color="#F97474"
                        onClick={handleTaskDeletion}
                    />
                </div>
            </div>
        </>
  )
}

export default TaskItem
