"use strict";

const appRoot = document.getElementById('app');
const navLinks = Array.from(document.querySelectorAll('[data-route]'));
const pageTitle = 'Upadhyay Ka Zaika';

const menuItems = [
    { name: 'Paneer Butter Masala', price: '₹ 300', image: 'img/panner butter masala .png.png', description: 'Creamy paneer in a rich tomato butter gravy.' },
    { name: 'Special Thali', price: '₹ 180', image: 'img/thali.jpg', description: 'A balanced plate with comforting Indian staples.' },
    { name: 'Dal Makhani', price: '₹ 250', image: 'img/dal makhani.jpg', description: 'Slow-cooked dal finished with butter and cream.' },
    { name: 'Raj Kachori', price: '₹ 150', image: 'img/raj kachori.png.png', description: 'Crisp kachori layered with chutneys and yogurt.' },
    { name: 'Banarasi Dum Aloo', price: '₹ 350', image: 'img/banarasi dum aloo.png', description: 'Spiced potato curry with a deep, festive flavor.' },
    { name: 'Chole Bhature', price: '₹ 220', image: 'img/chole bhature.png.png', description: 'Classic North Indian chole served with fluffy bhature.' },
    { name: 'Malai Kofta', price: '₹ 280', image: 'img/malai kofta.png.png', description: 'Soft kofta in a silky, mildly spiced gravy.' },
    { name: 'Gulab Jamun', price: '₹ 120', image: 'img/gulab jamun.png.png', description: 'Warm, syrup-soaked dessert to finish the meal.' },
    { name: 'Rasmalai', price: '₹ 140', image: 'img/rasmalai.png.png', description: 'Delicate paneer sweets served in chilled saffron milk.' }
];

const features = [
    { icon: '🍛', title: 'Authentic Recipes', text: 'Traditional dishes prepared with homestyle techniques and premium ingredients.' },
    { icon: '🚚', title: 'Fast Delivery', text: 'Freshly cooked food delivered quickly and carefully to your doorstep.' },
    { icon: '🥗', title: 'Fresh Ingredients', text: 'Daily sourced vegetables, spices, and quality ingredients for every order.' },
    { icon: '⭐', title: 'Customer First', text: 'Hygiene, service, and taste are built around the customer experience.' }
];

const appFeatures = [
    { icon: '📍', title: 'Live Order Tracking', text: 'Track your order in real time from the kitchen to your doorstep.' },
    { icon: '💳', title: 'Secure Payments', text: 'Multiple payment methods with a secure checkout flow.' },
    { icon: '❌', title: 'Easy Cancellation', text: 'Flexible cancellation before preparation begins.' },
    { icon: '💰', title: 'Instant Refunds', text: 'Quick refund handling for eligible cancelled orders.' },
    { icon: '🚀', title: 'Quick Delivery', text: 'Lightning-fast delivery with freshness guaranteed.' }
];

const privacyItems = [
    { icon: '👤', title: 'Name', text: 'Used for account creation and order management.' },
    { icon: '📧', title: 'Email Address', text: 'Used for order confirmations and customer support.' },
    { icon: '📱', title: 'Phone Number', text: 'Used for delivery updates and communication.' },
    { icon: '🏠', title: 'Delivery Address', text: 'Required to deliver your orders accurately.' },
    { icon: '🛒', title: 'Order History', text: 'Stored to improve your ordering experience.' }
];

const termsCards = [
    { title: '1. Introduction', text: 'By using Upadhyay Ka Zaika you agree to the terms that govern the website, app, and food delivery service.' },
    { title: '2. Orders & Availability', text: 'Orders depend on menu availability, delivery coverage, and accurate customer information.', list: ['Menu availability may change.', 'Orders can be rejected if information is incorrect.', 'Prices may change without prior notice.'] },
    { title: '3. Payments', text: 'Payments may be processed securely through trusted providers.' },
    { title: '4. Delivery Policy', list: ['Delivery times are estimates only.', 'Weather and traffic may affect delivery.', 'Customers must provide accurate delivery information.'] },
    { title: '5. Cancellation Policy', list: ['Orders may be cancelled before preparation begins.', 'Late cancellation requests may not be accepted.'] },
    { title: '6. Refund Policy', list: ['Refunds will be processed for eligible cancelled orders.', 'Refund timing depends on the payment provider.'] },
    { title: '7. User Responsibilities', list: ['Maintain accurate account information.', 'Do not misuse the platform.', 'Do not engage in fraudulent activities.'] },
    { title: '8. Intellectual Property', text: 'All logos, content, graphics, recipes, images, and branding are protected by intellectual property laws.' },
    { title: '9. Contact Us', text: 'For questions regarding these terms, contact us through the Contact page.' }
];

const paymentProviders = ['Razorpay', 'PhonePe', 'Paytm', 'Stripe'];

const routeTitles = {
    home: 'Home',
    menu: 'Menu',
    about: 'About Us',
    contact: 'Contact',
    privacy: 'Privacy Policy',
    terms: 'Terms & Conditions',
    signup: 'Sign Up'
};

let pendingMenuSearch = '';

function escapeHtml(value) {
    return String(value)
        .replaceAll('&', '&amp;')
        .replaceAll('<', '&lt;')
        .replaceAll('>', '&gt;')
        .replaceAll('"', '&quot;')
        .replaceAll("'", '&#39;');
}

function foodCard(item) {
    return `
        <article class="food-card" data-name="${escapeHtml(item.name.toLowerCase())}">
            <div class="food-image">
                <img src="${item.image}" alt="${escapeHtml(item.name)}">
            </div>
            <div class="food-info">
                <h3>${escapeHtml(item.name)}</h3>
                <div class="rating">⭐⭐⭐⭐⭐</div>
                <div class="price">${escapeHtml(item.price)}</div>
                <p class="menu-description">${escapeHtml(item.description)}</p>
                <button class="cart-btn" type="button" data-add-item="${escapeHtml(item.name)}">Add To Cart</button>
            </div>
        </article>
    `;
}

function featureCard(item) {
    return `
        <div class="feature-card">
            <span>${item.icon}</span>
            <h3>${escapeHtml(item.title)}</h3>
            <p>${escapeHtml(item.text)}</p>
        </div>
    `;
}

function appFeatureCard(item) {
    return `
        <div class="premium-feature-card">
            <div class="feature-icon">${item.icon}</div>
            <h3>${escapeHtml(item.title)}</h3>
            <p>${escapeHtml(item.text)}</p>
        </div>
    `;
}

function galleryItem(item) {
    return `
        <div class="gallery-item">
            <img src="${item.image}" alt="${escapeHtml(item.name)}">
            <div class="gallery-overlay"><h3>${escapeHtml(item.name)}</h3></div>
        </div>
    `;
}

function privacyItemCard(item) {
    return `
        <div class="privacy-item">
            <span>${item.icon}</span>
            <h3>${escapeHtml(item.title)}</h3>
            <p>${escapeHtml(item.text)}</p>
        </div>
    `;
}

function termsCard(item) {
    const textMarkup = item.text ? `<p>${escapeHtml(item.text)}</p>` : '';
    const listMarkup = item.list ? `<ul>${item.list.map((entry) => `<li>${escapeHtml(entry)}</li>`).join('')}</ul>` : '';
    return `
        <div class="terms-card">
            <h2>${escapeHtml(item.title)}</h2>
            ${textMarkup}
            ${listMarkup}
        </div>
    `;
}

function paymentService(name) {
    return `<div class="service-box">${escapeHtml(name)}</div>`;
}

function pageFooter() {
    return `
        <footer class="premium-footer">
            <div class="footer-container">
                <div class="footer-brand">
                    <h2>Upadhyay Ka Zaika</h2>
                    <p>Bringing authentic flavours and premium dining experiences right to your doorstep.</p>
                </div>
                <div class="footer-links">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="#contact" data-route="contact">Contact Us</a></li>
                        <li><a href="#privacy" data-route="privacy">Privacy Policy</a></li>
                        <li><a href="#terms" data-route="terms">Terms & Conditions</a></li>
                    </ul>
                </div>
                <div class="footer-social">
                    <h3>Connect With Us</h3>
                    <ul>
                        <li><a href="https://www.youtube.com/@upadhyaykazaika" target="_blank" rel="noreferrer">YouTube</a></li>
                        <li><a href="https://wa.me/919953836778" target="_blank" rel="noreferrer">WhatsApp</a></li>
                        <li><a href="https://share.google/ncq3ehxV7mCrfVJ4s" target="_blank" rel="noreferrer">Location</a></li>
                        <li><a href="https://www.facebook.com/upadhyaykazaika/" target="_blank" rel="noreferrer">Facebook</a></li>
                    </ul>
                </div>
            </div>
            <div class="footer-bottom">© 2026 Upadhyay Ka Zaika | All Rights Reserved</div>
        </footer>
    `;
}

function heroSection() {
    return `
        <section class="hero">
            <video autoplay muted loop playsinline>
                <source src="https://b.zmtcdn.com/data/file_assets/2627bbed9d6c068e50d2aadcca11ddbb1743095810.mp4" type="video/mp4">
            </video>
            <div class="hero-content">
                <h1 class="animated-logo">Upadhyay Ka Zaika</h1>
                <p class="tagline">Delicious food delivered fresh to your doorstep</p>
                <div class="search-box">
                    <input id="hero-search" type="text" placeholder="Search for dishes, cuisines...">
                    <button id="hero-search-button" type="button">Search Menu</button>
                </div>
            </div>
        </section>
    `;
}

function homePage() {
    return `
        ${heroSection()}
        <section class="about-us">
            <div class="section-heading">
                <h2>Why Choose Us?</h2>
                <p>We bring authentic flavors, fresh ingredients, and quick delivery together to create an unforgettable food experience.</p>
            </div>
            <div class="features">${features.map(featureCard).join('')}</div>
        </section>
        <section class="chef-specials">
            <div class="section-heading">
                <h2>Chef's Recommendations</h2>
                <p>Handpicked signature dishes prepared with authentic recipes, premium ingredients, and unforgettable flavours.</p>
            </div>
            <div class="specials-container">${menuItems.slice(0, 5).map(foodCard).join('')}</div>
        </section>
        <section class="app-features">
            <div class="section-heading">
                <h2>Premium Ordering Experience</h2>
                <p>Experience fast, secure and hassle-free food ordering with features designed for your convenience.</p>
            </div>
            <div class="features-grid">${appFeatures.map(appFeatureCard).join('')}</div>
        </section>
        <section class="food-gallery">
            <div class="section-heading">
                <h2>Food Gallery</h2>
                <p>Discover our premium collection of handcrafted dishes, prepared with authentic ingredients and luxurious presentation.</p>
            </div>
            <div class="gallery-container">${menuItems.map(galleryItem).join('')}</div>
        </section>
        ${pageFooter()}
    `;
}

function menuPage() {
    return `
        <section class="chef-specials app-page">
            <div class="section-heading">
                <h2>Menu</h2>
                <p>Browse the full menu, search dishes instantly, and place your next favorite order.</p>
            </div>
            <div class="menu-toolbar">
                <input id="menu-search" type="search" placeholder="Search dishes..." value="${escapeHtml(pendingMenuSearch)}">
                <button id="menu-clear" type="button">Clear</button>
            </div>
            <div class="specials-container" id="menu-grid">${menuItems.map(foodCard).join('')}</div>
        </section>
        ${pageFooter()}
    `;
}

function aboutPage() {
    return `
        <section class="about-page app-page">
            <div class="about-container">
                <div class="about-image">
                    <img src="img/reena upadhyay.png.png" alt="Reena Upadhyay">
                    <div class="founder-details">
                        <h3>Mrs. Reena Upadhyay</h3>
                        <span>Founder • Upadhyay Ka Zaika</span>
                    </div>
                </div>
                <div class="about-content">
                    <span class="about-tag">OUR STORY</span>
                    <h1>Bringing Homemade Flavours To Every Doorstep</h1>
                    <p>Upadhyay Ka Zaika was founded by <strong>Mrs. Reena Upadhyay</strong>, a passionate home chef whose love for cooking began in her family kitchen decades ago.</p>
                    <p>Inspired by traditional Indian recipes passed down through generations, she dreamed of sharing authentic homemade flavours with people who crave fresh, hygienic, and delicious food.</p>
                    <p>What started as preparing meals for family and friends has now grown into a modern food-ordering platform that combines traditional taste with convenient delivery.</p>
                    <p>Every dish at Upadhyay Ka Zaika is prepared with premium ingredients, authentic spices, and the same care that goes into a home-cooked meal.</p>
                    <div class="about-stats">
                        <div class="stat-box"><h2>5000+</h2><span>Happy Customers</span></div>
                        <div class="stat-box"><h2>100+</h2><span>Food Items</span></div>
                        <div class="stat-box"><h2>4.9★</h2><span>Customer Rating</span></div>
                    </div>
                </div>
            </div>
        </section>
        ${pageFooter()}
    `;
}

function contactPage() {
    return `
        <section class="contact-section app-page">
            <div class="contact-header">
                <h1>Get In Touch</h1>
                <p>We'd love to hear from you. Whether you have a question, feedback, or a special food request, our team is here to help.</p>
            </div>
            <div class="contact-container">
                <div class="contact-info">
                    <h2>Contact Information</h2>
                    <div class="info-box"><span>👩‍🍳</span><div><h3>Founder</h3><p>Mrs. Reena Upadhyay</p></div></div>
                    <div class="info-box"><span>📞</span><div><h3>Phone</h3><p>+91 9953836778</p></div></div>
                    <div class="info-box"><span>✉️</span><div><h3>Email</h3><p>upadhyaykazaika@gmail.com</p></div></div>
                    <div class="info-box"><span>📍</span><div><h3>Location</h3><p>Delhi, New Delhi, India</p></div></div>
                    <a href="https://wa.me/919953836778" class="whatsapp-btn" target="_blank" rel="noreferrer">Chat on WhatsApp</a>
                </div>
                <div class="contact-form">
                    <h2>Send a Message</h2>
                    <form data-form="contact">
                        <input type="text" name="name" placeholder="Your Name" required>
                        <input type="email" name="email" placeholder="Your Email" required>
                        <input type="tel" name="phone" placeholder="Phone Number">
                        <textarea name="message" placeholder="Write Your Message" required></textarea>
                        <button type="submit">Send Message</button>
                    </form>
                </div>
            </div>
        </section>
        ${pageFooter()}
    `;
}

function privacyPage() {
    return `
        <section class="privacy-page app-page">
            <div class="privacy-card">
                <h2>Information We Collect</h2>
                <div class="privacy-grid">${privacyItems.map(privacyItemCard).join('')}</div>
            </div>
            <div class="privacy-card">
                <h2>Payment Processing</h2>
                <p>To ensure secure and reliable transactions, payments may be processed through trusted third-party payment providers such as:</p>
                <div class="payment-list">${paymentProviders.map(paymentService).join('')}</div>
            </div>
            <div class="privacy-card">
                <h2>Cookies & Analytics</h2>
                <p>We may use cookies, login sessions, and analytics tools to improve website performance, user experience, and security.</p>
            </div>
            <div class="privacy-card">
                <h2>Your Rights</h2>
                <div class="rights-container">
                    <div class="right-box">✏️ Update Information</div>
                    <div class="right-box">🗑️ Request Data Deletion</div>
                    <div class="right-box">🎧 Contact Support</div>
                </div>
            </div>
        </section>
        ${pageFooter()}
    `;
}

function termsPage() {
    return `
        <section class="terms-section app-page">
            <div class="terms-container">
                <h1>Terms & Conditions</h1>
                <p class="updated-date">Last Updated: June 2026</p>
                ${termsCards.map(termsCard).join('')}
            </div>
        </section>
        ${pageFooter()}
    `;
}

function signupPage() {
    return `
        <section class="signup-page app-page">
            <div class="signup-container">
                <form data-form="signup">
                    <h1>Create Your Account</h1>
                    <p>Join the app to save details, place faster orders, and get updates.</p>
                    <label for="username">Username</label>
                    <input type="text" id="username" name="username" required>
                    <label for="email">Email</label>
                    <input type="email" id="email" name="email" required>
                    <label for="password">Password</label>
                    <input type="password" id="password" name="password" required>
                    <label for="number">Phone Number</label>
                    <input type="tel" id="number" name="number" required>
                    <label for="address">Address</label>
                    <textarea id="address" name="address" required></textarea>
                    <button type="submit">Create Account</button>
                </form>
            </div>
        </section>
        ${pageFooter()}
    `;
}

function normalizeRoute(hash) {
    const rawRoute = (hash || '').replace('#', '').trim().toLowerCase();
    const route = rawRoute || 'home';

    if (route === 'about us' || route === 'about-us' || route === 'aboutus') {
        return 'about';
    }

    if (route === 'contact us') {
        return 'contact';
    }

    if (route === 'privacy policy') {
        return 'privacy';
    }

    if (route === 'terms & conditions' || route === 'terms and conditions') {
        return 'terms';
    }

    return routeTitles[route] ? route : 'home';
}

function setActiveNav(route) {
    navLinks.forEach((link) => {
        const active = link.dataset.route === route;
        link.classList.toggle('active', active);
        if (active) {
            link.setAttribute('aria-current', 'page');
        } else {
            link.removeAttribute('aria-current');
        }
    });
}

function showToast(message) {
    const previousToast = document.querySelector('.toast');
    if (previousToast) {
        previousToast.remove();
    }

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    document.body.appendChild(toast);

    window.requestAnimationFrame(() => {
        toast.classList.add('visible');
    });

    window.setTimeout(() => {
        toast.classList.remove('visible');
        window.setTimeout(() => toast.remove(), 220);
    }, 2200);
}

function filterMenu(query) {
    const normalizedQuery = query.trim().toLowerCase();
    const cards = Array.from(appRoot.querySelectorAll('#menu-grid .food-card'));
    const visibleCards = cards.filter((card) => card.dataset.name.includes(normalizedQuery));

    cards.forEach((card) => {
        const shouldShow = !normalizedQuery || card.dataset.name.includes(normalizedQuery);
        card.classList.toggle('is-hidden', !shouldShow);
    });

    const existingEmptyState = appRoot.querySelector('.empty-state');
    if (visibleCards.length === 0 && !existingEmptyState) {
        const emptyState = document.createElement('div');
        emptyState.className = 'empty-state';
        emptyState.textContent = 'No dishes matched your search.';
        appRoot.querySelector('.chef-specials').appendChild(emptyState);
    }

    if (visibleCards.length > 0 && existingEmptyState) {
        existingEmptyState.remove();
    }
}

function bindRoute(route) {
    const heroSearch = appRoot.querySelector('#hero-search');
    const heroSearchButton = appRoot.querySelector('#hero-search-button');
    const menuSearch = appRoot.querySelector('#menu-search');
    const menuClear = appRoot.querySelector('#menu-clear');

    if (heroSearchButton && heroSearch) {
        heroSearchButton.addEventListener('click', () => {
            pendingMenuSearch = heroSearch.value.trim();
            location.hash = '#menu';
        });

        heroSearch.addEventListener('keydown', (event) => {
            if (event.key === 'Enter') {
                event.preventDefault();
                heroSearchButton.click();
            }
        });
    }

    if (menuSearch) {
        menuSearch.value = pendingMenuSearch;
        filterMenu(menuSearch.value);
        pendingMenuSearch = '';

        menuSearch.addEventListener('input', (event) => {
            filterMenu(event.target.value);
        });
    }

    if (menuClear) {
        menuClear.addEventListener('click', () => {
            const searchField = appRoot.querySelector('#menu-search');
            if (!searchField) {
                return;
            }

            searchField.value = '';
            filterMenu('');
            searchField.focus();
        });
    }

    appRoot.querySelectorAll('[data-add-item]').forEach((button) => {
        button.addEventListener('click', () => {
            showToast(`${button.dataset.addItem} added to cart`);
        });
    });

    appRoot.querySelectorAll('[data-form]').forEach((form) => {
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            form.reset();
            showToast(route === 'signup' ? 'Account request saved' : 'Message sent successfully');
        });
    });
}

function renderRoute() {
    const route = normalizeRoute(location.hash);
    setActiveNav(route);
    document.title = `${routeTitles[route]} | ${pageTitle}`;

    const views = {
        home: homePage,
        menu: menuPage,
        about: aboutPage,
        contact: contactPage,
        privacy: privacyPage,
        terms: termsPage,
        signup: signupPage
    };

    appRoot.innerHTML = views[route]();
    bindRoute(route);
    window.scrollTo(0, 0);
}

window.addEventListener('hashchange', renderRoute);

if (!location.hash) {
    location.hash = '#home';
} else {
    renderRoute();
}