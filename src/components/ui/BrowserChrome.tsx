import React from 'react';

interface BrowserChromeProps {
  title?: string;
  url?: string;
  children: React.ReactNode;
  className?: string;
}

export const BrowserChrome: React.FC<BrowserChromeProps> = ({
  title = "Application Window",
  url = "https://app.pixelbuilder.in",
  children,
  className = "",
}) => {
  return (
    <div className={`bg-white rounded-2xl border border-[#E3E3DD] shadow-xl overflow-hidden ${className}`}>
      {/* Browser Bar */}
      <div className="bg-[#F6F6F2] border-b border-[#E3E3DD] px-4 py-2.5 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 shrink-0">
          <span className="w-3 h-3 rounded-full bg-[#FF5F56] border border-[#E0443E]/50 inline-block" />
          <span className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123]/50 inline-block" />
          <span className="w-3 h-3 rounded-full bg-[#27C93F] border border-[#1AAB29]/50 inline-block" />
        </div>
        
        <div className="flex-1 max-w-md mx-auto hidden sm:flex items-center justify-center bg-white border border-[#E3E3DD] rounded-lg px-3 py-1 text-xs text-[#686868] font-mono truncate">
          <span className="text-[#176B50] mr-1.5 font-bold">🔒</span>
          <span className="truncate">{url}</span>
        </div>

        <div className="text-[11px] text-[#686868] font-medium hidden md:block">
          {title}
        </div>
      </div>

      {/* Screen Content */}
      <div className="relative overflow-hidden bg-white">
        {children}
      </div>
    </div>
  );
};
