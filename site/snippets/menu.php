<nav>
  <h4><ul class="menu">
    <?php foreach($pages->visible() as $item): ?>
      <li class="menu-item<?= r($item->isOpen(), ' is-active') ?>">
      <a href="<?= $item->url() ?>"><?= $item->title()->html() ?></a>
      </li></n4>
    <?php endforeach ?>
  </ul>
</nav>
