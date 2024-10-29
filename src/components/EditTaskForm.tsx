import React from 'react'
import { Button } from './ui/button'
import { Textarea } from './ui/textarea'
import { Label } from './ui/label'
import { Input } from './ui/input'

const EditTaskForm = () => {
  return (
    <form className='flex flex-col gap-3' action="">
    <div  className="grid w-full max-w-sm items-center gap-1.5">
    <div className="grid w-full max-w-sm items-center gap-1.5">
    <Label htmlFor='title'>Title</Label>
     <Input
    type= "text"
    placeholder= "Title"
    id='title'
    />   
    </div>
    <div className="grid w-full max-w-sm items-center gap-1.5">
    <Label htmlFor='desc'>Description</Label>
    <Textarea
    placeholder= "Description"
    id='desc'
    />   
    </div>
    <Button variant={"default"}>Add Task</Button>
    </div> 
</form>
  )
}

export default EditTaskForm