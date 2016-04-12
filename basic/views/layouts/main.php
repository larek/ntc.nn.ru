<?php

/* @var $this \yii\web\View */
/* @var $content string */

use yii\helpers\Html;
use yii\bootstrap\Nav;
use yii\bootstrap\NavBar;
use yii\widgets\Breadcrumbs;
use app\assets\AppAsset;
use app\models\Pages;

AppAsset::register($this);
?>
<?php $this->beginPage() ?>
<!DOCTYPE html>
<html lang="<?= Yii::$app->language ?>">
<head>
    <meta charset="<?= Yii::$app->charset ?>">
    <meta name="viewport" content="width=1024">
    <link rel="icon" href="/favicon.png" type="image/png">
    <?= Html::csrfMetaTags() ?>
    <title><?= Html::encode($this->title) ?></title>
    <?php $this->head() ?>

</head>
<body>
<?php $this->beginBody() ?>

 <div class=" ">
        <div class="header__wrapper">
            <div class="header">
                <div class="header__inner">
                    <div class="container-fluid">
                        <div class="row">
                            

                            <div class=" col-xs-7 col-xs-push-5 col-usm-4 col-usm-push-3 col-sm-3 col-sm-push-4 col-md-push-0 col-md-2 col-lg-2 col-slg-2">
                               <!--  <div class="header__item">
                                    <div class="schedule-block">
                                        <div class="schedule-block__title">Без выходных</div>
                                        <div class="schedule-block__item">10:00 - 20:00</div>
                                    </div>
                                </div> -->
                            </div>

                            <div class="col-xs-7 col-xs-push-5 col-usm-5 col-usm-push-0 col-sm-3 col-sm-offset-1 col-md-3 col-md-offset-0 col-lg-2 col-lg-offset-1 col-slg-2 col-slg-offset-1">
                                <div class="header__item">
                                    <div class="phone-block">
                                        <div class="phone-block__item">
                                            <a href="tel:+74959983416" class="phone-block__link">+7-831-288-88-88</a>
                                        </div>
                                        <div class="phone-block__item">
                                            <a href="tel:+74957735071" class="phone-block__link">+7-831-288-88-89</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-xs-5 col-xs-pull-7 col-usm-3 col-usm-pull-4 col-sm-4 col-sm-pull-3 col-md-pull-0 col-md-2 col-lg-2 col-slg-2">
                                <div class="header__item">
                                    <a href="/"><img src="/images/ntc-logo.png" style='width:142px' class="header__logo img-responsive"></a>
                                </div>
                            </div>

                            <div class="hidden-xs hidden-usm hidden-sm col-md-3 col-lg-2 col-slg-2">
                                <div class="header__item">
                                    <div class="contact-us-block">
                                        <a href="mailto:79857735071@yandex.ru" class="contact-us-block__item link link_simple">info@ntc.nn.ru</a>
                                        <a href="#" data-href="/zadat-vopros/" class="ajax-link link link_dashed">Задать вопрос</a>
                                    </div>
                                </div>
                            </div>

                            <div class="hidden-xs hidden-usm hidden-sm col-md-2 col-lg-2 col-slg-2">
                                <!-- <div class="header__item">
                                    <div class="contact-block">
                                        <a href="/contacts/" class="contact-block__item link link_simple">Контакты</a>
                                    </div>
                                </div>-->
                            </div> 
                        </div>
                    </div>
                </div>

                <div class="main-menu-2__wrapper">
                    <div class="main-menu-2">
                        <ul class="hidden-xs hidden-usm main-menu-2__menu-level-1">
                            <li class="first level-1 active main-menu-2__menu-level-1__item">
                                <?= Html::a('Сборные экскурсии',['site/view', 'guid' => 'sbornye-ekskursii'], ['class' => 'main-menu-2__menu-level-1__link']);?>
                                <!-- <ul class="hidden-xs hidden-usm main-menu-2__menu-level-2">
                                    <li class="first level-2 main-menu-2__menu-level-2__item">
                                        <a href="/ekskursii/obzornye/obzornaya-avtobusnaya-moskva/" class="main-menu-2__menu-level-2__link">Обзорные</a>

                                    </li>
                                    <li class="level-2 main-menu-2__menu-level-2__item">
                                        <a href="/ekskursii/avtobusnye/" class="main-menu-2__menu-level-2__link">Автобусные</a>

                                    </li>
                                    <li class="level-2 main-menu-2__menu-level-2__item">
                                        <a href="/ekskursii/peshehodnye/" class="main-menu-2__menu-level-2__link">Пешеходные</a>

                                    </li>
                                    <li class="level-2 main-menu-2__menu-level-2__item">
                                        <a href="/ekskursii/dlya-shkolnikov/" class="main-menu-2__menu-level-2__link">Для школьников</a>

                                    </li>
                                    <li class="last level-2 main-menu-2__menu-level-2__item">
                                        <a href="/ekskursii/individualnye/" class="main-menu-2__menu-level-2__link">Индивидуальные</a>

                                    </li>
                                </ul> -->
                            </li>
                            <li class="level-1 main-menu-2__menu-level-1__item">
                                 <?= Html::a('Индивидуальные экскурсии',['site/view', 'guid' => 'individualnye-ekskursii'], ['class' => 'main-menu-2__menu-level-1__link']);?>

                            </li>
                            <li class="level-1 main-menu-2__menu-level-1__item">
                                <?= Html::a('Новости', ['news/index'], ['class' => 'main-menu-2__menu-level-1__link'])?>
                            </li>
                            <li class="level-1 main-menu-2__menu-level-1__item">
                            <?= Html::a('Контакты', ['site/view', 'guid' => 'contacts'], ['class' => 'main-menu-2__menu-level-1__link'])?>

                            </li>
                            
                        </ul>

                        <div class="visible-xs visible-usm main-menu-2__menu-mobile">
                            <select title="Навигация" class="main-menu-2__menu-mobile-select" style="width: 100%;">
                                <option data-level="1" value="" data-address="/" selected>Экскурсии</option>
                                <option data-level="2" value="" data-address="/ekskursii/obzornye/obzornaya-avtobusnaya-moskva/">Обзорные</option>
                                <option data-level="2" value="" data-address="/ekskursii/avtobusnye/">Автобусные</option>
                                <option data-level="2" value="" data-address="/ekskursii/peshehodnye/">Пешеходные</option>
                                <option data-level="2" value="" data-address="/ekskursii/dlya-shkolnikov/">Для школьников</option>
                                <option data-level="2" value="" data-address="/ekskursii/individualnye/">Индивидуальные</option>
                                <option data-level="1" value="" data-address="/dostoprimechatelnosti/ulicy-ploshhadi/">Улицы</option>
                                <option data-level="1" value="" data-address="/ekskursii/individualnye/">Индивидуальные экскурсии</option>
                                <option data-level="1" value="" data-address="/actions/">Скидки и акции</option>
                                <option data-level="1" value="" data-address="/dostoprimechatelnosti/">Места</option>
                                <option data-level="2" value="" data-address="/dostoprimechatelnosti/pamyatniki/">Памятники и&nbsp;монументы</option>
                                <option data-level="2" value="" data-address="/dostoprimechatelnosti/monastyri/">Монастыри</option>
                                <option data-level="2" value="" data-address="/dostoprimechatelnosti/hramy/">Храмы и&nbsp;церкви</option>
                                <option data-level="2" value="" data-address="/dostoprimechatelnosti/muzei-i-uchrejdeniya/">Музеи и&nbsp;научно-просветительские учреждения</option>
                                <option data-level="2" value="" data-address="/dostoprimechatelnosti/sady-parki/">Сады, парки и&nbsp;места отдыха</option>
                                <option data-level="2" value="" data-address="/dostoprimechatelnosti/fontany/">Фонтаны</option>
                                <option data-level="2" value="" data-address="/dostoprimechatelnosti/dvorcy/">Дворцы</option>
                                <option data-level="2" value="" data-address="/dostoprimechatelnosti/doma/">Дома</option>
                                <option data-level="2" value="" data-address="/dostoprimechatelnosti/osobnyaki/">Особняки</option>
                                <option data-level="2" value="" data-address="/dostoprimechatelnosti/usadby/">Усадьбы</option>
                                <option data-level="2" value="" data-address="/dostoprimechatelnosti/gostinicy/">Гостиницы Москвы</option>
                                <option data-level="2" value="" data-address="/dostoprimechatelnosti/magaziny/">Магазины</option>
                                <option data-level="2" value="" data-address="/dostoprimechatelnosti/vokzaly/">Вокзалы</option>
                                <option data-level="2" value="" data-address="/dostoprimechatelnosti/mosty/">Мосты</option>
                                <option data-level="2" value="" data-address="/dostoprimechatelnosti/teatry/">Театры</option>
                                <option data-level="2" value="" data-address="/dostoprimechatelnosti/zaly/">Концертные залы, кинотеатры</option>
                                <option data-level="2" value="" data-address="/dostoprimechatelnosti/cirki/">Цирки</option>
                                <option data-level="2" value="" data-address="/dostoprimechatelnosti/dlya-detei-i-vzroslyh/">Для детей и&nbsp;взрослых</option>
                                <option data-level="2" value="" data-address="/dostoprimechatelnosti/graffiti/">Граффити</option>
                            </select>
                        </div>
                    </div>

                    <!-- <div class="visible-sm-block visible-md-block visible-lg-block hidden-slg" >
                        <div class="main-menu-2__items-container"></div>
                    </div> -->
                </div>

                
        </div>

        <div class=''>
            <?= $content?>
        </div>

    <div class="footer_border"></div>
    <div class="footer_wrap">
        <div class="container">
            <div class="col-md-4">sdf</div>  
        </div> 
    </div>
<?php $this->endBody() ?>
</body>
</html>
<?php $this->endPage() ?>
