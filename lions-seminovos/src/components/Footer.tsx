import { Link } from 'react-router-dom'
import { ExternalLink } from 'lucide-react'
import { Logo } from './Header'
import { OFFICIAL_SITE } from '../lib/utils'

export default function Footer() {
  return (
    <footer className="mt-auto bg-ink text-neutral-300">
      <div className="container-page grid gap-10 py-12 md:grid-cols-3">
        <div>
          <Logo light />
          <p className="mt-4 max-w-xs text-sm leading-relaxed">
            Projeto de front-end inspirado na identidade da Lions Seminovos, criado como desafio técnico. Não é o site oficial da loja.
          </p>
        </div>
        <nav aria-label="Rodapé">
          <h2 className="text-sm font-bold text-white">Navegação</h2>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link className="hover:text-white" to="/">Início</Link></li>
            <li><Link className="hover:text-white" to="/catalogo">Catálogo</Link></li>
            <li><Link className="hover:text-white" to="/agendar">Agende uma visita</Link></li>
          </ul>
        </nav>
        <div>
          <h2 className="text-sm font-bold text-white">Site oficial</h2>
          <p className="mt-4 text-sm">Para informações reais de estoque, endereço e contato, acesse o site da loja.</p>
          <a href={OFFICIAL_SITE} target="_blank" rel="noopener noreferrer" className="btn-outline mt-4 !border-neutral-600 !bg-transparent !text-white hover:!border-white">
            Conheça o site oficial <ExternalLink size={16} aria-hidden="true" />
          </a>
          <div className="mt-5 flex flex-wrap gap-4 text-sm">
            <a href="https://www.instagram.com/lionsseminovos/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 hover:text-white">Instagram <ExternalLink size={14} aria-hidden="true" /></a>
            <a href="https://www.facebook.com/lionsseminovos" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 hover:text-white">Facebook <ExternalLink size={14} aria-hidden="true" /></a>
          </div>
        </div>
      </div>
      <div className="border-t border-neutral-700">
        <p className="container-page py-5 text-xs text-neutral-400">
          Os veículos, preços e agendamentos apresentados são demonstrativos e não representam anúncios reais. Imagens ilustrativas.
        </p>
      </div>
    </footer>
  )
}
