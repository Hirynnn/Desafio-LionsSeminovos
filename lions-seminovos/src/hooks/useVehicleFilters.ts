import { useCallback, useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { vehicles } from '../data/vehicles'
import type { FilterKey, Filters, Vehicle } from '../types/vehicle'

export const FILTER_PARAMS: Record<FilterKey, string> = {
  brand: 'marca',
  model: 'modelo',
  maxPrice: 'precoMax',
  minYear: 'anoMin',
  category: 'categoria',
  transmission: 'cambio',
}

export function filterVehicles(list: Vehicle[], f: Filters): Vehicle[] {
  return list.filter(
    (v) =>
      (!f.brand || v.brand === f.brand) &&
      (!f.model || v.model === f.model) &&
      (!f.maxPrice || v.price <= Number(f.maxPrice)) &&
      (!f.minYear || v.year >= Number(f.minYear)) &&
      (!f.category || v.category === f.category) &&
      (!f.transmission || v.transmission === f.transmission),
  )
}

export function useVehicleFilters() {
  const [params, setParams] = useSearchParams()

  const filters = useMemo(() => {
    const entries = (Object.keys(FILTER_PARAMS) as FilterKey[]).map((k) => [k, params.get(FILTER_PARAMS[k]) ?? ''])
    return Object.fromEntries(entries) as Filters
  }, [params])

  const setFilter = useCallback(
    (key: FilterKey, value: string) => {
      const next = new URLSearchParams(params)
      if (value) next.set(FILTER_PARAMS[key], value)
      else next.delete(FILTER_PARAMS[key])
      if (key === 'brand') next.delete(FILTER_PARAMS.model)
      setParams(next, { replace: true })
    },
    [params, setParams],
  )

  const clear = useCallback(() => setParams({}, { replace: true }), [setParams])
  const results = useMemo(() => filterVehicles(vehicles, filters), [filters])
  const activeCount = Object.values(filters).filter(Boolean).length

  return { filters, setFilter, clear, results, activeCount }
}
