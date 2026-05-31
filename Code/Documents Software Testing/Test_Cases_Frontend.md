# Detailed Test Cases - Frontend (QLDT)

This document lists UI test cases for the QLDT web interface.

> **Chi tiết từng module + trạng thái automate**: xem thư mục [`frontend/`](frontend/FrontendTestStatus.md)
> (tương tự `backend/` cho API tests)

## 1. Navigation

### NAV-001: Open dashboard by default
- **Preconditions**: App loaded.
- **Action**: Open home page.
- **Expected Result**: Section `dashboard` is active.

### NAV-002: Toggle dropdown menus
- **Preconditions**: Sidebar visible.
- **Action**: Click dropdown menu items.
- **Expected Result**: Correct submenu opens and closes; only one dropdown expanded at a time.

## 2. Phong Ban UI

### PB-FE-001: Open add phong ban modal
- **Preconditions**: Phong ban screen open.
- **Action**: Click "Them phong ban".
- **Expected Result**: Modal appears with required fields.

### PB-FE-002: Validate required fields
- **Preconditions**: Modal open.
- **Action**: Submit with missing `ten_phongban` or `email_phongban`.
- **Expected Result**: Error notification shown, no API call succeeds.

### PB-FE-003: Create phong ban
- **Preconditions**: Unique `id_phongban`.
- **Action**: Fill form and submit.
- **Expected Result**: Table refreshes with new row.

### PB-FE-004: Edit phong ban
- **Preconditions**: At least one row exists.
- **Action**: Click "Sua" and update fields.
- **Expected Result**: Row updates; notification success.

### PB-FE-005: Delete phong ban
- **Preconditions**: Row exists.
- **Action**: Click "Xoa" and confirm.
- **Expected Result**: Row removed with animation.

### PB-FE-006: Search phong ban
- **Preconditions**: Multiple rows exist.
- **Action**: Enter search term.
- **Expected Result**: Rows filtered by text.

## 3. Nhan Su UI

### NS-FE-001: Open add nhan su modal
- **Preconditions**: Nhan su screen open; phong ban list available.
- **Action**: Click "Them nhan su".
- **Expected Result**: Modal appears with phong ban dropdown.

### NS-FE-002: Validate required fields
- **Preconditions**: Modal open.
- **Action**: Submit with missing fields.
- **Expected Result**: Error notification.

### NS-FE-003: Create nhan su
- **Preconditions**: Unique `id_nhanvien`.
- **Action**: Submit valid form.
- **Expected Result**: Table refreshes; row appears.

### NS-FE-004: Edit nhan su
- **Preconditions**: Row exists.
- **Action**: Update role or phong ban.
- **Expected Result**: Row updates; if role is truong phong, phong ban list refreshes.

### NS-FE-005: Delete nhan su
- **Preconditions**: Row exists.
- **Action**: Click delete.
- **Expected Result**: Row removed; if truong phong, phong ban table reloads.

## 4. Giang Vien UI

### GV-FE-001: Open add giang vien modal
- **Preconditions**: Khoa list available.
- **Action**: Click "Them giang vien".
- **Expected Result**: Modal opens with khoa dropdown.

### GV-FE-002: Validate required fields
- **Preconditions**: Modal open.
- **Action**: Submit with missing email.
- **Expected Result**: Error notification.

### GV-FE-003: Create giang vien
- **Preconditions**: Unique `id_giangvien`.
- **Action**: Submit valid form.
- **Expected Result**: Row appears.

### GV-FE-004: Edit giang vien
- **Preconditions**: Row exists.
- **Action**: Change role or khoa.
- **Expected Result**: Row updates; khoa list refreshes if truong khoa.

### GV-FE-005: Delete giang vien
- **Preconditions**: Row exists.
- **Action**: Click delete.
- **Expected Result**: Row removed.

## 5. Khoa UI

### K-FE-001: Create khoa
- **Preconditions**: Khoa screen open.
- **Action**: Open modal and submit valid data.
- **Expected Result**: Row appears.

### K-FE-002: Edit khoa
- **Preconditions**: Row exists.
- **Action**: Edit and save.
- **Expected Result**: Row updates.

### K-FE-003: Delete khoa
- **Preconditions**: Row exists.
- **Action**: Delete and confirm.
- **Expected Result**: Row removed or error if constrained.

## 6. Hoc Phan UI

### HP-FE-001: Create hoc phan with empty prerequisites
- **Preconditions**: Hoc phan screen open.
- **Action**: Submit with `hp_tien_quyet` empty.
- **Expected Result**: Created successfully; values stored as empty/NULL.

### HP-FE-002: Edit hoc phan
- **Preconditions**: Row exists.
- **Action**: Edit credits and save.
- **Expected Result**: Row updates.

### HP-FE-003: Delete hoc phan
- **Preconditions**: Row exists.
- **Action**: Delete row.
- **Expected Result**: Row removed.

## 7. Khoi Kien Thuc UI

### KKT-FE-001: Create KKT
- **Preconditions**: KKT screen open.
- **Action**: Submit valid fields.
- **Expected Result**: Row appears.

### KKT-FE-002: Validate credits
- **Preconditions**: Modal open.
- **Action**: Submit with missing credits.
- **Expected Result**: Error notification.

### KKT-FE-003: Edit KKT
- **Preconditions**: Row exists.
- **Action**: Edit fields.
- **Expected Result**: Row updates.

## 8. Nganh Hoc UI

### NH-FE-001: Create nganh hoc
- **Preconditions**: Khoa list available.
- **Action**: Add nganh hoc.
- **Expected Result**: Row appears.

### NH-FE-002: Reject missing khoa
- **Preconditions**: Modal open.
- **Action**: Submit without khoa.
- **Expected Result**: Error notification.

### NH-FE-003: Edit nganh hoc
- **Preconditions**: Row exists.
- **Action**: Edit fields.
- **Expected Result**: Row updates.

### NH-FE-004: Delete nganh hoc
- **Preconditions**: Row exists.
- **Action**: Delete row.
- **Expected Result**: Row removed.

## 9. CTDT UI

### CTDT-FE-001: Create CTDT with KKT
- **Preconditions**: Khoa and KKT list available.
- **Action**: Add CTDT and include at least one KKT.
- **Expected Result**: CTDT appears in list.

### CTDT-FE-002: Reject missing KKT
- **Preconditions**: Modal open.
- **Action**: Submit without KKT.
- **Expected Result**: Error notification.

### CTDT-FE-003: Edit CTDT
- **Preconditions**: CTDT exists.
- **Action**: Edit and save.
- **Expected Result**: CTDT updates.

### CTDT-FE-004: Delete CTDT
- **Preconditions**: CTDT exists.
- **Action**: Delete CTDT.
- **Expected Result**: CTDT removed.

## 10. Khoa Hoc UI

### KH-FE-001: Validate year range
- **Preconditions**: Khoa hoc modal open.
- **Action**: Set `nam_ket_thuc <= nam_bat_dau`.
- **Expected Result**: Error notification and block submit.

### KH-FE-002: Create khoa hoc
- **Preconditions**: CTDT exists.
- **Action**: Submit valid year range.
- **Expected Result**: Row appears.

### KH-FE-003: Edit khoa hoc
- **Preconditions**: Row exists.
- **Action**: Edit and save.
- **Expected Result**: Row updates.

### KH-FE-004: Delete khoa hoc
- **Preconditions**: Row exists.
- **Action**: Delete row.
- **Expected Result**: Row removed.

## 11. Hoc Phi UI

### HPF-FE-001: Load hoc phi dashboard
- **Preconditions**: Hoc phi screen open.
- **Action**: Open section.
- **Expected Result**: Latest config per CTDT is displayed.

### HPF-FE-002: Create hoc phi config
- **Preconditions**: CTDT exists.
- **Action**: Add new hoc phi config.
- **Expected Result**: Table refreshes with new config.

### HPF-FE-003: Update hoc phi config
- **Preconditions**: Config exists.
- **Action**: Edit config.
- **Expected Result**: Row updates.

### HPF-FE-004: Reject invalid gia tin chi
- **Preconditions**: Modal open.
- **Action**: Set `gia_tin_chi <= 0`.
- **Expected Result**: Error notification.

### HPF-FE-005: Delete hoc phi config
- **Preconditions**: Config exists.
- **Action**: Delete row.
- **Expected Result**: Row removed.
