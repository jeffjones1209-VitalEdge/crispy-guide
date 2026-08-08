export default function ContactUs() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="card-premium">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Contact Us</h1>
          <p className="text-sm text-gray-500 mb-8">We're here to help</p>

          <div className="grid md:grid-cols-2 gap-8 mb-10">
            {/* Contact Info */}
            <div className="space-y-6">
              <div>
                <h2 className="text-lg font-semibold text-gray-900 mb-3">Get in Touch</h2>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Have a question about our products, your order, or our research tools? Reach out and we'll respond within 1 business day.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-xl">📧</span>
                  <div>
                    <p className="text-sm font-medium text-gray-900">Email</p>
                    <a href="mailto:support@vitaledge.com" className="text-sm text-brand-600 hover:text-brand-700 transition-colors">
                      support@vitaledge.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-xl">📞</span>
                  <div>
                    <p className="text-sm font-medium text-gray-900">Phone</p>
                    <p className="text-sm text-gray-600">+1 (555) 123-4567</p>
                    <p className="text-xs text-gray-400">Monday – Friday, 9 AM – 5 PM EST</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-xl">📍</span>
                  <div>
                    <p className="text-sm font-medium text-gray-900">Address</p>
                    <p className="text-sm text-gray-600">
                      VItalEdge<br />
                      1234 Research Drive, Suite 100<br />
                      Austin, TX 78701<br />
                      United States
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Send a Message</h2>
              <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert('Message received! We will respond within 1 business day.'); }}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input
                    type="text" id="name" required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email" id="email" required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                  <input
                    type="text" id="subject" required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all"
                    placeholder="How can we help?"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea
                    id="message" rows="4" required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all resize-none"
                    placeholder="Tell us more..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-2.5 rounded-lg bg-gradient-to-r from-brand-500 to-ocean-500 text-white font-semibold text-sm hover:from-brand-600 hover:to-ocean-600 transition-all shadow-sm"
                >
                  Send Message →
                </button>
              </form>
            </div>
          </div>

          <div className="border-t border-gray-100 pt-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-3">Frequently Asked Questions</h2>
            <div className="space-y-4 text-sm">
              <div>
                <p className="font-medium text-gray-900">What are your customer support hours?</p>
                <p className="text-gray-600">We're available Monday through Friday, 9 AM to 5 PM Eastern. We respond to all inquiries within 1 business day.</p>
              </div>
              <div>
                <p className="font-medium text-gray-900">How do I track my order?</p>
                <p className="text-gray-600">Once your order ships, you'll receive a tracking number via email. Use the carrier's website to track your package in real time.</p>
              </div>
              <div>
                <p className="font-medium text-gray-900">Can I modify or cancel my order?</p>
                <p className="text-gray-600">Yes — contact us as soon as possible. If your order hasn't shipped yet, we can modify or cancel it. Once shipped, our standard return policy applies.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
