import type { PropType } from 'vue';
import type { Store } from '../store';
import type { ColumnCls, ColumnStyle, Table } from '../table/defaults';
interface TableBodyProps<T> {
    store: Store<T>;
    stripe?: boolean;
    context: Table<T>;
    rowClassName: ColumnCls<T>;
    rowStyle: ColumnStyle<T>;
    fixed: string;
    highlight: boolean;
    tooltipEffect: string;
}
declare const defaultProps: {
    store: {
        required: boolean;
        type: PropType<any>;
    };
    stripe: BooleanConstructor;
    tooltipEffect: StringConstructor;
    context: {
        default: () => {};
        type: PropType<Table<any>>;
    };
    rowClassName: PropType<ColumnCls<any>>;
    rowStyle: PropType<ColumnStyle<any>>;
    fixed: {
        type: StringConstructor;
        default: string;
    };
    highlight: BooleanConstructor;
};
export { TableBodyProps };
export default defaultProps;
