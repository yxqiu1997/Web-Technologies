// Filter by Javascript
var url="http://localhost:3000";

$(document).ready(function() {
    $('.category-item').click(function() {
        var category = $(this).attr('id');
        var prefixId = 'tv-'; 

        if (category == 'tv') {
            axios.get(url + '/sql').then(function (response) {
                var length = response.data.length;
                for (var i = 1; i <= length; ++i) {
                    var id = prefixId + i;
                    var tag = response.data[i - 1].tag;
                    if (tag == 'tv') {
                        $('#' + id).addClass(tag);
                    }
                }
            }).catch(function (error) {
                console.log(error);
            });
        }
    })
});

// Newsletter
$(document).ready(function() {
    $('.newsletter-btn').click(function() {
        var input = selectElement('.newsletter-input').value;

        if (input.search(/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/) == -1) {
            alert("Warning: Invalid email address! Try again!");
        }
        else {
            axios.get(url + '/email' + '?email=' + input).then(function(response) {
                console.log(response);
            }).catch(function (error) {
                console.log(error);
            });
        }
    });
});

