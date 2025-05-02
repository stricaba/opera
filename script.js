   // Smooth scroll and update dynamic text content
   document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Fade-in animation on scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
        }
    });
});

// Add background fade-in animation
document.addEventListener('DOMContentLoaded', () => {
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.opacity = 0;
        hero.style.transition = 'opacity 1s ease-in';
        setTimeout(() => {
            hero.style.opacity = 1;
        }, 100);
    }
    
    // Add CSS for menu animation
    const style = document.createElement('style');
    style.textContent = `
        .nav-links {
            display: flex;
            opacity: 1;
            transform: translateY(0);
            justify-content: center;
            align-items: center;
        }
        
        @media (max-width: 768px) {
            .nav-links {
                transform: translateY(-100%);
                transition: transform 0.4s cubic-bezier(0.4, 0.0, 0.2, 1), opacity 0.3s ease;
                opacity: 0;
                position: fixed;
                top: -40px; /* Changed from -20px to -40px */
                left: 0;
                width: 100%;
                height: 100vh;
                background: #1a1a1a;
                backdrop-filter: blur(10px);
                padding: 5rem 1rem 1rem;
                flex-direction: column;
                z-index: 999;
                justify-content: center;
                align-items: center;
                text-align: center;
            }
            .nav-links a {
                margin: 10px 0;
                padding: 10px 0;
                width: 100%;
                display: block;
                text-align: center;
            }
            .nav-links.active {
                transform: translateY(40px); /* Changed from 20px to 40px */
                opacity: 1;
            }
            .menu-btn {
                display: block;
                transition: transform 0.3s ease;
                z-index: 1000;
            }
        }
        
        @media (min-width: 769px) {
            .menu-btn {
                display: none;
            }
        }
    `;
    document.head.appendChild(style);
});

document.querySelectorAll('.service-card, .vehicle-card').forEach((el) => {
    el.style.opacity = 0;
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'all 0.1s ease-out';
    observer.observe(el);
});

function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    const menuBtn = document.querySelector('.menu-btn');
    
    navLinks.classList.toggle('active');
    
    // Add staggered animation to menu items
    if (navLinks.classList.contains('active')) {
        const links = navLinks.querySelectorAll('a');
        links.forEach((link, index) => {
            link.style.opacity = '0';
            link.style.transform = 'translateY(-10px)';
            link.style.transition = `opacity 0.3s ease ${index * 0.1}s, transform 0.3s ease ${index * 0.1}s`;
            
            setTimeout(() => {
                link.style.opacity = '1';
                link.style.transform = 'translateY(0)';
            }, 100);
        });
    }
    
    document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : 'auto';
}

function closeMenu() {
    const navLinks = document.querySelector('.nav-links');
    const menuBtn = document.querySelector('.menu-btn');
    
    navLinks.classList.remove('active');
    document.body.style.overflow = 'auto';
}
// Language translations
const translations = {
    sr: {
        rentACar: "RENT A CAR",
        vehicles: "VOZILA", 
        reservations: "REZERVACIJE",
        rentalConditions: "USLOVI IZNAJMLJIVANJA",
        heroTitle: "RENT A CAR BUDVA",
        companyName: "Opera auto d.o.o",
        viewServices: "Pogledajte naše usluge",
        additionalInfo: "Dodatne informacije",
        basicInsurance: "Osnovno osiguranje",
        bestService: "Najbolja usluga",
        carDelivery: "Dostava vozila na adresu",
        insuranceText: "Sva naša vozila su pokrivena osnovnim osiguranjem za bezbednu vožnju.",
        serviceText: "Pružamo vrhunsku uslugu i profesionalan pristup svakom klijentu.",
        deliveryText: "Dostavljamo vozilo na aerodrom ili bilo koju adresu po vašem izboru.",
        carOffer: "Ponuda automobila",
        reserveBtn: "Rezerviši",
        contactForm: "Pošaljite pitanje / Rezervacija vozila",
        name: "Ime i prezime",
        email: "Email adresa",
        phone: "Broj telefona",
        selectCar: "Izaberite vozilo",
        pickupDate: "Datum preuzimanja",
        returnDate: "Datum vraćanja",
        notes: "Dodatne napomene",
        submit: "Pošaljite",
        ourLocation: "Naša lokacija",
        pricePerDay: "od {price}€/dan",
        companyInfo: "OPERA DOO",
        companyDesc: "Profesionalna usluga iznajmljivanja vozila u Budvi. Vaš pouzdan partner za rent a car usluge.",
        workingHours: "Radno Vreme",
        workingHoursDetails: "Ponedeljak - Petak: 08:00 - 20:00\nSubota: 08:00 - 20:00\nNedelja: Ne radimo",
        contact: "Kontakt",
        contactDetails: "+382 68 909 090\nopera.auto.bd@gmail.com\nBudva, Crna Gora",
        followUs: "Pratite Nas",
        copyright: "© 2025 Opera DOO. Sva prava zadržana.",
        // Dodati prevodi za uslovi.html
        rentalConditionsTitle: "Uslovi Iznajmljivanja",
        basicConditions: "Osnovni uslovi",
        includedInPrice: "Uključeno u cenu",
        paymentMethods: "Način plaćanja",
        additionalServices: "Dodatne usluge",
        basicConditionsList: [
            "Minimalna starost vozača: 21 godina",
            "Vozačka dozvola: minimum 2 godine",
            "Potrebna dokumenta: lična karta ili pasoš, vozačka dozvola",
            "Depozit: 100-300€ (u zavisnosti od vozila)"
        ],
        includedList: [
            "Neograničena kilometraža",
            "Osnovno osiguranje vozila",
            "Tehnička podrška 24/7",
            "Redovno održavanje vozila"
        ],
        paymentList: [
            "Gotovina",
            "Kreditne kartice (Visa, MasterCard)",
            "Plaćanje unapred putem bankovnog transfera"
        ],
        additionalServicesList: [
            "Dostava/preuzimanje vozila na aerodrom: 30€",
            "GPS navigacija: 5€/dan",
            "Dečije sedište: 5€/dan"
        ]
    },
    en: {
        rentACar: "RENT A CAR",
        vehicles: "VEHICLES",
        reservations: "RESERVATIONS", 
        rentalConditions: "RENTAL CONDITIONS",
        heroTitle: "RENT A CAR BUDVA",
        companyName: "Opera auto LLC",
        viewServices: "View our services",
        additionalInfo: "Additional Information",
        basicInsurance: "Basic Insurance",
        bestService: "Best Service",
        carDelivery: "Car Delivery",
        insuranceText: "All our vehicles are covered with basic insurance for safe driving.",
        serviceText: "We provide premium service and professional approach to every client.",
        deliveryText: "We deliver the vehicle to the airport or any address of your choice.",
        carOffer: "Car Offer",
        reserveBtn: "Reserve",
        contactForm: "Send Inquiry / Car Reservation",
        name: "Full Name",
        email: "Email Address",
        phone: "Phone Number",
        selectCar: "Select Vehicle",
        pickupDate: "Pickup Date",
        returnDate: "Return Date",
        notes: "Additional Notes",
        submit: "Submit",
        ourLocation: "Our Location",
        pricePerDay: "from {price}€/day",
        companyInfo: "OPERA LLC",
        companyDesc: "Professional car rental service in Budva. Your reliable partner for rent a car services.",
        workingHours: "Working Hours",
        workingHoursDetails: "Monday - Friday: 08:00 - 20:00\nSaturday: 08:00 - 20:00\nSunday: Closed",
        contact: "Contact",
        contactDetails: "+382 68 909 090\nopera.auto.bd@gmail.com\nBudva, Montenegro",
        followUs: "Follow Us",
        copyright: "© 2025 Opera LLC. All rights reserved.",
        // Added translations for uslovi.html
        rentalConditionsTitle: "Rental Conditions",
        basicConditions: "Basic Conditions",
        includedInPrice: "Included in Price",
        paymentMethods: "Payment Methods",
        additionalServices: "Additional Services",
        basicConditionsList: [
            "Minimum driver age: 21 years",
            "Driver's license: minimum 2 years",
            "Required documents: ID card or passport, driver's license",
            "Deposit: 100-300€ (depending on vehicle)"
        ],
        includedList: [
            "Unlimited mileage",
            "Basic vehicle insurance",
            "24/7 technical support",
            "Regular vehicle maintenance"
        ],
        paymentList: [
            "Cash",
            "Credit cards (Visa, MasterCard)",
            "Advance payment via bank transfer"
        ],
        additionalServicesList: [
            "Airport delivery/pickup: 30€",
            "GPS navigation: 5€/day",
            "Child seat: 5€/day"
        ]
    },
    ru: {
        rentACar: "АРЕНДА АВТО",
        vehicles: "АВТОМОБИЛИ",
        reservations: "БРОНИРОВАНИЕ",
        rentalConditions: "УСЛОВИЯ АРЕНДЫ",
        heroTitle: "АРЕНДА АВТО БУДВА",
        companyName: "Opera auto LLC",
        viewServices: "Посмотреть наши услуги",
        additionalInfo: "Дополнительная информация",
        basicInsurance: "Базовая страховка",
        bestService: "Лучший сервис",
        carDelivery: "Доставка автомобиля",
        insuranceText: "Все наши автомобили покрыты базовой страховкой для безопасного вождения.",
        serviceText: "Мы предоставляем премиум-сервис и профессиональный подход к каждому клиенту.",
        deliveryText: "Мы доставляем автомобиль в аэропорт или по любому адресу на ваш выбор.",
        carOffer: "Предложение автомобилей",
        reserveBtn: "Забронировать",
        contactForm: "Отправить запрос / Бронирование автомобиля",
        name: "Полное имя",
        email: "Электронная почта",
        phone: "Номер телефона",
        selectCar: "Выберите автомобиль",
        pickupDate: "Дата получения",
        returnDate: "Дата возврата",
        notes: "Дополнительные заметки",
        submit: "Отправить",
        ourLocation: "Наше местоположение",
        pricePerDay: "от {price}€/день",
        companyInfo: "OPERA LLC",
        companyDesc: "Профессиональная служба аренды автомобилей в Будве. Ваш надежный партнер по аренде автомобилей.",
        workingHours: "Режим работы",
        workingHoursDetails: "Понедельник - Пятница: 08:00 - 20:00\nСуббота: 08:00 - 20:00\nВоскресенье: Закрыто",
        contact: "Контакты",
        contactDetails: "+382 68 909 090\nopera.auto.bd@gmail.com\nБудва, Черногория",
        followUs: "Подписывайтесь на нас",
        copyright: "© 2025 Opera LLC. Все права защищены.",
        // Added translations for uslovi.html
        rentalConditionsTitle: "Условия аренды",
        basicConditions: "Основные условия",
        includedInPrice: "Включено в стоимость",
        paymentMethods: "Способы оплаты",
        additionalServices: "Дополнительные услуги",
        basicConditionsList: [
            "Минимальный возраст водителя: 21 год",
            "Водительские права: минимум 2 года",
            "Необходимые документы: удостоверение личности или паспорт, водительские права",
            "Депозит: 100-300€ (в зависимости от автомобиля)"
        ],
        includedList: [
            "Неограниченный пробег",
            "Базовая страховка автомобиля",
            "Техническая поддержка 24/7",
            "Регулярное обслуживание автомобиля"
        ],
        paymentList: [
            "Наличные",
            "Кредитные карты (Visa, MasterCard)",
            "Предоплата банковским переводом"
        ],
        additionalServicesList: [
            "Доставка/получение автомобиля в аэропорту: 30€",
            "GPS навигация: 5€/день",
            "Детское кресло: 5€/день"
        ]
    }
};

function changeLanguage(lang) {
    // Store selected language
    localStorage.setItem('selectedLanguage', lang);
    
    const content = translations[lang];
    
    // Update navigation links
    document.querySelectorAll('.nav-links a').forEach(link => {
        const href = link.getAttribute('href');
        if (href === '#home' || href === 'index.html#home') link.textContent = content.rentACar;
        if (href === '#vehicles' || href === 'index.html#vehicles') link.textContent = content.vehicles;
        if (href === '#reserve' || href === 'index.html#reserve') link.textContent = content.reservations;
        if (href.includes('uslovi.html') || href === '#conditions') link.textContent = content.rentalConditions;
    });

    // Update hero section if on main page
    if (document.querySelector('.hero')) {
        document.querySelector('.hero h1').textContent = content.heroTitle;
        document.querySelector('.company-name').textContent = content.companyName;
        document.querySelector('.scroll-down').innerHTML = `${content.viewServices}<br><i class="fas fa-chevron-down"></i>`;
    }

    // Update services section if on main page
    if (document.querySelector('.services .section-title')) {
        document.querySelector('.services .section-title').textContent = content.additionalInfo;
        
        const serviceCards = document.querySelectorAll('.service-card');
        if (serviceCards.length > 0) {
            serviceCards[0].querySelector('h3').textContent = content.basicInsurance;
            serviceCards[0].querySelector('p').textContent = content.insuranceText;
            serviceCards[1].querySelector('h3').textContent = content.bestService;
            serviceCards[1].querySelector('p').textContent = content.serviceText;
            serviceCards[2].querySelector('h3').textContent = content.carDelivery;
            serviceCards[2].querySelector('p').textContent = content.deliveryText;
        }
    }

    // Update vehicles section if on main page
    if (document.querySelector('.vehicles')) {
        document.querySelector('.vehicles .section-title').textContent = content.carOffer;
        document.querySelectorAll('.book-btn').forEach(btn => {
            btn.textContent = content.reserveBtn;
        });
    }

    // Update contact form if on main page
    if (document.querySelector('.contact-form')) {
        document.querySelector('.contact-form .section-title').textContent = content.contactForm;
        document.querySelector('label[for="name"]').textContent = content.name;
        document.querySelector('label[for="email"]').textContent = content.email;
        document.querySelector('label[for="phone"]').textContent = content.phone;
        document.querySelector('label[for="car-model"]').textContent = content.selectCar;
        document.querySelector('label[for="pickup-date"]').textContent = content.pickupDate;
        document.querySelector('label[for="return-date"]').textContent = content.returnDate;
        document.querySelector('label[for="message"]').textContent = content.notes;
        document.querySelector('.submit-btn').textContent = content.submit;
    }

    // Update map section if on main page
    if (document.querySelector('.map-section')) {
        document.querySelector('.map-section .section-title').textContent = content.ourLocation;
    }

    // Update footer content
    document.querySelectorAll('.footer-section').forEach((section, index) => {
        if (index === 0) {
            section.querySelector('h3').textContent = content.companyInfo;
            section.querySelector('p').textContent = content.companyDesc;
        } else if (index === 1) {
            section.querySelector('h3').textContent = content.workingHours;
            section.querySelector('p').textContent = content.workingHoursDetails;
        } else if (index === 2) {
            section.querySelector('h3').textContent = content.contact;
        } else if (index === 3) {
            section.querySelector('h3').textContent = content.followUs;
        }
    });

    // Update copyright text
    document.querySelector('footer p').textContent = content.copyright;

    // Update prices if on main page
    if (document.querySelectorAll('.vehicle-price').length > 0) {
        document.querySelectorAll('.vehicle-price').forEach(price => {
            const priceValue = price.textContent.match(/\d+/)[0];
            price.textContent = content.pricePerDay.replace('{price}', priceValue);
        });
    }

    // Update rental conditions if on conditions page
    if (window.location.href.includes('uslovi.html') || document.querySelector('#conditions')) {
        document.querySelector('#conditions .section-title').textContent = content.rentalConditionsTitle;
        
        const sections = document.querySelectorAll('#conditions h3');
        sections[0].textContent = content.basicConditions;
        sections[1].textContent = content.includedInPrice;
        sections[2].textContent = content.paymentMethods;
        sections[3].textContent = content.additionalServices;

        const lists = document.querySelectorAll('#conditions ul');
        content.basicConditionsList.forEach((item, index) => {
            lists[0].children[index].textContent = item;
        });
        content.includedList.forEach((item, index) => {
            lists[1].children[index].textContent = item;
        });
        content.paymentList.forEach((item, index) => {
            lists[2].children[index].textContent = item;
        });
        content.additionalServicesList.forEach((item, index) => {
            lists[3].children[index].textContent = item;
        });
    }

    toggleLanguageMenu();
}

// Check for saved language preference on page load
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('selectedLanguage');
    if (savedLang) {
        changeLanguage(savedLang);
    }
});
