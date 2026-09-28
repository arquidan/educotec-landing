/* =============================================================================
   EDUCOTEC SOLUTIONS — WEBSITE TEXT (ENGLISH / SPANISH)
   =============================================================================

   All the text on the website lives in this file.

   HOW TO EDIT TEXT
   ----------------
   1. Find the sentence you want to change below (use your editor's search).
   2. Change the words between the quotation marks "like this".
   3. Make the same change in the other language block.
   4. Save the file and reload the page.

   Rules to keep the file working:
   - Keep the quotation marks at both ends of each text.
   - Keep the comma at the end of each line.
   - If your text needs a double quote inside it, write it as \"  (e.g. "He said \"hi\"").
     Apostrophes (') are fine as they are.
   - Do not rename the keys on the left (hero, title, item1…). The page uses
     those names to know where each text goes (see data-i18n="…" in index.html).

   Contact details ([PHONE], [EMAIL]) and the form address are NOT here; they
   are in index.html. See README.md.

   -----------------------------------------------------------------------------
   HOW TO ADD FRENCH (or any other language)
   -----------------------------------------------------------------------------
   1. Copy the whole "es: { … }," block below (from `es: {` to its matching `},`).
   2. Paste it after the Spanish block and rename `es` to `fr`.
   3. In its "meta" section set:
        code: "FR", name: "Français", htmlLang: "fr", ogLocale: "fr_FR"
   4. Translate every text in the new block.

   That's it: the "FR" / "Français" button is created automatically in the
   header and footer language switchers for every language in this file.
   The buttons appear in the same order as the blocks here.
   Any text you forget to translate will show in English instead of breaking.
   ========================================================================== */

window.TRANSLATIONS = {

  /* ===========================================================================
     ENGLISH
     ======================================================================== */
  en: {
    // Language info (used by the language buttons and search engines)
    meta: {
      code: "EN",          // short label on the header button
      name: "English",     // full name on the footer button
      htmlLang: "en",      // language code for browsers and screen readers
      ogLocale: "en_US"    // language code for social media previews
    },

    // Browser tab title and Google description (copy file, section 10)
    seo: {
      title: "Educotec Solutions — Educational Consulting & Technologies in Miami",
      description: "Training, consulting, educational technology and school facility support for students, parents and teachers. Services in English, Spanish and French."
    },

    // Small labels for screen readers and accessibility (not shown on screen)
    ui: {
      skipLink: "Skip to main content",
      home: "Educotec Solutions — home",
      mainNav: "Main navigation",
      footerNav: "Footer navigation",
      language: "Language",
      openMenu: "Open menu",
      closeMenu: "Close menu"
    },

    header: {
      tagline: "Educational Consulting & Technologies"
    },

    nav: {
      about: "About",
      services: "Services",
      who: "Who We Serve",
      contact: "Contact"
    },

    hero: {
      title: "Empowering schools through Education, Health and Technology",
      subtitle: "Educotec Solutions helps students, parents and teachers thrive with expert training, consulting and the tools a modern school needs, in English, Spanish and French.",
      ctaServices: "Our Services",
      ctaContact: "Contact Us",
      photoAlt: "Teacher and students working together on laptops in a classroom"
    },

    about: {
      eyebrow: "About",
      title: "Decades of experience across the Americas",
      body: "Our founders have built their careers in education throughout Puerto Rico, Latin America and the Caribbean. They have prepared and supervised K-12 and university teachers, trained school leaders, and led technology and virtual learning initiatives, including the development of a virtual library serving 34 countries. Working in English, Spanish and French, they bring a truly multicultural perspective to every school and family they serve.",
      region1: "Puerto Rico",
      region2: "Latin America",
      region3: "the Caribbean",
      photoAlt: "Adults taking notes during an educational workshop",
      // The three highlight numbers (34 / 3 / K-12). The numbers themselves are in index.html.
      stat1Label: "countries",
      stat1Text: "served by a virtual library we developed",
      stat2Label: "languages",
      stat2Text: "English, Spanish and French",
      stat3Label: "and university",
      stat3Text: "teacher preparation and supervision"
    },

    pillars: {
      eyebrow: "Pillars",
      educationTitle: "Education",
      educationText: "Proven strategies that strengthen teaching and learning.",
      healthTitle: "Health",
      healthText: "Safe, healthy environments where students can focus and grow.",
      technologyTitle: "Technology",
      technologyText: "The right tools and training to make technology work in the classroom."
    },

    who: {
      title: "Who We Serve",
      studentsTitle: "Students",
      studentsText: "Programs that build skills, confidence and readiness for a digital world.",
      studentsPhotoAlt: "Students studying together with laptops and books in a library",
      parentsTitle: "Parents",
      parentsText: "Tools and workshops that help families take an active role in their children's education.",
      parentsPhotoAlt: "Father helping his son with homework at home",
      teachersTitle: "Teachers & School Leaders",
      teachersText: "Professional development that brings new strategies and technologies into every classroom.",
      teachersPhotoAlt: "Educators attending a professional development session"
    },

    services: {
      title: "Services",
      training: {
        title: "Training",
        item1: "Professional development for teachers and K-12 administrators",
        item2: "Programs that connect parents, teachers and students",
        item3: "Workshops in English, Spanish and French",
        item4: "Virtual and in-person formats"
      },
      consulting: {
        title: "Consulting & Assessment",
        item1: "Needs assessments and program evaluation",
        item2: "Teacher preparation and supervision models",
        item3: "Curriculum and virtual learning guidance",
        item4: "Health and wellness strategies for schools"
      },
      ai: {
        badge: "AI",
        title: "Education in the Age of AI",
        item1: "Understanding how artificial intelligence is changing formal education",
        item2: "Guidance on responsible AI use for teachers and students",
        item3: "Workshops for parents on AI at home and at school",
        item4: "Policies and strategies for schools"
      },
      edtech: {
        title: "Educational Technology",
        item1: "Laptops, tablets and projectors",
        item2: "Interactive displays and classroom devices",
        item3: "Virtual library and digital platform solutions",
        item4: "Setup guidance and teacher training"
      },
      facilities: {
        title: "School Facilities",
        item1: "Maintenance and repairs",
        item2: "Facility assessments",
        item3: "Campus security solutions",
        item4: "Safe, healthy learning spaces"
      }
    },

    // Each item has a bold "lead" followed by the rest of the sentence ("text").
    why: {
      title: "Why Choose Us",
      item1Lead: "International experience",
      item1Text: " across Puerto Rico, Latin America and the Caribbean",
      item2Lead: "Trilingual service",
      item2Text: " in English, Spanish and French",
      item3Lead: "End-to-end support,",
      item3Text: " from training to technology to facilities",
      item4Lead: "Based in Miami,",
      item4Text: " serving local and international schools"
    },

    contact: {
      eyebrow: "Contact",
      title: "Let's work together.",
      intro: "Tell us about your school or project and we'll get back to you soon.",
      phoneLabel: "Phone",
      emailLabel: "Email",
      locationLabel: "Location",
      location: "Miami, Florida"
    },

    form: {
      name: "Name",
      email: "Email",
      phone: "Phone",
      role: "I am a…",
      roleNone: "—",
      roleStudent: "Student",
      roleParent: "Parent",
      roleTeacher: "Teacher",
      roleAdmin: "School Administrator",
      roleOther: "Other",
      message: "Message",
      submit: "Send Message",
      success: "Thank you! We'll be in touch soon.",
      errorRequired: "Please fill in all required fields.",
      errorEmail: "Please enter a valid email address.",
      errorNetwork: "Something went wrong. Please try again."
    },

    footer: {
      tagline: "Educational Consulting & Technologies",
      copyright: "Educotec Solutions — Educational Consulting & Technologies. © 2026 Educotec Solutions. All rights reserved."
    }
  },

  /* ===========================================================================
     ESPAÑOL (SPANISH)
     ======================================================================== */
  es: {
    meta: {
      code: "ES",
      name: "Español",
      htmlLang: "es",
      ogLocale: "es_US"
    },

    seo: {
      title: "Educotec Solutions — Consultoría y Tecnologías Educativas en Miami",
      description: "Capacitación, consultoría, tecnología educativa y apoyo en instalaciones escolares para estudiantes, padres y maestros. Servicios en español, inglés y francés."
    },

    ui: {
      skipLink: "Saltar al contenido principal",
      home: "Educotec Solutions — inicio",
      mainNav: "Navegación principal",
      footerNav: "Navegación del pie de página",
      language: "Idioma",
      openMenu: "Abrir menú",
      closeMenu: "Cerrar menú"
    },

    header: {
      tagline: "Consultoría y Tecnologías Educativas"
    },

    nav: {
      about: "Nosotros",
      services: "Servicios",
      who: "A Quién Servimos",
      contact: "Contacto"
    },

    hero: {
      title: "Impulsamos las escuelas a través de la Educación, la Salud y la Tecnología",
      subtitle: "Educotec Solutions ayuda a estudiantes, padres y maestros a crecer con capacitación experta, consultoría y las herramientas que necesita una escuela moderna, en español, inglés y francés.",
      ctaServices: "Nuestros Servicios",
      ctaContact: "Contáctenos",
      photoAlt: "Maestra y estudiantes trabajando juntos con laptops en un salón de clases"
    },

    about: {
      eyebrow: "Nosotros",
      title: "Décadas de experiencia en las Américas",
      body: "Nuestros fundadores han desarrollado su carrera en la educación en Puerto Rico, Latinoamérica y el Caribe. Han preparado y supervisado maestros de nivel K-12 y universitario, capacitado a directivos escolares y liderado iniciativas de tecnología y educación virtual, incluido el desarrollo de una biblioteca virtual para 34 países. Trabajando en español, inglés y francés, aportan una perspectiva verdaderamente multicultural a cada escuela y familia que atienden.",
      region1: "Puerto Rico",
      region2: "Latinoamérica",
      region3: "el Caribe",
      photoAlt: "Adultos tomando notas durante un taller educativo",
      stat1Label: "países",
      stat1Text: "atendidos por una biblioteca virtual desarrollada por nosotros",
      stat2Label: "idiomas",
      stat2Text: "español, inglés y francés",
      stat3Label: "y universitario",
      stat3Text: "preparación y supervisión de maestros"
    },

    pillars: {
      eyebrow: "Pilares",
      educationTitle: "Educación",
      educationText: "Estrategias probadas que fortalecen la enseñanza y el aprendizaje.",
      healthTitle: "Salud",
      healthText: "Entornos seguros y saludables donde los estudiantes pueden concentrarse y crecer.",
      technologyTitle: "Tecnología",
      technologyText: "Las herramientas y la capacitación adecuadas para que la tecnología funcione en el aula."
    },

    who: {
      title: "A Quién Servimos",
      studentsTitle: "Estudiantes",
      studentsText: "Programas que desarrollan habilidades, confianza y preparación para un mundo digital.",
      studentsPhotoAlt: "Estudiantes estudiando juntos con laptops y libros en una biblioteca",
      parentsTitle: "Padres",
      parentsText: "Herramientas y talleres que ayudan a las familias a participar activamente en la educación de sus hijos.",
      parentsPhotoAlt: "Padre ayudando a su hijo con la tarea en casa",
      teachersTitle: "Maestros y Directivos",
      teachersText: "Desarrollo profesional que lleva nuevas estrategias y tecnologías a cada salón de clases.",
      teachersPhotoAlt: "Educadores asistiendo a una sesión de desarrollo profesional"
    },

    services: {
      title: "Servicios",
      training: {
        title: "Capacitación",
        item1: "Desarrollo profesional para maestros y directivos K-12",
        item2: "Programas que integran a padres, maestros y estudiantes",
        item3: "Talleres en español, inglés y francés",
        item4: "Modalidades virtual y presencial"
      },
      consulting: {
        title: "Consultoría y Evaluación",
        item1: "Evaluación de necesidades y de programas",
        item2: "Modelos de preparación y supervisión de maestros",
        item3: "Asesoría en currículo y educación virtual",
        item4: "Estrategias de salud y bienestar escolar"
      },
      ai: {
        badge: "IA",
        title: "La Educación en la Era de la IA",
        item1: "Cómo la inteligencia artificial está transformando la educación formal",
        item2: "Orientación sobre el uso responsable de la IA para maestros y estudiantes",
        item3: "Talleres para padres sobre la IA en el hogar y la escuela",
        item4: "Políticas y estrategias para escuelas"
      },
      edtech: {
        title: "Tecnología Educativa",
        item1: "Laptops, tabletas y proyectores",
        item2: "Pantallas interactivas y equipos para el aula",
        item3: "Soluciones de bibliotecas virtuales y plataformas digitales",
        item4: "Orientación en instalación y capacitación de maestros"
      },
      facilities: {
        title: "Instalaciones Escolares",
        item1: "Mantenimiento y reparaciones",
        item2: "Evaluación de instalaciones",
        item3: "Soluciones de seguridad escolar",
        item4: "Espacios de aprendizaje seguros y saludables"
      }
    },

    why: {
      title: "Por Qué Elegirnos",
      item1Lead: "Experiencia internacional",
      item1Text: " en Puerto Rico, Latinoamérica y el Caribe",
      item2Lead: "Servicio trilingüe",
      item2Text: " en español, inglés y francés",
      item3Lead: "Apoyo integral,",
      item3Text: " desde la capacitación hasta la tecnología y las instalaciones",
      item4Lead: "Con sede en Miami,",
      item4Text: " al servicio de escuelas locales e internacionales"
    },

    contact: {
      eyebrow: "Contacto",
      title: "Trabajemos juntos.",
      intro: "Cuéntenos sobre su escuela o proyecto y le responderemos pronto.",
      phoneLabel: "Teléfono",
      emailLabel: "Correo",
      locationLabel: "Ubicación",
      location: "Miami, Florida"
    },

    form: {
      name: "Nombre",
      email: "Correo electrónico",
      phone: "Teléfono",
      role: "Soy…",
      roleNone: "—",
      roleStudent: "Estudiante",
      roleParent: "Padre o Madre",
      roleTeacher: "Maestro",
      roleAdmin: "Directivo Escolar",
      roleOther: "Otro",
      message: "Mensaje",
      submit: "Enviar Mensaje",
      success: "¡Gracias! Nos comunicaremos con usted pronto.",
      errorRequired: "Por favor complete todos los campos obligatorios.",
      errorEmail: "Por favor ingrese un correo electrónico válido.",
      errorNetwork: "Algo salió mal. Por favor intente de nuevo."
    },

    footer: {
      tagline: "Consultoría y Tecnologías Educativas",
      copyright: "Educotec Solutions — Consultoría y Tecnologías Educativas. © 2026 Educotec Solutions. Todos los derechos reservados."
    }
  }

  /* To add French, paste the "fr: { … }" block here — and remember to add a
     comma after the closing "}" of the Spanish block above. */
};
