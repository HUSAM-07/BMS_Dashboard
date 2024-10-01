'use client'

import { useState } from 'react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Checkbox } from '@/components/ui/checkbox'

const initialTasks = [
  { id: 1, title: 'Design new logo', completed: false },
  { id: 2, title: 'Update sponsorship deck', completed: true },
  { id: 3, title: 'Prepare for next race', completed: false },
]

export default function TaskList() {
  const [tasks, setTasks] = useState(initialTasks)
  const [newTaskTitle, setNewTaskTitle] = useState('')

  const addTask = () => {
    if (newTaskTitle.trim()) {
      setTasks([...tasks, { id: Date.now(), title: newTaskTitle, completed: false }])
      setNewTaskTitle('')
    }
  }

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ))
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Team Tasks</CardTitle>
        <CardDescription>Manage and track team tasks</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex mb-4">
          <Input
            value={newTaskTitle}
            onChange={(e) => setNewTaskTitle(e.target.value)}
            placeholder="Enter new task"
            className="mr-2"
          />
          <Button onClick={addTask}>Add Task</Button>
        </div>
        <ul>
          {tasks.map(task => (
            <li key={task.id} className="flex items-center mb-2">
              <Checkbox
                checked={task.completed}
                onCheckedChange={() => toggleTask(task.id)}
                className="mr-2"
              />
              <span className={task.completed ? 'line-through' : ''}>{task.title}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}