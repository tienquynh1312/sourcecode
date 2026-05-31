/**
 * Logic frontend thuần (dùng chung browser + Jest).
 * UMD: browser → window.QLDT, Node → module.exports
 */
(function (root, factory) {
    const api = factory();
    if (typeof module === 'object' && module.exports) {
        module.exports = api;
    } else {
        root.QLDT = Object.assign(root.QLDT || {}, api);
    }
}(typeof globalThis !== 'undefined' ? globalThis : this, function () {

    const SECTION_TITLES = {
        dashboard: 'Tổng quan',
        sodo: 'Sơ đồ tổ chức',
        phongban: 'Thông tin phòng ban',
        khoa: 'Thông tin khoa',
        qlnhansu: 'Quản lý nhân sự',
        qlgiangvien: 'Quản lý giảng viên',
        qlctdt: 'Quản lý chương trình đào tạo',
        qlkkt: 'Quản lý khối kiến thức',
        qlnganhhoc: 'Quản lý ngành học',
        qlkhoahoc: 'Quản lý khóa học',
        qlhocphan: 'Quản lý học phần',
        hocphi: 'Quản lý học phí'
    };

    const DROPDOWN_MAP = {
        'qltochuc-dropdown': 'tochuc-items',
        'xaydungctdt-dropdown': 'ctdt-items',
        'quanlynhansu-dropdown': 'nhansu-items'
    };

    function getSectionTitle(sectionId) {
        return SECTION_TITLES[sectionId] || 'Không xác định';
    }

    function getDropdownItemsId(dropdownId) {
        return DROPDOWN_MAP[dropdownId] || null;
    }

    /** Lọc hàng bảng theo từ khóa (logic searchPhongBan, searchNhanSu, ...) */
    function filterRowsBySearchTerm(rows, searchTerm) {
        const term = (searchTerm || '').toLowerCase();
        return Array.from(rows).map((row) => {
            const text = row.textContent.toLowerCase();
            const visible = text.includes(term);
            return { row, visible };
        });
    }

    /** Validation form học phí (HPF frontend) */
    function validateHocPhiForm(ma_ctdt, nam_hoc, gia_tin_chi) {
        const gia = parseFloat(gia_tin_chi);
        if (!ma_ctdt || !nam_hoc || !gia || gia <= 0) {
            return { valid: false, error: 'Vui lòng chọn CTĐT, năm học và nhập giá tín chỉ hợp lệ (> 0)' };
        }
        return { valid: true };
    }

    /** Validation khoảng năm khóa học (KH frontend) */
    function validateKhoaHocYears(namBatDau, namKetThuc) {
        const start = parseInt(namBatDau, 10);
        const end = parseInt(namKetThuc, 10);
        if (Number.isNaN(start) || Number.isNaN(end) || end <= start) {
            return { valid: false, error: 'Năm kết thúc phải lớn hơn năm bắt đầu' };
        }
        return { valid: true };
    }

    /** Validation trường bắt buộc form phòng ban */
    function validatePhongBanForm(data) {
        const { id_phongban, ten_phongban, dia_chi_phongban, email_phongban } = data;
        if (!id_phongban || !ten_phongban || !dia_chi_phongban || !email_phongban) {
            return { valid: false, error: 'Vui lòng điền đầy đủ thông tin bắt buộc' };
        }
        return { valid: true };
    }

    return {
        getSectionTitle,
        getDropdownItemsId,
        filterRowsBySearchTerm,
        validateHocPhiForm,
        validateKhoaHocYears,
        validatePhongBanForm,
        SECTION_TITLES,
        DROPDOWN_MAP
    };
}));
