
import React, { useState } from "react";
import { Dialog, DialogContent, DialogOverlay, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

interface ImageViewerProps {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
  aspectRatio?: "auto" | "square" | "video" | "portrait";
}

export function ImageViewer({
  src,
  alt,
  className,
  imageClassName,
  aspectRatio = "auto",
}: ImageViewerProps) {
  const [isOpen, setIsOpen] = useState(false);

  const getAspectRatioClass = () => {
    switch (aspectRatio) {
      case "square":
        return "aspect-square";
      case "video":
        return "aspect-video";
      case "portrait":
        return "aspect-[3/4]";
      default:
        return "";
    }
  };

  return (
    <>
      <div 
        className={cn("cursor-pointer transition-all hover:opacity-90 hover:scale-[1.01] relative", className)} 
        onClick={() => setIsOpen(true)}
      >
        <img
          src={src}
          alt={alt}
          className={cn("w-full h-full object-cover", getAspectRatioClass(), imageClassName)}
        />
      </div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogOverlay className="bg-black/80 backdrop-blur-sm transition-all duration-700" />
        <DialogContent className="w-full max-w-4xl p-0 bg-transparent border-none transition-all duration-700 
          data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 
          data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95">
          <DialogTitle className="sr-only">{alt}</DialogTitle>
          <div className="p-2 bg-white/10 rounded-lg backdrop-blur-sm transform transition-all duration-1000 
            data-[state=open]:scale-100 data-[state=open]:rotate-0 data-[state=closed]:scale-90 data-[state=closed]:rotate-3">
            <img
              src={src}
              alt={alt}
              className="w-full h-full object-contain max-h-[80vh] rounded shadow-2xl 
                transition-all duration-1000 data-[state=open]:opacity-100 data-[state=closed]:opacity-0"
              style={{
                transformOrigin: 'center',
                animation: isOpen ? 'imageEntrance 1.2s cubic-bezier(0.22, 1, 0.36, 1)' : 'none'
              }}
            />
            <style jsx global>{`
              @keyframes imageEntrance {
                0% { opacity: 0; transform: scale(0.8) translateY(30px); }
                40% { opacity: 1; }
                100% { opacity: 1; transform: scale(1) translateY(0); }
              }
            `}</style>
            <DialogDescription className="sr-only">Full size view of {alt}</DialogDescription>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
