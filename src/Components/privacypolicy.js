import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen w-full bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 flex  px-4 py-10">
      <div className=" w-full bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 md:p-10">
        {/* Heading */}
        <h1 className="text-2xl md:text-4xl font-bold text-center mb-6">
          Privacy Policy
        </h1>
        <h2 className="text-lg md:text-xl font-semibold text-center mb-8">
          Privacy Policy for Konduti Stones
        </h2>
        <p className="text-sm md:text-base text-center mb-10">
          Effective Date: <span className="italic">[Insert Date]</span>
        </p>

        {/* Content */}
        <div className="flex flex-col text-left space-y-6">
          <p>
            Konduti Stones (“we”, “our”, “us”) respects your privacy. This Privacy
            Policy explains how we collect, use, and protect your information
            when you visit our website.
          </p>

          <section>
            <h3 className="text-xl font-semibold mb-2">1. Information We Collect</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Personal information you provide voluntarily, such as your name,
                email, phone number, and messages through the contact form.
              </li>
              <li>
                Non-personal information such as IP addresses, browser type, and
                device information for analytics purposes.
              </li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-2">2. How We Use Your Information</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>To respond to inquiries and provide our services.</li>
              <li>
                To send updates, offers, or promotional materials if you opt-in.
              </li>
              <li>To improve our website performance and user experience.</li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-2">3. Sharing Your Information</h3>
            <p>
              We do not sell, trade, or share your personal information with
              third parties, except where required by law or to provide our
              services (e.g., payment providers).
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-2">4. Cookies and Analytics</h3>
            <ul className="list-disc pl-6 space-y-2">
            Our website may use cookies or analytics tools in the future to monitor traffic and improve user experience.

<li>A cookie is a small file placed on your device to help analyze web traffic or recognize when you visit a particular site.</li>

<li>If cookies are used, they will only be for improving functionality and analytics purposes, not for collecting personal data without your consent.</li>

<li>You can choose to accept or decline cookies. Most browsers accept cookies automatically, but you can modify your browser settings to decline them.</li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-2">5. Security</h3>
            <p>
              We implement reasonable measures to protect your information.
              However, no online transmission is completely secure, and we cannot
              guarantee absolute security.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-2">6. Links to other websites</h3>
            <p>
            Our website may contain links to other websites of interest. However, once you have used these links to leave our site, you should note that we do not have any control over that other website. Therefore, we cannot be responsible for the protection and privacy of any information which you provide whilst visiting such sites and such sites are not governed by this privacy statement. You should exercise caution and look at the privacy statement applicable to the website in question.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-2">6. Changes to This Policy</h3>
            <p>
              We may update this Privacy Policy from time to time. Updated
              versions will be posted on this page with the new effective date.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-2">7. Contact Us</h3>
            <p>
              If you have questions about this Privacy Policy, please contact us
              at:
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

export default PrivacyPolicy;
