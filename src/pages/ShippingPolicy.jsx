const RESEARCH_DISCLAIMER = "All products sold on VItalEdge are for laboratory research purposes only. They are not for human consumption or therapeutic use.";

export default function ShippingPolicy() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="card-premium">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Shipping Policy</h1>
          <p className="text-sm text-gray-500 mb-8">Last updated: June 2026</p>

          <div className="prose prose-gray max-w-none space-y-6 text-sm leading-relaxed">
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">1. Order Processing</h2>
              <p>
                All orders are processed within 1-2 business days after payment confirmation. Orders placed on weekends or holidays will be processed the following business day. You will receive an email confirmation with tracking information once your order ships.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">2. Shipping Methods & Delivery Times</h2>
              <p>We offer the following shipping options:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li><strong>Standard Shipping:</strong> 5-7 business days</li>
                <li><strong>Expedited Shipping:</strong> 2-3 business days</li>
                <li><strong>Overnight Shipping:</strong> Next business day (order by 12 PM EST)</li>
              </ul>
              <p className="mt-3">Delivery times are estimates and may vary based on destination, weather conditions, and carrier performance.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">3. Shipping Rates</h2>
              <p>
                Shipping costs are calculated at checkout based on package weight, dimensions, shipping method, and destination. Free standard shipping may be available on qualifying orders.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">4. International Shipping</h2>
              <p>
                We currently ship to select international destinations. International orders may be subject to customs duties, taxes, and import fees levied by the destination country. These charges are the responsibility of the recipient.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">5. Order Tracking</h2>
              <p>
                Once your order ships, you will receive a tracking number via email. Please allow up to 24 hours for tracking information to update.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">6. Lost or Damaged Packages</h2>
              <p>
                If your package is lost in transit or arrives damaged, please contact us within 48 hours. We will work with the carrier to resolve the issue and arrange a replacement or refund as appropriate.
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
