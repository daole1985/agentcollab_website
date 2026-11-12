"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import Link from "next/link";
import GlowButton from "./GlowButton";
import { Loader2, ArrowUpRight, Headset, X } from "lucide-react";
import { createPortal } from "react-dom";
import FadeInUp from "./animations/FadeInUp";

type FormState = {
  fullName: string;
  phone: string;
  email: string;
  message: string;
};

type Errors = Partial<Record<keyof FormState, string>>;

interface ContactFormProps {
  autoFocus?: boolean;
  onSuccess?: () => void;
}

export default function ContactForm({
  autoFocus = false,
  onSuccess,
}: ContactFormProps) {
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

  useEffect(() => {
    if (autoFocus && !sent) {
      const timer = setTimeout(() => {
        fullNameInputRef.current?.focus();
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [autoFocus, sent]);

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

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (sent) {
      const scrollbarWidth =
        window.innerWidth - document.documentElement.clientWidth;
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
  }, [sent]);

  const handleCloseSentModal = useCallback(() => {
    setSent(false);
    setForm({ fullName: "", phone: "", email: "", message: "" });
    setErrors({});
    if (onSuccess) onSuccess();
  }, [onSuccess]);

  useEffect(() => {
    if (!sent) return;

    const timer = setTimeout(() => {
      handleCloseSentModal();
    }, 5000);

    return () => clearTimeout(timer);
  }, [sent, handleCloseSentModal]);

  const inputCls =
    "w-full bg-[#04070d] border border-[rgba(216,231,242,0.07)] rounded-lg px-4 py-3 text-sm text-white placeholder:text-[#8b95a7] outline-none focus:border-[rgba(213,219,230,0.15)] transition-colors";

  const errCls = "mt-1 text-[11px] text-[#ff5a5a]";

  return (
    <>
      <div>
        <FadeInUp className="text-center">
          <div className="mx-auto mb-5 h-12 w-12 flex items-center justify-center bg-[#10131c] rounded-lg shadow-[rgba(207,231,255,0.2)_0px_1px_1px_0px_inset,0px_0.796192px_0.796192px_-0.875px_rgba(87,133,179,0.48),0px_2.41451px_2.41451px_-1.75px_rgba(87,133,179,0.455),0px_6.38265px_6.38265px_-2.625px_rgba(87,133,179,0.4),0px_20px_20px_-3.5px_rgba(87,133,179,0.21)]">
            <Headset className="h-5 w-5" />
          </div>
          <h3 className="text-xl font-medium mb-6">
            Have a question? Let's talk.
          </h3>
        </FadeInUp>
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
              placeholder="Email *"
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

      {mounted &&
        sent &&
        createPortal(
          <div className="fixed inset-0 z-[1040] flex items-center justify-center p-4">
            {/* overlay */}
            <div
              className="absolute inset-0 bg-[#10131c] opacity-90 backdrop-blur-sm"
              onClick={handleCloseSentModal}
            />

            <div className="relative w-full max-w-xl p-6 sm:p-8 bg-[#04070d] rounded-2xl border border-solid border-[rgba(216,231,242,0.07)] shadow-[rgba(207,231,255,0.2)_0px_2px_1px_0px_inset] overflow-hidden animate-zoomIn">
              {/* close */}
              <button
                onClick={handleCloseSentModal}
                className="absolute right-4 top-4 w-8 h-8 flex items-center justify-center text-white/70 hover:text-white transition-colors"
              >
                <X className="size-4" />
              </button>

              <div className="pt-2 pr-6">
                <h3 className="text-2xl md:text-3xl leading-[1.25] font-medium text-white">
                  Your information has been sent!
                </h3>
                <p className="mt-5 text-sm leading-relaxed text-[#8b95a7]">
                  Thank you for contacting us. <br /> Our team will get back to
                  you as soon as possible via the provided email or phone
                  number.
                </p>
                <p className="mt-5 text-sm leading-relaxed text-[#8b95a7]">
                  While waiting, you can explore more about Agentcollab{" "}
                  <Link
                    href="https://ai.cibot-sandbox.byte.vn/register"
                    onClick={handleCloseSentModal}
                    className="font-semibold text-white underline"
                    target="_blank"
                  >
                    here
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>,
          document.body,
        )}
    </>
  );
}
