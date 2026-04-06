import { useState, useEffect } from "react";

const STORAGE_KEY = "announcement-banner-dismissed";

export default function AnnouncementBanner({ onDismiss }: { onDismiss: () => void }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem(STORAGE_KEY)) {
      setVisible(true);
    }
  }, []);

  if (!visible) return null;

  const dismiss = () => {
    localStorage.setItem(STORAGE_KEY, "1");
    setVisible(false);
    onDismiss();
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] bg-amber-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between py-2 text-sm sm:text-base">
        <p className="flex-1 text-center font-medium">
          🎉 Nuevo menú de primavera — Reserva tu mesa para la terraza exterior
        </p>
        <button
          onClick={dismiss}
          className="ml-4 shrink-0 p-1 rounded hover:bg-amber-800 transition-colors"
          aria-label="Cerrar anuncio"
        >
          ✕
        </button>
      </div>
    </div>
  );
}
