<?php
/**
 * @link http://www.yiiframework.com/
 * @copyright Copyright (c) 2008 Yii Software LLC
 * @license http://www.yiiframework.com/license/
 */

namespace app\assets;

use yii\web\AssetBundle;

/**
 * @author Qiang Xue <qiang.xue@gmail.com>
 * @since 2.0
 */
class AppAsset extends AssetBundle
{
    public $basePath = '@webroot';
    public $baseUrl = '@web';
    public $css = [
        'css/site.css',
        'css/colorbox.css',
        'css/flexslider-min.css',
        'css/font-awesome.min.css',
        'css/jquery.bxslider.css',
        'css/language-selector.css',
        'css/main.min.css',
        'css/page-list.css',
        'css/video-js.css',
        'fancybox/source/jquery.fancybox.css'
    ];
    public $js = [
        //'css/jquery-2.1.4.min.js',
        'js/gfplaceholderaddon.js',
        //'js/jquery-1.11.0.min.js',
        //'js/jquery.colorbox-min.js',
        //'js/jquery.cycle2.min.js',
        //'js/jquery.flexslider-min.js',
        //'js/jquery.min.js',
        'fancybox/source/jquery.fancybox.js',
        //'js/jquery.placeholder-1.0.1.js',
        //'js/jwplayer.js',
        //'js/modernizr-2.7.0.min.js',
        //'js/respond.min.js',
        //'js/responsiveslides.min.js',
        //'js/royal.min.js',
        //'js/scripts.min.js',
        //'js/sitepress.js',
        //'js/video.js',
        'js/site.js',

    ];
    public $depends = [
        'yii\web\YiiAsset',
        'yii\bootstrap\BootstrapAsset',
    ];
}
