<?
use app\components\SideMenu;
use yii\helpers\Html;


$this->title = $title;

?>
<?//= SideMenu::widget(['model' => $model_child,'guid' => $guid]); ?>
<div class='container page_view'>
<main class=" <?= $divTemplate?>" >

<h1><?= $model->title;?></h1>

<?= $model->content?>

</main>
</div>
