/*
	Spectral by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body'),
		$wrapper = $('#page-wrapper'),
		$banner = $('#banner'),
		$header = $('#header');

	// Breakpoints.
		breakpoints({
			xlarge:   [ '1281px',  '1680px' ],
			large:    [ '981px',   '1280px' ],
			medium:   [ '737px',   '980px'  ],
			small:    [ '481px',   '736px'  ],
			xsmall:   [ null,      '480px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Mobile?
		if (browser.mobile)
			$body.addClass('is-mobile');
		else {

			breakpoints.on('>medium', function() {
				$body.removeClass('is-mobile');
			});

			breakpoints.on('<=medium', function() {
				$body.addClass('is-mobile');
			});

		}

	// Scrolly.
		$('.scrolly')
			.scrolly({
				speed: 1500,
				offset: $header.outerHeight()
			});

	// Menu.
		$('#menu')
			.append('<a href="#menu" class="close"></a>')
			.appendTo($body)
			.panel({
				delay: 500,
				hideOnClick: true,
				hideOnSwipe: true,
				resetScroll: true,
				resetForms: true,
				side: 'right',
				target: $body,
				visibleClass: 'is-menu-visible'
			});

	// Header.
		if ($banner.length > 0
		&&	$header.hasClass('alt')) {

			$window.on('resize', function() { $window.trigger('scroll'); });

			$banner.scrollex({
				bottom:		$header.outerHeight() + 1,
				terminate:	function() { $header.removeClass('alt'); },
				enter:		function() { $header.addClass('alt'); },
				leave:		function() { $header.removeClass('alt'); }
			});

		}

		memoryobj={
			"HasImages": true,
			"HasVideo": false,
			"HasAudio": false,
			"Id": "00000000-0000-0000-0000-000000000000",
			"Name": null,
			"Text": null,
			"SummarizedText": null,
			"Concepts": null,
			"Images": [
			  {
				"Url": "https://serving.photos.photobox.com/08781077f685bc9c6e9573abcfc6eb1f5615111a489f1ad05b0f6e7571755be016b2efef.jpg",
				"Tags": [
				  "person"
				],
				"Description": "Rachid Arma sitting next to a laptop"
			  },
			  {
				"Url": "https://serving.photos.photobox.com/25989007e1f8f692b3e14d3ab98ad06f46cc6960df34783d56238af50f675949cb9bebb2f640483789ea65ea.jpg",
				"Tags": [
				  "person",
				  "sitting",
				  "laptop",
				  "indoor",
				  "people"
				],
				"Description": "a group of people sitting in front of a laptop"
			  },
			  {
				"Url": "https://serving.photos.photobox.com/48907020421b223e7008bcdaf732b6cfb7a1ed5a844b711541b22dfa0d2635257e8ab2a4.jpg",
				"Tags": [
				  "laptop",
				  "indoor",
				  "computer",
				  "table",
				  "sitting"
				],
				"Description": "an open laptop computer sitting on top of a table"
			  }
			],
			"Video": null,
			"Audio": null
		  }

		$.each(json, function(idx, obj) {
			
		});

})(jQuery);

function searchToggle(obj, evt){
    var container = $(obj).closest('.search-wrapper');

    if(!container.hasClass('active')){
            container.addClass('active');
			evt.preventDefault();

    }
    else if(container.hasClass('active') && $(obj).closest('.input-holder').length == 0){
            container.removeClass('active');
            // clear input
            container.find('.search-input').val('');
            // clear and hide result container when we press close
            container.find('.result-container').fadeOut(100, function(){$(this).empty();});
    }
}

function submitFn(obj, evt){
    value = $(obj).find('.search-input').val().trim();

    _html = "Searching for: ";
    if(!value.length){
        _html = "Ehem, I can't search nothing";
    }
    else{
        _html += "<b>" + value + "</b>";
		ele=document.getElementById("three");
		console.log(ele);
		ele.style.display = "flex";
    }

    $(obj).find('.result-container').html('<span>' + _html + '</span>');
    $(obj).find('.result-container').fadeIn(100);

    evt.preventDefault();
}
