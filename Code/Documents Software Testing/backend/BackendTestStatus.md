# Backend Test Status - QLDT

## Tổng quan tài liệu

| File | Số test case | Ghi chú |
|------|--------------|---------|
| `Test_Cases_Backend.md` | ~51 | Tổng hợp toàn bộ API |
| `backend/*.md` | ~53 | Chi tiết 10 module (đủ endpoint CRUD) |

**Kết luận tài liệu manual:** Đủ để test thủ công / Postman — mọi API trong `app.js` đều có case mô tả.

## Automated vs Documented

| Module | File MD | Documented | Automated (Jest) | Tỷ lệ |
|--------|---------|------------|------------------|-------|
| Phòng ban | PhongBanApiTest.md | 6 | 6 (BB-PB-001→006) | 100% |
| Nhân sự | NhanSuApiTest.md | 7 | 5 (thiếu NS-004→007 trưởng phòng) | ~71% |
| Giảng viên | GiangVienApiTest.md | 5 | 0 | 0% |
| Khoa | KhoaApiTest.md | 4 | 0 | 0% |
| Học phần | HocPhanApiTest.md | 5 | 5 (thiếu HP-004 PUT) | ~80% |
| Khối KT | KhoiKienThucApiTest.md | 5 | 0 | 0% |
| Ngành học | NganhHocApiTest.md | 5 | 0 | 0% |
| CTĐT | CTDTApiTest.md | 6 | 2 (CTDT-004, 002) | ~33% |
| Khóa học | KhoaHocApiTest.md | 5 | 2 (KH-001, 002) | ~40% |
| Học phí | HocPhiApiTest.md | 7 | 3 (HPF-006, 004, 002) | ~43% |

**Tổng automated blackbox API:** 23 test  
**Tổng whitebox backend:** 14 test (`validators`, `hocphan`)  
**Tổng:** 37 test — chưa phủ hết ~53 case trong MD

## Thiếu / chưa khớp giữa các file MD

1. **Test_Cases_Backend.md** thiếu so với `backend/*.md`:
   - KKT-001 GET list (có trong KhoiKienThucApiTest.md)
   - NH-001 GET list (có trong NganhHocApiTest.md)
   - KH-001 GET list (có trong KhoaHocApiTest.md)
   - HPF-003 GET `/api/hocphi/ctdt-list` (có trong HocPhiApiTest.md)

2. **Chưa có cột trạng thái automate** trong từng `backend/*ApiTest.md` (frontend đã có).

3. **Logic đặc biệt** có trong MD nhưng chưa có test code:
   - NS-004 → NS-007: trưởng phòng
   - GV-003 → GV-004: trưởng khoa
   - CTDT-003, 005, 006: tạo/sửa/xóa đầy đủ
   - HPF-001, 004, 005, 007

4. **KH-003** (năm kết thúc ≤ năm bắt đầu): API `app.js` chưa validate — chỉ có whitebox `validators.js`, chưa reject 400 từ API.

## Khuyến nghị

| Mức độ | Việc cần làm |
|--------|----------------|
| Đủ cho báo cáo manual | Có — dùng `backend/*.md` + Postman |
| Đủ cho CI tự động | Chưa — cần thêm ~20–30 test blackbox |
| Đồng bộ tài liệu | Cập nhật `Test_Cases_Backend.md` bổ sung 4 case thiếu |

## Lệnh chạy test

```bash
npm run test:blackbox   # API blackbox
npm run test:whitebox   # logic utils
npm test              # tất cả 58 test
```
