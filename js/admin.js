
var chart1;
var chart2;
var chart3;
$(document).on("click",".sidebar-toggle",function(){
    $(".wrapper").toggleClass("toggled");
});
$(document).ready(function(){
    // Show charts
    loadCharts();

    // Show problems table
    $(".admin-search-problem").keyup(function() {
        var searchTerm = $(".admin-search-problem").val();
        var listItem = $('#admin-problem-table.results tbody').children('tr');
        var searchSplit = searchTerm.replace(/ /g, "'):containsi('")

        $.extend($.expr[':'], {
            'containsi': function(elem, i, match, array) {
                return (elem.textContent || elem.innerText || '').toLowerCase().indexOf((match[3] || "").toLowerCase()) >= 0;
            }
        });

        $("#admin-problem-table.results tbody tr").not(":containsi('" + searchSplit + "')").each(function(e) {
            $(this).attr('visible', 'false');
        });

        $("#admin-problem-table.results tbody tr:containsi('" + searchSplit + "')").each(function(e) {
            $(this).attr('visible', 'true');
        });

        var jobCount = $('#admin-problem-table.results tbody tr[visible="true"]').length;
        $('.counter').text(jobCount + ' bài đăng');

        if (jobCount == '0') {
            $('.no-result').show();
        } else {
            $('.no-result').hide();
        }
    });

    $('.btn-filter').on('click', function () {
        var $target = $(this).data('target');
        if ($target != 'all') {
            $('.table tbody tr').css('display', 'none');
            $('.table tr[data-status="' + $target + '"]').fadeIn('slow');
        } else {
            $('.table tbody tr').css('display', 'none').fadeIn('slow');
        }
    });

    $('#checkall').on('click', function () {
        if ($("#mytable #checkall").is(':checked')) {
            $("#mytable input[type=checkbox]").each(function () {
                $(this).prop("checked", true);
            });

        } else {
            $("#mytable input[type=checkbox]").each(function () {
                $(this).prop("checked", false);
            });
        }
    });

    // Show problems table
    $(".admin-search-member").keyup(function() {
        var searchTerm = $(".admin-search-member").val();
        var listItem = $('#member-table.results tbody').children('tr');
        var searchSplit = searchTerm.replace(/ /g, "'):containsi('")

        $.extend($.expr[':'], {
            'containsi': function(elem, i, match, array) {
                return (elem.textContent || elem.innerText || '').toLowerCase().indexOf((match[3] || "").toLowerCase()) >= 0;
            }
        });

        $("#member-table.results tbody tr").not(":containsi('" + searchSplit + "')").each(function(e) {
            $(this).attr('visible', 'false');
        });

        $("#member-table.results tbody tr:containsi('" + searchSplit + "')").each(function(e) {
            $(this).attr('visible', 'true');
        });

        var jobCount = $('#member-table.results tbody tr[visible="true"]').length;

        if (jobCount == '0') {
            $('.no-result').show();
        } else {
            $('.no-result').hide();
        }
    });

    // Show problems table
    $(".admin-search-revenue-credit").keyup(function() {
        var searchTerm = $(".admin-search-revenue-credit").val();
        var listItem = $('#admin-revenue-credit-table.results tbody').children('tr');
        var searchSplit = searchTerm.replace(/ /g, "'):containsi('")

        $.extend($.expr[':'], {
            'containsi': function(elem, i, match, array) {
                return (elem.textContent || elem.innerText || '').toLowerCase().indexOf((match[3] || "").toLowerCase()) >= 0;
            }
        });

        $("#admin-revenue-credit-table.results tbody tr").not(":containsi('" + searchSplit + "')").each(function(e) {
            $(this).attr('visible', 'false');
        });

        $("#admin-revenue-credit-table.results tbody tr:containsi('" + searchSplit + "')").each(function(e) {
            $(this).attr('visible', 'true');
        });

        var jobCount = $('#admin-revenue-credit-table.results tbody tr[visible="true"]').length;
        $('.counter').text(jobCount + ' item');

        if (jobCount == '0') {
            $('.no-result').show();
        } else {
            $('.no-result').hide();
        }
    });

    $('ul.sidebar-nav a').on('shown.bs.tab', function (e) {
        //Resize();
        chart1.redraw();
        chart2.redraw();
        chart3.redraw();

    });
});

function loadCharts() {
    chart1 = Morris.Line({
        element: 'problems-chart',
        data: [{
            period: '2017-04-20',
            problems: 120
        }, {
            period: '2017-04-21',
            problems: 100
        }, {
            period: '2017-04-22',
            problems: 95
        }, {
            period: '2017-04-23',
            problems: 130
        }, {
            period: '2017-04-24',
            problems: 160
        }],
        xkey: 'period',
        ykeys: ['problems'],
        labels: ['Bài viết'],
        resize: true
    });
    chart2 = Morris.Donut({
        element: 'category-chart',
        data: [{
            label: "Môn học",
            value: 324
        }, {
            label: "Chuyên ngành",
            value: 256
        }, {
            label: "Lập trình",
            value: 456
        }, {
            label: "Tin học ứng dụng",
            value: 399
        }, {
            label: "Ngoại ngữ",
            value: 153
        }, {
            label: "Sửa máy tính",
            value: 534
        }, {
            label: "Thiết kế",
            value: 267
        }],
        resize: true,
        colors: ['red','green','blue','yellow','purple','brown','gray']
    });
    chart3 = Morris.Line({
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
		}],
        xkey: 'period',
        ykeys: ['problems'],
        labels: ['Tổng doanh thu (credit)'],
        resize: true,
        lineColors: ['green']
    });
}
