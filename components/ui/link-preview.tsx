"use client";

import { encode } from "qss";
import { useState, useMemo } from "react";

interface LinkPreviewProps {
  url: string;
  title: string;
  fallbackImageSrc?: string;
  useLivePreview?: boolean;
}

const LinkPreview = ({
  url,
  title,
  fallbackImageSrc = "",
  useLivePreview = true,
}: LinkPreviewProps) => {
  const [failed, setFailed] = useState(false);
  const [loaded, setLoaded] = useState(false);

  // With embed=screenshot.url, Microlink redirects directly to the screenshot image
  // This works as an <img src> — no fetch needed, no CORS issue
  const previewSrc = useMemo(() => {
    if (!useLivePreview || !url) return fallbackImageSrc;

    const params = encode({
      url,
      screenshot: true,
      meta: false,
      embed: "screenshot.url",
      force: true,
      colorScheme: "dark",
      "viewport.isMobile": false,
      "viewport.deviceScaleFactor": 1,
      "viewport.width": 1440,
      "viewport.height": 900,
    });

    return `https://api.microlink.io/?${params}`;
  }, [url, useLivePreview, fallbackImageSrc]);

  const activeSrc = failed ? fallbackImageSrc : previewSrc;

  if (!activeSrc) return null;

  return (
    <div className="relative w-full h-full overflow-hidden rounded-t-lg bg-gray-200 dark:bg-gray-800">
      {/* Skeleton shown until image loads */}
      {!loaded && (
        <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800 animate-pulse" />
      )}
      <img
        src={activeSrc}
        alt={`Live preview of ${title}`}
        loading="lazy"
        onError={() => {
          setFailed(true);
          setLoaded(true);
        }}
        onLoad={() => setLoaded(true)}
        className="w-full h-full object-cover object-top transition-transform duration-300 ease-in-out group-hover:scale-105"
      />
    </div>
  );
};

export default LinkPreview;
