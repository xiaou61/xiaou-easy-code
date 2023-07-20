import { PropType } from '../../core/types';
import Path from '../Path';
import Displayable from '../Displayable';
declare type BrushType = PropType<Path, 'brush'>;
export default function (orignalBrush: BrushType): (ctx: CanvasRenderingContext2D, prevEl?: Displayable<import("../Displayable").DisplayableOption>) => void;
export {};
