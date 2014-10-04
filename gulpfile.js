var gulp = require('gulp')
    replace = require('gulp-replace');

gulp.task( 'default', function() {
});

gulp.task( 'install', function() {
	// Foundation JS files
	var js_files = [
		'bower_components/jquery-placeholder/jquery.placeholder.js',
		'bower_components/fastclick/lib/fastclick.js',
		'bower_components/jquery.cookie/jquery.cookie.js',
		'bower_components/modernizr/modernizr.js',
		'bower_components/foundation/js/foundation.js'
	];

	gulp.src( js_files )
		.pipe( gulp.dest( 'js' ) );

	// Foundation SASS Files
	var sass_files = [
		'bower_components/foundation/scss/foundation/_settings.scss'
	];
	
	gulp.src( sass_files )
		.pipe( gulp.dest( 'scss' ) );

	// Underscores templates files
	var _s_template_files = [
		'bower_components/_s/comments.php',
		'bower_components/_s/content.php',
		'bower_components/_s/content-none.php',
		'bower_components/_s/content-page.php',
		'bower_components/_s/content-search.php',
		'bower_components/_s/content-single.php',
		'bower_components/_s/functions.php',
		'bower_components/_s/screenshot.png',
		'bower_components/_s/rtl.css'
	];

	gulp.src( _s_template_files )
		.pipe( gulp.dest( '.' ) );


	gulp.src( [ 'bower_components/_s/footer.php' ] )
		.pipe( replace( 'class="site-footer', 'class="site-footer row' ) )
		.pipe( replace( 'class="site-info', 'class="site-info large-12 columns' ) )
		.pipe( gulp.dest( '.' ) );

	gulp.src( [ 'bower_components/_s/sidebar.php' ] )
		.pipe( replace( 'class="widget-area', 'class="widget-area large-3 columns' ) )
		.pipe( gulp.dest( '.' ) );

	gulp.src( [ 
		'bower_components/_s/index.php', 
		'bower_components/_s/single.php', 
		'bower_components/_s/page.php', 
		'bower_components/_s/search.php', 
		'bower_components/_s/page.php', 
		'bower_components/_s/archive.php',
		'bower_components/_s/404.php' 
	] )
		.pipe( replace( 'class="content-area', 'class="content-area large-9 columns' ) )
		.pipe( gulp.dest( '.' ) );

	// Underscores includes files
	var _s_inc_files = [
		'bower_components/_s/inc/custom-header.php',
		'bower_components/_s/inc/customizer.php',
		'bower_components/_s/inc/extras.php',
		'bower_components/_s/inc/jetpack.php',
		'bower_components/_s/inc/template-tags.php',
		'bower_components/_s/inc/wpcom.php',
	];

	gulp.src( _s_inc_files )
		.pipe( gulp.dest( 'inc' ) );

	// Undersocres languages files
	var _s_lang_files = [
		'bower_components/_s/languages/readme.txt',
		'bower_components/_s/languages/_s.pot',
	];

	gulp.src( _s_lang_files )
		.pipe( gulp.dest( 'languages' ) );

	// Underscores layouts files
	var _s_layouts_files = [
		'bower_components/_s/layouts/content-sidebar.css',
		'bower_components/_s/layouts/sidebar-content.css'
	];

	gulp.src( _s_layouts_files )
		.pipe( gulp.dest( 'layouts' ) );

	// Underscores JS files
	var _s_js_files = [
		'bower_components/_s/js/customizer.js',
	];

	gulp.src( _s_js_files )
		.pipe( gulp.dest( 'js' ) );

	// Underscores SASS files
	var _s_sass_files = [
		'bower_components/_s/sass/media/_captions.scss',
		'bower_components/_s/sass/media/_galleries.scss',
		'bower_components/_s/sass/media/_media.scss',
		'bower_components/_s/sass/mixins/_mixins-master.scss',
		'bower_components/_s/sass/modules/_accessibility.scss',
		'bower_components/_s/sass/modules/_alignments.scss',
		'bower_components/_s/sass/modules/_alignments.scss',
		'bower_components/_s/sass/site/secondary/_widgets.scss',
		'bower_components/_s/sass/variables-site/_colors.scss'
	];

	gulp.src( _s_sass_files )
		.pipe( gulp.dest( 'scss/_s' ) );		

});

