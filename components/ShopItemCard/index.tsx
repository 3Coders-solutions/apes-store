import Image from 'next/image'
import styles from './ShopItemCard.module.css'

type ShopItemProps = {
  name: string,
  description: string,
  imgSrc: string,
  price: number
}

const ShopItemCard = ({ name, description, imgSrc, price }: ShopItemProps) => {
  return (
    <div className={styles.card}>
      <h3>{name}</h3>
      <div>
        <Image src={imgSrc} alt={name} height={150} width={150} />
        <p>{description}</p>
        <h3>${price}</h3>
      </div>
    </div>
  )
}

export default ShopItemCard
