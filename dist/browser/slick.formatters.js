"use strict";
(() => {
  // src/slick.formatters.ts
  var Utils = Slick.Utils, PercentCompleteFormatter = (_row, _cell, value) => value == null || value === "" ? "-" : value < 50 ? `<span style="color:red;font-weight:bold;">${value}%</span>` : `<span style="color:green">${value}%</span>`, PercentCompleteBarFormatter = (_row, _cell, value) => {
    if (value == null || value === "")
      return "";
    var color;
    return value < 30 ? color = "red" : value < 70 ? color = "silver" : color = "green", `<span class="percent-complete-bar" style="background:${color};width:${value}%" title="${value}%"></span>`;
  }, YesNoFormatter = (_row, _cell, value) => value ? "Yes" : "No", CheckboxFormatter = (_row, _cell, value) => `<span class="sgi sgi-checkbox-${value ? "intermediate" : "blank-outline"}"></span>`, CheckmarkFormatter = (_row, _cell, value) => value ? '<span class="sgi sgi-check"></span>' : "", Formatters = {
    PercentComplete: PercentCompleteFormatter,
    PercentCompleteBar: PercentCompleteBarFormatter,
    YesNo: YesNoFormatter,
    Checkmark: CheckmarkFormatter,
    Checkbox: CheckboxFormatter
  };
  window.Slick && Utils.extend(Slick, {
    Formatters
  });
})();
//# sourceMappingURL=slick.formatters.js.map