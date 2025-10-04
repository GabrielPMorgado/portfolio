import { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Integração com Formspree
    try {
      // Form ID do Formspree configurado
      const response = await fetch('https://formspree.io/f/xpwyrvao', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });
      
      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(''), 5000);
    }
  };

  const contactInfo = [
    {
      icon: '📧',
      title: 'Email',
      value: 'gabriel.morgado@exemplo.com',
      link: 'mailto:gabriel.morgado@exemplo.com'
    },
    {
      icon: '💼',
      title: 'LinkedIn',
      value: '/in/gabriel-morgado',
      link: 'https://linkedin.com/in/gabriel-morgado'
    },
    {
      icon: '💻',
      title: 'GitHub',
      value: '@gabriel-morgado',
      link: 'https://github.com/gabriel-morgado'
    },
    {
      icon: '📱',
      title: 'WhatsApp',
      value: '+55 (18) 99999-9999',
      link: 'https://wa.me/5518999999999'
    }
  ];

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <div className="section-header">
          <h2>Entre em Contato</h2>
          <p>Envie uma mensagem e entrarei em contato o mais breve possível!</p>
        </div>

        <div className="contact-content-single">
          <div className="contact-form-wrapper">
            <form className="contact-form" onSubmit={handleSubmit}>
              <h3>Envie uma Mensagem</h3>
              <p className="form-description">
                Preencha o formulário abaixo com sua mensagem. Responderei em breve 
                através do email ou meio de contato de sua preferência.
              </p>
              
              <div className="form-row">
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Seu nome"
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Seu email"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Assunto"
                  required
                />
              </div>

              <div className="form-group">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Sua mensagem"
                  rows="6"
                  required
                ></textarea>
              </div>

              <button 
                type="submit" 
                className={`submit-btn ${isSubmitting ? 'submitting' : ''}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span className="loading-spinner"></span>
                    Enviando...
                  </>
                ) : (
                  'Enviar Mensagem'
                )}
              </button>

              {submitStatus === 'success' && (
                <div className="form-message success">
                  ✅ Mensagem enviada com sucesso! Retornarei em breve.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="form-message error">
                  ❌ Erro ao enviar mensagem. Tente novamente.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;