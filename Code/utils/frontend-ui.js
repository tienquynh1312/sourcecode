/**
 * Thao tác DOM frontend (navigation, search, notification).
 */
(function (root, factory) {
    let QLDT = root.QLDT;
    if (typeof module === 'object' && module.exports && (!QLDT || !QLDT.getSectionTitle)) {
        QLDT = require('./frontend');
    }
    const api = factory(QLDT);
    if (typeof module === 'object' && module.exports) {
        module.exports = Object.assign({}, QLDT, api);
    } else {
        root.QLDT = Object.assign(root.QLDT || {}, api);
    }
}(typeof globalThis !== 'undefined' ? globalThis : this, function (QLDT) {

    function showinfo(sectionId) {
        document.querySelectorAll('.section').forEach((s) => s.classList.remove('section-active'));

        const target = document.getElementById(sectionId);
        if (target) {
            target.classList.add('section-active');
        } else {
            createNewSection(sectionId);
        }

        updateNavActive(sectionId);
        if (typeof window !== 'undefined' && window.scrollTo) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }

    function toggleDropDown(dropdownId) {
        const itemsId = QLDT.getDropdownItemsId(dropdownId);
        if (!itemsId) return;

        const dropItems = document.getElementById(itemsId);
        const navLink = dropItems ? dropItems.previousElementSibling : null;

        if (dropItems && navLink) {
            if (dropItems.style.display === 'flex') {
                dropItems.style.display = 'none';
                navLink.classList.remove('active');
            } else {
                closeAllDropdowns();
                dropItems.style.display = 'flex';
                navLink.classList.add('active');
            }
        }
    }

    function closeAllDropdowns() {
        document.querySelectorAll('.drop-items').forEach((d) => { d.style.display = 'none'; });
        document.querySelectorAll('.nav-link').forEach((l) => l.classList.remove('active'));
    }

    function updateNavActive(sectionId) {
        document.querySelectorAll('.nav-link').forEach((l) => l.classList.remove('active'));
        const link = document.querySelector(`[onclick*="${sectionId}"]`);
        if (link && link.classList.contains('nav-link')) {
            link.classList.add('active');
        }
    }

    function createNewSection(sectionId) {
        const main = document.querySelector('.main-content');
        if (!main) return;

        const title = QLDT.getSectionTitle(sectionId);
        const el = document.createElement('div');
        el.id = sectionId;
        el.className = 'section section-active';
        el.innerHTML = `<h2>${title}</h2><p>Nội dung ${title.toLowerCase()} sẽ được hiển thị ở đây...</p>`;
        main.appendChild(el);
    }

    function searchTable(sectionSelector, tableBodySelector) {
        const input = document.querySelector(`${sectionSelector} .search-bar input`);
        const rows = document.querySelectorAll(`${tableBodySelector} tbody tr`);
        if (!input) return;

        QLDT.filterRowsBySearchTerm(rows, input.value).forEach(({ row, visible }) => {
            row.style.display = visible ? '' : 'none';
        });
    }

    function showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `qldt-notification qldt-notification-${type}`;
        notification.textContent = message;
        document.body.appendChild(notification);
        return notification;
    }

    return {
        showinfo,
        toggleDropDown,
        closeAllDropdowns,
        updateNavActive,
        createNewSection,
        searchTable,
        showNotification
    };
}));
