import Image from 'next/image'
import styles from './Banner.module.css'

type BannerProps = {
  title: string,
  imgSrc: string,
  imgAlt: string,
  center?: boolean
}

const Banner = ({ title, imgSrc, imgAlt, center }: BannerProps) => {
  return (
    <div className={`${center ? styles.centeredBanner : styles.banner}`}>
      <h2>{title}</h2>
      <div className='image-container'>
        <Image 
          className='image'
          src={imgSrc} 
          alt={imgAlt}
          layout="fill"
        />
      </div>
    </div>
  )
}

export default Banner
