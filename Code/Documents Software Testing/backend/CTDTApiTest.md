# CTDTApiTest

## CTDT-001: Get CTDT list
- Preconditions: DB has CTDT rows.
- Action: GET /api/ctdt.
- Expected Result: 200 OK with so_kkt.

## CTDT-002: Get CTDT detail
- Preconditions: CTDT exists.
- Action: GET /api/ctdt/:ma.
- Expected Result: 200 OK with KKT + hoc phan.

## CTDT-003: Create CTDT with KKT
- Preconditions: Khoa and KKT exist.
- Action: POST /api/ctdt with khoi_kien_thuc array.
- Expected Result: 200 OK.

## CTDT-004: Reject CTDT without KKT
- Preconditions: None.
- Action: POST /api/ctdt with empty khoi_kien_thuc.
- Expected Result: 400 BAD_REQUEST.

## CTDT-005: Update CTDT
- Preconditions: CTDT exists.
- Action: PUT /api/ctdt/:ma.
- Expected Result: 200 OK.

## CTDT-006: Delete CTDT
- Preconditions: CTDT exists.
- Action: DELETE /api/ctdt/:ma.
- Expected Result: 200 OK.
