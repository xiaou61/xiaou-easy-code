import type { SFCWithInstall } from 'element-plus/es/utils';
declare const _CascaderPanel: SFCWithInstall<import("vue").DefineComponent<{
    border: {
        type: BooleanConstructor;
        default: boolean;
    };
    renderLabel: import("vue").PropType<import("./src/node").RenderLabel>;
    modelValue: import("vue").PropType<import("./src/node").CascaderValue>;
    options: {
        type: import("vue").PropType<import("./src/node").CascaderOption[]>;
        default: () => import("./src/node").CascaderOption[];
    };
    props: {
        type: import("vue").PropType<import("./src/node").CascaderProps>;
        default: () => import("./src/node").CascaderProps;
    };
}, {
    ns: {
        namespace: import("vue").Ref<string>;
        b: (blockSuffix?: string) => string;
        e: (element?: string | undefined) => string;
        m: (modifier?: string | undefined) => string;
        be: (blockSuffix?: string | undefined, element?: string | undefined) => string;
        em: (element?: string | undefined, modifier?: string | undefined) => string;
        bm: (blockSuffix?: string | undefined, modifier?: string | undefined) => string;
        bem: (blockSuffix?: string | undefined, element?: string | undefined, modifier?: string | undefined) => string;
        is: {
            (name: string, state: boolean | undefined): string;
            (name: string): string;
        };
        cssVar: (object: Record<string, string>) => Record<string, string>;
        cssVarName: (name: string) => string;
        cssVarBlock: (object: Record<string, string>) => Record<string, string>;
        cssVarBlockName: (name: string) => string;
    };
    menuList: import("vue").Ref<any[]>;
    menus: import("vue").Ref<{
        readonly uid: number;
        readonly level: number;
        readonly value: import("./src/node").CascaderNodeValue;
        readonly label: string;
        readonly pathNodes: any[];
        readonly pathValues: import("./src/node").CascaderNodeValue[];
        readonly pathLabels: string[];
        childrenData: {
            [x: string]: unknown;
            label?: string | undefined;
            value?: import("./src/node").CascaderNodeValue | undefined;
            children?: any[] | undefined;
            disabled?: boolean | undefined;
            leaf?: boolean | undefined;
        }[] | undefined;
        children: any[];
        text: string;
        loaded: boolean;
        checked: boolean;
        indeterminate: boolean;
        loading: boolean;
        readonly data: {
            [x: string]: unknown;
            label?: string | undefined;
            value?: import("./src/node").CascaderNodeValue | undefined;
            children?: any[] | undefined;
            disabled?: boolean | undefined;
            leaf?: boolean | undefined;
        } | null;
        readonly config: {
            expandTrigger: import("./src/node").ExpandTrigger;
            multiple: boolean;
            checkStrictly: boolean;
            emitPath: boolean;
            lazy: boolean;
            lazyLoad: import("./src/node").LazyLoad;
            value: string;
            label: string;
            children: string;
            disabled: string | import("./src/node").isDisabled;
            leaf: string | import("./src/node").isLeaf;
            hoverThreshold: number;
        };
        readonly parent?: any | undefined;
        readonly root: boolean;
        readonly isDisabled: boolean;
        readonly isLeaf: boolean;
        readonly valueByOption: import("./src/node").CascaderNodeValue | import("./src/node").CascaderNodeValue[];
        appendChild: (childData: import("./src/node").CascaderOption) => import("./src/node").default;
        calcText: (allLevels: boolean, separator: string) => string;
        broadcast: (event: string, ...args: unknown[]) => void;
        emit: (event: string, ...args: unknown[]) => void;
        onParentCheck: (checked: boolean) => void;
        onChildCheck: () => void;
        setCheckState: (checked: boolean) => void;
        doCheck: (checked: boolean) => void;
    }[][]>;
    checkedNodes: import("vue").Ref<{
        readonly uid: number;
        readonly level: number;
        readonly value: import("./src/node").CascaderNodeValue;
        readonly label: string;
        readonly pathNodes: any[];
        readonly pathValues: import("./src/node").CascaderNodeValue[];
        readonly pathLabels: string[];
        childrenData: {
            [x: string]: unknown;
            label?: string | undefined;
            value?: import("./src/node").CascaderNodeValue | undefined;
            children?: any[] | undefined;
            disabled?: boolean | undefined;
            leaf?: boolean | undefined;
        }[] | undefined;
        children: any[];
        text: string;
        loaded: boolean;
        checked: boolean;
        indeterminate: boolean;
        loading: boolean;
        readonly data: {
            [x: string]: unknown;
            label?: string | undefined;
            value?: import("./src/node").CascaderNodeValue | undefined;
            children?: any[] | undefined;
            disabled?: boolean | undefined;
            leaf?: boolean | undefined;
        } | null;
        readonly config: {
            expandTrigger: import("./src/node").ExpandTrigger;
            multiple: boolean;
            checkStrictly: boolean;
            emitPath: boolean;
            lazy: boolean;
            lazyLoad: import("./src/node").LazyLoad;
            value: string;
            label: string;
            children: string;
            disabled: string | import("./src/node").isDisabled;
            leaf: string | import("./src/node").isLeaf;
            hoverThreshold: number;
        };
        readonly parent?: any | undefined;
        readonly root: boolean;
        readonly isDisabled: boolean;
        readonly isLeaf: boolean;
        readonly valueByOption: import("./src/node").CascaderNodeValue | import("./src/node").CascaderNodeValue[];
        appendChild: (childData: import("./src/node").CascaderOption) => import("./src/node").default;
        calcText: (allLevels: boolean, separator: string) => string;
        broadcast: (event: string, ...args: unknown[]) => void;
        emit: (event: string, ...args: unknown[]) => void;
        onParentCheck: (checked: boolean) => void;
        onChildCheck: () => void;
        setCheckState: (checked: boolean) => void;
        doCheck: (checked: boolean) => void;
    }[]>;
    handleKeyDown: (e: KeyboardEvent) => void;
    handleCheckChange: (node: import("./src/node").default, checked: boolean, emitClose?: boolean | undefined) => void;
    getFlattedNodes: (leafOnly: boolean) => import("./src/node").default[] | undefined;
    getCheckedNodes: (leafOnly: boolean) => import("./src/node").default[] | undefined;
    clearCheckedNodes: () => void;
    calculateCheckedValue: () => void;
    scrollToExpandingNode: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "change" | "close" | "expand-change")[], "update:modelValue" | "change" | "close" | "expand-change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    border: {
        type: BooleanConstructor;
        default: boolean;
    };
    renderLabel: import("vue").PropType<import("./src/node").RenderLabel>;
    modelValue: import("vue").PropType<import("./src/node").CascaderValue>;
    options: {
        type: import("vue").PropType<import("./src/node").CascaderOption[]>;
        default: () => import("./src/node").CascaderOption[];
    };
    props: {
        type: import("vue").PropType<import("./src/node").CascaderProps>;
        default: () => import("./src/node").CascaderProps;
    };
}>> & {
    onChange?: ((...args: any[]) => any) | undefined;
    onClose?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    "onExpand-change"?: ((...args: any[]) => any) | undefined;
}, {
    props: import("./src/node").CascaderProps;
    border: boolean;
    options: import("./src/node").CascaderOption[];
}>>;
export default _CascaderPanel;
export declare const ElCascaderPanel: SFCWithInstall<import("vue").DefineComponent<{
    border: {
        type: BooleanConstructor;
        default: boolean;
    };
    renderLabel: import("vue").PropType<import("./src/node").RenderLabel>;
    modelValue: import("vue").PropType<import("./src/node").CascaderValue>;
    options: {
        type: import("vue").PropType<import("./src/node").CascaderOption[]>;
        default: () => import("./src/node").CascaderOption[];
    };
    props: {
        type: import("vue").PropType<import("./src/node").CascaderProps>;
        default: () => import("./src/node").CascaderProps;
    };
}, {
    ns: {
        namespace: import("vue").Ref<string>;
        b: (blockSuffix?: string) => string;
        e: (element?: string | undefined) => string;
        m: (modifier?: string | undefined) => string;
        be: (blockSuffix?: string | undefined, element?: string | undefined) => string;
        em: (element?: string | undefined, modifier?: string | undefined) => string;
        bm: (blockSuffix?: string | undefined, modifier?: string | undefined) => string;
        bem: (blockSuffix?: string | undefined, element?: string | undefined, modifier?: string | undefined) => string;
        is: {
            (name: string, state: boolean | undefined): string;
            (name: string): string;
        };
        cssVar: (object: Record<string, string>) => Record<string, string>;
        cssVarName: (name: string) => string;
        cssVarBlock: (object: Record<string, string>) => Record<string, string>;
        cssVarBlockName: (name: string) => string;
    };
    menuList: import("vue").Ref<any[]>;
    menus: import("vue").Ref<{
        readonly uid: number;
        readonly level: number;
        readonly value: import("./src/node").CascaderNodeValue;
        readonly label: string;
        readonly pathNodes: any[];
        readonly pathValues: import("./src/node").CascaderNodeValue[];
        readonly pathLabels: string[];
        childrenData: {
            [x: string]: unknown;
            label?: string | undefined;
            value?: import("./src/node").CascaderNodeValue | undefined;
            children?: any[] | undefined;
            disabled?: boolean | undefined;
            leaf?: boolean | undefined;
        }[] | undefined;
        children: any[];
        text: string;
        loaded: boolean;
        checked: boolean;
        indeterminate: boolean;
        loading: boolean;
        readonly data: {
            [x: string]: unknown;
            label?: string | undefined;
            value?: import("./src/node").CascaderNodeValue | undefined;
            children?: any[] | undefined;
            disabled?: boolean | undefined;
            leaf?: boolean | undefined;
        } | null;
        readonly config: {
            expandTrigger: import("./src/node").ExpandTrigger;
            multiple: boolean;
            checkStrictly: boolean;
            emitPath: boolean;
            lazy: boolean;
            lazyLoad: import("./src/node").LazyLoad;
            value: string;
            label: string;
            children: string;
            disabled: string | import("./src/node").isDisabled;
            leaf: string | import("./src/node").isLeaf;
            hoverThreshold: number;
        };
        readonly parent?: any | undefined;
        readonly root: boolean;
        readonly isDisabled: boolean;
        readonly isLeaf: boolean;
        readonly valueByOption: import("./src/node").CascaderNodeValue | import("./src/node").CascaderNodeValue[];
        appendChild: (childData: import("./src/node").CascaderOption) => import("./src/node").default;
        calcText: (allLevels: boolean, separator: string) => string;
        broadcast: (event: string, ...args: unknown[]) => void;
        emit: (event: string, ...args: unknown[]) => void;
        onParentCheck: (checked: boolean) => void;
        onChildCheck: () => void;
        setCheckState: (checked: boolean) => void;
        doCheck: (checked: boolean) => void;
    }[][]>;
    checkedNodes: import("vue").Ref<{
        readonly uid: number;
        readonly level: number;
        readonly value: import("./src/node").CascaderNodeValue;
        readonly label: string;
        readonly pathNodes: any[];
        readonly pathValues: import("./src/node").CascaderNodeValue[];
        readonly pathLabels: string[];
        childrenData: {
            [x: string]: unknown;
            label?: string | undefined;
            value?: import("./src/node").CascaderNodeValue | undefined;
            children?: any[] | undefined;
            disabled?: boolean | undefined;
            leaf?: boolean | undefined;
        }[] | undefined;
        children: any[];
        text: string;
        loaded: boolean;
        checked: boolean;
        indeterminate: boolean;
        loading: boolean;
        readonly data: {
            [x: string]: unknown;
            label?: string | undefined;
            value?: import("./src/node").CascaderNodeValue | undefined;
            children?: any[] | undefined;
            disabled?: boolean | undefined;
            leaf?: boolean | undefined;
        } | null;
        readonly config: {
            expandTrigger: import("./src/node").ExpandTrigger;
            multiple: boolean;
            checkStrictly: boolean;
            emitPath: boolean;
            lazy: boolean;
            lazyLoad: import("./src/node").LazyLoad;
            value: string;
            label: string;
            children: string;
            disabled: string | import("./src/node").isDisabled;
            leaf: string | import("./src/node").isLeaf;
            hoverThreshold: number;
        };
        readonly parent?: any | undefined;
        readonly root: boolean;
        readonly isDisabled: boolean;
        readonly isLeaf: boolean;
        readonly valueByOption: import("./src/node").CascaderNodeValue | import("./src/node").CascaderNodeValue[];
        appendChild: (childData: import("./src/node").CascaderOption) => import("./src/node").default;
        calcText: (allLevels: boolean, separator: string) => string;
        broadcast: (event: string, ...args: unknown[]) => void;
        emit: (event: string, ...args: unknown[]) => void;
        onParentCheck: (checked: boolean) => void;
        onChildCheck: () => void;
        setCheckState: (checked: boolean) => void;
        doCheck: (checked: boolean) => void;
    }[]>;
    handleKeyDown: (e: KeyboardEvent) => void;
    handleCheckChange: (node: import("./src/node").default, checked: boolean, emitClose?: boolean | undefined) => void;
    getFlattedNodes: (leafOnly: boolean) => import("./src/node").default[] | undefined;
    getCheckedNodes: (leafOnly: boolean) => import("./src/node").default[] | undefined;
    clearCheckedNodes: () => void;
    calculateCheckedValue: () => void;
    scrollToExpandingNode: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "change" | "close" | "expand-change")[], "update:modelValue" | "change" | "close" | "expand-change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    border: {
        type: BooleanConstructor;
        default: boolean;
    };
    renderLabel: import("vue").PropType<import("./src/node").RenderLabel>;
    modelValue: import("vue").PropType<import("./src/node").CascaderValue>;
    options: {
        type: import("vue").PropType<import("./src/node").CascaderOption[]>;
        default: () => import("./src/node").CascaderOption[];
    };
    props: {
        type: import("vue").PropType<import("./src/node").CascaderProps>;
        default: () => import("./src/node").CascaderProps;
    };
}>> & {
    onChange?: ((...args: any[]) => any) | undefined;
    onClose?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    "onExpand-change"?: ((...args: any[]) => any) | undefined;
}, {
    props: import("./src/node").CascaderProps;
    border: boolean;
    options: import("./src/node").CascaderOption[];
}>>;
export * from './src/types';
export * from './src/config';
