<?php
/**
 * Functions to make Underscores work with Foundation
 */

function _s_foundation_scripts() {
	wp_enqueue_script( '_s-foundation', get_template_directory_uri() . '/js/foundation.js', array( 'jquery' ), '20130115' );
	wp_enqueue_script( '_s-app', get_template_directory_uri() . '/js/app.js', array( 'jquery' ), '20130115', true );
}
add_action( 'wp_enqueue_scripts', '_s_foundation_scripts' );

function _s_nav_menu( $args ) {

	$defaults = array(
		'theme_location' => '',
		'container' => false,
		'menu_class' => '',
		'walker' => '_s_Walker_Nav_Menu'
	);

	$args = wp_parse_args( $args, $defaults );

	extract( $args );

	if ( ! $theme_location )
		return;

	$locations = get_nav_menu_locations();

	if ( ! $locations )
		return;

	if ( ! isset( $locations[ $theme_location ] ) )
		return;

	// Instantiate the Walker class
	if ( ! empty( $walker ) ) {
		if ( class_exists( $walker ) ) {
            $r = new ReflectionClass( $walker );
            $walker = $r->newInstanceArgs();
        }
        else {
        	$walker = '';
        }
	}

	wp_nav_menu( 
		array( 
			'theme_location' => $theme_location,
			'container' => false,
			'menu_class' => $menu_class,
			'walker' => $walker
		) 
	);
}

add_filter( 'wp_nav_menu_objects', '_s_add_foundation_menu_classes' );
function _s_add_foundation_menu_classes( $menu_items ) {
	$new_menu_items = $menu_items;
	foreach ( $menu_items as $key => $menu_item ) {
		$new_menu_item = $menu_item;
		if ( in_array( 'menu-item-has-children', $menu_item->classes ) )
			$new_menu_item->classes[] = 'has-dropdown';

		if ( in_array( 'current-menu-item', $menu_item->classes ) )
			$new_menu_item->classes[] = 'active';
	}

	return $new_menu_items;
}

/**
 * Extend the WP Nav Menu Walker just to add a class that
 * will make the menu work with Foundation
 */
class _s_Walker_Nav_Menu extends Walker_Nav_Menu {
	
	function start_lvl( &$output, $depth = 0, $args = array() ) {
		$indent = str_repeat("\t", $depth);
		$output .= "\n$indent<ul class=\"sub-menu dropdown\">\n";
	}


} // _s_Walker_Nav_Menu

