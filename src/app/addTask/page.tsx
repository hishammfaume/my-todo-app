import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import React from 'react'

const addTask = () => {
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

export default addTask;