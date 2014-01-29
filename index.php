<!doctype html>
<html>
<head>
	<title>lecteur</title>
	<link rel="stylesheet" href="css/style.css">
	<link rel="stylesheet" href="css/Aristo/Aristo.css">
	<script  src="js/jquery.min.js"></script>
	<script  src="js/jquery.ui.core.js"></script>
	<script  src="js/jquery.ui.widget.js"></script>
	<script  src="js/jquery.ui.mouse.js"></script>
	<script  src="js/jquery.ui.slider.js"></script>
	<script type="text/javascript" src="js/main.js"></script>
</head>
<body>
<div class="container">
	<div class="lecteur">
		<div class="info">
			<div class="image">
				<img src="img/folder.jpg" alt="">
			</div>
			<div class="artist_album">
				<span class="name">Disque d'or</span>
				<span class="artist">Sexion d'assaut</span>
				<span class="album">L'apogee</span>
			</div>
			<div class="bouton">
				<a href="#" class="play"></a>
				<a href="#" class="prev"></a>
				<a href="#" class="next"></a>
				<div class="volume-icon"></div>
				<div class="volume"></div>
			</div>
		</div>
		<div class="conprogress">
			<div class="loading">
				<div class="progress"></div>
			</div>
		</div>
		<div class="temps">
			<span class="temlec">--</span> -
			<span class="temtot">--</span>
		</div>
		<audio src="fichier/07 Africain.mp3" id="fichier"></audio>
	</div>
</div>
</body>

</html>