'use client';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MapPin, Mail, Phone, Clock, ArrowRight, CheckCircle2 } from 'lucide-react';
import StoreMap from '../components/StoreMap';

export default function ContactUs() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        message: '',
      });
      setTimeout(() => setSubmitted(false), 6000);
    }, 600);
  };

  return (
    <div className="relative w-full min-h-screen bg-white text-gray-900 overflow-hidden selection:bg-[#E050D0]/20 selection:text-[#E050D0]">
      {/* Removed Organic Pink Blobs for clean Shadcn aesthetic */}

      {/* ─────────────────────────────────────────────────────────────
          1. HERO SECTION (Image 1 Style in Pink Theme)
      ───────────────────────────────────────────────────────────── */}
      <section className="relative z-10 pt-4 pb-12 sm:pb-16 lg:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Heading, Subtext, Shop Now Button */}
            <div className="lg:col-span-6 flex flex-col items-start pt-4 sm:pt-8">
              <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 bg-secondary text-secondary-foreground mb-4">
                Zyricx
              </span>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-bold tracking-tight text-foreground leading-[1.12] mb-5">
                We're here to help you shop with confidence
              </h1>

              <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl mb-8">
                Have a question about your order, shipping, product specifications, or wholesale bulk requests? Our support team is ready to assist you every step of the way.
              </p>

              <div>
                <button
                  onClick={() => navigate('/products')}
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8"
                >
                  Explore Catalog
                </button>
              </div>
            </div>

            {/* Right Column: Clean Rectangle Image */}
            <div className="lg:col-span-6 flex justify-center items-center relative">
              <div className="relative w-full max-w-[460px] aspect-[4/3] rounded-2xl overflow-hidden border bg-muted shadow-sm">
                <img
                  src="/assets/asset-b8e1a86b.jpeg"
                  alt="Zyricx Customer Support"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          2. CONTACT FORM & INFO SECTION (Image 1 Style)
      ───────────────────────────────────────────────────────────── */}
      <section className="relative z-10 py-10 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            
            {/* Left Column: Contact Form inside Standard Card */}
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="bg-card text-card-foreground rounded-xl p-6 sm:p-10 border shadow-sm">
                
                {submitted && (
                  <div className="mb-6 p-4 rounded-md bg-amber-50 border border-amber-200 text-amber-800 text-sm font-medium flex items-center gap-3">
                    <CheckCircle2 size={16} className="text-amber-600 shrink-0" />
                    <span>Thank you! Your message has been sent. We'll be in touch within 24 hours.</span>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* First Name & Last Name (2 Columns) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="firstName" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        First Name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        required
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="First Name"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="lastName" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        required
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="Last Name"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      />
                    </div>
                  </div>

                  {/* Email Address */}
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="E-mail address"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    />
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your message..."
                      className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={submitting}
                      className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-6 py-2 w-full sm:w-auto"
                    >
                      {submitting ? (
                        <div className="flex items-center gap-2">
                          <span className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
                          <span>Sending...</span>
                        </div>
                      ) : (
                        'Send Message'
                      )}
                    </button>
                  </div>
                </form>

              </div>
            </div>

            {/* Right Column: Contact Details (Shadcn Style) */}
            <div className="lg:col-span-6 order-1 lg:order-2 flex flex-col justify-center pt-2 sm:pt-4">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight leading-tight mb-4">
                Get in touch with our team
              </h2>

              <p className="text-base text-muted-foreground leading-relaxed max-w-lg mb-8 sm:mb-10">
                Reach out to us directly through any of our channels below. Whether you need order updates, product inquiries, or general support, we respond promptly.
              </p>

              {/* Contact Items with standard secondary icons */}
              <div className="space-y-6">
                
                {/* 1. Location */}
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-md bg-secondary flex items-center justify-center text-secondary-foreground shrink-0 border">
                    <MapPin size={18} />
                  </div>
                  <span className="font-medium text-sm sm:text-base text-foreground">
                    Jai Devi Nagar, Garh Road , Meerut
                  </span>
                </div>

                {/* 2. Email */}
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-md bg-secondary flex items-center justify-center text-secondary-foreground shrink-0 border">
                    <Mail size={18} />
                  </div>
                  <a
                    href="mailto:support@zyricx.app"
                    className="font-medium text-sm sm:text-base text-foreground hover:underline transition-colors"
                  >
                    support@zyricx.app
                  </a>
                </div>

                {/* 3. Phone */}
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-md bg-secondary flex items-center justify-center text-secondary-foreground shrink-0 border">
                    <Phone size={18} />
                  </div>
                  <a
                    href="tel:+917088202122"
                    className="font-medium text-sm sm:text-base text-foreground hover:underline transition-colors"
                  >
                    +91 7088202122
                  </a>
                </div>

                {/* 4. Business Hours */}
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-md bg-secondary flex items-center justify-center text-secondary-foreground shrink-0 border">
                    <Clock size={18} />
                  </div>
                  <span className="font-medium text-sm sm:text-base text-foreground">
                    Mon - Fri: 9AM - 8PM EST
                  </span>
                </div>

                {/* Wholesale Inquiries */}
                <div className="mt-4 pt-4 border-t flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <h4 className="font-semibold text-foreground text-sm tracking-wide">Wholesale & Bulk Orders</h4>
                    <p className="text-sm text-muted-foreground mt-0.5">Custom bulk orders and corporate partnerships are available upon request.</p>
                  </div>
                  <a
                    href="mailto:support@zyricx.app?subject=Wholesale%20Inquiry%20-%20Zyricx"
                    className="self-start sm:self-auto inline-flex items-center justify-center rounded-md text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-8 px-4"
                  >
                    Inquire
                  </a>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          3. MAP SECTION (Image 1 Style with Custom Pink Pin)
      ───────────────────────────────────────────────────────────── */}
      <section className="relative z-10 pt-4 pb-16 sm:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StoreMap />
        </div>
      </section>
    </div>
  );
}
