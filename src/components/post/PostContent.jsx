import React from 'react'

function PostContent({bodyText,bodyImg}) {
  return (
    <div className='flex flex-col items-center gap-3 px-5 font-light pb-3' >
        {bodyText&& <p className="text-start w-full">
           {bodyText}
        </p> }


        {
            bodyImg&& <div className="">
                <img src={bodyImg} alt="content image" className=" drop-shadow-sm drop-shadow-neutral-400 dark:drop-shadow-none" />
            </div>
        }
        
    </div>
  )
}

export default PostContent