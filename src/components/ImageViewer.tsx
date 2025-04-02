
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
        <DialogContent className="w-full max-w-4xl p-0 bg-transparent border-none transition-all duration-300 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95">
          <DialogTitle className="sr-only">{alt}</DialogTitle>
          <div className="p-1 bg-white/10 rounded-lg backdrop-blur-sm transform transition-all duration-500 scale-100">
            <img
              src={src}
              alt={alt}
              className="w-full h-full object-contain max-h-[80vh] rounded transition-transform duration-500"
            />
            <DialogDescription className="sr-only">Full size view of {alt}</DialogDescription>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
