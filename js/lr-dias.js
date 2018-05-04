'use strict'
$(function () {
  $("[type='button']").on('click',function () {
    if($(this).val() == "查询"){
      $("#container").hide();
      $("#docresource-chart").hide();
      $("#generally-chart-content").show();
      $("#generally-chart-content2").hide();
    }else{
      $("#container").show();
      $("#docresource-chart").show();
      $("#generally-chart-content").hide();
      $("#generally-chart-content2").show();
    }
  });

});
function init() { //表格高度自适应
    var maxHeight = $(window).height();
    var headH = $(".header").height();
    var rightTopH = $(".le-rer-top").height();
    var padmarH = 15 + 20 + 15;
    var tableH = $(".pacs-table-head").height();
    var pageH = 62;
    //高度计算
    var leftheight = maxHeight - headH - 23;
    var rightHeight = leftheight - 288;
    $('.le-remc-left').css('height',leftheight+'px');
    $('.generally-table-box').css('height',rightHeight+'px');
};
