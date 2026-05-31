# GiangVienApiTest

## GV-001: Get giang vien list
- Preconditions: DB has giangvien rows.
- Action: GET /api/giangvien.
- Expected Result: 200 OK, joined khoa info.

## GV-002: Create giang vien
- Preconditions: id_giangvien does not exist.
- Action: POST /api/giangvien with required fields.
- Expected Result: 200 OK, row created.

## GV-003: Assign truong khoa
- Preconditions: khoa exists.
- Action: POST /api/giangvien with chucvu=Truong khoa.
- Expected Result: khoa.truong_khoa updated.

## GV-004: Change role away from truong khoa
- Preconditions: giangvien is truong khoa of Khoa A.
- Action: PUT /api/giangvien/:id with chucvu=Giang vien.
- Expected Result: Khoa A truong_khoa cleared.

## GV-005: Delete giang vien
- Preconditions: giangvien exists.
- Action: DELETE /api/giangvien/:id.
- Expected Result: 200 OK, row deleted; Khoa updated if needed.
