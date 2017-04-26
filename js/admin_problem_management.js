$(document).ready(function(){
    // Show charts
    $.getScript('http://cdnjs.cloudflare.com/ajax/libs/raphael/2.1.0/raphael-min.js', function() {
        $.getScript('http://cdnjs.cloudflare.com/ajax/libs/morris.js/0.5.0/morris.min.js', function() {
            Morris.Line({
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
            Morris.Donut({
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
        });
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
        $('.counter').text(jobCount + ' bài đăng');

        if (jobCount == '0') {
            $('.no-result').show();
        } else {
            $('.no-result').hide();
        }
    });
});

function reload(){
    $('#problems-chart').empty();
    Morris.Line({
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
        labels: ['Bài viết']
    });
}
