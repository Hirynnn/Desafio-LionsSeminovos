import { Link } from 'react-router-dom'
import { Fuel, Gauge, Settings2 } from 'lucide-react'
import VehicleImage from './VehicleImage'
import { formatKm, formatPrice } from '../lib/utils'
import { transmissionLabels } from '../data/vehicles'
import type { Vehicle } from '../types/vehicle'
import DiscountRequestButton from './DiscountRequestButton'

export default function VehicleCard({ vehicle: v }: { vehicle: Vehicle }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-lg border border-neutral-200 bg-white transition-shadow hover:shadow-lg">
      <div className="aspect-[4/3] overflow-hidden bg-neutral-200">
        <VehicleImage src={v.image} alt={`${v.brand} ${v.model} ${v.version}, ${v.year}`} className="h-full w-full transition-transform duration-500 group-hover:scale-105" />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="text-sm font-semibold text-neutral-600">{v.brand}</p>
        <h3 className="text-lg font-bold leading-tight">{v.model}</h3>
        <p className="text-sm text-neutral-600">{v.version}</p>

        <ul className="mt-4 grid grid-cols-2 gap-x-3 gap-y-2 text-sm text-neutral-700">
          <li>{v.year}</li>
          <li className="flex items-center gap-1.5"><Gauge size={15} aria-hidden="true" />{formatKm(v.km)}</li>
          <li className="flex items-center gap-1.5"><Settings2 size={15} aria-hidden="true" />{transmissionLabels[v.transmission]}</li>
          <li className="flex items-center gap-1.5"><Fuel size={15} aria-hidden="true" />{v.fuel}</li>
        </ul>

        <p className="mt-5 text-2xl font-extrabold">{formatPrice(v.price)}</p>
        <div className="mt-4 grid gap-2">
          <Link to={`/veiculo/${v.id}`} className="btn-dark" aria-label={`Ver detalhes do ${v.brand} ${v.model} ${v.version}`}>Ver detalhes</Link>
          <DiscountRequestButton className="btn-outline w-full" vehicleName={`${v.brand} ${v.model} ${v.version}`} label="Solicitar um desconto" />
        </div>
      </div>
    </article>
  )
}
