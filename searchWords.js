var strNewWord ;
var strLastWords; 
var strSearchWords; 

// -- �P���I�� --
//Editor.SelectWord() ; 
   //<- �}�N���� Ctrl+�_�u���N���b�N�ɃA�T�C�������ꍇ�A
   //  �uCtrl+���N���b�N�v�̎��_�Ŋ��ɒP��I������邽�߁A
   //   �����̓R�����g�A�E�g���Ă��������B

// -- �I��P���ǉ����� --
strNewWord  = Editor.GetSelectedString(0);

if ( strNewWord == "" ){ 
  // -- �P�ꂪ���݂��Ȃ��ꏊ�ŋN�������ꍇ�̓N���A���� --
  Editor.SearchClearMark(0);
  Editor.SetCookie( "window", "SearchWords","");
} else {
  // -- �P���"SearchWords"�Ƃ���Cookie�ɕۑ����A�����P�ꌟ������ --
  strLastWords = Editor.GetCookie( "window", "SearchWords", "" );
  strSearchWords = strLastWords + " " + strNewWord;
  Editor.Left();
  Editor.SearchNext( strSearchWords, 2051 ); 
     //<- 2051 = 0x01+0x02+0x800 (�P��P��+�p�召���+�����o�^)
  Editor.SetCookie( "window", "SearchWords", strSearchWords  );
}