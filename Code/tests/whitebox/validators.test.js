/**
 * WHITEBOX TESTS - Validators
 * Kiểm thử hộp trắng các hàm validation dùng trong API.
 */
const {
    hasRequiredFields,
    isValidYearRange,
    isValidGiaTinChi,
    hasKhoiKienThuc
} = require('../../utils/validators');

describe('[Whitebox] hasRequiredFields', () => {
    test('WB-VL-001: đủ trường bắt buộc', () => {
        const data = { id: 'PB01', ten: 'Phòng IT', email: 'it@test.com' };
        expect(hasRequiredFields(data, ['id', 'ten', 'email'])).toBe(true);
    });

    test('WB-VL-002: thiếu trường', () => {
        const data = { id: 'PB01', ten: '' };
        expect(hasRequiredFields(data, ['id', 'ten', 'email'])).toBe(false);
    });

    test('WB-VL-003: null/undefined', () => {
        expect(hasRequiredFields({ a: null }, ['a'])).toBe(false);
        expect(hasRequiredFields({}, ['a'])).toBe(false);
    });
});

describe('[Whitebox] isValidYearRange', () => {
    test('WB-VL-004: năm kết thúc > năm bắt đầu', () => {
        expect(isValidYearRange(2024, 2028)).toBe(true);
    });

    test('WB-VL-005: năm kết thúc <= năm bắt đầu (KH-002)', () => {
        expect(isValidYearRange(2028, 2024)).toBe(false);
        expect(isValidYearRange(2024, 2024)).toBe(false);
    });

    test('WB-VL-006: giá trị không phải số', () => {
        expect(isValidYearRange('abc', 2028)).toBe(false);
    });
});

describe('[Whitebox] isValidGiaTinChi', () => {
    test('WB-VL-007: giá > 0 (HPF-003 pass)', () => {
        expect(isValidGiaTinChi(1400000)).toBe(true);
        expect(isValidGiaTinChi('500000')).toBe(true);
    });

    test('WB-VL-008: giá <= 0 (HPF-005 reject)', () => {
        expect(isValidGiaTinChi(0)).toBe(false);
        expect(isValidGiaTinChi(-100)).toBe(false);
        expect(isValidGiaTinChi(null)).toBe(false);
    });
});

describe('[Whitebox] hasKhoiKienThuc', () => {
    test('WB-VL-009: có ít nhất 1 KKT (CTDT-003 pass)', () => {
        expect(hasKhoiKienThuc([{ ma_kkt: 'KKT01' }])).toBe(true);
    });

    test('WB-VL-010: mảng rỗng (CTDT-004 reject)', () => {
        expect(hasKhoiKienThuc([])).toBe(false);
        expect(hasKhoiKienThuc(null)).toBe(false);
        expect(hasKhoiKienThuc(undefined)).toBe(false);
    });
});
