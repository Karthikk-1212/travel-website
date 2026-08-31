"use client";

import { useState } from "react";
import { vehicles } from "@/data/routes-vehicles";
import { WHATSAPP_NUMBER } from "@/lib/whatsapp-config";

const initialState = {
  name: "",
  mobile: "",
  email: "",
  pickup: "",
  destination: "",
  date: "",
  vehicle: "",
  passengers: "",
  message: "",
};

const MOBILE_REGEX = /^(?:\+91)?[6-9]\d{9}$/;

export default function BookingWidget() {
  const [form, setForm] = useState(initialState);
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);

  function validate(): string | null {
    if (!form.name.trim()) return "Please enter your full name.";
    if (!form.mobile.trim()) return "Please enter your mobile number.";
    if (!MOBILE_REGEX.test(form.mobile.trim())) {
      return "Please enter a valid 10-digit Indian mobile number.";
    }
    if (!form.destination.trim()) return "Please enter a destination.";
    if (!form.date.trim()) return "Please select a travel date.";
    if (!form.vehicle.trim()) return "Please select a vehicle.";
    if (!form.passengers.trim()) return "Please enter number of passengers.";
    return null;
  }

  function formatDate(iso: string) {
    if (!iso) return "";
    const [y, m, d] = iso.split("-");
    return `${d}/${m}/${y}`;
  }

  function buildMessage() {
    const lines = [
      "NEW TRAVEL ENQUIRY",
      "",
      `Name: ${form.name}`,
      `Mobile: ${form.mobile}`,
    ];
    if (form.email.trim()) lines.push(`Email: ${form.email}`);
    lines.push(
      "",
      `Pickup Location: ${form.pickup || "Not specified"}`,
      `Destination: ${form.destination}`,
      "",
      `Travel Date: ${formatDate(form.date)}`,
      `Vehicle: ${form.vehicle}`,
      `Passengers: ${form.passengers}`
    );
    if (form.message.trim()) {
      lines.push("", "Message:", form.message);
    }
    return lines.join("\n");
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(false);

    const validationError = validate();
    if (validationError) {
      setError(validationError);
      return;
    }
    setError("");

    const message = buildMessage();
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank");
    setSent(true);
  }

  return (
    <section id="booking" className="relative -mt-24 z-20">
      <div className="container">
        <form
          onSubmit={handleSubmit}
          className="carved-card grid grid-cols-1 gap-4 p-6 md:grid-cols-3 md:p-8"
        >
          <div className="md:col-span-3">
            <h2 className="font-display text-2xl font-semibold text-parchment-50">
              Plan your trip
            </h2>
            <p className="mt-1 text-sm text-parchment-200/70">
              Price will be shared after confirmation.
            </p>
          </div>

          <Field label="Full Name">
            <input
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="field-input"
              placeholder="Your name"
            />
          </Field>

          <Field label="Mobile Number">
            <input
              required
              type="tel"
              value={form.mobile}
              onChange={(e) => setForm({ ...form, mobile: e.target.value })}
              className="field-input"
              placeholder="10-digit mobile number"
            />
          </Field>

          <Field label="Email">
            <input
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="field-input"
              placeholder="you@example.com"
            />
          </Field>

          <Field label="Pickup Location">
            <input
              value={form.pickup}
              onChange={(e) => setForm({ ...form, pickup: e.target.value })}
              className="field-input"
              placeholder="e.g. Hospet Railway Station"
            />
          </Field>

          <Field label="Destination">
            <input
              required
              value={form.destination}
              onChange={(e) => setForm({ ...form, destination: e.target.value })}
              className="field-input"
              placeholder="e.g. Hampi, Goa, Kerala..."
            />
          </Field>

          <Field label="Travel Date">
            <input
              required
              type="date"
              value={form.date}
              onChange={(e) => setForm({ ...form, date: e.target.value })}
              className="field-input"
            />
          </Field>

          <Field label="Vehicle">
            <select
              required
              value={form.vehicle}
              onChange={(e) => setForm({ ...form, vehicle: e.target.value })}
              className="field-input"
            >
              <option value="">Select a vehicle</option>
              {vehicles.map((v) => (
                <option key={v.slug} value={v.name}>{v.name}</option>
              ))}
            </select>
          </Field>

          <Field label="Number of Passengers">
            <input
              required
              type="number"
              min={1}
              value={form.passengers}
              onChange={(e) => setForm({ ...form, passengers: e.target.value })}
              className="field-input"
              placeholder="e.g. 4"
            />
          </Field>

          <Field label="Message" className="md:col-span-1">
            <input
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="field-input"
              placeholder="Any special requirements"
            />
          </Field>

          <div className="flex flex-col gap-2 md:col-span-3">
            <button
              type="submit"
              className="w-fit rounded-card bg-brass-500 px-6 py-3 text-sm font-semibold text-basalt-950 transition hover:bg-brass-400"
            >
              Send Enquiry
            </button>
            {error && (
              <p role="alert" className="text-sm text-kumkum-500">
                {error}
              </p>
            )}
            {sent && !error && (
              <p className="text-sm text-leaf-500">
                Your enquiry is ready in WhatsApp. Please press Send to submit it.
              </p>
            )}
          </div>
        </form>
      </div>

      <style>{`
        .field-input {
          width: 100%;
          border-radius: 0.375rem;
          border: 1px solid rgba(74,67,60,0.6);
          background: rgba(35,31,27,0.6);
          color: #EFE7D8;
          padding: 0.6rem 0.75rem;
          font-size: 0.875rem;
        }
        .field-input:focus {
          border-color: #C9962F;
          outline: none;
        }
      `}</style>
    </section>
  );
}

function Field({
  label,
  children,
  className,
}: {
  label: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <label className={`block text-sm ${className ?? ""}`}>
      <span className="mb-1.5 block font-medium text-parchment-200/80">{label}</span>
      {children}
    </label>
  );
}