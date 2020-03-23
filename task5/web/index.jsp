<%--
  Created by IntelliJ IDEA.
  User: User
  Date: 15.03.2020
  Time: 20:05
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
  <title>Java Web Application</title>
</head>
<body>
<% String name = request.getParameter("name"); %>
<% if(name==null){ %>
Java Web Application
<% }else{ %>
Name is ${name}
<%} %>
</body>
</html>
