import styles from './Banner.module.css'
import ResponsiveImage from '@components/ResponsiveImage'

type BannerProps = {
  title: string,
  imgSrc: string,
  imgAlt: string
}

const Banner = ({ title, imgSrc, imgAlt }: BannerProps) => {
  return (
    <div className={styles.banner}>
      <h2>{title}</h2>
      <ResponsiveImage 
        imgSrc={imgSrc}
        imgAlt={imgAlt}
      />
    </div>
  )
}

export default Banner
