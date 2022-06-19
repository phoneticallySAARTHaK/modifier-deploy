"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var error = {
  NotFound: 'not found',
  NameTaken: function NameTaken(name) {
    return "Error: The name '".concat(name, "' is already taken.");
  },
  DoesNotExist: function DoesNotExist(name, value) {
    return "Error: ".concat(name, " '").concat(value, "' dose not exist.");
  },
  AlreadyExist: function AlreadyExist(name, value) {
    return "Error: The ".concat(name, " '").concat(value, "' already exists on this account.");
  },
  IsRequired: function IsRequired(name) {
    return "Error: '".concat(name, "' is required property");
  },
  NotValid: function NotValid(name) {
    return "Error: '".concat(name, "' contains invalid charactersis.");
  },
  InvalidUrl: function InvalidUrl(name) {
    return "Error: '".concat(name, "': Invalid url");
  },
  ServerError: "Error: Server Error.",
  LengthExceeded: function LengthExceeded(obj) {
    return "".concat(obj.field, " should be less than ").concat(obj.len);
  }
};
var info = {
  Removed: function Removed(name) {
    return "Info: '".concat(name, "' Removed Successfully.");
  },
  Deleted: function Deleted(name) {
    return "Info: '".concat(name, "' Deleted Successfully.");
  }
};
var _default = {
  error: error,
  info: info
};
exports["default"] = _default;