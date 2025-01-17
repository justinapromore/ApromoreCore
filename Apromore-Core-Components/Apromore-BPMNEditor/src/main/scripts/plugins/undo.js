/**
 * Copyright (c) 2008
 * Willi Tscheschner
 *
 * Permission is hereby granted, free of charge, to any person obtaining a
 * copy of this software and associated documentation files (the "Software"),
 * to deal in the Software without restriction, including without limitation
 * the rights to use, copy, modify, merge, publish, distribute, sublicense,
 * and/or sell copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
 * DEALINGS IN THE SOFTWARE.
 **/


/**
 * This plugin offer the functionality of undo/redo
 * Therewith the command pattern is used.
 *
 * A Plugin which want that the changes could get undo/redo has
 * to implement a command-class (which implements the method .execute(), .rollback()).
 * Those instance of class must be execute thru the facade.executeCommands(). If so,
 * those command get stored here in the undo/redo stack and can get reset/restore.
 *
 **/

if (!Apromore.Plugins)
    Apromore.Plugins = new Object();

Apromore.Plugins.Undo = Clazz.extend({

	// Defines the facade
    facade		: undefined,

	// Defines the undo/redo Stack
	undoStack	: [],
	redoStack	: [],

	// Constructor
    construct: function(facade){

        this.facade = facade;

		// Offers the functionality of undo
        this.facade.offer({
			name			: window.Apromore.I18N.Undo.undo,
			description		: window.Apromore.I18N.Undo.undoDesc,
			icon			: Apromore.PATH + "images/ap/undo.svg",
			btnId           : 'ap-id-editor-undo-btn',
			keyCodes: [{
					metaKeys: [Apromore.CONFIG.META_KEY_META_CTRL],
					keyCode: 90,
					keyAction: Apromore.CONFIG.KEY_ACTION_DOWN
				}
		 	],
			functionality	: this.doUndo.bind(this),
			group			: window.Apromore.I18N.Undo.group,
			isEnabled		: function(){ return true }.bind(this),
			index			: 0
		});

		// Offers the functionality of redo
        this.facade.offer({
			name			: window.Apromore.I18N.Undo.redo,
			description		: window.Apromore.I18N.Undo.redoDesc,
			icon			: Apromore.PATH + "images/ap/redo.svg",
			btnId           : 'ap-id-editor-redo-btn',
			keyCodes: [{
					metaKeys: [Apromore.CONFIG.META_KEY_META_CTRL],
					keyCode: 89,
					keyAction: Apromore.CONFIG.KEY_ACTION_DOWN
				}
		 	],
			functionality	: this.doRedo.bind(this),
			group			: window.Apromore.I18N.Undo.group,
			isEnabled		: function(){ return true}.bind(this),
			index			: 1
		});

		// Register on event for executing commands --> store all commands in a stack
		//this.facade.registerOnEvent(Apromore.CONFIG.EVENT_EXECUTE_COMMANDS, this.handleExecuteCommands.bind(this) );

	},

	/**
	 * Stores all executed commands in a stack
	 *
	 * @param {Object} evt
	 */
	handleExecuteCommands: function( evt ){

	},

	/**
	 * Does the undo
	 *
	 */
	doUndo: function(){
        this.facade.getEditor().undo();
	},

	/**
	 * Does the redo
	 *
	 */
	doRedo: function(){
        this.facade.getEditor().redo();
	}

});
