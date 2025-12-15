import './contact.css';
import Navbar from '../../components/nav-bar/Navbar';
import Footer from '../../components/footer/Footer';
import { useState } from 'react';

const Contact = () => {
    const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);

    const handleSubmitFeedback = (e) => {
        e.preventDefault();
        
        const nameInput = document.getElementById('name-input');
        const emailInput = document.getElementById('email-input');
        const messageInput = document.getElementById('message-input');
        
        const contactData = {
            name: nameInput.value,
            email: emailInput.value,
            message: messageInput.value,
            timestamp: new Date().toLocaleString()
        };
        
        // Log the feedback to console
        console.log('Contact Feedback Received:', contactData);
        
        // Reset form fields
        nameInput.value = '';
        emailInput.value = '';
        messageInput.value = '';
        
        // Show success message
        setFeedbackSubmitted(true);
        setTimeout(() => setFeedbackSubmitted(false), 3000);
        
        // You can also send this data to an API endpoint:
        // fetch('/api/contact', {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify(contactData)
        // }).catch(err => console.error('Error sending feedback:', err));
    };
    return (
        <>
            <section className='contact-section'>
                <Navbar />
                
                <div className='contact-container'>
                    {/* Left Side - Contact Form */}
                    <div className='contact-form-side'>
                        <div className='contact-form-header'>
                            <img src="/flower.png" alt="flower" className='flower-icon' />
                            <h1 className='brand-font'>Contact Us</h1>
                            <img src="/flower.png" alt="flower" className='flower-icon' />
                        </div>
                        <p className='form-subtext'>Share Your Thoughts</p>
                        
                        <form className='contact-form' onSubmit={handleSubmitFeedback}>
                            <input 
                                id="name-input"
                                type="text" 
                                placeholder="Name:" 
                                className='form-input contact-field'
                                required
                            />
                            <input 
                                id="email-input"
                                type="email" 
                                placeholder="Email:" 
                                className='form-input contact-field'
                                required
                            />
                            <textarea 
                                id="message-input"
                                placeholder="Message:" 
                                className='form-input form-textarea'
                                rows="6"
                                required
                            ></textarea>
                            <button type="submit" className='submit-btn'>Share Note</button>
                        </form>
                        {feedbackSubmitted && (
                            <p className='success-message'>Thank you! Your feedback has been received.</p>
                        )}
                    </div>

                    {/* Right Side - Map and Location */}
                    <div className='contact-map-side'>
                        <div className='contact-map-header'>
                            <img src="/flower.png" alt="flower" className='flower-icon' />
                            <h2 className='brand-font'>Find Us</h2>
                            <img src="/flower.png" alt="flower" className='flower-icon' />
                        </div>
                        <p className='map-subtext'>Come Meet Us</p>
                        
                        <div className='map-container'>
                            <iframe
                                title="Joy Beirut Location"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3316.2087356789!2d35.4792376!3d33.8910669!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151f11000ebe127f%3A0xd9632612062a0e37!2sJoy%20Beirut!5e0!3m2!1sen!2slb!4v1702225000000"
                                width="100%"
                                height="100%"
                                style={{ border: 0, borderRadius: '12px' }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Contact;