"use client";

import posthog from "posthog-js";
import { useEffect } from 'react';

interface PosthogProviderProps {
  children: React.ReactNode;
}

export const PosthogProvider: React.FC<PosthogProviderProps> = ({ children }) => {

  useEffect(() => {
    // Init PostHog
    posthog.init("phc_hKK4bo8cHZrKuAVXfXGpfNSLSJuucUnguAgt2j6dgSV", {
      api_host: "https://a.thirdweb.com",
      autocapture: true,
      debug: false,
      capture_pageview: false,
      disable_session_recording: true,
    });
    // defere session recording start by 2 seconds because it synchronously loads JS
    const t = setTimeout(() => {
      posthog.startSessionRecording();
    }, 2_000);
    return () => {
      clearTimeout(t);
    };
  }, []);
  return (
    <>
      {children}
    </>
  );
};