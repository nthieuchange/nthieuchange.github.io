$(document).ready(function () {
  // Load footer
  $(".add-footer").load("./footer.html");

  // Show charts
          var data = [
      { period: '2017-04-17', a: 10, b: 30},
      { period: '2017-04-18', a: 0,  b: 0},
      { period: '2017-04-19', a: 20,  b: 0},
      { period: '2017-04-20', a: 0,  b: 40},
      { period: '2017-04-21', a: 20,  b: 0},
      { period: '2017-04-22', a: 0,  b: 30},
      { period: '2017-04-23', a: 10, b: 35}
    ],
    config = {
      data: data,
      xkey: 'period',
      ykeys: ['b', 'a'],
      labels: ['Thu', 'Chi'],
      fillOpacity: 0.6,
      hideHover: 'auto',
      behaveLikeLine: true,
      resize: true,
      pointFillColors:['#ffffff'],
      pointStrokeColors: ['black'],
      lineColors:['green','red']
  };
config.element = 'member-credit-chart';
Morris.Line(config);
          Morris.Donut({
              element: 'category-chart',
              data: [{
                  label: "Tổng thu",
                  value: 289
              }, {
                  label: "Tổng chi",
                  value: 123
              }],
              resize: true,
              colors: ['green','red']
          });
  // Show problems table
  $(".admin-search-problem").keyup(function() {
      var searchTerm = $(".admin-search-problem").val();
      var listItem = $('.results tbody').children('tr');
      var searchSplit = searchTerm.replace(/ /g, "'):containsi('")

      $.extend($.expr[':'], {
          'containsi': function(elem, i, match, array) {
              return (elem.textContent || elem.innerText || '').toLowerCase().indexOf((match[3] || "").toLowerCase()) >= 0;
          }
      });

      $(".results tbody tr").not(":containsi('" + searchSplit + "')").each(function(e) {
          $(this).attr('visible', 'false');
      });

      $(".results tbody tr:containsi('" + searchSplit + "')").each(function(e) {
          $(this).attr('visible', 'true');
      });

      var jobCount = $('.results tbody tr[visible="true"]').length;
      $('.counter').text(jobCount + ' item');

      if (jobCount == '0') {
          $('.no-result').show();
      } else {
          $('.no-result').hide();
      }
  });
});
