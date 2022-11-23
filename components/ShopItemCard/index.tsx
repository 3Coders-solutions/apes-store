import ResponsiveImage from '@components/ResponsiveImage'
import Image from 'next/image'
import Link from 'next/link'
import styles from './ShopItemCard.module.css'

type ShopItemProps = {
  id: string | number,
  name: string,
  description: string,
  imgSrc: string,
  price: number
}

const ShopItemCard = ({ id, name, description, imgSrc, price }: ShopItemProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.card__titleContainer}>
        <h3 className={styles.card__itemTitle}>{name}</h3>
      </div>
      <div className={styles.card__itemDescription}>
        <div className={styles.card__imageContainer}>
          <Image className={styles.card__itemImage} src={imgSrc} alt={name} height={150} width={150} />
        </div>
        <p>{description}</p>
      </div>
      <h3 className={styles.card__price}>${price}</h3>
      <Link href={`/clothing/products/${id}`}>
        <a className='button-link'>Ver</a>
      </Link>
    </div>
  )
}

export default ShopItemCard
