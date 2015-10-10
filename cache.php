<?php
header('Content-Type: text/cache-manifest');
$filesToCache = array(
	'./index.html',
	
	'./css/framework7.css',
	'./css/framework7.ios.colors.css',
	'./css/framework7.ios.colors.min.css',
	'./css/framework7.ios.css',
	'./css/framework7.ios.min.css',
	'./css/framework7.ios.rtl.css',
	'./css/framework7.ios.rtl.min.css',
	'./css/framework7.css',
	'./css/swiper.css',
	'./css/swiper.min.css',
	'./css/img/bg.png',
	'./css/HailStore.less.css',
	'./frames/getting-started.html',
	'./frames/getting-started~ipad.html',

	
	'./img/Apps.png',
	'./img/HailStoreH.png',
	'./img/HailStoreHome.png',
	'./img/Home.png',
	'./img/Info.png',
	'./img/Links.png',
	'./img/Close.png',
	'./img/Settings.png',
	'./iTunesArtwork.png',

	'./js/HailStore.js',
	'./js/cookies.js',
	'./js/framework7.min.js',
	'./js/jquery.js',
	'./js/framework7.js',
	'./js/swiper.jquery.js',
	'./js/swiper.jquery.min.js',
	'./js/swiper.jquery.umd.js',
	'./js/swiper.jquery.umd.min.js',
	'./js/swiper.js',
	'./js/swiper.min.js',
	'./js/maps/swiper.jquery.min.js.map',
	'./js/maps/swiper.jquery.umd.min.js.map',
	'./js/maps/swiper.min.js.map',
	
	'./src/HailStore.less',
	'./src/common.less',
	'./src/getting-started.less',
	'./src/ios8.less',
	'./src/tablet-inset.less',
	'./src/update.less',
	
	'./jade/index.jade',
	'./jade/service.jade',
	'./jade/about.jade',
	
	'./about.html',
	'./services.html',
	'./theme.html',
	'./cache.php',
	'./apple-touch-icon-57x57.png',
	'./apple-touch-icon-60x60.png',
	'./apple-touch-icon-72x72.png',
	'./apple-touch-icon-76x76.png',
	'./apple-touch-icon-114x114.png',
	'./apple-touch-icon-120x120.png',
	'./apple-touch-icon-144x144.png',
	'./apple-touch-icon-152x152.png',
	'./apple-touch-icon-180x180.png',
	'./favicon-16x16.png',
	'./favicon-32x32.png',
	'./favicon-96x96.png',
	'./Jellyka.ttf',
	'./Steinerlight.ttf'
);
?>
CACHE MANIFEST

CACHE:
<?php
// Print files that we need to cache and store hash data
$hashes = '';
foreach($filesToCache as $file) {
	echo $file."\n";
	$hashes.=md5_file($file);
};
?>

NETWORK:
*
update.json

EXTERNAL:
update.json

# Hash Version: <?=md5($hashes)?>
# Update Hash: <?=md5_file("./update.json")?>