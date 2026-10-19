import brandLogo from '@/assets/brand-econverse.png'

const brands = [1, 2, 3, 4, 5]

export function BrandNavigation() {
  return (
    <section className="brand-navigation" aria-labelledby="brand-navigation-title">
      <h2 className="brand-navigation__title" id="brand-navigation-title">
        Navegue por marcas
      </h2>

      <div className="brand-navigation__viewport">
        <ul className="brand-navigation__list">
          {brands.map((brand) => (
            <li className="brand-navigation__item" key={brand}>
              <div className="brand-navigation__tile">
                <img className="brand-navigation__logo" src={brandLogo} alt="Econverse" />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
