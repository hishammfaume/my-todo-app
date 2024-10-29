import {   FilePenLine, Trash2 } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const TasksList = () => {
  return (
    <>
    <div className='p-6 border border-slate-300 my-3 flex justify-between gap-15'>
        <div>
            <h2 className='font-bold text-2xl'>Title</h2>
            <p>Description</p>
        </div>

        <div className='flex gap-2'>
           <Trash2 /> 
          <Link href="/editTask/123"> <FilePenLine /></Link> 
        </div>
    </div>
    </>
  )
}

export default TasksList