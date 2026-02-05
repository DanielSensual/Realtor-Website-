"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

interface CommunityMediaProps {
    slug: string;
    heroImage: string;
    name: string;
}

/**
 * Community media component with video/image fallback
 * Attempts to load video first, falls back to static image
 */
export function CommunityMedia({ slug, heroImage, name }: CommunityMediaProps) {
    const [hasVideo, setHasVideo] = useState(false);
    const [videoError, setVideoError] = useState(false);

    const videoPath = `/videos/${slug}.mp4`;

    useEffect(() => {
        // Check if video exists
        fetch(videoPath, { method: 'HEAD' })
            .then((res) => {
                if (res.ok) setHasVideo(true);
            })
            .catch(() => setHasVideo(false));
    }, [videoPath]);

    if (hasVideo && !videoError) {
        return (
            <video
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                autoPlay
                muted
                loop
                playsInline
                onError={() => setVideoError(true)}
            >
                <source src={videoPath} type="video/mp4" />
            </video>
        );
    }

    return (
        <Image
            src={heroImage}
            alt={name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
    );
}
