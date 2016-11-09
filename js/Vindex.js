/* 
* @Author: Marte
* @Date:   2016-07-07 21:42:06
* @Last Modified by:   Marte
* @Last Modified time: 2016-07-08 15:45:35
*/
    $(document).ready(function(){
        $('.head_nav li').on('touchstart',function(e){
            e.preventDefault();
            $('.head_nav li').removeClass('active');
            $(this).addClass('active');
            $('.head_nav').siblings('.con_box').children().removeClass('cur');
            $(this).parent().siblings('.con_box').children().eq($(this).index()).addClass('cur');
        });

        /*模态框的js开始*/
        var closeFn;
        function closeShowingModal(liked) {
            if (liked !== undefined) {
                _gaq.push(['_trackEvent', 'ctajs', liked ? 'liked' : 'unliked']);
            }
            var showingModal = document.querySelector('.modal.show');
            if (!showingModal) return;
            showingModal.classList.remove('show');
            document.body.classList.remove('disable-mouse');
            if (closeFn) {
                closeFn();
                closeFn = null;
            }
        }
        document.addEventListener('click', function (e) {
            var target = e.target;
            if (target.dataset.ctaTarget) {
                _gaq.push(['_trackEvent', 'ctajs', 'modal']);
                closeFn = cta(target, document.querySelector(target.dataset.ctaTarget), { relativeToWindow: true }, function showModal(modal) {
                    modal.classList.add('show');
                    document.body.classList.add('disable-mouse');
                });
            }
            else if (target.classList.contains('modal-close-btn')) {
                closeShowingModal();
            }
        });
        document.addEventListener('keyup', function (e) {
            if (e.which === 27) {
                closeShowingModal();
            }
        })
        var _gaq = _gaq || [];
        $('.click_1').click(function(){
            closeShowingModal(true); return;
        });
        $('.click_2').click(function(){
            closeShowingModal(false); return;
        });
        /*模态框的js结束*/

    });

/*var tabsSwiper = new Swiper('.swiper-container',{
    speed:500,
    onSlideChangeStart: function(){
        $(".head_nav li").removeClass('active');
        $(".head_nav li").eq(tabsSwiper.activeIndex).addClass('active');
    }
});

$(".head_nav li").on('touchstart mousedown',function(e){
    e.preventDefault()
    $(".head_nav li").removeClass('active');
    $(this).addClass('active');
    //tabsSwiper.swipeTo($(this).index());
});

$(".head_nav li").click(function(e){
    e.preventDefault();
});*/