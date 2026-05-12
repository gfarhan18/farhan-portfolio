export default function Background() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div className="absolute inset-0 bg-aurora" />
      <div className="absolute inset-0 bg-grid-pattern bg-[size:48px_48px] opacity-[0.12] mask-fade-b" />
      <div className="absolute -top-32 left-1/2 h-[42rem] w-[42rem] -translate-x-1/2 rounded-full bg-brand-500/10 blur-[120px]" />
      <div className="absolute -bottom-40 right-0 h-[36rem] w-[36rem] rounded-full bg-accent-500/10 blur-[140px]" />
    </div>
  );
}
