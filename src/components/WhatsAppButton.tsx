import { contact } from "../data/restaurant";

export default function WhatsAppButton() {
  return (
    <a
      href={contact.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="group fixed bottom-6 right-6 z-50 flex items-center gap-3"
    >
      {/* Tooltip */}
      <span className="hidden sm:block rounded-lg bg-white px-3 py-2 text-sm font-semibold text-charcoal shadow-lg opacity-0 translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 pointer-events-none">
        ¡Chateá con nosotros!
      </span>

      {/* Button */}
      <span className="relative flex items-center justify-center w-16 h-16 bg-[#25d366] rounded-full shadow-[0_4px_16px_rgba(37,211,102,0.4)] hover:shadow-[0_6px_24px_rgba(37,211,102,0.6)] hover:scale-110 active:scale-95 transition-all duration-300">
        {/* Pulse ring */}
        <span className="absolute inset-0 rounded-full bg-[#25d366] animate-ping opacity-20" />

        <svg viewBox="0 0 32 32" className="relative w-8 h-8 fill-white">
          <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16c0 3.5 1.128 6.744 3.046 9.378L1.054 31.29l6.118-1.958A15.9 15.9 0 0 0 16.004 32C24.826 32 32 24.822 32 16S24.826 0 16.004 0zm9.32 22.608c-.39 1.1-1.932 2.014-3.18 2.28-.852.18-1.964.324-5.71-1.228-4.8-1.986-7.89-6.862-8.128-7.182-.23-.32-1.93-2.572-1.93-4.904 0-2.332 1.222-3.478 1.656-3.954.39-.432.924-.608 1.238-.608.15 0 .284.008.406.014.434.018.652.044.938.726.356.852 1.224 2.93 1.33 3.144.108.214.216.508.068.794-.14.292-.264.472-.478.726-.214.254-.44.45-.654.726-.194.242-.412.5-.176.934.236.434 1.048 1.728 2.25 2.8 1.546 1.378 2.85 1.806 3.254 2.006.35.174.632.144.866-.088.286-.286.614-.762.948-1.23.238-.334.538-.376.89-.226.356.144 2.248 1.06 2.634 1.254.386.194.644.286.738.45.094.164.094.948-.296 2.048z" />
        </svg>
      </span>
    </a>
  );
}
