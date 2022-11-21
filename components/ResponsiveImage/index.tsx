import Image from 'next/image'

type ImgProps = {
  imgSrc: string,
  imgAlt: string
}

const ResponsiveImage = ({ imgSrc, imgAlt }: ImgProps) => {
  return (
    <div className='image-container'>
        <Image 
          className='image'
          src={imgSrc} 
          alt={imgAlt}
          layout="fill"
        />
      </div>
  )
}

export default ResponsiveImage
