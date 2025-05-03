document.getElementById('viewDoc').addEventListener('click', function() {
    const app = document.getElementById('appSelect').value;
    const doc = document.getElementById('docSelect').value;
    const lang = document.getElementById('langSelect').value;

    if (!app || !doc || !lang) {
        alert('请选择所有选项');
        return;
    }

    // 构建URL路径
    const url = `apps/${app}/${doc}/${lang}.html`;
    
    // 检查文件是否存在（简单验证）
    const xhr = new XMLHttpRequest();
    xhr.open('HEAD', url, false);
    try {
        xhr.send();
        if (xhr.status === 200) {
            // 文件存在，跳转到对应页面
            window.location.href = url;
        } else {
            // 文件不存在，显示错误信息
            alert(`抱歉，${lang}语言的${doc}文档不可用`);
        }
    } catch (error) {
        // 发生错误，显示错误信息
        alert(`无法访问${lang}语言的${doc}文档，请稍后再试`);
        console.error('访问文档时出错:', error);
    }
});