# NavigationUiTest

## NAV-001: Open dashboard by default
- Preconditions: App loaded.
- Action: Open home page.
- Expected Result: Section `dashboard` is active.
- **Automated**: BB-FE-NAV-001 (`tests/blackbox/frontend.navigation.test.js`) — PASS

## NAV-002: Toggle dropdown menus
- Preconditions: Sidebar visible.
- Action: Click dropdown menu items.
- Expected Result: Correct submenu opens/closes; only one dropdown expanded at a time.
- **Automated**:
  - BB-FE-NAV-003 — mở/đóng dropdown — PASS
  - BB-FE-NAV-004 — chỉ một dropdown mở — PASS
  - WB-FE-004, WB-FE-005 — map dropdown ID — PASS

## NAV-003: Switch section via showinfo
- Preconditions: App loaded.
- Action: Call `showinfo('phongban')`.
- Expected Result: Section `phongban` active, `dashboard` inactive.
- **Automated**: BB-FE-NAV-002 — PASS

## NAV-004: Create section when ID missing
- Preconditions: Section ID chưa có trong DOM.
- Action: Call `showinfo('hocphi')`.
- Expected Result: Section mới được tạo với tiêu đề đúng.
- **Automated**:
  - BB-FE-NAV-005 — PASS
  - WB-FE-001, WB-FE-002, WB-FE-003 — getSectionTitle — PASS
