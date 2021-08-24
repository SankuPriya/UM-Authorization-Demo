function Test1()
{
  //Launches the specified browser and opens the specified URL in it.
  Browsers.Item(btEdge).Run("http://trucaremgtest:8085/trucare-client/login");
  //Clicks the 'BrowserWindow' object.
  Aliases.browser.BrowserWindow.Click(212, 101);
  Aliases.browser.BrowserWindow.Maximize();
  //Clicks the 'textboxUsername' control.
  Aliases.browser.pageTrucare.frameTcLoginFrame.formTcLoginForm2.textboxUsername.Click();
  //Drags the 'textboxUsername' object.
  Aliases.browser.pageTrucare.frameTcLoginFrame.formTcLoginForm2.textboxUsername.Drag(6, 5, 67, 4);
  //Sets the text 'Kumarip' in the 'textboxUsername' text editor.
  Aliases.browser.pageTrucare.frameTcLoginFrame.formTcLoginForm2.textboxUsername.SetText("Kumarip");
  //Enters '[Tab]' in the 'textboxUsername' object.
  Aliases.browser.pageTrucare.frameTcLoginFrame.formTcLoginForm2.textboxUsername.Keys("[Tab]");
  //Sets the text Project.Variables.Password1 in the 'passwordboxPassword' text editor.
  Aliases.browser.pageTrucare.frameTcLoginFrame.formTcLoginForm2.passwordboxPassword.SetText(Project.Variables.Password1);
  //Sets the text Project.Variables.Password2 in the 'passwordboxPassword' text editor.
  Aliases.browser.pageTrucare.frameTcLoginFrame.formTcLoginForm2.passwordboxPassword.SetText(Project.Variables.Password2);
  //Enters '[Tab]' in the 'passwordboxPassword' object.
  Aliases.browser.pageTrucare.frameTcLoginFrame.formTcLoginForm2.passwordboxPassword.Keys("[Tab]");
  //Enters '[Enter]' in the 'buttonLogIn' object.
  Aliases.browser.pageTrucare.frameTcLoginFrame.formTcLoginForm2.buttonLogIn.Keys("[Enter]");
  //Clicks the 'buttonMembersTopmenu' button.
  Aliases.browser.pageTrucare2.buttonMembersTopmenu.ClickButton();
}

