import type { CheckboxValueType } from './checkbox';
declare const _default: import("vue").DefineComponent<{
    readonly modelValue: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (string | number)[]) | (() => (string | number)[]) | ((new (...args: any[]) => (string | number)[]) | (() => (string | number)[]))[], unknown, unknown, () => never[], boolean>;
    readonly disabled: BooleanConstructor;
    readonly min: NumberConstructor;
    readonly max: NumberConstructor;
    readonly size: {
        readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "default" | "small" | "large", never>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly label: StringConstructor;
    readonly fill: StringConstructor;
    readonly textColor: StringConstructor;
    readonly tag: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "div", boolean>;
    readonly validateEvent: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
}, {
    props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
        readonly modelValue: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (string | number)[]) | (() => (string | number)[]) | ((new (...args: any[]) => (string | number)[]) | (() => (string | number)[]))[], unknown, unknown, () => never[], boolean>;
        readonly disabled: BooleanConstructor;
        readonly min: NumberConstructor;
        readonly max: NumberConstructor;
        readonly size: {
            readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "default" | "small" | "large", never>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly label: StringConstructor;
        readonly fill: StringConstructor;
        readonly textColor: StringConstructor;
        readonly tag: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "div", boolean>;
        readonly validateEvent: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    }>> & {
        onChange?: ((val: CheckboxValueType[]) => any) | undefined;
        "onUpdate:modelValue"?: ((val: CheckboxValueType[]) => any) | undefined;
    }>>;
    emit: ((event: "update:modelValue", val: CheckboxValueType[]) => void) & ((event: "change", val: CheckboxValueType[]) => void);
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
    formItem: import("element-plus/es/tokens").FormItemContext | undefined;
    groupId: import("vue").Ref<string | undefined>;
    isLabeledByFormItem: import("vue").ComputedRef<boolean>;
    changeEvent: (value: CheckboxValueType[]) => Promise<void>;
    modelValue: import("vue").WritableComputedRef<CheckboxValueType[]>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (val: CheckboxValueType[]) => boolean;
    change: (val: CheckboxValueType[]) => boolean;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly modelValue: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (string | number)[]) | (() => (string | number)[]) | ((new (...args: any[]) => (string | number)[]) | (() => (string | number)[]))[], unknown, unknown, () => never[], boolean>;
    readonly disabled: BooleanConstructor;
    readonly min: NumberConstructor;
    readonly max: NumberConstructor;
    readonly size: {
        readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "default" | "small" | "large", never>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly label: StringConstructor;
    readonly fill: StringConstructor;
    readonly textColor: StringConstructor;
    readonly tag: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "div", boolean>;
    readonly validateEvent: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
}>> & {
    onChange?: ((val: CheckboxValueType[]) => any) | undefined;
    "onUpdate:modelValue"?: ((val: CheckboxValueType[]) => any) | undefined;
}, {
    readonly disabled: boolean;
    readonly modelValue: (string | number)[];
    readonly tag: string;
    readonly validateEvent: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
}>;
export default _default;
