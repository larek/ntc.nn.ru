<?
namespace app\components;

use yii;
use yii\base\Widget;
use yii\helpers\Html;

class Callback extends Widget
{
    public $message;

    public function init()
    {
        parent::init();
        if ($this->message === null) {
            $this->message = 'Hello World';
        }
    }

    public function run()
    {
       ?>
        <div class="col-md-12 col-xs-12 callback-wrapper">
            <div class='callback-title'>НЕ ТРАТЬТЕ ВРЕМЯ НА ЛИШНИЕ ПОИСКИ И РАЗМЫШЛЕНИЯ - </div>
            <div class="callback-subtitle">проконсультируйтесь со специалистом уже сейчас</div>
            
            
            <div class="form-wrap">
                <div class="row">
                <div class="col-md-4 col-sm-4 center"><input type="text" class="form-control callback-widget-name" placeholder='Имя*'></div>
                <div class="col-md-4 col-sm-4 center"><input type="text" class="form-control callback-widget-phone" placeholder="Телефон*"></div>
                <div class="col-md-4 col-sm-4 center"><span class="btn btn-custom-blue btn-widget-callback">Получить консультацию</span></div>
                </div>
                <br><br>
                <div class="row">
                    <div class="alert alert-info alert-widget-callback" style="display:none;">Заявка отправлена. Благодарим Вас за интерес, проявленный к нашей компании. <br>Мы обязательно ответим Вам в самое ближайшее время</div>
                </div>
            </div>
            
            
            
            
        </div>
       <?
        
    }
}
?>