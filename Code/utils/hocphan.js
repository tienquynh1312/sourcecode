/**
 * Xử lý giá trị học phần liên quan (tiên quyết, song hành, học trước).
 * Trả về null nếu giá trị rỗng hoặc biểu thị "không có".
 */
function processHocPhanValue(value) {
    if (!value || value.trim() === '' ||
        value.toLowerCase().trim() === 'không' ||
        value.toLowerCase().trim() === 'khong' ||
        value === 'null') {
        return null;
    }
    return value.trim();
}

module.exports = { processHocPhanValue };
