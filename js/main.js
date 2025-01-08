document.getElementById('viewDoc').addEventListener('click', function() {
    const app = document.getElementById('appSelect').value;
    const doc = document.getElementById('docSelect').value;
    const lang = document.getElementById('langSelect').value;

    if (!app || !doc || !lang) {
        alert('请选择所有选项');
        return;
    }

    const url = `apps/${app}/${doc}/${lang}.html`;
    window.location.href = url;
}); 