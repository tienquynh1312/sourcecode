/**
 * BLACKBOX TESTS - Học Phần API
 */
const request = require('supertest');
const { getMockDb } = require('../setup');

describe('[Blackbox] Học Phần API (/api/hocphan)', () => {
    let app;

    beforeEach(() => {
        jest.resetModules();
        app = require('../../app');
    });

    test('BB-HP-001: GET danh sách học phần (200)', async () => {
        const db = getMockDb();
        db.__setHandlers([
            (sql, params, cb) => cb(null, [
                { ma_hocphan: 'IT101', ten_hocphan: 'Lập trình C', so_tinchi: 3 }
            ])
        ]);

        const res = await request(app).get('/api/hocphan');

        expect(res.status).toBe(200);
        expect(res.body[0].ma_hocphan).toBe('IT101');
    });

    test('BB-HP-002: POST tạo học phần với quan hệ null (200)', async () => {
        const db = getMockDb();
        db.__setHandlers([
            (sql, params, cb) => cb(null, []),
            (sql, params, cb) => cb(null, { insertId: 1 })
        ]);

        const res = await request(app)
            .post('/api/hocphan')
            .send({
                ma_hocphan: 'IT999',
                ten_hocphan: 'Test HP',
                so_tinchi: 3,
                hp_tien_quyet: 'khong',
                hp_song_hanh: '',
                hp_hoc_truoc: 'null'
            });

        expect(res.status).toBe(200);
        expect(res.body.success).toBe(true);

        const insertCall = db.__getCallLog().find((c) => c.sql.includes('INSERT INTO hocphan'));
        expect(insertCall.params.slice(5, 8)).toEqual([null, null, null]);
    });

    test('BB-HP-003: POST thiếu mã/tên (400)', async () => {
        const res = await request(app)
            .post('/api/hocphan')
            .send({ ma_hocphan: 'IT998' });

        expect(res.status).toBe(400);
        expect(res.body.error).toBeDefined();
    });

    test('BB-HP-004: POST trùng mã học phần (400)', async () => {
        const db = getMockDb();
        db.__setHandlers([
            (sql, params, cb) => cb(null, [{ ma_hocphan: 'IT101' }])
        ]);

        const res = await request(app)
            .post('/api/hocphan')
            .send({ ma_hocphan: 'IT101', ten_hocphan: 'Trùng mã' });

        expect(res.status).toBe(400);
        expect(res.body.error).toMatch(/đã tồn tại/i);
    });

    test('BB-HP-005: DELETE không tìm thấy (404)', async () => {
        const db = getMockDb();
        db.__setHandlers([
            (sql, params, cb) => cb(null, { affectedRows: 0 })
        ]);

        const res = await request(app).delete('/api/hocphan/NOTFOUND');

        expect(res.status).toBe(404);
    });
});
