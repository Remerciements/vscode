/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import nls = require('vs/nls');
import { registerColor, editorBackground, contrastBorder } from 'vs/platform/theme/common/colorRegistry';
import { IDisposable, Disposable, dispose } from 'vs/base/common/lifecycle';
import { IThemeService, ITheme } from 'vs/platform/theme/common/themeService';
import { Color, RGBA } from 'vs/base/common/color';

// < --- Tabs --- >

export const TABS_CONTAINER_BACKGROUND = registerColor('tabsContainerBackground', {
	dark: '#252526',
	light: '#F3F3F3',
	hc: null
}, nls.localize('tabsContainerBackground', "Background color of the tabs container. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups."));

export const TAB_ACTIVE_BACKGROUND = registerColor('tabActiveBackground', {
	dark: editorBackground,
	light: editorBackground,
	hc: editorBackground
}, nls.localize('tabActiveBackground', "Active tab background color. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups."));

export const TAB_INACTIVE_BACKGROUND = registerColor('tabInactiveBackground', {
	dark: '#2D2D2D',
	light: '#ECECEC',
	hc: null
}, nls.localize('tabInactiveBackground', "Inactive tab background color. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups."));

export const TAB_BORDER = registerColor('tabBorder', {
	dark: '#252526',
	light: '#F3F3F3',
	hc: contrastBorder
}, nls.localize('tabBorder', "Border to separate tabs from each other. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups."));

export const TAB_ACTIVE_GROUP_ACTIVE_FOREGROUND = registerColor('tabActiveEditorGroupActiveForeground', {
	dark: Color.white,
	light: Color.fromRGBA(new RGBA(51, 51, 51)),
	hc: Color.white
}, nls.localize('tabActiveEditorGroupActiveForeground', "Active tab foreground color in an active group. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups."));

export const TAB_ACTIVE_GROUP_INACTIVE_FOREGROUND = registerColor('tabActiveEditorGroupInactiveForeground', {
	dark: Color.white.transparent(0.5),
	light: Color.fromRGBA(new RGBA(51, 51, 51)).transparent(0.7),
	hc: Color.white
}, nls.localize('tabActiveEditorGroupInactiveForeground', "Active tab foreground color in an inactive group. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups."));

export const TAB_INACTIVE_GROUP_ACTIVE_FOREGROUND = registerColor('tabInactiveEditorGroupActiveForeground', {
	dark: Color.white.transparent(0.5),
	light: Color.fromRGBA(new RGBA(51, 51, 51)).transparent(0.5),
	hc: Color.white
}, nls.localize('tabInactiveEditorGroupActiveForeground', "Inactive tab foreground color in an active group. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups."));

export const TAB_INACTIVE_GROUP_INACTIVE_FOREGROUND = registerColor('tabInactiveEditorGroupInactiveForeground', {
	dark: Color.fromRGBA(new RGBA(255, 255, 255)).transparent(0.5).transparent(0.5),
	light: Color.fromRGBA(new RGBA(51, 51, 51)).transparent(0.5).transparent(0.7),
	hc: Color.white
}, nls.localize('tabInactiveEditorGroupInactiveForeground', "Inactive tab foreground color in an inactive group. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups."));



// < --- Editors --- >

export const EDITOR_GROUP_BACKGROUND = registerColor('editorGroupBackground', {
	dark: '#2D2D2D',
	light: '#ECECEC',
	hc: null
}, nls.localize('editorGroupBackground', "Background color of an editor group. Editor groups are the containers of editors. The background color shows up when dragging editor groups around."));

export const EDITOR_GROUP_HEADER_BACKGROUND = registerColor('editorGroupHeaderBackground', {
	dark: editorBackground,
	light: editorBackground,
	hc: editorBackground
}, nls.localize('editorGroupHeaderBackground', "Background color of the editor group title header when tabs are disabled. Editor groups are the containers of editors."));

export const EDITOR_GROUP_BORDER_COLOR = registerColor('editorGroupBorder', {
	dark: '#444444',
	light: '#E7E7E7',
	hc: contrastBorder
}, nls.localize('editorGroupBorder', "Color to separate multiple editor groups from each other. Editor groups are the containers of editors."));

export const EDITOR_DRAG_AND_DROP_BACKGROUND = registerColor('editorDragAndDropBackground', {
	dark: Color.fromRGBA(new RGBA(83, 89, 93)).transparent(0.5),
	light: Color.fromRGBA(new RGBA(51, 153, 255)).transparent(0.18),
	hc: null
}, nls.localize('editorDragAndDropBackground', "Background color when dragging editors around."));

export const EDITOR_MASTER_DETAILS_BORDER = registerColor('editorMasterDetailsBorder', {
	dark: '#000000',
	light: '#DDDDDD',
	hc: null
}, nls.localize('editorMasterDetailsBorder', "Border color to separate the details from the master side for side by side editors. Examples include diff editors and the settings editor."));


// < --- Panels --- >

export const PANEL_BACKGROUND = registerColor('panelBackground', {
	dark: editorBackground,
	light: editorBackground,
	hc: editorBackground
}, nls.localize('panelBackground', "Panel background color. Panels are shown below the editor area and contain views like output and integrated terminal."));

export const PANEL_BORDER_COLOR = registerColor('panelBorder', {
	dark: Color.fromRGBA(new RGBA(128, 128, 128)).transparent(0.35),
	light: Color.fromRGBA(new RGBA(128, 128, 128)).transparent(0.35),
	hc: contrastBorder
}, nls.localize('panelBorder', "Panel border color on the top separating to the editor. Panels are shown below the editor area and contain views like output and integrated terminal."));

export const PANEL_ACTIVE_TITLE_COLOR = registerColor('panelActiveTitleForeground', {
	dark: '#E7E7E7',
	light: '#424242',
	hc: Color.white
}, nls.localize('panelActiveTitleForeground', "Title color for the active panel. Panels are shown below the editor area and contain views like output and integrated terminal."));

export const PANEL_INACTIVE_TITLE_COLOR = registerColor('panelInactiveTitleForeground', {
	dark: Color.fromRGBA(new RGBA(231, 231, 231)).transparent(0.5),
	light: Color.fromRGBA(new RGBA(66, 66, 66)).transparent(0.75),
	hc: Color.white
}, nls.localize('panelInactiveTitleForeground', "Title color for the inactive panel. Panels are shown below the editor area and contain views like output and integrated terminal."));

export const PANEL_ACTIVE_TITLE_BORDER = registerColor('panelActiveTitleBorder', {
	dark: PANEL_BORDER_COLOR,
	light: PANEL_BORDER_COLOR,
	hc: contrastBorder
}, nls.localize('panelActiveTitleBorder', "Border color for the active panel title. Panels are shown below the editor area and contain views like output and integrated terminal."));



// < --- Status --- >

export const STATUS_BAR_FOREGROUND = registerColor('statusBarForeground', {
	dark: '#FFFFFF',
	light: '#FFFFFF',
	hc: '#FFFFFF'
}, nls.localize('statusBarForeground', "Status bar foreground color. The status bar is shown in the bottom of the window."));

export const STATUS_BAR_BACKGROUND = registerColor('statusBarBackground', {
	dark: '#007ACC',
	light: '#007ACC',
	hc: null
}, nls.localize('statusBarBackground', "Standard status bar background color. The status bar is shown in the bottom of the window."));

export const STATUS_BAR_NO_FOLDER_BACKGROUND = registerColor('statusBarNoFolderBackground', {
	dark: '#68217A',
	light: '#68217A',
	hc: null
}, nls.localize('statusBarNoFolderBackground', "Status bar background color when no folder is opened. The status bar is shown in the bottom of the window."));

export const STATUS_BAR_ITEM_ACTIVE_BACKGROUND = registerColor('statusBarItemActiveBackground', {
	dark: Color.fromRGBA(new RGBA(255, 255, 255)).transparent(0.18),
	light: Color.fromRGBA(new RGBA(255, 255, 255)).transparent(0.18),
	hc: Color.fromRGBA(new RGBA(255, 255, 255)).transparent(0.18)
}, nls.localize('statusBarItemActiveBackground', "Status bar item background color when clicking. The status bar is shown in the bottom of the window."));

export const STATUS_BAR_ITEM_HOVER_BACKGROUND = registerColor('statusBarItemHoverBackground', {
	dark: Color.fromRGBA(new RGBA(255, 255, 255)).transparent(0.12),
	light: Color.fromRGBA(new RGBA(255, 255, 255)).transparent(0.12),
	hc: Color.fromRGBA(new RGBA(255, 255, 255)).transparent(0.12)
}, nls.localize('statusBarItemHoverBackground', "Status bar item background color when hovering. The status bar is shown in the bottom of the window."));

export const STATUS_BAR_PROMINENT_ITEM_BACKGROUND = registerColor('statusBarProminentItemBackground', {
	dark: '#388A34',
	light: '#388A34',
	hc: '#3883A4'
}, nls.localize('statusBarProminentItemBackground', "Status bar prominent items background color. Prominent items stand out from other status bar entries to indicate importance. The status bar is shown in the bottom of the window."));

export const STATUS_BAR_PROMINENT_ITEM_HOVER_BACKGROUND = registerColor('statusBarProminentItemHoverBackground', {
	dark: '#369432',
	light: '#369432',
	hc: '#369432'
}, nls.localize('statusBarProminentItemHoverBackground', "Status bar prominent items background color when hovering. Prominent items stand out from other status bar entries to indicate importance. The status bar is shown in the bottom of the window."));



// < --- Activity Bar --- >

export const ACTIVITY_BAR_BACKGROUND = registerColor('activityBarBackground', {
	dark: '#333333',
	light: '#2C2C2C',
	hc: '#000000'
}, nls.localize('activityBarBackground', "Activity bar background color. The activity bar is showing on the far left or right and allows to switch between views of the side bar."));

export const ACTIVITY_BAR_FOREGROUND = registerColor('activityBarForeground', {
	dark: Color.white,
	light: Color.white,
	hc: Color.white
}, nls.localize('activityBarForeground', "Activity bar foreground color (e.g. used for the icons). The activity bar is showing on the far left or right and allows to switch between views of the side bar."));

export const ACTIVITY_BAR_DRAG_AND_DROP_BACKGROUND = registerColor('activityBarDragAndDropBackground', {
	dark: Color.fromRGBA(new RGBA(255, 255, 255)).transparent(0.12),
	light: Color.fromRGBA(new RGBA(255, 255, 255)).transparent(0.12),
	hc: Color.fromRGBA(new RGBA(255, 255, 255)).transparent(0.12),
}, nls.localize('activityBarDragAndDropBackground', "Drag and drop feedback color for the activity bar items. The activity bar is showing on the far left or right and allows to switch between views of the side bar."));

export const ACTIVITY_BAR_BADGE_BACKGROUND = registerColor('activityBarBadgeBackground', {
	dark: '#007ACC',
	light: '#007ACC',
	hc: '#000000'
}, nls.localize('activityBarBadgeBackground', "Activity notification badge background color. The activity bar is showing on the far left or right and allows to switch between views of the side bar."));

export const ACTIVITY_BAR_BADGE_FOREGROUND = registerColor('activityBarBadgeForeground', {
	dark: Color.white,
	light: Color.white,
	hc: Color.white
}, nls.localize('activityBarBadgeForeground', "Activity notification badge foreground color. The activity bar is showing on the far left or right and allows to switch between views of the side bar."));



// < --- Side Bar --- >

export const SIDE_BAR_BACKGROUND = registerColor('sideBarBackground', {
	dark: '#252526',
	light: '#F3F3F3',
	hc: '#000000'
}, nls.localize('sideBarBackground', "Side bar background color. The side bar is the container for views like explorer and search."));

export const SIDE_BAR_TITLE_FOREGROUND = registerColor('sideBarTitleForeground', {
	dark: '#BBBBBB',
	light: '#6f6f6f',
	hc: '#FFFFFF'
}, nls.localize('sideBarTitleForeground', "Side bar title foreground color. The side bar is the container for views like explorer and search."));

export const SIDE_BAR_SECTION_HEADER_BACKGROUND = registerColor('sideBarSectionHeaderBackground', {
	dark: Color.fromHex('#808080').transparent(0.2),
	light: Color.fromHex('#808080').transparent(0.2),
	hc: null
}, nls.localize('sideBarSectionHeaderBackground', "Side bar section header background color. The side bar is the container for views like explorer and search."));



// < --- Title Bar --- >

export const TITLE_BAR_ACTIVE_FOREGROUND = registerColor('titleBarActiveForeground', {
	dark: '#CCCCCC',
	light: '#333333',
	hc: '#FFFFFF'
}, nls.localize('titleBarActiveForeground', "Title bar foreground when the window is active. Note that this color is currently only supported on macOS."));

export const TITLE_BAR_INACTIVE_FOREGROUND = registerColor('titleBarInactiveForeground', {
	dark: Color.fromRGBA(new RGBA(204, 204, 204)).transparent(0.6),
	light: Color.fromRGBA(new RGBA(51, 51, 51)).transparent(0.6),
	hc: null
}, nls.localize('titleBarInactiveForeground', "Title bar foreground when the window is inactive. Note that this color is currently only supported on macOS."));

export const TITLE_BAR_ACTIVE_BACKGROUND = registerColor('titleBarActiveBackground', {
	dark: '#3C3C3C',
	light: '#DDDDDD',
	hc: '#000000'
}, nls.localize('titleBarActiveBackground', "Title bar background when the window is active. Note that this color is currently only supported on macOS."));

export const TITLE_BAR_INACTIVE_BACKGROUND = registerColor('titleBarInactiveBackground', {
	dark: Color.fromRGBA(new RGBA(60, 60, 60)).transparent(0.6),
	light: Color.fromRGBA(new RGBA(221, 221, 221)).transparent(0.6),
	hc: null
}, nls.localize('titleBarInactiveBackground', "Title bar background when the window is inactive. Note that this color is currently only supported on macOS."));

// < --- Notifications --- >

export const NOTIFICATIONS_FOREGROUND = registerColor('notificationsForeground', {
	dark: '#EEEEEE',
	light: '#EEEEEE',
	hc: '#FFFFFF'
}, nls.localize('notificationsForeground', "Notifications foreground color. Notifications slide in from the top of the window."));

export const NOTIFICATIONS_BACKGROUND = registerColor('notificationsBackground', {
	dark: '#333333',
	light: '#2C2C2C',
	hc: '#000000'
}, nls.localize('notificationsBackground', "Notifications background color. Notifications slide in from the top of the window."));

/**
 * Base class for all themable workbench components.
 */
export class Themable extends Disposable {
	private _toUnbind: IDisposable[];
	private theme: ITheme;

	constructor(
		protected themeService: IThemeService
	) {
		super();

		this._toUnbind = [];
		this.theme = themeService.getTheme();

		// Hook up to theme changes
		this._toUnbind.push(this.themeService.onThemeChange(theme => this.onThemeChange(theme)));
	}

	protected get toUnbind() {
		return this._toUnbind;
	}

	protected onThemeChange(theme: ITheme): void {
		this.theme = theme;

		this.updateStyles();
	}

	protected updateStyles(): void {
		// Subclasses to override
	}

	protected getColor(id: string): string {
		const color = this.theme.getColor(id);

		return color ? color.toString() : null;
	}

	public dispose(): void {
		this._toUnbind = dispose(this._toUnbind);

		super.dispose();
	}
}
