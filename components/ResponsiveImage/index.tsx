import Image from 'next/image'
import styles from './ResponsiveImage.module.css'

type ImgProps = {
  imgSrc: string,
  imgAlt: string
}

const ResponsiveImage = ({ imgSrc, imgAlt }: ImgProps) => {
  return (
    <div className={styles.imageContainer}>
      <Image 
        className={styles.image}
        src={imgSrc} 
        alt={imgAlt}
        layout="fill"
      />
    </div>
  )
}

export default ResponsiveImage
