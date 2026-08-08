const RESEARCH_DISCLAIMER = "All products sold on VItalEdge are for laboratory research purposes only. They are not for human consumption or therapeutic use.";

export default function TermsOfService() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="card-premium">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Terms of Service</h1>
          <p className="text-sm text-gray-500 mb-8">Last updated: June 2026</p>

          <div className="prose prose-gray max-w-none space-y-6 text-sm leading-relaxed">
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">1. Acceptance of Terms</h2>
              <p>
                By accessing and using VItalEdge ("the Site"), you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you should not use the Site.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">2. Research Purposes Only</h2>
              <p>
                <strong>All products listed on this Site are for laboratory research purposes only.</strong> They are not intended for human consumption, diagnosis, treatment, or prevention of any disease. By purchasing any product, you confirm that you are acquiring these materials for legitimate research purposes in compliance with all applicable laws and regulations.
              </p>
              <p className="mt-3">
                You must be 21 years of age or older to use this Site and to purchase any products.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">3. Dosage Calculator Disclaimer</h2>
              <p>
                The VItalEdge dosage calculator is an educational tool provided for reference purposes only. It does not provide medical advice, diagnosis, or treatment recommendations. Any dosage calculations are for research reference and should not be interpreted as guidance for human use.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">4. Product Information</h2>
              <p>
                We strive to provide accurate product information, but we do not warrant that product descriptions, pricing, or other content is complete, accurate, or error-free. We reserve the right to correct any errors and to change or update information at any time without prior notice.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">5. Purchases & Payment</h2>
              <p>
                All purchases are processed through Stripe, a third-party payment processor. By making a purchase, you agree to Stripe's terms of service. Prices are subject to change without notice. We reserve the right to refuse or cancel any order.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">6. Intellectual Property</h2>
              <p>
                All content on this Site, including text, graphics, logos, tools, and software, is the property of VItalEdge and is protected by applicable intellectual property laws.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">7. Limitation of Liability</h2>
              <p>
                VItalEdge shall not be liable for any direct, indirect, incidental, special, or consequential damages resulting from the use or inability to use the Site or its products.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">8. Changes to Terms</h2>
              <p>
                We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting. Your continued use of the Site after changes constitutes acceptance of the modified terms.
              </p>
            </section>

            <div className="mt-8 p-4 bg-amber-50 border border-amber-200 rounded-xl">
              <p className="text-xs text-amber-800 font-medium">{RESEARCH_DISCLAIMER}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
