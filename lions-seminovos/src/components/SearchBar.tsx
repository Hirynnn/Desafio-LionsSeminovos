import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Search } from 'lucide-react'
import Select from './Select'
import { PRICE_STEPS, brands, categoryLabels, modelsByBrand } from '../data/vehicles'
import { FILTER_PARAMS } from '../hooks/useVehicleFilters'
import { formatPrice } from '../lib/utils'
import type { FilterKey } from '../types/vehicle'

type Quick = Partial<Record<FilterKey, string>>

export default function SearchBar() {
  const navigate = useNavigate()
  const [q, setQ] = useState<Quick>({})
  const set = (k: FilterKey, v: string) => setQ((prev) => ({ ...prev, [k]: v, ...(k === 'brand' ? { model: '' } : {}) }))

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    const params = new URLSearchParams()
    ;(Object.keys(q) as FilterKey[]).forEach((k) => q[k] && params.set(FILTER_PARAMS[k], q[k]!))
    navigate(`/catalogo${params.toString() ? `?${params}` : ''}`)
  }

  return (
    <form onSubmit={submit} aria-label="Busca rápida de veículos" className="grid gap-4 rounded-lg bg-white p-5 shadow-xl sm:grid-cols-2 lg:grid-cols-5 lg:items-end">
      <Select id="q-marca" label="Marca" placeholder="Todas" value={q.brand ?? ''} onChange={(v) => set('brand', v)} options={brands.map((b) => ({ value: b, label: b }))} />
      <Select id="q-modelo" label="Modelo" placeholder="Todos" value={q.model ?? ''} onChange={(v) => set('model', v)} options={modelsByBrand(q.brand ?? '').map((m) => ({ value: m, label: m }))} />
      <Select id="q-preco" label="Preço máximo" placeholder="Sem limite" value={q.maxPrice ?? ''} onChange={(v) => set('maxPrice', v)} options={PRICE_STEPS.map((p) => ({ value: String(p), label: `Até ${formatPrice(p)}` }))} />
      <Select id="q-categoria" label="Categoria" placeholder="Todas" value={q.category ?? ''} onChange={(v) => set('category', v)} options={Object.entries(categoryLabels).map(([value, label]) => ({ value, label }))} />
      <button type="submit" className="btn-primary sm:col-span-2 lg:col-span-1"><Search size={18} aria-hidden="true" />Buscar veículos</button>
    </form>
  )
}
