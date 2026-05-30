-- Tạo database
CREATE DATABASE IF NOT EXISTS qldt;
USE qldt;

-- Bảng phòng ban
CREATE TABLE IF NOT EXISTS phongban (
    id_phongban INT AUTO_INCREMENT PRIMARY KEY,
    ten_phongban VARCHAR(255) NOT NULL,
    dia_chi_phongban TEXT,
    email_phongban VARCHAR(255),
    truong_phong VARCHAR(255),
    trang_thai ENUM('Đang hoạt động', 'Nghỉ phép') DEFAULT 'Đang hoạt động',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Bảng nhân sự
CREATE TABLE IF NOT EXISTS nhansu (
    id_nhanvien INT AUTO_INCREMENT PRIMARY KEY,
    ten_nhanvien VARCHAR(255) NOT NULL,
    khoa VARCHAR(255),
    chucvu VARCHAR(255),
    email_nhansu VARCHAR(255),
    id_phongban INT,
    trang_thai ENUM('Đang hoạt động', 'Nghỉ phép') DEFAULT 'Đang hoạt động',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (id_phongban) REFERENCES phongban(id_phongban) ON DELETE SET NULL
);



-- Bảng học phần CNTT
CREATE TABLE IF NOT EXISTS hocphan_cntt (
    id_hocphan INT AUTO_INCREMENT PRIMARY KEY,
    ma_hocphan VARCHAR(50) UNIQUE NOT NULL,
    ten_hocphan VARCHAR(255) NOT NULL,
    so_tinchi INT,
    so_tinchi_lythuyet INT,
    so_tinchi_thuchanh INT,
    hp_tienquyet TEXT,
    hp_songhanh TEXT,
    hp_hoctruoc TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Bảng học phần Kỹ thuật
CREATE TABLE IF NOT EXISTS hocphan_kythuat (
    id_hocphan INT AUTO_INCREMENT PRIMARY KEY,
    ma_hocphan VARCHAR(50) UNIQUE NOT NULL,
    ten_hocphan VARCHAR(255) NOT NULL,
    so_tinchi INT,
    so_tinchi_lythuyet INT,
    so_tinchi_thuchanh INT,
    hp_tienquyet TEXT,
    hp_songhanh TEXT,
    hp_hoctruoc TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Bảng học phần Kinh tế
CREATE TABLE IF NOT EXISTS hocphan_kinhte (
    id_hocphan INT AUTO_INCREMENT PRIMARY KEY,
    ma_hocphan VARCHAR(50) UNIQUE NOT NULL,
    ten_hocphan VARCHAR(255) NOT NULL,
    so_tinchi INT,
    so_tinchi_lythuyet INT,
    so_tinchi_thuchanh INT,
    hp_tienquyet TEXT,
    hp_songhanh TEXT,
    hp_hoctruoc TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Bảng học phần NN-KHXH
CREATE TABLE IF NOT EXISTS hocphan_nnxh (
    id_hocphan INT AUTO_INCREMENT PRIMARY KEY,
    ma_hocphan VARCHAR(50) UNIQUE NOT NULL,
    ten_hocphan VARCHAR(255) NOT NULL,
    so_tinchi INT,
    so_tinchi_lythuyet INT,
    so_tinchi_thuchanh INT,
    hp_tienquyet TEXT,
    hp_songhanh TEXT,
    hp_hoctruoc TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Bảng học phần Y-Dược
CREATE TABLE IF NOT EXISTS hocphan_yduoc (
    id_hocphan INT AUTO_INCREMENT PRIMARY KEY,
    ma_hocphan VARCHAR(50) UNIQUE NOT NULL,
    ten_hocphan VARCHAR(255) NOT NULL,
    so_tinchi INT,
    so_tinchi_lythuyet INT,
    so_tinchi_thuchanh INT,
    hp_tienquyet TEXT,
    hp_songhanh TEXT,
    hp_hoctruoc TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);




