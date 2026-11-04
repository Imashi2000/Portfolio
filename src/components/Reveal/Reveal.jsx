import { useEffect, useRef, useState } from 'react';
import './Reveal.css';

const Reveal = ({ children, delay = 0, className = '' }) =>
{
    const element = useRef();
    const [visible, setVisible] = useState(false);
    const [isAbove, setIsAbove] = useState(false);

    // Plays every time an element returns to the screen. When it left through the top,
    // it comes back down from above; when it left through the bottom, it rises from below.
    useEffect(() =>
    {
        const observer = new IntersectionObserver(([entry]) =>
        {
            setVisible(entry.isIntersecting);
            if (!entry.isIntersecting) {
                setIsAbove(entry.boundingClientRect.top < window.innerHeight / 2);
            }
        }, { rootMargin: '-6% 0px -6% 0px' });

        observer.observe(element.current);

        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={element}
            className={`reveal ${visible ? 'visible' : ''} ${isAbove ? 'from-above' : ''} ${className}`}
            style={{ transitionDelay: visible ? `${delay}ms` : '0ms' }}
        >
            {children}
        </div>
    );
};

export default Reveal;
