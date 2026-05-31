# NhanSuUiTest

## NS-FE-001: Open add nhan su modal
- Preconditions: Nhan su screen open; phong ban list available.
- Action: Click "Them nhan su".
- Expected Result: Modal appears with phong ban dropdown.
- **Automated**: Chưa (manual / E2E)

## NS-FE-002: Validate required fields
- Preconditions: Modal open.
- Action: Submit with missing fields.
- Expected Result: Error notification.
- **Automated**: Chưa (manual / E2E)

## NS-FE-003: Create nhan su
- Preconditions: Unique `id_nhanvien`.
- Action: Submit valid form.
- Expected Result: Table refreshes; row appears.
- **Automated**: Chưa (manual / E2E)

## NS-FE-004: Edit nhan su
- Preconditions: Row exists.
- Action: Update role or phong ban.
- Expected Result: Row updates; if truong phong, phong ban list refreshes.
- **Automated**: Chưa (manual / E2E)

## NS-FE-005: Delete nhan su
- Preconditions: Row exists.
- Action: Click delete.
- Expected Result: Row removed; if truong phong, phong ban table reloads.
- **Automated**: Chưa (manual / E2E)
