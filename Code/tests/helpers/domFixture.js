/** HTML tối giản mô phỏng cấu trúc ycphanmem.html cho frontend blackbox tests */
function loadFrontendFixture() {
    document.body.innerHTML = `
        <div class="container">
            <div class="sidebar">
                <div class="nav-menu">
                    <div class="nav-link" onclick="showinfo('dashboard')">Trang chủ</div>
                    <div class="nav-link" onclick="toggleDropDown('qltochuc-dropdown')">
                        <h4>Quản lý cơ cấu tổ chức</h4>
                    </div>
                    <div class="drop-items" id="tochuc-items" style="display:none;">
                        <a href="#" onclick="showinfo('phongban')">Thông tin phòng ban</a>
                    </div>
                    <div class="nav-link" onclick="toggleDropDown('quanlynhansu-dropdown')">
                        <h4>Quản lý nhân sự</h4>
                    </div>
                    <div class="drop-items" id="nhansu-items" style="display:none;">
                        <a href="#" onclick="showinfo('qlnhansu')">Quản lý nhân viên</a>
                    </div>
                </div>
            </div>
            <div class="main-content">
                <div id="dashboard" class="section section-active"><h2>Tổng quan</h2></div>
                <div id="phongban" class="section">
                    <div class="search-bar"><input type="text" placeholder="Tìm kiếm"></div>
                    <table class="tbphongban">
                        <tbody>
                            <tr><td>PB01</td><td>Phòng IT</td><td>Tầng 1</td></tr>
                            <tr><td>PB02</td><td>Phòng Kế toán</td><td>Tầng 2</td></tr>
                            <tr><td>PB03</td><td>Phòng Nhân sự</td><td>Tầng 3</td></tr>
                        </tbody>
                    </table>
                </div>
                <div id="qlnhansu" class="section">
                    <div class="search-bar"><input type="text"></div>
                    <table class="tbnhansu"><tbody><tr><td>NV01</td></tr></tbody></table>
                </div>
            </div>
        </div>
    `;
}

module.exports = { loadFrontendFixture };
