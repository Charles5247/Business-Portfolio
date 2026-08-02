import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import {
  SUPABASE_URL,
  SUPABASE_ANON_KEY,
  SUPABASE_CONFIGURED,
} from "./supabase-config.js";

/* ---------------------------------------------------------
   Mobile nav toggle
--------------------------------------------------------- */
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
    navToggle.textContent = isOpen ? "✕" : "☰";
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
      navToggle.textContent = "☰";
    });
  });
}

/* ---------------------------------------------------------
   Smooth scroll with header-offset correction
   (CSS scroll-behavior handles the animation; this corrects
   the final resting position so the fixed header never
   covers the section heading)
--------------------------------------------------------- */
const HEADER_OFFSET = 84;

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", (e) => {
    const targetId = anchor.getAttribute("href");
    if (!targetId || targetId === "#") return;
    const target = document.querySelector(targetId);
    if (!target) return;
    e.preventDefault();
    const top =
      target.getBoundingClientRect().top + window.pageYOffset - HEADER_OFFSET;
    window.scrollTo({ top, behavior: "smooth" });
  });
});

/* ---------------------------------------------------------
   Scroll reveal animation
--------------------------------------------------------- */
const revealEls = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window && revealEls.length) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 },
  );
  revealEls.forEach((el) => observer.observe(el));
} else {
  revealEls.forEach((el) => el.classList.add("in-view"));
}

/* ---------------------------------------------------------
   Quote request form -> Supabase
--------------------------------------------------------- */
const form = document.getElementById("quote-form");
const statusBox = document.getElementById("form-status");

function setStatus(message, type) {
  if (!statusBox) return;
  statusBox.textContent = message;
  statusBox.className = `form-status show ${type}`;
}

if (form) {
  const supabase = SUPABASE_CONFIGURED
    ? createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
    : null;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const submitBtn = form.querySelector('button[type="submit"]');

    const payload = {
      name: form.name.value.trim(),
      company: form.company.value.trim(),
      service_needed: form.service_needed.value,
      message: form.message.value.trim(),
      phone: form.phone.value.trim(),
    };

    if (
      !payload.name ||
      !payload.company ||
      !payload.service_needed ||
      !payload.phone
    ) {
      setStatus("Please fill in all required fields.", "error");
      return;
    }

    if (!SUPABASE_CONFIGURED || !supabase) {
      setStatus(
        "Form is not yet connected to the database. Please contact us directly at 0806 911 2138 / 0815 558 3192 or supremeworksynergy@gmail.com, or ask your developer to configure js/supabase-config.js.",
        "error",
      );
      return;
    }

    submitBtn.disabled = true;
    submitBtn.textContent = "Sending...";

    try {
      const { error } = await supabase.from("quote_requests").insert([payload]);
      if (error) throw error;

      setStatus(
        "Thank you. Your quote request has been received — our engineering team will contact you shortly.",
        "success",
      );
      form.reset();
    } catch (err) {
      console.error("Supabase insert failed:", err);
      setStatus(
        "Something went wrong sending your request. Please call us on 0806 911 2138 / 0815 558 3192 instead.",
        "error",
      );
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = "Request a Quote";
    }
  });
}

/* ---------------------------------------------------------
   Header background solidify on scroll (subtle)
--------------------------------------------------------- */
const header = document.querySelector(".site-header");
if (header) {
  const onScroll = () => {
    if (window.scrollY > 20) {
      header.style.boxShadow = "0 2px 12px rgba(0,0,0,0.25)";
    } else {
      header.style.boxShadow = "none";
    }
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

/* ---------------------------------------------------------
   Footer year
--------------------------------------------------------- */
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = String(new Date().getFullYear());
