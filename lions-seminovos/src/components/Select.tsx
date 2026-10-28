import type { SelectHTMLAttributes } from 'react'

interface Option { value: string; label: string }
interface Props extends Omit<SelectHTMLAttributes<HTMLSelectElement>, 'onChange'> {
  label: string
  options: Option[]
  placeholder: string
  onChange: (value: string) => void
}

export default function Select({ label, options, placeholder, onChange, id, ...rest }: Props) {
  const selectId = id ?? `sel-${label.toLowerCase().replace(/\s+/g, '-')}`
  return (
    <div>
      <label htmlFor={selectId} className="mb-1.5 block text-sm font-semibold">{label}</label>
      <select id={selectId} className="field" onChange={(e) => onChange(e.target.value)} {...rest}>
        <option value="">{placeholder}</option>
        {options.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
      </select>
    </div>
  )
}
