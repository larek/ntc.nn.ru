<?
use app\components\SideMenu;
use yii\helpers\Html;


$this->title = $title;

?>
<?//= SideMenu::widget(['model' => $model_child,'guid' => $guid]); ?>

<div class='container'>
<main class=" <?= $divTemplate?>" role="main">

<h1><?= $model->title;?></h1>


    <div class='col-md-4'>
        <?= $model->content?>
    </div>
    <div class='col-md-8' style='height:500px'>
    <script type="text/javascript" charset="utf-8" src="https://api-maps.yandex.ru/services/constructor/1.0/js/?sid=oFyOK4TT-dveXO0gw1jugftdQYfwy6Z6&width=100%&height=100%&lang=ru_RU&sourceType=constructor"></script>
    </div>
</main>
</div>
