import { BookingSection } from '../components/content/BookingSection.jsx'
import { ServiceDetail } from '../components/content/ServiceDetail.jsx'
import { recalibrationDetails } from '../data/services.js'

export function RecalibrationPage() {
  return (
    <main>
      <ServiceDetail service={recalibrationDetails} />
      <BookingSection service={recalibrationDetails} />
    </main>
  )
}
