import { useRef, useState } from 'react';
import type { FormEvent } from 'react';
import "./css/Form.css"
import emailjs from "@emailjs/browser";

import { atomLanguage } from './NavBar';
import { useAtom } from 'jotai';


function Contact() {
    const emailInputRef = useRef<HTMLInputElement>(null);
    const messageInputRef = useRef<HTMLInputElement>(null);
    const sendButtonRef = useRef<HTMLButtonElement>(null);
    const [isVisible, setIsVisible] = useState<boolean>(false);

    const [language, setLanguage] = useAtom(atomLanguage);

    const sendEmail = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!emailInputRef.current || !messageInputRef.current || !sendButtonRef.current) return;

        emailjs.sendForm(
            "service_zdebejf",
            "template_ac20z2m",
            e.currentTarget,
            "LJdNbJzB72B0ya1b6"
        );

        sendButtonRef.current.disabled = true;
        console.log("desactivado");

        setIsVisible(true);

        emailInputRef.current.value = "";
        messageInputRef.current.value = "";

        setTimeout(() => {
            if (sendButtonRef.current) {
                sendButtonRef.current.disabled = false;
            }
            setIsVisible(false);
            console.log("activado");
        }, 5000);
    }

    return (
        <section className='formContainer'>
            <div>
                <h1>
                    {language == "Español" ? "Escribime..."
                        :
                        "Send me a message..."}
                </h1>
                <form onSubmit={sendEmail}>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input
                            ref={emailInputRef}
                            name='emailFrom'
                            placeholder={language == "Español" ? "Ingresa tu email"
                                :
                                "Enter your email"}
                            id="email"
                            type="email"
                        />
                    </div>
                    <div>
                        <label htmlFor="message">Mensaje</label>
                        <input
                            ref={messageInputRef}
                            name='message'
                            placeholder={language == "Español" ? "Ingresa un mensaje"
                                :
                                "Enter a message"}
                            type="text"
                        />
                    </div>
                    <button ref={sendButtonRef} type='submit'>
                        {language == "Español" ? "Enviar!"
                            :
                            "Send!"}
                    </button>
                    <p className={isVisible ? "showSentText" : "hideSentText"}>
                        {language == "Español" ? "Enviado!."
                            :
                            "Delivered!."}
                    </p>
                </form>
            </div>
        </section>
    );
}

export default Contact;