document.addEventListener('DOMContentLoaded', () => {
    
    // Header Logic
    let lastScrollTop = 0;
    const header = document.getElementById('main-header');
    
    window.addEventListener('scroll', () => {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > lastScrollTop) {
            header.classList.add('-translate-y-full');
        } else {
            header.classList.remove('-translate-y-full');
        }
        lastScrollTop = scrollTop;
    });

    // Mobile Menu
    const btn = document.getElementById('mobile-menu-btn');
    const menu = document.getElementById('mobile-menu');

    btn.addEventListener('click', () => {
        menu.classList.toggle('hidden');
    });

    // Close mobile menu on link click
    menu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.add('hidden');
        });
    });

    // Scroll Animation
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal-on-scroll').forEach(el => {
        observer.observe(el);
    });

});

// Tabs Logic
function switchTab(unit) {
    const content1 = document.getElementById('unit1-content');
    const content2 = document.getElementById('unit2-content');
    const btn1 = document.getElementById('btn-unit-1');
    const btn2 = document.getElementById('btn-unit-2');

    if (unit === 'unit1') {
        content1.classList.remove('hidden');
        content1.classList.add('grid');
        content2.classList.add('hidden');
        content2.classList.remove('grid');

        btn1.classList.remove('text-gray-500');
        btn1.classList.add('bg-white', 'text-brand-green', 'shadow-sm');
        
        btn2.classList.add('text-gray-500');
        btn2.classList.remove('bg-white', 'text-brand-green', 'shadow-sm');
    } else {
        content2.classList.remove('hidden');
        content2.classList.add('grid');
        content1.classList.add('hidden');
        content1.classList.remove('grid');

        btn2.classList.remove('text-gray-500');
        btn2.classList.add('bg-white', 'text-brand-green', 'shadow-sm');

        btn1.classList.add('text-gray-500');
        btn1.classList.remove('bg-white', 'text-brand-green', 'shadow-sm');
    }
}

// Modal Logic
function toggleModal(modalID) {
    document.getElementById(modalID).classList.toggle('hidden');
}