import React, { useEffect, useState } from "react";

export function FooterBackgroundGradient() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-cyan-500/5 dark:bg-cyan-500/5 blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-purple-500/5 dark:bg-purple-600/5 blur-[100px]" />
    </div>
  );
}

export const TextTypingEffect = ({ text }: { text: string }) => {
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    let timer: any;
    
    const handleType = () => {
      const fullText = text;
      
      if (!isDeleting) {
        setDisplayText(fullText.substring(0, displayText.length + 1));
        setTypingSpeed(200);
        
        if (displayText === fullText) {
          timer = setTimeout(() => {
            setIsDeleting(true);
          }, 2000);
          return;
        }
      } else {
        setDisplayText(fullText.substring(0, displayText.length - 1));
        setTypingSpeed(100);
        
        if (displayText === "") {
          setIsDeleting(false);
          setTypingSpeed(600);
        }
      }
      
      timer = setTimeout(handleType, typingSpeed);
    };

    timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, typingSpeed, text]);

  return (
    <div className="w-full flex items-center justify-center py-8 select-none font-sans tracking-widest uppercase">
      <span className="text-6xl md:text-[100px] font-black text-neutral-300 dark:text-neutral-800/60 leading-none">
        {displayText}
      </span>
      <span className="text-6xl md:text-[100px] font-black text-blue-600 dark:text-cyan-400 animate-pulse leading-none">
        |
      </span>
    </div>
  );
};
