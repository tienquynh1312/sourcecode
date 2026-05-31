# KhoaHocApiTest

## KH-001: Get khoa hoc list
- Preconditions: DB has khoa hoc rows.
- Action: GET /api/khoahoc.
- Expected Result: 200 OK.

## KH-002: Create khoa hoc
- Preconditions: CTDT exists.
- Action: POST /api/khoahoc with valid year range.
- Expected Result: 200 OK.

## KH-003: Reject invalid year range
- Preconditions: None.
- Action: POST /api/khoahoc with nam_ket_thuc <= nam_bat_dau.
- Expected Result: 400 BAD_REQUEST or client side block.

## KH-004: Update khoa hoc
- Preconditions: khoa hoc exists.
- Action: PUT /api/khoahoc/:id.
- Expected Result: 200 OK.

## KH-005: Delete khoa hoc
- Preconditions: khoa hoc exists.
- Action: DELETE /api/khoahoc/:id.
- Expected Result: 200 OK.
