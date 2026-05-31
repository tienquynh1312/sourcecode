# Dự án Kiểm thử QLDT (Whitebox & Blackbox)

Automated test suite cho **Hệ thống Quản lý Đào tạo (QLDT)**.

## Cấu trúc

```
tests/
├── blackbox/
│   ├── phongban.api.test.js      # Backend API
│   ├── frontend.navigation.test.js  # Frontend DOM
│   └── ...
├── whitebox/
│   ├── hocphan.test.js           # Backend logic
│   ├── frontend.test.js          # Frontend validation
│   └── validators.test.js
├── helpers/
│   ├── mockDb.js
│   └── domFixture.js             # HTML fixture cho frontend
```

## Phân biệt Whitebox vs Blackbox

| Loại | Mục tiêu | Ví dụ trong project |
|------|---------|---------------------|
| **Whitebox** | Biết cấu trúc code, test từng nhánh logic | `processHocPhanValue()`, `validateHocPhiForm()`, `getSectionTitle()` |
| **Blackbox** | Chỉ biết spec, test qua giao diện công khai | `POST /api/phongban`, `showinfo('phongban')`, `searchTable()` |

## Cài đặt & chạy

```bash
cd Code/Code
npm install
npm test                  # Chạy tất cả tests
npm run test:whitebox     # Chỉ whitebox
npm run test:blackbox     # Chỉ blackbox
npm run test:frontend    # Chỉ frontend (whitebox + blackbox DOM)
```

## Mapping test case tài liệu

- Backend blackbox → `Test_Cases_Backend.md`
- Frontend blackbox → `Test_Cases_Frontend.md` (NAV, PB-FE, search, notification)
- Whitebox → logic trong `utils/` và `utils/frontend.js`

## Lưu ý

- Blackbox tests dùng **mock MySQL** — không cần database thật khi chạy test.
- Để test integration với MySQL thật, chạy server (`node app.js`) và dùng Postman theo tài liệu test cases.
