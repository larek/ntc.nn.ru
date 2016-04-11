<?
use app\components\SideMenu;
use yii\helpers\Html;

$this->title = $title;

?>
<?//= SideMenu::widget(['model' => $model_child,'guid' => $guid]); ?>
<div class='container'>
<h1><?= $model->title;?></h1>
<div class='srvWrap'>
  <span class='srcMainTitle'>ИНЖЕНЕРНО-КОНСУЛЬТАЦИОННЫЕ УСЛУГИ ПО ВСЕМ ЖИЗНЕННЫМ ЦИКЛАМ ИЗДЕЛИЯ!</span>
  <div class='srvWrapInner'>
  <div class=' srvItem srvItem1'><a href='/uslugi-razrabotka-tz'><img src='/images/uslugi/1-3.png' style='width:200px;height:200px'><br><span class='srvTitle'>РАЗРАБОТКА ТЗ</span></a></div>
  <div class=' srvItem srvItem2'><a href='/uslugi-proectirovanie-izdeliya'><img src='/images/uslugi/2-3.png' style='width:200px;height:200px'><br><span class='srvTitle'>ПРОЕКТИРОВАНИЕ</span></a></div>
  <div class=' srvItem srvItem3'><a href='/razrabotka-kd'><img src='/images/uslugi/3-3.png' style='width:200px;height:200px'><br><span class='srvTitle'>РАЗРАБОТКА КД</span></a></div>
  <div class=' srvItem srvItem4'><a href='/razrabotka-td'><img src='/images/uslugi/4-3.png' style='width:200px;height:200px'><br><span class='srvTitle'>РАЗРАБОТКА ТД</span></a></div>
  <div class=' srvItem srvItem5'><a href='/uslugi-izgotovlenie-opitnogo-obrazca'><img src='/images/uslugi/5-3.png' style='width:200px;height:200px'><br><span class='srvTitle'>ИЗГОТОВЛЕНИЕ<br>ОПЫТНОГО ОБРАЗЦА</span></a></div>
  <div class=' srvItem srvItem6'><a href='/uslugi-provedenie-izitaniy'><img src='/images/uslugi/6-3.png' style='width:200px;height:200px'><br><span class='srvTitle'>ПРОВЕДЕНИЕ<br>ИСПЫТАНИЙ</span></a></div>
  <div class=' srvItem srvItem7'><a href='/uslugi-avtorskiy-nadzor'><img src='/images/uslugi/7-3.png' style='width:200px;height:200px'><br><span class='srvTitle'>АВТОРСКИЙ<br>НАДЗОР</span></a></div>
</div>
</div>
</div>

<br><br><br>
<div class='container'>
<?= $model->content?>
</div>
<br><br><br>
