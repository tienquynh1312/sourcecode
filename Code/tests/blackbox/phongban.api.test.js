/**
 * BLACKBOX TESTS - Phòng Ban API
 * Kiểm thử hộp đen: chỉ quan tâm input/output HTTP, không biết chi tiết triển khai DB.
 */
const request = require('supertest');
const { getMockDb } = require('../setup');

describe('[Blackbox] Phòng Ban API (/api/phongban)', () => {
    let app;

    beforeEach(() => {
        jest.resetModules();
        app = require('../../app');
    });

    test('BB-PB-001: GET trả về danh sách phòng ban (200)', async () => {
        const db = getMockDb();
        db.__setHandlers([
            (sql, params, cb) => cb(null, [
                { id_phongban: 'PB02', ten_phongban: 'Phòng Kế toán' },
                { id_phongban: 'PB01', ten_phongban: 'Phòng IT' }
            ])
        ]);

        const res = await request(app).get('/api/phongban');

        expect(res.status).toBe(200);
        expect(Array.isArray(res.body)).toBe(true);
        expect(res.body).toHaveLength(2);
    });

    test('BB-PB-002: POST tạo phòng ban thành công (200)', async () => {
        const db = getMockDb();
        db.__setHandlers([
            (sql, params, cb) => cb(null, []),
            (sql, params, cb) => cb(null, { insertId: 1 })
        ]);

        const res = await request(app)
            .post('/api/phongban')
            .send({
                id_phongban: 'PB99',
                ten_phongban: 'Phòng Test',
                dia_chi_phongban: 'Tầng 1',
                email_phongban: 'test@uni.edu.vn'
            });

        expect(res.status).toBe(200);
        expect(res.body.success).toBe(true);
        expect(res.body.message).toMatch(/thành công/i);
    });

    test('BB-PB-003: POST thiếu trường bắt buộc (400)', async () => {
        const res = await request(app)
            .post('/api/phongban')
            .send({ id_phongban: 'PB99', ten_phongban: 'Thiếu email' });

        expect(res.status).toBe(400);
        expect(res.body.error).toBeDefined();
    });

    test('BB-PB-004: POST trùng mã phòng ban (400)', async () => {
        const db = getMockDb();
        db.__setHandlers([
            (sql, params, cb) => cb(null, [{ id_phongban: 'PB01' }])
        ]);

        const res = await request(app)
            .post('/api/phongban')
            .send({
                id_phongban: 'PB01',
                ten_phongban: 'Trùng mã',
                dia_chi_phongban: 'A1',
                email_phongban: 'dup@test.com'
            });

        expect(res.status).toBe(400);
        expect(res.body.error).toMatch(/đã tồn tại/i);
    });

    test('BB-PB-005: PUT cập nhật phòng ban (200)', async () => {
        const db = getMockDb();
        db.__setHandlers([
            (sql, params, cb) => cb(null, { affectedRows: 1 })
        ]);

        const res = await request(app)
            .put('/api/phongban/PB01')
            .send({
                ten_phongban: 'Phòng IT Updated',
                dia_chi_phongban: 'Tầng 2',
                email_phongban: 'it-new@uni.edu.vn',
                truong_phong: null,
                trang_thai_pb: 'Hoạt động'
            });

        expect(res.status).toBe(200);
        expect(res.body.success).toBe(true);
    });

    test('BB-PB-006: DELETE xóa phòng ban (200)', async () => {
        const db = getMockDb();
        db.__setHandlers([
            (sql, params, cb) => cb(null, { affectedRows: 1 })
        ]);

        const res = await request(app).delete('/api/phongban/PB01');

        expect(res.status).toBe(200);
        expect(res.body.success).toBe(true);
    });
});
