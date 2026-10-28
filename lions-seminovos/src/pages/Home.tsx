import { Link } from 'react-router-dom'
import { ArrowRight, BadgeCheck, CalendarCheck, ExternalLink, Eye, MessageCircle, Trophy } from 'lucide-react'
import SearchBar from '../components/SearchBar'
import VehicleCard from '../components/VehicleCard'
import VehicleImage from '../components/VehicleImage'
import { HERO_IMAGE, vehicles } from '../data/vehicles'
import { OFFICIAL_SITE } from '../lib/utils'
import DiscountRequestButton from '../components/DiscountRequestButton'

const differentials = [
  { icon: BadgeCheck, title: 'Veículos selecionados', text: 'Um catálogo organizado para você comparar com calma.' },
  { icon: MessageCircle, title: 'Atendimento especializado', text: 'Converse com a equipe para tirar dúvidas sobre cada carro.' },
  { icon: Eye, title: 'Transparência na negociação', text: 'Informações claras sobre ano, quilometragem e preço.' },
  { icon: CalendarCheck, title: 'Facilidade para agendar', text: 'Solicite uma visita em poucos passos, pelo celular ou computador.' },
]

const STORE_IMAGE = 'https://dmmfmlu2mykln.cloudfront.net/site/home/carrossel/foto-88415-desktop.webp'

export default function Home() {
  const featured = vehicles.filter((v) => v.featured).slice(0, 4)

  return (
    <>
      <section className="relative isolate overflow-hidden bg-ink text-white">
        <VehicleImage src={HERO_IMAGE} alt="Esportivo vermelho estacionado em uma rua" className="absolute inset-0 -z-10 h-full w-full opacity-60" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />
        <div className="container-page py-20 sm:py-28 lg:py-36 lg:pb-44">
          <h1 className="max-w-2xl text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">Seu próximo carro está aqui.</h1>
          <p className="mt-5 max-w-xl text-lg text-neutral-200">Encontre o seminovo ideal para você, com qualidade, procedência e confiança.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link to="/catalogo" className="btn-primary">Ver veículos</Link>
            <Link to="/agendar" className="btn border border-white/70 text-white hover:bg-white hover:text-ink">Agende sua visita</Link>
          </div>
        </div>
      </section>

      <div className="container-page relative z-10 -mt-10 lg:-mt-20">
        <SearchBar />
      </div>

      <section className="container-page py-16 sm:py-20" aria-labelledby="destaques">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 id="destaques" className="text-2xl font-extrabold sm:text-3xl">Veículos em destaque</h2>
            <p className="mt-1 text-neutral-600">Seleção demonstrativa do catálogo.</p>
          </div>
          <Link to="/catalogo" className="btn-outline">Ver todo o catálogo <ArrowRight size={16} aria-hidden="true" /></Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((v) => <VehicleCard key={v.id} vehicle={v} />)}
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20" aria-labelledby="diferenciais">
        <div className="container-page">
          <h2 id="diferenciais" className="text-2xl font-extrabold sm:text-3xl">Por que visitar a Lions</h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {differentials.map(({ icon: Icon, title, text }) => (
              <div key={title}>
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-md bg-brand text-white"><Icon size={24} aria-hidden="true" /></span>
                <h3 className="mt-4 text-lg font-bold">{title}</h3>
                <p className="mt-1 text-neutral-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-16 sm:py-20" aria-labelledby="loja">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
          <div className="overflow-hidden rounded-xl bg-neutral-200">
            <img src={STORE_IMAGE} alt="Fachada da loja Lions Seminovos" loading="lazy" className="aspect-[4/3] w-full object-cover" />
          </div>
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-amber-100 px-4 py-2 text-sm font-bold text-amber-900">
              <Trophy size={18} aria-hidden="true" /> Prêmio Reclame Aqui 2026
            </div>
            <h2 id="loja" className="mt-5 text-3xl font-extrabold sm:text-4xl">Uma experiência feita para você escolher com confiança.</h2>
            <p className="mt-4 leading-relaxed text-neutral-600">Conheça a loja e explore as opções de seminovos. Este projeto é uma demonstração independente inspirada na presença pública da Lions Seminovos.</p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a href={OFFICIAL_SITE} target="_blank" rel="noopener noreferrer" className="btn-primary"><ExternalLink size={17} aria-hidden="true" />Conheça a Lions Seminovos</a>
              <DiscountRequestButton className="btn-outline" label="Solicitar um desconto" />
            </div>
          </div>
        </div>
      </section>

      <section className="container-page pb-16 sm:pb-20" aria-label="Condição especial">
        <div className="relative isolate overflow-hidden rounded-2xl bg-brand px-6 py-9 text-white sm:px-10 sm:py-12 lg:px-14">
          <VehicleImage src={HERO_IMAGE} alt="Carro seminovo em destaque" className="absolute inset-0 -z-10 h-full w-full object-cover opacity-20" />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-brand via-brand/90 to-brand/50" />
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-white/80">Condição especial</p>
              <h2 className="mt-2 text-3xl font-extrabold sm:text-4xl">Seu desconto pode estar aqui.</h2>
              <p className="mt-2 max-w-xl text-white/90">Conte qual carro chamou sua atenção e converse com a equipe sobre as condições disponíveis.</p>
            </div>
            <DiscountRequestButton className="btn shrink-0 bg-white text-brand hover:bg-neutral-100" label="Solicitar um desconto" />
          </div>
        </div>
      </section>

      <section className="bg-ink py-16 text-white sm:py-20" aria-labelledby="cta">
        <div className="container-page flex flex-col items-start gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 id="cta" className="text-2xl font-extrabold sm:text-3xl">Conheça os carros pessoalmente.</h2>
            <p className="mt-2 max-w-xl text-neutral-300">Escolha um veículo e solicite uma visita. Nesta demonstração, nenhum agendamento real é registrado.</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link to="/agendar" className="btn-primary">Agende sua visita</Link>
            <a href={OFFICIAL_SITE} target="_blank" rel="noopener noreferrer" className="btn border border-white/70 text-white hover:bg-white hover:text-ink">
              Conheça o site oficial <ExternalLink size={16} aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
