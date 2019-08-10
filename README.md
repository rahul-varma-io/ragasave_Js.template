

Ragasave_Js.Template
==================================================

[![GitHub issues](https://img.shields.io/github/issues/ragasave/ragasave_Js.template)](https://github.com/ragasave/ragasave_Js.template/issues)
[![GitHub license](https://img.shields.io/github/license/ragasave/ragasave_Js.template)](https://github.com/ragasave/ragasave_Js.template/blob/master/LICENSE)
[![GitHub stars](https://img.shields.io/github/stars/ragasave/ragasave_Js.template)](https://github.com/ragasave/ragasave_Js.template/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/ragasave/ragasave_Js.template)](https://github.com/ragasave/ragasave_Js.template/network)

CDN
-------------------------------------------------
```
https://cdn.jsdelivr.net/gh/ragasave/ragasave_Js.template/src/ragasave_Js.template.min.js
```
Script
------------------------------------------------
```
<script src="https://cdn.jsdelivr.net/gh/ragasave/ragasave_Js.template/src/ragasave_Js.template.min.js"></script>
```
## Required Scripts
```
<script src="https://cdn.jsdelivr.net/gh/ragasave/ragasave_js@latest/src/ragasave.min.js"></script>
```
## Get Start
### Add Script
```
<!DOCTYPE  html>
<html  lang="en">
<head>
	<title>Ragasave_Js.Template</title>
	<script  src="https://cdn.jsdelivr.net/gh/ragasave/ragasave_js@v2019.1/src/ragasave.min.js"></script>
	<script  src="https://cdn.jsdelivr.net/gh/ragasave/ragasave_Js.Template@v2019.1/src/ragasave.tamplate.js')}"></script>

</head>
<body>

</body>
</html>
``` 
## Directives
### Each
```
<!DOCTYPE  html>
<html  lang="en">
<head>
	<title>Test</title>
	<script  src="https://cdn.jsdelivr.net/gh/ragasave/ragasave_js@v2019.1/src/ragasave.min.js"></script>
	<script  src="https://cdn.jsdelivr.net/gh/ragasave/ragasave_Js.Template@v2019.1/src/ragasave.tamplate.js')}"></script>
</head>
<body>
	<div  class="list-c">
		<div  class="list"  @each="fetchFrom('http://dummy.restapiexample.com/api/v1/employees') as key : value">
			<div  class="head">
				<pre  for=""><span>#-{value.id}</span>  <span>#-{value.employee_name}</span>  
				</pre>
			</div>
		</div>
	</div>
	<script>
		new  Ragasave.App.View('home');
	</script>

</body>

</html>
```

### Make Custom Directive
```
RagasaveTemplatorConfig = {
    directivePrefix : "rc-", //rc-
    printer : '-?\\[*\\]' //-[]
}
``` 
