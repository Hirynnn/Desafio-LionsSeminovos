import { Link, useParams } from 'react-router-dom'
import { CalendarCheck, ChevronLeft, ExternalLink } from 'lucide-react'
import VehicleImage from '../components/VehicleImage'
import NotFound from './NotFound'
import { categoryLabels, getVehicleById, transmissionLabels } from '../data/vehicles'
import { OFFICIAL_SITE, formatKm, formatPrice } from '../lib/utils'

export default function VehicleDetails() {
  const { id } = useParams()
  const v = getVehicleById(id)
  if (!v) return <NotFound />

  const specs = [
    ['Ano', String(v.year)],
    ['Quilometragem', formatKm(v.km)],
    ['Câmbio', transmissionLabels[v.transmission]],
    ['Combustível', v.fuel],
    ['Categoria', categoryLabels[v.category]],
  ]

  return (
    <div className="container-page py-8 sm:py-12">
      <Link to="/catalogo" className="inline-flex min-h-[44px] items-center gap-1 text-sm font-semibold text-neutral-700 hover:text-brand">
        <ChevronLeft size={18} aria-hidden="true" />Voltar ao catálogo
      </Link>

      <div className="mt-4 grid gap-8 lg:grid-cols-[1.4fr_1fr]">
        <div className="overflow-hidden rounded-lg bg-neutral-200">
          <VehicleImage src={v.image} alt={`${v.brand} ${v.model} ${v.version}, ${v.year}`} className="aspect-[4/3] w-full" />
        </div>

        <div>
          <p className="font-semibold text-neutral-600">{v.brand}</p>
          <h1 className="text-3xl font-extrabold">{v.model}</h1>
          <p className="text-neutral-600">{v.version}</p>
          <p className="mt-5 text-4xl font-extrabold">{formatPrice(v.price)}</p>

          <dl className="mt-6 divide-y divide-neutral-200 rounded-lg border border-neutral-200 bg-white">
            {specs.map(([k, val]) => (
              <div key={k} className="flex justify-between px-4 py-3 text-sm"><dt className="text-neutral-600">{k}</dt><dd className="font-semibold">{val}</dd></div>
            ))}
          </dl>

          <h2 className="mt-6 font-bold">Itens de destaque</h2>
          <ul className="mt-2 list-inside list-disc space-y-1 text-neutral-700">
            {v.highlights.map((h) => <li key={h}>{h}</li>)}
          </ul>

          <div className="mt-8 flex flex-col gap-3">
            <Link to={`/agendar?veiculo=${v.id}`} className="btn-primary"><CalendarCheck size={18} aria-hidden="true" />Agendar visita para este veículo</Link>
            <a href={OFFICIAL_SITE} target="_blank" rel="noopener noreferrer" className="btn-outline">Conheça o site oficial <ExternalLink size={16} aria-hidden="true" /></a>
          </div>
          <p className="mt-4 text-xs text-neutral-600">Veículo e valores demonstrativos, sem vínculo com anúncios reais.</p>
        </div>
      </div>
    </div>
  )
}
