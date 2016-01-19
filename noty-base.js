    function generate(type, message) {
        var n = noty({
            text        : message,
            type        : type,
            dismissQueue: true,
            timeout     : 10000,
            closeWith   : ['click'],
            layout      : 'topCenter',
            theme       : 'defaultTheme',
            maxVisible  : 10
        });
    }

    // function generateAll() {
    //     generate('alert', 'Alert message');
    //     generate('information', 'Info message');
    //     generate('error', 'Error message');
    //     generate('warning', 'Warning message');
    //     generate('notification', 'Notification message');
    //     generate('success', 'Success message');
    // }
    //
    // $(document).ready(function () {
    //     generateAll();
    // });
