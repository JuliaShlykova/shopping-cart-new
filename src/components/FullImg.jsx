import React, { useEffect, useLayoutEffect } from 'react'

const FullImg = ({imgUrl, setFullImgUrl}) => {

  useEffect(() => {
    const handleClick = () => {
      console.log('clicked');
      setFullImgUrl('');
    };
    document.addEventListener('mousedown', handleClick);
    // 'click' clicked when component is mounted, not after

    return () => {
      document.removeEventListener('mousedown', handleClick);
    }
  }, [setFullImgUrl])

  return (
    <div className='full-img-container'>
      <img src={imgUrl} alt='' />
    </div>
  )
}

export default FullImg