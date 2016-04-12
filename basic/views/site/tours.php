<?
use app\components\SideMenu;
use yii\helpers\Html;


$this->title = $title;

?>
<?//= SideMenu::widget(['model' => $model_child,'guid' => $guid]); ?>
<div class='container page_view'>
<main class=" <?= $divTemplate?>" >

<h1><?= $model->title;?></h1>

<div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">
    <div class="tours__item" style="background-image: url('http://www.abc34.ru/preview/original/pic/517_1.jpg')">
        <a href="#" class="tours__item-link"></a>

                
        <div class="tours__item-description">
            <div class="tours__item-title-wrapper">
                <a href="#" class="tours__item-title">Поездка в Дивеево</a>
            </div>

            <div class="tours__item-params">
                <div class="tours__item-params-item tours__item-params-item_price"><strong>от 13000 руб.</strong> / до 44 чел.</div>
                <div class="tours__item-params-item tours__item-params-item_time">20 мая в 16:00</div>
				
            </div>
        <div class="tours-text">
        	
        </div>
        </div>
    </div>
</div>

<div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">
    <div class="tours__item" style="background-image: url('http://www.sto-dorog.ru/media/_File/nizhobl/nnov/boldino15.jpg')">
        <a href="#" class="tours__item-link"></a>

                
        <div class="tours__item-description">
            <div class="tours__item-title-wrapper">
                <a href="#" class="tours__item-title">Поездка в Болдино</a>
            </div>

            <div class="tours__item-params">
                <div class="tours__item-params-item tours__item-params-item_price"><strong>от 13000 руб.</strong> / до 44 чел.</div>
                <div class="tours__item-params-item tours__item-params-item_time">20 мая в 16:00</div>
				
            </div>
        <div class="tours-text">
        	
        </div>
        </div>
    </div>
</div>

<div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">
    <div class="tours__item" style="background-image: url('http://atnspb.ru/upload/image/cd6ae8abb99a6ec6de1dc502fde26a5326b1e36f.jpeg')">
        <a href="#" class="tours__item-link"></a>

                
        <div class="tours__item-description">
            <div class="tours__item-title-wrapper">
                <a href="#" class="tours__item-title">Усадьба Руковишниковых</a>
            </div>

            <div class="tours__item-params">
                <div class="tours__item-params-item tours__item-params-item_price"><strong>от 13000 руб.</strong> / до 44 чел.</div>
                <div class="tours__item-params-item tours__item-params-item_time">20 мая в 16:00</div>
				
            </div>
        <div class="tours-text">
        	
        </div>
        </div>
    </div>
</div>

<div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">
    <div class="tours__item" style="background-image: url('http://www.niceimage.ru/large/201305/27363.jpg')">
        <a href="#" class="tours__item-link"></a>

                
        <div class="tours__item-description">
            <div class="tours__item-title-wrapper">
                <a href="#" class="tours__item-title">Столица хохломы</a>
            </div>

            <div class="tours__item-params">
                <div class="tours__item-params-item tours__item-params-item_price"><strong>от 13000 руб.</strong> / до 44 чел.</div>
                <div class="tours__item-params-item tours__item-params-item_time">20 мая в 16:00</div>
				
            </div>
        <div class="tours-text">
        	
        </div>
        </div>
    </div>
</div>

<?= $model->content?>

</main>
</div>
