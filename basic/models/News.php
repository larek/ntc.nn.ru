<?php

namespace app\models;

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
            [['title', 'content', 'short_content', 'guid', 'seo_title', 'seo_description', 'seo_keywords', 'dateCreated', 'image'], 'required'],
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
            'title' => 'Title',
            'content' => 'Content',
            'short_content' => 'Short Content',
            'guid' => 'Guid',
            'seo_title' => 'Seo Title',
            'seo_description' => 'Seo Description',
            'seo_keywords' => 'Seo Keywords',
            'dateCreated' => 'Date Created',
            'image' => 'Image',
        ];
    }
}
