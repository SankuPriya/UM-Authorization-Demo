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

function MembersKW()
{
  //Opens the specified URL in a running instance of the specified browser.
  Browsers.Item(btEdge).Navigate("http://trucaremgtest:8085/trucare-client/member-search");
  //Maximizes the specified Window object.
  Aliases.browser.BrowserWindow.Maximize();
  //Clicks the 'button' button.
  Aliases.browser.pageTrucare3.buttonTcTabLabel00.formLastName.button.ClickButton();
  //Enters '^v' in the 'textbox' object.
  Aliases.browser.pageTrucare3.buttonTcTabLabel00.formLastName.button.textbox.Keys("80CP00651008CP-01");
  //Clicks the 'buttonSearchbtn' button.
  Aliases.browser.pageTrucare3.buttonTcTabLabel00.formLastName.buttonSearchbtn.ClickButton();
  //Wailt or Delay for 'textnodeRossDana' object
  Delay (2000,"Delay for textnodeRossDana");
  //Clicks the 'textnodeRossDana' object with the right mouse button.
  Aliases.browser.pageTrucare3.buttonTcTabLabel00.textnodeRossDana.ClickR(48, 7);
  //Clicks the 'textnodeView' control.
  Aliases.browser.pageTrucare3.buttonTcTabLabel00.textnodeView.Click();
  //Waits until the browser loads the page and is ready to accept user input.
  Aliases.browser.pageTrucare4.Wait();
  //Clicks the 'button' button.
  Aliases.browser.pageTrucare4.articleMemberDashboard.sectionPreferredName.formDateFrom.button.ClickButton();
  Delay(2000,["Delay for textnode7"]);
  //Clicks the 'textnode7' control.
  Aliases.browser.pageTrucare4.articleMemberDashboard.sectionPreferredName.formDateFrom.textnode7.Click();
  //Clicks the 'button2' button.
  Aliases.browser.pageTrucare4.articleMemberDashboard.sectionPreferredName.formDateFrom.button2.ClickButton();
  //Clicks the 'textnode23' control.
  Aliases.browser.pageTrucare4.articleMemberDashboard.sectionPreferredName.formDateFrom.textnode23.Click();
  //Clicks the 'buttonIdSubmitsearch' button.
  Aliases.browser.pageTrucare4.articleMemberDashboard.sectionPreferredName.formDateFrom.buttonIdSubmitsearch.ClickButton();
  //Clicks the 'buttonMainMenu' button.
  Aliases.browser.pageTrucare4.buttonMainMenu.ClickButton();
  //Clicks the 'buttonMenuItemAuthorizationsumma' button.
  Aliases.browser.pageTrucare4.textnodeAuthorizations.textnodeAuthorizations2.buttonMenuItemAuthorizationsumma.ClickButton();
}

function AuthorizationInPtKW()
{
  //Opens the specified URL in a running instance of the specified browser.
  Browsers.Item(btEdge).Navigate("http://trucaremgtest:8085/trucare-client/member/4fja03r4-5748-0161-2381-903266004868/um/authorization");
  Aliases.browser.BrowserWindow.Maximize();
  Delay (2000,"Delay for pageTrucare5");
  //Clicks the 'button' button.
  Aliases.browser.pageTrucare5.navAddInpatientAuthorization.button.ClickButton();
  //Enters '[Tab]' in the 'button' object.
  Aliases.browser.pageTrucare5.navAddInpatientAuthorization.button.Keys("[Tab]");
  //Enters '[Enter]' in the 'buttonAddInpatientAuthorization' object.
  Aliases.browser.pageTrucare5.navAddInpatientAuthorization.buttonAddInpatientAuthorization.Keys("[Enter]");
  //Clicks the 'button3' button.
  Aliases.browser.pageTrucare5.formAddInpatientAuthorization.formAuthorizationStartDate.button3.ClickButton();
  //Clicks the 'textnode23' control.
  Aliases.browser.pageTrucare5.formAddInpatientAuthorization.formAuthorizationStartDate.textnode23.Click();
  //Clicks the 'button2' button.
  Aliases.browser.pageTrucare5.formAddInpatientAuthorization.formAuthorizationStartDate.formServicingFacilityName.button2.ClickButton();
  //Enters '^v' in the 'textbox' object.
  Aliases.browser.pageTrucare5.formAddInpatientAuthorization.formAuthorizationStartDate.formServicingFacilityName.button2.textbox.Keys("1 HEALTH & WELLNESS INC");
  //Clicks the 'button4' button.
  Aliases.browser.pageTrucare5.formAddInpatientAuthorization.formAuthorizationStartDate.formDiagnosisName.button4.ClickButton();
  //Sets the text 'Bulimia' in the 'textbox3' text editor.
  Aliases.browser.pageTrucare5.formAddInpatientAuthorization.formAuthorizationStartDate.formDiagnosisName.button4.textbox3.SetText("Bulimia");
  //Clicks the 'buttonDiagnosislookupbutton' button.
  Aliases.browser.pageTrucare5.formAddInpatientAuthorization.formAuthorizationStartDate.formDiagnosisName.buttonDiagnosislookupbutton.ClickButton();
}

function AuthorInlookup_4()
{
  //Opens the specified URL in a running instance of the specified browser.
  //Browsers.Item(btEdge).Navigate("http://trucaremgtest:8085/trucare-client/member/4fja03r4-5748-0161-2381-903266004868/um/authorization");
 // Aliases.browser.BrowserWindow.Maximize();
 // Delay(5000,["Delay for start date"]);
  //Drags the 'panelAuthorizationStartDate' object.
  Aliases.browser.pageTrucare5.formAddInpatientAuthorization.panelAuthorizationStartDate.Drag(605, 176, -4, 41);
  //Clicks the 'panel' control.
  Aliases.browser.pageTrucare5.formAddInpatientAuthorization.formIpLineItem1.panel.Click();
  //Sets the text 'in' in the 'textbox2' text editor.
  Aliases.browser.pageTrucare5.formAddInpatientAuthorization.formIpLineItem1.textbox2.SetText("in");
  //Enters '[Down][Down][Enter]' in the 'textbox2' object.
  Aliases.browser.pageTrucare5.formAddInpatientAuthorization.formIpLineItem1.textbox2.Keys("[Down][Down][Enter]");
  //Clicks the 'buttonProcedurelookupbutton' button.
  Aliases.browser.pageTrucare5.formAddInpatientAuthorization.formIpLineItem1.formProcedureName.buttonProcedurelookupbutton.ClickButton();
  //Enters '[Tab]' in the 'textbox5' object.
  Aliases.browser.pageTrucare5.formProcedureLookup.button5.textbox5.Keys("[Tab]");
  //Enters '[Tab]' in the 'buttonProcedureCode' object.
  Aliases.browser.pageTrucare5.formProcedureLookup.labelProcedureCode.buttonProcedureCode.Keys("[Tab]");
  //Sets the text '99233' in the 'textbox4' text editor.
  Aliases.browser.pageTrucare5.button.textbox4.SetText("99233");
  //Enters '[Tab]' in the 'textbox4' object.
  Aliases.browser.pageTrucare5.button.textbox4.Keys("[Tab]");
  //Enters '[Enter]' in the 'buttonProceduresearchbutton' object.
  Aliases.browser.pageTrucare5.formProcedureLookup.buttonProceduresearchbutton.Keys("[Enter]");
  //Clicks the 'panelGridcell' control.
  Aliases.browser.pageTrucare5.formProcedureLookup.panelGridcell.Click();
  //Clicks the 'buttonProcedureaddbutton' button.
  Aliases.browser.pageTrucare5.formProcedureLookup.buttonProcedureaddbutton.ClickButton();
}

function RunPrescreen_5()
{
  //Opens the specified URL in a running instance of the specified browser.
  /*Browsers.Item(btEdge).Navigate("http://trucaremgtest:8085/trucare-client/member/4fja03r4-5748-0161-2381-903266004868/um/authorization");
  Aliases.browser.BrowserWindow.Maximize();*/
  //Clicks the 'buttonAuthRunPrescreen' button.
  Aliases.browser.pageTrucare5.formAddInpatientAuthorization.buttonAuthRunPrescreen.ClickButton();
  //Clicks the 'buttonLookUp' button.
  Aliases.browser.pageTrucare5.formAddInpatientAuthorization.formAuthorizationStartDate.formServicingFacilityName.buttonLookUp.ClickButton();
  Delay (2000,"Delay for RunPrescreen buton visible");
  //Clicks the 'buttonAuthRunPrescreen' button.
  Aliases.browser.pageTrucare5.formAddInpatientAuthorization.buttonAuthRunPrescreen.ClickButton();
  //Clicks the 'buttonAuthCloseAuth' button.
  Aliases.browser.pageTrucare5.formAddInpatientAuthorization.buttonAuthCloseAuth.ClickButton();
}
