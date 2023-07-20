/**
 * Base nav item, displayed as text
 */
export interface NavItem {
    text: string;
    ariaLabel?: string;
}
/**
 * Base nav group, has nav items children
 */
export interface NavGroup<T> extends NavItem {
    children: T[];
}
/**
 * Props for `<AutoLink>`
 */
export interface NavLink extends NavItem {
    link: string;
    rel?: string;
    target?: string;
    activeMatch?: string;
}
/**
 * Navbar types
 */
export declare type NavbarItem = NavLink;
export declare type NavbarGroup = NavGroup<NavbarGroup | NavbarItem | string>;
export declare type NavbarConfig = (NavbarItem | NavbarGroup | string)[];
export declare type ResolvedNavbarItem = NavbarItem | NavGroup<ResolvedNavbarItem>;
/**
 * Sidebar types
 */
export declare type SidebarItem = NavItem & Partial<NavLink>;
export declare type SidebarGroup = SidebarItem & NavGroup<SidebarItem | SidebarGroup | string>;
export declare type SidebarGroupCollapsible = SidebarGroup & {
    collapsible?: boolean;
};
export declare type SidebarConfigArray = (SidebarItem | SidebarGroupCollapsible | string)[];
export declare type SidebarConfigObject = Record<string, SidebarConfigArray>;
export declare type SidebarConfig = SidebarConfigArray | SidebarConfigObject;
export declare type ResolvedSidebarItem = SidebarItem & Partial<NavGroup<ResolvedSidebarItem>> & {
    collapsible?: boolean;
};
