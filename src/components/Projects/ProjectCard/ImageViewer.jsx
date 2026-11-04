import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

const ImageViewer = ({ images, startIndex, onClose }) =>
{
    const [index, setIndex] = useState(startIndex);

    const move = (step) =>
    {
        setIndex((current) => (current + step + images.length) % images.length);
    };

    useEffect(() =>
    {
        const onKey = (e) =>
        {
            if (e.key === 'Escape') onClose();
            if (e.key === 'ArrowRight') setIndex((current) => (current + 1) % images.length);
            if (e.key === 'ArrowLeft') setIndex((current) => (current - 1 + images.length) % images.length);
        };

        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        window.addEventListener('keydown', onKey);

        return () =>
        {
            document.body.style.overflow = previousOverflow;
            window.removeEventListener('keydown', onKey);
        };
    }, [images.length, onClose]);

    return createPortal(
        <div className="image-viewer" role="dialog" aria-modal="true" aria-label="Project screenshots" onClick={onClose}>
            <button className="viewer-btn viewer-close" aria-label="Close" autoFocus onClick={onClose}>&times;</button>

            {images.length > 1 && (
                <button className="viewer-btn viewer-prev" aria-label="Previous screenshot" onClick={(e) => { e.stopPropagation(); move(-1); }}>&#8249;</button>
            )}

            <img src={images[index].src} alt={images[index].alt} onClick={(e) => e.stopPropagation()} />

            {images.length > 1 && (
                <button className="viewer-btn viewer-next" aria-label="Next screenshot" onClick={(e) => { e.stopPropagation(); move(1); }}>&#8250;</button>
            )}
        </div>,
        document.body
    );
};

export default ImageViewer;
