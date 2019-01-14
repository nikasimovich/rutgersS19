<!doctype html>
<html lang="<?= site()->language() ? site()->language()->code() : 'en' ?>">
<head>

  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1.0">

  <title><?= $site->title()->html() ?> | <?= $page->title()->html() ?></title>
  <meta name="description" content="<?= $site->description()->html() ?>">

  <?= css('assets/css/index.css') ?>
</head>
<body>
  <header>
    <div class="col col-6">
      <h3><a href="<?= url() ?>" rel="home"><?= $site->title()->html() ?></a></h3>
    </div>
    <div class="col col-6 right navigation-wrapper">
      <div class="hamburger">☰</div>
      <?php snippet('menu') ?>
    </div>
  </header>
