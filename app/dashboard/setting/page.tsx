import { UserProfile } from '@clerk/nextjs'
import React from 'react'

function settings(){
    return(
        <div className='flex items-center justify-center h-full p-3'>
              <UserProfile/>
        </div>
    )
}
export default settings