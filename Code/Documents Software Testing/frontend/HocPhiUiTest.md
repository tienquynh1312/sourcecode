# HocPhiUiTest

## HPF-FE-001: Load hoc phi dashboard
- Preconditions: Hoc phi screen open.
- Action: Open section.
- Expected Result: Latest config per CTDT is displayed.
- **Automated**: Chưa (manual / E2E)

## HPF-FE-002: Create hoc phi config
- Preconditions: CTDT exists.
- Action: Add new hoc phi config.
- Expected Result: Table refreshes with new config.
- **Automated**: Chưa (manual / E2E)

## HPF-FE-003: Update hoc phi config
- Preconditions: Config exists.
- Action: Edit config.
- Expected Result: Row updates.
- **Automated**: Chưa (manual / E2E)

## HPF-FE-004: Reject invalid gia tin chi
- Preconditions: Modal open.
- Action: Set `gia_tin_chi <= 0`.
- Expected Result: Error notification.
- **Automated**:
  - WB-FE-010 — validateHocPhiForm invalid — PASS
  - WB-FE-011 — validateHocPhiForm valid — PASS

## HPF-FE-005: Delete hoc phi config
- Preconditions: Config exists.
- Action: Delete row.
- Expected Result: Row removed.
- **Automated**: Chưa (manual / E2E)
