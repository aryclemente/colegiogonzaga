<?php
/**
 * Hello Elementor Child functions and definitions
 *
 * @package HelloElementorChild
 */

/**
 * Enqueue styles from parent theme and child theme.
 */
function hello_elementor_child_enqueue_styles() {
	// Enqueue parent styles
	wp_enqueue_style( 'hello-elementor-parent-style', get_template_directory_uri() . '/style.css' );

	// Enqueue child styles
	wp_enqueue_style( 'hello-elementor-child-style',
		get_stylesheet_directory_uri() . '/style.css',
		array( 'hello-elementor-parent-style' ),
		wp_get_theme()->get('Version')
	);
}
add_action( 'wp_enqueue_scripts', 'hello_elementor_child_enqueue_styles' );

/**
 * Redirección de seguridad para no-administradores
 * Optimizada para evitar bucles y permitir acceso al admin
 */
add_action('template_redirect', function () {
	// Si es admin logueado, no redirigir
	if (is_user_logged_in() && current_user_can('administrator')) {
		return;
	}

	// Permitir acceso al wp-admin
	if (is_admin()) {
		return;
	}

	// Evitar bucle si ya estamos en /home
	if (strpos($_SERVER['REQUEST_URI'], '/home') === 0) {
		return;
	}

	// Redirigir visitantes a /home
	wp_redirect('https://colegiogonzaga.org.ve/home', 302);
	exit;
});

