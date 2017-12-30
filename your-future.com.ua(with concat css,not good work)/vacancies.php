<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Вакансії | Твоє майбутнє</title>

    <!--Favicon logo-->
    <link rel="shortcut icon" href="./img/logo.png" type="image/png">

    <!--Font-Google-->
    <link href="https://fonts.googleapis.com/css?family=Raleway:400,500,600,700" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Roboto:500,700" rel="stylesheet">

    <!-- Magnific Popup core CSS file -->
    <link rel='stylesheet prefetch' href='https://cdnjs.cloudflare.com/ajax/libs/magnific-popup.js/1.1.0/magnific-popup.css'>

     <!--Style-->
       <link href="css/style.css" rel="stylesheet">


</head>
<body>
<!--Navigation out menu section start-->
<? require_once('navigation_out_menu.php') ?>
<!--Navigation out menu section end-->

<!--Header section start-->
<? require_once('header.php') ?>
<!--Header section end-->

<!--Main section start-->
<main id="mainContainer">
     <!--vacancy 1-->
      <div class="vacancies">
          <img class="img-responsive " src="img/Fundraising-Tree.jpg" alt="Fundraising">
          <h4>Спеціаліст з фандрайзингу</h4>
          <div class="buttonAbout">
              <a href="fundraising.php"  class="vacancies_link">Детальніше<i class="fa fa-arrow-right" aria-hidden="true"></i></a>
          </div>
      </div>
    <!--vacancy 2-->
     <div class="vacancies">
         <img class="img-responsive " src="img/fotograf.jpg" alt="photographer">
         <h4>Фотограф</h4>
         <div class="buttonAbout">
             <a href="fotograf.php"  class="vacancies_link">Детальніше<i class="fa fa-arrow-right" aria-hidden="true"></i></a>
         </div>

     </div>
</main>
<!--Main section end-->

<!--Footer section start-->
<? require_once('footer.php') ?>
<!--Footer section end-->

<!--scripts-->

    <!--Font-Awesome-->
    <script  src="https://use.fontawesome.com/2ce0afabeb.js"></script>

    <!--jquery-->
    <script src="https://code.jquery.com/jquery-3.2.1.min.js" integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4=" crossorigin="anonymous"></script>

    <!-- Magnific Popup core JS file -->
    <script src='https://cdnjs.cloudflare.com/ajax/libs/magnific-popup.js/1.1.0/jquery.magnific-popup.min.js'></script>

    <!--js-->
    <script  src="js/index.js"></script>
    <script  src="js/scroll.js"></script>
    <script  src="js/effects_button_help.js"></script>

</body>
</html>