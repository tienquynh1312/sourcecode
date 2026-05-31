/**
 * @jest-environment jsdom
 */
require('../../utils/frontend.js');
require('../../utils/frontend-ui.js');

const QLDT = require('../../utils/frontend-ui.js');
const { loadFrontendFixture } = require('../helpers/domFixture');

describe('[Whitebox] Frontend validation & logic', () => {
    describe('getSectionTitle (NAV mapping)', () => {
        test('WB-FE-001: dashboard mặc định', () => {
            expect(QLDT.getSectionTitle('dashboard')).toBe('Tổng quan');
        });

        test('WB-FE-002: các section đã định nghĩa', () => {
            expect(QLDT.getSectionTitle('phongban')).toBe('Thông tin phòng ban');
            expect(QLDT.getSectionTitle('qlnhansu')).toBe('Quản lý nhân sự');
            expect(QLDT.getSectionTitle('hocphi')).toBe('Quản lý học phí');
        });

        test('WB-FE-003: section không tồn tại', () => {
            expect(QLDT.getSectionTitle('unknown')).toBe('Không xác định');
        });
    });

    describe('getDropdownItemsId (NAV-002)', () => {
        test('WB-FE-004: map dropdown hợp lệ', () => {
            expect(QLDT.getDropdownItemsId('qltochuc-dropdown')).toBe('tochuc-items');
            expect(QLDT.getDropdownItemsId('quanlynhansu-dropdown')).toBe('nhansu-items');
        });

        test('WB-FE-005: dropdown không tồn tại', () => {
            expect(QLDT.getDropdownItemsId('invalid-dropdown')).toBeNull();
        });
    });

    describe('filterRowsBySearchTerm (PB-FE-006)', () => {
        test('WB-FE-006: lọc theo từ khóa', () => {
            const rows = [
                { textContent: 'PB01 Phòng IT' },
                { textContent: 'PB02 Phòng Kế toán' }
            ];
            const result = QLDT.filterRowsBySearchTerm(rows, 'kế toán');
            expect(result[0].visible).toBe(false);
            expect(result[1].visible).toBe(true);
        });

        test('WB-FE-007: từ khóa rỗng hiện tất cả', () => {
            const rows = [{ textContent: 'PB01' }, { textContent: 'PB02' }];
            const result = QLDT.filterRowsBySearchTerm(rows, '');
            expect(result.every((r) => r.visible)).toBe(true);
        });
    });

    describe('validatePhongBanForm (PB-FE-002)', () => {
        test('WB-FE-008: thiếu trường → invalid', () => {
            const result = QLDT.validatePhongBanForm({ id_phongban: 'PB01', ten_phongban: '' });
            expect(result.valid).toBe(false);
        });

        test('WB-FE-009: đủ trường → valid', () => {
            const result = QLDT.validatePhongBanForm({
                id_phongban: 'PB01',
                ten_phongban: 'Phòng IT',
                dia_chi_phongban: 'Tầng 1',
                email_phongban: 'it@uni.edu.vn'
            });
            expect(result.valid).toBe(true);
        });
    });

    describe('validateHocPhiForm (HPF frontend)', () => {
        test('WB-FE-010: giá tín chỉ <= 0', () => {
            expect(QLDT.validateHocPhiForm('CTDT01', 2024, 0).valid).toBe(false);
        });

        test('WB-FE-011: dữ liệu hợp lệ', () => {
            expect(QLDT.validateHocPhiForm('CTDT01', 2024, 1400000).valid).toBe(true);
        });
    });

    describe('validateKhoaHocYears (KH frontend)', () => {
        test('WB-FE-012: năm kết thúc <= năm bắt đầu', () => {
            expect(QLDT.validateKhoaHocYears(2028, 2024).valid).toBe(false);
        });

        test('WB-FE-013: khoảng năm hợp lệ', () => {
            expect(QLDT.validateKhoaHocYears(2024, 2028).valid).toBe(true);
        });
    });
});
