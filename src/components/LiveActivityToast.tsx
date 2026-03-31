/**
 * LiveActivityToast.tsx
 *
 * Emotionally powerful floating toasts that simulate live community activity.
 * A new notification slides in from the bottom-left every 8–14 seconds,
 * stays for 4.5s, then fades out. Max 2 toasts visible at once.
 *
 * Hidden on mobile (below md breakpoint).
 */

import { useState, useEffect, useCallback } from "react";
import { Heart, MessageCircle, Shield, Users } from "lucide-react";

interface Toast {
  id: number;
  icon: React.ReactNode;
  line1: string;
  line2: string;
  color: string; // tailwind bg class for the icon wrapper
}

const ACTIVITIES: Omit<Toast, "id">[] = [
  {
    icon: <MessageCircle className="w-4 h-4" />,
    line1: "Priya S. just connected with a volunteer",
    line2: "2 minutes ago",
    color: "bg-primary/15 text-primary",
  },
  {
    icon: <Heart className="w-4 h-4 fill-rose-500 text-rose-500" />,
    line1: "\"I finally felt heard for the first time.\"",
    line2: "Verified review · just now",
    color: "bg-rose-100 text-rose-600",
  },
  {
    icon: <Shield className="w-4 h-4" />,
    line1: "A new licensed therapist joined Anora",
    line2: "Specialising in anxiety & burnout",
    color: "bg-emerald-100 text-emerald-700",
  },
  {
    icon: <Users className="w-4 h-4" />,
    line1: "23 people are talking right now",
    line2: "All sessions fully encrypted",
    color: "bg-primary/15 text-primary",
  },
  {
    icon: <MessageCircle className="w-4 h-4" />,
    line1: "Alex T. started their healing journey",
    line2: "3 minutes ago",
    color: "bg-primary/15 text-primary",
  },
  {
    icon: <Heart className="w-4 h-4 fill-rose-500 text-rose-500" />,
    line1: "\"You saved my night. Thank you, Anora.\"",
    line2: "Anonymous · just now",
    color: "bg-rose-100 text-rose-600",
  },
  {
    icon: <Users className="w-4 h-4" />,
    line1: "10,000+ people have found peace here",
    line2: "Join them today",
    color: "bg-amber-100 text-amber-700",
  },
];

let toastCounter = 0;

export const LiveActivityToast = () => {
  const [toasts, setToasts] = useState<(Toast & { exiting: boolean })[]>([]);
  const [activityIndex, setActivityIndex] = useState(0);

  const addToast = useCallback(() => {
    const activity = ACTIVITIES[activityIndex % ACTIVITIES.length];
    const id = ++toastCounter;
    const newToast = { ...activity, id, exiting: false };

    setToasts(prev => {
      // max 2 on screen
      const clamped = prev.length >= 2 ? prev.slice(1) : prev;
      return [...clamped, newToast];
    });
    setActivityIndex(i => i + 1);

    // Auto-remove after 4500ms
    setTimeout(() => {
      setToasts(prev =>
        prev.map(t => t.id === id ? { ...t, exiting: true } : t)
      );
      setTimeout(() => {
        setToasts(prev => prev.filter(t => t.id !== id));
      }, 500);
    }, 4500);
  }, [activityIndex]);

  useEffect(() => {
    // First one fires after 5s, then every 10–14s
    const first = setTimeout(addToast, 5000);
    return () => clearTimeout(first);
  }, []); // only once on mount

  useEffect(() => {
    const interval = setInterval(addToast, 11000);
    return () => clearInterval(interval);
  }, [addToast]);

  return (
    <div
      aria-live="polite"
      className="fixed bottom-6 left-6 z-[9998] flex flex-col gap-3 pointer-events-none hidden md:flex"
    >
      {toasts.map(toast => (
        <div
          key={toast.id}
          className="pointer-events-auto flex items-center gap-3 bg-white border border-border/60 shadow-lg rounded-2xl px-4 py-3 max-w-[280px]"
          style={{
            animation: toast.exiting
              ? "toast-out 0.4s cubic-bezier(0.16,1,0.3,1) forwards"
              : "toast-in 0.5s cubic-bezier(0.16,1,0.3,1) forwards",
          }}
        >
          <style>{`
            @keyframes toast-in {
              from { opacity: 0; transform: translateX(-24px) scale(0.95); }
              to   { opacity: 1; transform: translateX(0) scale(1); }
            }
            @keyframes toast-out {
              from { opacity: 1; transform: translateX(0) scale(1); }
              to   { opacity: 0; transform: translateX(-12px) scale(0.95); }
            }
          `}</style>
          <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${toast.color}`}>
            {toast.icon}
          </div>
          <div className="min-w-0">
            <p className="text-xs font-semibold text-foreground leading-snug line-clamp-2">{toast.line1}</p>
            <p className="text-[10px] text-muted-foreground mt-0.5 font-medium">{toast.line2}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LiveActivityToast;
