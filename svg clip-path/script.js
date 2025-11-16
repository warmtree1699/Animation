// SVG Clip-Path 卡片效果
// 當鼠標移動到卡片上時，圓圈跟隨鼠標顯示隱藏內容

const cards = document.querySelectorAll('.card');
const customCursor = document.querySelector('.custom-cursor');

// SVG 點對象，用於坐標轉換
let point = null;

// 初始化
cards.forEach((card, index) => {
  const svg = card.querySelector('svg');
  const clipPath = card.querySelector(`#clip-${index + 1} circle`);

  // 創建 SVG 點對象（每個 SVG 都需要自己的點對象）
  const svgPoint = svg.createSVGPoint();

  // 鼠標移動事件
  card.addEventListener('mousemove', (e) => {
    // 獲取相對於 SVG 的坐標
    const coords = getCoordinates(e, svg, svgPoint);

    // 更新圓形裁剪路徑的位置
    clipPath.setAttribute('cx', coords.x);
    clipPath.setAttribute('cy', coords.y);

    // 更新自定義鼠標位置
    customCursor.style.left = e.clientX + 'px';
    customCursor.style.top = e.clientY + 'px';
    customCursor.style.display = 'block';
  });

  // 鼠標離開事件
  card.addEventListener('mouseleave', () => {
    // 圓形回到初始位置（左上角外）
    clipPath.setAttribute('cx', '0');
    clipPath.setAttribute('cy', '0');

    // 隱藏自定義鼠標
    customCursor.style.display = 'none';
  });

  // 觸摸支持（移動設備）
  card.addEventListener('touchmove', (e) => {
    e.preventDefault();
    const touch = e.touches[0];
    if (touch) {
      const coords = getCoordinates(touch, svg, svgPoint);
      clipPath.setAttribute('cx', coords.x);
      clipPath.setAttribute('cy', coords.y);
    }
  });

  card.addEventListener('touchend', () => {
    clipPath.setAttribute('cx', '0');
    clipPath.setAttribute('cy', '0');
  });
});

// 將屏幕坐標轉換為 SVG 坐標
function getCoordinates(event, svg, svgPoint) {
  svgPoint.x = event.clientX;
  svgPoint.y = event.clientY;

  // 使用 SVG 的矩陣轉換將屏幕坐標轉換為 SVG 坐標
  const ctm = svg.getScreenCTM();
  if (ctm) {
    return svgPoint.matrixTransform(ctm.inverse());
  }
  return svgPoint;
}

// 隱藏默認鼠標
document.addEventListener('mousemove', (e) => {
  const isOverCard = e.target.closest('.card');
  if (!isOverCard) {
    customCursor.style.display = 'none';
  }
});

// 添加平滑過渡效果
cards.forEach((card, index) => {
  const clipPath = card.querySelector(`#clip-${index + 1} circle`);
  // 為圓形添加平滑過渡（可選）
  clipPath.style.transition = 'r 0.3s ease';
});

console.log('SVG Clip-Path 卡片效果已載入');
console.log(`共有 ${cards.length} 張卡片`);
