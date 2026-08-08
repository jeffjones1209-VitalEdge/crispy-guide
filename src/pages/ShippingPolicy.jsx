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
              <p className="mt-3">
                Delivery times are estimates and may vary based on destination, weather conditions, and carrier performance.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">3. Shipping Rates</h2>
              <p>
                Shipping costs are calculated at checkout based on package weight, dimensions, shipping method selected, and destination. Shipping charges will be displayed before you complete your purchase. Free standard shipping may be available on orders over a certain amount — check our current promotions for details.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">4. International Shipping</h2>
              <p>
                We currently ship to select international destinations. International orders may be subject to customs duties, taxes, and import fees levied by the destination country. These charges are the responsibility of the recipient. Delivery times for international orders vary by destination and customs processing.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">5. Order Tracking</h2>
              <p>
                Once your order ships, you will receive a tracking number via email. You can track your package using the carrier's website. Please allow up to 24 hours for tracking information to update after you receive your tracking number.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">6. Lost or Damaged Packages</h2>
              <p>
                If your package is lost in transit or arrives damaged, please contact us within 48 hours of the expected delivery date (for lost packages) or receipt (for damaged packages). We will work with the carrier to resolve the issue and arrange a replacement or refund as appropriate.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">7. Address Accuracy</h2>
              <p>
                Please ensure your shipping address is complete and accurate. VItalEdge is not responsible for packages delivered to incorrect addresses provided by the customer. If an order is returned due to an incorrect address, additional shipping charges may apply for reshipment.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">8. Contact</h2>
              <p>
                For questions about shipping or to report an issue with your order, please visit our Contact Us page or email us at support@vitaledge.com.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
