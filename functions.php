<?php
    
    function template_files() {
       wp_enqueue_script(
            'template_main_js',
            get_template_directory_uri() . '/build/script.bundle.js',
            array(),
            '1.0', // version
            true // czy ładować przed </body>
        );
        
        wp_enqueue_style(
            'template_main_styles',
            get_template_directory_uri() . '/build/style-index.css'
        );
    }
    add_action('wp_enqueue_scripts', 'template_files');
    
    function template_theme_support() {

        register_nav_menu('navigation', 'Navigation'); // menu

        add_theme_support('title-tag'); // metatag title
        add_theme_support('post-thumbnails'); // featured image in post, page

        /**
            * Add support for core custom logo.
            *
            * @link https://codex.wordpress.org/Theme_Logo
            */
        add_theme_support(
            'custom-logo',
            array(
                'height'      => 250,
                'width'       => 250,
                'flex-width'  => true,
                'flex-height' => true
            )
        );
    }   
    add_action( 'after_setup_theme', 'template_theme_support' );