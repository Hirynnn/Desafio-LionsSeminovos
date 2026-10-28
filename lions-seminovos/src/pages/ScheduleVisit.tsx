import { useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { CheckCircle2, Info } from 'lucide-react'
import { getVehicleById, vehicles } from '../data/vehicles'
import { stores } from '../data/stores'
import { formatDateBR, formatPhone, todayISO } from '../lib/utils'

interface Form { name: string; email: string; phone: string; vehicleId: string; store: string; date: string; time: string; message: string; consent: boolean }
type Errors = Partial<Record<keyof Form, string>>

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

function validate(f: Form): Errors {
  const e: Errors = {}
  if (f.name.trim().split(/\s+/).filter(Boolean).length < 2) e.name = 'Informe nome e sobrenome.'
  if (!EMAIL_RE.test(f.email.trim())) e.email = 'Informe um e-mail válido, como nome@exemplo.com.'
  const digits = f.phone.replace(/\D/g, '')
  if (digits.length < 10 || digits.length > 11) e.phone = 'Informe o telefone com DDD, com 10 ou 11 dígitos.'
  if (!f.date) e.date = 'Escolha a data desejada.'
  else if (f.date < todayISO()) e.date = 'A data não pode ser anterior a hoje.'
  if (!f.time) e.time = 'Escolha o horário desejado.'
  if (!f.consent) e.consent = 'Para continuar, aceite o uso dos dados informados.'
  return e
}

function Field({ id, label, error, optional, children }: { id: string; label: string; error?: string; optional?: boolean; children: React.ReactNode }) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-semibold">{label}{optional && <span className="font-normal text-neutral-600"> (opcional)</span>}</label>
      {children}
      {error && <p id={`${id}-erro`} className="mt-1.5 text-sm font-medium text-brand-dark">{error}</p>}
    </div>
  )
}

export default function ScheduleVisit() {
  const [params] = useSearchParams()
  const preselected = getVehicleById(params.get('veiculo') ?? undefined)?.id ?? ''
  const initialMessage = params.get('assunto') === 'desconto'
    ? `Gostaria de conversar sobre as condições${preselected ? ` para o veículo ${getVehicleById(preselected)?.brand} ${getVehicleById(preselected)?.model}` : ''}.`
    : ''
  const [form, setForm] = useState<Form>({ name: '', email: '', phone: '', vehicleId: preselected, store: stores[0], date: '', time: '', message: initialMessage, consent: false })
  const [errors, setErrors] = useState<Errors>({})
  const [submitted, setSubmitted] = useState<Form | null>(null)

  const update = <K extends keyof Form>(key: K, value: Form[K]) => {
    setForm((p) => ({ ...p, [key]: value }))
    if (errors[key]) setErrors((p) => ({ ...p, [key]: undefined }))
  }
  const a11y = (k: keyof Form) => ({ 'aria-invalid': !!errors[k], 'aria-describedby': errors[k] ? `${k}-erro` : undefined })

  const onSubmit = (ev: React.FormEvent) => {
    ev.preventDefault()
    const found = validate(form)
    setErrors(found)
    if (Object.keys(found).length === 0) { setSubmitted(form); window.scrollTo({ top: 0 }) }
    else document.getElementById(`f-${Object.keys(found)[0]}`)?.focus()
  }

  if (submitted) {
    const vehicle = getVehicleById(submitted.vehicleId)
    const rows: [string, string][] = [
      ['Nome', submitted.name], ['E-mail', submitted.email], ['Telefone', submitted.phone],
      ['Veículo', vehicle ? `${vehicle.brand} ${vehicle.model} ${vehicle.version}` : 'Ainda não escolhi'],
      ['Loja', submitted.store],
      ['Data desejada', formatDateBR(submitted.date)], ['Horário desejado', submitted.time],
    ]
    return (
      <div className="container-page max-w-2xl py-12 sm:py-16" role="status">
        <CheckCircle2 size={44} className="text-brand" aria-hidden="true" />
        <h1 className="mt-4 text-3xl font-extrabold">Solicitação demonstrativa recebida</h1>
        <p className="mt-3 rounded-md border border-amber-300 bg-amber-50 p-4 text-sm text-amber-900">
          Este é um projeto de demonstração: nenhum agendamento real foi registrado, nenhum dado foi enviado e nenhuma visita foi confirmada.
        </p>
        <dl className="mt-6 divide-y divide-neutral-200 rounded-lg border border-neutral-200 bg-white">
          {rows.map(([k, v]) => <div key={k} className="flex flex-col gap-0.5 px-4 py-3 text-sm sm:flex-row sm:justify-between"><dt className="text-neutral-600">{k}</dt><dd className="font-semibold">{v}</dd></div>)}
        </dl>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <button type="button" className="btn-outline" onClick={() => setSubmitted(null)}>Fazer nova solicitação</button>
          <Link to="/catalogo" className="btn-primary">Voltar ao catálogo</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="container-page max-w-2xl py-10 sm:py-14">
      <h1 className="text-3xl font-extrabold sm:text-4xl">Vamos encontrar o carro ideal para você?</h1>
      <p className="mt-3 text-neutral-600">Preencha o formulário para solicitar uma visita. Informe o veículo de interesse, a data e o horário que preferir.</p>
      <p className="mt-4 flex gap-2 rounded-md bg-neutral-100 p-3 text-sm text-neutral-700"><Info size={18} className="mt-0.5 shrink-0" aria-hidden="true" />Formulário demonstrativo: ao enviar, nada é registrado nem encaminhado à loja.</p>

      <form onSubmit={onSubmit} noValidate className="mt-8 space-y-5">
        <Field id="f-name" label="Nome completo" error={errors.name}>
          <input id="f-name" className="field" autoComplete="name" value={form.name} onChange={(e) => update('name', e.target.value)} {...a11y('name')} />
        </Field>
        <div className="grid gap-5 sm:grid-cols-2">
          <Field id="f-email" label="E-mail" error={errors.email}>
            <input id="f-email" type="email" className="field" autoComplete="email" value={form.email} onChange={(e) => update('email', e.target.value)} {...a11y('email')} />
          </Field>
          <Field id="f-phone" label="Telefone" error={errors.phone}>
            <input id="f-phone" type="tel" inputMode="tel" className="field" autoComplete="tel" placeholder="(00) 00000-0000" value={form.phone} onChange={(e) => update('phone', formatPhone(e.target.value))} {...a11y('phone')} />
          </Field>
        </div>
        <Field id="f-vehicleId" label="Veículo de interesse">
          <select id="f-vehicleId" className="field" value={form.vehicleId} onChange={(e) => update('vehicleId', e.target.value)}>
            <option value="">Ainda não escolhi</option>
            {vehicles.map((v) => <option key={v.id} value={v.id}>{v.brand} {v.model} {v.version} ({v.year})</option>)}
          </select>
        </Field>
        <Field id="f-store" label="Loja para a visita">
          <select id="f-store" className="field" value={form.store} onChange={(e) => update('store', e.target.value)}>
            {stores.map((store) => <option key={store} value={store}>{store}</option>)}
          </select>
        </Field>
        <div className="grid gap-5 sm:grid-cols-2">
          <Field id="f-date" label="Data desejada" error={errors.date}>
            <input id="f-date" type="date" min={todayISO()} className="field" value={form.date} onChange={(e) => update('date', e.target.value)} {...a11y('date')} />
          </Field>
          <Field id="f-time" label="Horário desejado" error={errors.time}>
            <input id="f-time" type="time" className="field" value={form.time} onChange={(e) => update('time', e.target.value)} {...a11y('time')} />
          </Field>
        </div>
        <Field id="f-message" label="Mensagem" optional>
          <textarea id="f-message" rows={4} className="field" value={form.message} onChange={(e) => update('message', e.target.value)} />
        </Field>
        <div>
          <label className="flex min-h-[44px] items-start gap-3 text-sm">
            <input id="f-consent" type="checkbox" className="mt-1 h-5 w-5 shrink-0 accent-brand" checked={form.consent} onChange={(e) => update('consent', e.target.checked)} {...a11y('consent')} />
            <span>Concordo com o uso dos dados informados neste formulário para fins de contato sobre a visita.</span>
          </label>
          {errors.consent && <p id="consent-erro" className="mt-1 text-sm font-medium text-brand-dark">{errors.consent}</p>}
        </div>
        <button type="submit" className="btn-primary w-full sm:w-auto">Solicitar agendamento</button>
      </form>
    </div>
  )
}
