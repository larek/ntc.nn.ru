<?php

namespace app\modules\admin\controllers;

use Yii;
use yii\helpers\Html;
use app\modules\admin\models\Slider;
use app\modules\admin\models\SliderSearch;
use yii\web\Controller;
use yii\web\NotFoundHttpException;
use yii\filters\VerbFilter;
use yii\imagine\Image;

/**
 * SliderController implements the CRUD actions for Slider model.
 */
class SliderController extends Controller
{
    public function behaviors()
    {
        return [
            'verbs' => [
                'class' => VerbFilter::className(),
                'actions' => [
                    'delete' => ['post'],
                ],
            ],
        ];
    }

    /**
     * Lists all Slider models.
     * @return mixed
     */
    public function actionIndex()
    {
        $searchModel = new SliderSearch();
        $dataProvider = $searchModel->search(Yii::$app->request->queryParams);

        return $this->render('index', [
            'searchModel' => $searchModel,
            'dataProvider' => $dataProvider,
        ]);
    }

    /**
     * Displays a single Slider model.
     * @param integer $id
     * @return mixed
     */
    public function actionView($id)
    {
        return $this->render('view', [
            'model' => $this->findModel($id),
        ]);
    }

    /**
     * Creates a new Slider model.
     * If creation is successful, the browser will be redirected to the 'view' page.
     * @return mixed
     */
    public function actionCreate()
    {
        $model = new Slider();

        if ($model->load(Yii::$app->request->post()) && $model->save()) {
            return $this->redirect(['view', 'id' => $model->id]);
        } else {
            return $this->render('create', [
                'model' => $model,
            ]);
        }
    }

    /**
     * Updates an existing Slider model.
     * If update is successful, the browser will be redirected to the 'view' page.
     * @param integer $id
     * @return mixed
     */
    public function actionUpdate($id)
    {
        $model = $this->findModel($id);

        if ($model->load(Yii::$app->request->post()) && $model->save()) {
            return $this->redirect(['view', 'id' => $model->id]);
        } else {
            return $this->render('update', [
                'model' => $model,
            ]);
        }
    }

    /**
     * Deletes an existing Slider model.
     * If deletion is successful, the browser will be redirected to the 'index' page.
     * @param integer $id
     * @return mixed
     */
    public function actionDelete($id)
    {
        $this->findModel($id)->delete();

        return $this->redirect(['index']);
    }

    public function actionUploader(){

$output_dir = "uploads_slider/";
if(isset($_FILES["myfile"]))
{
  $ret = array();

//	This is for custom errors;
/*	$custom_error= array();
  $custom_error['jquery-upload-file-error']="File already exists";
  echo json_encode($custom_error);
  die();
*/
  $error =$_FILES["myfile"]["error"];
  //You need to handle  both cases
  //If Any browser does not support serializing of multiple files using FormData()

  if(!is_array($_FILES["myfile"]["name"])) //single file
  {
      $info = pathinfo($_FILES["myfile"]["name"]);
      $basenameNewFile =  md5(time().$info['filename']);
      $newFile =$basenameNewFile.".jpg";
      $fileName = $basenameNewFile. "." .$info['extension'];
      move_uploaded_file($_FILES["myfile"]["tmp_name"],$output_dir.$fileName);

      //$mode = \Imagine\Image\ManipulatorInterface::THUMBNAIL_OUTBOUND; // or THUMBNAIL_INSET
      $mode = \Imagine\Image\ManipulatorInterface::THUMBNAIL_INSET; // or THUMBNAIL_INSET
      $img = $_SERVER['DOCUMENT_ROOT']."/uploads_slider/".$fileName;
      $size = Image::getImagine()->open($img)->getSize()->widen(1000);

      Image::thumbnail($img, 300, 100, $mode)->save('uploads_slider/300x100/'. $newFile, ['quality' => 100]);
      Image::thumbnail($img, 1500, 500, $mode)->save('uploads_slider/1500x500/'. $newFile, ['quality' => 100]);




      $ret[]= $newFile;
  }
  else  //Multiple files, file[]
  {
    $fileCount = count($_FILES["myfile"]["name"]);
    for($i=0; $i < $fileCount; $i++)
    {
      $fileName = $_FILES["myfile"]["name"][$i];
    move_uploaded_file($_FILES["myfile"]["tmp_name"][$i],$output_dir.$fileName);
      $ret[]= $fileName;
    }

  }

    echo json_encode($ret);
 }
}

    /**
     * Finds the Slider model based on its primary key value.
     * If the model is not found, a 404 HTTP exception will be thrown.
     * @param integer $id
     * @return Slider the loaded model
     * @throws NotFoundHttpException if the model cannot be found
     */
    protected function findModel($id)
    {
        if (($model = Slider::findOne($id)) !== null) {
            return $model;
        } else {
            throw new NotFoundHttpException('The requested page does not exist.');
        }
    }
}
