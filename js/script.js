// =========================
// SCROLL REVEAL ANIMATION
// =========================

const revealElements = document.querySelectorAll(
'.food-card, .feature-card, .section-heading'
);

function revealOnScroll() {

    revealElements.forEach((element) => {

        const windowHeight = window.innerHeight;
        const elementTop =
        element.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {

            element.style.opacity = "1";
            element.style.transform =
            "translateY(0)";
        }
    });
}

revealElements.forEach((element) => {

    element.style.opacity = "0";
    element.style.transform =
    "translateY(80px)";
    element.style.transition =
    "all 0.8s ease";
});

window.addEventListener(
'scroll',
revealOnScroll
);

revealOnScroll();


// =========================
// 3D FOOD CARD EFFECT
// =========================

const cards =
document.querySelectorAll('.food-card');

cards.forEach((card) => {

    card.addEventListener(
    'mousemove',
    (e) => {

        const rect =
        card.getBoundingClientRect();

        const x =
        e.clientX - rect.left;

        const y =
        e.clientY - rect.top;

        const centerX =
        rect.width / 2;

        const centerY =
        rect.height / 2;

        const rotateX =
        (y - centerY) / 18;

        const rotateY =
        (centerX - x) / 18;

        card.style.transform =
        `
        perspective(1000px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        scale(1.05)
        `;
    });

    card.addEventListener(
    'mouseleave',
    () => {

        card.style.transform =
        `
        perspective(1000px)
        rotateX(0deg)
        rotateY(0deg)
        scale(1)
        `;
    });
});


// =========================
// FLOATING CARDS
// =========================

cards.forEach((card, index) => {

    card.animate(
    [
        {
            transform:
            'translateY(0px)'
        },

        {
            transform:
            'translateY(-12px)'
        },

        {
            transform:
            'translateY(0px)'
        }
    ],
    {
        duration:
        3000 + (index * 400),

        iterations:
        Infinity
    });
});


// =========================
// HERO PARALLAX EFFECT
// =========================

const hero =
document.querySelector('.hero');

window.addEventListener(
'scroll',
() => {

    const scroll =
    window.pageYOffset;

    if(hero){

        hero.style.backgroundPositionY =
        scroll * 0.5 + 'px';
    }
});


// =========================
// LOGO 3D FOLLOW MOUSE
// =========================

const logo =
document.querySelector(
'.animated-logo'
);

document.addEventListener(
'mousemove',
(e) => {

    if(!logo) return;

    let x =
    (window.innerWidth / 2 - e.clientX)
    / 80;

    let y =
    (window.innerHeight / 2 - e.clientY)
    / 80;

    logo.style.transform =
    `
    rotateY(${x}deg)
    rotateX(${-y}deg)
    `;
});


// =========================
// BUTTON RIPPLE EFFECT
// =========================

const buttons =
document.querySelectorAll(
'.cart-btn'
);

buttons.forEach((button) => {

    button.addEventListener(
    'click',
    function(e){

        const circle =
        document.createElement('span');

        const diameter =
        Math.max(
        this.clientWidth,
        this.clientHeight
        );

        circle.style.width =
        circle.style.height =
        `${diameter}px`;

        circle.style.position =
        'absolute';

        circle.style.borderRadius =
        '50%';

        circle.style.background =
        'rgba(255,255,255,.5)';

        circle.style.left =
        `${e.offsetX - diameter/2}px`;

        circle.style.top =
        `${e.offsetY - diameter/2}px`;

        circle.style.transform =
        'scale(0)';

        circle.style.animation =
        'ripple 0.6s linear';

        this.appendChild(circle);

        setTimeout(() => {
            circle.remove();
        },600);
    });
});


// =========================
// SECTION FADE-IN COUNTER
// =========================

const headings =
document.querySelectorAll('h2');

headings.forEach((heading)=>{

    heading.addEventListener(
    'mouseenter',
    ()=>{

        heading.style.transform =
        'scale(1.05)';

        heading.style.transition =
        '0.4s';
    });

    heading.addEventListener(
    'mouseleave',
    ()=>{

        heading.style.transform =
        'scale(1)';
    });
});


// ===========================
// PREMIUM FEATURE CARDS
// ===========================

const premiumCards =
document.querySelectorAll(
'.premium-feature-card'
);

premiumCards.forEach((card)=>{

    card.addEventListener(
    'mousemove',
    (e)=>{

        const rect =
        card.getBoundingClientRect();

        const x =
        e.clientX - rect.left;

        const y =
        e.clientY - rect.top;

        const centerX =
        rect.width / 2;

        const centerY =
        rect.height / 2;

        const rotateX =
        (y - centerY) / 20;

        const rotateY =
        (centerX - x) / 20;

        card.style.transform =
        `
        perspective(1000px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        translateY(-10px)
        `;
    });

    card.addEventListener(
    'mouseleave',
    ()=>{

        card.style.transform =
        `
        perspective(1000px)
        rotateX(0deg)
        rotateY(0deg)
        translateY(0px)
        `;
    });

});


// ===========================
// FLOATING ICON ANIMATION
// ===========================

document
.querySelectorAll('.feature-icon')
.forEach((icon,index)=>{

    icon.animate(

    [
        {
            transform:
            'translateY(0px)'
        },

        {
            transform:
            'translateY(-12px)'
        },

        {
            transform:
            'translateY(0px)'
        }
    ],

    {
        duration:
        2500 + (index * 300),

        iterations:
        Infinity
    });
});


// ===========================
// SCROLL REVEAL
// ===========================

const featureObserver =
new IntersectionObserver(

(entries)=>{

entries.forEach((entry)=>{

if(entry.isIntersecting){

entry.target.style.opacity='1';

entry.target.style.transform=
'translateY(0)';
}

});

},
{
threshold:0.2
});

premiumCards.forEach((card)=>{

card.style.opacity='0';

card.style.transform=
'translateY(80px)';

card.style.transition=
'all 0.8s ease';

featureObserver.observe(card);

});

```javascript
// FOOTER FADE ANIMATION

const footerLinks =
document.querySelectorAll(
'.footer-links li, .footer-social li'
);

footerLinks.forEach((link,index)=>{

    link.style.opacity='0';

    link.style.transform=
    'translateX(-30px)';

    link.style.transition=
    'all .6s ease';

    setTimeout(()=>{

        link.style.opacity='1';

        link.style.transform=
        'translateX(0px)';

    }, index * 150);

});


// GOLD GLOW EFFECT

document
.querySelectorAll(
'.footer-social a'
)
.forEach(link=>{

link.addEventListener(
'mouseenter',
()=>{

link.style.textShadow=
'0 0 15px #d4af37';

});

link.addEventListener(
'mouseleave',
()=>{

link.style.textShadow=
'none';

});

});
```

// FOOD GALLERY REVEAL

const galleryItems =
document.querySelectorAll('.gallery-item');

const galleryObserver =
new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity='1';
entry.target.style.transform='translateY(0)';
}

});

},{threshold:0.2});

galleryItems.forEach(item=>{

item.style.opacity='0';
item.style.transform='translateY(80px)';
item.style.transition='all 0.8s ease';

galleryObserver.observe(item);

});


// ABOUT PAGE ANIMATION

const aboutSection =
document.querySelector('.about-content');

const observer =
new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity='1';

entry.target.style.transform=
'translateY(0)';
}

});

},
{
threshold:0.3
});

if(aboutSection){

aboutSection.style.opacity='0';

aboutSection.style.transform=
'translateY(80px)';

aboutSection.style.transition=
'all 1s ease';

observer.observe(aboutSection);
}


// FLOATING IMAGE EFFECT

const founderImage =
document.querySelector(
'.about-image img'
);

if(founderImage){

founderImage.animate(

[
{
transform:'translateY(0px)'
},

{
transform:'translateY(-15px)'
},

{
transform:'translateY(0px)'
}
],

{
duration:4000,
iterations:Infinity
});

}


// CONTACT CARDS ANIMATION

const contactCards =
document.querySelectorAll(
'.contact-info, .contact-form'
);

const contactObserver =
new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity='1';

entry.target.style.transform=
'translateY(0)';
}

});

},
{
threshold:0.3
});

contactCards.forEach(card=>{

card.style.opacity='0';

card.style.transform=
'translateY(80px)';

card.style.transition=
'all 1s ease';

contactObserver.observe(card);

});


// BUTTON HOVER EFFECT

const sendButton =
document.querySelector(
'.contact-form button'
);

if(sendButton){

sendButton.addEventListener(
'mouseenter',
()=>{

sendButton.style.boxShadow=
'0 0 25px rgba(212,175,55,.5)';
});

sendButton.addEventListener(
'mouseleave',
()=>{

sendButton.style.boxShadow='none';
});

}


// PRIVACY PAGE ANIMATION

const privacyCards =
document.querySelectorAll(
'.privacy-card'
);

const privacyObserver =
new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity='1';

entry.target.style.transform=
'translateY(0)';
}

});

},
{
threshold:0.2
});

privacyCards.forEach(card=>{

card.style.opacity='0';

card.style.transform=
'translateY(60px)';

card.style.transition=
'all .8s ease';

privacyObserver.observe(card);

});


// PAYMENT BOX HOVER EFFECT

document
.querySelectorAll('.payment-box')
.forEach(box=>{

box.addEventListener(
'mouseenter',
()=>{

box.style.boxShadow=
'0 0 20px rgba(212,175,55,.4)';
});

box.addEventListener(
'mouseleave',
()=>{

box.style.boxShadow='none';
});

});


// TERMS PAGE ANIMATION

const termsCards =
document.querySelectorAll(
'.terms-card'
);

const termsObserver =
new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity='1';

entry.target.style.transform=
'translateY(0)';
}

});

},
{
threshold:0.2
});

termsCards.forEach(card=>{

card.style.opacity='0';

card.style.transform=
'translateY(60px)';

card.style.transition=
'all .8s ease';

termsObserver.observe(card);

});


// PAYMENT BOX GLOW

document
.querySelectorAll('.service-box')
.forEach(box=>{

box.addEventListener(
'mouseenter',
()=>{

box.style.boxShadow=
'0 0 20px rgba(212,175,55,.4)';
});

box.addEventListener(
'mouseleave',
()=>{

box.style.boxShadow='none';
});

});

