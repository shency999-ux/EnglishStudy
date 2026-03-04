moduleLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        
        // 移除所有激活状态
        moduleLinks.forEach(l => l.classList.remove('active'));
        modules.forEach(m => m.classList.remove('active'));
        
        // 添加当前激活状态
        this.classList.add('active');
        const moduleId = this.getAttribute('data-module');
        document.getElementById(moduleId).classList.add('active');
    });
});
// 初始化单词统计
initializeWordCounter();
// 初始化上传处理
initializeUploadHandlers();
