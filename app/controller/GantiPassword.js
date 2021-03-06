Ext.require ('Earsip.view.GantiPasswordWin');

Ext.define ('Earsip.controller.GantiPassword', {
	extend	: 'Ext.app.Controller'
,	init	: function ()
	{
		this.control ({
			'gantipassword button[action=submit]': {
				click		: this.do_submit
			}
		});
	}

,	do_submit: function (button)
	{
		var win		= button.up ('window');
		var form	= win.down ('form').getForm ();

		if (! form.isValid ()) {
			Ext.msg.error ('Silahkan isi semua kolom yang kosong terlebih dahulu.');
			return;
		}
		form.submit ({
			scope	: this
		,	success	: function (form, action)
			{
				if (action.result.success == true) {
					Ext.msg.info (action.result.info);
					win.destroy();
				} else {
					Ext.msg.error (action.result.info);
				}
			}
		,	failure	: function (form, action)
			{
				Ext.msg.error (action.result.info);
			}
		});
	}
});
