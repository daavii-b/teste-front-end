import { cn } from '@/lib/cn'
import fashionIcon from '@/assets/icons/fashion.svg'
import healthIcon from '@/assets/icons/health.svg'
import technologyIcon from '@/assets/icons/monitor-smartphone.svg'
import sportsIcon from '@/assets/icons/sport.svg'
import supermarketIcon from '@/assets/icons/supermarket.svg'
import toolsIcon from '@/assets/icons/tools.svg'
import drinksIcon from '@/assets/icons/whiskey.svg'

type Category = {
  name: string
  href: string
  icon: string
  featured?: boolean
}

const categories: Category[] = [
  { name: 'Tecnologia', href: '#technology', icon: technologyIcon, featured: true },
  { name: 'Supermercado', href: '#supermarket', icon: supermarketIcon },
  { name: 'Bebidas', href: '#drinks', icon: drinksIcon },
  { name: 'Ferramentas', href: '#tools', icon: toolsIcon },
  { name: 'Saúde', href: '#health', icon: healthIcon },
  { name: 'Esportes e Fitness', href: '#sports', icon: sportsIcon },
  { name: 'Moda', href: '#fashion', icon: fashionIcon },
]

export function ShopByCategory() {
  return (
    <nav className="shop-by-category" aria-label="Compre por categoria">
      <ul className="shop-by-category__list">
        {categories.map(({ name, href, icon, featured }) => (
          <li className="shop-by-category__item" key={name}>
            <a className={cn('shop-by-category__link', featured && 'is-featured')} href={href}>
              <span className="shop-by-category__tile" aria-hidden="true">
                <img className="shop-by-category__icon" src={icon} alt={name} />
              </span>
              <span className="shop-by-category__label">{name}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
