# Frontend Test Status - QLDT

## Overview
- **Layer**: UI (ycphanmem.html / ycphanmem.js)
- **Test types**: Manual UI + Automated (Jest + jsdom)
- **Automation command**: `npm run test:frontend`
- **Source code tested**: `utils/frontend.js`, `utils/frontend-ui.js`

## Automated Coverage (21 tests)

| Module | Whitebox | Blackbox | File doc |
|--------|----------|----------|----------|
| Navigation | WB-FE-001 → 005 | BB-FE-NAV-001 → 005 | NavigationUiTest.md |
| Phòng ban | WB-FE-006 → 009 | BB-FE-PB-001, BB-FE-PB-002, BB-FE-NOTIF-001 | PhongBanUiTest.md |
| Học phí | WB-FE-010, WB-FE-011 | — | HocPhiUiTest.md |
| Khóa học | WB-FE-012, WB-FE-013 | — | KhoaHocUiTest.md |

## Manual Only (chưa automate)

- Modal CRUD: Nhân sự, Giảng viên, Khoa, Học phần, KKT, Ngành học, CTĐT
- Gọi API thật từ browser
- Animation xóa row, reload bảng sau submit

## Test Files

```
tests/whitebox/frontend.test.js       — 13 whitebox tests
tests/blackbox/frontend.navigation.test.js — 8 blackbox tests
tests/helpers/domFixture.js           — HTML fixture
```

## Mapping tài liệu

- Tổng hợp: `Test_Cases_Frontend.md`
- Chi tiết từng module: `frontend/*.md` (tương tự `backend/*.md`)

## Last Run

- **Total frontend automated**: 21
- **Pass rate**: 100%
