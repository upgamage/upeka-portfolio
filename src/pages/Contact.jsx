
import {
  Mail,
  Network,
  Code2,
  ArrowUpRight,
  Send,
} from 'lucide-react';

import './Contact.css';

function Contact() {
  return (
    <div className="contact-page">

      {/* ========================================
          01. CONTACT HERO
      ======================================== */}

      <section className="contact-hero container">

        <span className="contact-eyebrow">
          GET IN TOUCH
        </span>

        <h1>
          Let's Start a <span>Conversation.</span>
        </h1>

        <p>
          Have a project in mind, a professional opportunity,
          or simply want to connect? I'd be happy to hear from you.
        </p>

      </section>


      {/* ========================================
          02. CONTACT INFORMATION & FORM
      ======================================== */}

      <section className="contact-main container">

        {/* Contact information */}
        <div className="contact-information">

          <span className="contact-section-label">
            CONTACT INFORMATION
          </span>

          <h2>Let's connect.</h2>

          <p className="contact-info-description">
            I'm open to discussing software development,
            collaboration opportunities, and new ideas.
            Feel free to reach out through any of the channels below.
          </p>

          {/* Email contact - add your actual email later */}
          <div className="contact-method">
            <div className="contact-method-icon">
              <Mail size={21} />
            </div>

            <div>
              <h3>Email</h3>
              <p>upekasamanjanagamage@gmail.com</p>
            </div>
          </div>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/upeka-gamage-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-method contact-method-link"
          >
            <div className="contact-method-icon">
              <Network size={21} />
            </div>

            <div>
              <h3>LinkedIn</h3>
              <p>Connect professionally</p>
            </div>

            <ArrowUpRight className="contact-external-icon" size={18} />
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/upgamage"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-method contact-method-link"
          >
            <div className="contact-method-icon">
              <Code2 size={21} />
            </div>

            <div>
              <h3>GitHub</h3>
              <p>Explore my projects</p>
            </div>

            <ArrowUpRight className="contact-external-icon" size={18} />
          </a>

          {/* Availability note */}
          <div className="contact-availability">
            <span className="availability-indicator"></span>
            Open to professional opportunities and collaborations
          </div>

        </div>


        {/* Contact form */}
        <div className="contact-form-wrapper">

          <div className="contact-form-heading">
            <span className="contact-section-label">
              SEND A MESSAGE
            </span>

            <h2>Tell me about your idea.</h2>

            <p>
              Fill out the form below and I'll get back to you.
            </p>
          </div>

          {/* Formspree endpoint must be configured before submission */}
          <form
            className="contact-form"
            action="https://formspree.io/f/YOUR_FORM_ID"
            method="POST"
          >

            {/* Name */}
            <div className="form-group">
              <label htmlFor="contact-name">
                Your Name
              </label>

              <input
                type="text"
                id="contact-name"
                name="name"
                placeholder="Enter your name"
                autoComplete="name"
                maxLength="100"
                required
              />
            </div>

            {/* Email */}
            <div className="form-group">
              <label htmlFor="contact-email">
                Email Address
              </label>

              <input
                type="email"
                id="contact-email"
                name="email"
                placeholder="Enter your email"
                autoComplete="email"
                maxLength="254"
                required
              />
            </div>

            {/* Subject */}
            <div className="form-group">
              <label htmlFor="contact-subject">
                Subject
              </label>

              <input
                type="text"
                id="contact-subject"
                name="subject"
                placeholder="What would you like to discuss?"
                maxLength="150"
                required
              />
            </div>

            {/* Message */}
            <div className="form-group">
              <label htmlFor="contact-message">
                Your Message
              </label>

              <textarea
                id="contact-message"
                name="message"
                rows="5"
                placeholder="Write your message here..."
                maxLength="3000"
                required
              />
            </div>

            {/* Email subject for Formspree */}
            <input
              type="hidden"
              name="_subject"
              value="New Portfolio Contact Message"
            />

            {/* Submit */}
            <button type="submit" className="contact-submit-button">
              Send Message
              <Send size={17} />
            </button>

          </form>

        </div>

      </section>


      {/* ========================================
          03. CLOSING SECTION
      ======================================== */}

      <section className="contact-closing">

        <div className="container contact-closing-content">

          <h2>
            Good things start with a conversation.
          </h2>

          <p>
            Whether it's an idea, an opportunity, or a collaboration,
            I'm always interested in meaningful conversations.
          </p>

        </div>

      </section>

    </div>
  );
}

export default Contact;
