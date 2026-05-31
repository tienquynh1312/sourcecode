# KhoaHocUiTest

## KH-FE-001: Validate year range
- Preconditions: Khoa hoc modal open.
- Action: Set `nam_ket_thuc <= nam_bat_dau`.
- Expected Result: Error notification and block submit.
- **Automated**:
  - WB-FE-012 — validateKhoaHocYears invalid — PASS
  - WB-FE-013 — validateKhoaHocYears valid — PASS

## KH-FE-002: Create khoa hoc
- Preconditions: CTDT exists.
- Action: Submit valid year range.
- Expected Result: Row appears.
- **Automated**: Chưa (manual / E2E)

## KH-FE-003: Edit khoa hoc
- Preconditions: Row exists.
- Action: Edit and save.
- Expected Result: Row updates.
- **Automated**: Chưa (manual / E2E)

## KH-FE-004: Delete khoa hoc
- Preconditions: Row exists.
- Action: Delete row.
- Expected Result: Row removed.
- **Automated**: Chưa (manual / E2E)
