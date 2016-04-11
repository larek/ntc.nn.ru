<?php
use app\components\SideMenu;
use app\components\Callback;
use yii\helpers\Html;
/* @var $this yii\web\View */

$this->title = 'ФормулаКД';

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
          «Формула КД» - это компания, которая образовалась в результате коллаборации опытных инженеров-конструкторов, расчетчиков и инженеров-технологов с целью предоставления профессиональных услуг по разработке, сопровождению или реализации инженерно-технических проектов.
        </div>
        <a href='/about' class='frontPageDivLink'>Подробнее</a>
    </div>
    <div class='col-md-4 frontPageDiv'>
        <?= Html::a("ПАРТНЕРЫ",['site/view','guid'=>'partnery'],['class' => 'btn-frontPage'])?>
        <span class='separate'></span>
        <div class='frontPageText'>
          Мы имеем партнерские соглашения с ведущими государственными университетами, лабораториями и промышленными производствами, что позволяет комплексно использовать последние научно-технические разработки, современное оборудование, профессионализм и интеллектуальные ресурсы.
        </div>
        <a href='partnery' class='frontPageDivLink'>Подробнее</a>
    </div>
    <div class='col-md-4 frontPageDiv'>
        <?= Html::a("СОТРУДНИЧЕСТВО",['site/view','guid'=>'sotrudnicestvo'],['class' => 'btn-frontPage'])?>
        <span class='separate'></span>
        <div class='frontPageText'>
          Мы всегда открыты ко взаимовыгодному сотрудничеству с промышленными производствами с целью внедрения и предложения на рынок продукта с под­робной сопроводительной документацией и описанием технологических про­цессов, необходимых для производства серийных образцов. 
        </div>
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
                                                                                <a href="/ekskursii/obzornye/obzornaya-avtobusnaya-moskva/" class="cheap-tours__link"></a>

                                        <div class="cheap-tours__content">
                                            <a href="/ekskursii/obzornye/obzornaya-avtobusnaya-moskva/" class="cheap-tours__title">Обзорные</a>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-sm-6 col-md-6 col-lg-4 col-slg-4">
                                    <div class="cheap-tours__item" style="background-image: url('http://placehold.it/300x300')">
                                                                                <a href="/ekskursii/avtobusnye/" class="cheap-tours__link"></a>

                                        <div class="cheap-tours__content">
                                            <a href="/ekskursii/avtobusnye/" class="cheap-tours__title">Автобусные</a>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-sm-6 col-md-6 col-lg-4 col-slg-4">
                                    <div class="cheap-tours__item" style="background-image: url('http://placehold.it/300x300')">
                                                                                <a href="/ekskursii/peshehodnye/" class="cheap-tours__link"></a>

                                        <div class="cheap-tours__content">
                                            <a href="/ekskursii/peshehodnye/" class="cheap-tours__title">Пешеходные</a>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-sm-6 col-md-6 col-lg-4 col-slg-4">
                                    <div class="cheap-tours__item" style="background-image: url('http://placehold.it/300x300')">
                                                                                <a href="/ekskursii/dlya-shkolnikov/" class="cheap-tours__link"></a>

                                        <div class="cheap-tours__content">
                                            <a href="/ekskursii/dlya-shkolnikov/" class="cheap-tours__title">Для школьников</a>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-sm-6 col-md-6 col-lg-4 col-slg-4">
                                    <div class="cheap-tours__item" style="background-image: url('http://placehold.it/300x300')">
                                                                                <a href="/ekskursii/individualnye/" class="cheap-tours__link"></a>

                                        <div class="cheap-tours__content">
                                            <a href="/ekskursii/individualnye/" class="cheap-tours__title">Индивидуальные</a>
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
          <img class="img-circle" src="/images/1.png" alt="Generic placeholder image" width="140" height="140">
          <h2>ВЫСОКОЕ КАЧЕСТВО</h2>
          <p>Команда профессиональных инженеров «Формула КД» гарантирует высокое качество оказанных инженерно-консультационных услуг в строгом соответствии с необходимыми нормами и стандартами.</p>

        </div><!-- /.col-lg-4 -->
        <div class="col-sm-4 col-md-4 text-center">
          <img class="img-circle" src="/images/2.png" alt="Generic placeholder image" width="140" height="140">
          <h2>ОБШИРНЫЙ ОПЫТ</h2>
          <p>Впечатляющий опыт работы наших инженеров в разных сферах и областях позволяет с легкостью решить даже самые сложные инженерно-технические задачи наиболее рациональным и оптимальным для Вас способом.</p>

        </div><!-- /.col-lg-4 -->
        <div class="col-sm-4 col-md-4 text-center">
          <img class="img-circle" src="/images/3.png" alt="Generic placeholder image" width="140" height="140">
          <h2>ЭКОНОМИЯ ДЕНЕГ</h2>
          <p>При работе с нами Вам не нужно оплачивать наши болезни, отпуска или отчисления в налоговые органы. Не нужно обеспечивать наши рабочие места. Вы оплачиваете только ту работу, которая принесет Вам конкретную пользу и выгоду</p>

        </div><!-- /.col-lg-4 -->
  </div>

  <div class="row mainPageProfit">
          <div class="col-sm-4 col-md-4 text-center">
            <img class="img-circle" src="/images/4.png" alt="Generic placeholder image" width="140" height="140">
            <h2>ЭКОНОМИЯ ВРЕМЕНИ</h2>
            <p>Мы искренне считаем, что каждый человек должен заниматься тем, что у него получается лучше всего. Получается хорошо управлять предприятием? Прекрасно! Инженерное решение технических тонкостей вашего производства - доверьте нам!</p>

          </div><!-- /.col-lg-4 -->
          <div class="col-sm-4 col-md-4 text-center">
            <img class="img-circle" src="/images/5.png" alt="Generic placeholder image" width="140" height="140">
            <h2>КОНФИДЕНЦИАЛЬНОСТЬ</h2>
            <p>Мы гарантируем абсолютную конфиденциальность информации, полученной от клиента в процессе работы. Все права на разработанные нами изделия и проекты полностью принадлежат Заказчику.</p>

          </div><!-- /.col-lg-4 -->
          <div class="col-sm-4 col-md-4 text-center">
            <img class="img-circle" src="/images/6.png" alt="Generic placeholder image" width="140" height="140">
            <h2>СЖАТЫЕ СРОКИ</h2>
            <p>Наш опыт и высокая квалификация позволяют нам быстро и качественно выполнять поставленные задачи, что позволяет Вам существенно сократить сроки производства продукции или реализации проекта.</p>

          </div><!-- /.col-lg-4 -->
    </div>
</div>
