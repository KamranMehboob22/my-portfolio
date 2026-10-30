const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <h2>Get In Touch</h2>
      <p className="contact-subtitle">
        I am currently open to new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
      </p>

      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" placeholder="Your Name" required />
        </div>
        
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="your@email.com" required />
        </div>
        
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" rows="5" placeholder="How can I help you?" required></textarea>
        </div>
        
        <button type="submit" className="cta-button">Send Message</button>
      </form>
    </section>
  )
}

export default Contact;