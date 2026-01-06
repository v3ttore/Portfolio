import { useEffect, useState } from 'react';

interface PDFModalProps {
    isOpen: boolean;
    onClose: () => void;
    pdfUrl: string;
}

export default function PDFModal({ isOpen, onClose, pdfUrl }: PDFModalProps) {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };

        if (isOpen) {
            document.addEventListener('keydown', handleEsc);
            document.body.style.overflow = 'hidden'; // Prevent background scrolling
            setIsLoading(true); // Reset loading state when opening
        }

        return () => {
            document.removeEventListener('keydown', handleEsc);
            document.body.style.overflow = 'unset';
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div className="pdf-modal-overlay" onClick={onClose}>
            <button className="pdf-modal-close" onClick={onClose} aria-label="Chiudi">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
            </button>

            <div className="pdf-modal-content" onClick={e => e.stopPropagation()}>
                {isLoading && (
                    <div className="pdf-loader">
                        <div className="spinner"></div>
                        <p>Caricamento PDF...</p>
                    </div>
                )}

                <iframe
                    src={pdfUrl}
                    className="pdf-iframe"
                    title="PDF Viewer"
                    onLoad={() => setIsLoading(false)}
                />
            </div>

            <style jsx>{`
                .pdf-modal-overlay {
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background-color: rgba(0, 0, 0, 0.85);
                    z-index: 9999;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 20px;
                    backdrop-filter: blur(8px);
                    animation: fadeIn 0.3s ease;
                }
                
                .pdf-modal-content {
                    background: white;
                    width: 100%;
                    max-width: 1000px;
                    height: 90vh;
                    border-radius: 16px;
                    position: relative;
                    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
                    overflow: hidden;
                    display: flex;
                    flex-direction: column;
                    animation: slideUp 0.3s ease;
                }
                
                .pdf-loader {
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    background: #f8f9fa;
                    z-index: 5;
                    gap: 15px;
                    color: #666;
                }

                .spinner {
                    width: 40px;
                    height: 40px;
                    border: 3px solid rgba(0, 0, 0, 0.1);
                    border-radius: 50%;
                    border-top-color: var(--color-primary, #333);
                    animation: spin 1s ease-in-out infinite;
                }
                
                .pdf-modal-close {
                    position: absolute;
                    top: 20px;
                    right: 20px;
                    background: rgba(255, 255, 255, 0.1);
                    border: 1px solid rgba(255, 255, 255, 0.2);
                    color: white;
                    width: 44px;
                    height: 44px;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    z-index: 10000;
                    transition: all 0.2s;
                    backdrop-filter: blur(4px);
                }
                
                .pdf-modal-close:hover {
                    transform: scale(1.1);
                    background: rgba(255, 255, 255, 0.2);
                    border-color: white;
                }
                
                .pdf-iframe {
                    width: 100%;
                    height: 100%;
                    border: none;
                    background: #f5f5f5;
                }

                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }

                @keyframes slideUp {
                    from { transform: translateY(20px); opacity: 0; }
                    to { transform: translateY(0); opacity: 1; }
                }

                @keyframes spin {
                    to { transform: rotate(360deg); }
                }
            `}</style>
        </div>
    );
}
