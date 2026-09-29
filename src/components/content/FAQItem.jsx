import { useId, useState } from 'react'

export function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false)
  const contentId = useId()

  return (
    <article className="faq-item">
      <h3>
        <button
          aria-controls={contentId}
          aria-expanded={isOpen}
          className="faq-item__button"
          onClick={() => setIsOpen((open) => !open)}
        >
          {question}<span aria-hidden="true">{isOpen ? '−' : '+'}</span>
        </button>
      </h3>
      {isOpen && <div className="faq-item__answer" id={contentId}><p>{answer}</p></div>}
    </article>
  )
}
