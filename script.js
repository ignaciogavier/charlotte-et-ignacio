/**
 * Wedding Website JavaScript
 * Interactive features
 */

/**
 * Translations for the website
 */
const translations = {
    en: {
        // Hero section
        saveTheDate: "Save the Date",
        scrollDown: "↓",
        
        // Ceremony & Reception section
        ceremonyReceptionTitle: "Ceremony & Reception",
        ceremonyTitle: "💒 Ceremony",
        ceremonyTime: "Time:",
        ceremonyTimeValue: "4:00 PM",
        ceremonyLocation: "Location:",
        ceremonyLocationValue: "Villa Golf Eventos",
        ceremonyAddress: "Address:",
        ceremonyAddressValue: "Av. Padre Luchesse km 4 1/2, Villa Allende, Cordoba, Argentina",
        ceremonyDescription: "Join us for an intimate outdoor ceremony in the beautiful gardens.",
        receptionTitle: "🥂 Reception",
        receptionTime: "Time:",
        receptionTimeValue: "6:00 PM - 11:00 PM",
        receptionLocation: "Location:",
        receptionLocationValue: "Villa Golf Eventos",
        receptionAddress: "Address:",
        receptionAddressValue: "Av. Padre Luchesse km 4 1/2, Villa Allende, Cordoba, Argentina",
        receptionDescription: "Dinner, drinks, and dancing to follow the ceremony.",
        
        // Dress Code section
        dressCodeTitle: "Dress Code",
        dressCodeType: "Formal / Black Tie Optional",
        dressCodeDescription: "We kindly request formal attire for our special day. Ladies, think elegant evening gowns or cocktail dresses. Gentlemen, a dark suit or tuxedo would be perfect.",
        dressCodeNote: "Please note: The ceremony will be held outdoors, so consider comfortable yet elegant footwear.",
        
        // Accommodations section
        accommodationsTitle: "Accommodations",
        accommodationsIntro: "We have reserved room blocks at the following hotels for your convenience:",
        hotelAddress: "Address:",
        hotelRate: "Rate:",
        hotelRateValue: "TBD",
        hotelBookBy: "Book by:",
        hotelBookByValue: "May 15, 2026",
        hotelCode: "Code:",
        hotelCodeValue: "CHARLOTTE-IGNACIO",
        hotelLink: "Visit Website →",
        hotel1Name: "Hotel Villa Allende",
        hotel1Address: "Villa Allende, Cordoba, Argentina",
        hotel2Name: "Hotel Cordoba",
        hotel2Address: "Cordoba, Argentina",
        hotel3Name: "Local Accommodations",
        hotel3Address: "Villa Allende Area",
        
        // Registry section
        registryTitle: "Registry",
        registryDescription: "Your presence at our wedding is the greatest gift of all. However, if you wish to honor us with a gift, we have registered at the following locations:",
        registryButton: "View Registry →",
        registryNote: "We will also have a card box available at the reception.",
        
        // RSVP section
        rsvpTitle: "RSVP",
        rsvpIntro: "Please let us know if you can join us by April 30, 2026",
        rsvpLoading: "Loading Google Form...",
        
        // Footer
        footerMessage: "We can't wait to celebrate with you!",
        footerDate: "June 15, 2026 • Villa Allende, Cordoba, Argentina"
    },
    es: {
        // Hero section
        saveTheDate: "Reserva la Fecha",
        scrollDown: "↓",
        
        // Ceremony & Reception section
        ceremonyReceptionTitle: "Ceremonia y Recepción",
        ceremonyTitle: "💒 Ceremonia",
        ceremonyTime: "Hora:",
        ceremonyTimeValue: "16:00 hs",
        ceremonyLocation: "Lugar:",
        ceremonyLocationValue: "Villa Golf Eventos",
        ceremonyAddress: "Dirección:",
        ceremonyAddressValue: "Av. Padre Luchesse km 4 1/2, Villa Allende, Córdoba, Argentina",
        ceremonyDescription: "Únete a nosotros para una ceremonia íntima al aire libre en los hermosos jardines.",
        receptionTitle: "🥂 Recepción",
        receptionTime: "Hora:",
        receptionTimeValue: "18:00 hs - 23:00 hs",
        receptionLocation: "Lugar:",
        receptionLocationValue: "Villa Golf Eventos",
        receptionAddress: "Dirección:",
        receptionAddressValue: "Av. Padre Luchesse km 4 1/2, Villa Allende, Córdoba, Argentina",
        receptionDescription: "Cena, bebidas y baile después de la ceremonia.",
        
        // Dress Code section
        dressCodeTitle: "Código de Vestimenta",
        dressCodeType: "Formal / Etiqueta Opcional",
        dressCodeDescription: "Solicitamos vestimenta formal para nuestro día especial. Damas, piensen en vestidos de noche elegantes o vestidos de cóctel. Caballeros, un traje oscuro o esmoquin sería perfecto.",
        dressCodeNote: "Nota: La ceremonia se realizará al aire libre, así que consideren calzado cómodo pero elegante.",
        
        // Accommodations section
        accommodationsTitle: "Alojamiento",
        accommodationsIntro: "Hemos reservado bloques de habitaciones en los siguientes hoteles para su comodidad:",
        hotelAddress: "Dirección:",
        hotelRate: "Tarifa:",
        hotelRateValue: "A confirmar",
        hotelBookBy: "Reservar antes de:",
        hotelBookByValue: "15 de Mayo, 2026",
        hotelCode: "Código:",
        hotelCodeValue: "CHARLOTTE-IGNACIO",
        hotelLink: "Visitar Sitio Web →",
        hotel1Name: "Hotel Villa Allende",
        hotel1Address: "Villa Allende, Córdoba, Argentina",
        hotel2Name: "Hotel Córdoba",
        hotel2Address: "Córdoba, Argentina",
        hotel3Name: "Alojamiento Local",
        hotel3Address: "Área de Villa Allende",
        
        // Registry section
        registryTitle: "Lista de Regalos",
        registryDescription: "Su presencia en nuestra boda es el mejor regalo. Sin embargo, si desean honrarnos con un regalo, nos hemos registrado en los siguientes lugares:",
        registryButton: "Ver Lista de Regalos →",
        registryNote: "También tendremos un buzón de tarjetas disponible en la recepción.",
        
        // RSVP section
        rsvpTitle: "Confirmación de Asistencia",
        rsvpIntro: "Por favor confirma si puedes acompañarnos antes del 30 de Abril, 2026",
        rsvpLoading: "Cargando formulario de Google...",
        
        // Footer
        footerMessage: "¡No podemos esperar para celebrar con ustedes!",
        footerDate: "15 de Junio, 2026 • Villa Allende, Córdoba, Argentina"
    }
};

/**
 * Get current language from localStorage or default to English
 */
function getCurrentLanguage() {
    return localStorage.getItem('language') || 'en';
}

/**
 * Set the language and update the UI
 */
function setLanguage(lang) {
    localStorage.setItem('language', lang);
    updateContent(lang);
    updateLanguageSelector(lang);
}

/**
 * Update all content based on selected language
 */
function updateContent(lang) {
    const t = translations[lang];
    
    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (t[key]) {
            element.textContent = t[key];
        }
    });
}

/**
 * Update language selector active state
 */
function updateLanguageSelector(lang) {
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        }
    });
}

/**
 * Initialize the website
 */
function init() {
    // Add smooth scroll behavior for navigation
    addSmoothScroll();
    
    // Trigger animations for sections as they come into view
    observeSections();
    
    // Initialize language
    const currentLang = getCurrentLanguage();
    updateContent(currentLang);
    updateLanguageSelector(currentLang);
    
    // Add language selector event listeners
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            setLanguage(lang);
        });
    });
}

/**
 * Add smooth scrolling for anchor links
 */
function addSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

/**
 * Observe sections for fade-in animations on scroll
 */
function observeSections() {
    const sections = document.querySelectorAll('.info-section');
    
    // Check if IntersectionObserver is supported
    if ('IntersectionObserver' in window) {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);
        
        sections.forEach(section => {
            section.style.opacity = '0';
            section.style.transform = 'translateY(20px)';
            section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(section);
        });
    }
}

// Initialize on page load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
