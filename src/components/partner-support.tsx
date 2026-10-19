import type { CSSProperties } from 'react'
import partnerImage from '@/assets/partners.png'

const partners = ['partner-primary', 'partner-secondary']

const partnerImageStyle: CSSProperties & { '--partner-image': string } = {
  '--partner-image': `url("${partnerImage}")`,
}

export function PartnerSupport() {
  return (
    <section className="partner-support" aria-label="Conheça nossos parceiros">
      {partners.map((partner) => (
        <article
          className="partner-support__card"
          key={partner}
          style={partnerImageStyle}
          aria-labelledby={`${partner}-title`}
        >
          <div className="partner-support__content">
            <h2 className="partner-support__title" id={`${partner}-title`}>
              Parceiros
            </h2>
            <p className="partner-support__description">Lorem ipsum dolor sit amet, consectetur</p>
            <a className="partner-support__link" href="#partners">
              Confira
            </a>
          </div>
        </article>
      ))}
    </section>
  )
}
