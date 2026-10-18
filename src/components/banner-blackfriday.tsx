import { type CSSProperties } from 'react'
import bannerImage from '@/assets/blackfriday-banner.png'

const bannerStyle: CSSProperties & { '--banner-image': string } = {
  '--banner-image': `url("${bannerImage}")`,
}

export function BannerBlackFriday() {
  return (
    <section
      className="banner-blackfriday"
      aria-labelledby="black-friday-title"
      style={bannerStyle}
    >
      <div className="banner-blackfriday__content container">
        <h2 className="banner-blackfriday__title" id="black-friday-title">
          Venha conhecer nossas promoções
        </h2>
        <p className="banner-blackfriday__offer">
          <strong>50% Off</strong> nos produtos
        </p>
        <a className="banner-blackfriday__link" href="#categories">
          Ver produto
        </a>
      </div>
    </section>
  )
}
