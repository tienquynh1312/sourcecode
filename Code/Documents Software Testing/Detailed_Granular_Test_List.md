# Detailed Granular Test List (QLDT)

This index lists all test classes and their test methods. Use this list to track coverage and execution status.

## Backend API Tests

### PhongBanApiTest
- shouldGetAllPhongBan
- shouldCreatePhongBan
- shouldRejectPhongBanWithMissingFields
- shouldRejectDuplicatePhongBanId
- shouldUpdatePhongBan
- shouldDeletePhongBan

### NhanSuApiTest
- shouldGetAllNhanSu
- shouldCreateNhanSu
- shouldRejectNhanSuWithMissingFields
- shouldRejectDuplicateNhanSuId
- shouldUpdateNhanSu
- shouldClearTruongPhongWhenRoleChanges
- shouldAssignTruongPhongWhenRoleIsTruongPhong
- shouldDeleteNhanSu

### GiangVienApiTest
- shouldGetAllGiangVien
- shouldCreateGiangVien
- shouldRejectGiangVienWithMissingFields
- shouldRejectDuplicateGiangVienId
- shouldUpdateGiangVien
- shouldClearTruongKhoaWhenRoleChanges
- shouldAssignTruongKhoaWhenRoleIsTruongKhoa
- shouldDeleteGiangVien

### KhoaApiTest
- shouldGetAllKhoa
- shouldCreateKhoa
- shouldRejectDuplicateKhoaId
- shouldUpdateKhoa
- shouldDeleteKhoa

### HocPhanApiTest
- shouldGetAllHocPhan
- shouldCreateHocPhan
- shouldRejectDuplicateHocPhanMa
- shouldNormalizeNullHocPhanRelations
- shouldUpdateHocPhan
- shouldDeleteHocPhan

### KhoiKienThucApiTest
- shouldGetAllKhoiKienThuc
- shouldCreateKhoiKienThuc
- shouldRejectMissingRequiredFields
- shouldUpdateKhoiKienThuc
- shouldDeleteKhoiKienThuc

### NganhHocApiTest
- shouldGetAllNganhHoc
- shouldCreateNganhHoc
- shouldRejectMissingKhoa
- shouldRejectDuplicateNganhId
- shouldUpdateNganhHoc
- shouldDeleteNganhHoc

### CTDTApisTest
- shouldGetAllCTDT
- shouldGetCTDTDetail
- shouldCreateCTDTWithKKT
- shouldRejectCTDTWithoutKKT
- shouldUpdateCTDT
- shouldDeleteCTDT

### KhoaHocApiTest
- shouldGetAllKhoaHoc
- shouldCreateKhoaHoc
- shouldRejectInvalidYearRange
- shouldUpdateKhoaHoc
- shouldDeleteKhoaHoc

### HocPhiApiTest
- shouldGetHocPhiList
- shouldGetHocPhiTinhByCTDT
- shouldGetHocPhiCtdtList
- shouldCreateHocPhiConfig
- shouldUpdateHocPhiConfig
- shouldRejectInvalidGiaTinChi
- shouldDeleteHocPhiConfig

## Frontend UI Tests

### NavigationUiTest
- shouldOpenDashboard
- shouldSwitchSections
- shouldToggleDropdowns

### PhongBanUiTest
- shouldOpenPhongBanModal
- shouldValidatePhongBanRequiredFields
- shouldCreatePhongBan
- shouldEditPhongBan
- shouldDeletePhongBan
- shouldSearchPhongBan

### NhanSuUiTest
- shouldOpenNhanSuModal
- shouldValidateNhanSuRequiredFields
- shouldCreateNhanSu
- shouldEditNhanSu
- shouldDeleteNhanSu
- shouldSearchNhanSu

### GiangVienUiTest
- shouldOpenGiangVienModal
- shouldValidateGiangVienRequiredFields
- shouldCreateGiangVien
- shouldEditGiangVien
- shouldDeleteGiangVien
- shouldSearchGiangVien

### KhoaUiTest
- shouldOpenKhoaModal
- shouldValidateKhoaRequiredFields
- shouldCreateKhoa
- shouldEditKhoa
- shouldDeleteKhoa
- shouldSearchKhoa

### HocPhanUiTest
- shouldOpenHocPhanModal
- shouldValidateHocPhanRequiredFields
- shouldCreateHocPhan
- shouldEditHocPhan
- shouldDeleteHocPhan
- shouldSearchHocPhan

### KhoiKienThucUiTest
- shouldOpenKKTModal
- shouldValidateKKTRequiredFields
- shouldCreateKKT
- shouldEditKKT
- shouldDeleteKKT
- shouldSearchKKT

### NganhHocUiTest
- shouldOpenNganhHocModal
- shouldValidateNganhHocRequiredFields
- shouldCreateNganhHoc
- shouldEditNganhHoc
- shouldDeleteNganhHoc
- shouldSearchNganhHoc

### CTDTUiTest
- shouldOpenCTDTModal
- shouldValidateCTDTRequiredFields
- shouldAddKKTToCTDT
- shouldAddHocPhanToKKT
- shouldCreateCTDT
- shouldEditCTDT
- shouldDeleteCTDT
- shouldSearchCTDT

### KhoaHocUiTest
- shouldOpenKhoaHocModal
- shouldValidateKhoaHocYearRange
- shouldCreateKhoaHoc
- shouldEditKhoaHoc
- shouldDeleteKhoaHoc
- shouldSearchKhoaHoc

### HocPhiUiTest
- shouldLoadHocPhiDashboard
- shouldOpenHocPhiModal
- shouldValidateHocPhiFields
- shouldCreateHocPhiConfig
- shouldEditHocPhiConfig
- shouldDeleteHocPhiConfig
