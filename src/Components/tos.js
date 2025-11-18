import React from "react";

const TermsOfService = () => {
  return (
    <div className="min-h-screen w-full bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 flex px-4 py-10">
      <div className="w-full bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 md:p-10">
        {/* Heading */}
        <h1 className="text-2xl md:text-4xl font-bold text-center mb-6">
          Terms of Service
        </h1>
        <h2 className="text-lg md:text-xl font-semibold text-center mb-8">
          Terms of Service for Konduti Stones
        </h2>
        <p className="text-sm md:text-base text-center mb-10">
          Effective Date: <span className="italic">[Insert Date]</span>
        </p>

        {/* Content */}
        <div className="flex flex-col text-left space-y-6">
          <p>
            By accessing and using <span className="font-semibold">Konduti Stones</span>, you agree to the following terms and conditions:
          </p>

          <section>
            <h3 className="text-xl font-semibold mb-2">1. Use of Website</h3>
            <p>
              You may use this website for lawful purposes only. You agree not to misuse the website or attempt unauthorized access.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-2">2. Products and Services</h3>
            <p>
              We sell pebbles, stones, and related products. Product descriptions are accurate to the best of our knowledge. Prices and availability are subject to change without notice.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-2">3. Orders and Payments</h3>
            <p>
              All orders are subject to acceptance and availability. Payments, if applicable, must be made as instructed on the website.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-2">4. Intellectual Property</h3>
            <p>
               <span className="font-semibold">Konduti Stones</span> and are protected by copyright. You may not copy, distribute, or use content without our permission.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-2">5. Limitation of Liability</h3>
            <p>
              Konduti Stones is not liable for any direct or indirect damages resulting from the use of this website or products purchased.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-2">6. Governing Law</h3>
            <p>
              These terms are governed by the laws of India. Any disputes will be resolved in the competent courts of India.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-2">7. Changes to Terms</h3>
            <p>
              We may update these Terms of Service at any time. Updated terms will be posted on this page.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-2">8. Contact Us</h3>
            <p>
              If you have questions regarding these terms, contact us at:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Email: [your email]</li>
              <li>Phone: [your phone number]</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
