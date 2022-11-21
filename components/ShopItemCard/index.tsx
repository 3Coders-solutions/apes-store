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
      <h3 className={styles.card__itemTitle}>{name}</h3>
      <div className={styles.card__itemDescription}>
        <Image className={styles.card__itemImage} src={imgSrc} alt={name} height={150} width={150} />
        <p>{description}</p>
      </div>
      <Link href={`/clothing/products/${id}`}>
        <a className='button-link'>Ver</a>
      </Link>
      <h3 className={styles.card__price}>${price}</h3>
    </div>
  )
}

export default ShopItemCard
