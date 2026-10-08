import { useEffect, useState } from "react";

const GlobalPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const popupClosed = sessionStorage.getItem("global-popup-closed");

    if (!popupClosed) {
      setIsOpen(true);
    }
  }, []);

  const handleClose = () => {
    sessionStorage.setItem("global-popup-closed", "true");
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <>
      <style>
        {`
          @keyframes popup-slide-down {
            from {
              opacity: 0;
              transform: translateY(-100px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .popup-slide-down {
            animation: popup-slide-down 0.9s cubic-bezier(0.22, 1, 0.36, 1);
          }
        `}
      </style>

      <div className="fixed inset-0 z-[9999] flex items-start justify-center bg-black/20 px-2 pt-[30px]">
        <div className="popup-slide-down relative w-fit max-w-[98vw]">
          <a
            href="https://serendipityartsfestival.com"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <img
              src="/popup.png"
              alt="Serendipity Arts Festival"
              className="block h-auto max-h-[97vh] w-auto max-w-[99vw] cursor-pointer object-contain"
            />
          </a>

          <button
            type="button"
            onClick={handleClose}
            aria-label="Close popup"
            className="absolute right-2 top-2 z-30 flex h-9 w-9 items-center justify-center rounded-full bg-black/70 text-2xl leading-none text-white transition hover:bg-black"
          >
            ×
          </button>
        </div>
      </div>
    </>
  );
};

export default GlobalPopup;
