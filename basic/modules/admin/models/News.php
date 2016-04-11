<?php

namespace app\modules\admin\models;

use Yii;

/**
 * This is the model class for table "news".
 *
 * @property integer $id
 * @property string $title
 * @property string $content
 * @property string $short_content
 * @property string $guid
 * @property string $seo_title
 * @property string $seo_description
 * @property string $seo_keywords
 * @property string $dateCreated
 * @property string $image
 */
class News extends \yii\db\ActiveRecord
{

  public function behaviors()
  {
    return [
      'guid' => [
        'class' => 'app\components\Guid',
        'in_attribute' => 'title',
        'out_attribute' => 'guid',
        'translit' => true
      ]
    ];
  }
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'news';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['title'], 'required'],
            [['content', 'short_content', 'seo_description'], 'string'],
            [['dateCreated'], 'safe'],
            [['title', 'guid', 'seo_title', 'seo_keywords', 'image'], 'string', 'max' => 250]
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'title' => 'Название',
            'content' => 'Содержание',
            'short_content' => 'Краткое содержание',
            'guid' => 'Guid',
            'seo_title' => 'Seo Title',
            'seo_description' => 'Seo Description',
            'seo_keywords' => 'Seo Keywords',
            'dateCreated' => 'Дата создания',
            'image' => 'Image',
        ];
    }
}
