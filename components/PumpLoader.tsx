'use client'
export default function PumpLoader() {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-b from-sky-50 to-sky-200">
      <div className="relative w-24 h-24">
        {/* Pump body */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-600 to-blue-400 shadow-lg"></div>
        {/* Rotating impeller */}
        <div className="absolute inset-3 rounded-full border-4 border-t-transparent border-blue-300 animate-spin-slow"></div>
        {/* Shaft core */}
        <div className="absolute inset-8 bg-white rounded-full shadow-inner"></div>
        {/* Water pulse effect */}
        <div className="absolute inset-0 rounded-full animate-ripple border-4 border-blue-200"></div>
      </div>
      <p className="mt-6 text-blue-700 text-xl font-semibold tracking-wide">
        Flowing Innovation...
      </p>
    </div>
  )
}
