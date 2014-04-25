$('.view, .team-name').addClass('transparent');

$(document).ready(function(){
	$('.team-name').addClass('not-transparent animated fadeInDownBig');
	$('.team-name').on('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
		$('#jun-thumbnail').addClass('not-transparent animated fadeIn');
		$('#jun-thumbnail').on('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
			$('#jeff-thumbnail').addClass('not-transparent animated fadeIn');
			$('#jeff-thumbnail').on('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
				$('#ren-thumbnail').addClass('not-transparent animated fadeIn');
				$('#ren-thumbnail').on('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
					$('#ed-thumbnail').addClass('not-transparent animated fadeIn');
				});
			});
		});
	});

	(function() {
		var container = document.querySelector( 'div.container' ),
			triggerJun = document.getElementById('trigger-jun'),
			overlayJun = document.getElementById('overlay-jun'),
			triggerBttn = document.getElementById( 'trigger-overlay' ),
			overlay = document.querySelector( 'div.overlay' ),
			closeBttn = overlay.querySelector( 'a.overlay-close' );
			transEndEventNames = {
				'WebkitTransition': 'webkitTransitionEnd',
				'MozTransition': 'transitionend',
				'OTransition': 'oTransitionEnd',
				'msTransition': 'MSTransitionEnd',
				'transition': 'transitionend'
			},
			transEndEventName = transEndEventNames[ Modernizr.prefixed( 'transition' ) ],
			support = { transitions : Modernizr.csstransitions };

		function toggleOverlay() {
			if( classie.has( overlay, 'open' ) ) {
				classie.remove( overlay, 'open' );
				classie.remove( container, 'overlay-open' );
				classie.add( overlay, 'close' );
				var onEndTransitionFn = function( ev ) {
					if( support.transitions ) {
						if( ev.propertyName !== 'visibility' ) return;
						this.removeEventListener( transEndEventName, onEndTransitionFn );
					}
					classie.remove( overlay, 'close' );
				};
				if( support.transitions ) {
					overlay.addEventListener( transEndEventName, onEndTransitionFn );
				}
				else {
					onEndTransitionFn();
				}
			}
			else if( !classie.has( overlay, 'close' ) ) {
				classie.add( overlay, 'open' );
				classie.add( container, 'overlay-open' );
			}
		}

		triggerJun.addEventListener( 'click', toggleOverlay );
		closeBttn.addEventListener( 'click', toggleOverlay );
	})();
});