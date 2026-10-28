import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const links = [
  { to: '/', label: 'Início', end: true },
  { to: '/catalogo', label: 'Catálogo', end: false },
  { to: '/agendar', label: 'Agende uma visita', end: false },
]

export const Logo = ({ light = false }: { light?: boolean }) => (
  <span className="flex items-baseline gap-1.5 text-xl font-extrabold tracking-tight">
    <span className={light ? 'text-white' : 'text-ink'}>LIONS</span>
    <span className="text-brand">SEMINOVOS</span>
  </span>
)

const navCls = ({ isActive }: { isActive: boolean }) =>
  `rounded-md px-3 py-2 text-sm font-semibold transition-colors ${isActive ? 'text-brand' : 'text-ink hover:text-brand'}`

export default function Header() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => setOpen(false), [pathname])

  return (
    <header className="sticky top-0 z-40 border-b border-neutral-200 bg-white/95 backdrop-blur">
      <div className="container-page flex h-16 items-center justify-between">
        <Link to="/" aria-label="Lions Seminovos — página inicial"><Logo /></Link>

        <nav aria-label="Principal" className="hidden items-center gap-2 md:flex">
          {links.map((l) => <NavLink key={l.to} to={l.to} end={l.end} className={navCls}>{l.label}</NavLink>)}
          <Link to="/agendar" className="btn-primary ml-3">Fale conosco</Link>
        </nav>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-neutral-300 md:hidden"
          aria-expanded={open}
          aria-controls="menu-mobile"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <nav id="menu-mobile" aria-label="Menu mobile" className="border-t border-neutral-200 bg-white md:hidden">
          <div className="container-page flex flex-col gap-1 py-3">
            {links.map((l) => (
              <NavLink key={l.to} to={l.to} end={l.end} className={(s) => `${navCls(s)} flex min-h-[44px] items-center text-base`}>{l.label}</NavLink>
            ))}
            <Link to="/agendar" className="btn-primary mt-2">Fale conosco</Link>
          </div>
        </nav>
      )}
    </header>
  )
}
