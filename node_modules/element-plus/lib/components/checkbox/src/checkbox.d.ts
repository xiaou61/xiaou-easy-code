import type { ExtractPropTypes } from 'vue';
import type Checkbox from './checkbox.vue';
export declare type CheckboxValueType = string | number | boolean;
export declare const checkboxProps: {
    modelValue: {
        type: (BooleanConstructor | StringConstructor | NumberConstructor)[];
        default: undefined;
    };
    label: {
        type: (BooleanConstructor | ObjectConstructor | StringConstructor | NumberConstructor)[];
    };
    indeterminate: BooleanConstructor;
    disabled: BooleanConstructor;
    checked: BooleanConstructor;
    name: {
        type: StringConstructor;
        default: undefined;
    };
    trueLabel: {
        type: (StringConstructor | NumberConstructor)[];
        default: undefined;
    };
    falseLabel: {
        type: (StringConstructor | NumberConstructor)[];
        default: undefined;
    };
    id: {
        type: StringConstructor;
        default: undefined;
    };
    controls: {
        type: StringConstructor;
        default: undefined;
    };
    border: BooleanConstructor;
    size: {
        readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "default" | "small" | "large", never>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    tabindex: (StringConstructor | NumberConstructor)[];
    validateEvent: {
        type: BooleanConstructor;
        default: boolean;
    };
};
export declare const checkboxEmits: {
    "update:modelValue": (val: CheckboxValueType) => boolean;
    change: (val: CheckboxValueType) => boolean;
};
export declare type CheckboxProps = ExtractPropTypes<typeof checkboxProps>;
export declare type CheckboxEmits = typeof checkboxEmits;
export declare type CheckboxInstance = InstanceType<typeof Checkbox>;
