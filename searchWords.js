var strNewWord ;
var strLastWords; 
var strSearchWords; 

// -- 単語を選択 --
//Editor.SelectWord() ; 
   //<- マクロを Ctrl+ダブルクリックにアサインした場合、
   //  「Ctrl+左クリック」の時点で既に単語選択されるため、
   //   ここはコメントアウトしてください。

// -- 選択単語を追加する --
strNewWord  = Editor.GetSelectedString(0);

if ( strNewWord == "" ){ 
  // -- 単語が存在しない場所で起動した場合はクリアする --
  Editor.SearchClearMark(0);
  Editor.SetCookie( "window", "SearchWords","");
} else {
  // -- 単語を"SearchWords"というCookieに保存し、複数単語検索する --
  strLastWords = Editor.GetCookie( "window", "SearchWords", "" );
  strSearchWords = strLastWords + " " + strNewWord;
  Editor.Left();
  Editor.SearchNext( strSearchWords, 2051 ); 
     //<- 2051 = 0x01+0x02+0x800 (単語単位+英大小区別+履歴非登録)
  Editor.SetCookie( "window", "SearchWords", strSearchWords  );
}