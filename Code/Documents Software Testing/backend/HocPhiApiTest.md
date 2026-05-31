# HocPhiApiTest

## HPF-001: Get hoc phi list
- Preconditions: hocphi_config exists.
- Action: GET /api/hocphi.
- Expected Result: 200 OK.

## HPF-002: Get hoc phi tinh by CTDT
- Preconditions: CTDT exists.
- Action: GET /api/hocphi/tinh/:ma_ctdt.
- Expected Result: 200 OK with KKT data.

## HPF-003: Get CTDT list with credits
- Preconditions: CTDT exists.
- Action: GET /api/hocphi/ctdt-list.
- Expected Result: 200 OK with tong_tin_chi values.

## HPF-004: Create hoc phi config
- Preconditions: ma_ctdt exists, gia_tin_chi > 0.
- Action: POST /api/hocphi.
- Expected Result: 200 OK.

## HPF-005: Update hoc phi config when exists
- Preconditions: ma_ctdt + nam_hoc exists.
- Action: POST /api/hocphi with same ma_ctdt + nam_hoc.
- Expected Result: 200 OK, row updated.

## HPF-006: Reject invalid gia tin chi
- Preconditions: None.
- Action: POST /api/hocphi with gia_tin_chi <= 0.
- Expected Result: 400 BAD_REQUEST.

## HPF-007: Delete hoc phi config
- Preconditions: hocphi_config exists.
- Action: DELETE /api/hocphi/:id.
- Expected Result: 200 OK.
