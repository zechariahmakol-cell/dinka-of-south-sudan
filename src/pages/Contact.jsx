import { useRef } from 'react'
import emailjs from '@emailjs/browser'

function Contact() {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm(
      'service_i5ln8kt',
      'template_dlb844e',
      form.current,
      'UnvOvd6hjCVyOsMcU'
    )
    .then(
      () => {
        alert('Thank you! Your message has been sent successfully.')
        form.current.reset()
      },
      alert('Sorry, your message could not be sent. Please try again.')
    )
  }

  return (
    <main className="contact-page">

      <section className="page-header">
        <p className="section-label">GET IN TOUCH</p>

        <h1>Contact Us</h1>

        <p>
          We welcome your questions, stories, photographs and cultural
          knowledge that can help preserve Dinka heritage.
        </p>
      </section>

      <section className="contact-content">

        <div className="contact-information">

          <h2>Let's Connect</h2>

          <p>
            If you have information, stories or materials about Dinka
            history and culture, we would be happy to hear from you.
          </p>

          <div className="contact-item">
            <h3>📧 Email</h3>
            <p>zechariahmakol@gmail.com</p>
          </div>

          <div className="contact-item">
            <h3>📍 Location</h3>
            <p>South Sudan</p>
          </div>

          <div className="contact-item">
            <h3>🌍 Community</h3>
            <p>Dinka communities in South Sudan and around the world</p>
          </div>

        </div>

        <form ref={form} className="contact-form" onSubmit={sendEmail}>

          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            required
          />

          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            required
          />

          <label htmlFor="message">Your Message</label>
          <textarea
            id="message"
            name="message"
            rows="6"
            placeholder="Write your message here..."
            required
          ></textarea>

          <button type="submit">
            Send Message
          </button>

        </form>

      </section>

    </main>
  )
}

export default Contact