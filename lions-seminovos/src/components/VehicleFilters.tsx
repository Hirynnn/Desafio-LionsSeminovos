import Select from './Select'
import { MIN_YEARS, PRICE_STEPS, brands, categoryLabels, modelsByBrand, transmissionLabels } from '../data/vehicles'
import { formatPrice } from '../lib/utils'
import type { FilterKey, Filters } from '../types/vehicle'

interface Props {
  filters: Filters
  onChange: (key: FilterKey, value: string) => void
  onClear: () => void
  activeCount: number
}

export default function VehicleFilters({ filters, onChange, onClear, activeCount }: Props) {
  return (
    <form className="space-y-4" onSubmit={(e) => e.preventDefault()} aria-label="Filtros do catálogo">
      <Select id="f-marca" label="Marca" placeholder="Todas" value={filters.brand} onChange={(v) => onChange('brand', v)} options={brands.map((b) => ({ value: b, label: b }))} />
      <Select id="f-modelo" label="Modelo" placeholder="Todos" value={filters.model} onChange={(v) => onChange('model', v)} options={modelsByBrand(filters.brand).map((m) => ({ value: m, label: m }))} />
      <Select id="f-preco" label="Preço máximo" placeholder="Sem limite" value={filters.maxPrice} onChange={(v) => onChange('maxPrice', v)} options={PRICE_STEPS.map((p) => ({ value: String(p), label: `Até ${formatPrice(p)}` }))} />
      <Select id="f-ano" label="Ano mínimo" placeholder="Qualquer" value={filters.minYear} onChange={(v) => onChange('minYear', v)} options={MIN_YEARS.map((y) => ({ value: String(y), label: `${y} ou mais novo` }))} />
      <Select id="f-categoria" label="Categoria" placeholder="Todas" value={filters.category} onChange={(v) => onChange('category', v)} options={Object.entries(categoryLabels).map(([value, label]) => ({ value, label }))} />
      <Select id="f-cambio" label="Câmbio" placeholder="Todos" value={filters.transmission} onChange={(v) => onChange('transmission', v)} options={Object.entries(transmissionLabels).map(([value, label]) => ({ value, label }))} />
      <button type="button" onClick={onClear} disabled={activeCount === 0} className="btn-outline w-full disabled:cursor-not-allowed disabled:opacity-50">
        Limpar filtros{activeCount > 0 ? ` (${activeCount})` : ''}
      </button>
    </form>
  )
}
