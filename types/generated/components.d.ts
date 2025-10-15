import type { Schema, Struct } from '@strapi/strapi';

export interface BlocksSlide extends Struct.ComponentSchema {
  collectionName: 'components_blocks_slides';
  info: {
    displayName: 'Slide';
  };
  attributes: {
    heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    link: Schema.Attribute.Component<'elements.link', false>;
    subHeading: Schema.Attribute.Text;
  };
}

export interface BlocksSolutionSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_solution_sections';
  info: {
    displayName: 'Solution-Section';
  };
  attributes: {
    Card: Schema.Attribute.Component<'elements.card', true>;
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface CompanyCareer extends Struct.ComponentSchema {
  collectionName: 'components_company_careers';
  info: {
    displayName: 'Career';
  };
  attributes: {
    description: Schema.Attribute.String;
    Job: Schema.Attribute.Component<'company.job-card', true>;
    title: Schema.Attribute.String;
  };
}

export interface CompanyCtaSection extends Struct.ComponentSchema {
  collectionName: 'components_company_cta_sections';
  info: {
    displayName: 'CtaSection';
  };
  attributes: {
    ctaLink: Schema.Attribute.String;
    ctaText: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface CompanyHeads extends Struct.ComponentSchema {
  collectionName: 'components_company_heads';
  info: {
    displayName: 'Heads';
  };
  attributes: {
    title: Schema.Attribute.String;
  };
}

export interface CompanyHeadsSection extends Struct.ComponentSchema {
  collectionName: 'components_company_heads_sections';
  info: {
    displayName: 'Heads Section';
  };
  attributes: {
    Photos: Schema.Attribute.Component<'company.photo-card', true>;
    title: Schema.Attribute.String;
  };
}

export interface CompanyJobCard extends Struct.ComponentSchema {
  collectionName: 'components_company_job_cards';
  info: {
    displayName: 'Job Card';
  };
  attributes: {
    level: Schema.Attribute.Text;
    title: Schema.Attribute.String;
    type: Schema.Attribute.String;
  };
}

export interface CompanyLife extends Struct.ComponentSchema {
  collectionName: 'components_company_lives';
  info: {
    displayName: 'Life';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    title: Schema.Attribute.String;
  };
}

export interface CompanyLocationSection extends Struct.ComponentSchema {
  collectionName: 'components_company_location_sections';
  info: {
    displayName: 'Location-Section';
  };
  attributes: {
    Card: Schema.Attribute.Component<'elements.card', true>;
  };
}

export interface CompanyPhotoCard extends Struct.ComponentSchema {
  collectionName: 'components_company_photo_cards';
  info: {
    displayName: 'Photo Card';
  };
  attributes: {
    designation: Schema.Attribute.String;
    href: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    name: Schema.Attribute.String;
  };
}

export interface CompanyStats extends Struct.ComponentSchema {
  collectionName: 'components_company_stats';
  info: {
    displayName: 'Stats';
  };
  attributes: {
    count: Schema.Attribute.BigInteger;
    label: Schema.Attribute.String;
  };
}

export interface CompanyStory extends Struct.ComponentSchema {
  collectionName: 'components_company_stories';
  info: {
    displayName: 'Story';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    title: Schema.Attribute.String;
  };
}

export interface CompanyValuesCard extends Struct.ComponentSchema {
  collectionName: 'components_company_values_cards';
  info: {
    displayName: 'Values Card';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface CompanyValuesSection extends Struct.ComponentSchema {
  collectionName: 'components_company_values_sections';
  info: {
    displayName: 'Values Section';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
    Values: Schema.Attribute.Component<'company.values-card', true>;
  };
}

export interface CompanyVisionCommunity extends Struct.ComponentSchema {
  collectionName: 'components_company_vision_communities';
  info: {
    displayName: 'Vision Community';
  };
  attributes: {
    description: Schema.Attribute.Text;
    Stats: Schema.Attribute.Component<'company.stats', true>;
    title: Schema.Attribute.String;
  };
}

export interface ElementsBanner extends Struct.ComponentSchema {
  collectionName: 'components_elements_banners';
  info: {
    displayName: 'Banner';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface ElementsCard extends Struct.ComponentSchema {
  collectionName: 'components_elements_cards';
  info: {
    displayName: 'Card';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface ElementsLink extends Struct.ComponentSchema {
  collectionName: 'components_elements_links';
  info: {
    displayName: 'Link';
  };
  attributes: {
    href: Schema.Attribute.String;
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    text: Schema.Attribute.String;
  };
}

export interface ElementsLogo extends Struct.ComponentSchema {
  collectionName: 'components_elements_logos';
  info: {
    displayName: 'Logo';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'>;
    logoText: Schema.Attribute.String;
  };
}

export interface FooterContactInfo extends Struct.ComponentSchema {
  collectionName: 'components_footer_contact_infos';
  info: {
    displayName: 'Contact-Info';
  };
  attributes: {
    email: Schema.Attribute.Email &
      Schema.Attribute.DefaultTo<'sales@cygnussolutions.co.in'>;
    phone: Schema.Attribute.String;
  };
}

export interface FooterLinkGroups extends Struct.ComponentSchema {
  collectionName: 'components_footer_link_groups';
  info: {
    displayName: 'Link-Groups';
  };
  attributes: {
    link: Schema.Attribute.Component<'elements.link', true>;
    title: Schema.Attribute.String;
  };
}

export interface FooterSocialLink extends Struct.ComponentSchema {
  collectionName: 'components_footer_social_links';
  info: {
    displayName: 'Social-Link';
  };
  attributes: {
    platform: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface HeaderDropdownItem extends Struct.ComponentSchema {
  collectionName: 'components_header_dropdown_items';
  info: {
    displayName: 'Dropdown-item';
  };
  attributes: {
    description: Schema.Attribute.Text;
    href: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface HeaderMenuItem extends Struct.ComponentSchema {
  collectionName: 'components_header_menu_items';
  info: {
    displayName: 'Menu-item';
  };
  attributes: {
    dropdownItems: Schema.Attribute.Component<'header.dropdown-item', true>;
    hasDropdown: Schema.Attribute.Boolean;
    href: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface HomepageBannerSection extends Struct.ComponentSchema {
  collectionName: 'components_homepage_banner_sections';
  info: {
    displayName: 'Banner-Section';
  };
  attributes: {
    backgroundVideo: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface HomepageBentoGrid extends Struct.ComponentSchema {
  collectionName: 'components_homepage_bento_grids';
  info: {
    displayName: 'Bento-Grid-Item';
  };
  attributes: {
    backgroundType: Schema.Attribute.Enumeration<
      ['image', 'video', 'gradient', 'logoRipple']
    >;
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String;
    video: Schema.Attribute.Media<'videos'>;
  };
}

export interface HomepageBentoGridSection extends Struct.ComponentSchema {
  collectionName: 'components_homepage_bento_grid_sections';
  info: {
    displayName: 'Bento-Grid-Section';
  };
  attributes: {
    bentoGrids: Schema.Attribute.Component<'homepage.bento-grid', true>;
    title: Schema.Attribute.String;
  };
}

export interface HomepageCompanies extends Struct.ComponentSchema {
  collectionName: 'components_homepage_companies';
  info: {
    displayName: 'Companies';
  };
  attributes: {
    description: Schema.Attribute.Text;
    logos: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    title: Schema.Attribute.String;
  };
}

export interface HomepageCtaSection extends Struct.ComponentSchema {
  collectionName: 'components_homepage_cta_sections';
  info: {
    displayName: 'CTA Section';
  };
  attributes: {
    ctaLink: Schema.Attribute.String;
    ctaText: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface HomepageCustomCarousel extends Struct.ComponentSchema {
  collectionName: 'components_homepage_custom_carousels';
  info: {
    displayName: 'Custom-Carousel';
  };
  attributes: {
    ctaLink: Schema.Attribute.String;
    ctaText: Schema.Attribute.String;
    heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    subHeading: Schema.Attribute.Text;
  };
}

export interface HomepageCustomCarouselSection extends Struct.ComponentSchema {
  collectionName: 'components_homepage_custom_carousel_sections';
  info: {
    displayName: 'Custom-Carousel-Section';
  };
  attributes: {
    carousels: Schema.Attribute.Component<'homepage.custom-carousel', true>;
    title: Schema.Attribute.String;
  };
}

export interface HomepageIndustriesSection extends Struct.ComponentSchema {
  collectionName: 'components_homepage_industries_sections';
  info: {
    displayName: 'Industries-Section';
  };
  attributes: {
    Industries: Schema.Attribute.Component<'homepage.industries-slide', true>;
    title: Schema.Attribute.String;
  };
}

export interface HomepageIndustriesSlide extends Struct.ComponentSchema {
  collectionName: 'components_homepage_industries_slides';
  info: {
    displayName: 'Industries-Slide';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    slug: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface HomepageProductCard extends Struct.ComponentSchema {
  collectionName: 'components_homepage_product_cards';
  info: {
    displayName: 'Product-Card';
  };
  attributes: {
    description: Schema.Attribute.Text;
    Image: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String;
  };
}

export interface HomepageProductSection extends Struct.ComponentSchema {
  collectionName: 'components_homepage_product_sections';
  info: {
    displayName: 'Product-Section';
  };
  attributes: {
    description: Schema.Attribute.Text;
    productCards: Schema.Attribute.Component<'homepage.product-card', true>;
    title: Schema.Attribute.String;
  };
}

export interface LayoutFooter extends Struct.ComponentSchema {
  collectionName: 'components_layout_footers';
  info: {
    displayName: 'Footer';
  };
  attributes: {
    contact: Schema.Attribute.Component<'footer.contact-info', false>;
    copyright: Schema.Attribute.Text;
    description: Schema.Attribute.Text;
    linkGroup: Schema.Attribute.Component<'footer.link-groups', true>;
    links: Schema.Attribute.Component<'footer.social-link', true>;
    logo: Schema.Attribute.Component<'elements.logo', false>;
  };
}

export interface LayoutHeader extends Struct.ComponentSchema {
  collectionName: 'components_layout_headers';
  info: {
    displayName: 'Header';
  };
  attributes: {
    cta: Schema.Attribute.Component<'elements.link', false>;
    logo: Schema.Attribute.Component<'elements.logo', false>;
    menus: Schema.Attribute.Component<'header.menu-item', true>;
  };
}

export interface SolutionsAimlSection extends Struct.ComponentSchema {
  collectionName: 'components_solutions_aiml_sections';
  info: {
    displayName: 'AIML-Section';
  };
  attributes: {
    Section: Schema.Attribute.Component<'blocks.solution-section', false>;
  };
}

export interface SolutionsCloudSection extends Struct.ComponentSchema {
  collectionName: 'components_solutions_cloud_sections';
  info: {
    displayName: 'Cloud-Section';
  };
  attributes: {
    Section: Schema.Attribute.Component<'blocks.solution-section', false>;
  };
}

export interface SolutionsCtaSection extends Struct.ComponentSchema {
  collectionName: 'components_solutions_cta_sections';
  info: {
    displayName: 'CtaSection';
  };
  attributes: {
    ctaLink: Schema.Attribute.String;
    ctaText: Schema.Attribute.String;
    text: Schema.Attribute.Text;
  };
}

export interface SolutionsCyberSecuritySection extends Struct.ComponentSchema {
  collectionName: 'components_solutions_cyber_security_sections';
  info: {
    displayName: 'Cyber-Security-Section';
  };
  attributes: {
    Section: Schema.Attribute.Component<'blocks.solution-section', false>;
  };
}

export interface SolutionsEndPointSection extends Struct.ComponentSchema {
  collectionName: 'components_solutions_end_point_sections';
  info: {
    displayName: 'End-Point-Section';
  };
  attributes: {
    Section: Schema.Attribute.Component<'blocks.solution-section', false>;
  };
}

export interface SolutionsHpcSection extends Struct.ComponentSchema {
  collectionName: 'components_solutions_hpc_sections';
  info: {
    displayName: 'HPC-Section';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface SolutionsInfrastructureSection extends Struct.ComponentSchema {
  collectionName: 'components_solutions_infrastructure_sections';
  info: {
    displayName: 'Infrastructure-Section';
  };
  attributes: {
    Section: Schema.Attribute.Component<'blocks.solution-section', false>;
  };
}

export interface SolutionsNetworkSection extends Struct.ComponentSchema {
  collectionName: 'components_solutions_network_sections';
  info: {
    displayName: 'Network-Section';
  };
  attributes: {
    Section: Schema.Attribute.Component<'blocks.solution-section', false>;
  };
}

export interface SolutionsPrinterSection extends Struct.ComponentSchema {
  collectionName: 'components_solutions_printer_sections';
  info: {
    displayName: 'Printer-Section';
  };
  attributes: {
    Section: Schema.Attribute.Component<'blocks.solution-section', false>;
  };
}

export interface SolutionsStorageSection extends Struct.ComponentSchema {
  collectionName: 'components_solutions_storage_sections';
  info: {
    displayName: 'Storage-Section';
  };
  attributes: {
    Section: Schema.Attribute.Component<'blocks.solution-section', false>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'blocks.slide': BlocksSlide;
      'blocks.solution-section': BlocksSolutionSection;
      'company.career': CompanyCareer;
      'company.cta-section': CompanyCtaSection;
      'company.heads': CompanyHeads;
      'company.heads-section': CompanyHeadsSection;
      'company.job-card': CompanyJobCard;
      'company.life': CompanyLife;
      'company.location-section': CompanyLocationSection;
      'company.photo-card': CompanyPhotoCard;
      'company.stats': CompanyStats;
      'company.story': CompanyStory;
      'company.values-card': CompanyValuesCard;
      'company.values-section': CompanyValuesSection;
      'company.vision-community': CompanyVisionCommunity;
      'elements.banner': ElementsBanner;
      'elements.card': ElementsCard;
      'elements.link': ElementsLink;
      'elements.logo': ElementsLogo;
      'footer.contact-info': FooterContactInfo;
      'footer.link-groups': FooterLinkGroups;
      'footer.social-link': FooterSocialLink;
      'header.dropdown-item': HeaderDropdownItem;
      'header.menu-item': HeaderMenuItem;
      'homepage.banner-section': HomepageBannerSection;
      'homepage.bento-grid': HomepageBentoGrid;
      'homepage.bento-grid-section': HomepageBentoGridSection;
      'homepage.companies': HomepageCompanies;
      'homepage.cta-section': HomepageCtaSection;
      'homepage.custom-carousel': HomepageCustomCarousel;
      'homepage.custom-carousel-section': HomepageCustomCarouselSection;
      'homepage.industries-section': HomepageIndustriesSection;
      'homepage.industries-slide': HomepageIndustriesSlide;
      'homepage.product-card': HomepageProductCard;
      'homepage.product-section': HomepageProductSection;
      'layout.footer': LayoutFooter;
      'layout.header': LayoutHeader;
      'solutions.aiml-section': SolutionsAimlSection;
      'solutions.cloud-section': SolutionsCloudSection;
      'solutions.cta-section': SolutionsCtaSection;
      'solutions.cyber-security-section': SolutionsCyberSecuritySection;
      'solutions.end-point-section': SolutionsEndPointSection;
      'solutions.hpc-section': SolutionsHpcSection;
      'solutions.infrastructure-section': SolutionsInfrastructureSection;
      'solutions.network-section': SolutionsNetworkSection;
      'solutions.printer-section': SolutionsPrinterSection;
      'solutions.storage-section': SolutionsStorageSection;
    }
  }
}
