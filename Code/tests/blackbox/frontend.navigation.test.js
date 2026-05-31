/**
 * @jest-environment jsdom
 */
require('../../utils/frontend.js');
require('../../utils/frontend-ui.js');

const QLDT = require('../../utils/frontend-ui.js');
const { loadFrontendFixture } = require('../helpers/domFixture');

describe('[Blackbox] Frontend Navigation', () => {
    beforeEach(() => {
        loadFrontendFixture();
        global.scrollTo = jest.fn();
    });

    test('BB-FE-NAV-001: dashboard active mặc định (NAV-001)', () => {
        const dashboard = document.getElementById('dashboard');
        expect(dashboard.classList.contains('section-active')).toBe(true);
    });

    test('BB-FE-NAV-002: showinfo chuyển section (NAV-001)', () => {
        QLDT.showinfo('phongban');

        expect(document.getElementById('dashboard').classList.contains('section-active')).toBe(false);
        expect(document.getElementById('phongban').classList.contains('section-active')).toBe(true);
    });

    test('BB-FE-NAV-003: toggleDropDown mở/đóng menu (NAV-002)', () => {
        const items = document.getElementById('tochuc-items');

        QLDT.toggleDropDown('qltochuc-dropdown');
        expect(items.style.display).toBe('flex');

        QLDT.toggleDropDown('qltochuc-dropdown');
        expect(items.style.display).toBe('none');
    });

    test('BB-FE-NAV-004: chỉ một dropdown mở tại một thời điểm (NAV-002)', () => {
        QLDT.toggleDropDown('qltochuc-dropdown');
        QLDT.toggleDropDown('quanlynhansu-dropdown');

        expect(document.getElementById('tochuc-items').style.display).toBe('none');
        expect(document.getElementById('nhansu-items').style.display).toBe('flex');
    });

    test('BB-FE-NAV-005: tạo section mới khi ID chưa tồn tại', () => {
        QLDT.showinfo('hocphi');

        const section = document.getElementById('hocphi');
        expect(section).not.toBeNull();
        expect(section.querySelector('h2').textContent).toBe('Quản lý học phí');
    });
});

describe('[Blackbox] Frontend Search & Notification', () => {
    beforeEach(() => {
        loadFrontendFixture();
    });

    test('BB-FE-PB-001: searchPhongBan lọc bảng (PB-FE-006)', () => {
        const input = document.querySelector('#phongban .search-bar input');
        input.value = 'Kế toán';

        QLDT.searchTable('#phongban', '.tbphongban');

        const rows = document.querySelectorAll('.tbphongban tbody tr');
        expect(rows[0].style.display).toBe('none');
        expect(rows[1].style.display).toBe('');
        expect(rows[2].style.display).toBe('none');
    });

    test('BB-FE-PB-002: search xóa filter khi input rỗng', () => {
        const input = document.querySelector('#phongban .search-bar input');
        input.value = 'IT';
        QLDT.searchTable('#phongban', '.tbphongban');

        input.value = '';
        QLDT.searchTable('#phongban', '.tbphongban');

        const rows = document.querySelectorAll('.tbphongban tbody tr');
        rows.forEach((row) => expect(row.style.display).toBe(''));
    });

    test('BB-FE-NOTIF-001: showNotification hiển thị thông báo lỗi (PB-FE-002)', () => {
        const notif = QLDT.showNotification('Vui lòng điền đầy đủ thông tin', 'error');

        expect(notif.textContent).toBe('Vui lòng điền đầy đủ thông tin');
        expect(notif.classList.contains('qldt-notification-error')).toBe(true);
        expect(document.body.contains(notif)).toBe(true);
    });
});
