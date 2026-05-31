# GiangVienUiTest

## GV-FE-001: Open add giang vien modal
- Preconditions: Khoa list available.
- Action: Click "Them giang vien".
- Expected Result: Modal opens with khoa dropdown.
- **Automated**: Chưa (manual / E2E)

## GV-FE-002: Validate required fields
- Preconditions: Modal open.
- Action: Submit with missing email.
- Expected Result: Error notification.
- **Automated**: Chưa (manual / E2E)

## GV-FE-003: Create giang vien
- Preconditions: Unique `id_giangvien`.
- Action: Submit valid form.
- Expected Result: Row appears.
- **Automated**: Chưa (manual / E2E)

## GV-FE-004: Edit giang vien
- Preconditions: Row exists.
- Action: Change role or khoa.
- Expected Result: Row updates; khoa list refreshes if truong khoa.
- **Automated**: Chưa (manual / E2E)

## GV-FE-005: Delete giang vien
- Preconditions: Row exists.
- Action: Click delete.
- Expected Result: Row removed.
- **Automated**: Chưa (manual / E2E)
