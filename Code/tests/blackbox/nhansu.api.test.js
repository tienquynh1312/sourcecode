/**
 * BLACKBOX TESTS - Nhân Sự API
 */
const request = require('supertest');
const { getMockDb } = require('../setup');

describe('[Blackbox] Nhân Sự API (/api/nhansu)', () => {
    let app;

    beforeEach(() => {
        jest.resetModules();
        app = require('../../app');
    });

    test('BB-NS-001: GET danh sách nhân sự (200)', async () => {
        const db = getMockDb();
        db.__setHandlers([
            (sql, params, cb) => cb(null, [
                { id_nhanvien: 'NV01', ten_nhanvien: 'Nguyễn A', ten_phongban: 'Phòng IT' }
            ])
        ]);

        const res = await request(app).get('/api/nhansu');

        expect(res.status).toBe(200);
        expect(res.body[0].ten_phongban).toBe('Phòng IT');
    });

    test('BB-NS-002: POST tạo nhân sự thành công (200)', async () => {
        const db = getMockDb();
        db.__setHandlers([
            (sql, params, cb) => cb(null, []),
            (sql, params, cb) => cb(null, { insertId: 1 })
        ]);

        const res = await request(app)
            .post('/api/nhansu')
            .send({
                id_nhanvien: 'NV99',
                ten_nhanvien: 'Trần Test',
                chucvu: 'Nhân viên',
                email_nhansu: 'tran@test.com',
                id_phongban: 'PB01'
            });

        expect(res.status).toBe(200);
        expect(res.body.success).toBe(true);
    });

    test('BB-NS-003: POST thiếu trường bắt buộc (400)', async () => {
        const res = await request(app)
            .post('/api/nhansu')
            .send({ id_nhanvien: 'NV99' });

        expect(res.status).toBe(400);
        expect(res.body.error).toBeDefined();
    });

    test('BB-NS-004: POST trùng mã nhân viên (400)', async () => {
        const db = getMockDb();
        db.__setHandlers([
            (sql, params, cb) => cb(null, [{ id_nhanvien: 'NV01' }])
        ]);

        const res = await request(app)
            .post('/api/nhansu')
            .send({
                id_nhanvien: 'NV01',
                ten_nhanvien: 'Trùng',
                email_nhansu: 'dup@test.com'
            });

        expect(res.status).toBe(400);
        expect(res.body.error).toMatch(/đã tồn tại/i);
    });

    test('BB-NS-005: PUT không tìm thấy nhân sự (404)', async () => {
        const db = getMockDb();
        db.__setHandlers([
            (sql, params, cb) => cb(null, [])
        ]);

        const res = await request(app)
            .put('/api/nhansu/NV404')
            .send({
                ten_nhanvien: 'X',
                chucvu: 'Nhân viên',
                email_nhansu: 'x@test.com',
                id_phongban: 'PB01',
                trang_thai_ns: 'Đang làm'
            });

        expect(res.status).toBe(404);
    });
});
