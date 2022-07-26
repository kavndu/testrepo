(function( wp, $ ) {
  'use strict';

  if ( ! wp ) {
    return;
  }

  function activatePlugin( url, el ) {
    var message = el.data( 'message' );

    $.ajax( {
      async: true,
      type: 'GET',
      dataType: 'html',
      url: url,
      success: function() {
        el.removeClass( 'rfc-updating' );
        el.text( message );
      }
    } );
  }

  $( function() {
    $( document ).on( 'click', '.rfc-plugin-button', function( event ) {
      var action = $( this ).data( 'action' ),
          url = $( this ).attr( 'href' ),
          slug = $( this ).data( 'slug' );

      event.preventDefault();

      if ( 'install' === action ) {

        $( this ).addClass( 'rfc-updating disabled' );

        wp.updates.installPlugin( {
          slug: slug
        } );

      } else if ( 'activate' === action ) {

        $( this ).addClass( 'rfc-updating disabled' );
        activatePlugin( url, $( this ) );

      }

    } );

    $( document ).on( 'wp-plugin-install-success', function( response, data ) {
      var el = $( '.rfc-plugin-button[data-slug="' + data.slug + '"]' );
      event.preventDefault();
      activatePlugin( data.activateUrl, el );
    } );

  } );
})( window.wp, jQuery );
