/**
 * BLACKBOX TESTS - Học Phí & CTĐT API
 */
const request = require('supertest');
const { getMockDb } = require('../setup');

describe('[Blackbox] Học Phí API (/api/hocphi)', () => {
    let app;

    beforeEach(() => {
        jest.resetModules();
        app = require('../../app');
    });

    test('BB-HPF-001: POST giá tín chỉ không hợp lệ (400)', async () => {
        const res = await request(app)
            .post('/api/hocphi')
            .send({ ma_ctdt: 'CTDT01', nam_hoc: 2024, gia_tin_chi: 0 });

        expect(res.status).toBe(400);
        expect(res.body.error).toBeDefined();
    });

    test('BB-HPF-002: POST thêm học phí mới (200)', async () => {
        const db = getMockDb();
        db.__setHandlers([
            (sql, params, cb) => cb(null, [{ ma_ctdt: 'CTDT01' }]),
            (sql, params, cb) => cb(null, []),
            (sql, params, cb) => cb(null, { insertId: 1 })
        ]);

        const res = await request(app)
            .post('/api/hocphi')
            .send({ ma_ctdt: 'CTDT01', nam_hoc: 2025, gia_tin_chi: 1400000 });

        expect(res.status).toBe(200);
        expect(res.body.success).toBe(true);
    });

    test('BB-HPF-003: GET tính học phí theo CTĐT không tồn tại (404)', async () => {
        const db = getMockDb();
        db.__setHandlers([
            (sql, params, cb) => cb(null, [])
        ]);

        const res = await request(app).get('/api/hocphi/tinh/CTDT404');

        expect(res.status).toBe(404);
    });
});

describe('[Blackbox] CTĐT API (/api/ctdt)', () => {
    let app;

    beforeEach(() => {
        jest.resetModules();
        app = require('../../app');
    });

    test('BB-CTDT-001: POST thiếu khối kiến thức (400)', async () => {
        const res = await request(app)
            .post('/api/ctdt')
            .send({
                ma_ctdt: 'CTDT99',
                ten_ctdt: 'CTĐT Test',
                id_khoa: 'K01',
                trinh_do: 'Đại học',
                thoi_gian_dao_tao: 4,
                khoi_kien_thuc: []
            });

        expect(res.status).toBe(400);
        expect(res.body.error).toMatch(/khối kiến thức/i);
    });

    test('BB-CTDT-002: GET chi tiết CTĐT không tồn tại (404)', async () => {
        const db = getMockDb();
        db.__setHandlers([
            (sql, params, cb) => cb(null, [])
        ]);

        const res = await request(app).get('/api/ctdt/CTDT404');

        expect(res.status).toBe(404);
    });
});

describe('[Blackbox] Khóa Học API (/api/khoahoc)', () => {
    let app;

    beforeEach(() => {
        jest.resetModules();
        app = require('../../app');
    });

    test('BB-KH-001: POST thiếu trường bắt buộc (400)', async () => {
        const res = await request(app)
            .post('/api/khoahoc')
            .send({ id_khoahoc: 'KH99', ten_khoahoc: 'Khóa test' });

        expect(res.status).toBe(400);
        expect(res.body.error).toBeDefined();
    });

    test('BB-KH-002: POST CTĐT không tồn tại (400)', async () => {
        const db = getMockDb();
        db.__setHandlers([
            (sql, params, cb) => cb(null, []),
            (sql, params, cb) => cb(null, [])
        ]);

        const res = await request(app)
            .post('/api/khoahoc')
            .send({
                id_khoahoc: 'KH99',
                ten_khoahoc: 'Khóa 2024',
                nam_bat_dau: 2024,
                nam_ket_thuc: 2028,
                ma_ctdt: 'CTDT404'
            });

        expect(res.status).toBe(400);
        expect(res.body.error).toMatch(/Chương trình đào tạo/i);
    });
});
