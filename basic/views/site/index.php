<?php
use app\components\SideMenu;
use app\components\Callback;
use yii\helpers\Html;
/* @var $this yii\web\View */

$this->title = 'Нижегородский туристический центр';

$this->registerJsFile('/fotorama/fotorama.js',['depends' => [\yii\web\JqueryAsset::className()]]);
$this->registerCssFile('/fotorama/fotorama.css');


?>
<!-- Fotorama -->
<div class="fotorama"  data-width="100%" data-fit="cover" data-ratio="3/1" data-max-width="100%" data-nav='false' data-autoplay="3000">

  <?
  foreach($model_child as $item){

    ?>
    <div data-img="/uploads_slider/1500x500/<?= $item->image?>">

      <div class='slider_text' style='display:<?= $item->content=="" ? "none" : "block";?>'>
        <div class='container'>
          <div class='slider_back'>
          <h3 style='text-transform:uppercase;'><?= $item->title?></h3>
          <?= $item->content?>
          <br>
          <div class="row">
          <?= Html::a('Узнать больше',$item->guid,['class' => 'btn-white'])?>
          </div>
          </div>
        </div>
      </div>
    </div>
    <?
  }
  ?>

</div>



<div class='frontPageDivWrap'>
  <div class='container'>



    <div class='col-md-4 frontPageDiv'>
        <?= Html::a("О КОМПАНИИ",['site/view','guid'=>'about'],['class' => 'btn-frontPage'])?>
        <span class='separate'></span>
        <div class='frontPageText'>
          «Нижегородский Туристический Центр» - это компания, текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст 
          текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст 
        </div>
        <a href='/about' class='frontPageDivLink'>Подробнее</a>
    </div>
    <div class='col-md-4 frontPageDiv'>
        <?= Html::a("ПАРТНЕРЫ",['site/view','guid'=>'partnery'],['class' => 'btn-frontPage'])?>
        <span class='separate'></span>
        <div class='frontPageText'>
          текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст            текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст 
          текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст 

        </div>
        <a href='partnery' class='frontPageDivLink'>Подробнее</a>
    </div>
    <div class='col-md-4 frontPageDiv'>
        <?= Html::a("СОТРУДНИЧЕСТВО",['site/view','guid'=>'sotrudnicestvo'],['class' => 'btn-frontPage'])?>
        <span class='separate'></span>
        <div class='frontPageText'>
текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст            текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст 
          текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст         </div>
        <a href='sotrudnicestvo' class='frontPageDivLink'>Подробнее</a>
    </div>
  </div>
</div>
<br><br>
<div class='container'>


<!-- block -->
<div class="row">
                    <div class="col-sm-5 col-md-4 col-lg-3 col-slg-3">
                        <div class="cheap-tours__intro">
                            <div class="cheap-tours__intro-title">Экскурсии по Нижнему Новгороду от <span class="monolit">300 <span class="rouble">Р</span></span></div>
                            <div class="cheap-tours__intro-text">
                                <div class="cheap-tours__intro-text-normal">Приглашаем вас принять участие во всевозможных экскурсиях по Нижнему Новгороду по цене от 300 рублей.</div>
                                <div class="hidden-xs hidden-usm cheap-tours__intro-text-small">Профессиональные экскурсоводы, удобные маршруты и сказочно красивые места  — все это для вас!</div>

                                <div class="visible-xs-block visible-usm-block accordion">
                                    <div class="cheap-tours__intro-link link link_dashed accordion__button" data-tab="#cheap-tours-intro-tab" data-hide-on-click="1">Подробнее</div>
                                    <div class="accordion__tab" id="cheap-tours-intro-tab">
                                        <div class="cheap-tours__intro-text-small">Профессиональные экскурсоводы, удобные маршруты и сказочно красивые места российской столицы — все это для вас!</div>
                                        <div class="cheap-tours__intro-text-small">Мы сделаем всё, чтобы ваше пребывание в этом величественном городе стало интересным и познавательным.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-sm-7 col-md-8 col-lg-9 col-slg-9">
                        <div class="row">
                            <div class="cheap-tours__slider owl-carousel" style="display: block;">
                                <div class="col-sm-12 col-md-12 col-lg-8 col-slg-8">
                                    <div class="cheap-tours__item" style="background-image: url('http://placehold.it/560x260')">
                                                                                <a href="#" class="cheap-tours__link"></a>

                                        <div class="cheap-tours__content">
                                            <a href="#" class="cheap-tours__title">Ближайшие экскурсии</a>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-sm-6 col-md-6 col-lg-4 col-slg-4">
                                    <div class="cheap-tours__item" style="background-image: url('http://placehold.it/300x300')">
                                                                                <a href="#" class="cheap-tours__link"></a>

                                        <div class="cheap-tours__content">
                                            <a href="#" class="cheap-tours__title">Полезная информация</a>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-sm-6 col-md-6 col-lg-4 col-slg-4">
                                    <div class="cheap-tours__item" style="background-image: url('http://placehold.it/300x300')">
                                                                                <a href="#" class="cheap-tours__link"></a>

                                        <div class="cheap-tours__content">
                                            <a href="#" class="cheap-tours__title">Отзывы</a>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-sm-6 col-md-6 col-lg-4 col-slg-4">
                                    <div class="cheap-tours__item" style="background-image: url('http://placehold.it/300x300')">
                                                                                <a href="#" class="cheap-tours__link"></a>

                                        <div class="cheap-tours__content">
                                            <a href="#" class="cheap-tours__title">Календарь экскурсий</a>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-sm-6 col-md-6 col-lg-4 col-slg-4">
                                    <div class="cheap-tours__item" style="background-image: url('http://placehold.it/300x300')">
                                                                                <a href="#" class="cheap-tours__link"></a>

                                        <div class="cheap-tours__content">
                                            <a href="#" class="cheap-tours__title">Акции</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
<!-- end block -->

  <?= Callback::widget();?>


<div class='col-md-12 col-xs-12 text-center frontPageTitle'>
<h2>ПРЕИМУЩЕСТВА РАБОТЫ С НАМИ</h2>
</div>

<div class="row mainPageProfit">
        <div class="col-sm-4 col-md-4 text-center">
          <img class="img-circle" src="http://placehold.it/300x300" alt="Generic placeholder image" width="140" height="140">
          <h2>ВЫСОКОЕ КАЧЕСТВО</h2>
          <p>текст текст текст текст текст текст текст текст текст текст  текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст 
          текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст </p>

        </div><!-- /.col-lg-4 -->
        <div class="col-sm-4 col-md-4 text-center">
          <img class="img-circle" src="http://placehold.it/300x300" alt="Generic placeholder image" width="140" height="140">
          <h2>ОБШИРНЫЙ ОПЫТ</h2>
         <p>текст текст текст текст текст текст текст текст текст текст  текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст 
          текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст </p>

        </div><!-- /.col-lg-4 -->
        <div class="col-sm-4 col-md-4 text-center">
          <img class="img-circle" src="http://placehold.it/300x300" alt="Generic placeholder image" width="140" height="140">
          <h2>ЭКОНОМИЯ ДЕНЕГ</h2>
          <p>текст текст текст текст текст текст текст текст текст текст  текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст 
          текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст </p>

        </div><!-- /.col-lg-4 -->
  </div>

  <div class="row mainPageProfit">
          <div class="col-sm-4 col-md-4 text-center">
            <img class="img-circle" src="http://placehold.it/300x300" alt="Generic placeholder image" width="140" height="140">
            <h2>ЭКОНОМИЯ ВРЕМЕНИ</h2>
            <p>текст текст текст текст текст текст текст текст текст текст  текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст 
          текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст </p>

          </div><!-- /.col-lg-4 -->
          <div class="col-sm-4 col-md-4 text-center">
            <img class="img-circle" src="http://placehold.it/300x300" alt="Generic placeholder image" width="140" height="140">
            <h2>КОНФИДЕНЦИАЛЬНОСТЬ</h2>
            <p>текст текст текст текст текст текст текст текст текст текст  текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст 
          текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст </p>

          </div><!-- /.col-lg-4 -->
          <div class="col-sm-4 col-md-4 text-center">
            <img class="img-circle" src="http://placehold.it/300x300" alt="Generic placeholder image" width="140" height="140">
            <h2>СЖАТЫЕ СРОКИ</h2>
           <p>текст текст текст текст текст текст текст текст текст текст  текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст 
          текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст </p>

          </div><!-- /.col-lg-4 -->
    </div>
</div>
