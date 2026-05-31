# NhanSuApiTest

## NS-001: Get nhan su list
- Preconditions: DB has nhansu rows.
- Action: GET /api/nhansu.
- Expected Result: 200 OK, joined phongban info.

## NS-002: Create nhan su
- Preconditions: id_nhanvien does not exist.
- Action: POST /api/nhansu with required fields.
- Expected Result: 200 OK, row created.

## NS-003: Reject duplicate id
- Preconditions: id_nhanvien exists.
- Action: POST /api/nhansu with same id.
- Expected Result: 400 BAD_REQUEST.

## NS-004: Assign truong phong
- Preconditions: phongban exists.
- Action: POST /api/nhansu with chucvu=Truong phong.
- Expected Result: phongban.truong_phong updated.

## NS-005: Change role away from truong phong
- Preconditions: nhansu is truong phong in PB A.
- Action: PUT /api/nhansu/:id with chucvu=Nhan vien.
- Expected Result: PB A truong_phong cleared.

## NS-006: Move truong phong to new PB
- Preconditions: nhansu is truong phong in PB A.
- Action: PUT /api/nhansu/:id with PB B and chucvu=Truong phong.
- Expected Result: PB A cleared, PB B updated.

## NS-007: Delete nhan su
- Preconditions: nhansu exists.
- Action: DELETE /api/nhansu/:id.
- Expected Result: 200 OK, row deleted; PB updated if needed.
