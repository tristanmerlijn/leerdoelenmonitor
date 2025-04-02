
import React, { useState } from "react";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
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
    <HoverCard openDelay={100} closeDelay={300}>
      <HoverCardTrigger asChild>
        <div 
          className={cn("cursor-pointer transition-all hover:opacity-90 hover:scale-[1.01] relative", className)}
        >
          <img
            src={src}
            alt={alt}
            className={cn("w-full h-full object-cover", getAspectRatioClass(), imageClassName)}
          />
        </div>
      </HoverCardTrigger>
      <HoverCardContent className="w-auto max-w-4xl p-1 bg-white/10 backdrop-blur-sm rounded-lg border-none shadow-xl">
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-contain max-h-[80vh] rounded"
        />
      </HoverCardContent>
    </HoverCard>
  );
}
