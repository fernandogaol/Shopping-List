$(function() {
  $("#js-shopping-list-form").submit(e => {
    e.preventDefault();

    let newItem = $("#shopping-list-entry").val();

    $(".shopping-list").append(`<li>
  <span class="shopping-item">${newItem}</span>
  <div class="shopping-item-controls">
    <button class="shopping-item-toggle">
      <span class="button-label">check</span>
    </button>
    <button class="shopping-item-delete">
      <span class="button-label">delete</span>
    </button>
  </div>
</li>`);
  });
});

function handleCheckClick() {
  $(".shopping-list").on("click", ".shopping-item-toggle", function() {
    $(this.parentElement.parentElement.children[0]).toggleClass(
      "shopping-item__checked"
    );
  });
}

function handleRemoveClick() {
  $(".shopping-list").on("click", ".shopping-item-delete", function() {
    $(this.parentElement.parentElement).remove();
  });
}

handleCheckClick();

handleRemoveClick();
