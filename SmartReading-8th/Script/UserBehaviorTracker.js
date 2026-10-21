// 檔案位置: SmartReading/Script/UserBehaviorTracker.js

var UserBehaviorTracker = (function () {
    var pageInstanceID = null;
    var heartbeatInterval = null;
    var isPageVisible = true;
    var isTrackingEnabled = false;
    var trackingConfig = {
        heartbeatInterval: 30000, // 30秒
        enableMouseTracking: true,
        enableKeyboardTracking: true,
        enableScrollTracking: true
    };

    // 生成 GUID
    function generateGUID() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }

    // 發送心跳
    function sendHeartbeat() {
        if (isPageVisible && isTrackingEnabled) {
            var currentPage = window.location.pathname;

            $.ajax({
                type: "POST",
                url: currentPage + "/RecordPageStay",
                data: JSON.stringify({
                    pageInstanceID: pageInstanceID,
                    pagePath: currentPage
                }),
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: function (response) {
                    console.log("UserTracker: Heartbeat sent successfully");
                },
                error: function (xhr, status, error) {
                    console.log("UserTracker: Heartbeat failed - " + error);
                }
            });
        }
    }

    // 頁面可見性變化處理
    function handleVisibilityChange() {
        if (document.hidden) {
            isPageVisible = false;
            if (heartbeatInterval) {
                clearInterval(heartbeatInterval);
            }
            console.log("UserTracker: 頁面隱藏，暫停追蹤");
        } else {
            isPageVisible = true;
            console.log("UserTracker: 頁面顯示，恢復追蹤");
            sendHeartbeat();
            heartbeatInterval = setInterval(sendHeartbeat, trackingConfig.heartbeatInterval);
        }
    }

    // 用戶活動處理
    function handleUserActivity() {
        // 可以在這裡記錄用戶活動時間戳
    }

    // 公共方法
    return {
        // 初始化追蹤
        init: function (config) {
            if (config) {
                trackingConfig = $.extend(trackingConfig, config);
            }

            pageInstanceID = generateGUID();
            isTrackingEnabled = true;

            console.log("UserTracker: 初始化追蹤，PageInstanceID: " + pageInstanceID);

            // 發送初始心跳
            sendHeartbeat();

            // 啟動定期心跳
            heartbeatInterval = setInterval(sendHeartbeat, trackingConfig.heartbeatInterval);

            // 監聽頁面可見性變化
            document.addEventListener("visibilitychange", handleVisibilityChange);

            // 監聽用戶活動
            if (trackingConfig.enableMouseTracking) {
                document.addEventListener("mousemove", handleUserActivity);
                document.addEventListener("click", handleUserActivity);
            }

            if (trackingConfig.enableScrollTracking) {
                document.addEventListener("scroll", handleUserActivity);
            }

            if (trackingConfig.enableKeyboardTracking) {
                document.addEventListener("keypress", handleUserActivity);
                document.addEventListener("keydown", handleUserActivity);
            }

            // 頁面關閉前發送最後一次心跳
            window.addEventListener("beforeunload", function (e) {
                if (isTrackingEnabled) {
                    $.ajax({
                        type: "POST",
                        url: window.location.pathname + "/RecordPageStay",
                        data: JSON.stringify({
                            pageInstanceID: pageInstanceID,
                            pagePath: window.location.pathname
                        }),
                        contentType: "application/json; charset=utf-8",
                        async: false
                    });
                }
            });

            // 頁面卸載清理
            window.addEventListener("unload", this.destroy);
        },

        // 停止追蹤
        stop: function () {
            isTrackingEnabled = false;
            if (heartbeatInterval) {
                clearInterval(heartbeatInterval);
                heartbeatInterval = null;
            }
            console.log("UserTracker: 追蹤已停止");
        },

        // 銷毀追蹤器
        destroy: function () {
            this.stop();
            pageInstanceID = null;
        },

        // 取得當前 PageInstanceID
        getPageInstanceID: function () {
            return pageInstanceID;
        },

        // 手動發送心跳
        sendHeartbeat: function () {
            sendHeartbeat();
        }
    };
})();
