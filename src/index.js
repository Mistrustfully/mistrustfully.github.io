var pathName = window.location.pathname;

$('nav a').each(function() {
    var $self = $(this);
    if($self.attr('href') ==pathName){
        $self.addClass('active');
    }
})