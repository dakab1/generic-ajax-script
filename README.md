generic-ajax-script
===================

The generic XMLHttpRequest.js script i use for doing ajax queries which doesn't require jQuery or any other external frameworks.

-----
USAGE
-----
To use you will need to do the following:

1. Include the XMLHttpRequest.js into your html file as follows:
  <script src="XMLHttpRequest.js"></script>
2. Create a div or any other container typr element and give it an id e.g. 
  <div id='ajax-section'></div>
3. Call GetRequest javascript function as follows or using any other way you may want e.g.
  <button onclick="GetRequest('http://www.deankabasa.com/samples/generic-ajax-script/section.html','','ajax-section','','');">Fetch content via ajax</button>

---------------------
GetRequest parameters
---------------------
Get request accepts the following parameters and in the following order:
1. $page - URL to the content to be retrieved which will be displayed in the container specified by the $target parameter
2. $parameters - Request parameters in the form of &param=value (in a get you could also just append these to the end of the $page parameter)
3. $target - ID of the container specified in the id attribute of the html element
4. $method - HTTP method, usually GET or POST but could be any method specified in the HTTP specification
5. $async - Set to true if request is to be done asynchronously (not wait for response) or set to false if request is to be done synchronously (wait for response before proceeding)

--------------
Author details
--------------
If you have any questions please feel free to contact me on me@deankabasa.com :-)
