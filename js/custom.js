// USED LIBRARIES:
  // materialize 0.100.2
  // jquery 2.2.2
  // isotope (used for filtering elements) - https://isotope.metafizzy.co/
/*

ISOTOPE

*/

//GENERAL
// init Isotope
var $grid = $('.grid').isotope({
  itemSelector: '.homeCards',
  getSortData: {
    year:'[data-year] parseInt',
    name:'[data-name]',
  }
});

// filter functions
var filterFns = {
  // show if number is greater than 50
  numberGreaterThan50: function() {
    var number = $(this).find('.number').text();
    return parseInt( number, 10 ) > 50;
  }
};

//FUNCTIONS FOR SPANS

// bind filter button click
$('.filters').on( 'click', 'span', function() {
  var filterValue = $( this ).attr('data-filter');
  // use filterFn if matches value
  filterValue = filterFns[ filterValue ] || filterValue;
  $grid.isotope({ filter: filterValue });
});

// change is-checked class on buttons
$('.filter-item').each( function( i,Filters ) {
  var $Filters = $(".filters");
  $Filters.on( 'click', '.filter-item', function() {
    $Filters.find('.is-checked').removeClass('is-checked');
    $( this ).addClass('is-checked');
  });
});


// FUNCTIONS FOR SELECT
// filter by project type

// bind filter on select change
$('#filter-project-type').on( 'change', function() {
  // get filter value from option value
  var filterValue = this.value;
  // use filterFn if matches value
  filterValue = filterFns[ filterValue ] || filterValue;
  $grid.isotope({ filter: filterValue });
});

// FUNCTIONS FOR SORTING BY YEAR
$('#filter-year').change(function(){
  var sortValue =  $(this).find(':selected').attr('data-sort-value');
  var direction = $(this).find(':selected').attr('data-sort-direction');
   /* convert it to a boolean */
    var isAscending = (direction == 'asc');
    var newDirection = (isAscending) ? 'desc' : 'asc';
  /* pass it to isotope */

  if (sortValue == "") {
    $grid.isotope({ sortBy : 'original-order' });
  } else { 
    $grid.isotope({ sortBy: sortValue, sortAscending: isAscending });
    $(this).attr('data-sort-direction', newDirection);
  }
});

/*

MATERILIZE

*/

//init form select
$(document).ready(function() {
    $('select').material_select();
    $('.select-wrapper span.caret').html('<i class="material-icons" style="line-height: inherit; color: #00000070; font-size: 24px;">expand_more</i>');
 
 //prevent flickr

 $('.filters-select').on('mousedown',function(event){
 // event.preventDefault();
  console.log("down");
})
 //end ready function
  });

// OTHER

//class="responsive-img"
$(".post").find("img").addClass("responsive-img");