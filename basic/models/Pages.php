<?php

namespace app\models;

use Yii;

/**
 * This is the model class for table "pages".
 *
 * @property integer $id
 * @property integer $parent_id
 * @property string $title
 * @property string $content
 * @property string $guid
 * @property string $seo_title
 * @property string $seo_description
 * @property string $seo_keywords
 * @property string $type
 */
class Pages extends \yii\db\ActiveRecord
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
        return 'pages';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['parent_id', 'title'], 'required'],
            [['parent_id'], 'integer'],
            [['content', 'seo_description'], 'string'],
            [['dateCreated'], 'safe'],
            [['title', 'seo_title', 'seo_keywords','guid','type'], 'string', 'max' => 250]
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'parent_id' => 'Родительская страница',
            'title' => 'Название',
            'content' => 'Содержание',
            'guid' => 'Ссылка',
            'seo_title' => 'Seo Title',
            'seo_description' => 'Seo Description',
            'seo_keywords' => 'Seo Keywords',
            'type' => 'Type',
            'dateCreated' => 'Дата'
        ];
    }
}
