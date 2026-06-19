"use client";

import AnimatedSection from "@/components/AnimatedSection";

export default function TermsPage() {
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
              Terms & Conditions
            </h1>
            <p className="text-muted-foreground">Last updated: January 1, 2026</p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-12 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-sm prose-zinc dark:prose-invert max-w-none space-y-8">
            {[
              { title: "1. Acceptance of Terms", content: "By accessing or using TradeVault ('the Service'), you agree to be bound by these Terms & Conditions ('Terms'). If you do not agree to these Terms, you may not use the Service. These Terms constitute a legally binding agreement between you ('User', 'you') and TradeVault ('we', 'us', 'our')." },
              { title: "2. Description of Service", content: "TradeVault is a cloud-based trading journal and analytics platform that enables traders to log, track, and analyze their trading activities. The Service includes trade logging, performance analytics, AI-powered insights, strategy backtesting, and related features as described on our website." },
              { title: "3. Eligibility", content: "You must be at least 18 years of age to use the Service. By using TradeVault, you represent and warrant that you meet this age requirement and have the legal capacity to enter into these Terms." },
              { title: "4. Account Registration", content: "To use certain features, you must create an account. You agree to provide accurate, current, and complete information during registration and to keep your account information up to date. You are responsible for maintaining the confidentiality of your account credentials and for all activities under your account." },
              { title: "5. Subscription and Payment", content: "TradeVault offers subscription-based plans. By selecting a plan, you authorize us to charge the applicable fees to your chosen payment method. Subscriptions auto-renew unless cancelled before the renewal date. All fees are non-refundable except as expressly stated in our Refund Policy." },
              { title: "6. Free Trial", content: "New users may be eligible for a 14-day free trial. The trial provides full access to the selected plan's features. At the end of the trial, your account will be downgraded to a free tier unless you subscribe to a paid plan." },
              { title: "7. User Data and Privacy", content: "Your trading data belongs to you. We will not sell, share, or monetize your personal trading data. We process your data in accordance with our Privacy Policy. You may export or delete your data at any time." },
              { title: "8. Acceptable Use", content: "You agree not to: (a) use the Service for any unlawful purpose; (b) attempt to gain unauthorized access to any part of the Service; (c) interfere with or disrupt the Service or servers; (d) reverse engineer, decompile, or disassemble any part of the Service; (e) use the Service to transmit malware or other malicious code." },
              { title: "9. Intellectual Property", content: "All content, features, and functionality of the Service are owned by TradeVault and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws." },
              { title: "10. Limitation of Liability", content: "To the maximum extent permitted by law, TradeVault shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses resulting from your use of the Service." },
              { title: "11. Disclaimer", content: "The Service is provided 'as is' and 'as available' without warranties of any kind. TradeVault does not guarantee that the Service will be uninterrupted, error-free, or secure. Trading involves financial risk, and TradeVault is not responsible for any trading losses." },
              { title: "12. Termination", content: "You may terminate your account at any time by contacting us or through your account settings. We may suspend or terminate your access to the Service at our discretion, with or without cause, with or without notice." },
              { title: "13. Governing Law", content: "These Terms are governed by the laws of the United Arab Emirates. Any disputes arising from these Terms shall be resolved in the courts of Dubai, UAE." },
              { title: "14. Changes to Terms", content: "We reserve the right to modify these Terms at any time. Material changes will be communicated via email or in-app notification. Continued use of the Service after changes constitutes acceptance of the updated Terms." },
              { title: "15. Contact", content: "For questions about these Terms, please contact us at legal@tradevault.io or via our Contact page." },
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
