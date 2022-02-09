$(document).ready(function() {
    // inputmask
    $('#mobile_number').inputmask();
    // dropify
    $('.dropify').dropify({
        messages: {
            'default': 'Drag the file here',
            'replace': 'click or drag the file here to replace the file',
            'remove': ' Remove file ',
            'error': ' Sorry, the file you uploaded is too large '
        }
    });
    // set the time out for message alert
    window.setTimeout(function() {
        $('.alert-danger, .alert-success', ).slideUp(500, function() {
            $(this).alert('close');
        });
    }, 10000);
    // select 2
    $('.select').select2();
    var base_url = $('#base_url').val();

    // amenity form add -------==-->
    $(document).on('click', '.btn_show_modal_amenity', function(e) {
        e.preventDefault();

        $.ajax({
            type: 'GET',
            url: base_url + '/' + 'admin/property/amenity/add',
            success: function(response) {
                if (response.modal) {
                    $('.modal_1').html(response.modal).show();
                    $('.select').select2();
                    $('#amenity').modal('show');
                }
            }
        });
    });
    // amenity group
    $(document).on('click', '.btn_show_modal_amenity_group', function(e) {
        e.preventDefault();
        $.ajax({
            type: 'GET',
            url: base_url + '/' + 'admin/property/amenity_group/add',
            success: function(response) {
                if (response.modal) {
                    $('.modal_1').html(response.modal).show();
                    $('#amenity_group').modal('show');
                }
            }
        });
    });
    // property state add
    $(document).on('click', '.btn_show_modal_add_ps', function(e) {
        e.preventDefault();
        $.ajax({
            type: 'GET',
            url: base_url + '/' + 'admin/property/property_status/modal_add_ps',
            success: function(response) {
                if (response.modal) {
                    $('.modal_1').html(response.modal).show();
                    $('.select').select2();
                    $('#ps_modal').modal('show');
                }
            }
        });
    });
    // change_avatar_manual
    $(document).on('click', '.change_avatar_manual', function(e) {
        e.preventDefault();
        var data_user_id = $(this).attr('data-user-id');
        $.ajax({
            type: 'GET',
            url: base_url + '/' + 'admin/user/avatar_form',
            data: {
                user_id: data_user_id
            },
            success: function(response) {
                if (response.modal) {
                    $('.modal_1').html(response.modal).show();
                    $('#avatar_modal').modal('show');
                }
            }
        });
    });
    // event select data table 
    // $(document).on('change', 'table thead tr th>.checkbox input', function(e) {
    //     var $parent_checked = $(this).closest('table');
    //     var $check_box = $(this);
    //     var childen_check = $parent_checked.find('tbody > tr .checkbox>input');
    //     if ($check_box.is(':checked')) {
    //         console.log('checked');
    //         childen_check.attr('checked', 'checked');
    //         childen_check.prop('checked', true);
    //         return;
    //     }
    //     if ($check_box.not(':checked')) {
    //         console.log('Not checked');
    //         childen_check.removeAttr('checked');
    //         childen_check.prop('checked', false);
    //         return;
    //     }
    // });

    // $(document).on('change', 'table tbody > tr .checkbox>input', function() {
    //     var $this = $(this);
    //     var $parent_checked = $this.closest('table');
    //     if ($this.is(':checked')) {
    //         console.log('checked');
    //         $this.attr('checked', 'checked');
    //         $('table thead tr th>.checkbox>input').prop('checked', true);
    //         return;
    //     }
    //     if ($this.not(':checked')) {
    //         console.log('Not checked');
    //         $this.removeAttr('checked');
    //         var count = $('table tbody > tr .checkbox>input[checked="checked"]').length;
    //         if (count <= 0) {
    //             $('table thead tr th>.checkbox>input').prop('checked', false);
    //         }
    //         console.log('couting checked ' + count);
    //         return;
    //     }
    // });
});