// init Isotope
var $grid = $('#product-list').isotope({
    // options
});
// filter items on button click
$('.filter-button-group').on( 'click', function() {
    var filterValue = $(this).attr('data-filter');
    if( $('#product-list ' + filterValue).length>0 )
    {
        $grid.isotope({ filter: filterValue });
        $('.empty').css('display','none');
    }
    else
    {
        $('.empty').css('display','block');
        $grid.isotope({ filter: '.empty' });
    }
});