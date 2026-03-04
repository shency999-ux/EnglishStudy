// 简化版上传按钮功能
function initUploadButton() {
    const uploadBtn = document.getElementById('uploadBtn');
    const modal = document.getElementById('uploadModal');
    const closeBtn = document.querySelector('.close');
    const cancelBtn = document.getElementById('cancelUpload');
    
    if (!uploadBtn || !modal) {
        console.error('Upload button or modal not found');
        return;
    }
    
    // 打开模态框
    uploadBtn.onclick = function() {
        modal.style.display = 'block';
    };
    
    // 关闭模态框
    if (closeBtn) {
        closeBtn.onclick = function() {
            modal.style.display = 'none';
        };
    }
    
    if (cancelBtn) {
        cancelBtn.onclick = function() {
            modal.style.display = 'none';
        };
    }
    
    // 点击外部关闭
    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    };
}

// 在页面加载完成后初始化
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initUploadButton);
} else {
    initUploadButton();
}
