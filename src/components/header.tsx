import {
  ChevronDown,
  CreditCard,
  Crown,
  Heart,
  Package,
  Search,
  ShieldCheck,
  ShoppingCart,
  Truck,
  UserRound,
  type LucideIcon,
} from 'lucide-react'
import econverseLogo from '@/assets/brand-econverse.png'

type Benefit = {
  icon: LucideIcon
  emphasis: string
  before?: string
  after?: string
}

const benefits: Benefit[] = [
  { icon: ShieldCheck, before: 'Compra', emphasis: '100% segura' },
  { icon: Truck, emphasis: 'Frete grátis', after: 'acima de R$ 200' },
  { icon: CreditCard, emphasis: 'Parcele', after: 'suas compras' },
]

type Category = {
  label: string
  href: string
  hasMenu?: boolean
  highlighted?: boolean
  icon?: typeof Crown
}

const categories: Category[] = [
  { label: 'Todas categorias', href: '#categories', hasMenu: true },
  { label: 'Supermercado', href: '#supermercado' },
  { label: 'Livros', href: '#books' },
  { label: 'Moda', href: '#fashion' },
  { label: 'Lançamentos', href: '#launches' },
  { label: 'Ofertas do dia', href: '#deals', highlighted: true },
  { label: 'Assinatura', href: '#subscription', icon: Crown },
]

function BenefitsBar() {
  return (
    <div className="benefits-bar">
      <ul className="benefits-list container">
        {benefits.map(({ icon: Icon, before, emphasis, after }) => (
          <li className="benefit-item" key={emphasis}>
            <Icon className="benefit-icon" aria-hidden="true" size={20} strokeWidth={2} />
            <p className="benefit-copy">
              {before && <span>{before} </span>}
              <strong>{emphasis}</strong>
              {after && <span> {after}</span>}
            </p>
          </li>
        ))}
      </ul>
    </div>
  )
}

function Brand() {
  return (
    <a className="header-brand" href="/" aria-label="Econverse, página inicial">
      <h1>
        <img src={econverseLogo} alt="Econverse" />
      </h1>
    </a>
  )
}

function SearchForm() {
  return (
    <form className="header-search" role="search" action="/">
      <label className="visually-hidden" htmlFor="site-search">
        Buscar produtos
      </label>
      <input id="site-search" name="q" type="search" placeholder="O que você está buscando?" />
      <button type="submit" aria-label="Pesquisar">
        <Search aria-hidden="true" size={20} strokeWidth={1.8} />
      </button>
    </form>
  )
}

function HeaderActions() {
  return (
    <div className="header-actions" role="group" aria-label="Acesso rápido">
      <button className="header-action" type="button" aria-label="Favoritos">
        <Heart aria-hidden="true" size={22} />
      </button>
      <button className="header-action" type="button" aria-label="Meus pedidos">
        <Package aria-hidden="true" size={22} />
      </button>
      <button className="header-action" type="button" aria-label="Minha conta">
        <UserRound aria-hidden="true" size={22} />
      </button>
      <button className="header-action" type="button" aria-label="Carrinho">
        <ShoppingCart aria-hidden="true" size={22} />
      </button>
    </div>
  )
}

function CategoryNav() {
  return (
    <nav id="categories" className="category-nav" aria-label="Categorias principais">
      <ul className="category-list container">
        {categories.map(({ label, href, hasMenu, highlighted, icon: Icon }) => (
          <li key={label}>
            <a
              className={highlighted ? 'category-link is-highlighted' : 'category-link'}
              href={href}
            >
              {Icon && <Icon aria-hidden="true" size={15} strokeWidth={1.8} />}
              <span>{label}</span>
              {hasMenu && <ChevronDown aria-hidden="true" size={14} />}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export function Header() {
  return (
    <header className="site-header">
      <BenefitsBar />
      <div className="main-header container">
        <Brand />
        <SearchForm />
        <HeaderActions />
      </div>
      <CategoryNav />
    </header>
  )
}
