<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Проекти | Твоє майбутнє</title>

    <!--Favicon logo-->
    <link rel="shortcut icon" href="./img/logo.png" type="image/png">

    <!--Font-Google-->
    <link href="https://fonts.googleapis.com/css?family=Raleway:300,400,500,600,700" rel="stylesheet">
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

    <!--Project 1-->
       <div class="project">
           <!--Title-->
           <div class="project_title">
               <a href="letter-santa.php"  class="letter_santa">Лист Діду Морозу</a>
           </div>

           <h4>Розпочався 27.11.2017</h4>

           <!--Description project-->
           <div class="description_project">
               <!--picture project-->
               <div class="picture">
                   <img src="img/moroz-i-dvizh.jpg" alt="">
               </div>
               <!--About project-->
               <div class="about">
                   <p>Новий рік – час, коли усі чекають на подарунки, знаходяться в очікуванні якогось фантастичного дива, коли в чудеса вірять навіть дорослі, а діти радуються, передчуваючи бажаний подарунок. Цього Нового року «Твоє Майбутнє» приміряє костюм Діда Мороза та завітає із подарунками до Дарницького дитячого будинку-інтернату. Там на опікуванні знаходиться 148 вихованок з глибокою розумовою відсталістю. Подарункові набори для дівчаток складатимуться з іграшки, цукерок та шоколаду. Ціна одного набору складатиме 300 грн. Загальна вартість проекту 44 400 грн.
                   </p>
               </div>
               <!--Pay section-->
               <div class="price">
                   <a href="help-pay.php"  class="help">допомогти</a>
                   <div class="progress">
                       <div class="need">
                           <h4>Потрібно 44 400 грн </h4>
                       </div>
                       <div class="need_progress">
                           <span data-width="7.8" style="width: 7.8%;"></span>
                       </div>
                       <div class="left_progress">
                           <h5>Залишилось зібрати 40 944 грн </h5>
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

    <!--js-->
    <script  src="js/index.js"></script>
    <script  src="js/scroll.js"></script>
    <script  src="js/effects_button_help.js"></script>

</body>
</html>