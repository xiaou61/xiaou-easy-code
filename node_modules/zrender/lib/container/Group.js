"use strict";
exports.__esModule = true;
var tslib_1 = require("tslib");
var zrUtil = require("../core/util");
var Element_1 = require("../Element");
var BoundingRect_1 = require("../core/BoundingRect");
var Group = (function (_super) {
    tslib_1.__extends(Group, _super);
    function Group(opts) {
        var _this = _super.call(this) || this;
        _this.isGroup = true;
        _this.type = 'group';
        _this._children = [];
        _this.attr(opts);
        return _this;
    }
    Group.prototype.children = function () {
        return this._children;
    };
    Group.prototype.childAt = function (idx) {
        return this._children[idx];
    };
    Group.prototype.childOfName = function (name) {
        var children = this._children;
        for (var i = 0; i < children.length; i++) {
            if (children[i].name === name) {
                return children[i];
            }
        }
    };
    Group.prototype.childCount = function () {
        return this._children.length;
    };
    Group.prototype.add = function (child) {
        if (child && child !== this && child.parent !== this) {
            this._children.push(child);
            this._doAdd(child);
        }
        return this;
    };
    Group.prototype.addBefore = function (child, nextSibling) {
        if (child && child !== this && child.parent !== this
            && nextSibling && nextSibling.parent === this) {
            var children = this._children;
            var idx = children.indexOf(nextSibling);
            if (idx >= 0) {
                children.splice(idx, 0, child);
                this._doAdd(child);
            }
        }
        return this;
    };
    Group.prototype._doAdd = function (child) {
        if (child.parent) {
            child.parent.remove(child);
        }
        child.parent = this;
        var storage = this.__storage;
        var zr = this.__zr;
        if (storage && storage !== child.__storage) {
            storage.addToStorage(child);
            if (child instanceof Group) {
                child.addChildrenToStorage(storage);
            }
        }
        zr && zr.refresh();
    };
    Group.prototype.remove = function (child) {
        var zr = this.__zr;
        var storage = this.__storage;
        var children = this._children;
        var idx = zrUtil.indexOf(children, child);
        if (idx < 0) {
            return this;
        }
        children.splice(idx, 1);
        child.parent = null;
        if (storage) {
            storage.delFromStorage(child);
            if (child instanceof Group) {
                child.delChildrenFromStorage(storage);
            }
        }
        zr && zr.refresh();
        return this;
    };
    Group.prototype.removeAll = function () {
        var children = this._children;
        var storage = this.__storage;
        for (var i = 0; i < children.length; i++) {
            var child = children[i];
            if (storage) {
                storage.delFromStorage(child);
                if (child instanceof Group) {
                    child.delChildrenFromStorage(storage);
                }
            }
            child.parent = null;
        }
        children.length = 0;
        return this;
    };
    Group.prototype.eachChild = function (cb, context) {
        var children = this._children;
        for (var i = 0; i < children.length; i++) {
            var child = children[i];
            cb.call(context, child, i);
        }
        return this;
    };
    Group.prototype.traverse = function (cb, context) {
        for (var i = 0; i < this._children.length; i++) {
            var child = this._children[i];
            cb.call(context, child);
            if (child.type === 'group') {
                child.traverse(cb, context);
            }
        }
        return this;
    };
    Group.prototype.addChildrenToStorage = function (storage) {
        for (var i = 0; i < this._children.length; i++) {
            var child = this._children[i];
            storage.addToStorage(child);
            if (child instanceof Group) {
                child.addChildrenToStorage(storage);
            }
        }
    };
    Group.prototype.delChildrenFromStorage = function (storage) {
        for (var i = 0; i < this._children.length; i++) {
            var child = this._children[i];
            storage.delFromStorage(child);
            if (child instanceof Group) {
                child.delChildrenFromStorage(storage);
            }
        }
    };
    Group.prototype.dirty = function () {
        this.__dirty = true;
        this.__zr && this.__zr.refresh();
        return this;
    };
    Group.prototype.getBoundingRect = function (includeChildren) {
        var tmpRect = new BoundingRect_1["default"](0, 0, 0, 0);
        var children = includeChildren || this._children;
        var tmpMat = [];
        var rect = null;
        for (var i = 0; i < children.length; i++) {
            var child = children[i];
            if (child.ignore || child.invisible) {
                continue;
            }
            var childRect = child.getBoundingRect();
            var transform = child.getLocalTransform(tmpMat);
            if (transform) {
                tmpRect.copy(childRect);
                tmpRect.applyTransform(transform);
                rect = rect || tmpRect.clone();
                rect.union(tmpRect);
            }
            else {
                rect = rect || childRect.clone();
                rect.union(childRect);
            }
        }
        return rect || tmpRect;
    };
    return Group;
}(Element_1["default"]));
exports["default"] = Group;
//# sourceMappingURL=Group.js.map