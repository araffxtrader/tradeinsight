"use client";

import AnimatedSection from "@/components/AnimatedSection";

export default function PrivacyPage() {
  return (
    <div className="relative">
      <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-20 overflow-hidden">
        <div className="hero-gradient absolute inset-0" />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary mb-4">
              Legal
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
              Privacy Policy
            </h1>
            <p className="text-muted-foreground">Last updated: January 1, 2026</p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-12 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-sm prose-zinc dark:prose-invert max-w-none space-y-8">
            {[
              { title: "1. Introduction", content: "TradeVault ('we', 'us', 'our') is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our trading journal platform and related services." },
              { title: "2. Information We Collect", content: "We collect information you provide directly: account details (name, email), trading data you log, payment information (processed securely via Stripe), and communications with us. We also collect usage data automatically: device information, IP address, browser type, pages visited, and interaction patterns." },
              { title: "3. How We Use Your Information", content: "We use your information to: provide, maintain, and improve the Service; process transactions; send service-related communications; provide customer support; generate anonymized analytics; detect and prevent fraud; and comply with legal obligations." },
              { title: "4. Trading Data", content: "Your trading data is encrypted at rest and in transit using AES-256 encryption. We never access, analyze, or share your individual trading data without your explicit consent. Our AI insights are generated on encrypted data and you control whether to enable this feature." },
              { title: "5. Data Sharing", content: "We do not sell your personal data. We may share information with: service providers who assist in operating the Service (hosting, payment processing, analytics), as required by law, or with your explicit consent. All service providers are bound by strict data processing agreements." },
              { title: "6. Data Security", content: "We implement industry-leading security measures including AES-256 encryption, SOC 2 compliant infrastructure, regular penetration testing, two-factor authentication, and automated threat detection. While no method of transmission is 100% secure, we take every reasonable precaution." },
              { title: "7. Data Retention", content: "We retain your data for as long as your account is active or as needed to provide the Service. You may delete your account and all associated data at any time. After account deletion, data is purged from our systems within 30 days." },
              { title: "8. Your Rights", content: "You have the right to: access your personal data, correct inaccurate data, delete your data, export your data in a portable format, opt-out of non-essential data processing, and withdraw consent at any time. Contact privacy@tradevault.io to exercise these rights." },
              { title: "9. Cookies", content: "We use essential cookies for authentication and session management. We use optional analytics cookies (which you can opt out of) to understand usage patterns. We do not use advertising or tracking cookies." },
              { title: "10. International Transfers", content: "Your data may be processed in countries outside your own. We ensure appropriate safeguards are in place for international transfers, including Standard Contractual Clauses where required." },
              { title: "11. Children's Privacy", content: "The Service is not intended for users under 18. We do not knowingly collect data from children. If we learn that we have collected data from a child, we will delete it immediately." },
              { title: "12. Changes to This Policy", content: "We may update this Privacy Policy from time to time. Material changes will be communicated via email or in-app notification at least 30 days before they take effect." },
              { title: "13. Contact Us", content: "For questions about this Privacy Policy or to exercise your data rights, contact our Data Protection Officer at privacy@tradevault.io." },
            ].map((section) => (
              <AnimatedSection key={section.title}>
                <div>
                  <h2 className="text-lg font-bold mb-2">{section.title}</h2>
                  <p className="text-sm text-muted-foreground leading-relaxed">{section.content}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
