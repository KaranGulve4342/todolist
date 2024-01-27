import React from 'react'
import sample_image from '../../assets/sample_image.jpg'
import Image from 'next/image'

const page = () => {
  return (
    <div>
        We will show Image here
        <Image src={sample_image} alt='Sample Image' />
        <Image src={sample_image} alt='Sample Image' width={500}/>
    </div>
  )
}

export default page