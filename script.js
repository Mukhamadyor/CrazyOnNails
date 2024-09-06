document.addEventListener('DOMContentLoaded', function () {
    const languageSelect = document.querySelector('.language-selector');
    const elements = {
        headerTitle: document.getElementById('header-title'),
        homeTitle: document.getElementById('home-title'),
        homeText: document.getElementById('home-text'),
        aboutTitle: document.getElementById('about-title'),
        aboutText: document.getElementById('about-text'),
        servicesTitle: document.getElementById('services-title'),
        servicesList: document.getElementById('services-list'),
        teamTitle: document.getElementById('team-title'),
        teamMember1Name: document.getElementById('team-member1-name'),
        teamMember1Role: document.getElementById('team-member1-role'),
        teamMember2Name: document.getElementById('team-member2-name'),
        teamMember2Role: document.getElementById('team-member2-role'),
        appointmentTitle: document.getElementById('appointment-title'),
        contactTitle: document.getElementById('contact-title'),
        contactText: document.getElementById('contact-text'),
    };

    fetch('translations.json')
        .then(response => response.json())
        .then(translations => {
            function updateText(language) {
                const t = translations[language];
                for (const key in t) {
                    if (elements[key]) {
                        elements[key].textContent = t[key];
                    }
                }
            }

            // Set default language to Russian
            updateText('ru');

            languageSelect.addEventListener('click', function (event) {
                const lang = event.target.dataset.lang;
                if (lang) {
                    updateText(lang);
                }
            });
        })
        .catch(err => console.error('Error loading translations:', err));
});
