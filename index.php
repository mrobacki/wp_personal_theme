<?php get_header() ?>

<div class="content-inner">
    <a class="logo-name" href="<?php echo site_url() ?>" title="<?php bloginfo('name'); ?>">
      <code>
        <h1>Maciek Robacki</h1>
      <h2>Frontend Web Developer | UX Designer</h2>
      </code>
    </a>
    <div class="content-item sub-page projects-page">
        <div class="content-inside sub-page projects-page">
            <div class="content">
            <span class="code">&lt;p&gt;</span>
                <div class="projects-desc content-text">
                <?php echo category_description() ?>
                </div>
            <span class="code">&lt;/p&gt;</span>
            <span class="code">&lt;ul&gt;</span>
            <div class="projects-list content-text">
              <?php
                  while (have_posts()) {
                  the_post(  );
                  ?>
                    <a href="<?php the_permalink( )?>" class="project-item">
                            <div class="project-image">
                                <?php the_post_thumbnail() ?>
                            </div>
                        <h4>
                            <?php the_title( ) ?>
                        </h4>
                    </a>
                    <?php
                  }
                  ?>
                </div>
              <span class="code">&lt;/ul&gt;</span>
            </div>
        </div>
    </div>
</div>
<?php get_footer() ?>