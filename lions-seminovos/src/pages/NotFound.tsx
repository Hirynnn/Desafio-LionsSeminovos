import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="container-page py-24 text-center">
      <h1 className="text-4xl font-extrabold">Página não encontrada</h1>
      <p className="mt-3 text-neutral-600">O endereço acessado não existe ou o veículo não está mais no catálogo.</p>
      <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
        <Link to="/" className="btn-primary">Ir para o início</Link>
        <Link to="/catalogo" className="btn-outline">Ver catálogo</Link>
      </div>
    </div>
  )
}
