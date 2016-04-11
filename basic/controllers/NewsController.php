<?php

namespace app\controllers;

use app\models\News;
use yii\data\ActiveDataProvider;

class NewsController extends \yii\web\Controller
{
    public function actionIndex()
    {
        $query = News::find()->orderBy(['dateCreated' => SORT_DESC, 'id' => SORT_DESC]);
        $dataProvider = new ActiveDataProvider([
          'query' => $query,

        ]);


        return $this->render('index',[
          'dataProvider' => $dataProvider,
        ]);
    }

    public function actionView($id){
      $model = News::find()->where(['guid' => $id])->one();
      $title = $model->seo_title == "" ? $model->title : $model->seo_title;

      return $this->render('view',[
        'model' => $model,
        'title' => $title,
      ]);
    }

}
