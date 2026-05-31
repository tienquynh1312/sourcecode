/**
 * WHITEBOX TESTS - processHocPhanValue
 * Kiểm thử hộp trắng: test trực tiếp logic nội bộ, biết cấu trúc code.
 */
const { processHocPhanValue } = require('../../utils/hocphan');

describe('[Whitebox] processHocPhanValue', () => {
    describe('Trả về null cho giá trị rỗng/không hợp lệ', () => {
        test('WB-HP-001: null/undefined/empty string', () => {
            expect(processHocPhanValue(null)).toBeNull();
            expect(processHocPhanValue(undefined)).toBeNull();
            expect(processHocPhanValue('')).toBeNull();
            expect(processHocPhanValue('   ')).toBeNull();
        });

        test('WB-HP-002: chuỗi "không" / "khong" (case insensitive)', () => {
            expect(processHocPhanValue('không')).toBeNull();
            expect(processHocPhanValue('KHÔNG')).toBeNull();
            expect(processHocPhanValue('khong')).toBeNull();
            expect(processHocPhanValue('  Khong  ')).toBeNull();
        });

        test('WB-HP-003: chuỗi "null"', () => {
            expect(processHocPhanValue('null')).toBeNull();
        });
    });

    describe('Trả về mã học phần đã trim', () => {
        test('WB-HP-004: mã hợp lệ', () => {
            expect(processHocPhanValue('IT101')).toBe('IT101');
            expect(processHocPhanValue('  MA001  ')).toBe('MA001');
        });
    });
});
