/**
 * Kiểm tra object có đủ các trường bắt buộc (truthy).
 */
function hasRequiredFields(obj, fields) {
    return fields.every((field) => {
        const value = obj[field];
        return value !== undefined && value !== null && value !== '';
    });
}

/**
 * Kiểm tra khoảng năm hợp lệ: năm kết thúc phải lớn hơn năm bắt đầu.
 */
function isValidYearRange(namBatDau, namKetThuc) {
    const start = parseInt(namBatDau, 10);
    const end = parseInt(namKetThuc, 10);
    if (Number.isNaN(start) || Number.isNaN(end)) {
        return false;
    }
    return end > start;
}

/**
 * Kiểm tra giá tín chỉ học phí hợp lệ (> 0).
 */
function isValidGiaTinChi(giaTinChi) {
    const value = parseFloat(giaTinChi);
    return !Number.isNaN(value) && value > 0;
}

/**
 * Kiểm tra mảng khối kiến thức CTĐT không rỗng.
 */
function hasKhoiKienThuc(khoiKienThuc) {
    return Array.isArray(khoiKienThuc) && khoiKienThuc.length > 0;
}

module.exports = {
    hasRequiredFields,
    isValidYearRange,
    isValidGiaTinChi,
    hasKhoiKienThuc
};
