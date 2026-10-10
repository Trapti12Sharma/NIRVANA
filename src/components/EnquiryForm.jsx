import { useState } from 'react'
import { CheckCircle2, MessageCircle } from 'lucide-react'
import { whatsappLink } from '../lib/whatsapp'

// Config-driven enquiry form. Frontend-only: on submit the enquiry is composed into a
// prefilled WhatsApp message. Nothing is sent to or stored on a server.
const phoneOk = (v) => /^(\+?91[\s-]?)?[6-9]\d{9}$/.test(v.replace(/[\s-]/g, '').replace(/^(\+?91)(\d{10})$/, '$1$2'))
const emailOk = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v)

export default function EnquiryForm({ title, fields, submitLabel = 'Send Enquiry on WhatsApp', initial = {} }) {
  const [values, setValues] = useState(() => Object.fromEntries(fields.map((f) => [f.name, initial[f.name] ?? ''])))
  const [errors, setErrors] = useState({})
  const [sentLink, setSentLink] = useState(null)

  const set = (name, v) => {
    setValues((s) => ({ ...s, [name]: v }))
    if (errors[name]) setErrors((e) => ({ ...e, [name]: undefined }))
  }

  const validate = () => {
    const e = {}
    for (const f of fields) {
      const v = (values[f.name] || '').trim()
      if (f.required && !v) e[f.name] = `Please enter ${f.errorLabel || f.label.toLowerCase()}.`
      else if (v && f.type === 'tel' && !phoneOk(v)) e[f.name] = 'Please enter a valid 10-digit Indian mobile number.'
      else if (v && f.type === 'email' && !emailOk(v)) e[f.name] = 'Please enter a valid email address.'
    }
    return e
  }

  const onSubmit = (ev) => {
    ev.preventDefault()
    const e = validate()
    setErrors(e)
    if (Object.keys(e).length) {
      document.getElementById(`${title}-${Object.keys(e)[0]}`)?.focus()
      return
    }
    const lines = fields.filter((f) => values[f.name]?.trim()).map((f) => `${f.label}: ${values[f.name].trim()}`)
    const link = whatsappLink(`Hello Nirvana by Raaya, ${title}\n\n${lines.join('\n')}`)
    setSentLink(link)
    window.open(link, '_blank', 'noopener,noreferrer')
  }

  if (sentLink) {
    return (
      <div role="status" className="border border-sage/50 bg-white p-8 text-center sm:p-10">
        <CheckCircle2 className="mx-auto text-sage" size={44} />
        <h3 className="mt-4 font-serif text-3xl">Your enquiry is ready in WhatsApp</h3>
        <p className="mx-auto mt-3 max-w-md text-muted">
          We opened WhatsApp with your details filled in. Please press <strong>Send</strong> there to reach us. This website does not store or email your details.
        </p>
        <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
          <a href={sentLink} target="_blank" rel="noopener noreferrer" className="btn-primary"><MessageCircle size={18} /> Open WhatsApp again</a>
          <button type="button" onClick={() => { setSentLink(null); setValues(Object.fromEntries(fields.map((f) => [f.name, '']))) }} className="btn-outline">Start a new enquiry</button>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} noValidate className="grid grid-cols-1 gap-5 sm:grid-cols-2">
      {fields.map((f) => {
        const id = `${title}-${f.name}`
        const err = errors[f.name]
        const common = {
          id,
          name: f.name,
          value: values[f.name],
          onChange: (e) => set(f.name, e.target.value),
          'aria-invalid': !!err,
          'aria-describedby': err ? `${id}-err` : undefined,
          required: f.required,
          className: `field ${err ? '!border-red-700' : ''}`,
        }
        return (
          <div key={f.name} className={`min-w-0 ${f.full ? 'sm:col-span-2' : ''}`}>
            <label htmlFor={id} className="label">
              {f.label} {f.required ? <span className="text-red-800" aria-hidden="true">*</span> : <span className="font-normal text-muted">(optional)</span>}
            </label>
            {f.type === 'select' ? (
              <select {...common}>
                <option value="">Select…</option>
                {f.options.map((o) => <option key={o} value={o}>{o}</option>)}
              </select>
            ) : f.type === 'textarea' ? (
              <textarea rows={4} placeholder={f.placeholder} {...common} />
            ) : (
              <input type={f.type || 'text'} inputMode={f.type === 'tel' ? 'tel' : f.inputMode} autoComplete={f.autoComplete} placeholder={f.placeholder} {...common} />
            )}
            {err && <p id={`${id}-err`} className="mt-1.5 text-sm text-red-800">{err}</p>}
          </div>
        )
      })}
      <div className="sm:col-span-2">
        <button type="submit" className="btn-primary w-full sm:w-auto">
          <MessageCircle size={18} /> {submitLabel}
        </button>
        <p className="mt-3 text-xs text-muted">This opens WhatsApp with your enquiry prefilled. Nothing is saved or emailed from this website.</p>
      </div>
    </form>
  )
}
