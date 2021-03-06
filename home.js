<html>
	<head>
	   <meta charset="utf-8"/>
		<title>Site CV Emma Deblois</title>
		<link rel="stylesheet" href="stylehome.css">
	</head>
	
	<body>
		<div id="header">
			<div id="emma"><h1> Emma Deblois </h1></div>
        </div>
		
		<nav class="menu">
			<a href="#presentation">Présentation</a>
			<a href="#formation">Formation</a>
			<a href="#experiences">Expériences</a>
			<a href="#competences">Compétences</a>
			<a href="#loisirs">Loisirs</a>
		</nav>
<script type='text/javascript' src='http://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js'></script>
 <script type="text/javascript">
 $(function(){
 // On recupere la position du bloc par rapport au haut du site
 var position_top_raccourci = $("#header").offset().top;
 
 //Au scroll dans la fenetre on déclenche la fonction
 $(window).scroll(function () {
 
 //si on a defile de plus de 150px du haut vers le bas
 if ($(this).scrollTop() > position_top_raccourci) {
 
 //on ajoute la classe "fixNavigation" a <div id="navigation">
 $('#header').addClass("fixNavigation"); 
 } else {
 
 //sinon on retire la classe "fixNavigation" a <div id="navigation">
 $('#header').removeClass("fixNavigation");
 }
 });
 });
 </script>
 
		<div id="presentation">
			<h1> Présentation </h1>		
		</div>
		<p>
			Ici je vais mettre une présentation de moi
		</p>
		
		
		
		
		<div id="formation">
			<h1>Formation </h1>
		</div>
		<p>
			Ici, je vais décrire ma formation
			<ul>
				<li> <B> Master Mathématiques Informatique Appliquées aux Sciences Humaines et Sociales (MIASHS)</B> parcours Web Analyste - Université Lille 3, Villeneuve d'Ascq </li>
				<li> <B> LicenceMathématiques Informatique Appliquées aux Sciences Humaines et Sociales (MIASHS)</B> parcours Mathématiques Appliquées aux Sciences Economique (MASE) - mention AB - Université Lille 3, Villeneuve d'Ascq</li>
				<li> <B> Baccalauréat économique et social - Spécialité mathématiques </B> - Mention AB - Lycée Charles de Gaulle, Compiègne </li>
			</ul>
		</p>
		
		
		<div id="experiences">
			<h1>Expériences </h1>
		</div>
		<p>
			Ici, mes expériences
		</p>
		<p>
			<B> Chargée d'accueil - Banque Populaire </B>- Compiègne
			<ul>
				<li> Accueil physique et téléphonique </li>
				<li> Opérations courantes </li>
				<li> Gestion de compte (virements, transactions, consultations de compte, ...)</li>
			</ul>
		</p>
		
		<p>
			<B> Chargée d'accueil - Société Générale </B> - La Madeleine
			<ul>
				<li> Accueil physique et téléphonique </li>
				<li> Opérations courantes </li>
				<li> Gestion de compte (virements, transactions, consultations de compte, ...)</li>
				<li> Gestion des archives </li>
				</ul>
		</p>
		
		<p>
			<B> Stage - CNAV (Caisse Nationale d'Assurance Vieillesse) pôle Prévisions </B> - Paris 
			<ul>
				<li> Analyse des impacts des différentes réformes sur les flux de départs en retraite </li>
				<li> Etude de grandes bases de données, création de graphiques sur Microsoft Excel </li>
				<li> Analyse des résultats </li>
			</ul>
		</p>
		
		
		<div id="competences">
			<h1> Compétences </h1>
		</div>
		<p>
		Quels sont mes compétences ?
		</p>
		
		
		<div id="loisirs">
			<h1> Loisirs </h1>
		</div>
		<p>
		Et enfin ici, je vais mettre tous mes loisirs / activités extra scolaires / voyages ...
		</p>
	</body>
</html>