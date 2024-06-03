$(document).ready(function () {
    isDarkTheme = localStorage.getItem("isDarkTheme");
    if (isDarkTheme === undefined || isDarkTheme === null) {
        isDarkTheme = true;        
    }
    else if (isDarkTheme == false || isDarkTheme == "false")
    {
        $(".switch-button").toggleClass("switch-button--active");
        $("body").toggleClass("body--white");
    }



    var path = window.location.pathname;
    $('.menu__link[href="' + path + '"]').addClass('menu__link--active');
    $('.menu__list-link[href="' + path + '"]').addClass('menu__list-link--active');


    var intials = $('#name').val().charAt(0);
    $('#profileImage').text(intials);
    $('profileSelect').on('change', function () {
        alert("he")
        let name = $("#profileSelect").val();
        window.location = "/home/profile?name=" + name;
    });
});

function previewProfileFile() {
    var preview = document.querySelector('#profile-image1');
    var file = document.querySelector('#profile-image-upload').files[0];
    var reader = new FileReader();

    reader.addEventListener("load", function () {
        Alpine.store('profile').isEdit = true;
        preview.src = reader.result;
    }, false);

    if (file) {
        reader.readAsDataURL(file);
        uploadFile(file, "ImageUrl");
    }
}

function previewPostFile() {
    var preview = document.querySelector('#post-image1');
    var file = document.querySelector('#post-image-input').files[0];
    var reader = new FileReader();

    reader.addEventListener("load", function () {
        preview.src = reader.result;
    }, false);

    if (file) {
        reader.readAsDataURL(file);
        uploadFile(file, "PostImageUrl");
    }
}


$(function () {
    $('#profile-image1').on('click', function () {
        $('#profile-image-upload').click();
    });

    $('#post-image1').on('click', function () {
        $('#post-image-input').click();
    });
});


function clicked() {
    console.log('clicked'); 
}


function showSuccessToast(message) {
    toastr.success(message, 'Success', { positionClass: 'toast-top-right' });
}

function showErrorToast(message , header) {
    toastr.error(message, header , { positionClass: 'toast-top-right' });
}

function showInfoToast(message ,header ) {
    toastr.info(message, header , { positionClass: 'toast-top-right' });
}

function showWarningToast(message , header ) {
    toastr.warning(message, header , { positionClass: 'toast-top-right' });
}


function uploadFile(file, id) {
    let formData = new FormData();
    formData.append('file', file);


    $.ajax({
        url: PBURL + "api/collections/intellexus_files/records",
        type: 'post',
        data: formData,
        headers: {
            "X-Token": 'KnowV@tion22'
        },
        processData: false,
        contentType: false,
        success: function (data) {
            let fileUrl = `api/files/${data.collectionName}/${data.id}/${data.file}`;
            $(`#${id}`).val(fileUrl);
            showInfoToast("Upload Successful", "Message")
        }
    });
}