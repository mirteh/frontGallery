# frontGallery
Wordpress gallery plugin

1. Install plugin.
2. You need jQuery to make this plugin work.
3. Add this code above the </body> tag in the footer.php template file:

```javascript
<script type="text/javascript">
	frontGallery({
	  'aniClass' : 'classname',	
      'aniTime': 500,
      'aniTransition': 'fade',
    }); 
</script>
```

* aniClass = the class of the links you want to open in frontGallery
* aniTime = the duration of the animation
* aniTransition = the transition you want to use. For the moment the only transition is fade.
