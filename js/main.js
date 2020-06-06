$(function(){
//   sticky menu 
    $(window).scroll(function(){
        var scroll =$(window).scrollTop();
        
        if(scroll > 300){
            $('.navbar').addClass('Sticky');
        }else{
            $('.navbar').removeClass('Sticky');
        }
        
        
    });
    
//    main-menu
    $('.toggle_btn').click(function(){
        $('.menu').toggleClass('active_slide');
        $('span').toggleClass('humbar');
    });
    
    
    
    
    
});