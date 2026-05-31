# 📚 HƯỚNG DẪN SỬ DỤNG HỆ THỐNG QUẢN LÝ ĐÀO TẠO

## 🚀 CÀI ĐẶT VÀ CHẠY HỆ THỐNG

### 1. Cài đặt Node.js
- Tải và cài đặt Node.js từ: https://nodejs.org/
- Kiểm tra: `node --version`

### 2. Cài đặt MySQL
- Cài đặt MySQL Server
- Tạo user và database

### 3. Cài đặt dependencies
```bash
npm install express mysql2 cors
```

### 4. Tạo database
```bash
mysql -u root -p < database.sql
```

### 5. Chạy hệ thống
```bash
node app.js
```

### 6. Truy cập hệ thống
- Mở trình duyệt: http://localhost:3000

---

## 📋 CHỨC NĂNG CHÍNH

### 🏢 **QUẢN LÝ PHÒNG BAN**
- **Xem danh sách**: Tự động tải từ database
- **Thêm mới**: Click "Thêm phòng ban" → Điền thông tin → "Lưu"
- **Sửa**: Click "Sửa" → Chỉnh sửa → "Lưu"  
- **Xóa**: Click "Xóa" → Xác nhận

**Thông tin cần nhập:**
- Tên phòng ban (bắt buộc)
- Địa chỉ (bắt buộc)
- Email (bắt buộc)
- Trưởng phòng (tùy chọn)

### 👥 **QUẢN LÝ NHÂN SỰ**
- **Xem danh sách**: Tự động tải từ database
- **Thêm mới**: Click "Thêm nhân sự" → Điền thông tin → "Lưu"
- **Sửa**: Click "Sửa" → Chỉnh sửa → "Lưu"
- **Xóa**: Click "Xóa" → Xác nhận

**Thông tin cần nhập:**
- Tên nhân viên (bắt buộc)
- Khoa (bắt buộc)
- Chức vụ (bắt buộc)
- Email (bắt buộc)
- Phòng ban (chọn từ dropdown)

### 📖 **QUẢN LÝ HỌC PHẦN**

#### **Học phần CNTT**
- **Xem**: Chọn "Học phần CNTT" từ menu
- **Thêm**: Click "Thêm học phần" → Điền thông tin → "Lưu"
- **Sửa**: Click "Sửa" → Chỉnh sửa → "Lưu"
- **Xóa**: Click "Xóa" → Xác nhận

#### **Học phần Kỹ thuật**
- Tương tự như CNTT
- Chọn "Học phần Kỹ thuật" từ menu

#### **Học phần Kinh tế**
- Tương tự như CNTT
- Chọn "Học phần Kinh tế" từ menu

#### **Học phần NN-KHXH**
- Tương tự như CNTT
- Chọn "Học phần NN-KHXH" từ menu

#### **Học phần Y-Dược**
- Tương tự như CNTT
- Chọn "Học phần Y-Dược" từ menu

**Thông tin học phần:**
- Tên học phần (bắt buộc)
- Số tín chỉ (bắt buộc)
- Loại học phần: Bắt buộc/Tự chọn
- Điều kiện tiên quyết (tùy chọn)

---

## 🎯 **HƯỚNG DẪN SỬ DỤNG CHI TIẾT**

### **Thêm dữ liệu mới:**
1. Click nút "Thêm [loại]" tương ứng
2. Điền đầy đủ thông tin bắt buộc
3. Click "Lưu" để lưu vào database
4. Hệ thống sẽ tự động refresh dữ liệu

### **Chỉnh sửa dữ liệu:**
1. Click nút "Sửa" trên dòng cần sửa
2. Chỉnh sửa thông tin trong các ô input
3. Click "Lưu" để cập nhật database
4. Click "Hủy" để bỏ qua thay đổi

### **Xóa dữ liệu:**
1. Click nút "Xóa" trên dòng cần xóa
2. Xác nhận trong hộp thoại
3. Dữ liệu sẽ bị xóa khỏi database

### **Tìm kiếm:**
- Sử dụng thanh tìm kiếm ở đầu mỗi bảng
- Nhập từ khóa và nhấn Enter
- Hệ thống sẽ lọc dữ liệu theo từ khóa

---

## ⚠️ **LƯU Ý QUAN TRỌNG**

### **Dữ liệu bắt buộc:**
- **Phòng ban**: Tên, địa chỉ, email
- **Nhân sự**: Tên, khoa, chức vụ, email
- **Học phần**: Tên, số tín chỉ, loại học phần

### **Quan hệ dữ liệu:**
- Nhân sự phải thuộc về một phòng ban
- Khi xóa phòng ban, cần xóa nhân sự trước

### **Backup dữ liệu:**
- Thường xuyên backup database
- Export dữ liệu quan trọng

---

## 🔧 **XỬ LÝ LỖI THƯỜNG GẶP**

### **Lỗi kết nối database:**
- Kiểm tra MySQL đang chạy
- Kiểm tra thông tin kết nối trong `app.js`
- Kiểm tra database `qldt` đã tồn tại

### **Lỗi thêm dữ liệu:**
- Kiểm tra đã điền đầy đủ thông tin bắt buộc
- Kiểm tra định dạng email
- Kiểm tra số tín chỉ là số nguyên

### **Lỗi hiển thị:**
- Refresh trang web
- Kiểm tra console browser (F12)
- Kiểm tra server đang chạy

---

## 🧪 **KẾ HOẠCH KIỂM THỬ (TÓM TẮT WHITE BOX + BLACK BOX)**

### ✅ **Black Box Testing (30 test cases)**
Kiểm thử theo hành vi đầu vào/đầu ra trên 7 module chính.

#### 🏢 **Module Phòng Ban (BB-01 → BB-06)**
| ID | Mục tiêu | Dữ liệu/Thao tác | Kỳ vọng |
| --- | --- | --- | --- |
| BB-01 | Thêm phòng ban hợp lệ | POST `/api/phongban` đầy đủ trường | Thêm thành công |
| BB-02 | Trùng ID phòng ban | POST với `id_phongban` đã tồn tại | Báo lỗi trùng ID |
| BB-03 | Thiếu trường bắt buộc | POST thiếu tên/địa chỉ/email | Báo lỗi bắt buộc |
| BB-04 | Email sai định dạng | POST với email sai format | Báo lỗi email |
| BB-05 | Cập nhật phòng ban hợp lệ | PUT `/api/phongban/:id` | Cập nhật thành công |
| BB-06 | Xóa phòng ban | DELETE `/api/phongban/:id` | Xóa thành công |

#### 👥 **Module Nhân Sự (BB-07 → BB-10)**
| ID | Mục tiêu | Dữ liệu/Thao tác | Kỳ vọng |
| --- | --- | --- | --- |
| BB-07 | Thêm nhân sự thường | POST `chucvu` khác Trưởng phòng | Không cập nhật `truong_phong` |
| BB-08 | Thêm Trưởng phòng | POST `chucvu=Trưởng phòng` | `truong_phong` cập nhật |
| BB-09 | Đổi chức vụ Trưởng phòng → khác | PUT đổi `chucvu` | `truong_phong` bị xóa |
| BB-10 | Xóa Trưởng phòng | DELETE nhân sự | `truong_phong` bị xóa |

#### 📖 **Module Học Phần (BB-11 → BB-14)**
| ID | Mục tiêu | Dữ liệu/Thao tác | Kỳ vọng |
| --- | --- | --- | --- |
| BB-11 | Xử lý “Không” → NULL | POST `hp_tien_quyet="Không"` | Lưu NULL |
| BB-12 | Xử lý “null” → NULL | POST `hp_song_hanh="null"` | Lưu NULL |
| BB-13 | Tham chiếu HP không tồn tại | POST `hp_tien_quyet` sai | Báo lỗi tham chiếu |
| BB-14 | Cập nhật HP với tham chiếu sai | PUT `hp_hoc_truoc` sai | Báo lỗi tham chiếu |

#### 💰 **Module Học Phí (BB-15 → BB-18)**
| ID | Mục tiêu | Dữ liệu/Thao tác | Kỳ vọng |
| --- | --- | --- | --- |
| BB-15 | Thêm học phí hợp lệ | POST `gia_tin_chi > 0` | Thêm thành công |
| BB-16 | Trùng năm học | POST cùng `ma_ctdt` + `nam_hoc` | Tự UPDATE |
| BB-17 | `gia_tin_chi = 0` | POST `gia_tin_chi=0` | Cho phép lưu |
| BB-18 | Công thức TC × giá tín chỉ | GET `/api/hocphi` | Tính đúng học phí |

#### 🏫 **Module Khoa (BB-19 → BB-22)**
| ID | Mục tiêu | Dữ liệu/Thao tác | Kỳ vọng |
| --- | --- | --- | --- |
| BB-19 | Thêm khoa hợp lệ | POST `/api/khoa` | Thêm thành công |
| BB-20 | Trùng ID khoa | POST `id_khoa` đã tồn tại | Báo lỗi trùng ID |
| BB-21 | Cập nhật khoa hợp lệ | PUT `/api/khoa/:id` | Cập nhật thành công |
| BB-22 | Xóa khoa | DELETE `/api/khoa/:id` | Xóa thành công |

#### 👨‍🏫 **Module Giảng Viên (BB-23 → BB-26)**
| ID | Mục tiêu | Dữ liệu/Thao tác | Kỳ vọng |
| --- | --- | --- | --- |
| BB-23 | Thêm giảng viên hợp lệ | POST `/api/giangvien` | Thêm thành công |
| BB-24 | Trùng ID giảng viên | POST `id_giangvien` đã tồn tại | Báo lỗi trùng ID |
| BB-25 | Thêm Trưởng khoa | POST `chucvu=Trưởng khoa` | `truong_khoa` cập nhật |
| BB-26 | Đổi Trưởng khoa → Giảng viên | PUT đổi `chucvu` | `truong_khoa` bị xóa |

#### 📚 **Module CTĐT (BB-27 → BB-30)**
| ID | Mục tiêu | Dữ liệu/Thao tác | Kỳ vọng |
| --- | --- | --- | --- |
| BB-27 | Thiếu khối kiến thức | POST CTĐT không có KKT | Báo lỗi bắt buộc |
| BB-28 | Thêm CTĐT đầy đủ | POST CTĐT + KKT + học phần | Thêm thành công |
| BB-29 | Cập nhật CTĐT | PUT `/api/ctdt/:ma` | Cập nhật thành công |
| BB-30 | Xóa CTĐT | DELETE `/api/ctdt/:ma` | Xóa thành công |

---

### ✅ **White Box Testing (24 test cases)**

#### 🧩 **processHocPhanValue() – 12 test cases**
| ID | Nhánh kiểm thử | Input | Output mong đợi |
| --- | --- | --- | --- |
| WB-PHV-01 | Null | `null` | `null` |
| WB-PHV-02 | Undefined | `undefined` | `null` |
| WB-PHV-03 | Chuỗi rỗng | `""` | `null` |
| WB-PHV-04 | Toàn khoảng trắng | `"   "` | `null` |
| WB-PHV-05 | “Không” | `"Không"` | `null` |
| WB-PHV-06 | “không” + khoảng trắng | `"  không "` | `null` |
| WB-PHV-07 | “khong” | `"khong"` | `null` |
| WB-PHV-08 | “null” | `"null"` | `null` |
| WB-PHV-09 | “NULL” | `"NULL"` | `null` |
| WB-PHV-10 | Giá trị hợp lệ | `"MATH101"` | `"MATH101"` |
| WB-PHV-11 | Giá trị hợp lệ có trim | `"  MATH101  "` | `"MATH101"` |
| WB-PHV-12 | Số | `123` | `"123"` |

#### 👥 **Logic cập nhật nhân sự – Ma trận 4 trường hợp**
| ID | oldChucVu | newChucVu | Kỳ vọng |
| --- | --- | --- | --- |
| WB-NS-01 | Trưởng phòng | Nhân viên | Xóa `truong_phong` phòng ban cũ |
| WB-NS-02 | Nhân viên | Trưởng phòng | Xóa trưởng phòng cũ, cập nhật mới |
| WB-NS-03 | Trưởng phòng | Trưởng phòng | Làm sạch phòng ban mới, cập nhật mới |
| WB-NS-04 | Nhân viên | Nhân viên | Không cập nhật `truong_phong` |

#### 📚 **Luồng tạo CTĐT – Rollback 3 bước insert**
| ID | Nhánh kiểm thử | Mô tả | Kỳ vọng |
| --- | --- | --- | --- |
| WB-CTDT-01 | Kiểm tra trùng mã | `ma_ctdt` đã tồn tại | Dừng trước insert |
| WB-CTDT-02 | Insert CTĐT lỗi | Lỗi tại bước insert CTĐT | Trả lỗi, không rollback |
| WB-CTDT-03 | Insert KKT lỗi | Insert CTĐT OK, KKT lỗi | Rollback xóa CTĐT |
| WB-CTDT-04 | Insert học phần lỗi | CTĐT + KKT OK, học phần lỗi | Rollback xóa KKT + CTĐT |
| WB-CTDT-05 | Không có học phần | `khoi_kien_thuc` không có học phần | Thêm CTĐT thành công |
| WB-CTDT-06 | Có học phần hợp lệ | CTĐT + KKT + học phần | Thêm CTĐT thành công |
| WB-CTDT-07 | KKT trống học phần | Một KKT có `hoc_phan=[]` | Thêm CTĐT thành công |
| WB-CTDT-08 | Nhiều KKT & học phần | Nhiều KKT/học phần | Thêm CTĐT thành công |

---

## 📞 **HỖ TRỢ**

Nếu gặp vấn đề, hãy:
1. Kiểm tra console browser (F12)
2. Kiểm tra terminal chạy server
3. Kiểm tra kết nối database
4. Restart server nếu cần

**Chúc bạn sử dụng hệ thống hiệu quả!** 🎉
