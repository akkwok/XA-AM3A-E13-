$(function () {
    //scrollreveal
    window.sr = ScrollReveal({
        reset: true,
        distance: '20px',
        scale:1,
        easing:'ease-in-out',
        duration: 800,
        viewFactor: 0.5
    });
    // sr.reveal('#hd_top_spec', {
    //     reset: true,
    //     opacity:1,
    //     distance:0,
    //     duration: 0,
    //     delay: 0,
    //     afterReveal: function(){
    //         $("#hd_top_spec .w1200").addClass("txt_move");
    //     },
    //     beforeReset: function(){
    //         $("#hd_top_spec .w1200").removeClass("txt_move");
    //     }
    // }); 
    sr.reveal('#ESC-Sustainability', {
        reset: true,
        opacity:1,
        distance:0,
        duration: 0,
        delay: 0,
        afterReveal: function(){
            // $("#ESC-Liquid .pop_ul li").addClass("ico_move");
        },
        // beforeReset: function(){
        //     $("#LiquidCooling-Effectiveness .txt_box").removeClass("txt_move");
        // }
    }); 
    sr.reveal('#ESC-KV', {
        reset: true,
        opacity:1,
        distance:0,
        duration: 0,
        delay: 0,
        afterReveal: function(){
            $("#ESC-KV .maintitle").addClass("dtot_move_margintop");
            $("#ESC-KV .esc_pd").addClass("bg_ltor_move");
        },
        // beforeReset: function(){
        
        // }
    });
    sr.reveal('#ESC-PCIe', {
        reset: true,
        opacity:1,
        distance:0,
        duration: 0,
        delay: 0,
        afterReveal: function(){
            $("#ESC-PCIe .section_info").addClass("dtot_move_margintop");
            $("#ESC-PCIe #PCIe_list").addClass("list_motion");
        },
        // beforeReset: function(){
        
        // }
    }); 
    sr.reveal('#ESC-Sustainability', {
        reset: true,
        opacity:1,
        distance:0,
        duration: 0,
        delay: 0,
        afterReveal: function(){
            $("#ESC-Sustainability .section_info").addClass("dtot_move_margintop");
            $("#ESC-Sustainability #Sustainability_list").addClass("list_motion");
        },
        // beforeReset: function(){
        
        // }
    });
    sr.reveal('#ESC-Storage', {
        reset: true,
        opacity:1,
        distance:0,
        duration: 0,
        delay: 0,
        afterReveal: function(){
            $("#ESC-Storage .section_info_none").addClass("dtot_move_margintop");
            $("#ESC-Storage .eight_area").addClass("active");
        },
        // beforeReset: function(){
        
        // }
    });
    sr.reveal('#ESC-Management', {
        reset: true,
        opacity:1,
        distance:0,
        duration: 0,
        delay: 0,
        afterReveal: function(){
            $("#ESC-Management .section_info").addClass("dtot_move_margintop");
            $("#ESC-Management #Management_list").addClass("list_motion");
        },
        // beforeReset: function(){
        
        // }
    });
    sr.reveal('#ESC-Omniverse', {
        reset: true,
        opacity:1,
        distance:0,
        duration: 0,
        delay: 0,
        afterReveal: function(){
            $("#ESC-Omniverse .maintitle").addClass("dtot_move_margintop_v2");
            $("#ESC-Omniverse .solution__containter").addClass("ttod_move_margintop_v2");
        },
        // beforeReset: function(){
        
        // }
    }); 
    sr.reveal('#ESC-Serviceability', {
        reset: true,
        opacity:1,
        distance:0,
        duration: 0,
        delay: 0,
        afterReveal: function(){
            $("#ESC-Serviceability .maintitle").addClass("dtot_move_margintop_v2");
            $("#ESC-Serviceability .tool_ul").addClass("ttod_move_margintop_v2");
        },
        // beforeReset: function(){
        
        // }
    });
    sr.reveal('#ESC-Performance', {
        reset: true,
        opacity:1,
        distance:0,
        duration: 0,
        delay: 0,
        afterReveal: function(){
            $("#ESC-Performance .maintitle").addClass("dtot_move_margintop_v2");
            $("#ESC-Performance .text_icon_list").addClass("ttod_move_margintop_v2");
        },
        // beforeReset: function(){
        
        // }
    }); 
    sr.reveal('#ESC-MLPerf', {
        reset: true,
        opacity:1,
        distance:0,
        duration: 0,
        delay: 0,
        afterReveal: function(){
            $("#ESC-MLPerf .maintitle").addClass("dtot_move_margintop");
        },
        // beforeReset: function(){
        
        // }
    }); 
    

})