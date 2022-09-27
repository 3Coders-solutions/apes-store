import Image from 'next/image'
import styles from './Banner.module.css'

type BannerProps = {
  title: string,
  imgSrc: string,
  imgAlt: string
}

const Banner = ({ title, imgSrc, imgAlt }: BannerProps) => {
  return (
    <div className={styles.banner}>
      <h2>{title}</h2>
      <div>
        <Image 
          src={imgSrc} 
          alt={imgAlt}
          width={300}
          height={300}
        />
      </div>
    </div>
  )
}

export default Banner
