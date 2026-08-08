export default function RefundReturnPolicy() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="card-premium">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Refund & Return Policy</h1>
          <p className="text-sm text-gray-500 mb-8">Last updated: June 2026</p>

          <div className="prose prose-gray max-w-none space-y-6 text-sm leading-relaxed">
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">1. Satisfaction Guarantee</h2>
              <p>
                At VItalEdge, we stand behind the quality of our research products. If you are not satisfied with your purchase, we offer a straightforward return and refund process designed to protect researchers.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">2. Return Eligibility</h2>
              <p>To be eligible for a return, the following conditions must be met:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>The product must be unopened and in its original packaging</li>
                <li>The return request must be initiated within 30 days of delivery</li>
                <li>The product must not have been reconstituted or altered in any way</li>
                <li>Proof of purchase (order number) must be provided</li>
              </ul>
              <p className="mt-3">
                <strong>Note:</strong> For safety and quality control reasons, we cannot accept returns on reconstituted products or products that have had their seals broken.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">3. Return Process</h2>
              <p>To initiate a return:</p>
              <ol className="list-decimal pl-6 mt-2 space-y-1">
                <li>Contact us via our Contact Us page or email support@vitaledge.com within 30 days of delivery</li>
                <li>Provide your order number and a brief explanation for the return</li>
                <li>We will provide return shipping instructions and, if approved, a return authorization number</li>
                <li>Ship the product back using a trackable shipping method</li>
              </ol>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">4. Refunds</h2>
              <p>
                Once we receive and inspect your return, we will notify you of the approval or rejection of your refund. If approved, refunds will be processed within 5-10 business days to your original method of payment. Shipping charges are non-refundable unless the return is due to our error (incorrect item shipped, defective product).
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">5. Damaged or Defective Products</h2>
              <p>
                If you receive a damaged or defective product, please contact us within 48 hours of delivery. Provide photos of the damage and your order number. We will arrange a replacement shipment or full refund at no additional cost to you.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">6. Incorrect Orders</h2>
              <p>
                If you receive an item different from what you ordered, please contact us within 48 hours of delivery. We will arrange return shipping and send the correct product at no additional cost.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">7. Cancellations</h2>
              <p>
                Orders may be cancelled for a full refund if the cancellation request is received before the order ships. Once an order has shipped, the standard return process applies.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">8. Contact</h2>
              <p>
                For return requests, refund inquiries, or questions about this policy, please visit our Contact Us page or email us at support@vitaledge.com.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
