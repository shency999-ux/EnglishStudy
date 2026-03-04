## 4. js/wordCounter.js（完整）
```javascript
// 单词统计模块
let wordData = {
    listening: [],
    speaking: [],
    reading: [],
    writing: [],
    vocabulary: [],
    grammar: []
};
function extractWords(text) {
    if (!text || typeof text !== 'string') return [];
    
    // 移除标点符号，只保留字母和空格
    const cleanText = text.replace(/[^a-zA-Z\s]/g, ' ');
    // 分割成单词并过滤空字符串
    const words = cleanText.toLowerCase().split(/\s+/).filter(word => word.length > 0);
    return words;
}
function countUniqueWords(wordsArray) {
    const uniqueWords = new Set(wordsArray);
    return uniqueWords.size;
}
function countTotalWords() {
    let allWords = [];
    
    // 收集所有模块的单词
    Object.values(wordData).forEach(words => {
        allWords = allWords.concat(words);
    });
    
    return countUniqueWords(allWords);
}
function updateModuleWords(moduleId, content) {
    const words = extractWords(content);
    wordData[moduleId] = words;
    window.updateWordCount(); // 更新显示
}
// 导出函数供其他模块使用
window.countTotalWords = countTotalWords;
window.updateModuleWords = updateModuleWords;
window.extractWords = extractWords;
