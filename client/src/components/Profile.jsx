import React from 'react'
import Navbar from './shared/Navbar'

const Profile = () => {
  return (
    <div>
      <Navbar/>
      <div>
        <div className='flex items-center gap-4'>
                        <Avatar className="h-24 w-24">
                            <AvatarImage src="https://www.shutterstock.com/image-vector/circle-line-simple-design-logo-600nw-2174926871.jpg" alt="profile" />
                        </Avatar>
                        <div>
                            <h1 className='font-medium text-xl'>{user?.fullname}</h1>
                            <p>{user?.profile?.bio}</p>
                        </div>
                    </div>
      </div>
    </div>
  )
}

export default Profile
