(function( $ ) {
	'use strict';
	//var loader = '<div class="dpfl-loader"><div class="lds-ripple"><div></div><div></div></div></div>';
	
	// Note to Admin
	jQuery(document).on('click', '.listing_admin_notice_modal .action-button', function (e) {
        e.preventDefault();      
        var _this = jQuery('form.note_to_admin_listing_form');
		
        jQuery('#listing_action_modal .modal-body').append(loader);
        var profileForm = _this.serialize();
		//console.log(profileForm);
        jQuery.ajax({
            type: "POST",
            url: dpfl_custom_vars.ajaxurl,
            data: profileForm + '&action=dpfl_AdminNote',
            dataType: "json",
            success: function (response) {
               jQuery('#listing_action_modal .modal-body').find(loader_wrapper).remove();
                if (response.type == 'success') {
					jQuery('#listing_action_modal .modal-body').html('<div class="alert alert-success alert-dismissible">'+response.message+'<a href="#" class="close" data-bs-dismiss="alert" aria-label="close">&times;</a></div>');									
					jQuery('#listing_action_modal .modal-footer').find('.action-button').remove();
				} else {			
					jQuery('#listing_action_modal .modal-body').html('<div class="alert alert-danger alert-dismissible">'+response.message+'<a href="#" class="close" data-bs-dismiss="alert" aria-label="close">&times;</a></div>');  
                }
				jQuery('#listing_action_modal').removeClass('listing_admin_notice_modal');
            }
        });
    });
	
	// Delete Listing
	jQuery(document).on('click', '.listing_delete_modal .action-button', function (e) {
        e.preventDefault();      
        var _this = jQuery('form.delete_listing_form');
        jQuery('#listing_action_modal .modal-body').append(loader);
        var profileForm = _this.serialize();
        jQuery.ajax({
            type: "POST",
            url: dpfl_custom_vars.ajaxurl,
            data: profileForm + '&action=dpfl_deleteListing',
            dataType: "json",
            success: function (response) {
               jQuery('#listing_action_modal .modal-body').find(loader_wrapper).remove();
                if (response.type == 'success') {
					jQuery('#listing_action_modal .modal-body').html('<div class="alert alert-success alert-dismissible">'+response.message+'<a href="#" class="close" data-bs-dismiss="alert" aria-label="close">&times;</a></div>');									
					jQuery('#listing_action_modal .modal-footer').find('.action-button').remove();
				} else {			
					jQuery('#listing_action_modal .modal-body').html('<div class="alert alert-danger alert-dismissible">'+response.message+'<a href="#" class="close" data-bs-dismiss="alert" aria-label="close">&times;</a></div>');  
                }
				jQuery('#listing_action_modal').removeClass('listing_delete_modal');
            }
        });
    });
	
	// BumpUp Listing
	jQuery(document).on('click', '.listing_bumpup_modal .action-button', function (e) {
        e.preventDefault();      
        var _this = jQuery('form.bumpup_listing_form');
        jQuery('#listing_action_modal .modal-body').append(loader);
        var profileForm = _this.serialize();
        jQuery.ajax({
            type: "POST",
            url: dpfl_custom_vars.ajaxurl,
            data: profileForm + '&action=dpfl_bumpUpListing',
            dataType: "json",
            success: function (response) {
               jQuery('#listing_action_modal .modal-body').find(loader_wrapper).remove();
                if (response.type == 'success') {
					jQuery('#listing_action_modal .modal-body').html('<div class="alert alert-success alert-dismissible">'+response.message+'<a href="#" class="close" data-bs-dismiss="alert" aria-label="close">&times;</a></div>');									
					jQuery('#listing_action_modal .modal-footer').find('.action-button').remove();
				} else {			
					jQuery('#listing_action_modal .modal-body').html('<div class="alert alert-danger alert-dismissible">'+response.message+'<a href="#" class="close" data-bs-dismiss="alert" aria-label="close">&times;</a></div>');  
                }
				jQuery('#listing_action_modal').removeClass('listing_bumpup_modal');
            }
        });
    });
	
	// Renew Listing
	jQuery(document).on('click', '.listing_renew_modal .action-button', function (e) {
        e.preventDefault();      
        var _this = jQuery('form.renew_listing_form');
        jQuery('#listing_action_modal .modal-body').append(loader);
        var profileForm = _this.serialize();
        jQuery.ajax({
            type: "POST",
            url: dpfl_custom_vars.ajaxurl,
            data: profileForm + '&action=dpfl_renewListing',
            dataType: "json",
            success: function (response) {
               jQuery('#listing_action_modal .modal-body').find(loader_wrapper).remove();
                if (response.type == 'success') {
					jQuery('#listing_action_modal .modal-body').html('<div class="alert alert-success alert-dismissible">'+response.message+'<a href="#" class="close" data-bs-dismiss="alert" aria-label="close">&times;</a></div>');									
					jQuery('#listing_action_modal .modal-footer').find('.action-button').remove();
				} else {			
					jQuery('#listing_action_modal .modal-body').html('<div class="alert alert-danger alert-dismissible">'+response.message+'<a href="#" class="close" data-bs-dismiss="alert" aria-label="close">&times;</a></div>');  
                }
            }
        });
    });
	
	// Upgrade Listing
	jQuery(document).on('click', '.listing_change_package_modal .action-button', function (e) {
        e.preventDefault();      
        var _this = jQuery(this);
        jQuery('#listing_action_modal .modal-body').append(loader);
        var profileForm = jQuery('form.upgrade_listing_wrapper').serialize();
        jQuery.ajax({
            type: "POST",
            url: dpfl_custom_vars.ajaxurl,
            data: profileForm + '&action=dpfl_upgradeListing',
            dataType: "json",
            success: function (response) {
				jQuery('#listing_action_modal .modal-body').find(loader_wrapper).remove();
                if (response.type == 'success') {
					jQuery('#listing_action_modal .modal-body').html('<div class="alert alert-success alert-dismissible">'+response.message+'<a href="#" class="close" data-bs-dismiss="alert" aria-label="close">&times;</a></div>');									
					jQuery('#listing_action_modal .modal-footer').find('.action-button').remove();
				} else {			
					jQuery('#listing_action_modal .modal-body').html('<div class="alert alert-danger alert-dismissible">'+response.message+'<a href="#" class="close" data-bs-dismiss="alert" aria-label="close">&times;</a></div>');  
                }
				jQuery('#listing_action_modal').removeClass('listing_change_package_modal');
            }
        });
    });

})( jQuery );

jQuery(document).ready(function($) {
	//var loader = '<div class="dpfl-loader"><div class="lds-ripple"><div></div><div></div></div></div>';
	// Change Listing Status
	jQuery(document).on('click', '.listing_setting_action_link', function (e) {
        e.preventDefault();  
		jQuery('.modal .modal-body').append(loader);
        var _this = jQuery(this);
		
		var modal_class = _this.attr('data-modal-class');
		var modal_title = _this.attr('data-modal-title');
		var modal_button = _this.attr('data-modal-button-text');
		var listing_id = _this.attr('data-listing-id');
        jQuery('#listing_action_modal').find('.modal-title').text(modal_title);
		//jQuery('#listing_action_modal').find('.action-button').text(modal_button);
		jQuery('#listing_action_modal').addClass(modal_class);
        
		if(modal_class == 'listing_performance_modal'){
			var data = {'action': 'directorypress_listing_peformance', 'listing_id': listing_id, 'nonce': dpfl_custom_vars.nonce};
			var action_btn = false;
		}else if(modal_class == 'listing_change_package_modal'){
			var data = {'action': 'dpfl_upgradeListing_html', 'listing_id': listing_id, 'nonce': dpfl_custom_vars.nonce};
			var action_btn = true;
		}else if(modal_class == 'listing_bumpup_modal'){
			var data = {'action': 'dpfl_bumpUpListing_html', 'listing_id': listing_id, 'nonce': dpfl_custom_vars.nonce};
			var action_btn = true;
		}else if(modal_class == 'listing_renew_modal'){
			var data = {'action': 'dpfl_renewListing_html', 'listing_id': listing_id, 'nonce': dpfl_custom_vars.nonce};
			var action_btn = true;
		}else if(modal_class == 'listing_delete_modal'){
			var data = {'action': 'dpfl_deleteListing_html', 'listing_id': listing_id, 'nonce': dpfl_custom_vars.nonce};
			var action_btn = true;
		}else if(modal_class == 'change_listing_status_modal'){
			var data = {'action': 'dpfl_listingStatusChange_triger', 'listing_id': listing_id, 'nonce': dpfl_custom_vars.nonce};
			var action_btn = true;
		}else if(modal_class == 'listing_admin_notice_modal'){
			var data = {'action': 'dpfl_AdminNote_html', 'listing_id': listing_id, 'nonce': dpfl_custom_vars.nonce};
			var action_btn = true;
		}else if(modal_class == 'listing_translation_modal'){
			var data = {'action': 'dpfl_listingtrans_html', 'listing_id': listing_id, 'nonce': dpfl_custom_vars.nonce};
			var action_btn = false;
		}
		
		if(action_btn){
			jQuery('#listing_action_modal .modal-footer') .prepend('<button type="button" class="dpfl-dashboad-button small action-button">'+modal_button+'</button>');
		}
		//console.log(listing_id);
        jQuery.ajax({
            type: "POST",
            url: dpfl_custom_vars.ajaxurl,
			data: data,
            dataType: "html",
            success: function(response) {
				
				jQuery('.modal .modal-body').find(loader_wrapper).remove();
               
				jQuery('#listing_action_modal .modal-body').html(response);	
				if(modal_class == 'listing_performance_modal'){
					jQuery('#listing_action_modal').removeClass(modal_class);
				}
				jQuery(document).on('hide.bs.modal', '#listing_action_modal', function () {
					jQuery('.modal .modal-body').html('');
					jQuery('.modal .modal-footer').find('.action-button').remove();
					location.reload();
				});
				
				//listing_data_refresh();
            }
        });
    });
	jQuery(document).on('click', '.change_listing_status_modal button', function (e) {
        e.preventDefault();      
        var _this = jQuery('.change_listing_status_modal #listing_change_status');
        jQuery('#listing_action_modal .modal-body').append(loader);
        var listng_id = _this.attr('data-listing-id');
        jQuery.ajax({
            type: "POST",
            url: dpfl_custom_vars.ajaxurl,
			data: {'action': 'dpfl_listingStatusChange', 'listing_id': listng_id, 'nonce': dpfl_custom_vars.nonce},
            dataType: "json",
			cache: false,
            success: function(response) {
				jQuery('.modal .modal-body').find(loader_wrapper).remove();
				if (response.type == 'success') {
					jQuery('#listing_action_modal .modal-body').html('<div class="alert alert-success alert-dismissible">'+response.message+'<a href="#" class="close" data-bs-dismiss="alert" aria-label="close">&times;</a></div>');									
					jQuery('#listing_action_modal .modal-footer').find('.action-button').remove();
				} else {			
					jQuery('#listing_action_modal .modal-body').html('<div class="alert alert-danger alert-dismissible">'+response.message+'<a href="#" class="close" data-bs-dismiss="alert" aria-label="close">&times;</a></div>');  
                }
				jQuery('#listing_action_modal').removeClass('change_listing_status_modal');
            }
        });
    });
	jQuery(document).on('click', '.submit-listing-button.new', function (e) {
        e.preventDefault(); 
		var button_loader = '<i class="submit-button-spinner fas fa-spinner fa-spin"></i>';
		jQuery('.submit').append(button_loader);
        var _this = jQuery(this);
		if ($('.tmce-active').length) {
			tinyMCE.triggerSave();
		}
		var data = new FormData($('.submit-listing-form-wrapper form')[0]); //jQuery('.submit-listing-form-wrapper form').serialize();
		data.append("action", "dpfl_new_listng_submit");
        jQuery.ajax({
            type: "POST",
            url: dpfl_custom_vars.ajaxurl,
			//data: {'action': 'dpfl_new_listng_submit'},
			data: data, //Form + '&action=dpfl_new_listng_submit',
			processData: false,
			contentType: false,
			cache: false,
            dataType: "json",
            success: function(response) {
				jQuery('.submit-listing-form-wrapper .submit').find('.submit-button-spinner').remove();
				if (response.type == 'success') {
					window.location.href = response.redirect_to;
				}else{
					jQuery('.directorypress-notifications').html(response.message);
				}
            }
        });
    });
	
	jQuery(document).on('click', '.submit-listing-button.edit', function (e) {
        e.preventDefault(); 
		var button_loader = '<i class="submit-button-spinner fas fa-spinner fa-spin"></i>';
		jQuery('.submit').append(button_loader);
        var _this = jQuery(this);
		
		if ($('.tmce-active').length) {
			tinyMCE.triggerSave();
		}
		//var Form = jQuery('.submit-listing-form-wrapper form').serialize();
		var data = new FormData(jQuery('.submit-listing-form-wrapper form')[0]);
       data.append("action", "dpfl_updatListingData");
	   jQuery.ajax({
            type: "POST",
            url: dpfl_custom_vars.ajaxurl,
			data: data,
			processData: false,
			contentType: false,
			cache: false,
            dataType: "json",
            success: function(response) {
				jQuery('.submit-listing-form-wrapper .submit').find('.submit-button-spinner').remove();
				if (response.type == 'success') {
					//jQuery('.directorypress-notifications').html(response.message);
					window.location.href = response.redirect_to;
				}else{
					jQuery('.directorypress-notifications').html(response.message);
				}
            }
        });
    });
	
	window.listing_data_refresh = function () {
		jQuery(document).on('hide.bs.modal', '#listing_action_modal', function () {
			jQuery('#panel-content-wrapper').html(loader);
			jQuery.ajax({
				type: "POST",
				url: directorypress_js_instance.ajaxurl,
				data: { 'action': 'dpfl_updatListingData'},
				dataType: "html",
				cache: false,
				success: function (response) {
					jQuery('#panel-content-wrapper').find(loader_wrapper).remove();
					jQuery('panel-content-wrapper').html(response);
					
				}
			});
		});
		 
	};
	window.directorypress_tos_checkbox = function () {
		jQuery(document).on('click', '.directorypress-tos input', function () {
			if (jQuery(this).val() == "0") {
				  jQuery(this).val("1");
			}else {
			  jQuery(this).val("0");
		   }
		});
		 
	};
	directorypress_tos_checkbox();
});