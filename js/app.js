 // مثال على استخدام setInterval يمكن أن يؤثر على bfcache
let intervalId;

const startInterval = () => {
    intervalId = setInterval(() => {
        // بعض العمليات التي تحتاج إلى تحديث
    }, 1000);
};

const stopInterval = () => {
    clearInterval(intervalId);
};

// تأكد من إيقاف أي تحديثات عند مغادرة الصفحة
window.addEventListener('beforeunload', stopInterval);
