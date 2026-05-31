const { createMockDb } = require('./helpers/mockDb');

jest.mock('mysql2', () => ({
    createConnection: jest.fn(() => global.__TEST_DB__)
}));

beforeEach(() => {
    global.__TEST_DB__ = createMockDb();
});

module.exports = { getMockDb: () => global.__TEST_DB__ };
