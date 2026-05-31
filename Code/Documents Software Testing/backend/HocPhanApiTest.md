# HocPhanApiTest

## HP-001: Get hoc phan list
- Preconditions: DB has hocphan rows.
- Action: GET /api/hocphan.
- Expected Result: 200 OK, joined prerequisite names.

## HP-002: Create hoc phan with null relations
- Preconditions: ma_hocphan does not exist.
- Action: POST /api/hocphan with hp_tien_quyet="khong" or empty.
- Expected Result: relations stored as NULL.

## HP-003: Reject duplicate ma hoc phan
- Preconditions: ma_hocphan exists.
- Action: POST /api/hocphan with same ma_hocphan.
- Expected Result: 400 BAD_REQUEST.

## HP-004: Update hoc phan
- Preconditions: hocphan exists.
- Action: PUT /api/hocphan/:ma.
- Expected Result: 200 OK.

## HP-005: Delete hoc phan
- Preconditions: hocphan exists.
- Action: DELETE /api/hocphan/:ma.
- Expected Result: 200 OK.
