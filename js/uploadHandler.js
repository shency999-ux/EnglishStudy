// 上传处理模块
document.addEventListener('DOMContentLoaded', function() {
    setupUploadListeners();
    setupRecordingFunctionality();
});

function setupUploadListeners() {
    // 音频上传
    document.getElementById('uploadAudioBtn')?.addEventListener('click', function() {
        handleFileUpload('audioUpload', 'listening');
    });
    
    // 口语音频上传
    document.getElementById('uploadSpeakingAudioBtn')?.addEventListener('click', function() {
        handleFileUpload('speakingAudioUpload', 'speaking');
    });
    
    // 阅读内容上传
    document.getElementById('uploadReadingBtn')?.addEventListener('click', function() {
        const textContent = document.getElementById('readingText').value;
        if (textContent.trim()) {
            displayContent('reading', textContent);
            updateModuleWords('reading', textContent);
        }
        handleFileUpload('readingUpload', 'reading');
    });
    
    // 写作内容保存
    document.getElementById('saveWritingBtn')?.addEventListener('click', function() {
        const writingContent = document.getElementById('writingText').value;
        if (writingContent.trim()) {
            displayContent('writing', writingContent);
            updateModuleWords('writing', writingContent);
            document.getElementById('writingText').value = '';
        }
    });
