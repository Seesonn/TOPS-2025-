import { useEffect, useState } from "react";
import { ArrowLeft, Home, RefreshCw } from "lucide-react";

export default function NotFound404() {
  const [isLoading, setIsLoading] = useState(true);
  const [countdown, setCountdown] = useState(10);
  const [isRedirectionStarted, setIsRedirectionStarted] = useState(false);

  useEffect(() => {
    const loadTimer = setTimeout(() => {
      setIsLoading(false);
    }, 1200);
    return () => clearTimeout(loadTimer);
  }, []);

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else if (!isRedirectionStarted) {
      setIsRedirectionStarted(true);
      window.location.href = "/";
    }
  }, [countdown, isRedirectionStarted]);

  const goBack = () => window.history.back();
  const goHome = () => {
    setIsRedirectionStarted(true);
    window.location.href = "/";
  };

  return (
    <div className="relative h-screen w-full overflow-hidden bg-[#223F80]">
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute -left-20 -top-20 h-80 w-80 rounded-full bg-[#F58432] mix-blend-multiply blur-3xl"></div>
        <div className="absolute -right-20 bottom-1/4 h-64 w-64 rounded-full bg-[#2783BC] mix-blend-multiply blur-3xl"></div>
        <div className="absolute right-1/3 top-1/3 h-96 w-96 rotate-45 rounded-3xl bg-[#F58432]/30 blur-3xl"></div>
      </div>

      {isLoading && (
        <div className="absolute inset-0 z-50 flex items-center justify-center bg-[#223F80]/90 backdrop-blur-sm">
          <div className="relative h-24 w-24">
            <div className="absolute inset-0 animate-spin rounded-full border-8 border-[#F58432] border-t-transparent"></div>
            <RefreshCw className="absolute left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 animate-pulse text-[#F58432]" />
          </div>
        </div>
      )}

      <div
        className={`relative z-10 flex h-full w-full flex-col items-center justify-center px-4 transition-all duration-700 ease-out ${
          isLoading ? "opacity-0 translate-y-10" : "opacity-100"
        }`}
      >
        <div className="relative mb-12">
          <div className="absolute -inset-4 rounded-full bg-[#F58432] opacity-20 blur-xl"></div>
          <div className="relative flex items-center">
            <div className="text-[180px] font-black text-white opacity-90 drop-shadow-lg md:text-[220px]">
              4
            </div>
            <div className="relative mx-6 h-32 w-32 md:h-40 md:w-40">
              <div className="absolute inset-0 animate-pulse rounded-full bg-[#F58432] shadow-[0_0_30px_5px_rgba(245,132,50,0.5)]"></div>
              <div className="absolute inset-4 animate-pulse rounded-full bg-white opacity-30 mix-blend-overlay"></div>
            </div>
            <div className="text-[180px] font-black text-white opacity-90 drop-shadow-lg md:text-[220px]">
              4
            </div>
          </div>
        </div>

        <div className="mb-12 text-center">
          <h1 className="mb-6 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
            Page Not <span className="text-[#F58432]">Found</span>
          </h1>
          <p className="mx-auto max-w-lg text-lg text-white/80">
            The content you're looking for has moved or doesn't exist.
            <br />
            Let's get you back on track!
          </p>
        </div>

        <div className="flex flex-col items-center gap-6 sm:flex-row">
          <button
            onClick={goBack}
            className="group flex items-center gap-3 rounded-xl bg-[#2783BC] px-8 py-4 font-medium text-white transition-all hover:bg-[#2783BC]/90 hover:shadow-lg hover:shadow-[#2783BC]/30"
          >
            <ArrowLeft className="h-5 w-5 transition-transform group-hover:-translate-x-1" />
            <span>Go Back</span>
          </button>

          <button
            onClick={goHome}
            className="flex items-center gap-3 rounded-xl bg-[#F58432] px-8 py-4 font-medium text-white shadow-lg transition-all hover:bg-[#F58432]/90 hover:shadow-[#F58432]/40"
          >
            <Home className="h-5 w-5" />
            <span>Return Home</span>
            <span className="ml-2 text-sm opacity-80">({countdown}s)</span>
          </button>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#223F80] to-transparent"></div>

      {/* Footer */}
      <footer className="absolute bottom-4 left-0 right-0 z-10 text-center text-sm text-white/50">
        © {new Date().getFullYear()} TOPS-2025. All rights reserved.
      </footer>
    </div>
  );
}
