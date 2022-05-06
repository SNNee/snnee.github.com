$('.b1').on('click',(e)=>{
    $(".box1").show();
    $(".box2").hide();
    $(".box3").hide();
})
$('.b2').on('click',(e)=>{
    $(".box1").hide();
    $(".box2").show();
    $(".box3").hide();
})

$('.b3').on('click',(e)=>{
    $(".box1").hide();
    $(".box2").hide();
    $(".box3").show();
})




$('body').on('click', (e)=>{
    let $b = $(e.currentTarget).children();
    $b.eq(0).children().eq(1).addClass('hide');
 })
 
 $('body').on('click','.u-pic', (e)=>{
    picExpand(e);
    e.stopPropagation();
 })
 
 function picExpand(e) {
   let t = e.currentTarget;
   let len = $(t).parent().parent().children().length;
   let $d = $(t).parent().next();
   $d.removeClass('hide');
   $d.find('.u-pic').remove();
   $d.append($(t).clone()); 
 }

 var selected = '1';

 $('body').on('click', '.u-tab', (e)=>{
   slideDoor(e);
 })
 
 function slideDoor(e) {
   let t = e.currentTarget;
   let next = $(t).attr('data_id');
   $(t).parent().find('.focus').removeClass('focus');
   $(t).addClass('focus');
   let contentList = $(t).parent().next().children();
   contentList.map((index,item)=>{
       let id = $(item).attr('data_id');
       console.log(id);
       if ( id === selected) {
         $(item).addClass('hide'); 
       }
       if ( id === next) {
         $(item).removeClass('hide'); 
       }
   })
   selected = next;
 }

 var num = 0; 

 $('body').on('click', '.u-add', (e) => {
   doAdd(e);
 })
 
 $('body').on('click', '.u-del', (e) => {
   doDel(e);
 })
 
 function doAdd(e) {
   let t = e.currentTarget;
   let item = `<div class="u-content"><div class="u-no">${++num}</div><div class="u-info"></div><div class="u-del">Delete</div></div>`
   $(t).prev().append(item);
 }
 
 function doDel(e) {
   let t = e.currentTarget;
   $(t).parent().remove();
   num --;
   upload();
 }
 
 function upload() {
   let contentList = $('.m-data').children();
   let i = num;
   contentList.map((index,item)=>{
       $(item).find('.u-no').text(num - (--i));
   })
 }