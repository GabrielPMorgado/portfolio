// EXEMPLO: Como usar Formspree no formulário
// 1. Cadastre-se em: https://formspree.io/
// 2. Crie um formulário e copie o endpoint
// 3. Substitua o handleSubmit por:

const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);
  
  try {
    const response = await fetch('https://formspree.io/f/SEU_FORM_ID', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    
    if (response.ok) {
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } else {
      setSubmitStatus('error');
    }
  } catch (error) {
    setSubmitStatus('error');
  } finally {
    setIsSubmitting(false);
    setTimeout(() => setSubmitStatus(''), 5000);
  }
};