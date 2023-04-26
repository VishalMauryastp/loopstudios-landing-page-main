import React from 'react'

const Grid = ({MimgSrc,imgSrc,fname,lname}) => {
  return (
    <div className='w-[100%]   xl:  relative'
    // style={{background:` no-repeat top/cover url(${imgSrc})  `}}
     >
      <picture className=''>
        <source className='w-full' media='(max-width:769px)' srcSet={MimgSrc} />
        <img className=' mx-auto my-0 md:h-[450px]' src={imgSrc} alt="image" />
      </picture>
        <h4 className='absolute max-w-[178px]   text-2xl pl-7 pb-5 bottom-0 uppercase text-white'>
            {fname} <br/> {lname}
        </h4>
    </div>
  )
}
export default Grid