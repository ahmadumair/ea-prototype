jQuery(function ($) {
    console.log('Price');



    $("#prod").change(function () {
        if ($(this).data('options') === undefined) {
            $(this).data('options', $('#prod-service option').clone());
        }
        $('#prod-service-wrapper').show();
        var id = $(this).val();
        var options = $(this).data('options').filter('[value=' + id + ']');
        $('#prod-service').html(options);
        
        var value = $(this).val();
        if (value === '0'){
            $('#prod-service-wrapper').hide();
            $('#price-comp-wrapper').hide();
        }
        else{
            $('#prod-service-wrapper').show();
        }
    });

    $("#prod-service").change(function () {
        if ($(this).data('options') === undefined) {
            $(this).data('options', $('#price-comp option').clone());
        }
        $('#price-comp-wrapper').show();
        $('#creation-date-wrapper').show();
        var id = $("#prod-service option:selected").attr('name');
        var options = $(this).data('options').filter('[value=' + id + ']');
        $('#price-comp').html(options);
    });
    
    $("#price-comp").change(function () {
        $('#btn-search').removeClass('disabled');
    });
    $("#btn-search").click(function () {
        var prod = $("#prod option:selected").text();
        var prod_service = $("#prod-service option:selected").text();
        var price_comp = $("#price-comp option:selected").text();
        var creation_date_dropdown = $("#creation-date option:selected").text();


        $.ajax({
            type: "GET",
            url: "price-list.xml",
            dataType: "xml",
            contentType: "application/json; charset=utf-8",
            ProcessData: false,
            success: function (xml) {

//            var xmlDoc = $.parseXML(xml),
//            $xml = $(xmlDoc);
//            //if single item
                var $price = $(xml).find('price');
                $("#temp tbody").text('');
                var count = 0;
                //but if it's multible items then loop
                $price.each(function () {
                    //row Status

                    var ebs_code = $(this).find('ebs-code').text();
                    var price_comp_id = $(this).find('price-comp-id').text();
                    var price = $(this).find('price').text();
                    var creation_date = $(this).find('creation-date').text();
                    var effective_date = $(this).find('effective-date').text();
                    var updated_date = $(this).find('updated-date').text();
                    var status = $(this).find('status').text();

                    var str = creation_date;
                    var n = str.lastIndexOf('/');
                    var year = str.substring(n + 1);
                    count = count + 1;

                    var price_comp = $("#price-comp option:selected").attr('name');


                    if (price_comp === price_comp_id) {
                        $("#temp").append('<tr><td><span id="price-' + count + '">' + price + '</span></td><td><span id="effective-' + count + '">' + effective_date + '</span></td><td>' + creation_date + '</td><td>' + updated_date + '</td><td><span id="status-' + count + '">' + status + '</span></td><td class="text-align-center"><a class="edit-link btn btn-sm edit-link icon-portal icon-edit" title="Edit Price" id = "' + count + '" href="javascript:void(0);" data-toggle="modal" data-target="#edit-price"></a></td></tr>');
                    }

                });

            },
            beforeSend: function () {
                $('.loading').show();
            },
            complete: function () {
                $('.loading').hide();
            }
        });

        $('#search-results').show();
        $('.prod-value').text(prod);
        $('.prod-service-value').text(prod_service);
        $('.price-comp-value').text(price_comp);
        $('.date-value').text(creation_date_dropdown);
        
        $('html, body').animate({
            scrollTop: $("#search-results").offset().top
        }, 2000);

    });

    $(document).on("click", ".edit-link", function (e) {
        //jQuery('#edit-price').modal('show');
        var id = $(this).attr('id');



        var price_id = '#price-' + id;
        var effective_id = '#effective-' + id;
        var status_id = '#status-' + id;

        var price = $(price_id).text();
        var n = price.lastIndexOf('$');
        var price = price.substring(n + 1);
        
        
        var status = $(status_id).text();
        
        if (status === 'Active'){
            $('#yes').prop('checked',true);
        }
        else{
            $('#no').prop('checked',true);
        } 

        var effective = $(effective_id).text();

        $('#input-price').val(price);
        $('#datetimepicker-effective').val(effective);

    });

});




