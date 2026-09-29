import { links, whatsappLink } from '../../config/links.js'
import { Button } from '../ui/Button.jsx'

export function ServiceCard({ service }) {
  const paymentLink = links[service.paymentKey]

  return (
    <article className="service-card" id={`service-${service.id}`}>
      <p className="eyebrow">{service.eyebrow}</p>
      <h3>{service.name}</h3>
      <p>{service.description}</p>
      <ul className="check-list">
        {service.benefits.map((benefit) => <li key={benefit}>{benefit}</li>)}
      </ul>
      <div className="button-group">
        <Button href={paymentLink}  aria-label={`Comprar ${service.name}`}>Quero este</Button>
      </div>
    </article>
  )
}
