**js/uploadHandler.js**（修改版）
```javascript
// 上传处理模块
document.addEventListener('DOMContentLoaded', function() {
    setupUploadListeners();
});
function setupUploadListeners() {
    // 确认上传按钮
    document.getElementById('confirmUpload')?.addEventListener('click', function() {
        const activeTab = document.querySelector('.tab-btn.active').getAttribute('data-tab');
        
        if (activeTab === 'text') {
            handleTextUpload();
        } else if (activeTab === 'file') {
            handleFileUpload();
        }
    });
}
function handleTextUpload() {
    const textInput = document.getElementById('textInput').value;
    const autoExtract = document.getElementById('autoExtractWords').checked;
    const currentModule = getCurrentActiveModule();
    
    if (!textInput.trim()) {
        alert('请输入内容后再上传');
        return;
    }
    
    // 显示内容
    displayContent(currentModule, textInput);
    
    // 如果需要自动提取单词
    if (autoExtract) {
        updateModuleWords(currentModule, textInput);
    }
    
    // 清空输入框并关闭弹窗
    document.getElementById('textInput').value = '';
    document.getElementById('uploadModal').style.display = 'none';
}
function handleFileUpload() {
