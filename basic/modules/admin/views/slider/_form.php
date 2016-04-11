<?php

use yii\helpers\Html;
use yii\widgets\ActiveForm;
use dosamigos\tinymce\TinyMce;
/* @var $this yii\web\View */
/* @var $model app\modules\admin\models\Slider */
/* @var $form yii\widgets\ActiveForm */

$this->registerJsFile("http://hayageek.github.io/jQuery-Upload-File/4.0.8/jquery.uploadfile.min.js",['depends' => [yii\web\JqueryAsset::className()]]);
$this->registerCssFile("http://hayageek.github.io/jQuery-Upload-File/4.0.8/uploadfile.css");
$this->registerJs('
$(document).ready(function()
{
	$("#fileuploader").uploadFile({
	url:"uploader",
	fileName:"myfile",
	maxFileSize: 20000000,
	showFileCounter: false,
	showStatusAfterSuccess: false,
	uploadStr: "Загрузить",
	onSuccess:function(files,data,xhr,pd)
        {

	        console.log(data);
	        $(".file").html("<img src=\"/uploads_slider/300x100/"+$.parseJSON(xhr.responseText)+"\">");
          $(".image").val($.parseJSON(xhr.responseText));

        }
	});
});');
?>

<div class="slider-form">
<div id="fileuploader">Upload</div>
<div class='file'>
	<?= $model->image ? Html::img("/uploads_slider/300x100/".$model->image) : ""?>
</div>

    <?php $form = ActiveForm::begin(); ?>

    <?= $form->field($model, 'title')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'content')->widget(TinyMce::className(), [
    'options' => ['rows' => 12],
    'language' => 'ru',
    'clientOptions' => [
        'plugins' => [
            "advlist autolink lists link charmap print preview anchor",
            "searchreplace visualblocks code fullscreen",
            "insertdatetime media table contextmenu paste"
        ],
        'toolbar' => "undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image"
    ]
]);?>
    <?= $form->field($model, 'guid')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'dateCreated')->textInput(['value' => date("Y-m-d")]) ?>

		<div style="display:none">
			<?= $form->field($model, 'image')->textInput(['maxlength' => true,'class' => 'image form-control']) ?>

		</div>
    <div class="form-group">
        <?= Html::submitButton($model->isNewRecord ? 'Cоздать' : 'Сохранить', ['class' => $model->isNewRecord ? 'btn btn-success' : 'btn btn-primary']) ?>
    </div>

    <?php ActiveForm::end(); ?>

</div>
