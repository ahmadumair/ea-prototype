jQuery(function ($) {
    console.log('Promotion');

    $(".mem-filter").click(function () {
        var prod_id = $("#prod-new option:selected").val();

        //Filter section for EA Membersip
        if (prod_id === '2') {

            var fee_text = $("#fee-types-new option:selected").text();

            var prod_service_id = $("#prod-services-new option:selected").val();
            var prod_service_text = $("#prod-services-new option:selected").text();

            var location_val = $(".location:checked").val();

            $('#temp tbody tr').hide(); //hide all rows

            var count = 0;
            $('#counter').text(count);

            var fee_flag = 0;
            var fee_id = $("#fee-types-new option:selected").val();

            var pservice_flag = 0;
            var pservice_id = $("#prod-services-new option:selected").val();

            var grade_flag = 0;
            var grade_id = $("#grade-new option:selected").val();

            var year_flag = 0;
            var year_id = $(".year:checked").val();

            var location_flag = 0;
            var location_id = $(".location:checked").val();

            var chartered_flag = 0;
            var chartered_id = $(".chartered:checked").val();

            var cduration_flag = 0;
            var cduration_id = $(".cduration:checked").val();

            var mra_flag = 0;
            var mra_id = $(".mra:checked").val();

            var register_flag = 0;
            var register_id = $(".register:checked").val();

            var invited_flag = 0;
            var invited_id = $(".invited:checked").val();

            var ocategory_flag = 0;
            var ocategory_id = $("#occu-new option:selected").val();


            //traversing each row one by one
            $('#temp tbody tr').each(function () {

                // Fee Type Check
                if (fee_id == 0) {
                    fee_flag = 1;
                }
                else if (fee_id == $(this).find('td.feetype').data('feetype')) {
                    fee_flag = 1;       //if value is same display row

                }
                else {
                    fee_flag = 0;
                }


                // Product Service Check
                if (pservice_id == 0) {
                    pservice_flag = 1;

                }
                else if (pservice_id == $(this).find('td.pservice').data('pservice')) {
                    pservice_flag = 1; //if value is same display row
                }
                else {
                    pservice_flag = 0;
                }


                // Grade Check
                if (grade_id == 0) {
                    grade_flag = 1;

                }
                else if (grade_id == $(this).find('td.grade').data('grade')) {
                    grade_flag = 1; //if value is same display row
                }
                else {
                    grade_flag = 0;
                }

                // Year Check
                if (year_id == 0) {
                    year_flag = 1;

                }
                else if (year_id == $(this).find('td.year').data('year')) {
                    year_flag = 1; //if value is same display row
                }
                else {
                    year_flag = 0;
                }

                // Occupational Category Check
                if (ocategory_id == 0) {
                    ocategory_flag = 1;

                }
                else if (ocategory_id == $(this).find('td.ocategory').data('ocategory')) {
                    ocategory_flag = 1; //if value is same display row
                }
                else {
                    ocategory_flag = 0;
                }

                // Chartered Check
                if (chartered_id == 0) {
                    chartered_flag = 1;

                }
                else if (chartered_id == $(this).find('td.chartered').data('chartered')) {
                    chartered_flag = 1; //if value is same display row
                }
                else {
                    chartered_flag = 0;
                }

                // Chartered Duration Check
                if (cduration_id == 0) {
                    cduration_flag = 1;

                }
                else if (cduration_id == $(this).find('td.cduration').data('cduration')) {
                    cduration_flag = 1; //if value is same display row
                }
                else {
                    cduration_flag = 0;
                }

                // Register Check
                if (register_id == 0) {
                    register_flag = 1;

                }
                else if (register_id == $(this).find('td.register').data('register')) {
                    register_flag = 1; //if value is same display row
                }
                else {
                    register_flag = 0;
                }

                // Register Check
                if (invited_id == 0) {
                    invited_flag = 1;

                }
                else if (invited_id == $(this).find('td.invited').data('invited')) {
                    invited_flag = 1; //if value is same display row
                }
                else {
                    invited_flag = 0;
                }

                // MRA Check
                if (mra_id == 0) {
                    mra_flag = 1;

                }
                else if (mra_id == $(this).find('td.mra').data('mra')) {
                    mra_flag = 1; //if value is same display row
                }
                else {
                    mra_flag = 0;
                }

                // Location Check
                if (location_id == 0) {
                    location_flag = 1;

                }
                else if (location_id == $(this).find('td.location').data('location')) {
                    location_flag = 1; //if value is same display row
                }
                else {
                    location_flag = 0;
                }


                if (fee_flag !== 0 && pservice_flag !== 0 && location_flag !== 0 && grade_flag !== 0 && year_flag !== 0 && ocategory_flag !== 0 && chartered_flag !== 0 && mra_flag !== 0 && cduration_flag !== 0 && register_flag !== 0 && invited_flag !== 0) {

                    count = count + 1;
                }
                if (fee_flag && pservice_flag && location_flag && grade_flag && year_flag && ocategory_flag && chartered_flag && mra_flag && cduration_flag && register_flag && invited_flag) {
                    $(this).show();  //displaying row which satisfies all conditions
                    $('#counter').text(count);
                }
            });
        }
        
        //Filter section for NER

        else if (prod_id === '4') {

            var pservice_flag = 0;
            var pservice_id = $("#prod-services-ner option:selected").val();

            var ocategory_flag = 0;
            var ocategory_id = $("#occu-ner option:selected").val();

            var location_flag = 0;
            var location_id = $(".location-ner:checked").val();

            var member_flag = 0;
            var member_id = $(".member-ner:checked").val();

            $('#temp tbody tr').hide(); //hide all rows

            var count = 0;
            $('#counter').text(count);

            //traversing each row one by one
            $('#temp tbody tr').each(function () {

                // Product Service Check
                if (pservice_id == 0) {
                    pservice_flag = 1;

                }
                else if (pservice_id == $(this).find('td.pservice').data('pservice')) {
                    pservice_flag = 1; //if value is same display row
                }
                else {
                    pservice_flag = 0;
                }


                // Occupational Category Check
                if (ocategory_id == 0) {
                    ocategory_flag = 1;

                }
                else if (ocategory_id == $(this).find('td.ocategory').data('ocategory')) {
                    ocategory_flag = 1; //if value is same display row
                }
                else {
                    ocategory_flag = 0;
                }

                // Member Check
                if (member_id == 0) {
                    member_flag = 1;

                }
                else if (member_id == $(this).find('td.member').data('member')) {
                    member_flag = 1; //if value is same display row
                }
                else {
                    member_flag = 0;
                }


                // Location Check
                if (location_id == 0) {
                    location_flag = 1;

                }
                else if (location_id == $(this).find('td.location').data('location')) {
                    location_flag = 1; //if value is same display row
                }
                else {
                    location_flag = 0;
                }

                if (pservice_flag !== 0 && location_flag !== 0 && ocategory_flag !== 0 && member_flag !== 0) {

                    count = count + 1;
                }
                if (pservice_flag && location_flag && ocategory_flag && member_flag) {
                    $(this).show();  //displaying row which satisfies all conditions
                    $('#counter').text(count);
                }

            });
        }
        
        //Filter section for Technical Societies

        else if (prod_id === '6') {

            var fee_flag = 0;
            var fee_id = $("#org-ts option:selected").val();

            var pservice_flag = 0;
            var pservice_id = $("#prod-services-ts option:selected").val();

            $('#temp tbody tr').hide(); //hide all rows

            var count = 0;
            $('#counter').text(count);

            //traversing each row one by one
            $('#temp tbody tr').each(function () {

                // Organisation ID Check
                if (fee_id == 0) {
                    fee_flag = 1;
                }
                else if (fee_id == $(this).find('td.feetype').data('feetype')) {
                    fee_flag = 1;       //if value is same display row

                }
                else {
                    fee_flag = 0;
                }

                // Product Service Check
                if (pservice_id == 0) {
                    pservice_flag = 1;

                }
                else if (pservice_id == $(this).find('td.pservice').data('pservice')) {
                    pservice_flag = 1; //if value is same display row
                }
                else {
                    pservice_flag = 0;
                }

                if (pservice_flag !== 0 && fee_flag !== 0) {
                    count = count + 1;
                }
                if (pservice_flag && fee_flag) {
                    $(this).show();  //displaying row which satisfies all conditions
                    $('#counter').text(count);
                }

            });
        }

    });


    $("#search-btn").click(function () {



        $.ajax({
            type: "GET",
            url: "promotion.xml",
            dataType: "xml",
            contentType: "application/json; charset=utf-8",
            ProcessData: false,
            success: function (xml) {

//            var xmlDoc = $.parseXML(xml),
//            $xml = $(xmlDoc);
//            //if single item
                var $promotion = $(xml).find('promotion');
                $("#temp tbody").text('');
                var count = 0;
                //but if it's multible items then loop
                $promotion.each(function () {
                    //Getting all the individual values from promotion.xml
                    var fee = $(this).find('fee').text();
                    var product_id = $(this).find('product-id').text();
                    var text = $(this).find('text').text();
                    var fee_type = $(this).find('fee-type').text();
                    var pservice = $(this).find('pservice').text();
                    var location = $(this).find('location').text();
                    var grade = $(this).find('grade').text();
                    var year = $(this).find('year').text();
                    var ocategory = $(this).find('ocategory').text();
                    var chartered = $(this).find('chartered').text();
                    var cduration = $(this).find('cduration').text();
                    var mra = $(this).find('mra').text();
                    var register = $(this).find('register').text();
                    var invited = $(this).find('invited').text();
                    var member = $(this).find('member').text();

                    var prod_id = $("#prod-new option:selected").val();

                    var promo_discount = $('#pdiscount-p').val();

                    //Conditional statement for Percentage Promotional Discount
                    if (promo_discount != "") {
                        if (fee === '') {
                            fee = 'Price not set';
                            var discounted_fee = 'No discount';
                        }
                        else {
                            fee = parseFloat(fee).toFixed(2);
                            $('#dis-column').show();
                            var discount = Math.floor(fee) * (promo_discount / 100);
                            discount = parseFloat(discount.toFixed(2));
                            var discounted_fee = '$' + parseFloat(fee - discount).toFixed(2);
                            fee = '$' + parseFloat(fee).toFixed(2);
                        }
                        
                        if (prod_id === product_id) {
                            count = count + 1;
                            $("#temp").append('<tr id = "row-' + count + '"><td><span id="pricecomp-' + count + '">' + text + '</span></td>  <td style="display: none" class="feetype"  data-feetype="' + fee_type + '" ></td><td style="display: none" class="grade"  data-grade="' + grade + '" ></td><td style="display: none" class="year"  data-year="' + year + '" ></td><td style="display: none" class="ocategory"  data-ocategory="' + ocategory + '" ></td><td style="display: none" class="location"  data-location="' + location + '" ></td><td class="text-align-right"><span id="price-' + count + '">' + fee + '</span></td>   <td style="display: none" class="pservice"  data-pservice="' + pservice + '" ></td> <td style="display: none" class="chartered"  data-chartered="' + chartered + '" ></td> <td style="display: none" class="cduration"  data-cduration="' + cduration + '" ></td><td style="display: none" class="register"  data-register="' + register + '" ></td> <td style="display: none" class="mra"  data-mra="' + mra + '" ></td><td style="display: none" class="invited"  data-invited="' + invited + '" ></td> <td style="display: none" class="member"  data-member="' + member + '" ></td><td class="text-align-right"><span id="price-dis-' + count + '">' + discounted_fee + '</span></td><td class="text-align-center"><a class="edit-link btn btn-sm fa fa-remove" title="Remove Price Component from this list" id = "' + count + '" href="javascript:void(0);"></a></td></tr>');
                            $('#counter').text(count);
                        }
                    }
                    else {
                        if (fee === '') {
                            fee = 'Price not set';
                        }
                        else {
                            fee = '$' + parseFloat(fee).toFixed(2);
                        }

                        if (prod_id === product_id) {
                            count = count + 1;
                            $("#temp").append('<tr id = "row-' + count + '"><td><span id="pricecomp-' + count + '">' + text + '</span></td>  <td style="display: none" class="feetype"  data-feetype="' + fee_type + '" ></td><td style="display: none" class="grade"  data-grade="' + grade + '" ></td><td style="display: none" class="year"  data-year="' + year + '" ></td><td style="display: none" class="ocategory"  data-ocategory="' + ocategory + '" ></td><td style="display: none" class="location"  data-location="' + location + '" ></td><td class="text-align-right"><span id="price-' + count + '">' + fee + '</span></td>   <td style="display: none" class="pservice"  data-pservice="' + pservice + '" ></td><td style="display: none" class="chartered"  data-chartered="' + chartered + '" ></td><td style="display: none" class="cduration"  data-cduration="' + cduration + '" ></td><td style="display: none" class="register"  data-register="' + register + '" ></td><td style="display: none" class="mra"  data-mra="' + mra + '" ></td><td style="display: none" class="invited"  data-invited="' + invited + '" ></td><td style="display: none" class="member"  data-member="' + member + '" ></td><td class="text-align-center"><a class="edit-link btn btn-sm fa fa-remove" title="Remove Price Component from this list" id = "' + count + '" href="javascript:void(0);"></a></td></tr>');
                            $('#counter').text(count);
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
        
        $('#list-products').show();
        $('#search-results').show();


        var prod_id = $("#prod-new option:selected").val();
        if (prod_id === '1') {
            $('#membership-filters').hide();
            $('#ner-filters').hide();
            $('#ts-filters').hide();
            $('#no-products').hide();
        }
        else if (prod_id === '2') {
            $('#membership-filters').show();
            $('#ner-filters').hide();
            $('#ts-filters').hide();
            $('#no-products').hide();

            $('#fee-types-new-wrap').show();
            $('#prod-services-new-wrap').show();
            $('#grade-new-wrap').show();
            $('#occu-new-wrap').show();
            $('#location-new-wrap').show();

            $('#grade-new').change(function () {
                var grade_value = $(this).val();
                if (grade_value === 'Graduate') {
                    $('#year-new-wrap').show();
                }
                else {
                    $('#year-new-wrap').hide();
                }
            });

            $('.chartered').change(function () {
                var chart_value = $(this).val();
                if (chart_value === 'Y') {
                    $('#cduration-wrap').show();
                }
                else {
                    $('#cduration-wrap').hide();
                }
            });

            $('#fee-types-new').change(function () {
                var ftype_value = $(this).val();
                if (ftype_value === '1') {
                    $('#more-filters').hide();
                    $('#chartered-wrap').hide();
                    $('#mra-wrap').hide();
                    $('#invited-wrap').hide();
                    $('#register-wrap').hide();

                }
                else {
                    $('#more-filters').show();
                    $('#chartered-wrap').show();
                    $('#mra-wrap').show();
                    $('#invited-wrap').show();
                    $('#register-wrap').show();
                }
            });
        }
        else if (prod_id === '3') {
            $('#membership-filters').hide();
            $('#ner-filters').hide();
            $('#ts-filters').hide();
            $('#no-products').hide();
        }
        else if (prod_id === '4') {
            $('#membership-filters').hide();
            $('#ner-filters').show();
            $('#ts-filters').hide();
            $('#no-products').hide();
        }
        else if (prod_id === '5') {
            $('#membership-filters').hide();
            $('#ner-filters').hide();
            $('#ts-filters').hide();
            $('#no-products').hide();
        }
        else if (prod_id === '6') {
            $('#membership-filters').hide();
            $('#ner-filters').hide();
            $('#ts-filters').show();
            $('#no-products').hide();
        }
        
         else if (prod_id === '0') {
            $('#membership-filters').hide();
            $('#ner-filters').hide();
            $('#ts-filters').hide();
            $('#no-products').show();
            $('#list-products').hide();
        }

        
        


//        $('.prod-value').text(prod);
//        $('.prod-service-value').text(prod_service);
//        $('.price-comp-value').text(price_comp);


        $('html, body').animate({
            scrollTop: $("#listing-products").offset().top
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
            $('#cust-msg-wrapper').show();
        }
        else if (value === 'other') {
            $('#other-wrapper').show();
            $('#fixed-wrapper').hide();
            $('#percent-wrapper').hide();
            var date = $('#effective-date-to').val();
            $('#effective-to-date').text(date);
            
            var text = $('#other-input').val();
            $('#other-text').text(text);
        }
        else {
            $('#percent-wrapper').show();
            $('#fixed-wrapper').hide();
            $('#cust-msg-wrapper').show();
        }
    });
    
    $("#other-input").on('change keyup paste', function() {
            var text = $('#other-input').val();
            $('#other-text').text(text);
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




