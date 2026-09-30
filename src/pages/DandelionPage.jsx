import { BookingSection } from '../components/content/BookingSection.jsx'
import { ServiceDetail } from '../components/content/ServiceDetail.jsx'
import { dandelionDetails } from '../data/services.js'

export function DandelionPage() {
  return (
    <main>
      <ServiceDetail service={dandelionDetails} />
      <BookingSection service={dandelionDetails} />
    </main>
  )
}
