<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Фотозвітність | Твоє майбутнє</title>

    <!--Favicon logo-->
    <link rel="shortcut icon" href="./img/logo.png" type="image/png">

    <!--Font-Google-->
    <link href="https://fonts.googleapis.com/css?family=Raleway:400,500,600,700" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Roboto:500,700" rel="stylesheet">

    <!-- Magnific Popup core CSS file -->
    <link rel='stylesheet prefetch' href='https://cdnjs.cloudflare.com/ajax/libs/magnific-popup.js/1.1.0/magnific-popup.css'>

    <!-- slick слайдер -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.css">

    <!--Style-->
    <link href="css/style.css" rel="stylesheet">


</head>
<body class="photoReporting">

<!--Navigation out menu section start-->
<? require_once('navigation_out_menu.php') ?>
<!--Navigation out menu section end-->

<!--Header section start-->
<? require_once('header.php') ?>
<!--Header section end-->

<!--Main section start-->
<main id="mainContainer">
    <!-- album 1 -->
    <div class='link_album'>
        <img src="img/portfolio1.jpg" alt="image">
        <div class="link_album_container">
            <h4>Альбом</h4>
            <a href="photo-reporting-album-1.php">Переглянути</a>
        </div>
    </div>

    <!-- album 2 -->
    <div class='link_album'>
        <img src="img/portfolio1.jpg" alt="image">
        <div class="link_album_container">
            <h4>Альбом</h4>
            <a href="#popup">Переглянути</a>
        </div>
    </div>

    <!-- popups to album 2-->
    <!-- Inside coup -->
    <div id="popup" class="overlay">
        <div class="popup">
            <a class="close" href="#">&times;</a>
            <!--wrapper to slider-->
            <div class='content'>
                <!-- Slider -->
                <div class="sl-main">
                    <div class="sl_slide">
                        <img class="img-responsive thanksgiving" src="img/portfolio1.jpg" alt="фото">
                    </div>
                    <div class="sl_slide">
                        <img class="img-responsive thanksgiving" src="img/portfolio2.jpg" alt="фото">
                    </div>
                    <div class="sl_slide">
                        <img class="img-responsive thanksgiving" src="img/portfolio3.jpg" alt="фото">
                    </div>
                    <div class="sl_slide">
                        <img class="img-responsive thanksgiving" src="img/portfolio4.jpg" alt="фото">
                    </div>
                </div>
            </div>
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

  <!-- slick слайдер -->
  <script  src="https://cdn.jsdelivr.net/gh/kenwheeler/slick@1.8.1/slick/slick.min.js"></script>

  <!--js-->
      <script  src="js/js.js"></script>

</body>
</html>