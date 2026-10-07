export function Blobs({ flip = false }: { flip?: boolean }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 1440 800"
      preserveAspectRatio="none"
      className={`pointer-events-none absolute inset-0 size-full ${flip ? "-scale-x-100" : ""}`}
    >
      <path d="M0 520C180 420 300 640 520 600S860 380 1080 460s260 160 360 60V800H0Z" fill="#fff" fillOpacity="0.28" />
      <path d="M0 300C140 220 260 360 420 320S700 120 940 200s340 120 500 20V0H0Z" fill="#12271F" fillOpacity="0.05" />
    </svg>
  );
}
