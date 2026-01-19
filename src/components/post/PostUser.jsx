import React from 'react'

function PostUser({userName,imgUrl,time}) {
  return (
       <div className="user flex gap-5 px-3 items-center py-2 ">
        <div className="img w-16 rounded-full p-1 border text-primary-c overflow-hidden drop-shadow-md">
          <img src={imgUrl} alt="user image" className= "object-cover w-full rounded-full aspect-square " />
        </div>

        <div className="user-info flex flex-col items-start">
           <h3 className="capitalize">{userName}</h3>

           <p className="time text-primary-c font-light text-[12px]">{time.replace("T", " ").substring(0, 16)}</p>
        </div>
       
      </div>
  )
}

export default PostUser