var document = new ActiveXObject('htmlfile');
var window   = document.parentWindow;
var editor   = Editor;


switch(Editor.IsTextSelected()) {
    // 非選択状態
    case 0:
        //editor.SelectAll();
    break;
    // 選択状態
    case 1:
        select = editor.GetSelectedString(0);

        var lines = select.split(/\r\n|\r|\n/);
        var n = ['\r\n', '\r', '\n'][editor.GetLineCode()];
        
    break;
    // ブロック選択状態
    case 2:

    break;
    
    default:
        /* ignore */
    break;
}
editor.InsText(select);


editor   = null;
window   = null;
document = null;
