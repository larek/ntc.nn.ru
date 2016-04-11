<?
use yii\widgets\ListView;
$this->title="Новости";
?>
<div class="container">

    <!-- Page header -->

        <h1>Новости</h1>

    <!-- /Page header -->

    <!-- Timeline -->
    <div class="timeline">

        <!-- Line component -->
        <div class="line text-muted"></div>


        <?= ListView::widget([
            'dataProvider' => $dataProvider,
            'itemView' => '_item',
            'summary' => false,
        ]);?>



    </div>
    <!-- /Timeline -->

</div>
</div>

<br><br>
