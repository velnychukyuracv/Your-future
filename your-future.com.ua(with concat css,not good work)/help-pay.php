<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Допомогти | Твоє майбутнє</title>

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
    <!--pay-->
    <div class="container_count">
        <div class="block_count">
            <a href="" class=" count" data-count="200" data-left="0"><span>200 грн.</span></a>
            <a href="" class=" count" data-count="500" data-left="110"><span>500 грн.</span></a>
            <a href="" class=" count curent" data-count="1000" data-left="220"><span>1 000 грн.</span></a>
            <a href="" class=" count" data-count="2000" data-left="330"><span>2 000 грн.</span></a>
            <a href="" class=" count" data-count="5000" data-left="440"><span>5 000 грн.</span></a>
            <div class="active"></div>
        </div>
        <h4 class="price">1000 грн.</h4>
        <form action="thanks-pay.php" >
            <input type="number" name="count" placeholder="або інша сума" min="1">
            <input type="hidden" name="final_price" value="1000">
            <input  type="submit" value="Допомогти">
        </form>
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