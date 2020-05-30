// Database

// import axios from 'axios';
var url="http://localhost:3000";

$(document).ready(function() {
    $('.category-item').click(function() {
        var category = $(this).attr('id');
        if (category == 'tv') {
            axios.get(url + '/sql').then(function (response) {
                console.log("777777777");
                console.log(response.data[0]);
            }).catch(function (error) {
                console.log(error);
            });
        }
    })
});