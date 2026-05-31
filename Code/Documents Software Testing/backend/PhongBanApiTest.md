# PhongBanApiTest

## PB-001: Get phong ban list
- Preconditions: DB has phongban rows.
- Action: GET /api/phongban.
- Expected Result: 200 OK, list sorted by id_phongban desc.

## PB-002: Create phong ban
- Preconditions: id_phongban does not exist.
- Action: POST /api/phongban with required fields.
- Expected Result: 200 OK, success=true, row created.

## PB-003: Reject missing fields
- Preconditions: None.
- Action: POST /api/phongban missing required fields.
- Expected Result: 400 BAD_REQUEST.

## PB-004: Reject duplicate id
- Preconditions: id_phongban exists.
- Action: POST /api/phongban with same id.
- Expected Result: 400 BAD_REQUEST.

## PB-005: Update phong ban
- Preconditions: phongban exists.
- Action: PUT /api/phongban/:id.
- Expected Result: 200 OK, row updated.

## PB-006: Delete phong ban
- Preconditions: phongban exists.
- Action: DELETE /api/phongban/:id.
- Expected Result: 200 OK, row deleted.
