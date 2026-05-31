# KhoaApiTest

## K-001: Get khoa list
- Preconditions: DB has khoa rows.
- Action: GET /api/khoa.
- Expected Result: 200 OK.

## K-002: Create khoa
- Preconditions: id_khoa does not exist.
- Action: POST /api/khoa.
- Expected Result: 200 OK, row created.

## K-003: Update khoa
- Preconditions: khoa exists.
- Action: PUT /api/khoa/:id.
- Expected Result: 200 OK, row updated.

## K-004: Delete khoa
- Preconditions: khoa exists.
- Action: DELETE /api/khoa/:id.
- Expected Result: 200 OK or FK error if referenced.
