//Niampa Yisso Armand V1 du script pour mon lecteur audio! juillet 2012

jQuery(document).ready(function($) {
	var e=$('.lecteur');
	e.each(function(){
		var audio= new Audio();
		var loadBar = e.find('.loading');
		var progressBar = e.find('.progress');
		var durationText = e.find('.temtot');
		var timeText = e.find('.temlec'); 
		var titleText = e.find('.name'); 
		var thumb = e.find('.thumb'); 
		var state = 0; 
		var file=$('#fichier');

		// On test le support
		if (audio.canPlayType) {
			if(!audio.canPlayType('audio/mpeg')){
				e.find('#fichier').each(function(){
					$(this).attr('src',$(this).attr('src').replace('.mp3','.ogg')); 
				});
			}
		}

		// on lit le premier fichier 	
		play(file,0.5);

		// fonction pour parametrer la lecture
		function play(file,vol){
			if(!vol){
				vol=1
			}
			durationText.text('Chargement en cours...'); 
			timeText.text('Chargement en cours...'); 
			audio.src=file.attr('src');
			audio.volume =vol;
		}

		//lol devine 7 kw? juste pour use la barre espace coem raccourci pr la lecture
		$(document).keyup(function(event){
			$this=$('.play');
			touche=String.fromCharCode(event.keyCode);
		    if (touche==' '){
		      	if(audio.paused){
		        	audio.play();
		        	$this.css('backgroundPosition','-111px -1px');
		      	}else{
		      		audio.pause();
		      		$this.removeAttr('style')
		      	}
		    }
		    return false;
		})

		//click sur bouton play
		e.find('.play').toggle(
			function( event ){
				event.preventDefault();
				audio.play();
				$(this).css('backgroundPosition','-111px -1px');
			},
			function(){
				audio.pause();
				$(this).removeAttr('style')
				return false;
			}
		)

		// Progression de ma barre
		$(audio).bind('timeupdate',function(){
			var ratio = 100 * audio.currentTime / audio.duration;	// % d'écoulement
			var r2=ratio+6;
			if (r2<=100){
				loadBar.width(r2+'%');
			}else{
				loadBar.width('100%');
			}
			progressBar.width(ratio+'%'); 							// On élargit la barre de progression
			var s =  Math.round(audio.duration%60); 				// On stock le nombre de seconde pour rajouter un 0 initial 
			if(s<10) s = '0'+s; 
			durationText.text(Math.floor(audio.duration/60) +':'+s);// On met à jour le texte indiquant la durée
			s = Math.round(audio.currentTime%60); 
			if(s<10) s = '0'+s;
			timeText.text(Math.floor(audio.currentTime/60) +':'+s); // On update le temps de progression
		}).bind('loadedmetadata',function(e){
			var s =  Math.round(audio.duration%60); 				// On stock le nombre de seconde pour rajouter un 0 initial 
			if(s<10) s = '0'+s;
			durationText.text(Math.floor(audio.duration/60) +':'+s); // c'est kif kif comme le haut
			console.log(audio.data); 
			timeText.text('00:00');
		})

		// Clic pour avancer 
		e.find('.progress').bind('click',function(e){
			var p = $(this); 
			var mouseX = e.pageX - p.offset().left; // Position de la souris Par rapport à la barre
			var ratio = mouseX / p.width(); 		// Ratio 
			if(ratio > 1) ratio = 1; 
			audio.currentTime = audio.duration * ratio; 
		});
		//gestion du volume....
		$('.volume').slider({
			range: "min",
			value: 50,
			min: 0,
			max: 100,
			slide:function( event, ui ) {
				audio.volume = ui.value/100;
			}
		});
	})
});
