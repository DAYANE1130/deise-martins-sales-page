import { Link } from 'react-router-dom'

export function ServiceCard({ service }) {
  return (
    <article className="service-card" id={`service-${service.id}`}>
      <p className="eyebrow">{service.eyebrow}</p>
      <h3>{service.name}</h3>
      <p>{service.description}</p>
      <ul className="check-list">
        {service.benefits.map((benefit) => <li key={benefit}>{benefit}</li>)}
      </ul>
      <div className="button-group">
        {service.path ? (
          <Link className="button button--primary" to={service.path} aria-label={`Conhecer ${service.name}`}>Quero este</Link>
        ) : null}
      </div>
    </article>
  )
}
