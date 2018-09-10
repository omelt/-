;$(function() {
    var newer180 = {
        getToday: function() {
            var dt = new Date();
            return (dt.getMonth().toString() + dt.getDate().toString());
        },
        closeCoupon: function() {
            var today = newer180.getToday();
            localStorage.omcNewer180 = today;
            $('.coupon-wrap .pop-mask').hide();
            $('.coupon-wrap .coupon-link').hide();
        },
        closePop: function () {
            $('.coupon-wrap .pop-mask').hide();
        },
        showCoupon: function () {
            var today = newer180.getToday();console.log(today);
            if (localStorage.omcNewer180 && localStorage.omcNewer180 == today) {
                return;
            }
            $('.coupon-wrap .coupon-link').show().click(function() {
                $('.coupon-wrap .pop-mask').show();
            });
        }
    };
    $('.coupon-wrap .pop-mask .pop-shadow').click(function() {
        newer180.closePop();
    });
    $('.coupon-wrap .pop-mask .closed').click(function() {
        newer180.closeCoupon();
    });
    if (window.Env.UID == 0) {
        newer180.showCoupon();
    }
});