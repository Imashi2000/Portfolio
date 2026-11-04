import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import './ContactForm.css';

const ContactForm = () =>
{
    const form = useRef();
    const [open, setOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [snackbarSeverity, setSnackbarSeverity] = useState('success');
    const [sending, setSending] = useState(false);

    const sendEmail = (e) =>
    {
        e.preventDefault();
        setSending(true);

        emailjs.sendForm(
            'service_ce46rcv',     //EmailJS service ID
            'template_3k5uvjl',     //EmailJS template ID
            form.current,
            '48jEYeqIIblUR1T6l'       //EmailJS public key
        ).then(
            () =>
            {
                setSnackbarSeverity('success');
                setSnackbarMessage('Message sent successfully!');
                setOpen(true);
                form.current.reset(); // Optionally clear the form
            },
            () =>
            {
                setSnackbarSeverity('error');
                setSnackbarMessage('Failed to send message. Please try again.');
                setOpen(true);
            }
        ).finally(() => setSending(false));
    };

    const handleClose = (event, reason) =>
    {
        if (reason === 'clickaway') return;
        setOpen(false);
    };

    return (
        <div className="contact-form-content">
            <form ref={form} onSubmit={sendEmail}>
                <div className="name-container">
                    <input type="text" name="user_fname" placeholder="First Name" aria-label="First name" autoComplete="given-name" required />
                    <input type="text" name="user_lname" placeholder="Last Name" aria-label="Last name" autoComplete="family-name" required />
                </div>

                <input type="email" name="user_email" placeholder="Email" aria-label="Email" autoComplete="email" required />
                <textarea name="message" placeholder="Message" aria-label="Message" rows={4} required />

                <button type="submit" disabled={sending}>{sending ? 'SENDING...' : 'SEND'}</button>
            </form>

            <Snackbar
                open={open}
                autoHideDuration={3000}
                onClose={handleClose}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            >
                <Alert onClose={handleClose} severity={snackbarSeverity} sx={{ width: '100%' }}>
                    {snackbarMessage}
                </Alert>
            </Snackbar>
        </div>
    );
};

export default ContactForm;
