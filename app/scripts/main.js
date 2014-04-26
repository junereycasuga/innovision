$('.view, .team-name').addClass('transparent');

$(document).ready(function(){
	$('.view-details').removeClass('transparent');
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
		var junTrigger = document.getElementById( 'trigger-junerey' ),
			jeffTrigger = document.getElementById('trigger-jeff'),
			renTrigger = document.getElementById('trigger-ren'),
			edTrigger = document.getElementById('trigger-ed'),
			junOverlay = document.querySelector('div#overlay-jun'),
			jeffOverlay = document.querySelector('div#overlay-jeff'),
			renOverlay = document.querySelector('div#overlay-ren'),
			edOverlay = document.querySelector('div#overlay-ed'),
			junereyClose = junOverlay.querySelector( 'a.overlay-close' ),
			jeffClose = jeffOverlay.querySelector('a.overlay-close'),
			renClose = renOverlay.querySelector('a.overlay-close'),
			edClose = edOverlay.querySelector('a.overlay-close'),
			transEndEventNames = {
				'WebkitTransition': 'webkitTransitionEnd',
				'MozTransition': 'transitionend',
				'OTransition': 'oTransitionEnd',
				'msTransition': 'MSTransitionEnd',
				'transition': 'transitionend'
			},
			transEndEventName = transEndEventNames[ Modernizr.prefixed( 'transition' ) ],
			support = { transitions : Modernizr.csstransitions };

		function toggleOverlayJun() {
			if( classie.has( junOverlay, 'open' ) ) {
				classie.remove( junOverlay, 'open' );
				classie.add( junOverlay, 'close' );
				var onEndTransitionFn = function( ev ) {
					if( support.transitions ) {
						if( ev.propertyName !== 'visibility' ) return;
						this.removeEventListener( transEndEventName, onEndTransitionFn );
					}
					classie.remove( junOverlay, 'close' );
				};
				if( support.transitions ) {
					junOverlay.addEventListener( transEndEventName, onEndTransitionFn );
				}
				else {
					onEndTransitionFn();
				}
			}
			else if( !classie.has( junOverlay, 'close' ) ) {
				classie.add( junOverlay, 'open' );
			}
		}

		function toggleOverlayJeff() {
			if( classie.has( jeffOverlay, 'open' ) ) {
				classie.remove( jeffOverlay, 'open' );
				classie.add( jeffOverlay, 'close' );
				var onEndTransitionFn = function( ev ) {
					if( support.transitions ) {
						if( ev.propertyName !== 'visibility' ) return;
						this.removeEventListener( transEndEventName, onEndTransitionFn );
					}
					classie.remove( jeffOverlay, 'close' );
				};
				if( support.transitions ) {
					jeffOverlay.addEventListener( transEndEventName, onEndTransitionFn );
				}
				else {
					onEndTransitionFn();
				}
			}
			else if( !classie.has( jeffOverlay, 'close' ) ) {
				classie.add( jeffOverlay, 'open' );
			}
		}

		function toggleOverlayRen() {
			if( classie.has( renOverlay, 'open' ) ) {
				classie.remove( renOverlay, 'open' );
				classie.add( renOverlay, 'close' );
				var onEndTransitionFn = function( ev ) {
					if( support.transitions ) {
						if( ev.propertyName !== 'visibility' ) return;
						this.removeEventListener( transEndEventName, onEndTransitionFn );
					}
					classie.remove( renOverlay, 'close' );
				};
				if( support.transitions ) {
					renOverlay.addEventListener( transEndEventName, onEndTransitionFn );
				}
				else {
					onEndTransitionFn();
				}
			}
			else if( !classie.has( renOverlay, 'close' ) ) {
				classie.add( renOverlay, 'open' );
			}
		}

		function toggleOverlayEd() {
			if( classie.has( edOverlay, 'open' ) ) {
				classie.remove( edOverlay, 'open' );
				classie.add( edOverlay, 'close' );
				var onEndTransitionFn = function( ev ) {
					if( support.transitions ) {
						if( ev.propertyName !== 'visibility' ) return;
						this.removeEventListener( transEndEventName, onEndTransitionFn );
					}
					classie.remove( edOverlay, 'close' );
				};
				if( support.transitions ) {
					edOverlay.addEventListener( transEndEventName, onEndTransitionFn );
				}
				else {
					onEndTransitionFn();
				}
			}
			else if( !classie.has( edOverlay, 'close' ) ) {
				classie.add( edOverlay, 'open' );
			}
		}

		junTrigger.addEventListener( 'click', toggleOverlayJun );
		jeffTrigger.addEventListener( 'click', toggleOverlayJeff);
		renTrigger.addEventListener( 'click', toggleOverlayRen);
		edTrigger.addEventListener( 'click', toggleOverlayEd);

		junereyClose.addEventListener( 'click', toggleOverlayJun );
		jeffClose.addEventListener( 'click', toggleOverlayJeff)
		renClose.addEventListener( 'click', toggleOverlayRen);
		edClose.addEventListener( 'click', toggleOverlayEd);
	})();
});