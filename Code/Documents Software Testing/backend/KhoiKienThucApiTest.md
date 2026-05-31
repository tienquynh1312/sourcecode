# KhoiKienThucApiTest

## KKT-001: Get KKT list
- Preconditions: DB has khoi_kien_thuc rows.
- Action: GET /api/khoikienthuc.
- Expected Result: 200 OK.

## KKT-002: Create KKT
- Preconditions: ma_kkt does not exist.
- Action: POST /api/khoikienthuc with required fields.
- Expected Result: 200 OK.

## KKT-003: Reject missing fields
- Preconditions: None.
- Action: POST /api/khoikienthuc missing credits.
- Expected Result: 400 BAD_REQUEST.

## KKT-004: Update KKT
- Preconditions: KKT exists.
- Action: PUT /api/khoikienthuc/:ma.
- Expected Result: 200 OK.

## KKT-005: Delete KKT
- Preconditions: KKT exists.
- Action: DELETE /api/khoikienthuc/:ma.
- Expected Result: 200 OK.
