$(document).ready(function() {

   /* admin_revenue_statistics.html*/
   // Show charts
           Morris.Line({
               element: 'revenue-statistics-chart',
               data: [{
                   period: '2017-01',
                   problems: 50
               }, {
                   period: '2017-02',
                   problems: 100
               }, {
                   period: '2017-03',
                   problems: 130
               }, {
                   period: '2017-04',
                   problems: 160
               }, {
                   period: '2017-05',
                   problems: 100
               }, {
                   period: '2017-06',
                   problems: 0
               }, {
                   period: '2017-07',
                   problems: 0
               }, {
                   period: '2017-08',
                   problems: 0
               }, {
                   period: '2017-09',
                   problems: 0
               }, {
                   period: '2017-10',
                   problems: 0
               }, {
                   period: '2017-11',
                   problems: 0
               }, {
                   period: '2017-12',
                   problems: 0
               }],
               xkey: 'period',
               ykeys: ['problems'],
               labels: ['Tổng doanh thu (credit)'],
               resize: true,
               lineColors: ['green']
           });
   // Show problems table
   $(".admin-search-revenue-credit").keyup(function() {
       var searchTerm = $(".admin-search-revenue-credit").val();
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
