# PhongBanUiTest

## PB-FE-001: Open add phong ban modal
- Preconditions: Phong ban screen open.
- Action: Click "Them phong ban".
- Expected Result: Modal appears with required fields.
- **Automated**: Chưa (manual / E2E)

## PB-FE-002: Validate required fields
- Preconditions: Modal open.
- Action: Submit with missing `ten_phongban` or `email_phongban`.
- Expected Result: Error notification shown, no API call succeeds.
- **Automated**:
  - WB-FE-008 — validatePhongBanForm thiếu trường — PASS
  - WB-FE-009 — validatePhongBanForm đủ trường — PASS
  - BB-FE-NOTIF-001 — showNotification error — PASS

## PB-FE-003: Create phong ban
- Preconditions: Unique `id_phongban`.
- Action: Fill form and submit.
- Expected Result: Table refreshes with new row.
- **Automated**: Chưa (manual / E2E)

## PB-FE-004: Edit phong ban
- Preconditions: At least one row exists.
- Action: Click "Sua" and update fields.
- Expected Result: Row updates; notification success.
- **Automated**: Chưa (manual / E2E)

## PB-FE-005: Delete phong ban
- Preconditions: Row exists.
- Action: Click "Xoa" and confirm.
- Expected Result: Row removed with animation.
- **Automated**: Chưa (manual / E2E)

## PB-FE-006: Search phong ban
- Preconditions: Multiple rows exist.
- Action: Enter search term.
- Expected Result: Rows filtered by text.
- **Automated**:
  - WB-FE-006 — filterRowsBySearchTerm — PASS
  - WB-FE-007 — từ khóa rỗng — PASS
  - BB-FE-PB-001 — searchTable lọc bảng — PASS
  - BB-FE-PB-002 — xóa filter — PASS
