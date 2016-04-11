<?php

namespace app\models;

use Yii;

/**
 * This is the model class for table "slider".
 *
 * @property integer $id
 * @property string $title
 * @property string $content
 * @property string $guid
 * @property string $dateCreated
 * @property string $image
 */
class Slider extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'slider';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['title', 'content', 'guid', 'dateCreated', 'image'], 'required'],
            [['content'], 'string'],
            [['dateCreated'], 'safe'],
            [['title', 'guid', 'image'], 'string', 'max' => 250]
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
            'guid' => 'Guid',
            'dateCreated' => 'Date Created',
            'image' => 'Image',
        ];
    }
}
