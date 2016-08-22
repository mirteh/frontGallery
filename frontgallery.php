<?php 
    /*
    Plugin Name: frontGallery
    Plugin URI: https://github.com/mirteh/gallery
    Description: Plugin for displaying images inside gallery.
    Author: Mirte H
    Version: 1.0
    Author URI: http://www.mirte-h.be
    */

	function wptuts_scripts_basic() {
	    wp_register_script('frontGallery', plugins_url( '/js/frontGallery.min.js', __FILE__ ));
	    wp_enqueue_script('frontGallery');
	    wp_register_style('frontGalleryStyle', plugins_url('/css/min.style.css',__FILE__ ));
		wp_enqueue_style('frontGalleryStyle');
	}

	add_action( 'wp_enqueue_scripts', 'wptuts_scripts_basic' );

	/*function loadFrontGallery() { ?>
		<script type="text/javascript">
			frontGallery({
			  'aniClass' : 'class-name',	
		      'aniTime': 500,
		      'aniTransition': 'fade',
		    }); 
		</script>	
	<?php }
	add_action( 'wp_footer', 'loadFrontGallery' ); */

?> 