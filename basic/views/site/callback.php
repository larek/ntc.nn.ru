<?
use app\components\SideMenu;
use yii\helpers\Html;
use app\components\Callback;


$this->title = $title;

?>
<?//= SideMenu::widget(['model' => $model_child,'guid' => $guid]); ?>
<div class='container page_view'>
<main class=" <?= $divTemplate?>" >

<h1><?= $model->title;?></h1>


<?= $model->content?>

<?= Callback::widget();?>


</main>
</div>
