// 1. 获取元素
const contactBtn = document.querySelector('.btn-contact');

// 2. 绑定点击事件
contactBtn.addEventListener('click', function() {
    // 3. 这里的逻辑可以很复杂，我们先做一个简单的交互
    const userConfirm = confirm('感谢关注！点击确认获取联系方式？');
    
    if (userConfirm) {
        alert('微信：your_wechat_id (示例)');
        contactBtn.textContent = '已获取联系方式';
        contactBtn.style.backgroundColor = '#28a745'; // 修改样式
    }
});