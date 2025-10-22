"use client"
import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import { Github, Twitter, Youtube, Instagram } from "lucide-react"
import { useLanguage } from "@/contexts/LanguageContext"

export function StickyFooter() {
  const { t } = useLanguage()
  const [isAtBottom, setIsAtBottom] = useState(false)

  useEffect(() => {
    let ticking = false

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollTop = window.scrollY
          const windowHeight = window.innerHeight
          const documentHeight = document.documentElement.scrollHeight
          const isNearBottom = scrollTop + windowHeight >= documentHeight - 100

          setIsAtBottom(isNearBottom)
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll() // Check initial state
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <AnimatePresence>
      {isAtBottom && (
        <motion.div
          className="fixed z-50 bottom-0 left-0 w-full bg-black text-white"
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <div className="max-w-7xl mx-auto px-6 py-12">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {/* Left Section - Visual Brand */}
              <div className="md:col-span-1">
                <h3 className="text-2xl font-bold mb-4">FLX</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {t('footer.description')}
                </p>
              </div>

              {/* Right Section - Links */}
              <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8">
                {/* Quick Links */}
                <div>
                  <h4 className="text-lg font-semibold mb-4">{t('footer.quickLinks')}</h4>
                  <ul className="space-y-3">
                    <li>
                      <a 
                        href="#" 
                        className="text-gray-400 hover:text-white transition-colors text-sm"
                      >
                        {t('footer.refundPolicy')}
                      </a>
                    </li>
                    <li>
                      <a 
                        href="#" 
                        className="text-gray-400 hover:text-white transition-colors text-sm"
                      >
                        {t('footer.faq')}
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Social Links */}
                <div>
                  <h4 className="text-lg font-semibold mb-4">{t('footer.links')}</h4>
                  <div className="flex flex-wrap gap-4 mb-4">
                    <a 
                      href="https://discord.gg/flxprivate" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors"
                      aria-label="Discord"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
                      </svg>
                    </a>
                    <a 
                      href="https://youtube.com/@flxprivate" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors"
                      aria-label="YouTube"
                    >
                      <Youtube className="w-5 h-5" />
                    </a>
                    <a 
                      href="https://tiktok.com/@flxsoftwares" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors"
                      aria-label="TikTok"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-.88-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                      </svg>
                    </a>
                    <a 
                      href="https://instagram.com/flxprivate" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors"
                      aria-label="Instagram"
                    >
                      <Instagram className="w-5 h-5" />
                    </a>
                    <a 
                      href="https://twitter.com/flxprivate" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors"
                      aria-label="Twitter"
                    >
                      <Twitter className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Bottom Section - Copyright and Legal */}
            <motion.div
              className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <p>{t('footer.copyright')}</p>
              <div className="flex space-x-6 mt-4 sm:mt-0">
                <a href="#" className="hover:text-white transition-colors">
                  {t('footer.privacyPolicy')}
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  {t('footer.termsOfService')}
                </a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
