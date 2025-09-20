<!DOCTYPE html>
<html <?php language_attributes(); ?> data-bs-theme="light">
    <head>
        <meta charset="<?php bloginfo( 'charset' ); ?>" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="color-scheme" content="light dark"> <?php // info, ze strona ma tryb jasny i ciemny ?>
        <meta name="theme-color" content="#ffffff"> <?php // kolor interfejsu poza stroną - android, ios ?>
        <?php wp_head(); ?> 
    </head>
    <body <?php body_class() ?>>
    <?php wp_body_open(); ?> <?php // hook na skrypty dostępności/analytics ?>

    <a class="skip-link screen-reader-text" href="#content"><?php /* TODO - zmienić href z ID na jakiś sensowniejszy jesli dokumentacja nie wymusza #content */ ?>
    <?php esc_html_e('Skip to content', 'robackipl'); ?>
    </a>

    <header class="site-header" role="banner" itemscope itemtype="https://schema.org/WPHeader">
        <div class="container">
            <div class="header-inner border border-1 rounded-1">
                <div class="row">
                    <?php
                        if ( function_exists( 'the_custom_logo' ) && has_custom_logo() ) {
                            the_custom_logo();
                        } else {
                            // Fallback: pokaż nazwę strony jako link do home
                            ?>
                            <a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="site-title">
                                <?php bloginfo( 'name' ); ?>
                            </a>
                            <?php
                        }
                    ?>
                    <?php 
                        $logo_text = get_theme_mod('custom_logo_text');
                        if ($logo_text) {
                            echo '<div class="logo-text"><a href="'. esc_url(home_url('/')) .'">' . $logo_text . '</a></div>';
                        }
                    ?>
                    <div class="site-branding">
                        
                        <div class="site-identity">
                        <?php if ( is_front_page() && is_home() ) : ?>
                            <h1 class="site-title" itemprop="headline">
                            <a href="<?php echo esc_url(home_url('/')); ?>"><?php bloginfo('name'); ?></a>
                            </h1>
                        <?php else : ?>
                            <p class="site-title" itemprop="headline">
                            <a href="<?php echo esc_url(home_url('/')); ?>"><?php bloginfo('name'); ?></a>
                            </p>
                        <?php endif; ?>
                        <?php
                            $desc = get_bloginfo('description', 'display');
                            if ( $desc || is_customize_preview() ) :
                        ?>
                            <p class="site-description" itemprop="description"><?php echo esc_html($desc); ?></p>
                        <?php endif; ?>
                        </div>
                
                        
                    </div>
                    <div class="theme-switcher">
                        <div class="form-check form-switch">
                            <input class="form-check-input" type="checkbox" id="themeSwitch" role="switch" aria-describedby="themeStatus">
                            <label class="form-check-label visually-hidden" for="themeSwitch"><?php esc_html_e('Day / Night mode switcher', 'robackipl'); ?></label>
                        </div>
                        <!-- Czytniki ekranu usłyszą aktualny stan -->
                        <span id="themeStatus" class="visually-hidden" aria-live="polite"></span>
                    </div>
                </div>
            </div>
        </div>

    </div>

    </header>    

    <main id="content" class="site-content" role="main">
        <div class="container"></div>