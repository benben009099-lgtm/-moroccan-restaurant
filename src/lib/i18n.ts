import type { Locale } from "./restaurant-data";

export interface Dictionary {
  dir: "ltr" | "rtl";
  langName: string;
  nav: {
    home: string;
    about: string;
    menu: string;
    gallery: string;
    reviews: string;
    hours: string;
    location: string;
    reserveBtn: string;
    callBtn: string;
  };
  hero: {
    eyebrow: string;
    headline: string;
    englishSignatureHeadline: string;
    subtitle: string;
    englishSignatureSubtitle: string;
    exploreMenuBtn: string;
    contactUsBtn: string;
    ratingLabel: string;
    reviewsCountLabel: string;
    priceRangeLabel: string;
    locationBadge: string;
    scrollPrompt: string;
  };
  about: {
    eyebrow: string;
    title: string;
    lead: string;
    body1: string;
    body2: string;
    stat1Value: string;
    stat1Label: string;
    stat2Value: string;
    stat2Label: string;
    stat3Value: string;
    stat3Label: string;
    quote: string;
    quoteAuthor: string;
    pillars: {
      title: string;
      desc: string;
    }[];
  };
  menuSection: {
    eyebrow: string;
    title: string;
    subtitle: string;
    allCategories: string;
    searchPlaceholder: string;
    askForPrice: string;
    inquireViaWhatsapp: string;
    addToSelection: string;
    addedToSelection: string;
    signatureBadge: string;
    showingCount: string;
    priceNote: string;
    clearFilters: string;
  };
  gallerySection: {
    eyebrow: string;
    title: string;
    subtitle: string;
    filterAll: string;
    filterTajines: string;
    filterSignature: string;
    filterArchitecture: string;
    filterStarters: string;
    viewFullscreen: string;
    closeLightbox: string;
  };
  trustSection: {
    eyebrow: string;
    title: string;
    subtitle: string;
    verifiedBadge: string;
    googleRatingTitle: string;
    basedOnReviews: string;
    priceRangeTitle: string;
    priceRangeSubtitle: string;
    cuisineTypeTitle: string;
    cuisineTypeSubtitle: string;
    transparencyNotice: string;
    viewOnGoogleMaps: string;
    hospitalityHighlightsTitle: string;
    highlights: {
      tag: string;
      title: string;
      description: string;
      dishHighlight: string;
    }[];
  };
  hoursSection: {
    eyebrow: string;
    title: string;
    subtitle: string;
    editHoursBtn: string;
    saveHoursBtn: string;
    cancelBtn: string;
    openStatus: string;
    closedStatus: string;
    savedSuccess: string;
    continuousServiceBadge: string;
  };
  locationSection: {
    eyebrow: string;
    title: string;
    subtitle: string;
    addressLabel: string;
    plusCodeLabel: string;
    phoneLabel: string;
    priceBenchmarkLabel: string;
    directionsBtn: string;
    callBtn: string;
    whatsappBtn: string;
    copyPlusCode: string;
    copied: string;
    inquiryFormTitle: string;
    inquiryFormSubtitle: string;
    guestNameLabel: string;
    guestNamePlaceholder: string;
    guestPhoneLabel: string;
    partySizeLabel: string;
    dateLabel: string;
    timeLabel: string;
    inquiryTypeLabel: string;
    typeReservation: string;
    typePriceInquiry: string;
    typePreorder: string;
    notesLabel: string;
    notesPlaceholder: string;
    submitInquiryBtn: string;
    sendViaWhatsappToo: string;
    inquirySuccessTitle: string;
    inquirySuccessMsg: string;
  };
  footer: {
    description: string;
    quickNavTitle: string;
    menuCategoriesTitle: string;
    contactInfoTitle: string;
    socialLinksTitle: string;
    editSocialBtn: string;
    saveSocialBtn: string;
    rightsReserved: string;
    designedWithCare: string;
  };
}

export const DICTIONARIES: Record<Locale, Dictionary> = {
  fr: {
    dir: "ltr",
    langName: "Français",
    nav: {
      home: "Accueil",
      about: "Notre Histoire",
      menu: "Notre Carte",
      gallery: "Galerie",
      reviews: "Avis & Confiance",
      hours: "Horaires",
      location: "Accès & Contact",
      reserveBtn: "Réserver / Commander",
      callBtn: "Appeler",
    },
    hero: {
      eyebrow: "GASTRONOMIE MAROCAINE AUTHENTIQUE • AIT TOUGHTACH",
      headline: "Discover the Taste of Morocco",
      englishSignatureHeadline: "Découvrez toute l'Âme et les Saveurs du Maroc",
      subtitle:
        "Authentic Moroccan Flavors, Traditional Hospitality, Unforgettable Experiences.",
      englishSignatureSubtitle:
        "Saveurs marocaines authentiques, hospitalité traditionnelle et expériences inoubliables au cœur d'Ait Toughtach.",
      exploreMenuBtn: "Explore Our Menu",
      contactUsBtn: "Contact Us",
      ratingLabel: "Note Google",
      reviewsCountLabel: "58 avis clients vérifiés",
      priceRangeLabel: "MAD 50–100 / personne",
      locationBadge: "Q32J+HQ4, Ait Toughtach, Maroc",
      scrollPrompt: "Découvrir l'expérience",
    },
    about: {
      eyebrow: "L'ESPRIT DU RESTAURANT 7",
      title: "L'Art de l'Hospitalité Marocaine & la Noblesse du Terroir",
      lead: "Situé à Ait Toughtach (Q32J+HQ4), RESTAURANT 7 célèbre l'authenticité de la cuisine marocaine traditionnelle dans un cadre chaleureux, élégant et accueillant.",
      body1:
        "Chaque jour, notre cuisine s'anime autour du parfum envoûtant du safran pur, du citron confit, du gingembre frais et du bois d'olivier. De notre célèbre Tajine de Dromadaire mijoté lentement en terre cuite à notre Pastilla au Poulet dorée et croustillante, en passant par la Truite fraîche de l'Atlas, chaque assiette raconte une histoire de générosité.",
      body2:
        "Que vous soyez voyageur sur les routes de l'Atlas ou convive fidèle venu partager un repas en famille, nous vous accueillons selon la plus pure tradition marocaine : avec le sourire, le thé à la menthe fumant et des plats préparés à la minute avec des produits frais du marché.",
      stat1Value: "4.2 / 5",
      stat1Label: "58 Avis sur Google Maps",
      stat2Value: "10",
      stat2Label: "Catégories Culinaires",
      stat3Value: "50–100 MAD",
      stat3Label: "Excellent Rapport Qualité-Prix",
      quote:
        "« La table marocaine n'est pas seulement un repas ; c'est une demeure ouverte où le parfum du tajine et la chaleur de l'accueil rassemblent les cœurs. »",
      quoteAuthor: "Maison Restaurant 7 • Ait Toughtach",
      pillars: [
        {
          title: "Cuisson Lente en Terre Cuite",
          desc: "Nos tajines de dromadaire, de bœuf aux pruneaux et de légumes mijotent patiemment pour révéler une tendreté incomparable.",
        },
        {
          title: "Fraîcheur de l'Atlas",
          desc: "Truite entière de l'Atlas, légumes du jour, huile d'olive vierge et viandes sélectionnées auprès des producteurs locaux.",
        },
        {
          title: "Hospitalité Authentique",
          desc: "Un service attentionné, familial et élégant, pensé pour offrir une halte mémorable à chaque visiteur.",
        },
      ],
    },
    menuSection: {
      eyebrow: "CARTE GASTRONOMIQUE COMPLÈTE",
      title: "Notre Carte & Spécialités",
      subtitle:
        "Explorez nos 10 catégories authentiques : Tajines mijotés, Couscous, Truite de l'Atlas, Pastilla, Grillades au feu de bois, Salades fraîches, Omelettes berbères, Pizzas, Pâtes et Tacos.",
      allCategories: "Toute la Carte",
      searchPlaceholder: "Rechercher un plat (ex: Camel Tajine, Pastilla, Trout, Salad 7)...",
      askForPrice: "Prix sur demande / Ask for price",
      inquireViaWhatsapp: "Demander le tarif / Commander",
      addToSelection: "Ajouter à ma sélection",
      addedToSelection: "Sélectionné",
      signatureBadge: "Signature",
      showingCount: "plats affichés",
      priceNote:
        "Tous nos prix affichés sont en Dirhams Marocains (MAD). Pour les plats du jour « Prix sur demande », cliquez pour nous contacter directement par téléphone ou WhatsApp.",
      clearFilters: "Réinitialiser les filtres",
    },
    gallerySection: {
      eyebrow: "IMMERSION VISUELLE",
      title: "Galerie Culinaire & Atmosphère",
      subtitle:
        "Plongez dans l'univers visuel de RESTAURANT 7 : nos tajines fumants, notre pastilla croustillante, l'architecture chaleureuse et nos plats fraîchement préparés.",
      filterAll: "Tout Voir",
      filterTajines: "Tajines",
      filterSignature: "Plats Signatures",
      filterArchitecture: "Le Restaurant",
      filterStarters: "Entrées & Omelettes",
      viewFullscreen: "Agrandir la photo",
      closeLightbox: "Fermer",
    },
    trustSection: {
      eyebrow: "CONFIANCE & RÉPUTATION VÉRIFIÉE",
      title: "Apprécié par les Voyageurs & les Amoureux du Maroc",
      subtitle:
        "Nous accordons une importance absolue à l'authenticité : découvrez nos indicateurs officiels Google Maps et les piliers qui font la renommée de notre table à Ait Toughtach.",
      verifiedBadge: "Données Officielles Google Maps",
      googleRatingTitle: "Note Moyenne de 4.2 / 5",
      basedOnReviews: "Basée sur 58 avis clients authentiques sur Google",
      priceRangeTitle: "MAD 50–100",
      priceRangeSubtitle: "Fourchette de prix accessible & portions généreuses",
      cuisineTypeTitle: "Restaurant Marocain",
      cuisineTypeSubtitle: "Spécialités traditionnelles & cuisine sur commande",
      transparencyNotice:
        "Politique d'authenticité : Par respect pour nos clients, nous n'inventons aucun faux témoignage. Nos 58 avis vérifiés sont consultables en toute transparence directement sur notre fiche Google Maps officielle (Q32J+HQ4).",
      viewOnGoogleMaps: "Consulter les 58 avis sur Google Maps",
      hospitalityHighlightsTitle: "Ce Que Nos Convives Cébrent au Restaurant 7",
      highlights: [
        {
          tag: "SPÉCIALITÉ EMBLÉMATIQUE",
          title: "Le Tajine de Dromadaire & les Tajines aux Légumes",
          description:
            "Préparés dans des tajines en argile traditionnelle avec un équilibre subtil d'épices marocaines, d'huile d'olive et de légumes frais.",
          dishHighlight: "Camel Tajine (120 MAD) • Vegetarian Tajine (90 MAD)",
        },
        {
          tag: "SAVOIR-FAIRE MAROCAIN",
          title: "La Pastilla au Poulet & la Truite de l'Atlas",
          description:
            "L'alliance raffinée du croustillant sucré-salé de la pastilla marocaine et de la fraîcheur des rivières de l'Atlas.",
          dishHighlight: "Chicken Pastilla (120 MAD) • Trout Of The Atlas (150 MAD)",
        },
        {
          tag: "ACCUEIL & CONVIVIALITÉ",
          title: "Une Halte Chaleureuse à Ait Toughtach",
          description:
            "Une table conviviale proposant aussi bien de grands plats marocains que des grillades au charbon, omelettes berbères et pizzas artisanales.",
          dishHighlight: "Plus Code : Q32J+HQ4 • +212 6 36 03 68 68",
        },
      ],
    },
    hoursSection: {
      eyebrow: "HORAIRES D'OUVERTURE",
      title: "Heures de Service & Accueil",
      subtitle:
        "Nous vous accueillons tous les jours pour le petit-déjeuner tardif, le déjeuner et le dîner. Les horaires ci-dessous sont modifiables en temps réel par la direction.",
      editHoursBtn: "Modifier les horaires",
      saveHoursBtn: "Enregistrer les modifications",
      cancelBtn: "Annuler",
      openStatus: "Ouvert",
      closedStatus: "Fermé",
      savedSuccess: "Horaires mis à jour avec succès dans la base de données.",
      continuousServiceBadge: "Service Continu • Réservation & Emporter disponibles",
    },
    locationSection: {
      eyebrow: "LOCALISATION & CONTACT DIRECT",
      title: "Nous Rendre Visite à Ait Toughtach",
      subtitle:
        "Retrouvez facilement RESTAURANT 7 grâce à notre Google Plus Code Q32J+HQ4 ou contactez-nous directement par téléphone ou WhatsApp pour réserver votre table ou commander.",
      addressLabel: "Adresse & Localité",
      plusCodeLabel: "Google Maps Plus Code",
      phoneLabel: "Téléphone & WhatsApp",
      priceBenchmarkLabel: "Budget Moyen",
      directionsBtn: "Itinéraire Google Maps",
      callBtn: "Appeler +212 6 36 03 68 68",
      whatsappBtn: "Écrire sur WhatsApp",
      copyPlusCode: "Copier le code Q32J+HQ4",
      copied: "Copié !",
      inquiryFormTitle: "Réserver une Table ou Demander un Tarif",
      inquiryFormSubtitle:
        "Réservez votre table, précommandez un tajine pour qu'il soit prêt à votre arrivée, ou renseignez-vous sur nos plats du jour.",
      guestNameLabel: "Votre Nom Complet",
      guestNamePlaceholder: "Ex: Karim Benali",
      guestPhoneLabel: "Numéro de Téléphone / WhatsApp",
      partySizeLabel: "Nombre de Convives",
      dateLabel: "Date Souhaitée",
      timeLabel: "Heure d'Arrivée",
      inquiryTypeLabel: "Objet de la Demande",
      typeReservation: "Réservation de table",
      typePriceInquiry: "Demande de prix (Plats sur demande)",
      typePreorder: "Précommande de Tajine / Couscous",
      notesLabel: "Plats souhaités ou demandes particulières",
      notesPlaceholder:
        "Ex: 1 Camel Tajine, 1 Chicken Pastilla, demande de tarif pour Berber Omelette & Lamb Chop...",
      submitInquiryBtn: "Confirmer la Demande",
      sendViaWhatsappToo: "Envoyer également directement sur WhatsApp (+212 6 36 03 68 68)",
      inquirySuccessTitle: "Demande Enregistrée avec Succès !",
      inquirySuccessMsg:
        "Notre équipe au RESTAURANT 7 a bien reçu votre demande. Vous pouvez également ouvrir WhatsApp pour une réponse immédiate.",
    },
    footer: {
      description:
        "Restaurant marocain authentique à Ait Toughtach (Q32J+HQ4). Tajines traditionnels, couscous, truite de l'Atlas, pastilla au poulet, grillades au feu de bois et hospitalité marocaine d'exception.",
      quickNavTitle: "Navigation Rapide",
      menuCategoriesTitle: "Catégories du Menu",
      contactInfoTitle: "Contact & Accès",
      socialLinksTitle: "Réseaux Sociaux",
      editSocialBtn: "Éditer les liens sociaux",
      saveSocialBtn: "Enregistrer les liens",
      rightsReserved: "Tous droits réservés.",
      designedWithCare: "Hospitalité Marocaine Authentique • Ait Toughtach, Maroc",
    },
  },

  en: {
    dir: "ltr",
    langName: "English",
    nav: {
      home: "Home",
      about: "About Us",
      menu: "Our Menu",
      gallery: "Gallery",
      reviews: "Reviews & Trust",
      hours: "Opening Hours",
      location: "Location & Contact",
      reserveBtn: "Book / Inquire",
      callBtn: "Call Now",
    },
    hero: {
      eyebrow: "AUTHENTIC MOROCCAN GASTRONOMY • AIT TOUGHTACH",
      headline: "Discover the Taste of Morocco",
      englishSignatureHeadline: "Where Heritage Meets Contemporary Moroccan Dining",
      subtitle:
        "Authentic Moroccan Flavors, Traditional Hospitality, Unforgettable Experiences.",
      englishSignatureSubtitle:
        "Slow-simmered clay tajines, Atlas mountain trout, golden chicken pastilla, and warm Berber hospitality in Ait Toughtach.",
      exploreMenuBtn: "Explore Our Menu",
      contactUsBtn: "Contact Us",
      ratingLabel: "Google Rating",
      reviewsCountLabel: "58 verified reviews",
      priceRangeLabel: "MAD 50–100 per guest",
      locationBadge: "Q32J+HQ4, Ait Toughtach, Morocco",
      scrollPrompt: "Explore the sanctuary",
    },
    about: {
      eyebrow: "THE STORY OF RESTAURANT 7",
      title: "A Sanctuary of Traditional Moroccan Flavors & Warm Hospitality",
      lead: "Located in Ait Toughtach, Morocco (Plus Code Q32J+HQ4), RESTAURANT 7 is a premier Moroccan restaurant offering delicious traditional dishes, genuine hospitality, and an unforgettable dining experience.",
      body1:
        "Every dish leaving our kitchen honors time-tested Moroccan culinary craftsmanship. From our prized Camel Tajine and Vegetable Tajine slow-cooked in hand-glazed terracotta vessels, to our crisp, cinnamon-dusted Chicken Pastilla and whole roasted Trout of the Atlas, we celebrate the richness of Morocco's terroir.",
      body2:
        "Whether you are journeying through the Atlas foothills or gathering with family and friends, RESTAURANT 7 welcomes you with the warmth of a traditional Moroccan riad—serving freshly baked bread, aromatic mint tea, and generous portions crafted with care.",
      stat1Value: "4.2 / 5",
      stat1Label: "58 Google Maps Reviews",
      stat2Value: "10",
      stat2Label: "Curated Menu Categories",
      stat3Value: "50–100 MAD",
      stat3Label: "Accessible Luxury Dining",
      quote:
        "“In Morocco, hospitality is a sacred art—measured by the warmth of the welcome, the fragrance of saffron, and the joy shared around the table.”",
      quoteAuthor: "Restaurant 7 Culinary House • Ait Toughtach",
      pillars: [
        {
          title: "Authentic Clay-Pot Tajines",
          desc: "Slow-braised Camel Tajine, Beef Tajine with Plum, and Vegetarian Tajine cooked gently to lock in deep, aromatic flavors.",
        },
        {
          title: "Fresh Regional Ingredients",
          desc: "Whole Trout of the Atlas, farm-fresh Berber omelettes, hand-rolled couscous, and charcoal-grilled skewers.",
        },
        {
          title: "Genuine Moroccan Welcome",
          desc: "Attentive, family-friendly hospitality in a serene setting designed for comfort and memorable conversation.",
        },
      ],
    },
    menuSection: {
      eyebrow: "OUR DIGITAL GASTRONOMIC MENU",
      title: "Our Menu & Signature Creations",
      subtitle:
        "Browse all 10 categories with verified dish names and prices in Moroccan Dirhams (MAD). Dishes without fixed prices are prepared to order—simply ask for today's price.",
      allCategories: "All Categories",
      searchPlaceholder: "Search dishes (e.g., Camel Tajine, Pastilla, Trout, Salad 7)...",
      askForPrice: "Ask for price",
      inquireViaWhatsapp: "Ask for price / Order",
      addToSelection: "Add to Inquiry",
      addedToSelection: "Selected",
      signatureBadge: "Signature",
      showingCount: "dishes displayed",
      priceNote:
        "All confirmed prices are listed in Moroccan Dirhams (MAD). Items marked 'Ask for price' reflect market availability—click any item to inquire via phone or WhatsApp.",
      clearFilters: "Reset filters",
    },
    gallerySection: {
      eyebrow: "VISUAL STORYTELLING",
      title: "Restaurant & Culinary Photo Gallery",
      subtitle:
        "Explore authentic photographs of our Moroccan vegetable tajine, camel tajine, chicken pastilla, freshly prepared meals, and the welcoming architecture of RESTAURANT 7.",
      filterAll: "All Photos",
      filterTajines: "Tajines",
      filterSignature: "Signature Dishes",
      filterArchitecture: "Restaurant Exterior",
      filterStarters: "Starters & Omelettes",
      viewFullscreen: "View in Lightbox",
      closeLightbox: "Close",
    },
    trustSection: {
      eyebrow: "CUSTOMER TRUST & REPUTATION",
      title: "Trusted by Diners & Travelers Across Morocco",
      subtitle:
        "Honest reputation backed by 58 verified Google reviews and a 4.2/5 rating. We highlight our authentic culinary pillars without fabricating customer quotes.",
      verifiedBadge: "Verified Google Maps Profile",
      googleRatingTitle: "4.2 / 5 Star Rating",
      basedOnReviews: "Based on 58 customer reviews on Google Maps",
      priceRangeTitle: "MAD 50–100",
      priceRangeSubtitle: "Fair, transparent pricing for generous Moroccan portions",
      cuisineTypeTitle: "Moroccan Restaurant",
      cuisineTypeSubtitle: "Traditional Moroccan dishes with modern presentation",
      transparencyNotice:
        "Authenticity Commitment: We never fabricate customer testimonials. All 58 real customer reviews and ratings can be explored directly on our official Google Maps listing (Q32J+HQ4, Ait Toughtach).",
      viewOnGoogleMaps: "Read 58 Reviews on Google Maps",
      hospitalityHighlightsTitle: "Why Guests Choose Restaurant 7",
      highlights: [
        {
          tag: "SIGNATURE TAJINES",
          title: "Camel Tajine & Traditional Clay-Pot Classics",
          description:
            "Renowned for slow-cooked Camel Tajine (120 MAD), Beef Tajine with Plum (100 MAD), and vibrant Vegetarian Tajine (90 MAD).",
          dishHighlight: "Camel Tajine • Beef Tajine With Plum • Vegetarian Tajine",
        },
        {
          tag: "HERITAGE SPECIALTIES",
          title: "Chicken Pastilla & Trout of the Atlas",
          description:
            "Golden flaky Moroccan Chicken Pastilla (120 MAD) and fresh Trout of the Atlas (150 MAD) prepared with aromatic herbs.",
          dishHighlight: "Chicken Pastilla • Trout Of The Atlas • Steamed Lamb",
        },
        {
          tag: "WARM HOSPITALITY",
          title: "Welcoming Dining in Ait Toughtach",
          description:
            "Attentive service, peaceful atmosphere, and a diverse menu spanning Moroccan classics, charcoal grills, pizzas, pasta, and tacos.",
          dishHighlight: "Q32J+HQ4, Ait Toughtach • +212 6 36 03 68 68",
        },
      ],
    },
    hoursSection: {
      eyebrow: "OPENING HOURS",
      title: "Dining Hours & Schedule",
      subtitle:
        "Open daily to welcome local families and travelers. Restaurant managers can edit and save live opening hours directly from this section.",
      editHoursBtn: "Edit Opening Hours",
      saveHoursBtn: "Save Schedule",
      cancelBtn: "Cancel",
      openStatus: "Open",
      closedStatus: "Closed",
      savedSuccess: "Opening hours updated and saved to database.",
      continuousServiceBadge: "Continuous Daily Dining • Dine-in & Takeaway",
    },
    locationSection: {
      eyebrow: "LOCATION & DIRECT CONTACT",
      title: "Visit Restaurant 7 in Ait Toughtach",
      subtitle:
        "Find us effortlessly via Google Maps Plus Code Q32J+HQ4 in Ait Toughtach, Morocco, or reach out directly by phone or WhatsApp.",
      addressLabel: "Location",
      plusCodeLabel: "Google Maps Plus Code",
      phoneLabel: "Phone & WhatsApp",
      priceBenchmarkLabel: "Price Range",
      directionsBtn: "Get Directions",
      callBtn: "Call +212 6 36 03 68 68",
      whatsappBtn: "Chat on WhatsApp",
      copyPlusCode: "Copy Plus Code Q32J+HQ4",
      copied: "Copied!",
      inquiryFormTitle: "Table Reservation & Dish Price Inquiry",
      inquiryFormSubtitle:
        "Reserve a table, pre-order a slow-cooked tajine ahead of your arrival, or ask for today's price on custom dishes.",
      guestNameLabel: "Your Full Name",
      guestNamePlaceholder: "e.g., Sarah Jenkins",
      guestPhoneLabel: "Phone / WhatsApp Number",
      partySizeLabel: "Number of Guests",
      dateLabel: "Preferred Date",
      timeLabel: "Preferred Time",
      inquiryTypeLabel: "Inquiry Type",
      typeReservation: "Table Reservation",
      typePriceInquiry: "Dish Price Inquiry (Ask for price items)",
      typePreorder: "Tajine / Couscous Pre-Order",
      notesLabel: "Selected Dishes or Special Requests",
      notesPlaceholder:
        "e.g., 1 Camel Tajine, 1 Chicken Pastilla, price inquiry for Berber Omelette & Lamb Chop...",
      submitInquiryBtn: "Submit Request",
      sendViaWhatsappToo: "Also open WhatsApp with my request (+212 6 36 03 68 68)",
      inquirySuccessTitle: "Request Saved Successfully!",
      inquirySuccessMsg:
        "Thank you! RESTAURANT 7 has received your inquiry. You may also connect immediately via WhatsApp.",
    },
    footer: {
      description:
        "Authentic Moroccan restaurant in Ait Toughtach, Morocco (Q32J+HQ4). Serving traditional clay-pot tajines, couscous, Atlas trout, chicken pastilla, charcoal grills, and warm Moroccan hospitality.",
      quickNavTitle: "Quick Navigation",
      menuCategoriesTitle: "Menu Categories",
      contactInfoTitle: "Location & Contact",
      socialLinksTitle: "Social Media Links",
      editSocialBtn: "Edit Social Links",
      saveSocialBtn: "Save Links",
      rightsReserved: "All rights reserved.",
      designedWithCare: "Authentic Moroccan Hospitality • Ait Toughtach, Morocco",
    },
  },

  ar: {
    dir: "rtl",
    langName: "العربية",
    nav: {
      home: "الرئيسية",
      about: "قصتنا",
      menu: "قائمة الطعام",
      gallery: "معرض الصور",
      reviews: "ثقة الزبناء",
      hours: "أوقات العمل",
      location: "الموقع والاتصال",
      reserveBtn: "حجز طاولة / طلب",
      callBtn: "اتصل بنا",
    },
    hero: {
      eyebrow: "فن الطبخ المغربي الأصيل • آيت توغتاش",
      headline: "Discover the Taste of Morocco",
      englishSignatureHeadline: "اكتشف المذاق الأصيل للمغرب في مطعم 7",
      subtitle:
        "Authentic Moroccan Flavors, Traditional Hospitality, Unforgettable Experiences.",
      englishSignatureSubtitle:
        "نكهات مغربية أصيلة، ضيافة تقليدية دافئة، وتجارب لا تُنسى في قلب آيت توغتاش.",
      exploreMenuBtn: "Explore Our Menu",
      contactUsBtn: "Contact Us",
      ratingLabel: "تقييم جوجل",
      reviewsCountLabel: "58 تقييماً موثقاً",
      priceRangeLabel: "50–100 درهم مغربي",
      locationBadge: "Q32J+HQ4، آيت توغتاش، المغرب",
      scrollPrompt: "اكتشف القائمة والأجواء",
    },
    about: {
      eyebrow: "روح مطعم 7",
      title: "عنوان الضيافة المغربية الأصيلة والأطباق التقليدية الفاخرة",
      lead: "يقع مطعم 7 (RESTAURANT 7) في آيت توغتاش بالمغرب (Q32J+HQ4)، ويقدم تجربة طعام مغربية أصيلة تجمع بين كرم الضيافة وجودة المكونات الطازجة.",
      body1:
        "في مطبخنا، نحضر كل طبق بشغف واحترام للتقاليد المغربية العريقة؛ من طاجين الإبل الشهير وطاجين الخضار المطهو ببطء في الفخار، إلى البسطيلة الذهبية المقرمشة بالدجاج واللوز، وسمك السلمون المرقط (الترويت) الطازج من جبال الأطلس.",
      body2:
        "سواء كنتم في رحلة عبر ربوع المغرب أو تبحثون عن مائدة عائلية دافئة، يرحب بكم مطعم 7 بأجواء هادئة وأنيقة مع الشاي المغربي الأصيل والخبز الساخن المحضر يومياً.",
      stat1Value: "4.2 / 5",
      stat1Label: "58 تقييماً على خرائط جوجل",
      stat2Value: "10",
      stat2Label: "أقسام متنوعة في القائمة",
      stat3Value: "50–100 MAD",
      stat3Label: "أسعار مناسبة وجودة عالية",
      quote:
        "« المائدة المغربية ليست مجرد طعام، بل هي دار مفتوحة تجمع الأحبة على عبق الزعفران وكرم الترحيب. »",
      quoteAuthor: "مطعم 7 • آيت توغتاش، المغرب",
      pillars: [
        {
          title: "طواجن الفخار المطهوة ببطء",
          desc: "نحضر طاجين الإبل وطاجين اللحم بالبرقوق وطاجين الخضار على نار هادئة للحفاظ على النكهة المغربية الأصيلة.",
        },
        {
          title: "خيرات جبال الأطلس الطازجة",
          desc: "سمك الترويت الأطلسي، الخضروات الموسمية، زيت الزيتون البكر والمشويات المحضرة على الفحم.",
        },
        {
          title: "كرم الضيافة المغربية",
          desc: "استقبال عائلي راقٍ وخدمة متميزة تضمن لكل ضيف تجربة مريحة ولا تُنسى.",
        },
      ],
    },
    menuSection: {
      eyebrow: "قائمة الطعام الرقمية الكاملة",
      title: "قائمة أطباقنا وتخصصاتنا",
      subtitle:
        "تصفح جميع أقسام القائمة العشرة مع الأسعار المؤكدة بالدرهم المغربي (MAD). الأطباق التي تحمل عبارة «السعر عند الطلب» تحضر طازجة حسب الطلب.",
      allCategories: "جميع الأقسام",
      searchPlaceholder: "ابحث عن طبق (مثال: طاجين الإبل، بسطيلة، ترويت، سلطة 7)...",
      askForPrice: "السعر عند الطلب / Ask for price",
      inquireViaWhatsapp: "استفسر عن السعر / اطلب الآن",
      addToSelection: "أضف إلى طلبي",
      addedToSelection: "تمت الإضافة",
      signatureBadge: "طبق مميز",
      showingCount: "أطباق معروضة",
      priceNote:
        "جميع الأسعار المعروضة بالدرهم المغربي (MAD). بالنسبة للأطباق المكتوب أمامها «السعر عند الطلب»، يرجى التواصل معنا عبر الهاتف أو واتساب.",
      clearFilters: "إعادة ضبط البحث",
    },
    gallerySection: {
      eyebrow: "جولة بصرية",
      title: "معرض صور الأطباق والمطعم",
      subtitle:
        "شاهد صوراً حقيقية لطاجين الخضار المغربي، طاجين الإبل، البسطيلة المغربية، المشويات، وواجهة مطعم 7 في آيت توغتاش.",
      filterAll: "الكل",
      filterTajines: "الطواجن",
      filterSignature: "أطباقنا المميزة",
      filterArchitecture: "واجهة المطعم",
      filterStarters: "المقبلات والأومليت",
      viewFullscreen: "تكبير الصورة",
      closeLightbox: "إغلاق",
    },
    trustSection: {
      eyebrow: "ثقة الزبناء والسمعة الموثقة",
      title: "وجهة موثوقة لعشاق المطبخ المغربي الأصيل",
      subtitle:
        "نفخر بتقييم 4.2 من 5 بناءً على 58 تقييماً حقيقياً على خرائط جوجل، ونلتزم بالشفافية التامة دون اختلاق أي تعليقات وهمية.",
      verifiedBadge: "بيانات موثقة من خرائط جوجل",
      googleRatingTitle: "تقييم 4.2 / 5 نجوم",
      basedOnReviews: "بناءً على 58 مراجعة حقيقية من زوار المطعم",
      priceRangeTitle: "50–100 درهم",
      priceRangeSubtitle: "أسعار مدروسة وحصص سخية تليق بضيوفنا",
      cuisineTypeTitle: "مطعم مغربي تقليدي",
      cuisineTypeSubtitle: "أطباق مغربية أصيلة بتقديم عصري أنيق",
      transparencyNotice:
        "التزام المصداقية: احتراماً لزبنائنا الكرام، لا نقوم باختلاق أي تقييمات غير حقيقية. يمكنكم الاطلاع على جميع التقييمات الـ 58 مباشرة عبر صفحتنا على خرائط جوجل (Q32J+HQ4).",
      viewOnGoogleMaps: "مشاهدة 58 تقييماً على خرائط جوجل",
      hospitalityHighlightsTitle: "أبرز ما يميز تجربة الطعام في مطعم 7",
      highlights: [
        {
          tag: "طواجن أصيلة",
          title: "طاجين الإبل وطاجين الخضار المغربي",
          description:
            "طواجن مطهوة على المهل في الفخار التقليدي بتوليفة متوازنة من التوابل المغربية وزيت الزيتون.",
          dishHighlight: "طاجين الإبل (120 درهم) • طاجين الخضار (90 درهم)",
        },
        {
          tag: "تخصصات عريقة",
          title: "البسطيلة بالدجاج وسمك الترويت من الأطلس",
          description:
            "قرمشة البسطيلة المغربية الأصيلة باللوز والقرفة، وطراوة سمك الترويت المشوي بالأعشاب.",
          dishHighlight: "بسطيلة الدجاج (120 درهم) • ترويت الأطلس (150 درهم)",
        },
        {
          tag: "ترحيب دافئ",
          title: "استراحة مميزة في آيت توغتاش",
          description:
            "أجواء مريحة للعائلات والمسافرين مع قائمة غنية تضم الكسكس، المشويات، البيتزا، المعكرونة والتاكوس.",
          dishHighlight: "Q32J+HQ4، آيت توغتاش • +212 6 36 03 68 68",
        },
      ],
    },
    hoursSection: {
      eyebrow: "ساعات العمل",
      title: "أوقات الاستقبال والخدمة",
      subtitle:
        "نستقبلكم يومياً على مدار الأسبوع. يمكن لإدارة المطعم تعديل وحفظ أوقات العمل مباشرة من هذه اللوحة.",
      editHoursBtn: "تعديل أوقات العمل",
      saveHoursBtn: "حفظ التغييرات",
      cancelBtn: "إلغاء",
      openStatus: "مفتوح",
      closedStatus: "مغلق",
      savedSuccess: "تم تحديث وحفظ أوقات العمل بنجاح.",
      continuousServiceBadge: "خدمة متواصلة طوال اليوم • تناول في المطعم أو سفري",
    },
    locationSection: {
      eyebrow: "الموقع والتواصل المباشر",
      title: "تفضلوا بزيارتنا في آيت توغتاش",
      subtitle:
        "يمكنكم الوصول إلينا بسهولة عبر رمز خرائط جوجل Q32J+HQ4 في آيت توغتاش، المغرب، أو التواصل معنا مباشرة عبر الهاتف أو واتساب.",
      addressLabel: "العنوان والموقع",
      plusCodeLabel: "رمز خرائط جوجل (Plus Code)",
      phoneLabel: "الهاتف وواتساب",
      priceBenchmarkLabel: "متوسط الأسعار",
      directionsBtn: "الاتجاهات على خرائط جوجل",
      callBtn: "اتصل على +212 6 36 03 68 68",
      whatsappBtn: "تواصل عبر واتساب",
      copyPlusCode: "نسخ الرمز Q32J+HQ4",
      copied: "تم النسخ!",
      inquiryFormTitle: "حجز طاولة أو الاستفسار عن الأسعار",
      inquiryFormSubtitle:
        "احجز طاولتك مسبقاً، أو اطلب تحضير الطاجين قبل وصولك، أو استفسر عن أسعار أطباق اليوم.",
      guestNameLabel: "الاسم الكامل",
      guestNamePlaceholder: "مثال: محمد العلمي",
      guestPhoneLabel: "رقم الهاتف / واتساب",
      partySizeLabel: "عدد الأشخاص",
      dateLabel: "التاريخ المفضل",
      timeLabel: "وقت الوصول",
      inquiryTypeLabel: "نوع الطلب",
      typeReservation: "حجز طاولة",
      typePriceInquiry: "استفسار عن السعر (الأطباق حسب الطلب)",
      typePreorder: "طلب مسبق لطاجين أو كسكس",
      notesLabel: "الأطباق المختارة أو ملاحظات خاصة",
      notesPlaceholder:
        "مثال: 1 طاجين الإبل، 1 بسطيلة بالدجاج، الاستفسار عن سعر الأومليت الأمازيغي...",
      submitInquiryBtn: "تأكيد وإرسال الطلب",
      sendViaWhatsappToo: "إرسال الطلب أيضاً مباشرة عبر واتساب (+212 6 36 03 68 68)",
      inquirySuccessTitle: "تم تسجيل طلبكم بنجاح!",
      inquirySuccessMsg:
        "شكراً لتواصلكم مع مطعم 7. تم حفظ طلبكم ويمكنكم أيضاً متابعة المحادثة فوراً عبر واتساب.",
    },
    footer: {
      description:
        "مطعم مغربي أصيل في آيت توغتاش، المغرب (Q32J+HQ4). نقدم أشهى الطواجن التقليدية، الكسكس المغربي، سمك الترويت من الأطلس، البسطيلة والمشويات مع كرم الضيافة المغربية.",
      quickNavTitle: "روابط سريعة",
      menuCategoriesTitle: "أقسام القائمة",
      contactInfoTitle: "معلومات الاتصال",
      socialLinksTitle: "روابط التواصل الاجتماعي",
      editSocialBtn: "تعديل الروابط الاجتماعية",
      saveSocialBtn: "حفظ الروابط",
      rightsReserved: "جميع الحقوق محفوظة.",
      designedWithCare: "ضيافة مغربية أصيلة • آيت توغتاش، المغرب",
    },
  },
};
