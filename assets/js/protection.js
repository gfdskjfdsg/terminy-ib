// === Максимальная защита от копирования контента (2025) ===
document.addEventListener('DOMContentLoaded', () => {
    // Запрет правой кнопки мыши
    document.addEventListener('contextmenu', e => e.preventDefault());

    // Запрет выделения текста
    document.addEventListener('selectstart', e => e.preventDefault());

    // Запрет копирования (Ctrl+C, Cmd+C)
    document.addEventListener('copy', e => {
        e.preventDefault();
        alert('Копирование контента запрещено');
    });

    // Запрет перетаскивания текста и изображений
    document.addEventListener('dragstart', e => e.preventDefault());

    // Запрет горячих клавиш
    document.addEventListener('keydown', e => {
        // Ctrl+C, Ctrl+A, Ctrl+X, Ctrl+V, Ctrl+S, Ctrl+U, Cmd+...
        if (e.ctrlKey || e.metaKey) {
            const blocked = ['c', 'a', 'x', 'v', 's', 'u', 'p'];
            if (blocked.includes(e.key.toLowerCase())) {
                e.preventDefault();
                return false;
            }
        }
        // F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+Shift+C
        if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && ['I', 'J', 'C'].includes(e.key))) {
            e.preventDefault();
            return false;
        }
    });

    // Дополнительно: отключаем DevTools через детектор (опционально)
    let devtoolsOpen = false;
    setInterval(() => {
        if (window.outerHeight - window.innerHeight > 200 || window.outerWidth - window.innerWidth > 200) {
            if (!devtoolsOpen) {
                devtoolsOpen = true;
                document.body.innerHTML = '<div style="padding:100px;text-align:center;font-size:2rem;color:#ef98aa;">Доступ запрещён</div>';
            }
        } else {
            devtoolsOpen = false;
        }
    }, 500);
});