import Header from "../components/Header";
import Footer from "../components/Footer";

const PrivacyPolicyPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-navy via-navy to-navy-light py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-accent mb-4">
              Privacy Policy
            </h1>
            <p className="text-lg text-accent">
              Effective Date: November 29, 2025
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <div className="bg-card border border-border/40 rounded-lg p-8 space-y-8 text-left">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  1. Introduction
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  This Privacy Policy describes how we collect, use, and protect
                  your personal information when you visit our website or use
                  our services. We are committed to protecting your privacy and
                  ensuring the security of your personal information in
                  accordance with Canadian privacy laws, including the Personal
                  Information Protection and Electronic Documents Act (PIPEDA).
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  2. Information We Collect
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  We may collect the following types of information:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>
                    <strong>Personal Information:</strong> Name, email address,
                    phone number, mailing address
                  </li>
                  <li>
                    <strong>Financial Information:</strong> Investment
                    preferences, financial qualifications for CMHC programs
                  </li>
                  <li>
                    <strong>Property Information:</strong> Investment interests,
                    property preferences, location preferences
                  </li>
                  <li>
                    <strong>Technical Information:</strong> IP address, browser
                    type, device information, cookies and usage data
                  </li>
                  <li>
                    <strong>Communication Records:</strong> Correspondence with
                    our team, inquiry forms, consultation notes
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  3. How We Use Your Information
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  We use your information for the following purposes:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>
                    To provide and improve our real estate investment services
                  </li>
                  <li>
                    To communicate with you about properties and investment
                    opportunities
                  </li>
                  <li>
                    To process your investment inquiries and facilitate
                    transactions
                  </li>
                  <li>
                    To send you marketing communications (with your consent)
                  </li>
                  <li>
                    To comply with CMHC requirements and other legal obligations
                  </li>
                  <li>To analyze and improve our website and services</li>
                  <li>To protect against fraud and maintain security</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  4. Information Sharing and Disclosure
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  We may share your information with:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>
                    <strong>Service Providers:</strong> Third-party vendors who
                    assist with our operations (e.g., email services, CRM
                    systems)
                  </li>
                  <li>
                    <strong>Financial Institutions:</strong> Banks and lenders
                    for mortgage pre-approvals and CMHC applications
                  </li>
                  <li>
                    <strong>Legal Authorities:</strong> When required by law or
                    to protect our rights
                  </li>
                  <li>
                    <strong>Business Partners:</strong> Real estate
                    professionals, property managers, and contractors involved
                    in your transaction
                  </li>
                  <li>
                    <strong>Professional Advisors:</strong> Lawyers,
                    accountants, and consultants as needed for transactions
                  </li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-3">
                  We do not sell your personal information to third parties for
                  marketing purposes.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  5. Cookies and Tracking Technologies
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  We use cookies and similar tracking technologies to enhance
                  your browsing experience, analyze site traffic, and understand
                  visitor behavior. You can control cookie preferences through
                  your browser settings. Please note that disabling cookies may
                  affect the functionality of our website.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  6. Data Security
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  We implement appropriate technical and organizational security
                  measures to protect your personal information against
                  unauthorized access, alteration, disclosure, or destruction.
                  This includes encryption, secure servers, access controls, and
                  regular security assessments. However, no method of
                  transmission over the internet is 100% secure, and we cannot
                  guarantee absolute security.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  7. Data Retention
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  We retain your personal information for as long as necessary
                  to fulfill the purposes outlined in this Privacy Policy,
                  comply with legal obligations, resolve disputes, and enforce
                  our agreements. When information is no longer needed, we will
                  securely delete or anonymize it.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  8. Your Privacy Rights
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  Under Canadian privacy law, you have the right to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>
                    <strong>Access:</strong> Request access to your personal
                    information
                  </li>
                  <li>
                    <strong>Correction:</strong> Request correction of
                    inaccurate information
                  </li>
                  <li>
                    <strong>Withdrawal of Consent:</strong> Withdraw consent for
                    marketing communications
                  </li>
                  <li>
                    <strong>Deletion:</strong> Request deletion of your
                    information (subject to legal obligations)
                  </li>
                  <li>
                    <strong>Complaint:</strong> File a complaint with the
                    Privacy Commissioner of Canada
                  </li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-3">
                  To exercise these rights, please contact us using the
                  information below.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  9. Third-Party Links
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our website may contain links to third-party websites. We are
                  not responsible for the privacy practices or content of these
                  external sites. We encourage you to review the privacy
                  policies of any third-party sites you visit.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  10. Children's Privacy
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our services are not directed to individuals under the age of
                  18. We do not knowingly collect personal information from
                  children. If you believe we have collected information from a
                  child, please contact us immediately.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  11. Changes to This Privacy Policy
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  We may update this Privacy Policy from time to time to reflect
                  changes in our practices or legal requirements. We will notify
                  you of any material changes by posting the updated policy on
                  our website with a new effective date. Your continued use of
                  our services after such changes constitutes acceptance of the
                  updated policy.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  12. Contact Us
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  If you have any questions about this Privacy Policy or our
                  privacy practices, please contact us:
                </p>
                <div className="bg-muted/30 p-6 rounded-lg border border-border/40">
                  <p className="text-muted-foreground leading-relaxed">
                    <strong className="text-foreground">Email:</strong>{" "}
                    info@multi-iq.com
                    <br />
                    <strong className="text-foreground">Phone:</strong> +1 (905)
                    781-7664
                    <br />
                    <strong className="text-foreground">Address:</strong>{" "}
                    Serving All of Canada
                  </p>
                </div>
              </div>

              <div className="pt-6 border-t border-border/40">
                <p className="text-sm text-muted-foreground italic">
                  This Privacy Policy is governed by Canadian privacy laws. For
                  residents of specific provinces with additional privacy rights
                  (such as Quebec), additional protections may apply.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PrivacyPolicyPage;
