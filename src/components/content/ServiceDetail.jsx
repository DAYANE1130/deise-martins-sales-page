import { links, whatsappLink } from '../../config/links.js'
import { Button } from '../ui/Button.jsx'
import { SectionHeading } from '../ui/SectionHeading.jsx'

export function ServiceDetail({ service, alternate = false }) {
  const paymentLink = links[service.paymentKey]

  return (
    <section className={`detail-section ${alternate ? 'detail-section--tinted' : ''}`} id={service.id}>
      <div className="container detail-section__grid">
        <div>
          <SectionHeading eyebrow={service.label} title={service.title} description={service.intro} />
          <ul className="check-list check-list--large">
            {service.benefits.map((benefit) => <li key={benefit}>{benefit}</li>)}
          </ul>
        </div>
        <div className="process-card">
          {service.steps.map((step) => (
            <div className="process-card__step" key={step.title}>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
              <strong>{step.note}</strong>
            </div>
          ))}
          <div className="button-group">
            <Button href={paymentLink} disabled={!paymentLink}>Comprar</Button>
            <Button href={whatsappLink(service.message)} variant="secondary" target="_blank" rel="noreferrer">Falar comigo</Button>
          </div>
        </div>
      </div>
    </section>
  )
}
