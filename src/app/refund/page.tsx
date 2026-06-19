"use client";

import AnimatedSection from "@/components/AnimatedSection";

export default function RefundPage() {
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
              Refund Policy
            </h1>
            <p className="text-muted-foreground">Last updated: January 1, 2026</p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-12 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-sm prose-zinc dark:prose-invert max-w-none space-y-8">
            {[
              { title: "1. 30-Day Money-Back Guarantee", content: "We offer a 30-day money-back guarantee on all subscription plans. If you are not satisfied with TradeVault for any reason within 30 days of your initial purchase, we will provide a full refund of your subscription fee." },
              { title: "2. Eligibility", content: "To be eligible for a refund: (a) your refund request must be made within 30 calendar days of your initial subscription purchase; (b) you must be the original subscriber and account holder; (c) the refund applies to the subscription fee only — any additional services or add-ons are non-refundable unless otherwise stated." },
              { title: "3. How to Request a Refund", content: "To request a refund, contact our support team at support@tradevault.io with your account email and reason for the refund request. We aim to process all refund requests within 3-5 business days." },
              { title: "4. Refund Processing", content: "Approved refunds will be credited back to the original payment method used for the purchase. Please allow 5-10 business days for the refund to appear on your statement, depending on your bank or payment provider." },
              { title: "5. Annual Subscriptions", content: "If you purchased an annual subscription, you are eligible for a full refund within 30 days of the initial purchase. After 30 days, annual subscriptions are non-refundable, but you may cancel to prevent auto-renewal." },
              { title: "6. Free Trials", content: "If you cancel during a free trial period, you will not be charged. No refund is necessary as no payment was made." },
              { title: "7. Renewal Charges", content: "If you forgot to cancel before a renewal charge, contact us within 7 days of the renewal date and we will process a full refund for the renewal charge." },
              { title: "8. Exceptions", content: "Refund exceptions may apply in cases of: (a) violation of our Terms of Service; (b) fraudulent or abusive refund requests; (c) special promotional offers explicitly marked as non-refundable." },
              { title: "9. Contact", content: "For any refund-related questions, please contact us at support@tradevault.io or through our Contact page. Our support team is available 24/7 to assist you." },
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
