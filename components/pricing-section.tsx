"use client"

import { motion } from "framer-motion"
import { Check, Sparkles } from "lucide-react"
import { useLanguage } from "@/contexts/LanguageContext"

export function PricingSection() {
  const { t } = useLanguage()
  
  const pricingPlans = [
    {
      name: t('pricing.plan1.name'),
      price: t('pricing.plan1.price'),
      currency: t('pricing.currency'),
      features: [
        t('pricing.feature.undetectable'),
        t('pricing.feature.allFeatures'),
        t('pricing.feature.prioritySupport'),
        t('pricing.feature.privateDiscord'),
      ],
      popular: false,
      cta: t('pricing.cta'),
    },
    {
      name: t('pricing.plan2.name'),
      price: t('pricing.plan2.price'),
      currency: t('pricing.currency'),
      features: [
        t('pricing.feature.undetectable'),
        t('pricing.feature.allFeatures'),
        t('pricing.feature.prioritySupport'),
        t('pricing.feature.privateDiscord'),
        t('pricing.feature.profitable'),
      ],
      popular: true,
      cta: t('pricing.cta'),
    },
    {
      name: t('pricing.plan3.name'),
      price: t('pricing.plan3.price'),
      currency: t('pricing.currency'),
      features: [
        t('pricing.feature.undetectable'),
        t('pricing.feature.allFeatures'),
        t('pricing.feature.prioritySupport'),
        t('pricing.feature.privateDiscord'),
        t('pricing.feature.profitable'),
      ],
      popular: false,
      cta: t('pricing.cta'),
    },
  ]
  const handleDiscordRedirect = () => {
    window.open('https://discord.gg/flxprivate', '_blank')
  }

  return (
    <section id="pricing" className="relative py-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          {/* <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-6"
          >
            <Sparkles className="w-4 h-4 text-[#e78a53]" />
            <span className="text-sm font-medium text-white/80">Pricing</span>
          </motion.div> */}

          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-white to-white/60 bg-clip-text text-transparent mb-4">
            {t('pricing.title')}
          </h2>

          <p className="text-lg text-white/60 max-w-2xl mx-auto mb-8">
            {t('pricing.subtitle')}
          </p>

        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className={`relative rounded-2xl p-8 backdrop-blur-sm border transition-all duration-300 ${
                plan.popular
                  ? "bg-gradient-to-b from-[#e78a53]/10 to-transparent border-[#e78a53]/30 shadow-lg shadow-[#e78a53]/10"
                  : "bg-white/5 border-white/10 hover:border-white/20"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-[#e78a53] to-[#e78a53]/80 text-white text-sm font-medium px-4 py-2 rounded-full">
                    {t('pricing.popular')}
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="flex items-baseline justify-center gap-1 mb-2">
                  <span className="text-4xl font-bold text-white">
                    {plan.currency}{plan.price}
                  </span>
                  <span className="text-white/60 text-lg">{t('pricing.month')}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#e78a53] flex-shrink-0" />
                    <span className="text-white/80 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <motion.button
                onClick={handleDiscordRedirect}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-200 cursor-pointer ${
                  plan.popular
                    ? "bg-gradient-to-r from-[#e78a53] to-[#e78a53]/80 text-white shadow-lg shadow-[#e78a53]/25 hover:shadow-[#e78a53]/40"
                    : "bg-white/10 text-white border border-white/20 hover:bg-white/20"
                }`}
              >
                {plan.cta}
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-white/60 mb-4">{t('pricing.custom')}</p>

        </motion.div>
      </div>
    </section>
  )
}
