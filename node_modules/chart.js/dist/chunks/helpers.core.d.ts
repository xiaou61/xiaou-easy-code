/* eslint-disable @typescript-eslint/ban-types */

// DeepPartial implementation taken from the utility-types NPM package, which is
// Copyright (c) 2016 Piotr Witek <piotrek.witek@gmail.com> (http://piotrwitek.github.io)
// and used under the terms of the MIT license
type DeepPartial<T> = T extends Function
  ? T
  : T extends Array<infer U>
    ? _DeepPartialArray<U>
    : T extends object
      ? _DeepPartialObject<T>
      : T | undefined;

type _DeepPartialArray<T> = Array<DeepPartial<T>>
type _DeepPartialObject<T> = { [P in keyof T]?: DeepPartial<T[P]> };

type DistributiveArray<T> = [T] extends [unknown] ? Array<T> : never

// https://stackoverflow.com/a/50375286
type UnionToIntersection<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type AnyObject = Record<string, unknown>;
type EmptyObject = Record<string, never>;

/**
 * @namespace Chart._adapters
 * @since 2.8.0
 * @private
 */

declare type TimeUnit = 'millisecond' | 'second' | 'minute' | 'hour' | 'day' | 'week' | 'month' | 'quarter' | 'year';
interface DateAdapter<T extends AnyObject = AnyObject> {
    readonly options: T;
    /**
     * Will called with chart options after adapter creation.
     */
    init(this: DateAdapter<T>, chartOptions: ChartOptions): void;
    /**
     * Returns a map of time formats for the supported formatting units defined
     * in Unit as well as 'datetime' representing a detailed date/time string.
     */
    formats(this: DateAdapter<T>): Record<string, string>;
    /**
     * Parses the given `value` and return the associated timestamp.
     * @param value - the value to parse (usually comes from the data)
     * @param [format] - the expected data format
     */
    parse(this: DateAdapter<T>, value: unknown, format?: TimeUnit): number | null;
    /**
     * Returns the formatted date in the specified `format` for a given `timestamp`.
     * @param timestamp - the timestamp to format
     * @param format - the date/time token
     */
    format(this: DateAdapter<T>, timestamp: number, format: TimeUnit): string;
    /**
     * Adds the specified `amount` of `unit` to the given `timestamp`.
     * @param timestamp - the input timestamp
     * @param amount - the amount to add
     * @param unit - the unit as string
     */
    add(this: DateAdapter<T>, timestamp: number, amount: number, unit: TimeUnit): number;
    /**
     * Returns the number of `unit` between the given timestamps.
     * @param a - the input timestamp (reference)
     * @param b - the timestamp to subtract
     * @param unit - the unit as string
     */
    diff(this: DateAdapter<T>, a: number, b: number, unit: TimeUnit): number;
    /**
     * Returns start of `unit` for the given `timestamp`.
     * @param timestamp - the input timestamp
     * @param unit - the unit as string
     * @param [weekday] - the ISO day of the week with 1 being Monday
     * and 7 being Sunday (only needed if param *unit* is `isoWeek`).
     */
    startOf(this: DateAdapter<T>, timestamp: number, unit: TimeUnit | 'isoWeek', weekday?: number): number;
    /**
     * Returns end of `unit` for the given `timestamp`.
     * @param timestamp - the input timestamp
     * @param unit - the unit as string
     */
    endOf(this: DateAdapter<T>, timestamp: number, unit: TimeUnit | 'isoWeek'): number;
}
/**
 * Date adapter (current used by the time scale)
 * @namespace Chart._adapters._date
 * @memberof Chart._adapters
 * @private
 */
declare class DateAdapterBase implements DateAdapter {
    /**
     * Override default date adapter methods.
     * Accepts type parameter to define options type.
     * @example
     * Chart._adapters._date.override<{myAdapterOption: string}>({
     *   init() {
     *     console.log(this.options.myAdapterOption);
     *   }
     * })
     */
    static override<T extends AnyObject = AnyObject>(members: Partial<Omit<DateAdapter<T>, 'options'>>): void;
    readonly options: AnyObject;
    constructor(options: AnyObject);
    init(): void;
    formats(): Record<string, string>;
    parse(): number | null;
    format(): string;
    add(): number;
    diff(): number;
    startOf(): number;
    endOf(): number;
}
declare const _default: {
    _date: typeof DateAdapterBase;
};

interface ChartArea {
  top: number;
  left: number;
  right: number;
  bottom: number;
  width: number;
  height: number;
}

interface Point$1 {
  x: number;
  y: number;
}

type TRBL = {
  top: number;
  right: number;
  bottom: number;
  left: number;
}

type TRBLCorners = {
  topLeft: number;
  topRight: number;
  bottomLeft: number;
  bottomRight: number;
};

type CornerRadius = number | Partial<TRBLCorners>;

type RoundedRect = {
  x: number;
  y: number;
  w: number;
  h: number;
  radius?: CornerRadius
}

type Padding = Partial<TRBL> | number | Point$1;

declare class Animation {
  constructor(cfg: AnyObject, target: AnyObject, prop: string, to?: unknown);
  active(): boolean;
  update(cfg: AnyObject, to: unknown, date: number): void;
  cancel(): void;
  tick(date: number): void;
  readonly _to: unknown;
}

interface AnimationEvent {
  chart: Chart$4;
  numSteps: number;
  initial: boolean;
  currentStep: number;
}

declare class Animator {
  listen(chart: Chart$4, event: 'complete' | 'progress', cb: (event: AnimationEvent) => void): void;
  add(chart: Chart$4, items: readonly Animation[]): void;
  has(chart: Chart$4): boolean;
  start(chart: Chart$4): void;
  running(chart: Chart$4): boolean;
  stop(chart: Chart$4): void;
  remove(chart: Chart$4): boolean;
}

declare class Animations {
  constructor(chart: Chart$4, animations: AnyObject);
  configure(animations: AnyObject): void;
  update(target: AnyObject, values: AnyObject): undefined | boolean;
}

declare class Element<T = AnyObject, O = AnyObject> {
    static defaults: {};
    static defaultRoutes: any;
    x: number;
    y: number;
    active: boolean;
    options: O;
    $animations: Record<keyof T, Animation>;
    tooltipPosition(useFinalPosition: boolean): Point$1;
    hasValue(): boolean;
    /**
     * Gets the current or final value of each prop. Can return extra properties (whole object).
     * @param props - properties to get
     * @param [final] - get the final value (animation target)
     */
    getProps<P extends (keyof T)[]>(props: P, final?: boolean): Pick<T, P[number]>;
    getProps<P extends string>(props: P[], final?: boolean): Partial<Record<P, unknown>>;
}

declare type PointProps = Point$1;
declare class PointElement extends Element<PointProps, PointOptions & PointHoverOptions> {
    static id: string;
    parsed: CartesianParsedData;
    skip?: boolean;
    stop?: boolean;
    /**
     * @type {any}
     */
    static defaults: {
        borderWidth: number;
        hitRadius: number;
        hoverBorderWidth: number;
        hoverRadius: number;
        pointStyle: string;
        radius: number;
        rotation: number;
    };
    /**
     * @type {any}
     */
    static defaultRoutes: {
        backgroundColor: string;
        borderColor: string;
    };
    constructor(cfg: any);
    inRange(mouseX: number, mouseY: number, useFinalPosition?: boolean): boolean;
    inXRange(mouseX: number, useFinalPosition?: boolean): boolean;
    inYRange(mouseY: number, useFinalPosition?: boolean): boolean;
    getCenterPoint(useFinalPosition?: boolean): {
        x: number;
        y: number;
    };
    size(options?: Partial<PointOptions & PointHoverOptions>): number;
    draw(ctx: CanvasRenderingContext2D, area: ChartArea): void;
    getRange(): any;
}

/**
 * Easing functions adapted from Robert Penner's easing equations.
 * @namespace Chart.helpers.easing.effects
 * @see http://www.robertpenner.com/easing/
 */
declare const effects: {
    readonly linear: (t: number) => number;
    readonly easeInQuad: (t: number) => number;
    readonly easeOutQuad: (t: number) => number;
    readonly easeInOutQuad: (t: number) => number;
    readonly easeInCubic: (t: number) => number;
    readonly easeOutCubic: (t: number) => number;
    readonly easeInOutCubic: (t: number) => number;
    readonly easeInQuart: (t: number) => number;
    readonly easeOutQuart: (t: number) => number;
    readonly easeInOutQuart: (t: number) => number;
    readonly easeInQuint: (t: number) => number;
    readonly easeOutQuint: (t: number) => number;
    readonly easeInOutQuint: (t: number) => number;
    readonly easeInSine: (t: number) => number;
    readonly easeOutSine: (t: number) => number;
    readonly easeInOutSine: (t: number) => number;
    readonly easeInExpo: (t: number) => number;
    readonly easeOutExpo: (t: number) => number;
    readonly easeInOutExpo: (t: number) => number;
    readonly easeInCirc: (t: number) => number;
    readonly easeOutCirc: (t: number) => number;
    readonly easeInOutCirc: (t: number) => number;
    readonly easeInElastic: (t: number) => number;
    readonly easeOutElastic: (t: number) => number;
    readonly easeInOutElastic: (t: number) => number;
    readonly easeInBack: (t: number) => number;
    readonly easeOutBack: (t: number) => number;
    readonly easeInOutBack: (t: number) => number;
    readonly easeInBounce: (t: number) => number;
    readonly easeOutBounce: (t: number) => number;
    readonly easeInOutBounce: (t: number) => number;
};
declare type EasingFunction = keyof typeof effects;

type Color = string | CanvasGradient | CanvasPattern;

type LayoutPosition = 'left' | 'top' | 'right' | 'bottom' | 'center' | 'chartArea' | {[scaleId: string]: number};

interface LayoutItem {
  /**
   * The position of the item in the chart layout. Possible values are
   */
  position: LayoutPosition;
  /**
   * The weight used to sort the item. Higher weights are further away from the chart area
   */
  weight: number;
  /**
   * if true, and the item is horizontal, then push vertical boxes down
   */
  fullSize: boolean;
  /**
   * Width of item. Must be valid after update()
   */
  width: number;
  /**
   * Height of item. Must be valid after update()
   */
  height: number;
  /**
   * Left edge of the item. Set by layout system and cannot be used in update
   */
  left: number;
  /**
   * Top edge of the item. Set by layout system and cannot be used in update
   */
  top: number;
  /**
   * Right edge of the item. Set by layout system and cannot be used in update
   */
  right: number;
  /**
   * Bottom edge of the item. Set by layout system and cannot be used in update
   */
  bottom: number;

  /**
   * Called before the layout process starts
   */
  beforeLayout?(): void;
  /**
   * Draws the element
   */
  draw(chartArea: ChartArea): void;
  /**
   * Returns an object with padding on the edges
   */
  getPadding?(): ChartArea;
  /**
   * returns true if the layout item is horizontal (ie. top or bottom)
   */
  isHorizontal(): boolean;
  /**
   * Takes two parameters: width and height.
   * @param width
   * @param height
   */
  update(width: number, height: number, margins?: ChartArea): void;
}

interface ScriptableContext<TType extends ChartType> {
  active: boolean;
  chart: Chart$4;
  dataIndex: number;
  dataset: UnionToIntersection<ChartDataset<TType>>;
  datasetIndex: number;
  type: string;
  mode: string;
  parsed: UnionToIntersection<ParsedDataType<TType>>;
  raw: unknown;
}

interface ScriptableLineSegmentContext {
  type: 'segment',
  p0: PointElement,
  p1: PointElement,
  p0DataIndex: number,
  p1DataIndex: number,
  datasetIndex: number
}

type Scriptable<T, TContext> = T | ((ctx: TContext, options: AnyObject) => T | undefined);
type ScriptableOptions<T, TContext> = { [P in keyof T]: Scriptable<T[P], TContext> };
type ScriptableAndScriptableOptions<T, TContext> = Scriptable<T, TContext> | ScriptableOptions<T, TContext>;
type ScriptableAndArray<T, TContext> = readonly T[] | Scriptable<T, TContext>;
type ScriptableAndArrayOptions<T, TContext> = { [P in keyof T]: ScriptableAndArray<T[P], TContext> };

interface ParsingOptions {
  /**
   * How to parse the dataset. The parsing can be disabled by specifying parsing: false at chart options or dataset. If parsing is disabled, data must be sorted and in the formats the associated chart type and scales use internally.
   */
  parsing:
  {
    [key: string]: string;
  }
  | false;

  /**
   * Chart.js is fastest if you provide data with indices that are unique, sorted, and consistent across datasets and provide the normalized: true option to let Chart.js know that you have done so.
   */
  normalized: boolean;
}

interface ControllerDatasetOptions extends ParsingOptions {
  /**
   * The base axis of the chart. 'x' for vertical charts and 'y' for horizontal charts.
   * @default 'x'
   */
  indexAxis: 'x' | 'y';
  /**
   * How to clip relative to chartArea. Positive value allows overflow, negative value clips that many pixels inside chartArea. 0 = clip at chartArea. Clipping can also be configured per side: `clip: {left: 5, top: false, right: -2, bottom: 0}`
   */
  clip: number | ChartArea | false;
  /**
   * The label for the dataset which appears in the legend and tooltips.
   */
  label: string;
  /**
   * The drawing order of dataset. Also affects order for stacking, tooltip and legend.
   */
  order: number;

  /**
   * The ID of the group to which this dataset belongs to (when stacked, each group will be a separate stack).
   */
  stack: string;
  /**
     * Configures the visibility state of the dataset. Set it to true, to hide the dataset from the chart.
   * @default false
   */
  hidden: boolean;
}

interface BarControllerDatasetOptions
  extends ControllerDatasetOptions,
  ScriptableAndArrayOptions<BarOptions, ScriptableContext<'bar'>>,
  ScriptableAndArrayOptions<CommonHoverOptions, ScriptableContext<'bar'>>,
  AnimationOptions<'bar'> {
  /**
   * The ID of the x axis to plot this dataset on.
   */
  xAxisID: string;
  /**
   * The ID of the y axis to plot this dataset on.
   */
  yAxisID: string;

  /**
   * Percent (0-1) of the available width each bar should be within the category width. 1.0 will take the whole category width and put the bars right next to each other.
   * @default 0.9
   */
  barPercentage: number;
  /**
   * Percent (0-1) of the available width each category should be within the sample width.
   * @default 0.8
   */
  categoryPercentage: number;

  /**
   * Manually set width of each bar in pixels. If set to 'flex', it computes "optimal" sample widths that globally arrange bars side by side. If not set (default), bars are equally sized based on the smallest interval.
   */
  barThickness: number | 'flex';

  /**
   * Set this to ensure that bars are not sized thicker than this.
   */
  maxBarThickness: number;

  /**
   * Set this to ensure that bars have a minimum length in pixels.
   */
  minBarLength: number;

  /**
   * Point style for the legend
   * @default 'circle;
   */
  pointStyle: PointStyle;

  /**
   * Should the bars be grouped on index axis
   * @default true
   */
  grouped: boolean;
}

interface BarControllerChartOptions {
  /**
   * Should null or undefined values be omitted from drawing
   */
  skipNull?: boolean;
}

type BarController = DatasetController$1
declare const BarController: ChartComponent & {
  prototype: BarController;
  new (chart: Chart$4, datasetIndex: number): BarController;
};

interface BubbleControllerDatasetOptions
  extends ControllerDatasetOptions,
  ScriptableAndArrayOptions<PointOptions, ScriptableContext<'bubble'>>,
  ScriptableAndArrayOptions<PointHoverOptions, ScriptableContext<'bubble'>> {
  /**
   * The ID of the x axis to plot this dataset on.
   */
  xAxisID: string;
  /**
   * The ID of the y axis to plot this dataset on.
   */
  yAxisID: string;
}

interface BubbleDataPoint extends Point$1 {
  /**
   * Bubble radius in pixels (not scaled).
   */
  r: number;
}

type BubbleController = DatasetController$1
declare const BubbleController: ChartComponent & {
  prototype: BubbleController;
  new (chart: Chart$4, datasetIndex: number): BubbleController;
};

interface LineControllerDatasetOptions
  extends ControllerDatasetOptions,
  ScriptableAndArrayOptions<PointPrefixedOptions, ScriptableContext<'line'>>,
  ScriptableAndArrayOptions<PointPrefixedHoverOptions, ScriptableContext<'line'>>,
  ScriptableOptions<Omit<LineOptions, keyof CommonElementOptions>, ScriptableContext<'line'>>,
  ScriptableAndArrayOptions<CommonElementOptions, ScriptableContext<'line'>>,
  ScriptableOptions<Omit<LineHoverOptions, keyof CommonHoverOptions>, ScriptableContext<'line'>>,
  ScriptableAndArrayOptions<CommonHoverOptions, ScriptableContext<'line'>>,
  AnimationOptions<'line'> {
  /**
   * The ID of the x axis to plot this dataset on.
   */
  xAxisID: string;
  /**
   * The ID of the y axis to plot this dataset on.
   */
  yAxisID: string;

  /**
   * If true, lines will be drawn between points with no or null data. If false, points with NaN data will create a break in the line. Can also be a number specifying the maximum gap length to span. The unit of the value depends on the scale used.
   * @default false
   */
  spanGaps: boolean | number;

  showLine: boolean;
}

interface LineControllerChartOptions {
  /**
   * If true, lines will be drawn between points with no or null data. If false, points with NaN data will create a break in the line. Can also be a number specifying the maximum gap length to span. The unit of the value depends on the scale used.
   * @default false
   */
  spanGaps: boolean | number;
  /**
   * If false, the lines between points are not drawn.
   * @default true
   */
  showLine: boolean;
}

type LineController = DatasetController$1
declare const LineController: ChartComponent & {
  prototype: LineController;
  new (chart: Chart$4, datasetIndex: number): LineController;
};

type ScatterControllerDatasetOptions = LineControllerDatasetOptions;

interface ScatterDataPoint extends Point$1 {}

type ScatterControllerChartOptions = LineControllerChartOptions;

type ScatterController = LineController
declare const ScatterController: ChartComponent & {
  prototype: ScatterController;
  new (chart: Chart$4, datasetIndex: number): ScatterController;
};

interface DoughnutControllerDatasetOptions
  extends ControllerDatasetOptions,
  ScriptableAndArrayOptions<ArcOptions, ScriptableContext<'doughnut'>>,
  ScriptableAndArrayOptions<ArcHoverOptions, ScriptableContext<'doughnut'>>,
  AnimationOptions<'doughnut'> {

  /**
   * Sweep to allow arcs to cover.
   * @default 360
   */
  circumference: number;

  /**
   * Arc offset (in pixels).
   */
  offset: number;

  /**
   * Starting angle to draw this dataset from.
   * @default 0
   */
  rotation: number;

  /**
   * The relative thickness of the dataset. Providing a value for weight will cause the pie or doughnut dataset to be drawn with a thickness relative to the sum of all the dataset weight values.
   * @default 1
   */
  weight: number;

  /**
   * Similar to the `offset` option, but applies to all arcs. This can be used to to add spaces
   * between arcs
   * @default 0
   */
  spacing: number;
}

interface DoughnutAnimationOptions {
  /**
   *   If true, the chart will animate in with a rotation animation. This property is in the options.animation object.
   * @default true
   */
  animateRotate: boolean;

  /**
   * If true, will animate scaling the chart from the center outwards.
   * @default false
   */
  animateScale: boolean;
}

interface DoughnutControllerChartOptions {
  /**
   * Sweep to allow arcs to cover.
   * @default 360
   */
  circumference: number;

  /**
   * The portion of the chart that is cut out of the middle. ('50%' - for doughnut, 0 - for pie)
   * String ending with '%' means percentage, number means pixels.
   * @default 50
   */
  cutout: Scriptable<number | string, ScriptableContext<'doughnut'>>;

  /**
   * Arc offset (in pixels).
   */
  offset: number;

  /**
   * The outer radius of the chart. String ending with '%' means percentage of maximum radius, number means pixels.
   * @default '100%'
   */
  radius: Scriptable<number | string, ScriptableContext<'doughnut'>>;

  /**
   * Starting angle to draw arcs from.
   * @default 0
   */
  rotation: number;

  /**
   * Spacing between the arcs
   * @default 0
   */
  spacing: number;

  animation: false | DoughnutAnimationOptions;
}

type DoughnutDataPoint = number;

interface DoughnutController extends DatasetController$1 {
  readonly innerRadius: number;
  readonly outerRadius: number;
  readonly offsetX: number;
  readonly offsetY: number;

  calculateTotal(): number;
  calculateCircumference(value: number): number;
}

declare const DoughnutController: ChartComponent & {
  prototype: DoughnutController;
  new (chart: Chart$4, datasetIndex: number): DoughnutController;
};

interface DoughnutMetaExtensions {
  total: number;
}

type PieControllerDatasetOptions = DoughnutControllerDatasetOptions;
type PieControllerChartOptions = DoughnutControllerChartOptions;
type PieAnimationOptions = DoughnutAnimationOptions;

type PieDataPoint = DoughnutDataPoint;
type PieMetaExtensions = DoughnutMetaExtensions;

type PieController = DoughnutController
declare const PieController: ChartComponent & {
  prototype: PieController;
  new (chart: Chart$4, datasetIndex: number): PieController;
};

interface PolarAreaControllerDatasetOptions extends DoughnutControllerDatasetOptions {
  /**
   * Arc angle to cover. - for polar only
   * @default circumference / (arc count)
   */
  angle: number;
}

type PolarAreaAnimationOptions = DoughnutAnimationOptions;

interface PolarAreaControllerChartOptions {
  /**
   * Starting angle to draw arcs for the first item in a dataset. In degrees, 0 is at top.
   * @default 0
   */
  startAngle: number;

  animation: false | PolarAreaAnimationOptions;
}

interface PolarAreaController extends DoughnutController {
  countVisibleElements(): number;
}
declare const PolarAreaController: ChartComponent & {
  prototype: PolarAreaController;
  new (chart: Chart$4, datasetIndex: number): PolarAreaController;
};

interface RadarControllerDatasetOptions
  extends ControllerDatasetOptions,
  ScriptableAndArrayOptions<PointOptions & PointHoverOptions & PointPrefixedOptions & PointPrefixedHoverOptions, ScriptableContext<'radar'>>,
  ScriptableAndArrayOptions<LineOptions & LineHoverOptions, ScriptableContext<'radar'>>,
  AnimationOptions<'radar'> {
  /**
   * The ID of the x axis to plot this dataset on.
   */
  xAxisID: string;
  /**
   * The ID of the y axis to plot this dataset on.
   */
  yAxisID: string;

  /**
   * If true, lines will be drawn between points with no or null data. If false, points with NaN data will create a break in the line. Can also be a number specifying the maximum gap length to span. The unit of the value depends on the scale used.
   */
  spanGaps: boolean | number;

  /**
   * If false, the line is not drawn for this dataset.
   */
  showLine: boolean;
}

type RadarControllerChartOptions = LineControllerChartOptions;

type RadarController = DatasetController$1
declare const RadarController: ChartComponent & {
  prototype: RadarController;
  new (chart: Chart$4, datasetIndex: number): RadarController;
};
interface ChartMetaCommon<TElement extends Element = Element, TDatasetElement extends Element = Element> {
  type: string;
  controller: DatasetController$1;
  order: number;

  label: string;
  index: number;
  visible: boolean;

  stack: number;

  indexAxis: 'x' | 'y';

  data: TElement[];
  dataset?: TDatasetElement;

  hidden: boolean;

  xAxisID?: string;
  yAxisID?: string;
  rAxisID?: string;
  iAxisID: string;
  vAxisID: string;

  xScale?: Scale$2;
  yScale?: Scale$2;
  rScale?: Scale$2;
  iScale?: Scale$2;
  vScale?: Scale$2;

  _sorted: boolean;
  _stacked: boolean | 'single';
  _parsed: unknown[];
}

type ChartMeta<
  TType extends ChartType = ChartType,
  TElement extends Element = Element,
  TDatasetElement extends Element = Element,
> = DeepPartial<
{ [key in ChartType]: ChartTypeRegistry[key]['metaExtensions'] }[TType]
> & ChartMetaCommon<TElement, TDatasetElement>;

interface ActiveDataPoint {
  datasetIndex: number;
  index: number;
}

interface ActiveElement extends ActiveDataPoint {
  element: Element;
}

declare class Chart$4<
  TType extends ChartType = ChartType,
  TData = DefaultDataPoint<TType>,
  TLabel = unknown
> {
  readonly platform: BasePlatform;
  readonly id: string;
  readonly canvas: HTMLCanvasElement;
  readonly ctx: CanvasRenderingContext2D;
  readonly config: ChartConfiguration<TType, TData, TLabel> | ChartConfigurationCustomTypesPerDataset<TType, TData, TLabel>;
  readonly width: number;
  readonly height: number;
  readonly aspectRatio: number;
  readonly boxes: LayoutItem[];
  readonly currentDevicePixelRatio: number;
  readonly chartArea: ChartArea;
  readonly scales: { [key: string]: Scale$2 };
  readonly attached: boolean;

  readonly legend?: LegendElement<TType>; // Only available if legend plugin is registered and enabled
  readonly tooltip?: TooltipModel<TType>; // Only available if tooltip plugin is registered and enabled

  data: ChartData<TType, TData, TLabel>;
  options: ChartOptions<TType>;

  constructor(item: ChartItem, config: ChartConfiguration<TType, TData, TLabel> | ChartConfigurationCustomTypesPerDataset<TType, TData, TLabel>);

  clear(): this;
  stop(): this;

  resize(width?: number, height?: number): void;
  ensureScalesHaveIDs(): void;
  buildOrUpdateScales(): void;
  buildOrUpdateControllers(): void;
  reset(): void;
  update(mode?: UpdateMode): void;
  render(): void;
  draw(): void;

  isPointInArea(point: Point$1): boolean;
  getElementsAtEventForMode(e: Event, mode: string, options: InteractionOptions, useFinalPosition: boolean): InteractionItem[];

  getSortedVisibleDatasetMetas(): ChartMeta[];
  getDatasetMeta(datasetIndex: number): ChartMeta;
  getVisibleDatasetCount(): number;
  isDatasetVisible(datasetIndex: number): boolean;
  setDatasetVisibility(datasetIndex: number, visible: boolean): void;
  toggleDataVisibility(index: number): void;
  getDataVisibility(index: number): boolean;
  hide(datasetIndex: number, dataIndex?: number): void;
  show(datasetIndex: number, dataIndex?: number): void;

  getActiveElements(): ActiveElement[];
  setActiveElements(active: ActiveDataPoint[]): void;

  destroy(): void;
  toBase64Image(type?: string, quality?: unknown): string;
  bindEvents(): void;
  unbindEvents(): void;
  updateHoverStyle(items: InteractionItem[], mode: 'dataset', enabled: boolean): void;

  notifyPlugins(hook: string, args?: AnyObject): boolean | void;

  isPluginEnabled(pluginId: string): boolean;

  static readonly defaults: Defaults$1;
  static readonly overrides: Overrides;
  static readonly version: string;
  static readonly instances: { [key: string]: Chart$4 };
  static readonly registry: Registry$1;
  static getChart(key: string | CanvasRenderingContext2D | HTMLCanvasElement): Chart$4 | undefined;
  static register(...items: ChartComponentLike[]): void;
  static unregister(...items: ChartComponentLike[]): void;
}

declare const registerables: readonly ChartComponentLike[];

declare type ChartItem =
  | string
  | CanvasRenderingContext2D
  | HTMLCanvasElement
  | { canvas: HTMLCanvasElement }
  | ArrayLike<CanvasRenderingContext2D | HTMLCanvasElement>;

declare const enum UpdateModeEnum {
  resize = 'resize',
  reset = 'reset',
  none = 'none',
  hide = 'hide',
  show = 'show',
  normal = 'normal',
  active = 'active'
}

type UpdateMode = keyof typeof UpdateModeEnum;

declare class DatasetController$1<
  TType extends ChartType = ChartType,
  TElement extends Element = Element,
  TDatasetElement extends Element = Element,
  TParsedData = ParsedDataType<TType>,
> {
  constructor(chart: Chart$4, datasetIndex: number);

  readonly chart: Chart$4;
  readonly index: number;
  readonly _cachedMeta: ChartMeta<TType, TElement, TDatasetElement>;
  enableOptionSharing: boolean;
  // If true, the controller supports the decimation
  // plugin. Defaults to `false` for all controllers
  // except the LineController
  supportsDecimation: boolean;

  linkScales(): void;
  getAllParsedValues(scale: Scale$2): number[];
  protected getLabelAndValue(index: number): { label: string; value: string };
  updateElements(elements: TElement[], start: number, count: number, mode: UpdateMode): void;
  update(mode: UpdateMode): void;
  updateIndex(datasetIndex: number): void;
  protected getMaxOverflow(): boolean | number;
  draw(): void;
  reset(): void;
  getDataset(): ChartDataset;
  getMeta(): ChartMeta<TType, TElement, TDatasetElement>;
  getScaleForId(scaleID: string): Scale$2 | undefined;
  configure(): void;
  initialize(): void;
  addElements(): void;
  buildOrUpdateElements(resetNewElements?: boolean): void;

  getStyle(index: number, active: boolean): AnyObject;
  protected resolveDatasetElementOptions(mode: UpdateMode): AnyObject;
  protected resolveDataElementOptions(index: number, mode: UpdateMode): AnyObject;
  /**
   * Utility for checking if the options are shared and should be animated separately.
   * @protected
   */
  protected getSharedOptions(options: AnyObject): undefined | AnyObject;
  /**
   * Utility for determining if `options` should be included in the updated properties
   * @protected
   */
  protected includeOptions(mode: UpdateMode, sharedOptions: AnyObject): boolean;
  /**
   * Utility for updating an element with new properties, using animations when appropriate.
   * @protected
   */

  protected updateElement(element: TElement | TDatasetElement, index: number | undefined, properties: AnyObject, mode: UpdateMode): void;
  /**
   * Utility to animate the shared options, that are potentially affecting multiple elements.
   * @protected
   */

  protected updateSharedOptions(sharedOptions: AnyObject, mode: UpdateMode, newOptions: AnyObject): void;
  removeHoverStyle(element: TElement, datasetIndex: number, index: number): void;
  setHoverStyle(element: TElement, datasetIndex: number, index: number): void;

  parse(start: number, count: number): void;
  protected parsePrimitiveData(meta: ChartMeta<TType, TElement, TDatasetElement>, data: AnyObject[], start: number, count: number): AnyObject[];
  protected parseArrayData(meta: ChartMeta<TType, TElement, TDatasetElement>, data: AnyObject[], start: number, count: number): AnyObject[];
  protected parseObjectData(meta: ChartMeta<TType, TElement, TDatasetElement>, data: AnyObject[], start: number, count: number): AnyObject[];
  protected getParsed(index: number): TParsedData;
  protected applyStack(scale: Scale$2, parsed: unknown[]): number;
  protected updateRangeFromParsed(
    range: { min: number; max: number },
    scale: Scale$2,
    parsed: unknown[],
    stack: boolean | string
  ): void;
  protected getMinMax(scale: Scale$2, canStack?: boolean): { min: number; max: number };
}

interface DatasetControllerChartComponent extends ChartComponent {
  defaults: {
    datasetElementType?: string | null | false;
    dataElementType?: string | null | false;
  };
}

interface Defaults$1 extends CoreChartOptions<ChartType>, ElementChartOptions<ChartType>, PluginChartOptions<ChartType> {

  scale: ScaleOptionsByType;
  scales: {
    [key in ScaleType]: ScaleOptionsByType<key>;
  };

  set(values: AnyObject): AnyObject;
  set(scope: string, values: AnyObject): AnyObject;
  get(scope: string): AnyObject;

  describe(scope: string, values: AnyObject): AnyObject;
  override(scope: string, values: AnyObject): AnyObject;

  /**
   * Routes the named defaults to fallback to another scope/name.
   * This routing is useful when those target values, like defaults.color, are changed runtime.
   * If the values would be copied, the runtime change would not take effect. By routing, the
   * fallback is evaluated at each access, so its always up to date.
   *
   * Example:
   *
   *   defaults.route('elements.arc', 'backgroundColor', '', 'color')
   *    - reads the backgroundColor from defaults.color when undefined locally
   *
   * @param scope Scope this route applies to.
   * @param name Property name that should be routed to different namespace when not defined here.
   * @param targetScope The namespace where those properties should be routed to.
   * Empty string ('') is the root of defaults.
   * @param targetName The target name in the target scope the property should be routed to.
   */
  route(scope: string, name: string, targetScope: string, targetName: string): void;
}

type Overrides = {
  [key in ChartType]:
  CoreChartOptions<key> &
  ElementChartOptions<key> &
  PluginChartOptions<key> &
  DatasetChartOptions<ChartType> &
  ScaleChartOptions<key> &
  ChartTypeRegistry[key]['chartOptions'];
}

declare const defaults: Defaults$1;
interface InteractionOptions {
  axis?: string;
  intersect?: boolean;
  includeInvisible?: boolean;
}

interface InteractionItem {
  element: Element;
  datasetIndex: number;
  index: number;
}

type InteractionModeFunction = (
  chart: Chart$4,
  e: ChartEvent$1,
  options: InteractionOptions,
  useFinalPosition?: boolean
) => InteractionItem[];

interface InteractionModeMap {
  /**
   * Returns items at the same index. If the options.intersect parameter is true, we only return items if we intersect something
   * If the options.intersect mode is false, we find the nearest item and return the items at the same index as that item
   */
  index: InteractionModeFunction;

  /**
   * Returns items in the same dataset. If the options.intersect parameter is true, we only return items if we intersect something
   * If the options.intersect is false, we find the nearest item and return the items in that dataset
   */
  dataset: InteractionModeFunction;
  /**
   * Point mode returns all elements that hit test based on the event position
   * of the event
   */
  point: InteractionModeFunction;
  /**
   * nearest mode returns the element closest to the point
   */
  nearest: InteractionModeFunction;
  /**
   * x mode returns the elements that hit-test at the current x coordinate
   */
  x: InteractionModeFunction;
  /**
   * y mode returns the elements that hit-test at the current y coordinate
   */
  y: InteractionModeFunction;
}

type InteractionMode = keyof InteractionModeMap;

declare const Interaction: {
  modes: InteractionModeMap;

  /**
   * Helper function to select candidate elements for interaction
   */
  evaluateInteractionItems(
    chart: Chart$4,
    axis: InteractionAxis,
    position: Point$1,
    handler: (element: Element & VisualElement, datasetIndex: number, index: number) => void,
    intersect?: boolean
  ): InteractionItem[];
};

declare const layouts: {
  /**
   * Register a box to a chart.
   * A box is simply a reference to an object that requires layout. eg. Scales, Legend, Title.
   * @param {Chart} chart - the chart to use
   * @param {LayoutItem} item - the item to add to be laid out
   */
  addBox(chart: Chart$4, item: LayoutItem): void;

  /**
   * Remove a layoutItem from a chart
   * @param {Chart} chart - the chart to remove the box from
   * @param {LayoutItem} layoutItem - the item to remove from the layout
   */
  removeBox(chart: Chart$4, layoutItem: LayoutItem): void;

  /**
   * Sets (or updates) options on the given `item`.
   * @param {Chart} chart - the chart in which the item lives (or will be added to)
   * @param {LayoutItem} item - the item to configure with the given options
   * @param options - the new item options.
   */
  configure(
    chart: Chart$4,
    item: LayoutItem,
    options: { fullSize?: number; position?: LayoutPosition; weight?: number }
  ): void;

  /**
   * Fits boxes of the given chart into the given size by having each box measure itself
   * then running a fitting algorithm
   * @param {Chart} chart - the chart
   * @param {number} width - the width to fit into
   * @param {number} height - the height to fit into
   */
  update(chart: Chart$4, width: number, height: number): void;
};

interface Plugin<TType extends ChartType = ChartType, O = AnyObject> extends ExtendedPlugin<TType, O> {
  id: string;

  /**
   * @desc Called when plugin is installed for this chart instance. This hook is also invoked for disabled plugins (options === false).
   * @param {Chart} chart - The chart instance.
   * @param {object} args - The call arguments.
   * @param {object} options - The plugin options.
   * @since 3.0.0
   */
  install?(chart: Chart$4, args: EmptyObject, options: O): void;
  /**
   * @desc Called when a plugin is starting. This happens when chart is created or plugin is enabled.
   * @param {Chart} chart - The chart instance.
   * @param {object} args - The call arguments.
   * @param {object} options - The plugin options.
   * @since 3.0.0
   */
  start?(chart: Chart$4, args: EmptyObject, options: O): void;
  /**
   * @desc Called when a plugin stopping. This happens when chart is destroyed or plugin is disabled.
   * @param {Chart} chart - The chart instance.
   * @param {object} args - The call arguments.
   * @param {object} options - The plugin options.
   * @since 3.0.0
   */
  stop?(chart: Chart$4, args: EmptyObject, options: O): void;
  /**
   * @desc Called before initializing `chart`.
   * @param {Chart} chart - The chart instance.
   * @param {object} args - The call arguments.
   * @param {object} options - The plugin options.
   */
  beforeInit?(chart: Chart$4, args: EmptyObject, options: O): void;
  /**
   * @desc Called after `chart` has been initialized and before the first update.
   * @param {Chart} chart - The chart instance.
   * @param {object} args - The call arguments.
   * @param {object} options - The plugin options.
   */
  afterInit?(chart: Chart$4, args: EmptyObject, options: O): void;
  /**
   * @desc Called before updating `chart`. If any plugin returns `false`, the update
   * is cancelled (and thus subsequent render(s)) until another `update` is triggered.
   * @param {Chart} chart - The chart instance.
   * @param {object} args - The call arguments.
   * @param {UpdateMode} args.mode - The update mode
   * @param {object} options - The plugin options.
   * @returns {boolean} `false` to cancel the chart update.
   */
  beforeUpdate?(chart: Chart$4, args: { mode: UpdateMode, cancelable: true }, options: O): boolean | void;
  /**
   * @desc Called after `chart` has been updated and before rendering. Note that this
   * hook will not be called if the chart update has been previously cancelled.
   * @param {Chart} chart - The chart instance.
   * @param {object} args - The call arguments.
   * @param {UpdateMode} args.mode - The update mode
   * @param {object} options - The plugin options.
   */
  afterUpdate?(chart: Chart$4, args: { mode: UpdateMode }, options: O): void;
  /**
   * @desc Called during the update process, before any chart elements have been created.
   * This can be used for data decimation by changing the data array inside a dataset.
   * @param {Chart} chart - The chart instance.
   * @param {object} args - The call arguments.
   * @param {object} options - The plugin options.
   */
  beforeElementsUpdate?(chart: Chart$4, args: EmptyObject, options: O): void;
  /**
   * @desc Called during chart reset
   * @param {Chart} chart - The chart instance.
   * @param {object} args - The call arguments.
   * @param {object} options - The plugin options.
   * @since version 3.0.0
   */
  reset?(chart: Chart$4, args: EmptyObject, options: O): void;
  /**
   * @desc Called before updating the `chart` datasets. If any plugin returns `false`,
   * the datasets update is cancelled until another `update` is triggered.
   * @param {Chart} chart - The chart instance.
   * @param {object} args - The call arguments.
   * @param {UpdateMode} args.mode - The update mode.
   * @param {object} options - The plugin options.
   * @returns {boolean} false to cancel the datasets update.
   * @since version 2.1.5
   */
  beforeDatasetsUpdate?(chart: Chart$4, args: { mode: UpdateMode }, options: O): boolean | void;
  /**
   * @desc Called after the `chart` datasets have been updated. Note that this hook
   * will not be called if the datasets update has been previously cancelled.
   * @param {Chart} chart - The chart instance.
   * @param {object} args - The call arguments.
   * @param {UpdateMode} args.mode - The update mode.
   * @param {object} options - The plugin options.
   * @since version 2.1.5
   */
  afterDatasetsUpdate?(chart: Chart$4, args: { mode: UpdateMode, cancelable: true }, options: O): void;
  /**
   * @desc Called before updating the `chart` dataset at the given `args.index`. If any plugin
   * returns `false`, the datasets update is cancelled until another `update` is triggered.
   * @param {Chart} chart - The chart instance.
   * @param {object} args - The call arguments.
   * @param {number} args.index - The dataset index.
   * @param {object} args.meta - The dataset metadata.
   * @param {UpdateMode} args.mode - The update mode.
   * @param {object} options - The plugin options.
   * @returns {boolean} `false` to cancel the chart datasets drawing.
   */
  beforeDatasetUpdate?(chart: Chart$4, args: { index: number; meta: ChartMeta, mode: UpdateMode, cancelable: true }, options: O): boolean | void;
  /**
   * @desc Called after the `chart` datasets at the given `args.index` has been updated. Note
   * that this hook will not be called if the datasets update has been previously cancelled.
   * @param {Chart} chart - The chart instance.
   * @param {object} args - The call arguments.
   * @param {number} args.index - The dataset index.
   * @param {object} args.meta - The dataset metadata.
   * @param {UpdateMode} args.mode - The update mode.
   * @param {object} options - The plugin options.
   */
  afterDatasetUpdate?(chart: Chart$4, args: { index: number; meta: ChartMeta, mode: UpdateMode, cancelable: false }, options: O): void;
  /**
   * @desc Called before laying out `chart`. If any plugin returns `false`,
   * the layout update is cancelled until another `update` is triggered.
   * @param {Chart} chart - The chart instance.
   * @param {object} args - The call arguments.
   * @param {object} options - The plugin options.
   * @returns {boolean} `false` to cancel the chart layout.
   */
  beforeLayout?(chart: Chart$4, args: { cancelable: true }, options: O): boolean | void;
  /**
   * @desc Called before scale data limits are calculated. This hook is called separately for each scale in the chart.
   * @param {Chart} chart - The chart instance.
   * @param {object} args - The call arguments.
   * @param {Scale} args.scale - The scale.
   * @param {object} options - The plugin options.
   */
  beforeDataLimits?(chart: Chart$4, args: { scale: Scale$2 }, options: O): void;
  /**
   * @desc Called after scale data limits are calculated. This hook is called separately for each scale in the chart.
   * @param {Chart} chart - The chart instance.
   * @param {object} args - The call arguments.
   * @param {Scale} args.scale - The scale.
   * @param {object} options - The plugin options.
   */
  afterDataLimits?(chart: Chart$4, args: { scale: Scale$2 }, options: O): void;
  /**
   * @desc Called before scale builds its ticks. This hook is called separately for each scale in the chart.
   * @param {Chart} chart - The chart instance.
   * @param {object} args - The call arguments.
   * @param {Scale} args.scale - The scale.
   * @param {object} options - The plugin options.
   */
  beforeBuildTicks?(chart: Chart$4, args: { scale: Scale$2 }, options: O): void;
  /**
   * @desc Called after scale has build its ticks. This hook is called separately for each scale in the chart.
   * @param {Chart} chart - The chart instance.
   * @param {object} args - The call arguments.
   * @param {Scale} args.scale - The scale.
   * @param {object} options - The plugin options.
   */
  afterBuildTicks?(chart: Chart$4, args: { scale: Scale$2 }, options: O): void;
  /**
   * @desc Called after the `chart` has been laid out. Note that this hook will not
   * be called if the layout update has been previously cancelled.
   * @param {Chart} chart - The chart instance.
   * @param {object} args - The call arguments.
   * @param {object} options - The plugin options.
   */
  afterLayout?(chart: Chart$4, args: EmptyObject, options: O): void;
  /**
   * @desc Called before rendering `chart`. If any plugin returns `false`,
   * the rendering is cancelled until another `render` is triggered.
   * @param {Chart} chart - The chart instance.
   * @param {object} args - The call arguments.
   * @param {object} options - The plugin options.
   * @returns {boolean} `false` to cancel the chart rendering.
   */
  beforeRender?(chart: Chart$4, args: { cancelable: true }, options: O): boolean | void;
  /**
   * @desc Called after the `chart` has been fully rendered (and animation completed). Note
   * that this hook will not be called if the rendering has been previously cancelled.
   * @param {Chart} chart - The chart instance.
   * @param {object} args - The call arguments.
   * @param {object} options - The plugin options.
   */
  afterRender?(chart: Chart$4, args: EmptyObject, options: O): void;
  /**
   * @desc Called before drawing `chart` at every animation frame. If any plugin returns `false`,
   * the frame drawing is cancelled untilanother `render` is triggered.
   * @param {Chart} chart - The chart instance.
   * @param {object} args - The call arguments.
   * @param {object} options - The plugin options.
   * @returns {boolean} `false` to cancel the chart drawing.
   */
  beforeDraw?(chart: Chart$4, args: { cancelable: true }, options: O): boolean | void;
  /**
   * @desc Called after the `chart` has been drawn. Note that this hook will not be called
   * if the drawing has been previously cancelled.
   * @param {Chart} chart - The chart instance.
   * @param {object} args - The call arguments.
   * @param {object} options - The plugin options.
   */
  afterDraw?(chart: Chart$4, args: EmptyObject, options: O): void;
  /**
   * @desc Called before drawing the `chart` datasets. If any plugin returns `false`,
   * the datasets drawing is cancelled until another `render` is triggered.
   * @param {Chart} chart - The chart instance.
   * @param {object} args - The call arguments.
   * @param {object} options - The plugin options.
   * @returns {boolean} `false` to cancel the chart datasets drawing.
   */
  beforeDatasetsDraw?(chart: Chart$4, args: { cancelable: true }, options: O): boolean | void;
  /**
   * @desc Called after the `chart` datasets have been drawn. Note that this hook
   * will not be called if the datasets drawing has been previously cancelled.
   * @param {Chart} chart - The chart instance.
   * @param {object} args - The call arguments.
   * @param {object} options - The plugin options.
   */
  afterDatasetsDraw?(chart: Chart$4, args: EmptyObject, options: O, cancelable: false): void;
  /**
   * @desc Called before drawing the `chart` dataset at the given `args.index` (datasets
   * are drawn in the reverse order). If any plugin returns `false`, the datasets drawing
   * is cancelled until another `render` is triggered.
   * @param {Chart} chart - The chart instance.
   * @param {object} args - The call arguments.
   * @param {number} args.index - The dataset index.
   * @param {object} args.meta - The dataset metadata.
   * @param {object} options - The plugin options.
   * @returns {boolean} `false` to cancel the chart datasets drawing.
   */
  beforeDatasetDraw?(chart: Chart$4, args: { index: number; meta: ChartMeta }, options: O): boolean | void;
  /**
   * @desc Called after the `chart` datasets at the given `args.index` have been drawn
   * (datasets are drawn in the reverse order). Note that this hook will not be called
   * if the datasets drawing has been previously cancelled.
   * @param {Chart} chart - The chart instance.
   * @param {object} args - The call arguments.
   * @param {number} args.index - The dataset index.
   * @param {object} args.meta - The dataset metadata.
   * @param {object} options - The plugin options.
   */
  afterDatasetDraw?(chart: Chart$4, args: { index: number; meta: ChartMeta }, options: O): void;
  /**
   * @desc Called before processing the specified `event`. If any plugin returns `false`,
   * the event will be discarded.
   * @param {Chart} chart - The chart instance.
   * @param {object} args - The call arguments.
   * @param {ChartEvent} args.event - The event object.
   * @param {boolean} args.replay - True if this event is replayed from `Chart.update`
   * @param {boolean} args.inChartArea - The event position is inside chartArea
   * @param {object} options - The plugin options.
   */
  beforeEvent?(chart: Chart$4, args: { event: ChartEvent$1, replay: boolean, cancelable: true, inChartArea: boolean }, options: O): boolean | void;
  /**
   * @desc Called after the `event` has been consumed. Note that this hook
   * will not be called if the `event` has been previously discarded.
   * @param {Chart} chart - The chart instance.
   * @param {object} args - The call arguments.
   * @param {ChartEvent} args.event - The event object.
   * @param {boolean} args.replay - True if this event is replayed from `Chart.update`
   * @param {boolean} args.inChartArea - The event position is inside chartArea
   * @param {boolean} [args.changed] - Set to true if the plugin needs a render. Should only be changed to true, because this args object is passed through all plugins.
   * @param {object} options - The plugin options.
   */
  afterEvent?(chart: Chart$4, args: { event: ChartEvent$1, replay: boolean, changed?: boolean, cancelable: false, inChartArea: boolean }, options: O): void;
  /**
   * @desc Called after the chart as been resized.
   * @param {Chart} chart - The chart instance.
   * @param {object} args - The call arguments.
   * @param {number} args.size - The new canvas display size (eq. canvas.style width & height).
   * @param {object} options - The plugin options.
   */
  resize?(chart: Chart$4, args: { size: { width: number, height: number } }, options: O): void;
  /**
   * Called before the chart is being destroyed.
   * @param {Chart} chart - The chart instance.
   * @param {object} args - The call arguments.
   * @param {object} options - The plugin options.
   */
  beforeDestroy?(chart: Chart$4, args: EmptyObject, options: O): void;
  /**
   * Called after the chart has been destroyed.
   * @param {Chart} chart - The chart instance.
   * @param {object} args - The call arguments.
   * @param {object} options - The plugin options.
   */
  afterDestroy?(chart: Chart$4, args: EmptyObject, options: O): void;
  /**
   * Called after chart is destroyed on all plugins that were installed for that chart. This hook is also invoked for disabled plugins (options === false).
   * @param {Chart} chart - The chart instance.
   * @param {object} args - The call arguments.
   * @param {object} options - The plugin options.
   * @since 3.0.0
   */
  uninstall?(chart: Chart$4, args: EmptyObject, options: O): void;

  /**
   * Default options used in the plugin
   */
  defaults?: Partial<O>;
}

declare type ChartComponentLike = ChartComponent | ChartComponent[] | { [key: string]: ChartComponent } | Plugin | Plugin[];

/**
 * Please use the module's default export which provides a singleton instance
 * Note: class is exported for typedoc
 */
interface Registry$1 {
  readonly controllers: TypedRegistry$1<DatasetController$1>;
  readonly elements: TypedRegistry$1<Element>;
  readonly plugins: TypedRegistry$1<Plugin>;
  readonly scales: TypedRegistry$1<Scale$2>;

  add(...args: ChartComponentLike[]): void;
  remove(...args: ChartComponentLike[]): void;

  addControllers(...args: ChartComponentLike[]): void;
  addElements(...args: ChartComponentLike[]): void;
  addPlugins(...args: ChartComponentLike[]): void;
  addScales(...args: ChartComponentLike[]): void;

  getController(id: string): DatasetController$1 | undefined;
  getElement(id: string): Element | undefined;
  getPlugin(id: string): Plugin | undefined;
  getScale(id: string): Scale$2 | undefined;
}

declare const registry: Registry$1;

interface Tick$1 {
  value: number;
  label?: string | string[];
  major?: boolean;
}

interface CoreScaleOptions {
  /**
   * Controls the axis global visibility (visible when true, hidden when false). When display: 'auto', the axis is visible only if at least one associated dataset is visible.
   * @default true
   */
  display: boolean | 'auto';
  /**
   * Align pixel values to device pixels
   */
  alignToPixels: boolean;
  /**
   * Reverse the scale.
   * @default false
   */
  reverse: boolean;
  /**
   * The weight used to sort the axis. Higher weights are further away from the chart area.
   * @default true
   */
  weight: number;
  /**
   * Callback called before the update process starts.
   */
  beforeUpdate(axis: Scale$2): void;
  /**
   * Callback that runs before dimensions are set.
   */
  beforeSetDimensions(axis: Scale$2): void;
  /**
   * Callback that runs after dimensions are set.
   */
  afterSetDimensions(axis: Scale$2): void;
  /**
   * Callback that runs before data limits are determined.
   */
  beforeDataLimits(axis: Scale$2): void;
  /**
   * Callback that runs after data limits are determined.
   */
  afterDataLimits(axis: Scale$2): void;
  /**
   * Callback that runs before ticks are created.
   */
  beforeBuildTicks(axis: Scale$2): void;
  /**
   * Callback that runs after ticks are created. Useful for filtering ticks.
   */
  afterBuildTicks(axis: Scale$2): void;
  /**
   * Callback that runs before ticks are converted into strings.
   */
  beforeTickToLabelConversion(axis: Scale$2): void;
  /**
   * Callback that runs after ticks are converted into strings.
   */
  afterTickToLabelConversion(axis: Scale$2): void;
  /**
   * Callback that runs before tick rotation is determined.
   */
  beforeCalculateLabelRotation(axis: Scale$2): void;
  /**
   * Callback that runs after tick rotation is determined.
   */
  afterCalculateLabelRotation(axis: Scale$2): void;
  /**
   * Callback that runs before the scale fits to the canvas.
   */
  beforeFit(axis: Scale$2): void;
  /**
   * Callback that runs after the scale fits to the canvas.
   */
  afterFit(axis: Scale$2): void;
  /**
   * Callback that runs at the end of the update process.
   */
  afterUpdate(axis: Scale$2): void;
}

interface Scale$2<O extends CoreScaleOptions = CoreScaleOptions> extends Element<unknown, O>, LayoutItem {
  readonly id: string;
  readonly type: string;
  readonly ctx: CanvasRenderingContext2D;
  readonly chart: Chart$4;

  maxWidth: number;
  maxHeight: number;

  paddingTop: number;
  paddingBottom: number;
  paddingLeft: number;
  paddingRight: number;

  axis: string;
  labelRotation: number;
  min: number;
  max: number;
  ticks: Tick$1[];
  getMatchingVisibleMetas(type?: string): ChartMeta[];

  drawTitle(chartArea: ChartArea): void;
  drawLabels(chartArea: ChartArea): void;
  drawGrid(chartArea: ChartArea): void;

  /**
   * @param {number} pixel
   * @return {number}
   */
  getDecimalForPixel(pixel: number): number;
  /**
   * Utility for getting the pixel location of a percentage of scale
   * The coordinate (0, 0) is at the upper-left corner of the canvas
   * @param {number} decimal
   * @return {number}
   */
  getPixelForDecimal(decimal: number): number;
  /**
   * Returns the location of the tick at the given index
   * The coordinate (0, 0) is at the upper-left corner of the canvas
   * @param {number} index
   * @return {number}
   */
  getPixelForTick(index: number): number;
  /**
   * Used to get the label to display in the tooltip for the given value
   * @param {*} value
   * @return {string}
   */
  getLabelForValue(value: number): string;

  /**
   * Returns the grid line width at given value
   */
  getLineWidthForValue(value: number): number;

  /**
   * Returns the location of the given data point. Value can either be an index or a numerical value
   * The coordinate (0, 0) is at the upper-left corner of the canvas
   * @param {*} value
   * @param {number} [index]
   * @return {number}
   */
  getPixelForValue(value: number, index?: number): number;

  /**
   * Used to get the data value from a given pixel. This is the inverse of getPixelForValue
   * The coordinate (0, 0) is at the upper-left corner of the canvas
   * @param {number} pixel
   * @return {*}
   */
  getValueForPixel(pixel: number): number | undefined;

  getBaseValue(): number;
  /**
   * Returns the pixel for the minimum chart value
   * The coordinate (0, 0) is at the upper-left corner of the canvas
   * @return {number}
   */
  getBasePixel(): number;

  init(options: O): void;
  parse(raw: unknown, index: number): unknown;
  getUserBounds(): { min: number; max: number; minDefined: boolean; maxDefined: boolean };
  getMinMax(canStack: boolean): { min: number; max: number };
  getTicks(): Tick$1[];
  getLabels(): string[];
  beforeUpdate(): void;
  configure(): void;
  afterUpdate(): void;
  beforeSetDimensions(): void;
  setDimensions(): void;
  afterSetDimensions(): void;
  beforeDataLimits(): void;
  determineDataLimits(): void;
  afterDataLimits(): void;
  beforeBuildTicks(): void;
  buildTicks(): Tick$1[];
  afterBuildTicks(): void;
  beforeTickToLabelConversion(): void;
  generateTickLabels(ticks: Tick$1[]): void;
  afterTickToLabelConversion(): void;
  beforeCalculateLabelRotation(): void;
  calculateLabelRotation(): void;
  afterCalculateLabelRotation(): void;
  beforeFit(): void;
  fit(): void;
  afterFit(): void;

  isFullSize(): boolean;
}
declare class Scale$2 {
  constructor(cfg: {id: string, type: string, ctx: CanvasRenderingContext2D, chart: Chart$4});
}

interface ScriptableScaleContext {
  chart: Chart$4;
  scale: Scale$2;
  index: number;
  tick: Tick$1;
}

interface ScriptableScalePointLabelContext {
  chart: Chart$4;
  scale: Scale$2;
  index: number;
  label: string;
  type: string;
}


declare const Ticks: {
  formatters: {
    /**
     * Formatter for value labels
     * @param value the value to display
     * @return {string|string[]} the label to display
     */
    values(value: unknown): string | string[];
    /**
     * Formatter for numeric ticks
     * @param tickValue the value to be formatted
     * @param index the position of the tickValue parameter in the ticks array
     * @param ticks the list of ticks being converted
     * @return string representation of the tickValue parameter
     */
    numeric(tickValue: number, index: number, ticks: { value: number }[]): string;
    /**
     * Formatter for logarithmic ticks
     * @param tickValue the value to be formatted
     * @param index the position of the tickValue parameter in the ticks array
     * @param ticks the list of ticks being converted
     * @return string representation of the tickValue parameter
     */
    logarithmic(tickValue: number, index: number, ticks: { value: number }[]): string;
  };
};

interface TypedRegistry$1<T> {
  /**
   * @param {ChartComponent} item
   * @returns {string} The scope where items defaults were registered to.
   */
  register(item: ChartComponent): string;
  get(id: string): T | undefined;
  unregister(item: ChartComponent): void;
}

interface ChartEvent$1 {
  type:
  | 'contextmenu'
  | 'mouseenter'
  | 'mousedown'
  | 'mousemove'
  | 'mouseup'
  | 'mouseout'
  | 'click'
  | 'dblclick'
  | 'keydown'
  | 'keypress'
  | 'keyup'
  | 'resize';
  native: Event | null;
  x: number | null;
  y: number | null;
}
interface ChartComponent {
  id: string;
  defaults?: AnyObject;
  defaultRoutes?: { [property: string]: string };

  beforeRegister?(): void;
  afterRegister?(): void;
  beforeUnregister?(): void;
  afterUnregister?(): void;
}

type InteractionAxis = 'x' | 'y' | 'xy' | 'r';

interface CoreInteractionOptions {
  /**
   * Sets which elements appear in the tooltip. See Interaction Modes for details.
   * @default 'nearest'
   */
  mode: InteractionMode;
  /**
   * if true, the hover mode only applies when the mouse position intersects an item on the chart.
   * @default true
   */
  intersect: boolean;

  /**
   * Defines which directions are used in calculating distances. Defaults to 'x' for 'index' mode and 'xy' in dataset and 'nearest' modes.
   */
  axis: InteractionAxis;

  /**
   * if true, the invisible points that are outside of the chart area will also be included when evaluating interactions.
   * @default false
   */
  includeInvisible: boolean;
}

interface CoreChartOptions<TType extends ChartType> extends ParsingOptions, AnimationOptions<TType> {

  datasets: {
    [key in ChartType]: ChartTypeRegistry[key]['datasetOptions']
  }

  /**
   * The base axis of the chart. 'x' for vertical charts and 'y' for horizontal charts.
   * @default 'x'
   */
  indexAxis: 'x' | 'y';

  /**
   * How to clip relative to chartArea. Positive value allows overflow, negative value clips that many pixels inside chartArea. 0 = clip at chartArea. Clipping can also be configured per side: `clip: {left: 5, top: false, right: -2, bottom: 0}`
   */
  clip: number | ChartArea | false;

  /**
   * base color
   * @see Defaults.color
   */
  color: Scriptable<Color, ScriptableContext<TType>>;
  /**
   * base background color
   * @see Defaults.backgroundColor
   */
  backgroundColor: Scriptable<Color, ScriptableContext<TType>>;
  /**
   * base border color
   * @see Defaults.borderColor
   */
  borderColor: Scriptable<Color, ScriptableContext<TType>>;
  /**
   * base font
   * @see Defaults.font
   */
  font: Partial<FontSpec>;
  /**
   * Resizes the chart canvas when its container does (important note...).
   * @default true
   */
  responsive: boolean;
  /**
   * Maintain the original canvas aspect ratio (width / height) when resizing.
   * @default true
   */
  maintainAspectRatio: boolean;
  /**
   * Delay the resize update by give amount of milliseconds. This can ease the resize process by debouncing update of the elements.
   * @default 0
   */
  resizeDelay: number;

  /**
   * Canvas aspect ratio (i.e. width / height, a value of 1 representing a square canvas). Note that this option is ignored if the height is explicitly defined either as attribute or via the style.
   * @default 2
   */
  aspectRatio: number;

  /**
   * Locale used for number formatting (using `Intl.NumberFormat`).
   * @default user's browser setting
   */
  locale: string;

  /**
   * Called when a resize occurs. Gets passed two arguments: the chart instance and the new size.
   */
  onResize(chart: Chart$4, size: { width: number; height: number }): void;

  /**
   * Override the window's default devicePixelRatio.
   * @default window.devicePixelRatio
   */
  devicePixelRatio: number;

  interaction: CoreInteractionOptions;

  hover: CoreInteractionOptions;

  /**
   * The events option defines the browser events that the chart should listen to for tooltips and hovering.
   * @default ['mousemove', 'mouseout', 'click', 'touchstart', 'touchmove']
   */
  events: (keyof HTMLElementEventMap)[]

  /**
   * Called when any of the events fire. Passed the event, an array of active elements (bars, points, etc), and the chart.
   */
  onHover(event: ChartEvent$1, elements: ActiveElement[], chart: Chart$4): void;

  /**
   * Called if the event is of type 'mouseup' or 'click'. Passed the event, an array of active elements, and the chart.
   */
  onClick(event: ChartEvent$1, elements: ActiveElement[], chart: Chart$4): void;

  layout: Partial<{
    autoPadding: boolean;
    padding: Scriptable<Padding, ScriptableContext<TType>>;
  }>;
}

type AnimationSpec<TType extends ChartType> = {
  /**
   * The number of milliseconds an animation takes.
   * @default 1000
   */
  duration?: Scriptable<number, ScriptableContext<TType>>;
  /**
   * Easing function to use
   * @default 'easeOutQuart'
   */
  easing?: Scriptable<EasingFunction, ScriptableContext<TType>>;

  /**
   * Delay before starting the animations.
   * @default 0
   */
  delay?: Scriptable<number, ScriptableContext<TType>>;

  /**
   *   If set to true, the animations loop endlessly.
   * @default false
   */
  loop?: Scriptable<boolean, ScriptableContext<TType>>;
}

type AnimationsSpec<TType extends ChartType> = {
  [name: string]: false | AnimationSpec<TType> & {
    properties: string[];

    /**
     * Type of property, determines the interpolator used. Possible values: 'number', 'color' and 'boolean'. Only really needed for 'color', because typeof does not get that right.
     */
    type: 'color' | 'number' | 'boolean';

    fn: <T>(from: T, to: T, factor: number) => T;

    /**
     * Start value for the animation. Current value is used when undefined
     */
    from: Scriptable<Color | number | boolean, ScriptableContext<TType>>;
    /**
     *
     */
    to: Scriptable<Color | number | boolean, ScriptableContext<TType>>;
  }
}

type TransitionSpec<TType extends ChartType> = {
  animation: AnimationSpec<TType>;
  animations: AnimationsSpec<TType>;
}

type TransitionsSpec<TType extends ChartType> = {
  [mode: string]: TransitionSpec<TType>
}

type AnimationOptions<TType extends ChartType> = {
  animation: false | AnimationSpec<TType> & {
    /**
     * Callback called on each step of an animation.
     */
    onProgress?: (this: Chart$4, event: AnimationEvent) => void;
    /**
     * Callback called when all animations are completed.
     */
    onComplete?: (this: Chart$4, event: AnimationEvent) => void;
  };
  animations: AnimationsSpec<TType>;
  transitions: TransitionsSpec<TType>;
};

interface FontSpec {
  /**
   * Default font family for all text, follows CSS font-family options.
   * @default "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif"
   */
  family: string;
  /**
   * Default font size (in px) for text. Does not apply to radialLinear scale point labels.
   * @default 12
   */
  size: number;
  /**
   * Default font style. Does not apply to tooltip title or footer. Does not apply to chart title. Follows CSS font-style options (i.e. normal, italic, oblique, initial, inherit)
   * @default 'normal'
   */
  style: 'normal' | 'italic' | 'oblique' | 'initial' | 'inherit';
  /**
   * Default font weight (boldness). (see MDN).
   */
  weight: string | null;
  /**
   * Height of an individual line of text (see MDN).
   * @default 1.2
   */
  lineHeight: number | string;
}

type TextAlign = 'left' | 'center' | 'right';
type Align = 'start' | 'center' | 'end';

interface VisualElement {
  draw(ctx: CanvasRenderingContext2D, area?: ChartArea): void;
  inRange(mouseX: number, mouseY: number, useFinalPosition?: boolean): boolean;
  inXRange(mouseX: number, useFinalPosition?: boolean): boolean;
  inYRange(mouseY: number, useFinalPosition?: boolean): boolean;
  getCenterPoint(useFinalPosition?: boolean): Point$1;
  getRange?(axis: 'x' | 'y'): number;
}

interface CommonElementOptions {
  borderWidth: number;
  borderColor: Color;
  backgroundColor: Color;
}

interface CommonHoverOptions {
  hoverBorderWidth: number;
  hoverBorderColor: Color;
  hoverBackgroundColor: Color;
}

interface Segment {
  start: number;
  end: number;
  loop: boolean;
}

interface ArcBorderRadius {
  outerStart: number;
  outerEnd: number;
  innerStart: number;
  innerEnd: number;
}

interface ArcOptions extends CommonElementOptions {
  /**
   * Arc stroke alignment.
   */
  borderAlign: 'center' | 'inner';

  /**
   * Line join style. See MDN. Default is 'round' when `borderAlign` is 'inner', else 'bevel'.
   */
  borderJoinStyle: CanvasLineJoin;

  /**
   * Sets the border radius for arcs
   * @default 0
   */
  borderRadius: number | ArcBorderRadius;

  /**
   * Arc offset (in pixels).
   */
  offset: number;

  /**
   * If false, Arc will be flat.
   * @default true
   */
  circular: boolean;

  /**
   * Spacing between arcs
   */
  spacing: number
}

interface ArcHoverOptions extends CommonHoverOptions {
  hoverOffset: number;
}

interface LineProps {
  points: Point$1[]
}

interface LineOptions extends CommonElementOptions {
  /**
   * Line cap style. See MDN.
   * @default 'butt'
   */
  borderCapStyle: CanvasLineCap;
  /**
   * Line dash. See MDN.
   * @default []
   */
  borderDash: number[];
  /**
   * Line dash offset. See MDN.
   * @default 0.0
   */
  borderDashOffset: number;
  /**
   * Line join style. See MDN.
   * @default 'miter'
   */
  borderJoinStyle: CanvasLineJoin;
  /**
   *   true to keep Bézier control inside the chart, false for no restriction.
   * @default true
   */
  capBezierPoints: boolean;
  /**
   * Interpolation mode to apply.
   * @default 'default'
   */
  cubicInterpolationMode: 'default' | 'monotone';
  /**
   * Bézier curve tension (0 for no Bézier curves).
   * @default 0
   */
  tension: number;
  /**
   * true to show the line as a stepped line (tension will be ignored).
   * @default false
   */
  stepped: 'before' | 'after' | 'middle' | boolean;
  /**
   * Both line and radar charts support a fill option on the dataset object which can be used to create area between two datasets or a dataset and a boundary, i.e. the scale origin, start or end
   */
  fill: FillTarget | ComplexFillTarget;
  /**
   * If true, lines will be drawn between points with no or null data. If false, points with NaN data will create a break in the line. Can also be a number specifying the maximum gap length to span. The unit of the value depends on the scale used.
   */
  spanGaps: boolean | number;

  segment: {
    backgroundColor: Scriptable<Color|undefined, ScriptableLineSegmentContext>,
    borderColor: Scriptable<Color|undefined, ScriptableLineSegmentContext>,
    borderCapStyle: Scriptable<CanvasLineCap|undefined, ScriptableLineSegmentContext>;
    borderDash: Scriptable<number[]|undefined, ScriptableLineSegmentContext>;
    borderDashOffset: Scriptable<number|undefined, ScriptableLineSegmentContext>;
    borderJoinStyle: Scriptable<CanvasLineJoin|undefined, ScriptableLineSegmentContext>;
    borderWidth: Scriptable<number|undefined, ScriptableLineSegmentContext>;
  };
}

interface LineHoverOptions extends CommonHoverOptions {
  hoverBorderCapStyle: CanvasLineCap;
  hoverBorderDash: number[];
  hoverBorderDashOffset: number;
  hoverBorderJoinStyle: CanvasLineJoin;
}

interface LineElement<T extends LineProps = LineProps, O extends LineOptions = LineOptions>
  extends Element<T, O>,
  VisualElement {
  updateControlPoints(chartArea: ChartArea, indexAxis?: 'x' | 'y'): void;
  points: Point$1[];
  readonly segments: Segment[];
  first(): Point$1 | false;
  last(): Point$1 | false;
  interpolate(point: Point$1, property: 'x' | 'y'): undefined | Point$1 | Point$1[];
  pathSegment(ctx: CanvasRenderingContext2D, segment: Segment, params: AnyObject): undefined | boolean;
  path(ctx: CanvasRenderingContext2D): boolean;
}

declare const LineElement: ChartComponent & {
  prototype: LineElement;
  new (cfg: AnyObject): LineElement;
};

type PointStyle =
  | 'circle'
  | 'cross'
  | 'crossRot'
  | 'dash'
  | 'line'
  | 'rect'
  | 'rectRounded'
  | 'rectRot'
  | 'star'
  | 'triangle'
  | HTMLImageElement
  | HTMLCanvasElement;

interface PointOptions extends CommonElementOptions {
  /**
   * Point radius
   * @default 3
   */
  radius: number;
  /**
   * Extra radius added to point radius for hit detection.
   * @default 1
   */
  hitRadius: number;
  /**
   * Point style
   * @default 'circle;
   */
  pointStyle: PointStyle;
  /**
   * Point rotation (in degrees).
   * @default 0
   */
  rotation: number;
  /**
   * Draw the active elements over the other elements of the dataset,
   * @default true
   */
  drawActiveElementsOnTop: boolean;
}

interface PointHoverOptions extends CommonHoverOptions {
  /**
   * Point radius when hovered.
   * @default 4
   */
  hoverRadius: number;
}

interface PointPrefixedOptions {
  /**
   * The fill color for points.
   */
  pointBackgroundColor: Color;
  /**
   * The border color for points.
   */
  pointBorderColor: Color;
  /**
   * The width of the point border in pixels.
   */
  pointBorderWidth: number;
  /**
   * The pixel size of the non-displayed point that reacts to mouse events.
   */
  pointHitRadius: number;
  /**
   * The radius of the point shape. If set to 0, the point is not rendered.
   */
  pointRadius: number;
  /**
   * The rotation of the point in degrees.
   */
  pointRotation: number;
  /**
   * Style of the point.
   */
  pointStyle: PointStyle;
}

interface PointPrefixedHoverOptions {
  /**
   * Point background color when hovered.
   */
  pointHoverBackgroundColor: Color;
  /**
   * Point border color when hovered.
   */
  pointHoverBorderColor: Color;
  /**
   * Border width of point when hovered.
   */
  pointHoverBorderWidth: number;
  /**
   * The radius of the point when hovered.
   */
  pointHoverRadius: number;
}

interface BarProps extends Point$1 {
  base: number;
  horizontal: boolean;
  width: number;
  height: number;
}

interface BarOptions extends Omit<CommonElementOptions, 'borderWidth'> {
  /**
   * The base value for the bar in data units along the value axis.
   */
  base: number;

  /**
   * Skipped (excluded) border: 'start', 'end', 'left',  'right', 'bottom', 'top', 'middle', false (none) or true (all).
   * @default 'start'
   */
  borderSkipped: 'start' | 'end' | 'left' | 'right' | 'bottom' | 'top' | 'middle' | boolean;

  /**
   * Border radius
   * @default 0
   */
  borderRadius: number | BorderRadius;

  /**
   * Amount to inflate the rectangle(s). This can be used to hide artifacts between bars.
   * Unit is pixels. 'auto' translates to 0.33 pixels when barPercentage * categoryPercentage is 1, else 0.
   * @default 'auto'
   */
  inflateAmount: number | 'auto';

  /**
   * Width of the border, number for all sides, object to specify width for each side specifically
   * @default 0
   */
  borderWidth: number | { top?: number, right?: number, bottom?: number, left?: number };
}

interface BorderRadius {
  topLeft: number;
  topRight: number;
  bottomLeft: number;
  bottomRight: number;
}

interface BarHoverOptions extends CommonHoverOptions {
  hoverBorderRadius: number | BorderRadius;
}

interface BarElement<
  T extends BarProps = BarProps,
  O extends BarOptions = BarOptions
> extends Element<T, O>, VisualElement {}

declare const BarElement: ChartComponent & {
  prototype: BarElement;
  new (cfg: AnyObject): BarElement;
};

interface ElementOptionsByType<TType extends ChartType> {
  arc: ScriptableAndArrayOptions<ArcOptions & ArcHoverOptions, ScriptableContext<TType>>;
  bar: ScriptableAndArrayOptions<BarOptions & BarHoverOptions, ScriptableContext<TType>>;
  line: ScriptableAndArrayOptions<LineOptions & LineHoverOptions, ScriptableContext<TType>>;
  point: ScriptableAndArrayOptions<PointOptions & PointHoverOptions, ScriptableContext<TType>>;
}

type ElementChartOptions<TType extends ChartType = ChartType> = {
  elements: ElementOptionsByType<TType>
};

declare class BasePlatform {
  /**
   * Called at chart construction time, returns a context2d instance implementing
   * the [W3C Canvas 2D Context API standard]{@link https://www.w3.org/TR/2dcontext/}.
   * @param {HTMLCanvasElement} canvas - The canvas from which to acquire context (platform specific)
   * @param options - The chart options
   */
  acquireContext(
    canvas: HTMLCanvasElement,
    options?: CanvasRenderingContext2DSettings
  ): CanvasRenderingContext2D | null;
  /**
   * Called at chart destruction time, releases any resources associated to the context
   * previously returned by the acquireContext() method.
   * @param {CanvasRenderingContext2D} context - The context2d instance
   * @returns {boolean} true if the method succeeded, else false
   */
  releaseContext(context: CanvasRenderingContext2D): boolean;
  /**
   * Registers the specified listener on the given chart.
   * @param {Chart} chart - Chart from which to listen for event
   * @param {string} type - The ({@link ChartEvent}) type to listen for
   * @param listener - Receives a notification (an object that implements
   * the {@link ChartEvent} interface) when an event of the specified type occurs.
   */
  addEventListener(chart: Chart$4, type: string, listener: (e: ChartEvent$1) => void): void;
  /**
   * Removes the specified listener previously registered with addEventListener.
   * @param {Chart} chart - Chart from which to remove the listener
   * @param {string} type - The ({@link ChartEvent}) type to remove
   * @param listener - The listener function to remove from the event target.
   */
  removeEventListener(chart: Chart$4, type: string, listener: (e: ChartEvent$1) => void): void;
  /**
   * @returns {number} the current devicePixelRatio of the device this platform is connected to.
   */
  getDevicePixelRatio(): number;
  /**
   * @param {HTMLCanvasElement} canvas - The canvas for which to calculate the maximum size
   * @param {number} [width] - Parent element's content width
   * @param {number} [height] - Parent element's content height
   * @param {number} [aspectRatio] - The aspect ratio to maintain
   * @returns { width: number, height: number } the maximum size available.
   */
  getMaximumSize(canvas: HTMLCanvasElement, width?: number, height?: number, aspectRatio?: number): { width: number, height: number };
  /**
   * @param {HTMLCanvasElement} canvas
   * @returns {boolean} true if the canvas is attached to the platform, false if not.
   */
  isAttached(canvas: HTMLCanvasElement): boolean;
  /**
   * Updates config with platform specific requirements
   * @param {ChartConfiguration | ChartConfigurationCustomTypes} config
   */
  updateConfig(config: ChartConfiguration | ChartConfigurationCustomTypesPerDataset): void;
}

declare class BasicPlatform extends BasePlatform {}
declare class DomPlatform extends BasePlatform {}

declare const Decimation: Plugin;

declare const enum DecimationAlgorithm {
  lttb = 'lttb',
  minmax = 'min-max',
}
interface BaseDecimationOptions {
  enabled: boolean;
  threshold?: number;
}

interface LttbDecimationOptions extends BaseDecimationOptions {
  algorithm: DecimationAlgorithm.lttb | 'lttb';
  samples?: number;
}

interface MinMaxDecimationOptions extends BaseDecimationOptions {
  algorithm: DecimationAlgorithm.minmax | 'min-max';
}

type DecimationOptions = LttbDecimationOptions | MinMaxDecimationOptions;

declare const Filler: Plugin;
interface FillerOptions {
  drawTime: 'beforeDatasetDraw' | 'beforeDatasetsDraw';
  propagate: boolean;
}

type FillTarget = number | string | { value: number } | 'start' | 'end' | 'origin' | 'stack' | 'shape' | boolean;

interface ComplexFillTarget {
  /**
   * The accepted values are the same as the filling mode values, so you may use absolute and relative dataset indexes and/or boundaries.
   */
  target: FillTarget;
  /**
   * If no color is set, the default color will be the background color of the chart.
   */
  above: Color;
  /**
   * Same as the above.
   */
  below: Color;
}

interface FillerControllerDatasetOptions {
  /**
   * Both line and radar charts support a fill option on the dataset object which can be used to create area between two datasets or a dataset and a boundary, i.e. the scale origin, start or end
   */
  fill: FillTarget | ComplexFillTarget;
}

declare const Legend: Plugin;

interface LegendItem {
  /**
   * Label that will be displayed
   */
  text: string;

  /**
   * Border radius of the legend box
   * @since 3.1.0
   */
  borderRadius?: number | BorderRadius;

  /**
   * Index of the associated dataset
   */
  datasetIndex?: number;

  /**
   * Index the associated label in the labels array
   */
  index?: number

  /**
   * Fill style of the legend box
   */
  fillStyle?: Color;

  /**
   * Font color for the text
   * Defaults to LegendOptions.labels.color
   */
  fontColor?: Color;

  /**
   * If true, this item represents a hidden dataset. Label will be rendered with a strike-through effect
   */
  hidden?: boolean;

  /**
   * For box border.
   * @see https://developer.mozilla.org/en/docs/Web/API/CanvasRenderingContext2D/lineCap
   */
  lineCap?: CanvasLineCap;

  /**
   * For box border.
   * @see https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/setLineDash
   */
  lineDash?: number[];

  /**
   * For box border.
   * @see https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset
   */
  lineDashOffset?: number;

  /**
   * For box border.
   * @see https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineJoin
   */
  lineJoin?: CanvasLineJoin;

  /**
   * Width of box border
   */
  lineWidth?: number;

  /**
   * Stroke style of the legend box
   */
  strokeStyle?: Color;

  /**
   * Point style of the legend box (only used if usePointStyle is true)
   */
  pointStyle?: PointStyle;

  /**
   * Rotation of the point in degrees (only used if usePointStyle is true)
   */
  rotation?: number;

  /**
   * Text alignment
   */
  textAlign?: TextAlign;
}

interface LegendElement<TType extends ChartType> extends Element<AnyObject, LegendOptions<TType>>, LayoutItem {
  chart: Chart$4<TType>;
  ctx: CanvasRenderingContext2D;
  legendItems?: LegendItem[];
  options: LegendOptions<TType>;
}

interface LegendOptions<TType extends ChartType> {
  /**
   * Is the legend shown?
   * @default true
   */
  display: boolean;
  /**
   * Position of the legend.
   * @default 'top'
   */
  position: LayoutPosition;
  /**
   * Alignment of the legend.
   * @default 'center'
   */
  align: Align;
  /**
   * Maximum height of the legend, in pixels
   */
  maxHeight: number;
  /**
   * Maximum width of the legend, in pixels
   */
  maxWidth: number;
  /**
   * Marks that this box should take the full width/height of the canvas (moving other boxes). This is unlikely to need to be changed in day-to-day use.
   * @default true
   */
  fullSize: boolean;
  /**
   * Legend will show datasets in reverse order.
   * @default false
   */
  reverse: boolean;
  /**
   * A callback that is called when a click event is registered on a label item.
   */
  onClick(this: LegendElement<TType>, e: ChartEvent$1, legendItem: LegendItem, legend: LegendElement<TType>): void;
  /**
   * A callback that is called when a 'mousemove' event is registered on top of a label item
   */
  onHover(this: LegendElement<TType>, e: ChartEvent$1, legendItem: LegendItem, legend: LegendElement<TType>): void;
  /**
   * A callback that is called when a 'mousemove' event is registered outside of a previously hovered label item.
   */
  onLeave(this: LegendElement<TType>, e: ChartEvent$1, legendItem: LegendItem, legend: LegendElement<TType>): void;

  labels: {
    /**
     * Width of colored box.
     * @default 40
     */
    boxWidth: number;
    /**
     * Height of the coloured box.
     * @default fontSize
     */
    boxHeight: number;
    /**
     * Padding between the color box and the text
     * @default 1
     */
    boxPadding: number;
    /**
     * Color of label
     * @see Defaults.color
     */
    color: Color;
    /**
     * Font of label
     * @see Defaults.font
     */
    font: ScriptableAndScriptableOptions<Partial<FontSpec>, ScriptableChartContext>;
    /**
     * Padding between rows of colored boxes.
     * @default 10
     */
    padding: number;
    /**
     * Generates legend items for each thing in the legend. Default implementation returns the text + styling for the color box. See Legend Item for details.
     */
    generateLabels(chart: Chart$4): LegendItem[];

    /**
     * Filters legend items out of the legend. Receives 2 parameters, a Legend Item and the chart data
     */
    filter(item: LegendItem, data: ChartData): boolean;

    /**
     * Sorts the legend items
     */
    sort(a: LegendItem, b: LegendItem, data: ChartData): number;

    /**
     * Override point style for the legend. Only applies if usePointStyle is true
     */
    pointStyle: PointStyle;

    /**
     * Text alignment
     */
    textAlign?: TextAlign;

    /**
     * Label style will match corresponding point style (size is based on the minimum value between boxWidth and font.size).
     * @default false
     */
    usePointStyle: boolean;

    /**
     * Label borderRadius will match corresponding borderRadius.
     * @default false
     */
    useBorderRadius: boolean;

    /**
     * Override the borderRadius to use.
     * @default undefined
     */
    borderRadius: number;
  };
  /**
   * true for rendering the legends from right to left.
   */
  rtl: boolean;
  /**
   * This will force the text direction 'rtl' or 'ltr' on the canvas for rendering the legend, regardless of the css specified on the canvas
   * @default canvas' default
   */
  textDirection: string;

  title: {
    /**
     * Is the legend title displayed.
     * @default false
     */
    display: boolean;
    /**
     * Color of title
     * @see Defaults.color
     */
    color: Color;
    /**
     * see Fonts
     */
    font: ScriptableAndScriptableOptions<Partial<FontSpec>, ScriptableChartContext>;
    position: 'center' | 'start' | 'end';
    padding?: number | ChartArea;
    /**
     * The string title.
     */
    text: string;
  };
}

declare const SubTitle: Plugin;
declare const Title: Plugin;

interface TitleOptions {
  /**
   * Alignment of the title.
   * @default 'center'
   */
  align: Align;
  /**
   * Is the title shown?
   * @default false
   */
  display: boolean;
  /**
   * Position of title
   * @default 'top'
   */
  position: 'top' | 'left' | 'bottom' | 'right';
  /**
   * Color of text
   * @see Defaults.color
   */
  color: Color;
  font: ScriptableAndScriptableOptions<Partial<FontSpec>, ScriptableChartContext>;

  /**
   * Marks that this box should take the full width/height of the canvas (moving other boxes). If set to `false`, places the box above/beside the
   * chart area
   * @default true
   */
  fullSize: boolean;
  /**
   *   Adds padding above and below the title text if a single number is specified. It is also possible to change top and bottom padding separately.
   */
  padding: number | { top: number; bottom: number };
  /**
   *   Title text to display. If specified as an array, text is rendered on multiple lines.
   */
  text: string | string[];
}

type TooltipXAlignment = 'left' | 'center' | 'right';
type TooltipYAlignment = 'top' | 'center' | 'bottom';
interface TooltipLabelStyle {
  borderColor: Color;
  backgroundColor: Color;

  /**
   * Width of border line
   * @since 3.1.0
   */
  borderWidth?: number;

  /**
   * Border dash
   * @since 3.1.0
   */
  borderDash?: [number, number];

  /**
   * Border dash offset
   * @since 3.1.0
   */
  borderDashOffset?: number;

  /**
   * borderRadius
   * @since 3.1.0
   */
  borderRadius?: number | BorderRadius;
}
interface TooltipModel<TType extends ChartType> extends Element<AnyObject, TooltipOptions<TType>> {
  readonly chart: Chart$4<TType>;

  // The items that we are rendering in the tooltip. See Tooltip Item Interface section
  dataPoints: TooltipItem<TType>[];

  // Positioning
  xAlign: TooltipXAlignment;
  yAlign: TooltipYAlignment;

  // X and Y properties are the top left of the tooltip
  x: number;
  y: number;
  width: number;
  height: number;
  // Where the tooltip points to
  caretX: number;
  caretY: number;

  // Body
  // The body lines that need to be rendered
  // Each object contains 3 parameters
  // before: string[] // lines of text before the line with the color square
  // lines: string[]; // lines of text to render as the main item with color square
  // after: string[]; // lines of text to render after the main lines
  body: { before: string[]; lines: string[]; after: string[] }[];
  // lines of text that appear after the title but before the body
  beforeBody: string[];
  // line of text that appear after the body and before the footer
  afterBody: string[];

  // Title
  // lines of text that form the title
  title: string[];

  // Footer
  // lines of text that form the footer
  footer: string[];

  // Styles to render for each item in body[]. This is the styling of the squares in the tooltip
  labelColors: TooltipLabelStyle[];
  labelTextColors: Color[];
  labelPointStyles: { pointStyle: PointStyle; rotation: number }[];

  // 0 opacity is a hidden tooltip
  opacity: number;

  // tooltip options
  options: TooltipOptions<TType>;

  getActiveElements(): ActiveElement[];
  setActiveElements(active: ActiveDataPoint[], eventPosition: Point$1): void;
}

interface TooltipPosition extends Point$1 {
  xAlign?: TooltipXAlignment;
  yAlign?: TooltipYAlignment;
}

type TooltipPositionerFunction<TType extends ChartType> = (
  this: TooltipModel<TType>,
  items: readonly ActiveElement[],
  eventPosition: Point$1
) => TooltipPosition | false;

interface TooltipPositionerMap {
  average: TooltipPositionerFunction<ChartType>;
  nearest: TooltipPositionerFunction<ChartType>;
}

type TooltipPositioner = keyof TooltipPositionerMap;

interface Tooltip extends Plugin {
  readonly positioners: TooltipPositionerMap;
}

declare const Tooltip: Tooltip;

interface TooltipCallbacks<
  TType extends ChartType,
  Model = TooltipModel<TType>,
  Item = TooltipItem<TType>> {

  beforeTitle(this: Model, tooltipItems: Item[]): string | string[] | void;
  title(this: Model, tooltipItems: Item[]): string | string[] | void;
  afterTitle(this: Model, tooltipItems: Item[]): string | string[] | void;

  beforeBody(this: Model, tooltipItems: Item[]): string | string[] | void;
  afterBody(this: Model, tooltipItems: Item[]): string | string[] | void;

  beforeLabel(this: Model, tooltipItem: Item): string | string[] | void;
  label(this: Model, tooltipItem: Item): string | string[] | void;
  afterLabel(this: Model, tooltipItem: Item): string | string[] | void;

  labelColor(this: Model, tooltipItem: Item): TooltipLabelStyle | void;
  labelTextColor(this: Model, tooltipItem: Item): Color | void;
  labelPointStyle(this: Model, tooltipItem: Item): { pointStyle: PointStyle; rotation: number } | void;

  beforeFooter(this: Model, tooltipItems: Item[]): string | string[] | void;
  footer(this: Model, tooltipItems: Item[]): string | string[] | void;
  afterFooter(this: Model, tooltipItems: Item[]): string | string[] | void;
}

interface ExtendedPlugin<
  TType extends ChartType,
  O = AnyObject,
  Model = TooltipModel<TType>> {
  /**
   * @desc Called before drawing the `tooltip`. If any plugin returns `false`,
   * the tooltip drawing is cancelled until another `render` is triggered.
   * @param {Chart} chart - The chart instance.
   * @param {object} args - The call arguments.
   * @param {Tooltip} args.tooltip - The tooltip.
   * @param {object} options - The plugin options.
   * @returns {boolean} `false` to cancel the chart tooltip drawing.
   */
  beforeTooltipDraw?(chart: Chart$4, args: { tooltip: Model, cancelable: true }, options: O): boolean | void;
  /**
   * @desc Called after drawing the `tooltip`. Note that this hook will not
   * be called if the tooltip drawing has been previously cancelled.
   * @param {Chart} chart - The chart instance.
   * @param {object} args - The call arguments.
   * @param {Tooltip} args.tooltip - The tooltip.
   * @param {object} options - The plugin options.
   */
  afterTooltipDraw?(chart: Chart$4, args: { tooltip: Model }, options: O): void;
}

interface ScriptableTooltipContext<TType extends ChartType> {
  chart: UnionToIntersection<Chart$4<TType>>;
  tooltip: UnionToIntersection<TooltipModel<TType>>;
  tooltipItems: TooltipItem<TType>[];
}

interface TooltipOptions<TType extends ChartType = ChartType> extends CoreInteractionOptions {
  /**
   * Are on-canvas tooltips enabled?
   * @default true
   */
  enabled: Scriptable<boolean, ScriptableTooltipContext<TType>>;
  /**
   *   See external tooltip section.
   */
  external(this: TooltipModel<TType>, args: { chart: Chart$4; tooltip: TooltipModel<TType> }): void;
  /**
   * The mode for positioning the tooltip
   */
  position: Scriptable<TooltipPositioner, ScriptableTooltipContext<TType>>

  /**
   * Override the tooltip alignment calculations
   */
  xAlign: Scriptable<TooltipXAlignment, ScriptableTooltipContext<TType>>;
  yAlign: Scriptable<TooltipYAlignment, ScriptableTooltipContext<TType>>;

  /**
   * Sort tooltip items.
   */
  itemSort: (a: TooltipItem<TType>, b: TooltipItem<TType>, data: ChartData) => number;

  filter: (e: TooltipItem<TType>, index: number, array: TooltipItem<TType>[], data: ChartData) => boolean;

  /**
   * Background color of the tooltip.
   * @default 'rgba(0, 0, 0, 0.8)'
   */
  backgroundColor: Scriptable<Color, ScriptableTooltipContext<TType>>;
  /**
   * Padding between the color box and the text.
   * @default 1
   */
  boxPadding: number;
  /**
   * Color of title
   * @default '#fff'
   */
  titleColor: Scriptable<Color, ScriptableTooltipContext<TType>>;
  /**
   * See Fonts
   * @default {weight: 'bold'}
   */
  titleFont: ScriptableAndScriptableOptions<Partial<FontSpec>, ScriptableTooltipContext<TType>>;
  /**
   * Spacing to add to top and bottom of each title line.
   * @default 2
   */
  titleSpacing: Scriptable<number, ScriptableTooltipContext<TType>>;
  /**
   * Margin to add on bottom of title section.
   * @default 6
   */
  titleMarginBottom: Scriptable<number, ScriptableTooltipContext<TType>>;
  /**
   * Horizontal alignment of the title text lines.
   * @default 'left'
   */
  titleAlign: Scriptable<TextAlign, ScriptableTooltipContext<TType>>;
  /**
   * Spacing to add to top and bottom of each tooltip item.
   * @default 2
   */
  bodySpacing: Scriptable<number, ScriptableTooltipContext<TType>>;
  /**
   * Color of body
   * @default '#fff'
   */
  bodyColor: Scriptable<Color, ScriptableTooltipContext<TType>>;
  /**
   * See Fonts.
   * @default {}
   */
  bodyFont: ScriptableAndScriptableOptions<Partial<FontSpec>, ScriptableTooltipContext<TType>>;
  /**
   * Horizontal alignment of the body text lines.
   * @default 'left'
   */
  bodyAlign: Scriptable<TextAlign, ScriptableTooltipContext<TType>>;
  /**
   * Spacing to add to top and bottom of each footer line.
   * @default 2
   */
  footerSpacing: Scriptable<number, ScriptableTooltipContext<TType>>;
  /**
   * Margin to add before drawing the footer.
   * @default 6
   */
  footerMarginTop: Scriptable<number, ScriptableTooltipContext<TType>>;
  /**
   * Color of footer
   * @default '#fff'
   */
  footerColor: Scriptable<Color, ScriptableTooltipContext<TType>>;
  /**
   * See Fonts
   * @default {weight: 'bold'}
   */
  footerFont: ScriptableAndScriptableOptions<Partial<FontSpec>, ScriptableTooltipContext<TType>>;
  /**
   * Horizontal alignment of the footer text lines.
   * @default 'left'
   */
  footerAlign: Scriptable<TextAlign, ScriptableTooltipContext<TType>>;
  /**
   * Padding to add to the tooltip
   * @default 6
   */
  padding: Scriptable<Padding, ScriptableTooltipContext<TType>>;
  /**
   * Extra distance to move the end of the tooltip arrow away from the tooltip point.
   * @default 2
   */
  caretPadding: Scriptable<number, ScriptableTooltipContext<TType>>;
  /**
   * Size, in px, of the tooltip arrow.
   * @default 5
   */
  caretSize: Scriptable<number, ScriptableTooltipContext<TType>>;
  /**
   * Radius of tooltip corner curves.
   * @default 6
   */
  cornerRadius: Scriptable<number | BorderRadius, ScriptableTooltipContext<TType>>;
  /**
   * Color to draw behind the colored boxes when multiple items are in the tooltip.
   * @default '#fff'
   */
  multiKeyBackground: Scriptable<Color, ScriptableTooltipContext<TType>>;
  /**
   * If true, color boxes are shown in the tooltip.
   * @default true
   */
  displayColors: Scriptable<boolean, ScriptableTooltipContext<TType>>;
  /**
   * Width of the color box if displayColors is true.
   * @default bodyFont.size
   */
  boxWidth: Scriptable<number, ScriptableTooltipContext<TType>>;
  /**
   * Height of the color box if displayColors is true.
   * @default bodyFont.size
   */
  boxHeight: Scriptable<number, ScriptableTooltipContext<TType>>;
  /**
   * Use the corresponding point style (from dataset options) instead of color boxes, ex: star, triangle etc. (size is based on the minimum value between boxWidth and boxHeight)
   * @default false
   */
  usePointStyle: Scriptable<boolean, ScriptableTooltipContext<TType>>;
  /**
   * Color of the border.
   * @default 'rgba(0, 0, 0, 0)'
   */
  borderColor: Scriptable<Color, ScriptableTooltipContext<TType>>;
  /**
   * Size of the border.
   * @default 0
   */
  borderWidth: Scriptable<number, ScriptableTooltipContext<TType>>;
  /**
   * true for rendering the legends from right to left.
   */
  rtl: Scriptable<boolean, ScriptableTooltipContext<TType>>;

  /**
   * This will force the text direction 'rtl' or 'ltr on the canvas for rendering the tooltips, regardless of the css specified on the canvas
   * @default canvas's default
   */
  textDirection: Scriptable<string, ScriptableTooltipContext<TType>>;

  animation: AnimationSpec<TType> | false;
  animations: AnimationsSpec<TType> | false;
  callbacks: TooltipCallbacks<TType>;
}

interface TooltipItem<TType extends ChartType> {
  /**
   * The chart the tooltip is being shown on
   */
  chart: Chart$4;

  /**
   * Label for the tooltip
   */
  label: string;

  /**
   * Parsed data values for the given `dataIndex` and `datasetIndex`
   */
  parsed: UnionToIntersection<ParsedDataType<TType>>;

  /**
   * Raw data values for the given `dataIndex` and `datasetIndex`
   */
  raw: unknown;

  /**
   * Formatted value for the tooltip
   */
  formattedValue: string;

  /**
   * The dataset the item comes from
   */
  dataset: UnionToIntersection<ChartDataset<TType>>;

  /**
   * Index of the dataset the item comes from
   */
  datasetIndex: number;

  /**
   * Index of this data item in the dataset
   */
  dataIndex: number;

  /**
   * The chart element (point, arc, bar, etc.) for this tooltip item
   */
  element: Element;
}

interface PluginOptionsByType<TType extends ChartType> {
  decimation: DecimationOptions;
  filler: FillerOptions;
  legend: LegendOptions<TType>;
  subtitle: TitleOptions;
  title: TitleOptions;
  tooltip: TooltipOptions<TType>;
}
interface PluginChartOptions<TType extends ChartType> {
  plugins: PluginOptionsByType<TType>;
}

interface BorderOptions {
  /**
   * @default true
   */
  display: boolean
  /**
   * @default []
   */
  dash: Scriptable<number[], ScriptableScaleContext>;
  /**
   * @default 0
   */
  dashOffset: Scriptable<number, ScriptableScaleContext>;
  color: Color;
  width: number;
}

interface GridLineOptions {
  /**
   * @default true
   */
  display: boolean;
  /**
   * @default false
   */
  circular: boolean;
  /**
   * @default 'rgba(0, 0, 0, 0.1)'
   */
  color: ScriptableAndArray<Color, ScriptableScaleContext>;
  /**
   * @default 1
   */
  lineWidth: ScriptableAndArray<number, ScriptableScaleContext>;
  /**
   * @default true
   */
  drawOnChartArea: boolean;
  /**
   * @default true
   */
  drawTicks: boolean;
  /**
   * @default []
   */
  tickBorderDash: number[];
  /**
   * @default 0
   */
  tickBorderDashOffset: Scriptable<number, ScriptableScaleContext>;
  /**
   * @default 'rgba(0, 0, 0, 0.1)'
   */
  tickColor: ScriptableAndArray<Color, ScriptableScaleContext>;
  /**
   * @default 10
   */
  tickLength: number;
  /**
   * @default 1
   */
  tickWidth: number;
  /**
   * @default false
   */
  offset: boolean;
  /**
   * @default 0
   */
  z: number;
}

interface TickOptions {
  /**
   * Color of label backdrops.
   * @default 'rgba(255, 255, 255, 0.75)'
   */
  backdropColor: Scriptable<Color, ScriptableScaleContext>;
  /**
   * Padding of tick backdrop.
   * @default 2
   */
  backdropPadding: number | ChartArea;

  /**
   * Returns the string representation of the tick value as it should be displayed on the chart. See callback.
   */
  callback: (this: Scale$2, tickValue: number | string, index: number, ticks: Tick$1[]) => string | string[] | number | number[] | null | undefined;
  /**
   * If true, show tick labels.
   * @default true
   */
  display: boolean;
  /**
   * Color of tick
   * @see Defaults.color
   */
  color: ScriptableAndArray<Color, ScriptableScaleContext>;
  /**
   * see Fonts
   */
  font: ScriptableAndScriptableOptions<Partial<FontSpec>, ScriptableScaleContext>;
  /**
   * Sets the offset of the tick labels from the axis
   */
  padding: number;
  /**
   * If true, draw a background behind the tick labels.
   * @default false
   */
  showLabelBackdrop: Scriptable<boolean, ScriptableScaleContext>;
  /**
   * The color of the stroke around the text.
   * @default undefined
   */
  textStrokeColor: Scriptable<Color, ScriptableScaleContext>;
  /**
   * Stroke width around the text.
   * @default 0
   */
  textStrokeWidth: Scriptable<number, ScriptableScaleContext>;
  /**
   * z-index of tick layer. Useful when ticks are drawn on chart area. Values <= 0 are drawn under datasets, > 0 on top.
   * @default 0
   */
  z: number;

  major: {
    /**
     * If true, major ticks are generated. A major tick will affect autoskipping and major will be defined on ticks in the scriptable options context.
     * @default false
     */
    enabled: boolean;
  };
}

type CartesianTickOptions = TickOptions & {
  /**
   * The number of ticks to examine when deciding how many labels will fit. Setting a smaller value will be faster, but may be less accurate when there is large variability in label length.
   * @default ticks.length
   */
  sampleSize: number;
  /**
   * The label alignment
   * @default 'center'
   */
  align: Align | 'inner';
  /**
   *   If true, automatically calculates how many labels can be shown and hides labels accordingly. Labels will be rotated up to maxRotation before skipping any. Turn autoSkip off to show all labels no matter what.
   * @default true
   */
  autoSkip: boolean;
  /**
   * Padding between the ticks on the horizontal axis when autoSkip is enabled.
   * @default 0
   */
  autoSkipPadding: number;

  /**
   * How is the label positioned perpendicular to the axis direction.
   * This only applies when the rotation is 0 and the axis position is one of "top", "left", "right", or "bottom"
   * @default 'near'
   */
  crossAlign: 'near' | 'center' | 'far';

  /**
   * Should the defined `min` and `max` values be presented as ticks even if they are not "nice".
   * @default: true
   */
  includeBounds: boolean;

  /**
   * Distance in pixels to offset the label from the centre point of the tick (in the x direction for the x axis, and the y direction for the y axis). Note: this can cause labels at the edges to be cropped by the edge of the canvas
   * @default 0
   */
  labelOffset: number;

  /**
   * Minimum rotation for tick labels. Note: Only applicable to horizontal scales.
   * @default 0
   */
  minRotation: number;
  /**
   * Maximum rotation for tick labels when rotating to condense labels. Note: Rotation doesn't occur until necessary. Note: Only applicable to horizontal scales.
   * @default 50
   */
  maxRotation: number;
  /**
   * Flips tick labels around axis, displaying the labels inside the chart instead of outside. Note: Only applicable to vertical scales.
   * @default false
   */
  mirror: boolean;
  /**
   *   Padding between the tick label and the axis. When set on a vertical axis, this applies in the horizontal (X) direction. When set on a horizontal axis, this applies in the vertical (Y) direction.
   * @default 0
   */
  padding: number;
  /**
   * Maximum number of ticks and gridlines to show.
   * @default 11
   */
  maxTicksLimit: number;
}

interface ScriptableCartesianScaleContext {
  scale: keyof CartesianScaleTypeRegistry;
  type: string;
}

interface ScriptableChartContext {
  chart: Chart$4;
  type: string;
}

interface CartesianScaleOptions extends CoreScaleOptions {
  /**
   * Scale boundary strategy (bypassed by min/max time options)
   * - `data`: make sure data are fully visible, ticks outside are removed
   * - `ticks`: make sure ticks are fully visible, data outside are truncated
   * @since 2.7.0
   * @default 'ticks'
   */
  bounds: 'ticks' | 'data';

  /**
   * Position of the axis.
   */
  position: 'left' | 'top' | 'right' | 'bottom' | 'center' | { [scale: string]: number };

  /**
   * Stack group. Axes at the same `position` with same `stack` are stacked.
   */
  stack?: string;

  /**
   * Weight of the scale in stack group. Used to determine the amount of allocated space for the scale within the group.
   * @default 1
   */
  stackWeight?: number;

  /**
   *   Which type of axis this is. Possible values are: 'x', 'y', 'r'. If not set, this is inferred from the first character of the ID which should be 'x', 'y' or 'r'.
   */
  axis: 'x' | 'y' | 'r';

  /**
   * User defined minimum value for the scale, overrides minimum value from data.
   */
  min: number;

  /**
   * User defined maximum value for the scale, overrides maximum value from data.
   */
  max: number;

  /**
   *   If true, extra space is added to the both edges and the axis is scaled to fit into the chart area. This is set to true for a bar chart by default.
   * @default false
   */
  offset: boolean;

  grid: Partial<GridLineOptions>;

  border: BorderOptions;

  /** Options for the scale title. */
  title: {
    /** If true, displays the axis title. */
    display: boolean;
    /** Alignment of the axis title. */
    align: Align;
    /** The text for the title, e.g. "# of People" or "Response Choices". */
    text: string | string[];
    /** Color of the axis label. */
    color: Color;
    /** Information about the axis title font. */
    font: ScriptableAndScriptableOptions<Partial<FontSpec>, ScriptableCartesianScaleContext>;
    /** Padding to apply around scale labels. */
    padding: number | {
      /** Padding on the (relative) top side of this axis label. */
      top: number;
      /** Padding on the (relative) bottom side of this axis label. */
      bottom: number;
      /** This is a shorthand for defining top/bottom to the same values. */
      y: number;
    };
  };

  /**
   *   If true, data will be comprised between datasets of data
   * @default false
   */
  stacked?: boolean | 'single';

  ticks: CartesianTickOptions;
}

type CategoryScaleOptions = Omit<CartesianScaleOptions, 'min' | 'max'> & {
  min: string | number;
  max: string | number;
  labels: string[] | string[][];
};

type CategoryScale<O extends CategoryScaleOptions = CategoryScaleOptions> = Scale$2<O>
declare const CategoryScale: ChartComponent & {
  prototype: CategoryScale;
  new <O extends CategoryScaleOptions = CategoryScaleOptions>(cfg: AnyObject): CategoryScale<O>;
};

type LinearScaleOptions = CartesianScaleOptions & {

  /**
   *  if true, scale will include 0 if it is not already included.
   * @default true
   */
  beginAtZero: boolean;
  /**
   * Adjustment used when calculating the maximum data value.
   */
  suggestedMin?: number;
  /**
   * Adjustment used when calculating the minimum data value.
   */
  suggestedMax?: number;
  /**
  * Percentage (string ending with %) or amount (number) for added room in the scale range above and below data.
  */
  grace?: string | number;

  ticks: {
    /**
     * The Intl.NumberFormat options used by the default label formatter
     */
    format: Intl.NumberFormatOptions;

    /**
     * if defined and stepSize is not specified, the step size will be rounded to this many decimal places.
     */
    precision: number;

    /**
     * User defined fixed step size for the scale
     */
    stepSize: number;

    /**
     * User defined count of ticks
     */
    count: number;
  };
};

type LinearScale<O extends LinearScaleOptions = LinearScaleOptions> = Scale$2<O>
declare const LinearScale: ChartComponent & {
  prototype: LinearScale;
  new <O extends LinearScaleOptions = LinearScaleOptions>(cfg: AnyObject): LinearScale<O>;
};

type LogarithmicScaleOptions = CartesianScaleOptions & {
  /**
   * Adjustment used when calculating the maximum data value.
   */
  suggestedMin?: number;
  /**
   * Adjustment used when calculating the minimum data value.
   */
  suggestedMax?: number;

  ticks: {
    /**
     * The Intl.NumberFormat options used by the default label formatter
     */
    format: Intl.NumberFormatOptions;
  };
};

type LogarithmicScale<O extends LogarithmicScaleOptions = LogarithmicScaleOptions> = Scale$2<O>
declare const LogarithmicScale: ChartComponent & {
  prototype: LogarithmicScale;
  new <O extends LogarithmicScaleOptions = LogarithmicScaleOptions>(cfg: AnyObject): LogarithmicScale<O>;
};

type TimeScaleOptions = Omit<CartesianScaleOptions, 'min' | 'max'> & {
  min: string | number;
  max: string | number;
  suggestedMin: string | number;
  suggestedMax: string | number;
  /**
   * Scale boundary strategy (bypassed by min/max time options)
   * - `data`: make sure data are fully visible, ticks outside are removed
   * - `ticks`: make sure ticks are fully visible, data outside are truncated
   * @since 2.7.0
   * @default 'data'
   */
  bounds: 'ticks' | 'data';

  /**
   * If true, bar chart offsets are computed with skipped tick sizes
   * @since 3.8.0
   * @default false
   */
  offsetAfterAutoskip: boolean;

  /**
   * options for creating a new adapter instance
   */
  adapters: {
    date: unknown;
  };

  time: {
    /**
     * Custom parser for dates.
     */
    parser: string | ((v: unknown) => number);
    /**
     * If defined, dates will be rounded to the start of this unit. See Time Units below for the allowed units.
     */
    round: false | TimeUnit;
    /**
     * If boolean and true and the unit is set to 'week', then the first day of the week will be Monday. Otherwise, it will be Sunday.
     * If `number`, the index of the first day of the week (0 - Sunday, 6 - Saturday).
     * @default false
     */
    isoWeekday: boolean | number;
    /**
     * Sets how different time units are displayed.
     */
    displayFormats: {
      [key: string]: string;
    };
    /**
     * The format string to use for the tooltip.
     */
    tooltipFormat: string;
    /**
     * If defined, will force the unit to be a certain type. See Time Units section below for details.
     * @default false
     */
    unit: false | TimeUnit;
    /**
     * The minimum display format to be used for a time unit.
     * @default 'millisecond'
     */
    minUnit: TimeUnit;
  };

  ticks: {
    /**
     * Ticks generation input values:
     * - 'auto': generates "optimal" ticks based on scale size and time options.
     * - 'data': generates ticks from data (including labels from data `{t|x|y}` objects).
     * - 'labels': generates ticks from user given `data.labels` values ONLY.
     * @see https://github.com/chartjs/Chart.js/pull/4507
     * @since 2.7.0
     * @default 'auto'
     */
    source: 'labels' | 'auto' | 'data';
  };
};

interface TimeScale<O extends TimeScaleOptions = TimeScaleOptions> extends Scale$2<O> {
  getDataTimestamps(): number[];
  getLabelTimestamps(): string[];
  normalize(values: number[]): number[];
}

declare const TimeScale: ChartComponent & {
  prototype: TimeScale;
  new <O extends TimeScaleOptions = TimeScaleOptions>(cfg: AnyObject): TimeScale<O>;
};

type TimeSeriesScale<O extends TimeScaleOptions = TimeScaleOptions> = TimeScale<O>
declare const TimeSeriesScale: ChartComponent & {
  prototype: TimeSeriesScale;
  new <O extends TimeScaleOptions = TimeScaleOptions>(cfg: AnyObject): TimeSeriesScale<O>;
};

type RadialTickOptions = TickOptions & {
  /**
   * The Intl.NumberFormat options used by the default label formatter
   */
  format: Intl.NumberFormatOptions;

  /**
   * Maximum number of ticks and gridlines to show.
   * @default 11
   */
  maxTicksLimit: number;

  /**
   * if defined and stepSize is not specified, the step size will be rounded to this many decimal places.
   */
  precision: number;

  /**
   * User defined fixed step size for the scale.
   */
  stepSize: number;

  /**
   * User defined number of ticks
   */
  count: number;
}

type RadialLinearScaleOptions = CoreScaleOptions & {
  animate: boolean;

  startAngle: number;

  angleLines: {
    /**
     * if true, angle lines are shown.
     * @default true
     */
    display: boolean;
    /**
     * Color of angled lines.
     * @default 'rgba(0, 0, 0, 0.1)'
     */
    color: Scriptable<Color, ScriptableScaleContext>;
    /**
     * Width of angled lines.
     * @default 1
     */
    lineWidth: Scriptable<number, ScriptableScaleContext>;
    /**
     * Length and spacing of dashes on angled lines. See MDN.
     * @default []
     */
    borderDash: Scriptable<number[], ScriptableScaleContext>;
    /**
     * Offset for line dashes. See MDN.
     * @default 0
     */
    borderDashOffset: Scriptable<number, ScriptableScaleContext>;
  };

  /**
   * if true, scale will include 0 if it is not already included.
   * @default false
   */
  beginAtZero: boolean;

  grid: Partial<GridLineOptions>;

  /**
   * User defined minimum number for the scale, overrides minimum value from data.
   */
  min: number;
  /**
   * User defined maximum number for the scale, overrides maximum value from data.
   */
  max: number;

  pointLabels: {
    /**
     * Background color of the point label.
     * @default undefined
     */
    backdropColor: Scriptable<Color, ScriptableScalePointLabelContext>;
    /**
     * Padding of label backdrop.
     * @default 2
     */
    backdropPadding: Scriptable<number | ChartArea, ScriptableScalePointLabelContext>;

    /**
     * Border radius
     * @default 0
     * @since 3.8.0
     */
    borderRadius: Scriptable<number | BorderRadius, ScriptableScalePointLabelContext>;

    /**
     * if true, point labels are shown.
     * @default true
     */
    display: boolean;
    /**
     * Color of label
     * @see Defaults.color
     */
    color: Scriptable<Color, ScriptableScalePointLabelContext>;
    /**
     */
    font: ScriptableAndScriptableOptions<Partial<FontSpec>, ScriptableScalePointLabelContext>;

    /**
     * Callback function to transform data labels to point labels. The default implementation simply returns the current string.
     */
    callback: (label: string, index: number) => string | string[] | number | number[];

    /**
     * Padding around the pointLabels
     * @default 5
     */
    padding: Scriptable<number, ScriptableScalePointLabelContext>;

    /**
     * if true, point labels are centered.
     * @default false
     */
    centerPointLabels: boolean;
  };

  /**
   * Adjustment used when calculating the maximum data value.
   */
  suggestedMax: number;
  /**
   * Adjustment used when calculating the minimum data value.
   */
  suggestedMin: number;

  ticks: RadialTickOptions;
};

interface RadialLinearScale<O extends RadialLinearScaleOptions = RadialLinearScaleOptions> extends Scale$2<O> {
  setCenterPoint(leftMovement: number, rightMovement: number, topMovement: number, bottomMovement: number): void;
  getIndexAngle(index: number): number;
  getDistanceFromCenterForValue(value: number): number;
  getValueForDistanceFromCenter(distance: number): number;
  getPointPosition(index: number, distanceFromCenter: number): { x: number; y: number; angle: number };
  getPointPositionForValue(index: number, value: number): { x: number; y: number; angle: number };
  getPointLabelPosition(index: number): ChartArea;
  getBasePosition(index: number): { x: number; y: number; angle: number };
}
declare const RadialLinearScale: ChartComponent & {
  prototype: RadialLinearScale;
  new <O extends RadialLinearScaleOptions = RadialLinearScaleOptions>(cfg: AnyObject): RadialLinearScale<O>;
};

interface CartesianScaleTypeRegistry {
  linear: {
    options: LinearScaleOptions;
  };
  logarithmic: {
    options: LogarithmicScaleOptions;
  };
  category: {
    options: CategoryScaleOptions;
  };
  time: {
    options: TimeScaleOptions;
  };
  timeseries: {
    options: TimeScaleOptions;
  };
}

interface RadialScaleTypeRegistry {
  radialLinear: {
    options: RadialLinearScaleOptions;
  };
}

interface ScaleTypeRegistry extends CartesianScaleTypeRegistry, RadialScaleTypeRegistry {
}

type ScaleType = keyof ScaleTypeRegistry;

interface CartesianParsedData extends Point$1 {
  // Only specified when stacked bars are enabled
  _stacks?: {
    // Key is the stack ID which is generally the axis ID
    [key: string]: {
      // Inner key is the datasetIndex
      [key: number]: number;
    }
  }
}

interface BarParsedData extends CartesianParsedData {
  // Only specified if floating bars are show
  _custom?: {
    barStart: number;
    barEnd: number;
    start: number;
    end: number;
    min: number;
    max: number;
  }
}

interface BubbleParsedData extends CartesianParsedData {
  // The bubble radius value
  _custom: number;
}

interface RadialParsedData {
  r: number;
}

interface ChartTypeRegistry {
  bar: {
    chartOptions: BarControllerChartOptions;
    datasetOptions: BarControllerDatasetOptions;
    defaultDataPoint: number | [number, number] | null;
    metaExtensions: {};
    parsedDataType: BarParsedData,
    scales: keyof CartesianScaleTypeRegistry;
  };
  line: {
    chartOptions: LineControllerChartOptions;
    datasetOptions: LineControllerDatasetOptions & FillerControllerDatasetOptions;
    defaultDataPoint: ScatterDataPoint | number | null;
    metaExtensions: {};
    parsedDataType: CartesianParsedData;
    scales: keyof CartesianScaleTypeRegistry;
  };
  scatter: {
    chartOptions: ScatterControllerChartOptions;
    datasetOptions: ScatterControllerDatasetOptions;
    defaultDataPoint: ScatterDataPoint | number | null;
    metaExtensions: {};
    parsedDataType: CartesianParsedData;
    scales: keyof CartesianScaleTypeRegistry;
  };
  bubble: {
    chartOptions: unknown;
    datasetOptions: BubbleControllerDatasetOptions;
    defaultDataPoint: BubbleDataPoint;
    metaExtensions: {};
    parsedDataType: BubbleParsedData;
    scales: keyof CartesianScaleTypeRegistry;
  };
  pie: {
    chartOptions: PieControllerChartOptions;
    datasetOptions: PieControllerDatasetOptions;
    defaultDataPoint: PieDataPoint;
    metaExtensions: PieMetaExtensions;
    parsedDataType: number;
    scales: keyof CartesianScaleTypeRegistry;
  };
  doughnut: {
    chartOptions: DoughnutControllerChartOptions;
    datasetOptions: DoughnutControllerDatasetOptions;
    defaultDataPoint: DoughnutDataPoint;
    metaExtensions: DoughnutMetaExtensions;
    parsedDataType: number;
    scales: keyof CartesianScaleTypeRegistry;
  };
  polarArea: {
    chartOptions: PolarAreaControllerChartOptions;
    datasetOptions: PolarAreaControllerDatasetOptions;
    defaultDataPoint: number;
    metaExtensions: {};
    parsedDataType: RadialParsedData;
    scales: keyof RadialScaleTypeRegistry;
  };
  radar: {
    chartOptions: RadarControllerChartOptions;
    datasetOptions: RadarControllerDatasetOptions & FillerControllerDatasetOptions;
    defaultDataPoint: number | null;
    metaExtensions: {};
    parsedDataType: RadialParsedData;
    scales: keyof RadialScaleTypeRegistry;
  };
}

type ChartType = keyof ChartTypeRegistry;

type ScaleOptionsByType<TScale extends ScaleType = ScaleType> =
  { [key in ScaleType]: { type: key } & ScaleTypeRegistry[key]['options'] }[TScale]
;

// Convenience alias for creating and manipulating scale options in user code
type ScaleOptions<TScale extends ScaleType = ScaleType> = DeepPartial<ScaleOptionsByType<TScale>>;

type DatasetChartOptions<TType extends ChartType = ChartType> = {
  [key in TType]: {
    datasets: ChartTypeRegistry[key]['datasetOptions'];
  };
};

type ScaleChartOptions<TType extends ChartType = ChartType> = {
  scales: {
    [key: string]: ScaleOptionsByType<ChartTypeRegistry[TType]['scales']>;
  };
};

type ChartOptions<TType extends ChartType = ChartType> = DeepPartial<
CoreChartOptions<TType> &
ElementChartOptions<TType> &
PluginChartOptions<TType> &
DatasetChartOptions<TType> &
ScaleChartOptions<TType> &
ChartTypeRegistry[TType]['chartOptions']
>;

type DefaultDataPoint<TType extends ChartType> = DistributiveArray<ChartTypeRegistry[TType]['defaultDataPoint']>;

type ParsedDataType<TType extends ChartType = ChartType> = ChartTypeRegistry[TType]['parsedDataType'];

interface ChartDatasetProperties<TType extends ChartType, TData> {
  type?: TType;
  data: TData;
}

interface ChartDatasetPropertiesCustomTypesPerDataset<TType extends ChartType, TData> {
  type: TType;
  data: TData;
}

type ChartDataset<
  TType extends ChartType = ChartType,
  TData = DefaultDataPoint<TType>
> = DeepPartial<
{ [key in ChartType]: { type: key } & ChartTypeRegistry[key]['datasetOptions'] }[TType]
> & ChartDatasetProperties<TType, TData>;

type ChartDatasetCustomTypesPerDataset<
  TType extends ChartType = ChartType,
  TData = DefaultDataPoint<TType>
> = DeepPartial<
{ [key in ChartType]: { type: key } & ChartTypeRegistry[key]['datasetOptions'] }[TType]
> & ChartDatasetPropertiesCustomTypesPerDataset<TType, TData>;

/**
 * TData represents the data point type. If unspecified, a default is provided
 *   based on the chart type.
 * TLabel represents the label type
 */
interface ChartData<
  TType extends ChartType = ChartType,
  TData = DefaultDataPoint<TType>,
  TLabel = unknown
> {
  labels?: TLabel[];
  datasets: ChartDataset<TType, TData>[];
}

interface ChartDataCustomTypesPerDataset<
  TType extends ChartType = ChartType,
  TData = DefaultDataPoint<TType>,
  TLabel = unknown
> {
  labels?: TLabel[];
  datasets: ChartDatasetCustomTypesPerDataset<TType, TData>[];
}

interface ChartConfiguration<
  TType extends ChartType = ChartType,
  TData = DefaultDataPoint<TType>,
  TLabel = unknown
> {
  type: TType;
  data: ChartData<TType, TData, TLabel>;
  options?: ChartOptions<TType>;
  plugins?: Plugin<TType>[];
}

interface ChartConfigurationCustomTypesPerDataset<
  TType extends ChartType = ChartType,
  TData = DefaultDataPoint<TType>,
  TLabel = unknown
> {
  data: ChartDataCustomTypesPerDataset<TType, TData, TLabel>;
  options?: ChartOptions<TType>;
  plugins?: Plugin<TType>[];
}

/**
 * @typedef { import("./core.controller").default } Chart
 * @typedef { import("../../types").ChartEvent } ChartEvent
 * @typedef { import("../plugins/plugin.tooltip").default } Tooltip
 */
/**
 * @callback filterCallback
 * @param {{plugin: object, options: object}} value
 * @param {number} [index]
 * @param {array} [array]
 * @param {object} [thisArg]
 * @return {boolean}
 */
declare class PluginService {
    _init: any[];
    /**
       * Calls enabled plugins for `chart` on the specified hook and with the given args.
       * This method immediately returns as soon as a plugin explicitly returns false. The
       * returned value can be used, for instance, to interrupt the current action.
       * @param {Chart} chart - The chart instance for which plugins should be called.
       * @param {string} hook - The name of the plugin method to call (e.g. 'beforeUpdate').
       * @param {object} [args] - Extra arguments to apply to the hook call.
     * @param {filterCallback} [filter] - Filtering function for limiting which plugins are notified
       * @returns {boolean} false if any of the plugins return false, else returns true.
       */
    notify(chart: Chart$3, hook: string, args?: object, filter?: filterCallback): boolean;
    /**
       * @private
       */
    private _notify;
    invalidate(): void;
    _oldCache: {
        plugin: any;
        options: any;
    }[];
    _cache: {
        plugin: any;
        options: any;
    }[];
    /**
       * @param {Chart} chart
       * @private
       */
    private _descriptors;
    _createDescriptors(chart: any, all: any): {
        plugin: any;
        options: any;
    }[];
    /**
       * @param {Chart} chart
       * @private
       */
    private _notifyStateChanges;
}
type Chart$3 = Chart$2;
type filterCallback = (value: {
    plugin: object;
    options: object;
}, index?: number, array?: any[], thisArg?: object) => boolean;

/**
 * Please use the module's default export which provides a singleton instance
 * Note: class is exported for typedoc
 */
declare class Defaults {
    constructor(_descriptors: any, _appliers: any);
    animation: any;
    backgroundColor: string;
    borderColor: string;
    color: string;
    datasets: {};
    devicePixelRatio: (context: any) => any;
    elements: {};
    events: string[];
    font: {
        family: string;
        size: number;
        style: string;
        lineHeight: number;
        weight: any;
    };
    hover: {};
    hoverBackgroundColor: (ctx: any, options: any) => CanvasGradient;
    hoverBorderColor: (ctx: any, options: any) => CanvasGradient;
    hoverColor: (ctx: any, options: any) => CanvasGradient;
    indexAxis: string;
    interaction: {
        mode: string;
        intersect: boolean;
        includeInvisible: boolean;
    };
    maintainAspectRatio: boolean;
    onHover: any;
    onClick: any;
    parsing: boolean;
    plugins: {};
    responsive: boolean;
    scale: any;
    scales: {};
    showLine: boolean;
    drawActiveElementsOnTop: boolean;
    /**
       * @param {string|object} scope
       * @param {object} [values]
       */
    set(scope: string | object, values?: object): any;
    /**
       * @param {string} scope
       */
    get(scope: string): any;
    /**
       * @param {string|object} scope
       * @param {object} [values]
       */
    describe(scope: string | object, values?: object): any;
    override(scope: any, values: any): any;
    /**
       * Routes the named defaults to fallback to another scope/name.
       * This routing is useful when those target values, like defaults.color, are changed runtime.
       * If the values would be copied, the runtime change would not take effect. By routing, the
       * fallback is evaluated at each access, so its always up to date.
       *
       * Example:
       *
       * 	defaults.route('elements.arc', 'backgroundColor', '', 'color')
       *   - reads the backgroundColor from defaults.color when undefined locally
       *
       * @param {string} scope Scope this route applies to.
       * @param {string} name Property name that should be routed to different namespace when not defined here.
       * @param {string} targetScope The namespace where those properties should be routed to.
       * Empty string ('') is the root of defaults.
       * @param {string} targetName The target name in the target scope the property should be routed to.
       */
    route(scope: string, name: string, targetScope: string, targetName: string): void;
    apply(appliers: any): void;
}

/**
 * @typedef {{id: string, defaults: any, overrides?: any, defaultRoutes: any}} IChartComponent
 */
declare class TypedRegistry {
    constructor(type: any, scope: any, override: any);
    type: any;
    scope: any;
    override: any;
    items: any;
    isForType(type: any): boolean;
    /**
       * @param {IChartComponent} item
       * @returns {string} The scope where items defaults were registered to.
       */
    register(item: IChartComponent): string;
    /**
       * @param {string} id
       * @returns {object?}
       */
    get(id: string): object | null;
    /**
       * @param {IChartComponent} item
       */
    unregister(item: IChartComponent): void;
}
type IChartComponent = {
    id: string;
    defaults: any;
    overrides?: any;
    defaultRoutes: any;
};

/**
 * Please use the module's default export which provides a singleton instance
 * Note: class is exported for typedoc
 */
declare class Registry {
    controllers: TypedRegistry;
    elements: TypedRegistry;
    plugins: TypedRegistry;
    scales: TypedRegistry;
    _typedRegistries: TypedRegistry[];
    /**
       * @param  {...any} args
       */
    add(...args: any[]): void;
    remove(...args: any[]): void;
    /**
       * @param  {...typeof DatasetController} args
       */
    addControllers(...args: (typeof DatasetController)[]): void;
    /**
       * @param  {...typeof Element} args
       */
    addElements(...args: (typeof Element)[]): void;
    /**
       * @param  {...any} args
       */
    addPlugins(...args: any[]): void;
    /**
       * @param  {...typeof Scale} args
       */
    addScales(...args: (typeof Scale$1)[]): void;
    /**
       * @param {string} id
       * @returns {typeof DatasetController}
       */
    getController(id: string): typeof DatasetController;
    /**
       * @param {string} id
       * @returns {typeof Element}
       */
    getElement(id: string): typeof Element;
    /**
       * @param {string} id
       * @returns {object}
       */
    getPlugin(id: string): object;
    /**
       * @param {string} id
       * @returns {typeof Scale}
       */
    getScale(id: string): typeof Scale$1;
    /**
       * @param  {...typeof DatasetController} args
       */
    removeControllers(...args: (typeof DatasetController)[]): void;
    /**
       * @param  {...typeof Element} args
       */
    removeElements(...args: (typeof Element)[]): void;
    /**
       * @param  {...any} args
       */
    removePlugins(...args: any[]): void;
    /**
       * @param  {...typeof Scale} args
       */
    removeScales(...args: (typeof Scale$1)[]): void;
    /**
       * @private
       */
    private _each;
    /**
       * @private
       */
    private _exec;
    /**
       * @private
       */
    private _getRegistryForType;
    /**
       * @private
       */
    private _get;
}

declare class Config {
    constructor(config: any);
    _config: any;
    _scopeCache: Map<any, any>;
    _resolverCache: Map<any, any>;
    get platform(): any;
    set type(arg: any);
    get type(): any;
    set data(arg: any);
    get data(): any;
    set options(arg: any);
    get options(): any;
    get plugins(): any;
    update(): void;
    clearCache(): void;
    /**
     * Returns the option scope keys for resolving dataset options.
     * These keys do not include the dataset itself, because it is not under options.
     * @param {string} datasetType
     * @return {string[][]}
     */
    datasetScopeKeys(datasetType: string): string[][];
    /**
     * Returns the option scope keys for resolving dataset animation options.
     * These keys do not include the dataset itself, because it is not under options.
     * @param {string} datasetType
     * @param {string} transition
     * @return {string[][]}
     */
    datasetAnimationScopeKeys(datasetType: string, transition: string): string[][];
    /**
     * Returns the options scope keys for resolving element options that belong
     * to an dataset. These keys do not include the dataset itself, because it
     * is not under options.
     * @param {string} datasetType
     * @param {string} elementType
     * @return {string[][]}
     */
    datasetElementScopeKeys(datasetType: string, elementType: string): string[][];
    /**
     * Returns the options scope keys for resolving plugin options.
     * @param {{id: string, additionalOptionScopes?: string[]}} plugin
     * @return {string[][]}
     */
    pluginScopeKeys(plugin: {
        id: string;
        additionalOptionScopes?: string[];
    }): string[][];
    /**
     * @private
     */
    private _cachedScopes;
    /**
     * Resolves the objects from options and defaults for option value resolution.
     * @param {object} mainScope - The main scope object for options
     * @param {string[][]} keyLists - The arrays of keys in resolution order
     * @param {boolean} [resetCache] - reset the cache for this mainScope
     */
    getOptionScopes(mainScope: object, keyLists: string[][], resetCache?: boolean): any;
    /**
     * Returns the option scopes for resolving chart options
     * @return {object[]}
     */
    chartOptionScopes(): object[];
    /**
     * @param {object[]} scopes
     * @param {string[]} names
     * @param {function|object} context
     * @param {string[]} [prefixes]
     * @return {object}
     */
    resolveNamedOptions(scopes: object[], names: string[], context: Function | object, prefixes?: string[]): object;
    /**
     * @param {object[]} scopes
     * @param {object} [context]
     * @param {string[]} [prefixes]
     * @param {{scriptable: boolean, indexable: boolean, allKeys?: boolean}} [descriptorDefaults]
     */
    createResolver(scopes: object[], context?: object, prefixes?: string[], descriptorDefaults?: {
        scriptable: boolean;
        indexable: boolean;
        allKeys?: boolean;
    }): any;
}

type ChartEvent = ChartEvent$1;
type Point = Point$1;
declare class Chart$2 {
    static defaults: Defaults;
    static instances: {};
    static overrides: any;
    static registry: Registry;
    static version: any;
    static getChart: (key: any) => any;
    static register(...items: any[]): void;
    static unregister(...items: any[]): void;
    constructor(item: any, userConfig: any);
    config: Config;
    platform: any;
    id: number;
    ctx: any;
    canvas: any;
    width: any;
    height: any;
    _options: any;
    _aspectRatio: any;
    _layers: any[];
    _metasets: any[];
    _stacks: any;
    boxes: any[];
    currentDevicePixelRatio: any;
    chartArea: any;
    _active: any[];
    _lastEvent: ChartEvent$1;
    _listeners: {};
    /** @type {?{attach?: function, detach?: function, resize?: function}} */
    _responsiveListeners: {
        attach?: Function;
        detach?: Function;
        resize?: Function;
    };
    _sortedMetasets: any[];
    scales: {};
    _plugins: PluginService;
    $proxies: {};
    _hiddenIndices: {};
    attached: boolean;
    _animationsDisabled: boolean;
    $context: any;
    _doResize: (mode?: any) => number;
    _dataChanges: any[];
    get aspectRatio(): any;
    set data(arg: any);
    get data(): any;
    set options(arg: any);
    get options(): any;
    get registry(): Registry;
    /**
       * @private
       */
    private _initialize;
    clear(): Chart$2;
    stop(): Chart$2;
    /**
       * Resize the chart to its container or to explicit dimensions.
       * @param {number} [width]
       * @param {number} [height]
       */
    resize(width?: number, height?: number): void;
    _resizeBeforeDraw: {
        width: number;
        height: number;
    };
    _resize(width: any, height: any): void;
    ensureScalesHaveIDs(): void;
    /**
       * Builds a map of scale ID to scale object for future lookup.
       */
    buildOrUpdateScales(): void;
    /**
       * @private
       */
    private _updateMetasets;
    /**
       * @private
       */
    private _removeUnreferencedMetasets;
    buildOrUpdateControllers(): any[];
    /**
       * Reset the elements of all datasets
       * @private
       */
    private _resetElements;
    /**
      * Resets the chart back to its state before the initial animation
      */
    reset(): void;
    update(mode: any): void;
    _minPadding: number;
    /**
     * @private
     */
    private _updateScales;
    /**
     * @private
     */
    private _checkEventBindings;
    /**
     * @private
     */
    private _updateHiddenIndices;
    /**
     * @private
     */
    private _getUniformDataChanges;
    /**
       * Updates the chart layout unless a plugin returns `false` to the `beforeLayout`
       * hook, in which case, plugins will not be called on `afterLayout`.
       * @private
       */
    private _updateLayout;
    /**
       * Updates all datasets unless a plugin returns `false` to the `beforeDatasetsUpdate`
       * hook, in which case, plugins will not be called on `afterDatasetsUpdate`.
       * @private
       */
    private _updateDatasets;
    /**
       * Updates dataset at index unless a plugin returns `false` to the `beforeDatasetUpdate`
       * hook, in which case, plugins will not be called on `afterDatasetUpdate`.
       * @private
       */
    private _updateDataset;
    render(): void;
    draw(): void;
    /**
       * @private
       */
    private _getSortedDatasetMetas;
    /**
       * Gets the visible dataset metas in drawing order
       * @return {object[]}
       */
    getSortedVisibleDatasetMetas(): object[];
    /**
       * Draws all datasets unless a plugin returns `false` to the `beforeDatasetsDraw`
       * hook, in which case, plugins will not be called on `afterDatasetsDraw`.
       * @private
       */
    private _drawDatasets;
    /**
       * Draws dataset at index unless a plugin returns `false` to the `beforeDatasetDraw`
       * hook, in which case, plugins will not be called on `afterDatasetDraw`.
       * @private
       */
    private _drawDataset;
    /**
     * Checks whether the given point is in the chart area.
     * @param {Point} point - in relative coordinates (see, e.g., getRelativePosition)
     * @returns {boolean}
     */
    isPointInArea(point: Point): boolean;
    getElementsAtEventForMode(e: any, mode: any, options: any, useFinalPosition: any): any;
    getDatasetMeta(datasetIndex: any): any;
    getContext(): any;
    getVisibleDatasetCount(): number;
    isDatasetVisible(datasetIndex: any): boolean;
    setDatasetVisibility(datasetIndex: any, visible: any): void;
    toggleDataVisibility(index: any): void;
    getDataVisibility(index: any): boolean;
    /**
       * @private
       */
    private _updateVisibility;
    hide(datasetIndex: any, dataIndex: any): void;
    show(datasetIndex: any, dataIndex: any): void;
    /**
       * @private
       */
    private _destroyDatasetMeta;
    _stop(): void;
    destroy(): void;
    toBase64Image(...args: any[]): any;
    /**
       * @private
       */
    private bindEvents;
    /**
     * @private
     */
    private bindUserEvents;
    /**
     * @private
     */
    private bindResponsiveEvents;
    /**
       * @private
       */
    private unbindEvents;
    updateHoverStyle(items: any, mode: any, enabled: any): void;
    /**
       * Get active (hovered) elements
       * @returns array
       */
    getActiveElements(): any[];
    /**
       * Set active (hovered) elements
       * @param {array} activeElements New active data points
       */
    setActiveElements(activeElements: any[]): void;
    /**
       * Calls enabled plugins on the specified hook and with the given args.
       * This method immediately returns as soon as a plugin explicitly returns false. The
       * returned value can be used, for instance, to interrupt the current action.
       * @param {string} hook - The name of the plugin method to call (e.g. 'beforeUpdate').
       * @param {Object} [args] - Extra arguments to apply to the hook call.
     * @param {import('./core.plugins').filterCallback} [filter] - Filtering function for limiting which plugins are notified
       * @returns {boolean} false if any of the plugins return false, else returns true.
       */
    notifyPlugins(hook: string, args?: any, filter?: filterCallback): boolean;
    /**
     * Check if a plugin with the specific ID is registered and enabled
     * @param {string} pluginId - The ID of the plugin of which to check if it is enabled
     * @returns {boolean}
     */
    isPluginEnabled(pluginId: string): boolean;
    /**
       * @private
       */
    private _updateHoverStyles;
    /**
       * @private
       */
    private _eventHandler;
    /**
       * Handle an event
       * @param {ChartEvent} e the event to handle
       * @param {boolean} [replay] - true if the event was replayed by `update`
     * @param {boolean} [inChartArea] - true if the event is inside chartArea
       * @return {boolean} true if the chart needs to re-render
       * @private
       */
    private _handleEvent;
    /**
     * @param {ChartEvent} e - The event
     * @param {import('../../types').ActiveElement[]} lastActive - Previously active elements
     * @param {boolean} inChartArea - Is the envent inside chartArea
     * @param {boolean} useFinalPosition - Should the evaluation be done with current or final (after animation) element positions
     * @returns {import('../../types').ActiveElement[]} - The active elements
     * @pravate
     */
    _getActiveElements(e: ChartEvent, lastActive: ActiveElement[], inChartArea: boolean, useFinalPosition: boolean): ActiveElement[];
}

declare class Scale$1 extends Element<AnyObject, AnyObject> {
    constructor(cfg: any);
    /** @type {string} */
    id: string;
    /** @type {string} */
    type: string;
    /** @type {any} */
    options: any;
    /** @type {CanvasRenderingContext2D} */
    ctx: CanvasRenderingContext2D;
    /** @type {Chart} */
    chart: Chart$1;
    /** @type {number} */
    top: number;
    /** @type {number} */
    bottom: number;
    /** @type {number} */
    left: number;
    /** @type {number} */
    right: number;
    /** @type {number} */
    width: number;
    /** @type {number} */
    height: number;
    _margins: {
        left: number;
        right: number;
        top: number;
        bottom: number;
    };
    /** @type {number} */
    maxWidth: number;
    /** @type {number} */
    maxHeight: number;
    /** @type {number} */
    paddingTop: number;
    /** @type {number} */
    paddingBottom: number;
    /** @type {number} */
    paddingLeft: number;
    /** @type {number} */
    paddingRight: number;
    /** @type {string=} */
    axis: string | undefined;
    /** @type {number=} */
    labelRotation: number | undefined;
    min: any;
    max: any;
    _range: {
        min: number;
        max: number;
    };
    /** @type {Tick[]} */
    ticks: Tick[];
    /** @type {object[]|null} */
    _gridLineItems: object[] | null;
    /** @type {object[]|null} */
    _labelItems: object[] | null;
    /** @type {object|null} */
    _labelSizes: object | null;
    _length: number;
    _maxLength: number;
    _longestTextCache: {};
    /** @type {number} */
    _startPixel: number;
    /** @type {number} */
    _endPixel: number;
    _reversePixels: boolean;
    _userMax: any;
    _userMin: any;
    _suggestedMax: any;
    _suggestedMin: any;
    _ticksLength: number;
    _borderValue: number;
    _cache: {};
    _dataLimitsCached: boolean;
    $context: any;
    /**
       * @param {any} options
       * @since 3.0
       */
    init(options: any): void;
    /**
       * Parse a supported input value to internal representation.
       * @param {*} raw
       * @param {number} [index]
       * @since 3.0
       */
    parse(raw: any, index?: number): any;
    /**
       * @return {{min: number, max: number, minDefined: boolean, maxDefined: boolean}}
       * @protected
       * @since 3.0
       */
    protected getUserBounds(): {
        min: number;
        max: number;
        minDefined: boolean;
        maxDefined: boolean;
    };
    /**
       * @param {boolean} canStack
       * @return {{min: number, max: number}}
       * @protected
       * @since 3.0
       */
    protected getMinMax(canStack: boolean): {
        min: number;
        max: number;
    };
    /**
       * Get the padding needed for the scale
       * @return {{top: number, left: number, bottom: number, right: number}} the necessary padding
       * @private
       */
    private getPadding;
    /**
       * Returns the scale tick objects
       * @return {Tick[]}
       * @since 2.7
       */
    getTicks(): Tick[];
    /**
       * @return {string[]}
       */
    getLabels(): string[];
    beforeLayout(): void;
    beforeUpdate(): void;
    /**
       * @param {number} maxWidth - the max width in pixels
       * @param {number} maxHeight - the max height in pixels
       * @param {{top: number, left: number, bottom: number, right: number}} margins - the space between the edge of the other scales and edge of the chart
       *   This space comes from two sources:
       *     - padding - space that's required to show the labels at the edges of the scale
       *     - thickness of scales or legends in another orientation
       */
    update(maxWidth: number, maxHeight: number, margins: {
        top: number;
        left: number;
        bottom: number;
        right: number;
    }): void;
    /**
       * @protected
       */
    protected configure(): void;
    _alignToPixels: any;
    afterUpdate(): void;
    beforeSetDimensions(): void;
    setDimensions(): void;
    afterSetDimensions(): void;
    _callHooks(name: any): void;
    beforeDataLimits(): void;
    determineDataLimits(): void;
    afterDataLimits(): void;
    beforeBuildTicks(): void;
    /**
       * @return {object[]} the ticks
       */
    buildTicks(): object[];
    afterBuildTicks(): void;
    beforeTickToLabelConversion(): void;
    /**
       * Convert ticks to label strings
       * @param {Tick[]} ticks
       */
    generateTickLabels(ticks: Tick[]): void;
    afterTickToLabelConversion(): void;
    beforeCalculateLabelRotation(): void;
    calculateLabelRotation(): void;
    afterCalculateLabelRotation(): void;
    afterAutoSkip(): void;
    beforeFit(): void;
    fit(): void;
    _calculatePadding(first: any, last: any, sin: any, cos: any): void;
    /**
       * Handle margins and padding interactions
       * @private
       */
    private _handleMargins;
    afterFit(): void;
    /**
       * @return {boolean}
       */
    isHorizontal(): boolean;
    /**
       * @return {boolean}
       */
    isFullSize(): boolean;
    /**
       * @param {Tick[]} ticks
       * @private
       */
    private _convertTicksToLabels;
    /**
       * @return {{ first: object, last: object, widest: object, highest: object, widths: Array, heights: array }}
       * @private
       */
    private _getLabelSizes;
    /**
       * Returns {width, height, offset} objects for the first, last, widest, highest tick
       * labels where offset indicates the anchor point offset from the top in pixels.
       * @return {{ first: object, last: object, widest: object, highest: object, widths: Array, heights: array }}
       * @private
       */
    private _computeLabelSizes;
    /**
       * Used to get the label to display in the tooltip for the given value
       * @param {*} value
       * @return {string}
       */
    getLabelForValue(value: any): string;
    /**
       * Returns the location of the given data point. Value can either be an index or a numerical value
       * The coordinate (0, 0) is at the upper-left corner of the canvas
       * @param {*} value
       * @param {number} [index]
       * @return {number}
       */
    getPixelForValue(value: any, index?: number): number;
    /**
       * Used to get the data value from a given pixel. This is the inverse of getPixelForValue
       * The coordinate (0, 0) is at the upper-left corner of the canvas
       * @param {number} pixel
       * @return {*}
       */
    getValueForPixel(pixel: number): any;
    /**
       * Returns the location of the tick at the given index
       * The coordinate (0, 0) is at the upper-left corner of the canvas
       * @param {number} index
       * @return {number}
       */
    getPixelForTick(index: number): number;
    /**
       * Utility for getting the pixel location of a percentage of scale
       * The coordinate (0, 0) is at the upper-left corner of the canvas
       * @param {number} decimal
       * @return {number}
       */
    getPixelForDecimal(decimal: number): number;
    /**
       * @param {number} pixel
       * @return {number}
       */
    getDecimalForPixel(pixel: number): number;
    /**
       * Returns the pixel for the minimum chart value
       * The coordinate (0, 0) is at the upper-left corner of the canvas
       * @return {number}
       */
    getBasePixel(): number;
    /**
       * @return {number}
       */
    getBaseValue(): number;
    /**
       * @protected
       */
    protected getContext(index: any): any;
    /**
       * @return {number}
       * @private
       */
    private _tickSize;
    /**
       * @return {boolean}
       * @private
       */
    private _isVisible;
    /**
       * @private
       */
    private _computeGridLineItems;
    /**
       * @private
       */
    private _computeLabelItems;
    _getXAxisLabelAlignment(): string;
    _getYAxisLabelAlignment(tl: any): {
        textAlign: string;
        x: any;
    };
    /**
       * @private
       */
    private _computeLabelArea;
    /**
     * @protected
     */
    protected drawBackground(): void;
    getLineWidthForValue(value: any): any;
    /**
       * @protected
       */
    protected drawGrid(chartArea: any): void;
    /**
       * @protected
       */
    protected drawBorder(): void;
    /**
       * @protected
       */
    protected drawLabels(chartArea: any): void;
    /**
       * @protected
       */
    protected drawTitle(): void;
    draw(chartArea: any): void;
    /**
       * @return {object[]}
       * @private
       */
    private _layers;
    /**
       * Returns visible dataset metas that are attached to this scale
       * @param {string} [type] - if specified, also filter by dataset type
       * @return {object[]}
       */
    getMatchingVisibleMetas(type?: string): object[];
    /**
       * @param {number} index
       * @return {object}
       * @protected
       */
    protected _resolveTickFontOptions(index: number): object;
    /**
     * @protected
     */
    protected _maxDigits(): number;
}
type Chart$1 = Chart$2;
type Tick = {
    value: number | string;
    label?: string;
    major?: boolean;
    $context?: any;
};

declare class DatasetController {
    /**
     * @type {any}
     */
    static defaults: any;
    /**
     * Element type used to generate a meta dataset (e.g. Chart.element.LineElement).
     */
    static datasetElementType: any;
    /**
     * Element type used to generate a meta data (e.g. Chart.element.PointElement).
     */
    static dataElementType: any;
    /**
       * @param {Chart} chart
       * @param {number} datasetIndex
       */
    constructor(chart: Chart, datasetIndex: number);
    chart: Chart$2;
    _ctx: any;
    index: number;
    _cachedDataOpts: {};
    _cachedMeta: any;
    _type: any;
    options: any;
    /** @type {boolean | object} */
    _parsing: boolean | object;
    _data: any;
    _objectData: any;
    _sharedOptions: any;
    _drawStart: any;
    _drawCount: any;
    enableOptionSharing: boolean;
    supportsDecimation: boolean;
    $context: any;
    _syncList: any[];
    datasetElementType: any;
    dataElementType: any;
    initialize(): void;
    updateIndex(datasetIndex: any): void;
    linkScales(): void;
    getDataset(): any;
    getMeta(): any;
    /**
       * @param {string} scaleID
       * @return {Scale}
       */
    getScaleForId(scaleID: string): Scale;
    /**
       * @private
       */
    private _getOtherScale;
    reset(): void;
    /**
       * @private
       */
    private _destroy;
    /**
       * @private
       */
    private _dataCheck;
    addElements(): void;
    buildOrUpdateElements(resetNewElements: any): void;
    /**
       * Merges user-supplied and default dataset-level options
       * @private
       */
    private configure;
    /**
       * @param {number} start
       * @param {number} count
       */
    parse(start: number, count: number): void;
    /**
       * Parse array of primitive values
       * @param {object} meta - dataset meta
       * @param {array} data - data array. Example [1,3,4]
       * @param {number} start - start index
       * @param {number} count - number of items to parse
       * @returns {object} parsed item - item containing index and a parsed value
       * for each scale id.
       * Example: {xScale0: 0, yScale0: 1}
       * @protected
       */
    protected parsePrimitiveData(meta: object, data: any[], start: number, count: number): object;
    /**
       * Parse array of arrays
       * @param {object} meta - dataset meta
       * @param {array} data - data array. Example [[1,2],[3,4]]
       * @param {number} start - start index
       * @param {number} count - number of items to parse
       * @returns {object} parsed item - item containing index and a parsed value
       * for each scale id.
       * Example: {x: 0, y: 1}
       * @protected
       */
    protected parseArrayData(meta: object, data: any[], start: number, count: number): object;
    /**
       * Parse array of objects
       * @param {object} meta - dataset meta
       * @param {array} data - data array. Example [{x:1, y:5}, {x:2, y:10}]
       * @param {number} start - start index
       * @param {number} count - number of items to parse
       * @returns {object} parsed item - item containing index and a parsed value
       * for each scale id. _custom is optional
       * Example: {xScale0: 0, yScale0: 1, _custom: {r: 10, foo: 'bar'}}
       * @protected
       */
    protected parseObjectData(meta: object, data: any[], start: number, count: number): object;
    /**
       * @protected
       */
    protected getParsed(index: any): any;
    /**
       * @protected
       */
    protected getDataElement(index: any): any;
    /**
       * @protected
       */
    protected applyStack(scale: any, parsed: any, mode: any): any;
    /**
       * @protected
       */
    protected updateRangeFromParsed(range: any, scale: any, parsed: any, stack: any): void;
    /**
       * @protected
       */
    protected getMinMax(scale: any, canStack: any): {
        min: number;
        max: number;
    };
    getAllParsedValues(scale: any): number[];
    /**
       * @return {number|boolean}
       * @protected
       */
    protected getMaxOverflow(): number | boolean;
    /**
       * @protected
       */
    protected getLabelAndValue(index: any): {
        label: string;
        value: string;
    };
    /**
       * @private
       */
    private _update;
    /**
       * @param {string} mode
       */
    update(mode: string): void;
    draw(): void;
    /**
       * Returns a set of predefined style properties that should be used to represent the dataset
       * or the data if the index is specified
       * @param {number} index - data index
       * @param {boolean} [active] - true if hover
       * @return {object} style object
       */
    getStyle(index: number, active?: boolean): object;
    /**
       * @protected
       */
    protected getContext(index: any, active: any, mode: any): any;
    /**
       * @param {string} [mode]
       * @protected
       */
    protected resolveDatasetElementOptions(mode?: string): any;
    /**
       * @param {number} index
       * @param {string} [mode]
       * @protected
       */
    protected resolveDataElementOptions(index: number, mode?: string): any;
    /**
       * @private
       */
    private _resolveElementOptions;
    /**
       * @private
       */
    private _resolveAnimations;
    /**
       * Utility for getting the options object shared between elements
       * @protected
       */
    protected getSharedOptions(options: any): any;
    /**
       * Utility for determining if `options` should be included in the updated properties
       * @protected
       */
    protected includeOptions(mode: any, sharedOptions: any): boolean;
    /**
     * @todo v4, rename to getSharedOptions and remove excess functions
     */
    _getSharedOptions(start: any, mode: any): {
        sharedOptions: any;
        includeOptions: boolean;
    };
    /**
       * Utility for updating an element with new properties, using animations when appropriate.
       * @protected
       */
    protected updateElement(element: any, index: any, properties: any, mode: any): void;
    /**
       * Utility to animate the shared options, that are potentially affecting multiple elements.
       * @protected
       */
    protected updateSharedOptions(sharedOptions: any, mode: any, newOptions: any): void;
    /**
       * @private
       */
    private _setStyle;
    removeHoverStyle(element: any, datasetIndex: any, index: any): void;
    setHoverStyle(element: any, datasetIndex: any, index: any): void;
    /**
       * @private
       */
    private _removeDatasetHoverStyle;
    /**
       * @private
       */
    private _setDatasetHoverStyle;
    /**
       * @private
       */
    private _resyncElements;
    /**
       * @private
       */
    private _insertElements;
    updateElements(element: any, start: any, count: any, mode: any): void;
    /**
       * @private
       */
    private _removeElements;
    /**
       * @private
     */
    private _sync;
    _onDataPush(...args: any[]): void;
    _onDataPop(): void;
    _onDataShift(): void;
    _onDataSplice(start: any, count: any, ...args: any[]): void;
    _onDataUnshift(...args: any[]): void;
}
type Chart = Chart$2;
type Scale = Scale$1;

/**
 * @namespace Chart.helpers
 */

/**
 * An empty function that can be used, for example, for optional callback.
 */
declare function noop(): void;
/**
 * Returns a unique id, sequentially generated from a global variable.
 */
declare const uid: () => number;
/**
 * Returns true if `value` is neither null nor undefined, else returns false.
 * @param value - The value to test.
 * @since 2.7.0
 */
declare function isNullOrUndef(value: unknown): value is null | undefined;
/**
 * Returns true if `value` is an array (including typed arrays), else returns false.
 * @param value - The value to test.
 * @function
 */
declare function isArray<T = unknown>(value: unknown): value is T[];
/**
 * Returns true if `value` is an object (excluding null), else returns false.
 * @param value - The value to test.
 * @since 2.7.0
 */
declare function isObject(value: unknown): value is AnyObject;
/**
 * Returns true if `value` is a finite number, else returns false
 * @param value  - The value to test.
 */
declare function isNumberFinite(value: unknown): value is number;

/**
 * Returns `value` if finite, else returns `defaultValue`.
 * @param value - The value to return if defined.
 * @param defaultValue - The value to return if `value` is not finite.
 */
declare function finiteOrDefault(value: unknown, defaultValue: number): number;
/**
 * Returns `value` if defined, else returns `defaultValue`.
 * @param value - The value to return if defined.
 * @param defaultValue - The value to return if `value` is undefined.
 */
declare function valueOrDefault<T>(value: T | undefined, defaultValue: T): T;
declare const toPercentage: (value: number | string, dimension: number) => number;
declare const toDimension: (value: number | string, dimension: number) => number;
/**
 * Calls `fn` with the given `args` in the scope defined by `thisArg` and returns the
 * value returned by `fn`. If `fn` is not a function, this method returns undefined.
 * @param fn - The function to call.
 * @param args - The arguments with which `fn` should be called.
 * @param [thisArg] - The value of `this` provided for the call to `fn`.
 */
declare function callback<T extends (this: TA, ...restArgs: unknown[]) => R, TA, R>(fn: T | undefined, args: unknown[], thisArg?: TA): R | undefined;
/**
 * Note(SB) for performance sake, this method should only be used when loopable type
 * is unknown or in none intensive code (not called often and small loopable). Else
 * it's preferable to use a regular for() loop and save extra function calls.
 * @param loopable - The object or array to be iterated.
 * @param fn - The function to call for each item.
 * @param [thisArg] - The value of `this` provided for the call to `fn`.
 * @param [reverse] - If true, iterates backward on the loopable.
 */
declare function each<T, TA>(loopable: Record<string, T>, fn: (this: TA, v: T, i: string) => void, thisArg?: TA, reverse?: boolean): void;
declare function each<T, TA>(loopable: T[], fn: (this: TA, v: T, i: number) => void, thisArg?: TA, reverse?: boolean): void;
/**
 * Returns true if the `a0` and `a1` arrays have the same content, else returns false.
 * @param a0 - The array to compare
 * @param a1 - The array to compare
 * @private
 */
declare function _elementsEqual(a0: ActiveDataPoint[], a1: ActiveDataPoint[]): boolean;
/**
 * Returns a deep copy of `source` without keeping references on objects and arrays.
 * @param source - The value to clone.
 */
declare function clone<T>(source: T): T;
/**
 * The default merger when Chart.helpers.merge is called without merger option.
 * Note(SB): also used by mergeConfig and mergeScaleConfig as fallback.
 * @private
 */
declare function _merger(key: string, target: AnyObject, source: AnyObject, options: AnyObject): void;
interface MergeOptions {
    merger?: (key: string, target: AnyObject, source: AnyObject, options?: AnyObject) => void;
}
/**
 * Recursively deep copies `source` properties into `target` with the given `options`.
 * IMPORTANT: `target` is not cloned and will be updated with `source` properties.
 * @param target - The target object in which all sources are merged into.
 * @param source - Object(s) to merge into `target`.
 * @param [options] - Merging options:
 * @param [options.merger] - The merge method (key, target, source, options)
 * @returns The `target` object.
 */
declare function merge<T>(target: T, source: [], options?: MergeOptions): T;
declare function merge<T, S1>(target: T, source: S1, options?: MergeOptions): T & S1;
declare function merge<T, S1>(target: T, source: [S1], options?: MergeOptions): T & S1;
declare function merge<T, S1, S2>(target: T, source: [S1, S2], options?: MergeOptions): T & S1 & S2;
declare function merge<T, S1, S2, S3>(target: T, source: [S1, S2, S3], options?: MergeOptions): T & S1 & S2 & S3;
declare function merge<T, S1, S2, S3, S4>(target: T, source: [S1, S2, S3, S4], options?: MergeOptions): T & S1 & S2 & S3 & S4;
declare function merge<T>(target: T, source: AnyObject[], options?: MergeOptions): AnyObject;
/**
 * Recursively deep copies `source` properties into `target` *only* if not defined in target.
 * IMPORTANT: `target` is not cloned and will be updated with `source` properties.
 * @param target - The target object in which all sources are merged into.
 * @param source - Object(s) to merge into `target`.
 * @returns The `target` object.
 */
declare function mergeIf<T>(target: T, source: []): T;
declare function mergeIf<T, S1>(target: T, source: S1): T & S1;
declare function mergeIf<T, S1>(target: T, source: [S1]): T & S1;
declare function mergeIf<T, S1, S2>(target: T, source: [S1, S2]): T & S1 & S2;
declare function mergeIf<T, S1, S2, S3>(target: T, source: [S1, S2, S3]): T & S1 & S2 & S3;
declare function mergeIf<T, S1, S2, S3, S4>(target: T, source: [S1, S2, S3, S4]): T & S1 & S2 & S3 & S4;
declare function mergeIf<T>(target: T, source: AnyObject[]): AnyObject;
/**
 * Merges source[key] in target[key] only if target[key] is undefined.
 * @private
 */
declare function _mergerIf(key: string, target: AnyObject, source: AnyObject): void;
/**
 * @private
 */
declare function _deprecated(scope: string, value: unknown, previous: string, current: string): void;
/**
 * @private
 */
declare function _splitKey(key: string): string[];
declare function resolveObjectKey(obj: AnyObject, key: string): AnyObject;
/**
 * @private
 */
declare function _capitalize(str: string): string;
declare const defined: (value: unknown) => boolean;
declare const isFunction: (value: unknown) => value is (...args: any[]) => any;
declare const setsEqual: <T>(a: Set<T>, b: Set<T>) => boolean;
/**
 * @param e - The event
 * @private
 */
declare function _isClickEvent(e: ChartEvent$1): boolean;

export { Scriptable as $, ArcOptions as A, BarController as B, Chart$2 as C, DatasetController as D, Element as E, Decimation as F, Filler as G, Legend as H, Interaction as I, SubTitle as J, Title as K, LineController as L, Tooltip as M, CategoryScale as N, LinearScale as O, Point$1 as P, LogarithmicScale as Q, RadarController as R, Scale$1 as S, TimeUnit as T, RadialLinearScale as U, TimeScale as V, TimeSeriesScale as W, registerables as X, ScriptableContext as Y, ScriptableLineSegmentContext as Z, _default as _, AnyObject as a, Align as a$, ScriptableOptions as a0, ScriptableAndScriptableOptions as a1, ScriptableAndArray as a2, ScriptableAndArrayOptions as a3, ParsingOptions as a4, ControllerDatasetOptions as a5, BarControllerDatasetOptions as a6, BarControllerChartOptions as a7, BubbleControllerDatasetOptions as a8, BubbleDataPoint as a9, DatasetControllerChartComponent as aA, Defaults$1 as aB, Overrides as aC, InteractionOptions as aD, InteractionItem as aE, InteractionModeFunction as aF, InteractionModeMap as aG, InteractionMode as aH, Plugin as aI, ChartComponentLike as aJ, Registry$1 as aK, Tick$1 as aL, CoreScaleOptions as aM, ScriptableScaleContext as aN, ScriptableScalePointLabelContext as aO, TypedRegistry$1 as aP, ChartComponent as aQ, InteractionAxis as aR, CoreInteractionOptions as aS, CoreChartOptions as aT, AnimationSpec as aU, AnimationsSpec as aV, TransitionSpec as aW, TransitionsSpec as aX, AnimationOptions as aY, FontSpec as aZ, TextAlign as a_, LineControllerDatasetOptions as aa, LineControllerChartOptions as ab, ScatterControllerDatasetOptions as ac, ScatterDataPoint as ad, ScatterControllerChartOptions as ae, DoughnutControllerDatasetOptions as af, DoughnutAnimationOptions as ag, DoughnutControllerChartOptions as ah, DoughnutDataPoint as ai, DoughnutMetaExtensions as aj, PieControllerDatasetOptions as ak, PieControllerChartOptions as al, PieAnimationOptions as am, PieDataPoint as an, PieMetaExtensions as ao, PolarAreaControllerDatasetOptions as ap, PolarAreaAnimationOptions as aq, PolarAreaControllerChartOptions as ar, RadarControllerDatasetOptions as as, RadarControllerChartOptions as at, ChartMeta as au, ActiveDataPoint as av, ActiveElement as aw, ChartItem as ax, UpdateModeEnum as ay, UpdateMode as az, PointElement as b, ChartTypeRegistry as b$, VisualElement as b0, CommonElementOptions as b1, CommonHoverOptions as b2, Segment as b3, ArcBorderRadius as b4, ArcHoverOptions as b5, LineProps as b6, LineOptions as b7, LineHoverOptions as b8, PointStyle as b9, TooltipPositionerMap as bA, TooltipPositioner as bB, TooltipCallbacks as bC, ExtendedPlugin as bD, ScriptableTooltipContext as bE, TooltipOptions as bF, TooltipItem as bG, PluginOptionsByType as bH, PluginChartOptions as bI, BorderOptions as bJ, GridLineOptions as bK, TickOptions as bL, CartesianTickOptions as bM, ScriptableCartesianScaleContext as bN, ScriptableChartContext as bO, CartesianScaleOptions as bP, CategoryScaleOptions as bQ, LinearScaleOptions as bR, LogarithmicScaleOptions as bS, TimeScaleOptions as bT, RadialTickOptions as bU, RadialLinearScaleOptions as bV, CartesianScaleTypeRegistry as bW, RadialScaleTypeRegistry as bX, ScaleTypeRegistry as bY, ScaleType as bZ, CartesianParsedData as b_, PointOptions as ba, PointHoverOptions as bb, PointPrefixedOptions as bc, PointPrefixedHoverOptions as bd, BarProps as be, BarOptions as bf, BorderRadius as bg, BarHoverOptions as bh, ElementOptionsByType as bi, ElementChartOptions as bj, DecimationAlgorithm as bk, DecimationOptions as bl, FillerOptions as bm, FillTarget as bn, ComplexFillTarget as bo, FillerControllerDatasetOptions as bp, LegendItem as bq, LegendElement as br, LegendOptions as bs, TitleOptions as bt, TooltipXAlignment as bu, TooltipYAlignment as bv, TooltipLabelStyle as bw, TooltipModel as bx, TooltipPosition as by, TooltipPositionerFunction as bz, Config as c, ChartType as c0, ScaleOptionsByType as c1, ScaleOptions as c2, DatasetChartOptions as c3, ScaleChartOptions as c4, ChartOptions as c5, DefaultDataPoint as c6, ParsedDataType as c7, ChartDatasetProperties as c8, ChartDatasetPropertiesCustomTypesPerDataset as c9, each as cA, _elementsEqual as cB, clone as cC, _merger as cD, MergeOptions as cE, merge as cF, mergeIf as cG, _mergerIf as cH, _deprecated as cI, _splitKey as cJ, resolveObjectKey as cK, _capitalize as cL, defined as cM, isFunction as cN, setsEqual as cO, _isClickEvent as cP, ChartDataset as ca, ChartDatasetCustomTypesPerDataset as cb, ChartData as cc, ChartDataCustomTypesPerDataset as cd, ChartConfiguration as ce, ChartConfigurationCustomTypesPerDataset as cf, EasingFunction as cg, PointProps as ch, Animator as ci, AnimationEvent as cj, Color as ck, LayoutItem as cl, LayoutPosition as cm, TRBL as cn, TRBLCorners as co, RoundedRect as cp, isNumberFinite as cq, uid as cr, isNullOrUndef as cs, isArray as ct, isObject as cu, finiteOrDefault as cv, valueOrDefault as cw, toPercentage as cx, toDimension as cy, callback as cz, Chart$4 as d, ChartEvent$1 as e, ChartArea as f, DateAdapter as g, BubbleController as h, DoughnutController as i, PieController as j, PolarAreaController as k, ScatterController as l, Animation as m, noop as n, Animations as o, DatasetController$1 as p, Scale$2 as q, Ticks as r, defaults as s, layouts as t, registry as u, BarElement as v, LineElement as w, BasePlatform as x, BasicPlatform as y, DomPlatform as z };
