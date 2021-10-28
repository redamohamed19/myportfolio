$(function() {
  $('.chart').easyPieChart({
    size: 160,
    barColor: 'green',
    lineWidth: 10,
    trackColor: 'grey',
    animate: 1000,
    lineCap: 'square'
  });

  $('.resp_navbar').click(function() {
    $('.resp_navbar').toggleClass('active');
    $('.navsup').toggleClass('show');
    $('.f1s2left').toggleClass('active2');
  });
});
