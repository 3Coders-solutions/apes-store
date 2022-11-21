import Image from 'next/image'
import styles from './Banner.module.css'
import ResponsiveImage from '@components/ResponsiveImage'

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
      <ResponsiveImage 
        imgSrc={imgSrc}
        imgAlt={imgAlt}
      />
    </div>
  )
}

export default Banner
