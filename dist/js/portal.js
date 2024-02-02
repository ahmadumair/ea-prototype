jQuery(function ($) {
    console.log('xa');

    $('#edit-reason').change(function () {
        $selected_val = $(this).val();
        if ($selected_val === '3') {
            $('#other-reason').show();
        }
        else {
            $('#other-reason').hide();
        }
    });



    $('.status-chart-radio').change(function () {
        $value = $(this).val();
        if ($value === 'inactive') {
            $('#ir-register').hide();
            $('#apec-register').hide();
            $('#engexec-wrapper').hide();
            $('#chartered-wrapper').css('visibility', 'hidden');
        }
        else {
            $('#ir-register').show();
            $('#apec-register').show();
            $('#engexec-wrapper').show();
            $('#chartered-wrapper').css('visibility', 'visible');
        }
    });

    $('.section-radio').change(function () {
        $value = $(this).val();
        $id = $(this).attr('id');
        $sect = $id.substr(0, $id.indexOf('-'));
        if ($value === 'n') {
            $("#" + $sect).show();
            $("#" + $sect).addClass('open');
            $("#" + $sect +'s').hide();
            $("#" + $sect +'s').removeClass('open');
        }
        else {
            $("#" + $sect +'s').show();
            $("#" + $sect +'s').addClass('open');
            $("#" + $sect).hide();
            $("#" + $sect).removeClass('open');
        }
    });

    $("#show-hide-feedback").click(function () {
        $(".open").slideToggle();
    });


    $('.radio-region').change(function () {
        if ($(this).val() == 'all') {
            $('#all').show();
            $('#australia').hide();
            $('#international').hide();
        }
        else if ($(this).val() == 'aus') {
            $('#all').hide();
            $('#australia').show();
            $('#international').hide();
        }
        else if ($(this).val() == 'int') {
            $('#all').hide();
            $('#australia').hide();
            $('#international').show();
        }
    });



    $('.cv-type').change(function () {
        $value = $(this).val();
        if ($value === 'upload') {
            $('#upload').show();
            $('#online').hide();
            $('#exp-declaration').hide();
        }
        else if ($value === 'online') {
            $('#upload').hide();
            $('#online').show();
            $('#exp-declaration').hide();
        }
        else {
            $('#upload').hide();
            $('#online').hide();
            $('#exp-declaration').show();
        }
    });


    $('.radio-grade').change(function () {
        $selected_val = $(this).val();
        $('#ea-grade-value').text($selected_val);
        if ($selected_val === 'Graduate') {
            $('#grad').show();
        }
        else {
            $('#grad').hide();
        }
    });
    $('#past-mem1 input').change(function () {
        $value = $(this).val();
        if ($value === 'no') {
            $('#past-mem2').show();
        }
        else {
            $('#past-mem2').hide();
            $('#ea-grade-section').hide();
            $('#ea-grade-section').hide();
            $('#ea-oc-section').hide();
        }
    });
    $('#mem-change input').change(function () {
        $value = $(this).val();
        if ($value === 'grade' && $(this).is(':checked')) {
            $('#ea-grade-change').show();
        }
        else {
            $('#ea-grade-change').hide();
        }
    });

    $('#chartered').change(function () {
        if ($(this).is(':checked')) {
            $('#ner').attr("disabled", false);
        }
        else {
            $('#ner').attr("disabled", true);
        }
    });

    $('.mra .radio-oc').change(function () {

        $('#mra-grade').show();
        $('html, body').animate({
            scrollTop: $("#mra-grade").offset().top
        }, 2000);
        $('#additional-outcomes').hide();
        $('#mra-details').hide();
        $selectedMRA = $(this).val();
        $('#selected-mra').text($selectedMRA);
        $('#selected-mra1').text($selectedMRA);
        $Id = 'group' + $(this).attr('class').charAt(0);
        for (i = 1; i <= 6; i++) {
            var match = 'group' + i;
            if ($Id === match) {
                $('.grade').hide();
                $('#group' + i).show();
            }
        }
    });
    $('.grade .radio-oc').change(function () {
        $('#additional-outcomes').show();
        $('#mra-details').show();
    });
    $('#calculate-price').click(function () {
        $('#member-fee').html('<b>This is only a prototype :)</b>');
    });
    $('.radio-oc').change(function () {
        $selected_val = $(this).val();
        $('#ea-oc-value').text($selected_val);
    });
    $(".address.billto, .address.shipto, .address.professional").hide();
    $(".btn.click.billto").click(function () {
        $(".address.billto").slideToggle();
    });
    $(".btn.click.shipto").click(function () {
        $(".address.shipto").slideToggle();
    });
    $(".btn.click.professional").click(function () {
        $(".address.professional").slideToggle();
    });

    $(".showmore").click(function () {
        $(".showmore-content").slideToggle();
        $(this).find(".shows").toggleClass('more less');
    });
    $(".icon-info").hover(function () {
        $(this).next().slideToggle();
    });
    $('.info-text').hover(function () {
        $(this).next().slideToggle();
    });
    $(".icon-brules").hover(function () {
        $(this).next().slideToggle();
    });
    $(".btn.save-contact").click(function () {
        window.location = 'contact.html';
    });

    $("select#contact").change(function () {
        $selected_val = $(this).val();
        if ($selected_val === 'Mobile') {
            $('#mobile').show();
            $('#phone').hide();
        }
        else {
            $('#phone').show();
            $('#mobile').hide();
        }
    });
    $('#org-job-other').hide();
    $('#org-job-title').change(function () {
        if ($('#org-job-title').val() == 'other') {
            $('#org-job-other').show();
        } else {
            $('#org-job-other').hide();
        }
    });
    $("#save_button").click(function () {
        if ($('#mst-active').is(':checked')) {
            $('#online-active').show();
            $('#online-inactive').hide();
            $('#mst-active').attr("disabled", true);
            $('.checkOnlineStatus label').addClass('disabled');
        }
        else {
            $('#oline-active').hide();
            $('#online-inactive').show();
        }
    });
    $(".add-address-line").click(function () {
        $id = $(this).attr('id');
        $sub_id = $id.substr(0, $id.indexOf('-'));
        $('#' + $sub_id + '-wrapper').show();
    });
    $("#submit").click(function () {
        var $value = $('#datetimepicker-occu').val();
        if ($value === '') {
            $('#page-error').show();
            $('html, body').animate({scrollTop: '0px'}, 300);
        }
        else {
            $('#page-error').hide();
            $('#submit-confirmation').modal({
                show: 'true'
            });
        }
    });
    $("#country").change(function () {
        $selectVal = $(this).val();
        if ($selectVal == 'Australia') {
            $('#aust').show();
            $('#non-aust').hide();
        }
        else {
            $('#aust').hide();
            $('#non-aust').show();
        }
    });
    $('.dummy-navi-links').click(function () {
        $id = $(this).attr('id');
        $('.custom-sections').hide();
        $('#' + $id + '-sections').show();
        $('.dummy-links li').removeClass('active');
        $(this).parent().addClass('active');
        if ($id === 'inprog-app' || $id === 'compl-msa-app' || $id === 'unclaimed-app') {
            $('.right-panel').hide();
            $('#main-content').removeClass('col-sm-9');
            $('#main-content').addClass('col-sm-12');
        }
        else {
            $('.right-panel').show();
            $('#main-content').removeClass('col-sm-12');
            $('#main-content').addClass('col-sm-9');
        }
    });
//Start:: NER related JS code

    $('#vertical-progress-menu li a').click(function () {
        var $id = $(this).attr('id');
        $('.section-detail').hide();
        $('#' + $id + '-detail').show();
        $('#vertical-progress-menu li').removeClass('current');
        $(this).parent().addClass('current');
    });
    $('.ner-next').click(function () {
        var $id = $(this).attr('id');
        var $current = $id.substr(0, $id.indexOf('-'));
        var $next = $id.split('-').pop();
        $('#' + $current + '-tick').show();
        $('.section-detail').hide();
        $('#' + $next + '-detail').show();
        $('#vertical-progress-menu li').removeClass('current');
        $('#vertical-progress-menu li a#' + $next).parent().addClass('current');
        $('.progress-meter li#' + $current + '-dash').removeClass('todo');
        $('.progress-meter li#' + $current + '-dash').addClass('done');
        if ($id == 'work-dash') {
            $('#payment-tick').show();
            $('#TS').show();
            $('#not-ready').hide();
            $('#payment-ready').show();
        }
    });
    $('#ts-check').click(function () {
        if ($(this).is(':checked')) {
            $("#pay-submit").removeClass('disabled');
        } else {
            $("#pay-submit").addClass('disabled');
        }
    });
//End:: NER related JS code


//Show / Hide checkbox fieldset

    $('.section-check').change(function () {
        var $togglethis = $(this).data('toggle');
        $('.' + $togglethis).toggle(this.checked);
    }).change();
//Show / Hide Div on radio buttons 
    $('.section-radio').change(function () {
        var $togglethis = $(this).data('toggle');
        var $inputValue = $(this).val();
        if ($inputValue === 'yes') {
            $('.' + $togglethis).show();
            $('#msano').hide();
        }
        else if ($inputValue === 'msano') {
            $('.' + $togglethis).show();
            $('#msayes').hide();
        }
        else {
            $('.' + $togglethis).hide();
        }
    });
    $('.section-radio-msa').change(function () {
        var $inputValue = $(this).val();
        var $id = $(this).attr('id');
        if ($inputValue === 'yes') {
            $('#' + $id + '-yes').show();
            $('#' + $id + '-no').hide();
        }
        else if ($inputValue === 'no') {
            $('#' + $id + '-yes').hide();
            $('#' + $id + '-no').show();
        }
        else {
            $('.' + $togglethis).hide();
        }
    });
//Show / Hide Div on radio buttons 
    $('.upfront-radio').change(function () {
        var $togglethis = $(this).data('toggle');
        $('.' + $togglethis).slideToggle();
    });
//Show|Hide Div based on Text box value
    $('.section-textbox').change(function () {
        var $togglethis = $(this).data('toggle');
        var $inputValue = $(this).val();
        if ($inputValue != '') {
            $('.' + $togglethis).show();
        }
        else {
            $('.' + $togglethis).hide();
        }
    });
    $('.edit-link-inline').click(function () {
        var $operation_field = $(this).data('toggle');
        var $operation = $operation_field.substr(0, $operation_field.indexOf('-'));
        var $field = $operation_field.substr($operation_field.indexOf('-') + 1);
        console.log($operation_field);
        if ($operation === 'edit') {

            $('.readonly-' + $field).hide();
            $('.' + $operation_field).show();
        }
        else {
            $('.edit-' + $field).hide();
            $('.' + $operation_field).show();
        }
    });
    $('.edit-link, .cancel-btn').click(function () {
        var $togglethis = $(this).data('toggle');
        console.log($togglethis);
        $('.' + $togglethis).slideToggle();
    });


    $('.msa-app-details').click(function () {
        var $togglethis = $(this).data('toggle');
        $('.' + $togglethis).slideToggle();
    });
//
//    $("#app-types").change(function () {
//        $selValue = $(this).find(":selected").val();
//        if ($selValue === '1') {
//        $('#ea-mem-category').show();
//        }
//        else{
//        $('#ea-mem-category').hide();
//    }


    $("#continue-new-mra").click(function () {
        type = $('#type').text();
        if ($('.mra .radio-oc:checked').length > 0) {
            org = $('.mra .radio-oc:checked').val();
        }
        if ($('#ner:checked').length > 0) {
            value2 = '1';
        }
        else {
            value2 = '0';
        }

        if ($('#chartered:checked').length > 0) {
            value1 = '1';
        }
        else {
            value1 = '0';
        }
        var queryString = "?" + value1 + "&" + value2 + "=" + org + "/" + type;
        window.location.href = "mra-new-app.html" + queryString;
    });

    $("#next").click(function () {
        var value1 = $('#app-types').find(":selected").val();
        var queryString = "?type=" + value1;
        window.location.href = "dms-detail.html" + queryString;
    });
    $('.dd-choice input:radio').click(function () {
        if ($(this).val() === '0') {
            $(".credit-card-details").show();
            $(".bank-account-details").hide();
        } else if ($(this).val() === '1') {
            $(".credit-card-details").hide();
            $(".bank-account-details").show();
        }
    });
    function toggleIcon(e) {
        $(e.target)
                .prev('.panel-heading')
                .find(".more-less")
                .toggleClass('fa-minus fa-plus');
    }
    $('.panel-group').on('hidden.bs.collapse', toggleIcon);
    $('.panel-group').on('shown.bs.collapse', toggleIcon);
//
    $(".multi-dropdown dt a").on('click', function () {
        var myClass = $(this).attr("class");
        $(".multi-dropdown dd ul." + myClass).slideToggle('fast');
    });
    $(".multi-dropdown dd ul li a").on('click', function () {
        $(".multi-dropdown dd ul").hide();
    });
    function getSelectedValue(id) {
        return $("#" + id).find("dt a span.value").html();
    }

    $(document).bind('click', function (e) {
        var $clicked = $(e.target);
        if (!$clicked.parents().hasClass("multi-dropdown"))
            $(".multi-dropdown dd ul").hide();
    });
    $('.mutliSelect input[type="checkbox"]').on('click', function () {
        var title = $(this).closest('.mutliSelect').find('input[type="checkbox"]').val(),
                title = $(this).val() + ",";
        var myClass = $(this).offsetParent().prop('className');
        if ($(this).is(':checked')) {
            var html = '<span title="' + title + '">' + title + '</span>';
            $('.' + myClass + ' .multiSel').append(html);
            $(".hida").hide();
        } else {
            $('span[title="' + title + '"]').remove();
            var ret = $(".hida");
            $('.multi-dropdown dt a').append(ret);
        }
    });
    $('#tbl-payment-items tr .option1').change(function () {
        if ($(this).is(":checked")) {
            $(this).closest('tr').addClass('deleted');
            $(this).closest('td').find('.option2-wrapper').addClass('disabled');
        }
        else {
            $(this).closest('tr').removeClass('deleted');
            $(this).closest('td').find('.option2-wrapper').removeClass('disabled');
        }
    });
    $('#tbl-payment-items tr .option2').change(function () {
        if ($(this).is(":checked")) {
            $(this).closest('tr').addClass('payorg');
            $(this).closest('td').find('.option1-wrapper').addClass('disabled');
            $('#org-details').show();
            if ($('.disabled').length > 0) {
                $('#org-details').show();
            }

        }
        else {
            $(this).closest('tr').removeClass('payorg');
            $(this).closest('td').find('.option1-wrapper').removeClass('disabled');
            $('#org-details').hide();
            if ($('.disabled').length < 0) {
                $('#org-details').hide();
            }
        }
    });
    $('#tbl-payment-items-option4 .select-selected').click(function () {
        var optionSelected = $(this).text();
        if (optionSelected === "not renew") {
            $(this).closest('tr').addClass('deleted');
            $(this).closest('td').find('.option2-wrapper').addClass('disabled');
        }
        else {
            $(this).closest('tr').removeClass('deleted');
            $(this).closest('td').find('.option2-wrapper').removeClass('disabled');
        }

        if (optionSelected === "pay via Org.") {
            $(this).closest('tr').addClass('payorg');
            $(this).closest('td').find('.option2-wrapper').addClass('disabled');
            $('#org-sponsorship').modal({
                show: 'false'
            });
        }
        else {
            $(this).closest('tr').removeClass('payorg');
            $(this).closest('td').find('.option2-wrapper').removeClass('disabled');
        }

        if (optionSelected === "renew later") {
            $(this).closest('tr').addClass('paylater');
            $(this).closest('td').find('.option2-wrapper').addClass('disabled');
        }
        else {
            $(this).closest('tr').removeClass('paylater');
            $(this).closest('td').find('.option2-wrapper').removeClass('disabled');
        }
    });
});
$(document).ready(function () {
    $("#mobile-nav").mmenu({
// options
    }, {
// configuration
        offCanvas: {
            pageSelector: ".site-full-wrapper"
        }
    });
    //Home page Advertisement slider

// for every slide in carousel, copy the next slide's item in the slide.
// Do the same for the next, next item.
    $('.multi-item-carousel .item').each(function () {
        var next = $(this).next();
        if (!next.length) {
            next = $(this).siblings(':first');
        }
        next.children(':first-child').clone().appendTo($(this));
        if (next.next().length > 0) {
            next.next().children(':first-child').clone().appendTo($(this));
        } else {
            $(this).siblings(':first').children(':first-child').clone().appendTo($(this));
        }
    });

//var textarea_id = '#' + $(this).attr('id');
    $(".char-textarea").on("keyup",function(event){
  checkTextAreaMaxLength(this,event);
});

/*
Checks the MaxLength of the Textarea
-----------------------------------------------------
@prerequisite:	textBox = textarea dom element
				e = textarea event
                length = Max length of characters
*/
function checkTextAreaMaxLength(textBox, e) { 
    
    var maxLength = parseInt($(textBox).data("length"));
    
  
    if (!checkSpecialKeys(e)) { 
        if (textBox.value.length > maxLength - 1) textBox.value = textBox.value.substring(0, maxLength); 
   } 
  $(".char-count").html(maxLength - textBox.value.length);
    
    return true; 
} 
/*
Checks if the keyCode pressed is inside special chars
-------------------------------------------------------
@prerequisite:	e = e.keyCode object for the key pressed
*/
function checkSpecialKeys(e) { 
    if (e.keyCode != 8 && e.keyCode != 46 && e.keyCode != 37 && e.keyCode != 38 && e.keyCode != 39 && e.keyCode != 40) 
        return false; 
    else 
        return true; 
}


});


