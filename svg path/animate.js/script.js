// ====================
// Anime.js SVG Path Logo 動畫
// ====================

// 等待 DOM 載入完成
document.addEventListener('DOMContentLoaded', function() {
    console.log('✅ Anime.js 版本:', anime.version);

    // 頁面載入時自動播放所有動畫
    playAllAnimations();

    // 重播按鈕事件
    const replayButtons = document.querySelectorAll('.replay-btn');
    replayButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const animationType = this.getAttribute('data-animation');
            playAnimation(animationType);
        });
    });

    // 全部重播按鈕
    document.getElementById('replayAll').addEventListener('click', playAllAnimations);
});

// ====================
// 播放所有動畫
// ====================
function playAllAnimations() {
    setTimeout(() => animateLightning(), 0);
    setTimeout(() => animateText(), 200);
    setTimeout(() => animateCircle(), 400);
    setTimeout(() => animateHexagon(), 600);
    setTimeout(() => animateInfinity(), 800);
    setTimeout(() => animateHeart(), 1000);
    setTimeout(() => animateStar(), 1200);
    setTimeout(() => animateGear(), 1400);
}

// ====================
// 根據類型播放動畫
// ====================
function playAnimation(type) {
    switch(type) {
        case 'lightning':
            animateLightning();
            break;
        case 'text':
            animateText();
            break;
        case 'circle':
            animateCircle();
            break;
        case 'hexagon':
            animateHexagon();
            break;
        case 'infinity':
            animateInfinity();
            break;
        case 'heart':
            animateHeart();
            break;
        case 'star':
            animateStar();
            break;
        case 'gear':
            animateGear();
            break;
    }
}

// ====================
// 範例 1: 閃電 Logo - 線條描繪 + 填充
// ====================
function animateLightning() {
    const path = '.lightning-path';

    // 重置
    anime.set(path, {
        strokeDashoffset: 1000,
        fill: 'none'
    });

    // 創建時間軸動畫
    const timeline = anime.timeline({
        easing: 'easeInOutQuad'
    });

    timeline
        // 1. 線條描繪
        .add({
            targets: path,
            strokeDashoffset: [1000, 0],
            duration: 1500
        })
        // 2. 填充顏色
        .add({
            targets: path,
            fill: '#fbbf24',
            duration: 500
        })
        // 3. 脈衝效果
        .add({
            targets: path,
            scale: [1, 1.1, 1],
            duration: 600,
            easing: 'easeInOutElastic(1, .6)'
        });
}

// ====================
// 範例 2: 文字 Logo - 依序繪製字母
// ====================
function animateText() {
    const letters = '.letter-path';

    // 重置
    anime.set(letters, {
        strokeDashoffset: 1000
    });

    // 依序繪製每個字母
    anime({
        targets: letters,
        strokeDashoffset: [1000, 0],
        duration: 1000,
        delay: anime.stagger(300), // 每個字母延遲 300ms
        easing: 'easeInOutQuad'
    });
}

// ====================
// 範例 3: 圓形 Logo - 同心圓 + 中心圖案
// ====================
function animateCircle() {
    // 重置
    anime.set('.circle-path-1, .circle-path-2', {
        strokeDashoffset: 1000
    });
    anime.set('.center-icon', {
        opacity: 0,
        scale: 0
    });

    const timeline = anime.timeline({
        easing: 'easeOutExpo'
    });

    timeline
        // 外圓
        .add({
            targets: '.circle-path-1',
            strokeDashoffset: [1000, 0],
            duration: 1000
        })
        // 內圓
        .add({
            targets: '.circle-path-2',
            strokeDashoffset: [1000, 0],
            duration: 800
        }, '-=400') // 提前 400ms 開始
        // 中心圖案出現
        .add({
            targets: '.center-icon',
            opacity: [0, 1],
            scale: [0, 1],
            duration: 600,
            easing: 'easeOutElastic(1, .8)'
        });
}

// ====================
// 範例 4: 六邊形 Logo - 旋轉 + 中心點擴散
// ====================
function animateHexagon() {
    // 重置
    anime.set('.hex-path', {
        strokeDashoffset: 1000,
        rotate: 0
    });
    anime.set('.hex-center', {
        r: 0
    });

    const timeline = anime.timeline();

    timeline
        // 外六邊形繪製 + 旋轉
        .add({
            targets: '.hex-outer',
            strokeDashoffset: [1000, 0],
            rotate: [0, 360],
            duration: 1500,
            easing: 'easeInOutQuad'
        })
        // 內六邊形繪製 + 反向旋轉
        .add({
            targets: '.hex-inner',
            strokeDashoffset: [1000, 0],
            rotate: [0, -360],
            duration: 1200,
            easing: 'easeInOutQuad'
        }, '-=800')
        // 中心點擴大
        .add({
            targets: '.hex-center',
            r: [0, 15],
            duration: 600,
            easing: 'easeOutElastic(1, .6)'
        });
}

// ====================
// 範例 5: 無限符號 - 流動效果
// ====================
function animateInfinity() {
    // 重置
    anime.set('.infinity-path', {
        strokeDashoffset: 1000
    });

    anime({
        targets: '.infinity-path',
        strokeDashoffset: [1000, 0],
        duration: 2000,
        easing: 'easeInOutSine',
        loop: false
    });
}

// ====================
// 範例 6: 心形 Logo - 繪製 + 跳動
// ====================
function animateHeart() {
    // 重置
    anime.set('.heart-path', {
        strokeDashoffset: 1000,
        fill: 'none',
        scale: 1
    });

    const timeline = anime.timeline();

    timeline
        // 繪製輪廓
        .add({
            targets: '.heart-path',
            strokeDashoffset: [1000, 0],
            duration: 1500,
            easing: 'easeInOutQuad'
        })
        // 填充顏色
        .add({
            targets: '.heart-path',
            fill: '#ff6b9d',
            duration: 500
        })
        // 跳動效果
        .add({
            targets: '.heart-path',
            scale: [1, 1.15, 1],
            duration: 800,
            easing: 'easeInOutQuad'
        });
}

// ====================
// 範例 7: 星星 Logo - 旋轉登場
// ====================
function animateStar() {
    // 重置
    anime.set('.star-path', {
        strokeDashoffset: 1000,
        fill: 'none',
        rotate: -180,
        scale: 0.5,
        opacity: 0
    });

    const timeline = anime.timeline();

    timeline
        // 旋轉 + 縮放 + 淡入
        .add({
            targets: '.star-path',
            strokeDashoffset: [1000, 0],
            rotate: [180, 0],
            scale: [0.5, 1],
            opacity: [0, 1],
            duration: 1500,
            easing: 'easeOutElastic(1, .6)'
        })
        // 填充
        .add({
            targets: '.star-path',
            fill: '#fbbf24',
            duration: 500
        });
}

// ====================
// 範例 8: 齒輪 Logo - 複雜動畫
// ====================
function animateGear() {
    // 重置
    anime.set('.gear-path', {
        strokeDashoffset: 1000,
        rotate: 0
    });
    anime.set('.gear-center', {
        r: 0
    });

    const timeline = anime.timeline();

    timeline
        // 齒輪繪製 + 旋轉
        .add({
            targets: '.gear-path',
            strokeDashoffset: [1000, 0],
            rotate: [0, 180],
            duration: 2000,
            easing: 'easeInOutQuad'
        })
        // 中心圓擴大
        .add({
            targets: '.gear-center',
            r: [0, 25],
            duration: 600,
            easing: 'easeOutElastic(1, .6)'
        }, '-=800')
        // 持續旋轉
        .add({
            targets: '#gear-logo',
            rotate: 360,
            duration: 3000,
            easing: 'linear',
            loop: false
        });
}

// ====================
// 控制台輸出
// ====================
console.log('🎨 Anime.js SVG Path Logo 動畫已載入！');
console.log('💡 功能：');
console.log('  - 8 種不同的 Logo 動畫效果');
console.log('  - 每個 Logo 都有獨立的重播按鈕');
console.log('  - 使用 Anime.js 實現流暢動畫');
console.log('  - 包含：線條描繪、填充、旋轉、縮放等效果');
