const SERVICE_ICON_DIR = '/images/Homepage/Our%20Service%20Icon';
const SERVICE_IMAGE_DIR = `${SERVICE_ICON_DIR}/Our%20serices%20images`;
const PRODUCT_DIR = '/images/Homepage/Our%20Product';
const INDUSTRY_DIR = '/images/Homepage/Our%20Industry';
const WHY_DIR = '/images/Homepage/Why%20Pirai';

export const HOMEPAGE_ASSETS = {
  hero: '/images/Homepage/Hero%20Section/Hero%20Section.png',
  logo: '/images/Homepage/pirai-logo.png',
  ctaBanner: '/images/Homepage/Why%20Pirai/Footer%20CTA.png',
  ctaIllustration: '/images/Homepage/cta-illustration.png',
  services: {
    'Intelligent Automation': {
      icon: `${SERVICE_ICON_DIR}/ai%20(1)%201.svg`,
      image: `${SERVICE_IMAGE_DIR}/Intelligent%20Automation.png`,
    },
    'Enterprise Solutions': {
      icon: `${SERVICE_ICON_DIR}/software-development%201.svg`,
      image: `${SERVICE_IMAGE_DIR}/Enterprise%20Solutions.png`,
    },
    'Cloud Platforms': {
      icon: `${SERVICE_ICON_DIR}/cloud-technology%201.svg`,
      image: `${SERVICE_IMAGE_DIR}/Cloud%20Platforms.png`,
    },
    'Data & Insights': {
      icon: `${SERVICE_ICON_DIR}/bar-chart%201.svg`,
      image: `${SERVICE_IMAGE_DIR}/Data-Insights.png`,
    },
    'Quality Engineering': {
      icon: `${SERVICE_ICON_DIR}/security%201.svg`,
      image: `${SERVICE_IMAGE_DIR}/Quality%20Engineering.png`,
    },
    'Business Transformation': {
      icon: `${SERVICE_ICON_DIR}/business_15931412%201.svg`,
      image: `${SERVICE_IMAGE_DIR}/Business%20Transformation.png`,
    },
    'CTO as a Service': {
      icon: `${SERVICE_ICON_DIR}/business_15931412%201.svg`,
      image: `${SERVICE_IMAGE_DIR}/Business%20Transformation.png`,
    },
  },
  products: {
    'Contract Genie': `${PRODUCT_DIR}/contract_11294301%201.svg`,
    'AI MRP': `${PRODUCT_DIR}/paper%20(1)%202.svg`,
    'Sense Guard': `${PRODUCT_DIR}/shield_14988200%201.svg`,
  },
  industries: {
    BFSI: `${INDUSTRY_DIR}/BFSI.svg`,
    Healthcare: `${INDUSTRY_DIR}/Healthcare.svg`,
    Telecom: `${INDUSTRY_DIR}/Layer_14.svg`,
    Retail: `${INDUSTRY_DIR}/Retail.svg`,
    Manufacturing: `${INDUSTRY_DIR}/Manufacturing.svg`,
  },
  whyPirai: {
    ENGINEERED: `${WHY_DIR}/ENGINEERED.svg`,
    INTELLIGENT: `${WHY_DIR}/INTELLIGENT.svg`,
    TRUSTED: `${WHY_DIR}/TRUSTED.svg`,
  },
  testimonials: {
    quote: `${WHY_DIR}/Testimonial%20icon.svg`,
    quoteAlt: `${WHY_DIR}/Testimonial%20icon_1.svg`,
    portrait: '/images/Homepage/testimonial-portrait.png',
  },
};
