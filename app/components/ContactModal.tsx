"use client";

import { useEffect, useState, useRef } from "react";
import GlowButton from "./GlowButton";
import { X, Loader2, ArrowUpRight } from "lucide-react";
import { createPortal } from "react-dom";

type FormState = {
  fullName: string;
  phone: string;
  email: string;
  message: string;
};

type Errors = Partial<Record<keyof FormState, string>>;

export default function ContactModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const fullNameInputRef = useRef<HTMLInputElement>(null);

  const [form, setForm] = useState<FormState>({
    fullName: "",
    phone: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<Errors>({});
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (open && !sent) {
      const timer = setTimeout(() => {
        fullNameInputRef.current?.focus();
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [open, sent]);

  useEffect(() => {
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;

    if (open) {
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    }

    return () => {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    };
  }, [open]);

  // ===== VALIDATE 1 FIELD =====
  const validateField = (name: keyof FormState, value: string): string => {
    switch (name) {
      case "fullName":
        if (!value.trim()) return "Please enter your full name";
        if (value.trim().length > 100)
          return "Full name must be less than 100 characters";
        return "";

      case "phone":
        if (!value.trim()) return "Please enter your phone number";
        if (!/^[+\d\s()-]{7,20}$/.test(value.trim()))
          return "Invalid phone number";
        return "";

      case "email":
        if (value.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim()))
          return "Invalid email address";
        return "";

      case "message":
        if (value.length > 1000)
          return "Message must be less than 1000 characters";
        return "";

      default:
        return "";
    }
  };

  // ===== VALIDATE ALL (SUBMIT) =====
  const validate = (): boolean => {
    const e: Errors = {};

    (Object.keys(form) as (keyof FormState)[]).forEach((key) => {
      const error = validateField(key, form[key]);
      if (error) e[key] = error;
    });

    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (ev?: React.FormEvent | React.MouseEvent) => {
    ev?.preventDefault();

    if (!validate()) return;

    setLoading(true);
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    setSent(true);
  };

  const handleChange = (field: keyof FormState, value: string) => {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));

    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  const handleCloseModal = () => {
    onClose();
    setTimeout(() => {
      setForm({ fullName: "", phone: "", email: "", message: "" });
      setErrors({});
      setSent(false);
    }, 200);
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  const inputCls =
    "w-full bg-[#04070d] border border-[rgba(216,231,242,0.07)] rounded-lg px-4 py-3 text-sm text-white placeholder:text-[#8b95a7] outline-none focus:border-[rgba(213,219,230,0.15)] transition-colors";

  const errCls = "mt-1 text-[11px] text-[#ff5a5a]";

  if (!mounted || !open) return null;

  return createPortal(
    <div className="fixed inset-0 z-[1040] flex items-center justify-center p-4">
      {/* overlay */}
      <div
        className="absolute inset-0 bg-[#10131c] opacity-90 backdrop-blur-sm"
        onClick={handleCloseModal}
      />

      <div className="relative w-full max-w-xl p-6 sm:p-8 bg-[#04070d] rounded-2xl border border-solid border-[rgba(216,231,242,0.07)] shadow-[rgba(207,231,255,0.2)_0px_2px_1px_0px_inset] overflow-hidden animate-zoomIn">
        {/* close */}
        <button
          onClick={handleCloseModal}
          className="absolute right-2 top-2 w-8 h-8 flex items-center justify-center"
        >
          <X className="size-4" />
        </button>

        {sent ? (
          <div className="pt-4 pr-8">
            <h3 className="text-2xl md:text-3xl leading-[1.25] font-medium">
              Your information has been sent!
            </h3>
            <p className="mt-5 text-sm leading-relaxed">
              Thank you for contacting us. <br /> Our team will get back to you
              as soon as possible via the provided email or phone number.
            </p>
            <p className="mt-5 text-sm leading-relaxed">
              While waiting, you can explore more Agent Builder platform{" "}
              <a
                href="#features"
                onClick={handleCloseModal}
                className="font-semibold text-white underline"
              >
                here
              </a>
              .
            </p>
          </div>
        ) : (
          <div>
            <h3 className="text-2xl md:text-3xl leading-[1.25] font-medium">
              <span className="inline-block bg-[linear-gradient(138deg,#d5dbe6_51.657657657657666%,#04070d_166%)] bg-clip-text text-transparent">
                Need support?{" "}
                <span className="font-serif-italic">Contact us</span> now!{" "}
              </span>{" "}
            </h3>
            <p className="mt-1 mb-8 text-sm leading-relaxed">
              Please fill out the form below and we’ll get back to you as soon
              as possible.
            </p>
            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              <div>
                <input
                  ref={fullNameInputRef}
                  type="text"
                  placeholder="Full Name *"
                  value={form.fullName}
                  onChange={(e) => handleChange("fullName", e.target.value)}
                  className={inputCls}
                  maxLength={100}
                />
                {errors.fullName && <p className={errCls}>{errors.fullName}</p>}
              </div>
              <div>
                <input
                  type="tel"
                  placeholder="Phone Number *"
                  value={form.phone}
                  onChange={(e) => handleChange("phone", e.target.value)}
                  className={inputCls}
                />
                {errors.phone && <p className={errCls}>{errors.phone}</p>}
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  value={form.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  className={inputCls}
                />
                {errors.email && <p className={errCls}>{errors.email}</p>}
              </div>
              <div>
                <textarea
                  placeholder="Message"
                  value={form.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  className={`${inputCls} min-h-[110px]`}
                  maxLength={1000}
                />
                {errors.message && <p className={errCls}>{errors.message}</p>}
              </div>
              <div>
                <GlowButton
                  as="button"
                  type="submit"
                  disabled={loading}
                  className="w-full"
                  startIcon={
                    loading ? <Loader2 className="size-4 animate-spin" /> : null
                  }
                  endIcon={!loading ? <ArrowUpRight size={18} /> : null}
                >
                  {loading ? "Sending..." : "Send Now"}
                </GlowButton>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>,
    document.body,
  );
}
