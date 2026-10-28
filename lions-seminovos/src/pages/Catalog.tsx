import { useState } from 'react'
import { SlidersHorizontal } from 'lucide-react'
import VehicleCard from '../components/VehicleCard'
import VehicleFilters from '../components/VehicleFilters'
import { useVehicleFilters } from '../hooks/useVehicleFilters'

export default function Catalog() {
  const { filters, setFilter, clear, results, activeCount } = useVehicleFilters()
  const [showFilters, setShowFilters] = useState(false)

  return (
    <>
      <section className="bg-white">
        <div className="container-page py-10 sm:py-14">
          <h1 className="text-3xl font-extrabold sm:text-4xl">Encontre seu próximo carro</h1>
          <p className="mt-2 max-w-2xl text-neutral-600">Explore as opções do catálogo demonstrativo e use os filtros para refinar a busca.</p>
        </div>
      </section>

      <div className="container-page grid gap-8 py-10 lg:grid-cols-[280px_1fr]">
        <aside>
          <button type="button" className="btn-outline w-full lg:hidden" aria-expanded={showFilters} aria-controls="painel-filtros" onClick={() => setShowFilters((v) => !v)}>
            <SlidersHorizontal size={18} aria-hidden="true" />{showFilters ? 'Ocultar filtros' : `Filtros${activeCount ? ` (${activeCount})` : ''}`}
          </button>
          <div id="painel-filtros" className={`${showFilters ? 'block' : 'hidden'} mt-4 rounded-lg border border-neutral-200 bg-white p-5 lg:mt-0 lg:block`}>
            <VehicleFilters filters={filters} onChange={setFilter} onClear={clear} activeCount={activeCount} />
          </div>
        </aside>

        <section aria-label="Resultados">
          <p className="mb-4 text-sm font-semibold text-neutral-700" role="status" aria-live="polite">
            {results.length} {results.length === 1 ? 'veículo encontrado' : 'veículos encontrados'}
          </p>
          {results.length === 0 ? (
            <div className="rounded-lg border border-dashed border-neutral-300 bg-white p-10 text-center">
              <h2 className="text-xl font-bold">Nenhum veículo com esses filtros</h2>
              <p className="mt-2 text-neutral-600">Tente ampliar a faixa de preço ou remover alguma opção.</p>
              <button type="button" onClick={clear} className="btn-primary mt-6">Limpar filtros</button>
            </div>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {results.map((v) => <VehicleCard key={v.id} vehicle={v} />)}
            </div>
          )}
        </section>
      </div>
    </>
  )
}
