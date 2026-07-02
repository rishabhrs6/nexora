export default function Badge() {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-5 py-2 backdrop-blur-xl">
      <div className="h-2 w-2 rounded-full bg-blue-400 shadow-[0_0_12px_#3b82f6]" />

      <span className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-300">
        AI Technology For Modern Clinics
      </span>
    </div>
  );
}