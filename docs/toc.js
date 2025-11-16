// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded affix "><a href="top.html">物理学入門</a></li><li class="chapter-item expanded "><a href="chapter_0/section_0.html"><strong aria-hidden="true">1.</strong> 物理学における研究法</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="chapter_0/section_1.html"><strong aria-hidden="true">1.1.</strong> 単位と単位系</a></li><li class="chapter-item expanded "><a href="chapter_0/section_2.html"><strong aria-hidden="true">1.2.</strong> 長さの単位</a></li><li class="chapter-item expanded "><a href="chapter_0/section_3.html"><strong aria-hidden="true">1.3.</strong> 時間の単位</a></li><li class="chapter-item expanded "><a href="chapter_0/section_4.html"><strong aria-hidden="true">1.4.</strong> 重力質量とその単位</a></li><li class="chapter-item expanded "><a href="chapter_0/section_5.html"><strong aria-hidden="true">1.5.</strong> 単位の変換と次元</a></li><li class="chapter-item expanded "><a href="chapter_0/section_6.html"><strong aria-hidden="true">1.6.</strong> 量の間の関係式</a></li></ol></li><li class="chapter-item expanded "><a href="chapter_1/section_0.html"><strong aria-hidden="true">2.</strong> 古典力学</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="chapter_1/section_1.html"><strong aria-hidden="true">2.1.</strong> 運動の表現方法</a></li><li class="chapter-item expanded "><a href="chapter_1/section_2.html"><strong aria-hidden="true">2.2.</strong> 運動の法則</a></li><li class="chapter-item expanded "><a href="chapter_1/section_3.html"><strong aria-hidden="true">2.3.</strong> 二体問題（惑星の運動）</a></li><li class="chapter-item expanded "><a href="chapter_1/section_4.html"><strong aria-hidden="true">2.4.</strong> 質点系の力学</a></li><li class="chapter-item expanded "><a href="chapter_1/section_5.html"><strong aria-hidden="true">2.5.</strong> 回転運動について</a></li><li class="chapter-item expanded "><a href="chapter_1/section_6.html"><strong aria-hidden="true">2.6.</strong> 剛体の力学</a></li><li class="chapter-item expanded "><a href="chapter_1/section_7.html"><strong aria-hidden="true">2.7.</strong> 連続体力学</a></li></ol></li><li class="chapter-item expanded "><a href="chapter_2/section_0.html"><strong aria-hidden="true">3.</strong> 熱力学</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="chapter_2/section_1.html"><strong aria-hidden="true">3.1.</strong> 温度</a></li><li class="chapter-item expanded "><a href="chapter_2/section.html"><strong aria-hidden="true">3.2.</strong> エントロピーについて</a></li></ol></li><li class="chapter-item expanded "><a href="chapter_3/section_0.html"><strong aria-hidden="true">4.</strong> 電磁気学</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="chapter_3/section_1.html"><strong aria-hidden="true">4.1.</strong> 静電気</a></li><li class="chapter-item expanded "><a href="chapter_3/section_2.html"><strong aria-hidden="true">4.2.</strong> 遠隔作用と近接作用</a></li></ol></li><li class="chapter-item expanded "><a href="chapter_4/section_0.html"><strong aria-hidden="true">5.</strong> 光学</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="chapter_4/section_1.html"><strong aria-hidden="true">5.1.</strong> 幾何光学</a></li><li class="chapter-item expanded "><a href="chapter_4/section_2.html"><strong aria-hidden="true">5.2.</strong> Fermatの原理</a></li><li class="chapter-item expanded "><a href="chapter_4/section_3.html"><strong aria-hidden="true">5.3.</strong> レンズの仕組み</a></li></ol></li><li class="chapter-item expanded "><a href="chapter_5/section_0.html"><strong aria-hidden="true">6.</strong> 解析力学</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="chapter_5/section_1.html"><strong aria-hidden="true">6.1.</strong> Newton形式</a></li><li class="chapter-item expanded "><a href="chapter_5/section_2.html"><strong aria-hidden="true">6.2.</strong> Lagrange形式</a></li><li class="chapter-item expanded "><a href="chapter_5/section_3.html"><strong aria-hidden="true">6.3.</strong> Hamilton形式</a></li></ol></li><li class="chapter-item expanded "><a href="chapter_6/section_0.html"><strong aria-hidden="true">7.</strong> 統計力学</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="chapter_6/section_1.html"><strong aria-hidden="true">7.1.</strong> 気体分子運動論</a></li><li class="chapter-item expanded "><a href="chapter_6/section_2.html"><strong aria-hidden="true">7.2.</strong> 統計集団（小正準集団）</a></li><li class="chapter-item expanded "><a href="chapter_6/section_3.html"><strong aria-hidden="true">7.3.</strong> 正準集団（カノニカルアンサンブル）</a></li><li class="chapter-item expanded "><a href="chapter_6/section_4.html"><strong aria-hidden="true">7.4.</strong> 等温定圧集団</a></li><li class="chapter-item expanded "><a href="chapter_6/section_5.html"><strong aria-hidden="true">7.5.</strong> 化学ポテンシャル</a></li><li class="chapter-item expanded "><a href="chapter_6/section_6.html"><strong aria-hidden="true">7.6.</strong> 大正準集団</a></li></ol></li><li class="chapter-item expanded "><a href="chapter_7/section_0.html"><strong aria-hidden="true">8.</strong> 相対性理論</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="chapter_7/section_1.html"><strong aria-hidden="true">8.1.</strong> 同時の定義</a></li><li class="chapter-item expanded "><a href="chapter_7/section_2.html"><strong aria-hidden="true">8.2.</strong> Lorentz変換</a></li><li class="chapter-item expanded "><a href="chapter_7/section_3.html"><strong aria-hidden="true">8.3.</strong> 相対論的力学</a></li><li class="chapter-item expanded "><a href="chapter_7/section_4.html"><strong aria-hidden="true">8.4.</strong> 相対論的電磁気学</a></li><li class="chapter-item expanded "><a href="chapter_7/section_5.html"><strong aria-hidden="true">8.5.</strong> 重力と慣性（等価原理）</a></li><li class="chapter-item expanded "><a href="chapter_7/section_6.html"><strong aria-hidden="true">8.6.</strong> 加速度系への座標変換について</a></li><li class="chapter-item expanded "><a href="chapter_7/section_7.html"><strong aria-hidden="true">8.7.</strong> 共変ベクトルと反変ベクトル</a></li><li class="chapter-item expanded "><a href="chapter_7/section_8.html"><strong aria-hidden="true">8.8.</strong> 特殊相対性理論から一般相対性理論へ</a></li></ol></li><li class="chapter-item expanded "><a href="chapter_8/section_0.html"><strong aria-hidden="true">9.</strong> 量子力学</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="chapter_8/section_1.html"><strong aria-hidden="true">9.1.</strong> 空洞輻射の理論</a></li><li class="chapter-item expanded "><a href="chapter_8/section_2.html"><strong aria-hidden="true">9.2.</strong> 光の粒子仮説</a></li><li class="chapter-item expanded "><a href="chapter_8/section_3.html"><strong aria-hidden="true">9.3.</strong> 電子の波動説</a></li><li class="chapter-item expanded "><a href="chapter_8/section_4.html"><strong aria-hidden="true">9.4.</strong> 粒子と波動の二重性</a></li><li class="chapter-item expanded "><a href="chapter_8/section_5.html"><strong aria-hidden="true">9.5.</strong> 波動力学</a></li></ol></li><li class="chapter-item expanded "><a href="references.html"><strong aria-hidden="true">10.</strong> 参考文献</a></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString().split("#")[0].split("?")[0];
        if (current_page.endsWith("/")) {
            current_page += "index.html";
        }
        var links = Array.prototype.slice.call(this.querySelectorAll("a"));
        var l = links.length;
        for (var i = 0; i < l; ++i) {
            var link = links[i];
            var href = link.getAttribute("href");
            if (href && !href.startsWith("#") && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The "index" page is supposed to alias the first chapter in the book.
            if (link.href === current_page || (i === 0 && path_to_root === "" && current_page.endsWith("/index.html"))) {
                link.classList.add("active");
                var parent = link.parentElement;
                if (parent && parent.classList.contains("chapter-item")) {
                    parent.classList.add("expanded");
                }
                while (parent) {
                    if (parent.tagName === "LI" && parent.previousElementSibling) {
                        if (parent.previousElementSibling.classList.contains("chapter-item")) {
                            parent.previousElementSibling.classList.add("expanded");
                        }
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                sessionStorage.setItem('sidebar-scroll', this.scrollTop);
            }
        }, { passive: true });
        var sidebarScrollTop = sessionStorage.getItem('sidebar-scroll');
        sessionStorage.removeItem('sidebar-scroll');
        if (sidebarScrollTop) {
            // preserve sidebar scroll position when navigating via links within sidebar
            this.scrollTop = sidebarScrollTop;
        } else {
            // scroll sidebar to current active section when navigating via "next/previous chapter" buttons
            var activeSection = document.querySelector('#sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        var sidebarAnchorToggles = document.querySelectorAll('#sidebar a.toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(function (el) {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define("mdbook-sidebar-scrollbox", MDBookSidebarScrollbox);
