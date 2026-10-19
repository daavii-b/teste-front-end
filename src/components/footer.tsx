import brandLogo from '@/assets/brand-econverse.png'
import facebookIcon from '@/assets/icons/facebook.svg'
import instagramIcon from '@/assets/icons/instagram.svg'
import linkedinIcon from '@/assets/icons/linkedin.svg'

const footerGroups = [
  {
    title: 'Institucional',
    links: ['Sobre Nós', 'Movimento', 'Trabalhe conosco'],
  },
  {
    title: 'Ajuda',
    links: ['Suporte', 'Fale Conosco', 'Perguntas Frequentes'],
  },
  {
    title: 'Termos',
    links: ['Termos e Condições', 'Política de Privacidade', 'Troca e Devolução'],
  },
]

function Newsletter() {
  return (
    <section className="site-newsletter" aria-labelledby="newsletter-title">
      <div className="site-newsletter__inner">
        <div className="site-newsletter__info">
          <h2 className="site-newsletter__title" id="newsletter-title">
            Inscreva-se na nossa newsletter
          </h2>
          <p className="site-newsletter__description">
            Assine a nossa newsletter e receba as novidades e conteúdos exclusivos da Econverse.
          </p>
        </div>

        <form className="site-newsletter__form" onSubmit={(event) => event.preventDefault()}>
          <label className="visually-hidden" htmlFor="newsletter-name">
            Digite seu nome
          </label>
          <input id="newsletter-name" name="name" placeholder="Digite seu nome" />
          <label className="visually-hidden" htmlFor="newsletter-email">
            Digite seu e-mail
          </label>
          <input id="newsletter-email" name="email" type="email" placeholder="Digite seu e-mail" />
          <button className="site-newsletter__submit" type="submit">
            Inscrever
          </button>
          <label className="site-newsletter__consent">
            <input name="consent" type="checkbox" />
            <span>Aceito os termos e condições</span>
          </label>
        </form>
      </div>
    </section>
  )
}

function FooterLinks() {
  return (
    <nav className="site-footer__links" aria-label="Links do rodapé">
      {footerGroups.map(({ title, links }) => (
        <section className="site-footer__link-group" key={title}>
          <h3>{title}</h3>
          <ul>
            {links.map((link) => (
              <li key={link}>
                <a href={`#${link.toLowerCase().replaceAll(' ', '-')}`}>{link}</a>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </nav>
  )
}

function FooterBrand() {
  return (
    <section className="site-footer__brand" aria-label="Econverse nas redes sociais">
      <img className="site-footer__logo" src={brandLogo} alt="Econverse" />
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <div className="site-footer__social-links" aria-label="Redes sociais">
        <a href="#instagram" aria-label="Instagram">
          <img src={instagramIcon} alt="" aria-hidden="true" />
        </a>
        <a href="#facebook" aria-label="Facebook">
          <img src={facebookIcon} alt="" aria-hidden="true" />
        </a>
        <a href="#linkedin" aria-label="LinkedIn">
          <img src={linkedinIcon} alt="" aria-hidden="true" />
        </a>
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="site-footer">
      <Newsletter />
      <div className="site-footer__main">
        <div className="site-footer__inner">
          <FooterBrand />
          <FooterLinks />
        </div>
      </div>
      <div className="site-footer__copyright">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </footer>
  )
}
