export default function PrivacyPolicy() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="card-premium">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Privacy Policy</h1>
          <p className="text-sm text-gray-500 mb-8">Last updated: June 2026</p>

          <div className="prose prose-gray max-w-none space-y-6 text-sm leading-relaxed">
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">1. Information We Collect</h2>
              <p>
                VItalEdge ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website.
              </p>
              <p className="mt-3">
                <strong>Personal Information:</strong> We may collect your email address when you voluntarily sign up for dosage reminders or newsletters. When you make a purchase through our third-party payment processor (Stripe), your payment details are handled exclusively by Stripe and are not stored on our servers.
              </p>
              <p className="mt-3">
                <strong>Usage Data:</strong> We may collect non-personal information about how you interact with our site, including pages visited, time spent, and browser type. This data is aggregated and anonymized.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">2. How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Provide and maintain our dosage calculator and reminder services</li>
                <li>Send you email notifications for dosage reminders and reorder alerts (if you opt in)</li>
                <li>Improve our website functionality and user experience</li>
                <li>Respond to your inquiries and provide customer support</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">3. Cookies & Local Storage</h2>
              <p>
                Our site uses browser local storage to remember your age verification status (30-day expiry), dosage calculator preferences, and shopping cart contents. We do not use tracking cookies for advertising purposes.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">4. Third-Party Services</h2>
              <p>
                We use Stripe for payment processing. When you make a purchase, Stripe collects your payment information according to their privacy policy. We do not have access to your full credit card details. We may also use analytics services to understand site usage patterns.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">5. Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your personal information. However, no method of electronic storage is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">6. Your Rights</h2>
              <p>
                You may request that we delete any personal information we have collected from you. To exercise this right, please contact us using the information on our Contact Us page. You can clear your browser's local storage at any time to remove locally stored data.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">7. Children's Privacy</h2>
              <p>
                Our website is not intended for individuals under 21 years of age. We do not knowingly collect personal information from anyone under 21. Our age verification gate requires confirmation that users are 21 or older.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">8. Contact Us</h2>
              <p>
                If you have questions about this Privacy Policy, please visit our Contact Us page or email us at privacy@vitaledge.com.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
