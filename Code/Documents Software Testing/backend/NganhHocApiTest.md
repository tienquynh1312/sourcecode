# NganhHocApiTest

## NH-001: Get nganh hoc list
- Preconditions: DB has nganhhoc rows.
- Action: GET /api/nganhhoc.
- Expected Result: 200 OK, joined khoa info.

## NH-002: Create nganh hoc
- Preconditions: id_khoa exists.
- Action: POST /api/nganhhoc.
- Expected Result: 200 OK.

## NH-003: Reject missing khoa
- Preconditions: None.
- Action: POST /api/nganhhoc with invalid id_khoa.
- Expected Result: 400 BAD_REQUEST.

## NH-004: Update nganh hoc
- Preconditions: nganhhoc exists.
- Action: PUT /api/nganhhoc/:id.
- Expected Result: 200 OK.

## NH-005: Delete nganh hoc
- Preconditions: nganhhoc exists.
- Action: DELETE /api/nganhhoc/:id.
- Expected Result: 200 OK.
