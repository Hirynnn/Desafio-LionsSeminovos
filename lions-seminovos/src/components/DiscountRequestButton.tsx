import { useEffect, useRef, useState, type FormEvent, type MouseEvent } from 'react'
import { CheckCircle2, X } from 'lucide-react'
import { stores } from '../data/stores'

interface Props {
  className?: string
  vehicleName?: string
  label?: string
}

export default function DiscountRequestButton({ className = 'btn-primary', vehicleName, label = 'Solicitar um desconto' }: Props) {
  const [open, setOpen] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const firstField = useRef<HTMLInputElement>(null)

  const close = () => {
    setOpen(false)
    setSubmitted(false)
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitted(true)
  }

  const handleBackdropMouseDown = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) close()
  }

  useEffect(() => {
    if (!open) return
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    firstField.current?.focus()
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') close()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [open])

  return (
    <>
      <button type="button" className={className} onClick={() => setOpen(true)} aria-haspopup="dialog" aria-expanded={open}>{label}</button>
      {open && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center overflow-y-auto bg-black/65 p-4" onMouseDown={handleBackdropMouseDown}>
          <section role="dialog" aria-modal="true" aria-labelledby="discount-title" className="my-auto w-full max-w-lg rounded-xl bg-white p-5 shadow-2xl sm:p-8">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-brand">Lions Seminovos</p>
                <h2 id="discount-title" className="mt-1 text-2xl font-extrabold">Solicite seu desconto</h2>
                <p className="mt-2 max-w-sm text-sm leading-relaxed text-neutral-600">Preencha seus dados e escolha a unidade. Nossa equipe poderá conversar com você sobre as condições disponíveis.</p>
                {vehicleName && <p className="mt-1 text-sm text-neutral-600">Interesse em: {vehicleName}</p>}
              </div>
              <button type="button" onClick={close} aria-label="Fechar janela" className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-neutral-600 hover:bg-neutral-100"><X size={21} /></button>
            </div>

            {submitted ? (
              <div className="py-8 text-center" role="status">
                <CheckCircle2 className="mx-auto text-green-600" size={44} aria-hidden="true" />
                <h3 className="mt-3 text-xl font-bold">Solicitação preenchida</h3>
                <p className="mt-2 text-sm text-neutral-600">Esta demonstração não envia seus dados à loja.</p>
                <button type="button" onClick={close} className="btn-primary mt-6">Fechar</button>
              </div>
            ) : (
              <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="discount-name" className="mb-1.5 block text-sm font-semibold">Seu nome</label>
                  <input ref={firstField} id="discount-name" name="name" className="field" autoComplete="name" placeholder="Ex.: Maria Silva" required />
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="discount-phone" className="mb-1.5 block text-sm font-semibold">Telefone</label>
                    <input id="discount-phone" name="phone" type="tel" inputMode="tel" autoComplete="tel" placeholder="(00) 00000-0000" className="field" required />
                  </div>
                  <div>
                    <label htmlFor="discount-email" className="mb-1.5 block text-sm font-semibold">Email</label>
                    <input id="discount-email" name="email" type="email" autoComplete="email" placeholder="seu@email.com" className="field" required />
                  </div>
                </div>
                <div>
                  <label htmlFor="discount-store" className="mb-1.5 block text-sm font-semibold">Selecione uma loja</label>
                  <select id="discount-store" name="store" className="field" defaultValue="" required>
                    <option value="" disabled>Selecione uma unidade</option>
                    {stores.map((store) => <option key={store} value={store}>{store}</option>)}
                  </select>
                </div>
                <button type="submit" className="btn min-h-12 w-full bg-yellow-400 text-base font-extrabold text-neutral-950 hover:bg-yellow-300">SOLICITAR</button>
              </form>
            )}
          </section>
        </div>
      )}
    </>
  )
}
