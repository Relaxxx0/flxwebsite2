'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'

type Language = 'tr' | 'en'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

// Translation data
const translations = {
  tr: {
    // Navigation
    'nav.features': 'Özellikler',
    'nav.pricing': 'Fiyatlandırma',
    'nav.testimonials': 'Referanslar',
    'nav.faq': 'SSS',
    
    // Language switcher
    'lang.turkish': 'Türkçe',
    'lang.english': 'English',
    'lang.switch': 'Dil Değiştir',
    
    // Hero Section
    'hero.title': 'FLX V1 ile Oyun Deneyiminizi Geliştirin',
    'hero.subtitle': 'FiveM oyununuzda üstün ve özelleştirilmiş bir oyun deneyimi sunmak için tasarlanmış son teknoloji yazılımlarla oyununuzu yükseltin.',
    'hero.cta.primary': 'Başlayın',
    'hero.cta.secondary': 'Demoyu İzle',
    
    // Features Section
    'features.title': 'FLX HAKKINDA',
    'features.subtitle': 'Oyun deneyiminizi geliştirmek için ihtiyacınız olan her şey',
    'features.ocean.title': 'OCEAN SONUCU',
    'features.ocean.description': 'Burada yaptığınız taramaların sonuçlarını görebilirsiniz.',
    'features.ocean.user': 'Bu kullanıcı yasal',
    'features.encryption.title': 'ŞİFRELEME',
    'features.encryption.description': 'Bu içerik güvenliğiniz için özel olarak şifrelenmiştir. Yetkisiz kullanım veya kopyalama yasal işlem konusudur.',
    'features.undetected.title': 'FLX UNDETECT',
    'features.showcase.title': 'FLX Showcase',
    'features.showcase.description': 'Aimbot, ESP ve diğer Client Aim özelliklerinin vitrinini görün.',
    'features.responsive.title': 'Gelişmiş Özellikler',
    'features.responsive.description': 'Tüm oyun modlarında mükemmel performans',
    'features.customizable.title': 'Özelleştirilebilir',
    'features.customizable.description': 'İhtiyaçlarınıza göre kolayca ayarlayın',
    'features.performance.title': 'Yüksek Performans',
    'features.performance.description': 'Hızlı ve sorunsuz oyun deneyimi',
    'features.accessible.title': 'Güvenli',
    'features.accessible.description': 'Anti-cheat sistemlerine karşı korumalı',
    'features.modern.title': 'Modern Teknoloji',
    'features.modern.description': 'En son teknolojilerle geliştirildi',
    'features.support.title': '7/24 Destek',
    'features.support.description': 'Her zaman yanınızdayız',
    
    // Pricing Section
    'pricing.title': 'Planınızı Seçin',
    'pricing.subtitle': 'FLX\'i alın, kontrolü elinize alın.',
    'pricing.month': '/ay',
    'pricing.popular': 'En Popüler',
    'pricing.cta': 'Şimdi Satın Al',
    'pricing.custom': 'Özel bir çözüme mi ihtiyacınız var? Size yardımcı olmak için buradayız.',
    'pricing.currency': '₺',
    
    // Plan names and descriptions
    'pricing.plan1.name': '1 AY',
    'pricing.plan1.price': '2.500',
    'pricing.plan1.description': 'v0 ile başlamak için mükemmel',
    'pricing.plan2.name': '2 AY',
    'pricing.plan2.price': '4.000',
    'pricing.plan2.description': 'Ciddi projeler geliştiren profesyoneller için',
    'pricing.plan3.name': '3 AY',
    'pricing.plan3.price': '6.500',
    'pricing.plan3.description': 'Projeler üzerinde işbirliği yapan ekipler için',
    
    // Features
    'pricing.feature.undetectable': 'Tespit Edilemez',
    'pricing.feature.allFeatures': 'Tüm özellikler aktif',
    'pricing.feature.prioritySupport': 'Öncelikli destek',
    'pricing.feature.privateDiscord': 'Özel Discord kanalı',
    'pricing.feature.profitable': '1000₺ daha karlı',
    
    // Testimonials Section
    'testimonials.badge': 'Referanslar',
    'testimonials.title': 'Kullanıcılarımız ne diyor',
    'testimonials.subtitle': 'Kullanıcı dostu arayüzü ve gelişmiş özellikleri ile FLX, FiveM dünyasında eşsiz bir avantaj sunar. Dünya çapında oyuncular tarafından güvenilen FLX, gizlilik ve performansı benzersiz bir şekilde birleştirerek öne çıkar.',
    
    // Testimonial content
    'testimonials.demir': 'EDV\'de bir admin beni gözlem altına aldı ve ocean kontrolü yaptı. Hiçbir şey çıkmadı. Çünkü FLX iz bırakmaz.',
    'testimonials.berk': 'Fave\'de iki tam geliştirici ekibi her şeyi taradı. 0 sonuç. FLX kullanıcıları ayak izi bırakmaz.',
    'testimonials.dilara': 'Üç farklı admin art arda kontrol yaptı. Hepsi boş çıktı. FLX gerçek gücünü burada gösteriyor.',
    'testimonials.omer': 'Sunucu loglarını bile karıştırdılar ve saatlerce manuel kontrol yaptılar... FLX yine bulunamadı.',
    'testimonials.furkan': 'Admin izlerken aim ile kilitledim. Hiçbir şey fark etmedi. FLX = sessiz hakimiyet.',
    'testimonials.alp': 'Rebels\'da baş admin "burada bir terslik var" dedi. 2 saat araştırdı — hiçbir şey bulamadı, sustu.',
    'testimonials.rauf': 'FLX çalışırken ekran görüntüsü aldım, loglar temiz, inject tespit edilmedi. Ne diyelim? Gizli oynamak istiyorsan, FLX ile oynarsın.',
    'testimonials.deniz': 'Admin beni 30 dakika boyunca izledi, sahip oldukları her tespit aracını çalıştırdı. FLX tamamen görünmez kaldı.',
    
    // New Release Promo Section
    'promo.title': 'Kurulumu Yapalım. Özelleştirelim. Tespit Edilmeyelim.',
    'promo.cta': 'Başlayın',
    
    // FAQ Section
    'faq.badge': 'SSS',
    'faq.title': 'Sorular mı var? Bizde ',
    'faq.titleHighlight': 'cevaplar',
    'faq.titleSuffix': ' var',
    
    // FAQ Questions and Answers
    'faq.q1.question': 'Tespit ediliyor mu?',
    'faq.q1.answer': 'Güncel bypass teknolojileri kullanarak tespit riskini minimize ediyoruz. Düzenli güncellemeler anti-cheat sistemlerine karşı koruma sağlar.',
    'faq.q2.question': 'Güncellemeler ne sıklıkla geliyor?',
    'faq.q2.answer': 'Oyun güncellemelerine bağlı olarak gerekli yamalar hızlıca yayınlanır. Bakım güncellemeleri genellikle haftalık olarak yapılır.',
    'faq.q3.question': 'Ücretsiz versiyonunuz var mı?',
    'faq.q3.answer': 'Maalesef şu anda ücretsiz bir versiyonumuz bulunmuyor.',
    'faq.q4.question': 'Birden fazla PC\'de kullanabilir miyim?',
    'faq.q4.answer': 'Her lisans tek bir cihaz için geçerlidir; ek cihazlar için ayrı lisans gerekir. Cihazlar HWID sistemi kullanılarak bağlanır.',
    'faq.q5.question': 'Para iade garantisi var mı?',
    'faq.q5.answer': 'Dijital ürün olduğu için iade mümkün değildir. Satın almadan önce showcase\'imizi izleyebilirsiniz.',
    'faq.q6.question': 'Nasıl destek alabilirim?',
    'faq.q6.answer': 'Discord sunucumuzda 7/24 destek alabilirsiniz. Premium kullanıcılar için özel destek kanalları mevcuttur.',
    
    // Footer
    'footer.description': 'FLX ile artık kayıt yakalayıcıya yakalanmayacaksınız, streamproof modu sayesinde. Hiçbir yayın/kayıt programına takılmayacak ve bütün anticheat kontrollerinden geçeceksiniz.',
    'footer.quickLinks': 'Hızlı Bağlantılar',
    'footer.links': 'BAĞLANTILAR',
    'footer.refundPolicy': 'İade Politikası',
    'footer.faq': 'SSS',
    'footer.privacyPolicy': 'Gizlilik Politikası',
    'footer.termsOfService': 'Hizmet Şartları',
    'footer.copyright': '© 2025 FLX. Tüm hakları saklıdır.',
    
    // Common
    'common.learnMore': 'Daha Fazla Bilgi',
    'common.getStarted': 'Başlayın',
    'common.readMore': 'Devamını Oku',
    'common.close': 'Kapat',
    'common.open': 'Aç',
    'common.loading': 'Yükleniyor...',
  },
  en: {
    // Navigation
    'nav.features': 'Features',
    'nav.pricing': 'Pricing',
    'nav.testimonials': 'Testimonials',
    'nav.faq': 'FAQ',
    
    // Language switcher
    'lang.turkish': 'Türkçe',
    'lang.english': 'English',
    'lang.switch': 'Switch Language',
    
    // Hero Section
    'hero.title': 'Elevate Your Gaming Experience with FLX V1',
    'hero.subtitle': 'Elevate your FiveM gameplay with cutting-edge cheat software engineered to deliver a superior and customized gaming experience.',
    'hero.cta.primary': 'Get Started',
    'hero.cta.secondary': 'Watch Demo',
    
    // Features Section
    'features.title': 'FLX INFORMATION',
    'features.subtitle': 'Everything you need to enhance your gaming experience',
    'features.ocean.title': 'OCEAN RESULT',
    'features.ocean.description': 'Here you can see the results of the scans you have done.',
    'features.ocean.user': 'This user is legit',
    'features.encryption.title': 'ENCRYPTION',
    'features.encryption.description': 'This content is specially encrypted for your security. Any unauthorized use or copying is subject to legal action.',
    'features.undetected.title': 'FLX UNDETECT',
    'features.showcase.title': 'FLX Showcase',
    'features.showcase.description': 'Aimbot, ESP and other Client Aim features showcase.',
    'features.responsive.title': 'Advanced Features',
    'features.responsive.description': 'Perfect performance in all game modes',
    'features.customizable.title': 'Customizable',
    'features.customizable.description': 'Easily adjust to your needs',
    'features.performance.title': 'High Performance',
    'features.performance.description': 'Fast and smooth gaming experience',
    'features.accessible.title': 'Secure',
    'features.accessible.description': 'Protected against anti-cheat systems',
    'features.modern.title': 'Modern Technology',
    'features.modern.description': 'Built with the latest technologies',
    'features.support.title': '24/7 Support',
    'features.support.description': 'We are always here for you',
    
    // Pricing Section
    'pricing.title': 'Choose your plan',
    'pricing.subtitle': 'Take FLX, take control.',
    'pricing.month': '/month',
    'pricing.popular': 'Most Popular',
    'pricing.cta': 'Buy Now',
    'pricing.custom': 'Need a custom solution? We\'re here to help.',
    'pricing.currency': '€',
    
    // Plan names and descriptions
    'pricing.plan1.name': '1 MONTH',
    'pricing.plan1.price': '50',
    'pricing.plan1.description': 'Perfect for getting started with v0',
    'pricing.plan2.name': '2 MONTH',
    'pricing.plan2.price': '80',
    'pricing.plan2.description': 'For professionals building serious projects',
    'pricing.plan3.name': '3 MONTH',
    'pricing.plan3.price': '130',
    'pricing.plan3.description': 'For teams collaborating on projects',
    
    // Features
    'pricing.feature.undetectable': 'Undetectable',
    'pricing.feature.allFeatures': 'All features active',
    'pricing.feature.prioritySupport': 'Priority support',
    'pricing.feature.privateDiscord': 'Private Discord channel',
    'pricing.feature.profitable': '20 Euros more profitable',
    
    // Testimonials Section
    'testimonials.badge': 'Testimonials',
    'testimonials.title': 'What our users say',
    'testimonials.subtitle': 'With its user-friendly interface and advanced features, FLX offers an unmatched advantage in the world of FiveM. Trusted by players around the globe, FLX stands out by combining stealth and performance like no other.',
    
    // Testimonial content
    'testimonials.demir': 'An admin put me under spectate in EDV and ran an ocean check. Nothing showed up. Because FLX leaves no trace.',
    'testimonials.berk': 'In Fave, two full dev teams scanned everything. 0 results. FLX users leave no footprints.',
    'testimonials.dilara': 'Three different admins ran consecutive checks. All came up empty. This is where FLX shows its true power.',
    'testimonials.omer': 'They even dug through the server logs and ran manual checks for hours... FLX still couldn\'t be found.',
    'testimonials.furkan': 'I locked on with aim while the admin was spectating. He didn\'t notice a thing. FLX = silent domination.',
    'testimonials.alp': 'On Rebels, the top admin said \'there\'s something wrong here.\' Spent 2 hours digging — found nothing, went quiet.',
    'testimonials.rauf': 'I took a screenshot with FLX running, logs clean, no inject detected. What can we say? If you want to play hidden, you play with FLX.',
    'testimonials.deniz': 'Admin spectated me for 30 minutes straight, ran every detection tool they had. FLX stayed completely invisible.',
    
    // New Release Promo Section
    'promo.title': 'Let\'s Setup. Customize. Stay Undetected.',
    'promo.cta': 'Get started',
    
    // FAQ Section
    'faq.badge': 'Faqs',
    'faq.title': 'Questions? We\'ve got ',
    'faq.titleHighlight': 'answers',
    'faq.titleSuffix': '.',
    
    // FAQ Questions and Answers
    'faq.q1.question': 'Is it detected?',
    'faq.q1.answer': 'We minimize the risk of detection by using up-to-date bypass technologies. Regular updates ensure protection against anti-cheat systems.',
    'faq.q2.question': 'How often do updates come?',
    'faq.q2.answer': 'Necessary patches are released quickly based on game updates. Maintenance updates are typically carried out weekly.',
    'faq.q3.question': 'Do you have a free version?',
    'faq.q3.answer': 'Unfortunately, we do not currently have a free version.',
    'faq.q4.question': 'Can I use it on more than one PC?',
    'faq.q4.answer': 'Each license is valid for a single device; additional devices require a separate license. Devices are linked using the HWID system.',
    'faq.q5.question': 'Is there a money back guarantee?',
    'faq.q5.answer': 'Because it\'s a digital product, returns are not possible. You can watch our showcase before purchasing.',
    'faq.q6.question': 'How do I get support?',
    'faq.q6.answer': 'You can get 24/7 support on our Discord server. Special support channels are available for premium users.',
    
    // Footer
    'footer.description': 'No more getting caught in the contrast with FLX, thanks to the focus mode. You will not get stuck in any anticlimx and you will go through manual controls.',
    'footer.quickLinks': 'Quick Links',
    'footer.links': 'LINKS',
    'footer.refundPolicy': 'Refund Policy',
    'footer.faq': 'FAQ',
    'footer.privacyPolicy': 'Privacy Policy',
    'footer.termsOfService': 'Terms of Service',
    'footer.copyright': '© 2025 FLX. All rights reserved.',
    
    // Common
    'common.learnMore': 'Learn More',
    'common.getStarted': 'Get Started',
    'common.readMore': 'Read More',
    'common.close': 'Close',
    'common.open': 'Open',
    'common.loading': 'Loading...',
  }
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en')

  // Load language from localStorage on mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language
    if (savedLanguage && (savedLanguage === 'tr' || savedLanguage === 'en')) {
      setLanguageState(savedLanguage)
    }
  }, [])

  // Save language to localStorage when it changes
  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem('language', lang)
  }

  // Translation function
  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
