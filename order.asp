<%@LANGUAGE="VBSCRIPT" CODEPAGE="65001"%>
<% OPTION EXPLICIT %>
<%

Dim action
Dim orderURL
Dim checkOrderURL
Dim env
Dim redirectURL

if (isEmpty(Request.ServerVariables("HTTP_REFERER"))) Then
	Response.Redirect(Application("root"))
end if

action = Request.QueryString("action")

orderURL = "prologon.web.local/Entrance/"
checkOrderURL = "doris.web.local/CurrOrd/"
env = Application("env")

if (action="check") then
	redirectURL = checkOrderURL
else
	redirectURL = orderURL
end if

if (env <> "live") then
	redirectURL = env & "." & redirectURL
end if

redirectURL = "http://" & redirectURL
Response.Redirect(redirectURL)

%>
