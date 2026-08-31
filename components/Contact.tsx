import { Phone, Mail, Clock, MapPin } from "lucide-react";
import { SectionHeading } from "./Destinations";

const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=AARUSHI+Travels%2C+Chittawadgi%2C+Hospet%2C+Hampi%2C+Vijayanagar+District%2C+Karnataka%2C+India";

export default function Contact() {
  return (
    <section id="contact" className="bg-basalt-950 py-20">
      <div className="container">
        <SectionHeading
          eyebrow="Contact"
          title="Talk to us before you book"
          light
        />

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
          
          {/* Contact Information */}
          <div className="space-y-5">

            {/* Address */}
            <InfoRow icon={MapPin} label="Address">
              <div className="space-y-2">

                {/* Google Maps Link */}
                <a
                  href={GOOGLE_MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-medium text-brass-500 transition-colors hover:text-brass-400 hover:underline"
                >
                  📍 View on Google Maps
                </a>

                {/* Address */}
                <div>
                  AARUSHI Travels,
                  <br />
                  Chittawadgi, Hospet,
                  <br />
                  Hampi, Vijayanagar District,
                  <br />
                  Hospet (Hosapete), Karnataka, India
                </div>

              </div>
            </InfoRow>

            {/* Phone */}
            <InfoRow icon={Phone} label="Phone / WhatsApp">
              <div className="flex flex-col">
                <a
                  href="tel:+917975748092"
                  className="hover:text-brass-500"
                >
                  +91-7975748092
                </a>

                <a
                  href="tel:+919611122917"
                  className="hover:text-brass-500"
                >
                  +91-9611122917
                </a>
              </div>
            </InfoRow>

            {/* Email */}
            <InfoRow icon={Mail} label="Email">
              <a
                href="mailto:bookings.arushitravels@gmail.com"
                className="hover:text-brass-500"
              >
                bookings.arushitravels@gmail.com
              </a>
            </InfoRow>

            {/* Working Hours */}
            <InfoRow icon={Clock} label="Working Hours">
              24×7 for bookings and support
            </InfoRow>

          </div>

          {/* Google Map */}
          <div className="overflow-hidden rounded-card border border-basalt-600/50">
            <iframe
              title="Location map — AARUSHI Travels, Hospet, Karnataka"
              src="https://www.google.com/maps?q=AARUSHI%20Travels%2C%20Chittawadgi%2C%20Hospet%2C%20Hampi%2C%20Vijayanagar%20District%2C%20Karnataka%2C%20India&output=embed"
              className="h-full min-h-[320px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

        </div>
      </div>
    </section>
  );
}

function InfoRow({
  icon: Icon,
  label,
  children,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-4">
      
      <div className="rounded-card bg-basalt-800 p-2.5">
        <Icon className="h-5 w-5 text-brass-500" />
      </div>

      <div>
        <p className="text-xs uppercase tracking-widest text-parchment-200/50">
          {label}
        </p>

        <div className="text-parchment-100">
          {children}
        </div>
      </div>

    </div>
  );
}