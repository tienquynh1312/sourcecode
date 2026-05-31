# Detailed Test Cases - Backend (QLDT)

This document lists backend API test cases with clear preconditions, actions, and expected results.

> **Chi tiết từng module + trạng thái automate**: xem [`backend/BackendTestStatus.md`](backend/BackendTestStatus.md)

## 1. Phong Ban API

### PB-001: Get phong ban list
- **Preconditions**: DB has at least one phongban row.
- **Action**: GET `/api/phongban`.
- **Expected Result**: HTTP 200. Array sorted by `id_phongban` desc.

### PB-002: Create phong ban successfully
- **Preconditions**: `id_phongban` does not exist.
- **Action**: POST `/api/phongban` with required fields.
- **Expected Result**: HTTP 200, `success=true`, row created.

### PB-003: Reject missing fields
- **Preconditions**: None.
- **Action**: POST `/api/phongban` with missing `ten_phongban` or `email_phongban`.
- **Expected Result**: HTTP 400, error message.

### PB-004: Reject duplicate id
- **Preconditions**: `id_phongban` already exists.
- **Action**: POST `/api/phongban` with same `id_phongban`.
- **Expected Result**: HTTP 400, error message.

### PB-005: Update phong ban
- **Preconditions**: Phong ban exists.
- **Action**: PUT `/api/phongban/:id` with new fields.
- **Expected Result**: HTTP 200, row updated.

### PB-006: Delete phong ban
- **Preconditions**: Phong ban exists.
- **Action**: DELETE `/api/phongban/:id`.
- **Expected Result**: HTTP 200, row deleted.

## 2. Nhan Su API

### NS-001: Get nhan su list
- **Preconditions**: DB has nhansu rows.
- **Action**: GET `/api/nhansu`.
- **Expected Result**: HTTP 200, joined with `phongban`.

### NS-002: Create nhan su
- **Preconditions**: `id_nhanvien` does not exist.
- **Action**: POST `/api/nhansu` with required fields.
- **Expected Result**: HTTP 200, row created.

### NS-003: Reject duplicate nhan vien id
- **Preconditions**: `id_nhanvien` exists.
- **Action**: POST `/api/nhansu` with same `id_nhanvien`.
- **Expected Result**: HTTP 400.

### NS-004: Assign truong phong
- **Preconditions**: Phong ban exists; no truong phong required.
- **Action**: POST `/api/nhansu` with `chucvu=Truong phong` and `id_phongban`.
- **Expected Result**: `phongban.truong_phong` updated to new name.

### NS-005: Change role away from truong phong
- **Preconditions**: Nhan su currently is `Truong phong` in PB A.
- **Action**: PUT `/api/nhansu/:id` to change role to `Nhan vien`.
- **Expected Result**: PB A `truong_phong` cleared.

### NS-006: Move truong phong to new PB
- **Preconditions**: Nhan su is `Truong phong` of PB A.
- **Action**: PUT `/api/nhansu/:id` with `id_phongban=PB B` and `chucvu=Truong phong`.
- **Expected Result**: PB A cleared, PB B updated.

### NS-007: Delete nhan su
- **Preconditions**: Nhan su exists.
- **Action**: DELETE `/api/nhansu/:id`.
- **Expected Result**: HTTP 200, row deleted. If truong phong, PB updated.

## 3. Giang Vien API

### GV-001: Get giang vien list
- **Preconditions**: DB has giangvien rows.
- **Action**: GET `/api/giangvien`.
- **Expected Result**: HTTP 200, joined with `khoa`.

### GV-002: Create giang vien
- **Preconditions**: `id_giangvien` does not exist.
- **Action**: POST `/api/giangvien` with required fields.
- **Expected Result**: HTTP 200, row created.

### GV-003: Assign truong khoa
- **Preconditions**: Khoa exists.
- **Action**: POST `/api/giangvien` with `chucvu=Truong khoa` and `id_khoa`.
- **Expected Result**: `khoa.truong_khoa` updated.

### GV-004: Change role away from truong khoa
- **Preconditions**: Giang vien is `Truong khoa` of Khoa A.
- **Action**: PUT `/api/giangvien/:id` to change role.
- **Expected Result**: Khoa A `truong_khoa` cleared.

### GV-005: Delete giang vien
- **Preconditions**: Giang vien exists.
- **Action**: DELETE `/api/giangvien/:id`.
- **Expected Result**: HTTP 200, row deleted. If truong khoa, Khoa updated.

## 4. Khoa API

### K-001: Get khoa list
- **Preconditions**: DB has khoa rows.
- **Action**: GET `/api/khoa`.
- **Expected Result**: HTTP 200.

### K-002: Create khoa
- **Preconditions**: `id_khoa` does not exist.
- **Action**: POST `/api/khoa` with required fields.
- **Expected Result**: HTTP 200, row created.

### K-003: Update khoa
- **Preconditions**: Khoa exists.
- **Action**: PUT `/api/khoa/:id`.
- **Expected Result**: HTTP 200.

### K-004: Delete khoa
- **Preconditions**: Khoa exists.
- **Action**: DELETE `/api/khoa/:id`.
- **Expected Result**: HTTP 200 or FK error if still referenced.

## 5. Hoc Phan API

### HP-001: Get hoc phan list
- **Preconditions**: DB has hocphan rows.
- **Action**: GET `/api/hocphan`.
- **Expected Result**: HTTP 200, joined data for prerequisites.

### HP-002: Create hoc phan with null relations
- **Preconditions**: `ma_hocphan` does not exist.
- **Action**: POST `/api/hocphan` with `hp_tien_quyet="khong"` or empty.
- **Expected Result**: Relations stored as NULL.

### HP-003: Reject duplicate ma hoc phan
- **Preconditions**: `ma_hocphan` exists.
- **Action**: POST `/api/hocphan` with same `ma_hocphan`.
- **Expected Result**: HTTP 400.

### HP-004: Update hoc phan
- **Preconditions**: Hoc phan exists.
- **Action**: PUT `/api/hocphan/:ma`.
- **Expected Result**: HTTP 200.

### HP-005: Delete hoc phan
- **Preconditions**: Hoc phan exists.
- **Action**: DELETE `/api/hocphan/:ma`.
- **Expected Result**: HTTP 200.

## 6. Khoi Kien Thuc API

### KKT-001: Get KKT list
- **Preconditions**: DB has khoi_kien_thuc rows.
- **Action**: GET `/api/khoikienthuc`.
- **Expected Result**: HTTP 200.

### KKT-002: Create KKT
- **Preconditions**: `ma_kkt` does not exist.
- **Action**: POST `/api/khoikienthuc` with required fields.
- **Expected Result**: HTTP 200.

### KKT-003: Reject missing fields
- **Preconditions**: None.
- **Action**: POST `/api/khoikienthuc` missing `tin_chi_toi_thieu`.
- **Expected Result**: HTTP 400.

### KKT-004: Update KKT
- **Preconditions**: KKT exists.
- **Action**: PUT `/api/khoikienthuc/:ma`.
- **Expected Result**: HTTP 200.

### KKT-005: Delete KKT
- **Preconditions**: KKT exists.
- **Action**: DELETE `/api/khoikienthuc/:ma`.
- **Expected Result**: HTTP 200.

## 7. Nganh Hoc API

### NH-001: Get nganh hoc list
- **Preconditions**: DB has nganhhoc rows.
- **Action**: GET `/api/nganhhoc`.
- **Expected Result**: HTTP 200, joined with `khoa`.

### NH-002: Create nganh hoc
- **Preconditions**: Khoa exists.
- **Action**: POST `/api/nganhhoc`.
- **Expected Result**: HTTP 200.

### NH-003: Reject missing khoa
- **Preconditions**: None.
- **Action**: POST `/api/nganhhoc` with invalid `id_khoa`.
- **Expected Result**: HTTP 400.

### NH-004: Update nganh hoc
- **Preconditions**: Nganh exists.
- **Action**: PUT `/api/nganhhoc/:id`.
- **Expected Result**: HTTP 200.

### NH-005: Delete nganh hoc
- **Preconditions**: Nganh exists.
- **Action**: DELETE `/api/nganhhoc/:id`.
- **Expected Result**: HTTP 200.

## 8. CTDT API

### CTDT-001: Get CTDT list
- **Preconditions**: DB has CTDT.
- **Action**: GET `/api/ctdt`.
- **Expected Result**: HTTP 200 with `so_kkt`.

### CTDT-002: Get CTDT detail
- **Preconditions**: CTDT exists.
- **Action**: GET `/api/ctdt/:ma`.
- **Expected Result**: HTTP 200 with KKT and hoc phan list.

### CTDT-003: Create CTDT with KKT
- **Preconditions**: Khoa and KKT exist.
- **Action**: POST `/api/ctdt` with `khoi_kien_thuc` array.
- **Expected Result**: HTTP 200.

### CTDT-004: Reject CTDT without KKT
- **Preconditions**: Khoa exists.
- **Action**: POST `/api/ctdt` with empty `khoi_kien_thuc`.
- **Expected Result**: HTTP 400.

### CTDT-005: Update CTDT
- **Preconditions**: CTDT exists.
- **Action**: PUT `/api/ctdt/:ma`.
- **Expected Result**: HTTP 200.

### CTDT-006: Delete CTDT
- **Preconditions**: CTDT exists.
- **Action**: DELETE `/api/ctdt/:ma`.
- **Expected Result**: HTTP 200.

## 9. Khoa Hoc API

### KH-001: Get khoa hoc list
- **Preconditions**: DB has khoahoc rows.
- **Action**: GET `/api/khoahoc`.
- **Expected Result**: HTTP 200.

### KH-002: Create khoa hoc
- **Preconditions**: CTDT exists.
- **Action**: POST `/api/khoahoc` with valid year range.
- **Expected Result**: HTTP 200.

### KH-003: Reject invalid year range
- **Preconditions**: None.
- **Action**: POST `/api/khoahoc` with `nam_ket_thuc <= nam_bat_dau`.
- **Expected Result**: HTTP 400 or client-side block if validated before.

### KH-004: Update khoa hoc
- **Preconditions**: Khoa hoc exists.
- **Action**: PUT `/api/khoahoc/:id`.
- **Expected Result**: HTTP 200.

### KH-005: Delete khoa hoc
- **Preconditions**: Khoa hoc exists.
- **Action**: DELETE `/api/khoahoc/:id`.
- **Expected Result**: HTTP 200.

## 10. Hoc Phi API

### HPF-001: Get hoc phi list
- **Preconditions**: Hoc phi config exists.
- **Action**: GET `/api/hocphi`.
- **Expected Result**: HTTP 200.

### HPF-002: Get hoc phi tinh by CTDT
- **Preconditions**: CTDT exists.
- **Action**: GET `/api/hocphi/tinh/:ma_ctdt`.
- **Expected Result**: HTTP 200 with KKT data.

### HPF-003: Get CTDT list with credits
- **Preconditions**: CTDT exists.
- **Action**: GET `/api/hocphi/ctdt-list`.
- **Expected Result**: HTTP 200 with `tong_tin_chi` values.

### HPF-004: Create hoc phi config
- **Preconditions**: CTDT exists, `gia_tin_chi > 0`.
- **Action**: POST `/api/hocphi`.
- **Expected Result**: HTTP 200, insert new record.

### HPF-005: Update hoc phi config when exists
- **Preconditions**: Same `ma_ctdt` + `nam_hoc` already exists.
- **Action**: POST `/api/hocphi` with same year.
- **Expected Result**: HTTP 200, record updated.

### HPF-006: Reject invalid gia tin chi
- **Preconditions**: None.
- **Action**: POST `/api/hocphi` with `gia_tin_chi <= 0`.
- **Expected Result**: HTTP 400.

### HPF-007: Delete hoc phi config
- **Preconditions**: Hoc phi config exists.
- **Action**: DELETE `/api/hocphi/:id`.
- **Expected Result**: HTTP 200.
