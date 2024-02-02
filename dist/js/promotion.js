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
        if (value === '0') {
            $('#prod-service-wrapper').hide();
            $('#price-comp-wrapper').hide();
        }
        else {
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
        var promo_discount = $('#pdiscount-p').val();

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
                //$("#temp tbody").text('');
                var count = 0;
                var top_record = 0;
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
                    var price_comp_text = $("#price-comp option:selected").text();


                    if (price_comp === price_comp_id) {
                        top_record = top_record + 1; //Display only first record
                        if (top_record < 2 && promo_discount != "") {
                            $('#dis-column').show();
                            var discount = Math.floor(price) * (promo_discount / 100);
                            discount = parseFloat(discount.toFixed(2));
                            var discounted_price = parseFloat(price - discount).toFixed(2);
                            price = parseFloat(price).toFixed(2);
                            $("#temp").append('<tr id = "row-' + count + '"><td><span id="pricecomp-' + count + '">' + price_comp_text + '</span></td><td class="text-align-right">$<span id="price-' + count + '">' + price + '</span></td><td class="text-align-right">$<span id="price-dis-' + count + '">' + discounted_price + '</span></td><td class="text-align-center"><a class="edit-link btn btn-sm fa fa-remove" title="Remove Price Component from this list" id = "' + count + '" href="javascript:void(0);"></a></td></tr>');
                        }
                        else if (top_record < 2) {
                            price = parseFloat(price).toFixed(2);
                            $("#temp").append('<tr id = "row-' + count + '"><td><span id="pricecomp-' + count + '">' + price_comp_text + '</span></td><td class="text-align-right">$<span id="price-' + count + '">' + price + '</span></td><td class="text-align-center"><a class="edit-link btn btn-sm fa fa-remove" title="Remove Price Component from this list" id = "' + count + '" href="javascript:void(0);"></a></td></tr>');
                        }
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

        $('#prod-service').prop('disabled', true);
        $('#prod').prop('disabled', true);

        $('#no-products').hide();
        $('#list-products').show();
        $('#search-results').show();

        $('.prod-value').text(prod);
        $('.prod-service-value').text(prod_service);
        $('.price-comp-value').text(price_comp);


        $('html, body').animate({
            scrollTop: $("#search-results").offset().top
        }, 2000);

    });

    $(document).on("click", ".edit-link", function (e) {
        //jQuery('#edit-price').modal('show');
        var id = $(this).attr('id');
        var row_id = '#row-' + id;
        $(row_id).hide();
    });

    $(document).on("click", "#reset-product", function (e) {
        var p_code = $('#promo-code').val();
        var p_price = $('#promo-price').val();
        var e_date_from = $('#effective-date-from').val();
        var e_date_to = $('#effective-date-to').val();
        location.reload();
        $('#promo-code').val(p_code);
        $('#promo-price').val(p_price);
        $('#effective-date-from').val(e_date_from);
        $('#effective-date-to').val(e_date_to);
    });

    $(".promo").click(function () {
        var id = $(this).attr('id');
        $("#promo-content-" + id).slideToggle();
        $(this).find(".more-less").toggleClass('fa-plus fa-minus');
    });
    $("#promotion-price-wrapper .promo-price").change(function () {
        var value = $(this).val();
        if (value === 'fixed') {
            $('#fixed-wrapper').show();
            $('#percent-wrapper').hide();
        }
        else {
            $('#fixed-wrapper').hide();
            $('#percent-wrapper').show();
        }
    });
    $("#gen-code").click(function () {

        var result = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        var charactersLength = characters.length;
        for (var i = 0; i < 4; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        $('#pcode-2').val(result);
    });

    $("#filter").click(function () {
        var value = $('#pstatus option:selected').val();

        $('#temp > tbody > tr').hide();
        $('#temp > tbody > tr.' + value).show();

        if (value === '0') {
            $('#temp > tbody > tr.all').show();
        }
    });

    $("#reset").click(function () {
        $('#temp > tbody > tr.all').show();
        $('#pstatus').val('0');
    });

    $("#have-pcode").change(function () {
        var temp = $('#have-pcode:checked').length;
        if (temp > 0) {
            $('#have-pcode-wrapper').show();
        }
        else {
            $('#have-pcode-wrapper').hide();
            $('#pcode-message').hide();
            $('#with-promo').hide();
            $('#without-promo').show();
        }

    });

    $("#preview-chk").change(function () {
        var temp = $('#preview-chk:checked').length;

        var promo_code = $('#promo-code').val();
        $('#public-promo-code').text(promo_code); // Promo Code

        var product = $('#prod-new option:selected').text();
        $('#product-name').text(product); //Product

        var date_from = $('#effective-date-from').val();
        var date_to = $('#effective-date-to').val();

        $('#date-from').text(date_from);
        $('#date-to').text(date_to);

        var max_response = $('#max-response').val();
        if (max_response !== '') {
            $('#responses').html('OR first <strong>' + max_response + '</strong> promotional code usage');
        }
        
        var percentage = $('#pdiscount-p').val();
        var fixed = $('#pdiscount-f').val();
        var non = $('#pdiscount-n').val();
        
        if ( (percentage !== "") && (fixed === '') && (non ==='') ){
            $('#discount-value').html('<span class="bold-text">'+percentage + '%</span><span>Discount</span>');
        }
        else if ( (percentage === "") && (fixed !== '') && (non ==='') ){
            $('#discount-value').html('<span class="bold-text">$'+fixed + '</span><span>Discount</span>');
        }
        
        else if ( (percentage === "") && (fixed === '') && (non !=='') ){
            $('#discount-value').html('<span class="non-text">'+ non + '</span><span><a href="" style="font-size: 0.9em;color: #fff;text-decoration: underline;">*Click to view T&amp;C</a></span>');
        }
        
        if (temp > 0) {
            $('#preview').show();
        }
        else {
            $('#preview').hide();
        }
    });

    $("#public-promo-code").click(function () {
        $('#pcode-message').show();
        $('#with-promo').show();
        $('#without-promo').hide();
    });

    $("#btn-validate").click(function () {
        $('#pcode-message').show();
        $('#with-promo').show();
        $('#without-promo').hide();
    });

    $(".card-article-link").click(function () {
        id = $(this).attr('id');

        if ($('#have-pcode:checked').length > 0) {
            if (id === 'cc') {
                pathway = 'wp&';
                var queryString = "?" + pathway;
                window.location.href = "cc.html" + queryString;
            }

            if (id === 'ti') {
                pathway = 'wp&';
                var queryString = "?" + pathway;
                window.location.href = "tax-invoice.html" + queryString;
            }

            if (id === 'po') {
                pathway = 'wp&';
                var queryString = "?" + pathway;
                window.location.href = "pay-by-org.html" + queryString;
            }
        }
        else {
            if (id === 'cc') {
                window.location.href = "cc.html" + "?&";
            }
            if (id === 'ti') {
                window.location.href = "tax-invoice.html" + "?&";
            }
            if (id === 'po') {
                window.location.href = "pay-by-org.html" + "?&";
            }

        }
    });
});




