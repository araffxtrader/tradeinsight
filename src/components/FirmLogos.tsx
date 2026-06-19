"use client";

export function FTMOLogo({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 120 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 6h20c4 0 7 3 7 7v6c0 4-3 7-7 7H8V6z" fill="currentColor" opacity="0.15"/>
      <path d="M12 10h4v12h-4V10zM18 10h4v12h-4V10zM24 10h4c3 0 4 2 4 4v4c0 2-1 4-4 4h-4V10z" fill="currentColor"/>
      <path d="M38 10h5l4 10 4-10h5l-7 16h-4L38 10zM52 10h4v16h-4V10z" fill="currentColor"/>
      <path d="M60 10h5c3 0 5 2 5 5 0 2-1 4-3 5l5 6h-5l-4-6v6h-3V10zm3 3v5h2c1 0 2-1 2-2s-1-2-2-2h-2z" fill="currentColor"/>
      <text x="78" y="21" fontFamily="Poppins, sans-serif" fontWeight="700" fontSize="14" fill="currentColor">FTMO</text>
    </svg>
  );
}

export function The5ersLogo({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 130 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="16" r="14" stroke="currentColor" strokeWidth="2" opacity="0.3"/>
      <text x="10" y="22" fontFamily="Poppins, sans-serif" fontWeight="800" fontSize="16" fill="currentColor">5</text>
      <text x="36" y="21" fontFamily="Poppins, sans-serif" fontWeight="600" fontSize="13" fill="currentColor">THE5ERS</text>
    </svg>
  );
}

export function FundedNextLogo({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 150 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="8" width="4" height="16" rx="2" fill="currentColor"/>
      <rect x="8" y="12" width="4" height="12" rx="2" fill="currentColor" opacity="0.7"/>
      <rect x="14" y="6" width="4" height="18" rx="2" fill="currentColor" opacity="0.5"/>
      <text x="24" y="21" fontFamily="Poppins, sans-serif" fontWeight="700" fontSize="12" fill="currentColor">FUNDED</text>
      <text x="92" y="21" fontFamily="Poppins, sans-serif" fontWeight="400" fontSize="12" fill="currentColor">NEXT</text>
    </svg>
  );
}

export function TopStepLogo({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 120 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 24L14 8L24 24" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="14" cy="8" r="3" fill="currentColor"/>
      <text x="32" y="21" fontFamily="Poppins, sans-serif" fontWeight="700" fontSize="13" fill="currentColor">TOPSTEP</text>
    </svg>
  );
}

export function ApexLogo({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 4L28 28H4L16 4z" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.1"/>
      <path d="M16 10L22 24H10L16 10z" fill="currentColor" opacity="0.4"/>
      <text x="36" y="21" fontFamily="Poppins, sans-serif" fontWeight="800" fontSize="14" letterSpacing="1" fill="currentColor">APEX</text>
    </svg>
  );
}

export function MyFundedFuturesLogo({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 160 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="6" width="20" height="20" rx="4" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.1"/>
      <path d="M8 16h8M12 12v8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <text x="28" y="17" fontFamily="Poppins, sans-serif" fontWeight="700" fontSize="9" fill="currentColor">MY FUNDED</text>
      <text x="28" y="26" fontFamily="Poppins, sans-serif" fontWeight="400" fontSize="9" fill="currentColor">FUTURES</text>
    </svg>
  );
}
