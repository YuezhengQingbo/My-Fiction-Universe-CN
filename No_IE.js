if (typeof navigator !== 'undefined') {
    const isIE = /Trident|MSIE/.test(navigator.userAgent); // 检测是否是IE浏览器
    const isAllowedBrowser = !isIE && /Firefox|Safari|Chrome|Edg/.test(navigator.userAgent); // 检测是否是其他浏览器

    if (!isAllowedBrowser) { // 如果不是允许的浏览器，则执行重定向或其他处理
        window.location.href = "/404.html";
    } else if (typeof Promise !== 'undefined' && typeof Symbol !== 'undefined' && 'fetch' in window) {
        console.log('Modern browser with required features.');
    } else {// 如果不是IE浏览器，并且不是现代浏览器，则可以执行其他操作
        console.log("This isn't IE or lacks required features.");
        window.location.href = "/404.html";
    }
    console.log('扣鸟组千古！');
} else {
    console.log('Navigator object not available. Possibly running in a non-browser environment.');
}
