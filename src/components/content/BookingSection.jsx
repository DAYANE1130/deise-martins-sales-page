import { useEffect, useRef } from 'react'

const calendlyUrl = 'https://calendly.com/dayanebmartins/new-meeting?hide_event_type_details=1&hide_gdpr_banner=1'
const widgetUrl = 'https://assets.calendly.com/assets/external/widget.js'
const widgetScriptId = 'calendly-widget-script'

function loadCalendlyWidget() {
  const existingScript = document.getElementById(widgetScriptId) ?? document.querySelector(`script[src="${widgetUrl}"]`)

  if (existingScript) {
    return window.Calendly || existingScript.dataset.loaded === 'true'
      ? Promise.resolve()
      : new Promise((resolve) => existingScript.addEventListener('load', resolve, { once: true }))
  }

  return new Promise((resolve, reject) => {
    const script = document.createElement('script')
    script.id = widgetScriptId
    script.src = widgetUrl
    script.async = true
    script.addEventListener('load', () => {
      script.dataset.loaded = 'true'
      resolve()
    }, { once: true })
    script.addEventListener('error', reject, { once: true })
    document.body.appendChild(script)
  })
}

export function BookingSection({ service }) {
  const containerRef = useRef(null)

  useEffect(() => {
    let active = true

    loadCalendlyWidget()
      .then(() => {
        if (!active || !containerRef.current || !window.Calendly) return

        containerRef.current.replaceChildren()
        window.Calendly.initInlineWidget({
          url: calendlyUrl,
          parentElement: containerRef.current,
          prefill: { customAnswers: { a1: service.calendlyAnswer } },
          pageSettings: {
            hideEventTypeDetails: true,
            hideGdprBanner: true,
          },
        })
      })
      .catch(() => {
        // The Calendly iframe remains unavailable only when the external script cannot load.
      })

    return () => {
      active = false
      containerRef.current?.replaceChildren()
    }
  }, [service.calendlyAnswer])

  return (
    <section className="booking-section" aria-labelledby="booking-title">
      <div className="container">
        <div className="booking-section__heading">
          <p className="eyebrow">Agendamento</p>
          <h2 id="booking-title">Escolha o melhor horário para você.</h2>
        </div>
        <div className="booking-section__widget" ref={containerRef} />
      </div>
    </section>
  )
}
