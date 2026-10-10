import { siteConfig } from '../data/siteConfig'

export const whatsappLink = (message = '') =>
  `https://wa.me/${siteConfig.whatsappNumber}${message ? `?text=${encodeURIComponent(message)}` : ''}`

export const productEnquiryLink = (product) =>
  whatsappLink(`Hello ${siteConfig.brand}, I'd like to enquire about "${product.name}". Could you share more details?`)
