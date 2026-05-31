/**
 * Mock MySQL connection cho blackbox tests.
 * Cho phép cấu hình kết quả trả về theo từng câu SQL.
 */
function createMockDb(defaultResults = []) {
    const queryHandlers = [];
    let callLog = [];

    const db = {
        connect: jest.fn((cb) => cb && cb(null)),
        query: jest.fn((sql, paramsOrCb, maybeCb) => {
            let params = [];
            let cb = maybeCb;

            if (typeof paramsOrCb === 'function') {
                cb = paramsOrCb;
            } else {
                params = paramsOrCb || [];
            }

            callLog.push({ sql, params });

            const handler = queryHandlers.shift();
            if (handler) {
                return handler(sql, params, cb);
            }

            if (typeof cb === 'function') {
                cb(null, defaultResults);
            }
        }),
        end: jest.fn(),
        __setHandlers: (handlers) => {
            queryHandlers.length = 0;
            queryHandlers.push(...handlers);
        },
        __getCallLog: () => callLog,
        __reset: () => {
            callLog = [];
            queryHandlers.length = 0;
            db.query.mockClear();
            db.connect.mockClear();
        }
    };

    return db;
}

module.exports = { createMockDb };
