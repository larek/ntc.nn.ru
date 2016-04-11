<?
use app\components\SideMenu;
use yii\helpers\Html;


$this->title = $title;

?>
<div class='container page_view'>
<main >

<h1><?= $model->title;?></h1>

<?= $model->content?>

</main>
</div>
