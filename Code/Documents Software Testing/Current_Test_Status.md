# Current Test Status - QLDT

## Overview
- **Application**: He thong quan ly dao tao (QLDT)
- **Test Type**: Manual + API checks + Automated (Jest)
- **Automation**: Jest + Supertest + jsdom (`npm test`)
- **Environment**: Local (Node.js + MySQL)
- **Data Source**: database.sql
- **Status**: In progress

## Current Status
- **Planned test suites**: Backend API + Frontend UI
- **Executed tests**: 58 automated (backend 37 + frontend 21)
- **Pass rate**: 100% (last run)

## Documentation

| Layer | Tổng hợp | Chi tiết từng module |
|-------|----------|----------------------|
| Backend | `Test_Cases_Backend.md` | `backend/*.md`, `backend/BackendTestStatus.md` |
| Frontend | `Test_Cases_Frontend.md` | `frontend/*.md` |

## Coverage Focus
- **Core CRUD flows**: phongban, nhansu, giangvien, khoa, hocphan, khoi kien thuc, nganh hoc, CTDT, khoa hoc, hoc phi
- **Date logic**: nam bat dau/ket thuc (khoa hoc), nam hoc (hoc phi)
- **Integrity rules**: truong phong, truong khoa, khoa/nganh relation
- **Frontend automated**: navigation, search, validation (xem `frontend/FrontendTestStatus.md`)

## Gaps / Risks
- Automated suite uses mocked DB (not full MySQL integration)
- Frontend CRUD modal chưa automate (chỉ manual / E2E)
- No load or concurrency tests
- No role-based access or auth layer

## Next Steps
1. Chạy `npm run test:frontend` cho frontend automated
2. Execute manual tests từ `frontend/*.md` và `Test_Cases_Frontend.md`
3. Execute API tests từ `backend/*.md` hoặc Postman
4. Capture failures in a defect log
