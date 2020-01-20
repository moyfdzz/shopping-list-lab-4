function addItemFunctionality() {
    $('#formList').on('submit', function(event) {
        event.preventDefault();

        let item = $('.newItem').val();

        if (item === '') {
            console.log("The new item is empty.");
            return;
        }

        $('.itemsList').append(`<li class="item">
                                    <p class="itemName">${item}</p>
                                    <button class="checkButton">check</button>
                                    <button class="deleteButton">delete</button>
                                </li>`);

        $('.newItem').val('');
    });
}

function checkButtonFunctionality() {
    $('.itemsList').on('click', '.checkButton', function(event) {
        $(this).parent().toggleClass('checked');
    })
}

function deleteButtonFunctionality() {
    $('.itemsList').on('click', '.deleteButton', function(event) {
        $(this).parent().remove();
    })
}

function init() {
    addItemFunctionality();
    checkButtonFunctionality();
    deleteButtonFunctionality();
}

init();