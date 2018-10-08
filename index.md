 <h1>frontGallery
<a id="frontgallery" class="anchor" href="#frontgallery" aria-hidden="true">
	<span aria-hidden="true" class="octicon octicon-link"></span></a></h1>

<p>Wordpress gallery plugin</p>

<h3>Example #1</h3>

<a class="example" href="https://raw.githubusercontent.com/mirteh/frontGallery/master/images/1.jpg" gal-name="example">Image #1</a>
<a class="example" href="https://raw.githubusercontent.com/mirteh/frontGallery/master/images/2.jpg" gal-name="example">Image #2</a>
<a class="example" href="https://raw.githubusercontent.com/mirteh/frontGallery/master/images/3.jpg" gal-name="example">Image #3</a>

<h3>Example #2</h3>
<a class="example" href="https://raw.githubusercontent.com/mirteh/frontGallery/master/images/1.jpg" gal-name="example2"><img src="https://raw.githubusercontent.com/mirteh/frontGallery/master/images/1.jpg" height="150" /></a>
<a class="example" slide-title="Lions" slide-text="Image of a lion with her cubs" href="https://raw.githubusercontent.com/mirteh/frontGallery/master/images/2.jpg" gal-name="example2"><img src="https://raw.githubusercontent.com/mirteh/frontGallery/master/images/2.jpg" height="150" /></a>
<a class="example" slide-title="Tiger" href="https://raw.githubusercontent.com/mirteh/frontGallery/master/images/3.jpg" gal-name="example2"><img src="https://raw.githubusercontent.com/mirteh/frontGallery/master/images/3.jpg" height="150" /></a>

<h3>How tu use?</h3>
<ol>
  <li>Install plugin.</li>
  <li>You need jQuery to make this plugin work.</li>
  <li>Add this code above the </body> tag in the footer.php template file:<br/>
  <xmp>
<script type="text/javascript">
	frontGallery({
	  'aniClass' : 'classname',	
	  'aniTime': 1500,
	  'aniTransition': 'fade',
	}); 
</script>
</xmp>
  </li>
</ol>

<p>
aniClass = The class of the links you want to open in frontGallery<br/>
aniTime = The duration of the animation<br/>
aniTransition = The transition you want to use. For the moment the only transition is fade.
</p>

<h3>HTML in Wordpress Template</h3>
<p>
Use this code to build your gallery:</p>
<xmp style="width: 100%">
<a href="#" gal-name="example" slide-title="Title" slide-text="Info short description" >Image #1</a>
<a href="#" gal-name="example">Image #2</a>
<a href="#" gal-name="example">Image #3</a>	
</xmp>

<p>gal-name = The name of your gallery<br/>
slide-title= The title of your image<br/>
slide-text = The text you want to show with your image.</p>
