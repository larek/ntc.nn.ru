<?
namespace app\components;

use yii;
use yii\base\Widget;
use yii\helpers\Html;
use yii\helpers\Url;
use app\models\Pages;

class SideMenu extends Widget
{
    public $message;
    public $parent_id;
    public $model;
    public $guid;

    public function init()
    {
        parent::init();
        if ($this->message === null) {
            $this->message = 'Hello World';
        }
    }

    public function run()
    {
    
            if(count($this->model)>0){
            
        ?>
        <aside class="sidebar col-sm-3" role="complementary">
                                                <div class="sidebarabs">
                                                        <section class="widget-1 widget-first widget-last widget-odd widget nav_menu-3 widget_nav_menu">
                                                                
                                                                <ul id="menu-side-menu" class="menu">
                                                                    <?
                                                                    
                                                                    foreach($this->model as $item){
                                                                        if($this->guid == $item->guid){
                                                                                    $active = "active";
                                                                                }
                                                                                else{
                                                                                    $active = "";
                                                                        }
                                                                    ?>
                                                                        <li class="menu-pagoda-marquees <?= $active?>" style='cursor:pointer;' onclick='window.location="<?= Url::to(['site/view','guid' => $item->guid]);?>"'>
                                                                    
                                                                    <?= Html::a($item->title, ['site/view','guid' => $item->guid])?>
                                                                        <div class="coloured"></div><div class="coloured"></div></li>
                                                                    <?}?>
                                                                        
                                                                        
                                                                        
                                                                </ul>
                                                        </section>
                                                </div>
</aside>
        <?
            }
        
    }
}
?>