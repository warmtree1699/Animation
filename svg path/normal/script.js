// ====================
// 重新播放所有動畫
// ====================
const restartBtn = document.getElementById('restartBtn');
const demoSections = document.querySelectorAll('.demo-section');

restartBtn.addEventListener('click', function() {
    // 暫停所有動畫
    demoSections.forEach(section => {
        section.classList.add('animation-paused');
    });

    // 強制瀏覽器重新計算樣式
    void document.body.offsetWidth;

    // 恢復動畫
    setTimeout(() => {
        demoSections.forEach(section => {
            section.classList.remove('animation-paused');
        });
    }, 10);

    // 按鈕反饋
    this.textContent = '重新播放中...';
    this.style.background = '#10b981';

    setTimeout(() => {
        this.textContent = '重新播放所有動畫';
        this.style.background = '';
    }, 1000);
});

// ====================
// 滾動進入視窗時才開始動畫（可選）
// ====================
const observerOptions = {
    threshold: 0.3,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
        }
    });
}, observerOptions);

// 可選：如果想要滾動到視窗才播放，取消下方註解
// demoSections.forEach(section => {
//     observer.observe(section);
// });

// ====================
// 進度條數字更新
// ====================
const progressText = document.querySelector('.progress-text');
let progress = 0;

setInterval(() => {
    progress = (progress + 1) % 101;
    if (progressText) {
        progressText.textContent = progress + '%';
    }
}, 30);

// ====================
// 變形動畫互動（點擊切換形狀）
// ====================
const morphPath = document.querySelector('.morph-path');
const shapes = [
    "M 100 50 L 150 100 L 100 150 L 50 100 Z", // 菱形
    "M 50 50 L 150 50 L 150 150 L 50 150 Z", // 正方形
    "M 100 50 L 150 150 L 50 150 Z", // 三角形
    "M 100 50 C 150 50, 150 150, 100 150 C 50 150, 50 50, 100 50 Z" // 圓形
];
let currentShape = 0;

if (morphPath) {
    morphPath.parentElement.addEventListener('click', function() {
        currentShape = (currentShape + 1) % shapes.length;
        morphPath.setAttribute('d', shapes[currentShape]);
    });
}

// ====================
// 打勾動畫互動
// ====================
const checkmarkContainer = document.querySelector('.checkmark-container');

if (checkmarkContainer) {
    checkmarkContainer.addEventListener('click', function() {
        const circle = this.querySelector('.checkmark-circle');
        const check = this.querySelector('.checkmark-check');

        // 重置動畫
        circle.style.animation = 'none';
        check.style.animation = 'none';

        // 強制重新計算
        void circle.offsetWidth;

        // 重新啟動動畫
        circle.style.animation = 'checkmark-circle 0.6s ease-in-out forwards';
        check.style.animation = 'checkmark-check 0.6s 0.3s ease-in-out forwards';
    });
}

// ====================
// 控制台輸出提示
// ====================
console.log('🎨 SVG Path Animation 範例已載入！');
console.log('💡 提示：');
console.log('  - 點擊「重新播放所有動畫」按鈕可以重新播放');
console.log('  - 點擊變形動畫可以切換形狀');
console.log('  - 點擊打勾動畫可以重新觸發');
