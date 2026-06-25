/* @ds-bundle: {"format":3,"namespace":"Ds_cdd95a","components":[{"name":"ListingCard","sourcePath":"components/cards/ListingCard.jsx"},{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"SearchBar","sourcePath":"components/navigation/SearchBar.jsx"}],"sourceHashes":{"components/cards/ListingCard.jsx":"946df58ff9ff","components/core/Avatar.jsx":"5de7ee987c79","components/core/Badge.jsx":"99d9cd0a772f","components/core/Button.jsx":"b73f8c193f69","components/core/Card.jsx":"cbb4550b5dbd","components/forms/Input.jsx":"69965e20790b","components/forms/Select.jsx":"8425df5bf1fe","components/navigation/SearchBar.jsx":"3a28ade31f90","ui_kits/booking/BookingApp.jsx":"ee46d6e4d2ca","ui_kits/marketing/MarketingApp.jsx":"bda877a92674","ui_kits/mobile/MobileApp.jsx":"dc2c0319eeea"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.Ds_cdd95a = window.Ds_cdd95a || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/cards/ListingCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * ListingCard — signature program/destination card.
 * Big rounded photo, like + badge overlay, rating, meta, price.
 */
function ListingCard({
  image,
  imageAlt = '',
  badge,
  liked = false,
  onLikeToggle,
  title,
  rating,
  subtitle,
  meta,
  price,
  priceUnit = '/ 박',
  onClick,
  style,
  ...rest
}) {
  const [isLiked, setIsLiked] = React.useState(liked);
  const toggle = e => {
    e.stopPropagation();
    setIsLiked(v => !v);
    onLikeToggle && onLikeToggle(!isLiked);
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    onClick: onClick,
    style: {
      cursor: 'pointer',
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      aspectRatio: '1 / 1',
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      background: image ? undefined : 'var(--color-neutral-100)'
    }
  }, image && /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: imageAlt,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block'
    }
  }), badge && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 12,
      left: 12,
      background: 'rgba(255,255,255,0.95)',
      backdropFilter: 'blur(4px)',
      padding: '4px 10px',
      borderRadius: 'var(--radius-full)',
      font: 'var(--fw-bold) var(--fs-caption)/1.4 var(--font-sans)',
      color: 'var(--text-primary)'
    }
  }, badge), /*#__PURE__*/React.createElement("button", {
    onClick: toggle,
    "aria-label": "\uCC1C\uD558\uAE30",
    style: {
      position: 'absolute',
      top: 10,
      right: 10,
      width: 32,
      height: 32,
      border: 0,
      background: 'transparent',
      cursor: 'pointer',
      display: 'grid',
      placeItems: 'center',
      fontSize: 22,
      lineHeight: 1,
      color: isLiked ? 'var(--color-primary-500)' : '#fff',
      filter: 'drop-shadow(0 1px 3px rgba(0,0,0,0.35))',
      transition: 'transform var(--duration-fast) var(--ease-spring)'
    }
  }, isLiked ? '♥' : '♡')), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      gap: 8,
      alignItems: 'baseline'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--fw-bold) var(--fs-body)/1.4 var(--font-sans)',
      color: 'var(--text-primary)'
    }
  }, title), rating != null && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--fw-medium) var(--fs-body-sm)/1.4 var(--font-sans)',
      color: 'var(--text-primary)',
      whiteSpace: 'nowrap'
    }
  }, "\u2605 ", rating)), subtitle && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--fw-regular) var(--fs-body-sm)/1.5 var(--font-sans)',
      color: 'var(--text-secondary)'
    }
  }, subtitle), meta && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--fw-regular) var(--fs-body-sm)/1.5 var(--font-sans)',
      color: 'var(--text-tertiary)'
    }
  }, meta), price && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--fw-regular) var(--fs-body-sm)/1.5 var(--font-sans)',
      color: 'var(--text-primary)',
      marginTop: 4
    }
  }, /*#__PURE__*/React.createElement("strong", {
    style: {
      fontWeight: 'var(--fw-bold)'
    }
  }, price), " ", priceUnit)));
}
Object.assign(__ds_scope, { ListingCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/ListingCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Avatar — circular user image with initials fallback.
 */
function Avatar({
  src,
  name = '',
  size = 40,
  ring = false,
  style,
  ...rest
}) {
  const initials = name.trim().split(/\s+/).map(w => w[0]).slice(0, 2).join('').toUpperCase();
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      width: size,
      height: size,
      borderRadius: '50%',
      overflow: 'hidden',
      display: 'inline-grid',
      placeItems: 'center',
      flexShrink: 0,
      background: 'var(--color-primary-100)',
      color: 'var(--color-primary-700)',
      font: `var(--fw-bold) ${Math.round(size * 0.4)}px/1 var(--font-sans)`,
      border: ring ? '2px solid var(--bg-base)' : 'none',
      boxShadow: ring ? 'var(--shadow-sm)' : 'none',
      ...style
    }
  }, rest), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }) : initials || '★');
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Badge — small status/label pill.
 */
function Badge({
  variant = 'subtle',
  tone = 'primary',
  children,
  style,
  ...rest
}) {
  const tones = {
    primary: {
      solid: 'var(--color-primary-500)',
      subtleBg: 'var(--color-primary-50)',
      subtleFg: 'var(--color-primary-700)'
    },
    neutral: {
      solid: 'var(--color-neutral-800)',
      subtleBg: 'var(--color-neutral-100)',
      subtleFg: 'var(--color-neutral-700)'
    },
    success: {
      solid: 'var(--color-success-fg)',
      subtleBg: 'var(--color-success-bg)',
      subtleFg: 'var(--color-success-fg)'
    },
    warning: {
      solid: 'var(--color-warning-fg)',
      subtleBg: 'var(--color-warning-bg)',
      subtleFg: 'var(--color-warning-fg)'
    },
    info: {
      solid: 'var(--color-info-fg)',
      subtleBg: 'var(--color-info-bg)',
      subtleFg: 'var(--color-info-fg)'
    },
    amber: {
      solid: 'var(--color-warm-500)',
      subtleBg: 'var(--color-warm-100)',
      subtleFg: 'var(--color-warm-700)'
    }
  };
  const t = tones[tone] || tones.primary;
  const styles = {
    solid: {
      background: t.solid,
      color: '#fff',
      border: '1px solid transparent'
    },
    subtle: {
      background: t.subtleBg,
      color: t.subtleFg,
      border: '1px solid transparent'
    },
    outline: {
      background: 'transparent',
      color: 'var(--text-primary)',
      border: '1px solid var(--border-default)'
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 4,
      padding: '3px 10px',
      borderRadius: 'var(--radius-full)',
      font: 'var(--fw-bold) var(--fs-caption)/1.4 var(--font-sans)',
      whiteSpace: 'nowrap',
      ...(styles[variant] || styles.subtle),
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Button — 종로유학원 primary action control.
 * Pill-friendly, warm vermilion fill. Supports variants, sizes, icons, loading.
 */
function Button({
  variant = 'primary',
  size = 'md',
  iconLeft,
  iconRight,
  loading = false,
  disabled = false,
  fullWidth = false,
  type = 'button',
  children,
  style,
  ...rest
}) {
  const sizes = {
    sm: {
      height: 36,
      padding: '0 14px',
      font: 'var(--fs-body-sm)',
      radius: 'var(--radius-md)',
      gap: 6
    },
    md: {
      height: 44,
      padding: '0 20px',
      font: 'var(--fs-body)',
      radius: 'var(--radius-md)',
      gap: 8
    },
    lg: {
      height: 54,
      padding: '0 28px',
      font: 'var(--fs-body-lg)',
      radius: 'var(--radius-lg)',
      gap: 8
    }
  };
  const s = sizes[size] || sizes.md;
  const variants = {
    primary: {
      background: 'var(--color-primary-500)',
      color: '#fff',
      border: '1px solid transparent'
    },
    cta: {
      background: 'linear-gradient(90deg, var(--color-primary-600), var(--color-primary-500))',
      color: '#fff',
      border: '1px solid transparent'
    },
    secondary: {
      background: 'var(--bg-base)',
      color: 'var(--text-primary)',
      border: '1px solid var(--border-strong)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--text-primary)',
      border: '1px solid transparent'
    },
    inverse: {
      background: 'var(--color-neutral-900)',
      color: '#fff',
      border: '1px solid transparent'
    },
    danger: {
      background: 'var(--color-error-fg)',
      color: '#fff',
      border: '1px solid transparent'
    }
  };
  const v = variants[variant] || variants.primary;
  const isDisabled = disabled || loading;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: isDisabled,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: s.gap,
      height: s.height,
      padding: s.padding,
      width: fullWidth ? '100%' : undefined,
      font: `var(--fw-bold) ${s.font}/1 var(--font-sans)`,
      letterSpacing: '-0.005em',
      borderRadius: s.radius,
      cursor: isDisabled ? 'not-allowed' : 'pointer',
      opacity: isDisabled ? 0.5 : 1,
      transition: 'background var(--duration-fast) var(--ease-out), transform var(--duration-fast) var(--ease-out), box-shadow var(--duration-fast) var(--ease-out)',
      whiteSpace: 'nowrap',
      ...v,
      ...style
    },
    onMouseDown: e => {
      if (!isDisabled) e.currentTarget.style.transform = 'scale(0.97)';
    },
    onMouseUp: e => {
      e.currentTarget.style.transform = 'scale(1)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = 'scale(1)';
    }
  }, rest), loading && /*#__PURE__*/React.createElement(Spinner, null), !loading && iconLeft, children, !loading && iconRight);
}
function Spinner() {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      width: 16,
      height: 16,
      borderRadius: '50%',
      border: '2px solid rgba(255,255,255,0.4)',
      borderTopColor: '#fff',
      display: 'inline-block',
      animation: 'jn-spin 0.7s linear infinite'
    }
  });
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Card — generic surface container.
 */
function Card({
  variant = 'elevated',
  padding = 'md',
  children,
  style,
  ...rest
}) {
  const pads = {
    none: 0,
    sm: 'var(--space-md)',
    md: 'var(--space-lg)',
    lg: 'var(--space-xl)'
  };
  const variants = {
    elevated: {
      background: 'var(--bg-elevated)',
      boxShadow: 'var(--shadow-md)',
      border: '1px solid transparent'
    },
    outlined: {
      background: 'var(--bg-base)',
      boxShadow: 'none',
      border: '1px solid var(--border-default)'
    },
    subtle: {
      background: 'var(--bg-subtle)',
      boxShadow: 'none',
      border: '1px solid transparent'
    }
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      borderRadius: 'var(--radius-lg)',
      padding: pads[padding] ?? pads.md,
      ...(variants[variant] || variants.elevated),
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Input — text field. Default rounded; `pill` for search contexts.
 */
function Input({
  label,
  hint,
  error,
  iconLeft,
  iconRight,
  shape = 'rounded',
  size = 'md',
  id,
  style,
  containerStyle,
  ...rest
}) {
  const [focused, setFocused] = React.useState(false);
  const heights = {
    sm: 40,
    md: 48,
    lg: 56
  };
  const h = heights[size] || heights.md;
  const radius = shape === 'pill' ? 'var(--radius-full)' : 'var(--radius-md)';
  const borderColor = error ? 'var(--color-error-fg)' : focused ? 'var(--border-focus)' : 'var(--border-default)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      ...containerStyle
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: id,
    style: {
      font: 'var(--fw-medium) var(--fs-body-sm)/1.4 var(--font-sans)',
      color: 'var(--text-secondary)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      height: h,
      padding: shape === 'pill' ? '0 20px' : '0 14px',
      background: 'var(--bg-base)',
      border: `1px solid ${borderColor}`,
      borderRadius: radius,
      boxShadow: focused ? 'var(--shadow-focus)' : 'var(--shadow-none)',
      transition: 'border-color var(--duration-fast) var(--ease-out), box-shadow var(--duration-fast) var(--ease-out)'
    }
  }, iconLeft && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-tertiary)',
      display: 'inline-flex'
    }
  }, iconLeft), /*#__PURE__*/React.createElement("input", _extends({
    id: id,
    onFocus: e => {
      setFocused(true);
      rest.onFocus && rest.onFocus(e);
    },
    onBlur: e => {
      setFocused(false);
      rest.onBlur && rest.onBlur(e);
    },
    style: {
      flex: 1,
      minWidth: 0,
      border: 0,
      outline: 'none',
      background: 'transparent',
      font: 'var(--fw-regular) var(--fs-body)/1.4 var(--font-sans)',
      color: 'var(--text-primary)',
      ...style
    }
  }, rest)), iconRight && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-tertiary)',
      display: 'inline-flex'
    }
  }, iconRight)), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--fw-regular) var(--fs-caption)/1.4 var(--font-sans)',
      color: error ? 'var(--color-error-fg)' : 'var(--text-tertiary)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Select — styled native dropdown.
 */
function Select({
  label,
  hint,
  error,
  size = 'md',
  children,
  id,
  style,
  containerStyle,
  ...rest
}) {
  const heights = {
    sm: 40,
    md: 48,
    lg: 56
  };
  const h = heights[size] || heights.md;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      ...containerStyle
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: id,
    style: {
      font: 'var(--fw-medium) var(--fs-body-sm)/1.4 var(--font-sans)',
      color: 'var(--text-secondary)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: id,
    style: {
      appearance: 'none',
      WebkitAppearance: 'none',
      width: '100%',
      height: h,
      padding: '0 40px 0 14px',
      background: 'var(--bg-base)',
      border: `1px solid ${error ? 'var(--color-error-fg)' : 'var(--border-default)'}`,
      borderRadius: 'var(--radius-md)',
      color: 'var(--text-primary)',
      font: 'var(--fw-regular) var(--fs-body)/1.4 var(--font-sans)',
      cursor: 'pointer',
      ...style
    }
  }, rest), children), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      right: 14,
      top: '50%',
      transform: 'translateY(-50%)',
      pointerEvents: 'none',
      color: 'var(--text-tertiary)',
      fontSize: 12
    }
  }, "\u25BE")), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--fw-regular) var(--fs-caption)/1.4 var(--font-sans)',
      color: error ? 'var(--color-error-fg)' : 'var(--text-tertiary)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SearchBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * SearchBar — signature pill search with segmented fields + round go button.
 */
function SearchBar({
  segments,
  onSearch,
  style,
  ...rest
}) {
  const segs = segments || [{
    label: '어디로',
    value: '국가·도시 검색'
  }, {
    label: '언제',
    value: '연수 기간'
  }, {
    label: '과정',
    value: '프로그램 선택'
  }];
  const [active, setActive] = React.useState(-1);
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      background: 'var(--bg-base)',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-full)',
      padding: 6,
      boxShadow: 'var(--shadow-md)',
      ...style
    }
  }, rest), segs.map((s, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, i > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 1,
      height: 28,
      background: 'var(--border-subtle)'
    }
  }), /*#__PURE__*/React.createElement("button", {
    onClick: () => setActive(i),
    style: {
      border: 0,
      cursor: 'pointer',
      textAlign: 'left',
      background: active === i ? 'var(--color-neutral-100)' : 'transparent',
      borderRadius: 'var(--radius-full)',
      padding: '8px 18px',
      display: 'flex',
      flexDirection: 'column',
      gap: 1,
      transition: 'background var(--duration-fast) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--fw-bold) var(--fs-body-sm)/1.3 var(--font-sans)',
      color: 'var(--text-primary)'
    }
  }, s.label), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--fw-regular) var(--fs-caption)/1.3 var(--font-sans)',
      color: 'var(--text-tertiary)'
    }
  }, s.value)))), /*#__PURE__*/React.createElement("button", {
    onClick: onSearch,
    "aria-label": "\uAC80\uC0C9",
    style: {
      marginLeft: 6,
      width: 44,
      height: 44,
      borderRadius: '50%',
      border: 0,
      background: 'var(--color-primary-500)',
      color: '#fff',
      cursor: 'pointer',
      display: 'grid',
      placeItems: 'center',
      flexShrink: 0,
      transition: 'background var(--duration-fast) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.5",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "11",
    cy: "11",
    r: "7"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M21 21l-4.3-4.3"
  }))));
}
Object.assign(__ds_scope, { SearchBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SearchBar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/booking/BookingApp.jsx
try { (() => {
// 종로유학원 — 무료 상담 예약 (4-step booking flow)
const {
  Button,
  Badge,
  Card,
  Input,
  Select,
  Avatar
} = window.Ds_cdd95a;
const ASSET = '../../assets/';
const PROGRAMS = [{
  id: 'lang',
  ic: '💬',
  t: '어학연수',
  d: '회화·시험 대비 집중'
}, {
  id: 'univ',
  ic: '🎓',
  t: '대학 진학',
  d: 'Foundation·편입·학부'
}, {
  id: 'whv',
  ic: '✈️',
  t: '워킹홀리데이',
  d: '일하며 경험하는 해외'
}, {
  id: 'job',
  ic: '💼',
  t: '취업·인턴',
  d: 'Co-op·해외 취업 연계'
}];
const COUNTRIES = ['미국', '캐나다', '영국', '호주', '뉴질랜드', '일본', '몰타', '필리핀'];
const CONSULTANTS = [{
  id: 'c1',
  name: '이수민',
  role: '미주 전담 컨설턴트',
  exp: '경력 12년',
  name2: '수민',
  tag: '미국·캐나다'
}, {
  id: 'c2',
  name: '정하늘',
  role: '유럽·오세아니아',
  exp: '경력 9년',
  name2: '하늘',
  tag: '영국·호주'
}, {
  id: 'c3',
  name: '박재현',
  role: '아시아·취업연계',
  exp: '경력 7년',
  name2: '재현',
  tag: '일본·취업'
}];
const DATES = [{
  d: '6/19',
  w: '목'
}, {
  d: '6/20',
  w: '금'
}, {
  d: '6/23',
  w: '월'
}, {
  d: '6/24',
  w: '화'
}, {
  d: '6/25',
  w: '수'
}];
const TIMES = ['10:00', '11:00', '13:00', '14:00', '15:00', '16:00', '17:00'];
const METHODS = [{
  id: 'visit',
  ic: '🏢',
  t: '방문 상담',
  d: '종로 본원 센터'
}, {
  id: 'call',
  ic: '📞',
  t: '전화 상담',
  d: '편한 시간에 통화'
}, {
  id: 'video',
  ic: '💻',
  t: '화상 상담',
  d: 'Zoom 링크 발송'
}];
const STEPS = ['관심 분야', '일정 선택', '정보 입력', '예약 완료'];
function Stepper({
  step
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 0,
      justifyContent: 'center',
      marginBottom: 36
    }
  }, STEPS.map((label, i) => {
    const done = i < step,
      active = i === step;
    return /*#__PURE__*/React.createElement(React.Fragment, {
      key: label
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 30,
        height: 30,
        borderRadius: '50%',
        display: 'grid',
        placeItems: 'center',
        font: 'var(--fw-bold) var(--fs-body-sm)/1 var(--font-sans)',
        background: done ? 'var(--color-primary-500)' : active ? 'var(--color-primary-50)' : 'var(--bg-muted)',
        color: done ? '#fff' : active ? 'var(--color-primary-600)' : 'var(--text-tertiary)',
        border: active ? '2px solid var(--color-primary-500)' : '2px solid transparent',
        transition: 'all var(--duration-base) var(--ease-out)'
      }
    }, done ? '✓' : i + 1), /*#__PURE__*/React.createElement("span", {
      style: {
        font: `${active || done ? 'var(--fw-bold)' : 'var(--fw-medium)'} var(--fs-body-sm)/1 var(--font-sans)`,
        color: active ? 'var(--text-primary)' : done ? 'var(--color-primary-600)' : 'var(--text-tertiary)'
      }
    }, label)), i < STEPS.length - 1 && /*#__PURE__*/React.createElement("div", {
      style: {
        width: 40,
        height: 2,
        margin: '0 14px',
        background: done ? 'var(--color-primary-300)' : 'var(--border-default)'
      }
    }));
  }));
}
function Tile({
  selected,
  onClick,
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    style: {
      textAlign: 'left',
      cursor: 'pointer',
      padding: 18,
      borderRadius: 'var(--radius-lg)',
      background: 'var(--bg-base)',
      border: `2px solid ${selected ? 'var(--color-primary-500)' : 'var(--border-default)'}`,
      boxShadow: selected ? 'var(--shadow-sm)' : 'none',
      transition: 'all var(--duration-fast) var(--ease-out)',
      ...style
    },
    onMouseEnter: e => {
      if (!selected) e.currentTarget.style.borderColor = 'var(--color-primary-300)';
    },
    onMouseLeave: e => {
      if (!selected) e.currentTarget.style.borderColor = 'var(--border-default)';
    }
  }, children);
}
function Chip({
  selected,
  onClick,
  children
}) {
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    style: {
      cursor: 'pointer',
      padding: '9px 16px',
      borderRadius: 'var(--radius-full)',
      font: `${selected ? 'var(--fw-bold)' : 'var(--fw-medium)'} var(--fs-body-sm)/1 var(--font-sans)`,
      background: selected ? 'var(--color-primary-500)' : 'var(--bg-base)',
      color: selected ? '#fff' : 'var(--text-secondary)',
      border: `1px solid ${selected ? 'var(--color-primary-500)' : 'var(--border-default)'}`,
      transition: 'all var(--duration-fast) var(--ease-out)'
    }
  }, children);
}
function FieldLabel({
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--fw-bold) var(--fs-body-sm)/1 var(--font-sans)',
      margin: '0 0 12px'
    }
  }, children);
}
function Step1({
  data,
  set
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 28
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(FieldLabel, null, "\uC5B4\uB5A4 \uC720\uD559\uC744 \uC900\uBE44\uD558\uC138\uC694?"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: 12
    }
  }, PROGRAMS.map(p => /*#__PURE__*/React.createElement(Tile, {
    key: p.id,
    selected: data.program === p.id,
    onClick: () => set({
      program: p.id
    })
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 26
    }
  }, p.ic), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--fw-bold) var(--fs-body)/1.2 var(--font-sans)'
    }
  }, p.t), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--fw-regular) var(--fs-caption)/1.3 var(--font-sans)',
      color: 'var(--text-tertiary)',
      marginTop: 2
    }
  }, p.d))))))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(FieldLabel, null, "\uD76C\uB9DD \uAD6D\uAC00"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 8
    }
  }, COUNTRIES.map(c => /*#__PURE__*/React.createElement(Chip, {
    key: c,
    selected: data.country === c,
    onClick: () => set({
      country: c
    })
  }, c)))), /*#__PURE__*/React.createElement(Select, {
    label: "\uCD9C\uAD6D \uC608\uC815 \uC2DC\uAE30",
    value: data.when,
    onChange: e => set({
      when: e.target.value
    })
  }, /*#__PURE__*/React.createElement("option", null, "3\uAC1C\uC6D4 \uC774\uB0B4"), /*#__PURE__*/React.createElement("option", null, "6\uAC1C\uC6D4 \uC774\uB0B4"), /*#__PURE__*/React.createElement("option", null, "1\uB144 \uC774\uB0B4"), /*#__PURE__*/React.createElement("option", null, "\uC544\uC9C1 \uBBF8\uC815")));
}
function Step2({
  data,
  set
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 28
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(FieldLabel, null, "\uC0C1\uB2F4 \uBC29\uC2DD"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 12
    }
  }, METHODS.map(m => /*#__PURE__*/React.createElement(Tile, {
    key: m.id,
    selected: data.method === m.id,
    onClick: () => set({
      method: m.id
    }),
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 26,
      marginBottom: 8
    }
  }, m.ic), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--fw-bold) var(--fs-body-sm)/1.2 var(--font-sans)'
    }
  }, m.t), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--fw-regular) var(--fs-caption)/1.3 var(--font-sans)',
      color: 'var(--text-tertiary)',
      marginTop: 2
    }
  }, m.d))))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(FieldLabel, null, "\uB2F4\uB2F9 \uCEE8\uC124\uD134\uD2B8"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 12
    }
  }, CONSULTANTS.map(c => /*#__PURE__*/React.createElement(Tile, {
    key: c.id,
    selected: data.consultant === c.id,
    onClick: () => set({
      consultant: c.id
    })
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: c.name2,
    size: 52
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--fw-bold) var(--fs-body-sm)/1.2 var(--font-sans)'
    }
  }, c.name), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--fw-regular) var(--fs-caption)/1.3 var(--font-sans)',
      color: 'var(--text-tertiary)',
      marginTop: 2
    }
  }, c.role, " \xB7 ", c.exp)), /*#__PURE__*/React.createElement(Badge, {
    variant: "subtle",
    tone: "primary"
  }, c.tag)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(FieldLabel, null, "\uB0A0\uC9DC"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, DATES.map(d => /*#__PURE__*/React.createElement("button", {
    key: d.d,
    onClick: () => set({
      date: d.d
    }),
    style: {
      cursor: 'pointer',
      flex: 1,
      padding: '10px 0',
      borderRadius: 'var(--radius-md)',
      background: data.date === d.d ? 'var(--color-primary-500)' : 'var(--bg-base)',
      color: data.date === d.d ? '#fff' : 'var(--text-primary)',
      border: `1px solid ${data.date === d.d ? 'var(--color-primary-500)' : 'var(--border-default)'}`,
      transition: 'all var(--duration-fast) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--fw-bold) var(--fs-body-sm)/1.1 var(--font-sans)'
    }
  }, d.d), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--fw-regular) var(--fs-caption)/1.1 var(--font-sans)',
      opacity: 0.7,
      marginTop: 2
    }
  }, d.w))))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(FieldLabel, null, "\uC2DC\uAC04"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 8
    }
  }, TIMES.map(t => /*#__PURE__*/React.createElement(Chip, {
    key: t,
    selected: data.time === t,
    onClick: () => set({
      time: t
    })
  }, t))))));
}
function Step3({
  data,
  set
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "\uC774\uB984",
    placeholder: "\uD64D\uAE38\uB3D9",
    value: data.name,
    onChange: e => set({
      name: e.target.value
    })
  }), /*#__PURE__*/React.createElement(Input, {
    label: "\uC5F0\uB77D\uCC98",
    placeholder: "010-0000-0000",
    value: data.phone,
    onChange: e => set({
      phone: e.target.value
    })
  })), /*#__PURE__*/React.createElement(Input, {
    label: "\uC774\uBA54\uC77C",
    placeholder: "you@example.com",
    value: data.email,
    onChange: e => set({
      email: e.target.value
    })
  }), /*#__PURE__*/React.createElement(Input, {
    label: "\uC0C1\uB2F4 \uC2DC \uAD81\uAE08\uD55C \uC810 (\uC120\uD0DD)",
    placeholder: "\uC608) \uC608\uC0B0 \uBC94\uC704, \uBE44\uC790 \uAC00\uB2A5 \uC5EC\uBD80 \uB4F1",
    value: data.memo,
    onChange: e => set({
      memo: e.target.value
    })
  }), /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      font: 'var(--fw-regular) var(--fs-body-sm)/1.4 var(--font-sans)',
      color: 'var(--text-secondary)',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: data.agree,
    onChange: e => set({
      agree: e.target.checked
    }),
    style: {
      width: 18,
      height: 18,
      accentColor: 'var(--color-primary-500)'
    }
  }), "\uAC1C\uC778\uC815\uBCF4 \uC218\uC9D1\xB7\uC774\uC6A9\uC5D0 \uB3D9\uC758\uD569\uB2C8\uB2E4. (\uC0C1\uB2F4 \uBAA9\uC801, 1\uB144 \uBCF4\uAD00)"));
}
function Step4({
  data
}) {
  const c = CONSULTANTS.find(x => x.id === data.consultant);
  const p = PROGRAMS.find(x => x.id === data.program);
  const m = METHODS.find(x => x.id === data.method);
  const rows = [['관심 분야', p ? p.t : '—'], ['희망 국가', data.country || '—'], ['상담 방식', m ? m.t : '—'], ['담당 컨설턴트', c ? c.name : '—'], ['일시', `${data.date || '—'} ${data.time || ''}`], ['신청자', data.name || '—']];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 72,
      height: 72,
      borderRadius: '50%',
      background: 'var(--color-success-bg)',
      color: 'var(--color-success-fg)',
      display: 'grid',
      placeItems: 'center',
      fontSize: 34,
      margin: '0 auto 18px'
    }
  }, "\u2713"), /*#__PURE__*/React.createElement("h2", {
    style: {
      font: 'var(--fw-black) var(--fs-h1)/1.15 var(--font-display)',
      letterSpacing: '-0.015em',
      margin: '0 0 8px'
    }
  }, "\uC608\uC57D\uC774 \uC644\uB8CC\uB418\uC5C8\uC5B4\uC694!"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--fw-regular) var(--fs-body-lg)/1.5 var(--font-sans)',
      color: 'var(--text-secondary)',
      margin: '0 0 26px'
    }
  }, c ? c.name : '담당', " \uCEE8\uC124\uD134\uD2B8\uAC00 \uC608\uC57D \uC2DC\uAC04\uC5D0 \uB9DE\uCDB0 \uC5F0\uB77D\uB4DC\uB9B4\uAC8C\uC694."), /*#__PURE__*/React.createElement(Card, {
    variant: "subtle",
    padding: "lg",
    style: {
      textAlign: 'left',
      maxWidth: 420,
      margin: '0 auto'
    }
  }, rows.map(([k, v], i) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      padding: '10px 0',
      borderTop: i ? '1px solid var(--border-subtle)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--fw-regular) var(--fs-body-sm)/1.3 var(--font-sans)',
      color: 'var(--text-tertiary)'
    }
  }, k), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--fw-bold) var(--fs-body-sm)/1.3 var(--font-sans)'
    }
  }, v)))));
}
function Aside({
  data
}) {
  const c = CONSULTANTS.find(x => x.id === data.consultant);
  const p = PROGRAMS.find(x => x.id === data.program);
  const m = METHODS.find(x => x.id === data.method);
  const item = (k, v) => v ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      gap: 12,
      padding: '9px 0',
      borderTop: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--fw-regular) var(--fs-caption)/1.3 var(--font-sans)',
      color: 'var(--text-tertiary)'
    }
  }, k), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--fw-bold) var(--fs-caption)/1.3 var(--font-sans)',
      textAlign: 'right'
    }
  }, v)) : null;
  return /*#__PURE__*/React.createElement(Card, {
    variant: "elevated",
    padding: "lg",
    style: {
      position: 'sticky',
      top: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--fw-bold) var(--fs-overline)/1 var(--font-sans)',
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: 'var(--color-primary-600)',
      marginBottom: 14
    }
  }, "\uC608\uC57D \uC694\uC57D"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--fw-black) var(--fs-h3)/1.3 var(--font-display)',
      marginBottom: 4
    }
  }, "\uBB34\uB8CC 1:1 \uC0C1\uB2F4"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--fw-regular) var(--fs-body-sm)/1.4 var(--font-sans)',
      color: 'var(--text-secondary)',
      marginBottom: 6
    }
  }, "\uC57D 40\uBD84 \xB7 \uBD80\uB2F4 \uC5C6\uC774 \uC9C4\uD589"), item('분야', p && p.t), item('국가', data.country), item('방식', m && m.t), item('컨설턴트', c && c.name), item('일시', data.date && `${data.date} ${data.time || ''}`), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16,
      padding: 14,
      background: 'var(--color-primary-50)',
      borderRadius: 'var(--radius-md)',
      display: 'flex',
      gap: 10,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 16
    }
  }, "\uD83C\uDF81"), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--fw-medium) var(--fs-caption)/1.45 var(--font-sans)',
      color: 'var(--color-primary-800)'
    }
  }, "\uC0C1\uB2F4 \uC644\uB8CC \uC2DC \uC720\uD559 \uBE44\uC6A9 \uAC00\uC774\uB4DC\uBD81 PDF\uB97C \uBB34\uB8CC\uB85C \uB4DC\uB824\uC694.")));
}
function BookingApp() {
  const [step, setStep] = React.useState(0);
  const [data, setData] = React.useState({
    when: '6개월 이내',
    agree: false
  });
  const set = patch => setData(d => ({
    ...d,
    ...patch
  }));
  const canNext = [data.program && data.country, data.method && data.consultant && data.date && data.time, data.name && data.phone && data.agree][step];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: '100vh'
    }
  }, /*#__PURE__*/React.createElement("header", {
    style: {
      background: 'var(--bg-base)',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1040,
      margin: '0 auto',
      height: 68,
      padding: '0 24px',
      display: 'flex',
      alignItems: 'center',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: ASSET + 'logo-color.png',
    alt: "\uC885\uB85C\uC720\uD559\uC6D0",
    style: {
      height: 28
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--fw-bold) var(--fs-body)/1 var(--font-sans)',
      color: 'var(--text-secondary)',
      borderLeft: '1px solid var(--border-default)',
      paddingLeft: 16
    }
  }, "\uBB34\uB8CC \uC0C1\uB2F4 \uC608\uC57D"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      marginLeft: 'auto',
      font: 'var(--fw-medium) var(--fs-body-sm)/1 var(--font-sans)',
      color: 'var(--text-tertiary)'
    }
  }, "\uB3C4\uC6C0\uC774 \uD544\uC694\uD558\uC138\uC694? 1588-0000"))), /*#__PURE__*/React.createElement("main", {
    style: {
      maxWidth: 1040,
      margin: '0 auto',
      padding: '40px 24px 64px'
    }
  }, /*#__PURE__*/React.createElement(Stepper, {
    step: step
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: step < 3 ? '1fr 320px' : '1fr',
      gap: 28,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    variant: "elevated",
    padding: "lg",
    style: {
      padding: 32
    }
  }, step < 3 && /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      font: 'var(--fw-black) var(--fs-h2)/1.2 var(--font-display)',
      letterSpacing: '-0.01em',
      margin: '0 0 4px'
    }
  }, ['관심 분야를 알려주세요', '편한 일정을 골라주세요', '연락처를 입력해주세요'][step]), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--fw-regular) var(--fs-body-sm)/1.5 var(--font-sans)',
      color: 'var(--text-tertiary)',
      margin: 0
    }
  }, ['맞춤 컨설턴트를 매칭해 드릴게요.', '담당 컨설턴트와 상담 방식을 선택하세요.', '입력하신 정보로 예약을 확정합니다.'][step])), step === 0 && /*#__PURE__*/React.createElement(Step1, {
    data: data,
    set: set
  }), step === 1 && /*#__PURE__*/React.createElement(Step2, {
    data: data,
    set: set
  }), step === 2 && /*#__PURE__*/React.createElement(Step3, {
    data: data,
    set: set
  }), step === 3 && /*#__PURE__*/React.createElement(Step4, {
    data: data
  }), step < 3 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: 32,
      paddingTop: 24,
      borderTop: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    onClick: () => setStep(s => Math.max(0, s - 1)),
    style: {
      visibility: step === 0 ? 'hidden' : 'visible'
    }
  }, "\u2190 \uC774\uC804"), /*#__PURE__*/React.createElement(Button, {
    variant: "cta",
    size: "lg",
    disabled: !canNext,
    onClick: () => setStep(s => s + 1),
    iconRight: /*#__PURE__*/React.createElement("span", null, "\u2192")
  }, step === 2 ? '예약 확정하기' : '다음 단계')), step === 3 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      gap: 12,
      marginTop: 32
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "lg",
    onClick: () => {
      setStep(0);
      setData({
        when: '6개월 이내',
        agree: false
      });
    }
  }, "\uCC98\uC74C\uC73C\uB85C"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg"
  }, "\uD648\uD398\uC774\uC9C0\uB85C \u2192"))), step < 3 && /*#__PURE__*/React.createElement(Aside, {
    data: data
  }))));
}
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/booking/BookingApp.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/MarketingApp.jsx
try { (() => {
// 종로유학원 — Marketing website (single-page recreation)
// Composes DS primitives from window.Ds_cdd95a.
const {
  Button,
  SearchBar,
  ListingCard,
  Badge,
  Card,
  Avatar
} = window.Ds_cdd95a;
const ASSET = '../../assets/';
// Seeded photographic placeholders (study-abroad destinations)
const ph = (seed, w = 600, h = 600) => `https://picsum.photos/seed/jn-${seed}/${w}/${h}`;
const PROGRAMS = [{
  seed: 'usa',
  badge: '인기',
  title: '미국 · 어학연수',
  rating: 4.96,
  subtitle: '뉴욕 · LA · 보스턴',
  meta: 'F-1 비자 · 12주~',
  price: '₩4,200,000',
  unit: '/ 학기'
}, {
  seed: 'canada',
  badge: '추천',
  title: '캐나다 · 컬리지',
  rating: 4.92,
  subtitle: '토론토 · 밴쿠버',
  meta: '취업연계 · Co-op',
  price: '₩6,800,000',
  unit: '/ 학기'
}, {
  seed: 'uk',
  title: '영국 · 대학 진학',
  rating: 4.89,
  subtitle: '런던 · 맨체스터',
  meta: 'Foundation 과정',
  price: '₩7,500,000',
  unit: '/ 학기'
}, {
  seed: 'au',
  badge: '슈퍼호스트',
  title: '호주 · 워킹홀리데이',
  rating: 4.94,
  subtitle: '시드니 · 멜버른',
  meta: '아르바이트 허용',
  price: '₩2,100,000',
  unit: '/ 패키지'
}, {
  seed: 'japan',
  title: '일본 · 어학원',
  rating: 4.91,
  subtitle: '도쿄 · 오사카',
  meta: '진학 · 취업 트랙',
  price: '₩1,800,000',
  unit: '/ 학기'
}, {
  seed: 'malta',
  title: '몰타 · 어학연수',
  rating: 4.88,
  subtitle: '세인트줄리안스',
  meta: '지중해 · 가성비',
  price: '₩1,500,000',
  unit: '/ 4주'
}, {
  seed: 'ph',
  title: '필리핀 · 스파르타',
  rating: 4.85,
  subtitle: '세부 · 바기오',
  meta: '1:1 집중 · 기숙',
  price: '₩1,200,000',
  unit: '/ 4주'
}, {
  seed: 'nz',
  badge: '추천',
  title: '뉴질랜드 · 정부연수',
  rating: 4.93,
  subtitle: '오클랜드',
  meta: '학생비자 패스트',
  price: '₩3,400,000',
  unit: '/ 학기'
}];
const CATEGORIES = [{
  ic: '🎓',
  label: '대학 진학'
}, {
  ic: '💬',
  label: '어학연수'
}, {
  ic: '✈️',
  label: '워킹홀리데이'
}, {
  ic: '💼',
  label: '취업·인턴'
}, {
  ic: '🏫',
  label: '조기유학'
}, {
  ic: '📝',
  label: '시험·자격'
}, {
  ic: '🏠',
  label: '홈스테이'
}, {
  ic: '🛂',
  label: '비자·서류'
}];
const STEPS = [{
  n: '01',
  t: '무료 상담',
  d: '전문 컨설턴트가 목표와 예산을 함께 진단합니다.'
}, {
  n: '02',
  t: '맞춤 플랜',
  d: '국가·학교·과정을 1:1로 설계해 드립니다.'
}, {
  n: '03',
  t: '서류·비자',
  d: '입학원서부터 비자까지 전 과정을 대행합니다.'
}, {
  n: '04',
  t: '출국·정착',
  d: '숙소·픽업·현지 케어로 도착 후까지 챙깁니다.'
}];
const STATS = [{
  v: '38년',
  l: '유학 노하우'
}, {
  v: '120,000+',
  l: '누적 합격생'
}, {
  v: '32개국',
  l: '파트너 학교'
}, {
  v: '98%',
  l: '비자 승인율'
}];
const REVIEWS = [{
  name: '김서연',
  dest: '캐나다 컬리지 · 2024',
  initials: '서',
  text: '막막했던 Co-op 준비를 컨설턴트님이 단계마다 챙겨주셔서 토론토에 무사히 정착했어요. 현지 케어까지 완벽했습니다.'
}, {
  name: '이준호',
  dest: '미국 어학연수 · 2024',
  initials: '준',
  text: 'F-1 비자 인터뷰가 제일 걱정이었는데 모의 인터뷰까지 해주셔서 한 번에 통과했습니다. 강력 추천해요.'
}, {
  name: '박민지',
  dest: '호주 워킹홀리데이 · 2023',
  initials: '민',
  text: '비자부터 숙소, 아르바이트 연결까지 한 번에 해결됐어요. 혼자 준비했으면 절대 못 했을 거예요.'
}];
function Logo({
  height = 30
}) {
  return /*#__PURE__*/React.createElement("img", {
    src: ASSET + 'logo-color.png',
    alt: "\uC885\uB85C\uC720\uD559\uC6D0",
    style: {
      height,
      width: 'auto',
      display: 'block'
    }
  });
}
function Header({
  onConsult
}) {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const el = document.getElementById('mk-scroll');
    const fn = () => setScrolled((el ? el.scrollTop : window.scrollY) > 12);
    const t = el || window;
    t.addEventListener('scroll', fn);
    return () => t.removeEventListener('scroll', fn);
  }, []);
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 50,
      background: 'var(--bg-base)',
      borderBottom: '1px solid var(--border-subtle)',
      boxShadow: scrolled ? 'var(--shadow-sm)' : 'none',
      transition: 'box-shadow var(--duration-base) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      height: 72,
      padding: '0 32px',
      display: 'flex',
      alignItems: 'center',
      gap: 28
    }
  }, /*#__PURE__*/React.createElement(Logo, null), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 24,
      marginLeft: 8
    }
  }, ['프로그램', '국가별', '합격후기', '유학비용', '회사소개'].map(x => /*#__PURE__*/React.createElement("a", {
    key: x,
    href: "#",
    style: {
      font: 'var(--fw-medium) var(--fs-body-sm)/1 var(--font-sans)',
      color: 'var(--text-secondary)'
    }
  }, x))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 'auto',
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      font: 'var(--fw-medium) var(--fs-body-sm)/1 var(--font-sans)',
      color: 'var(--text-secondary)'
    }
  }, "\uB85C\uADF8\uC778"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm",
    onClick: onConsult
  }, "\uBB34\uB8CC \uC0C1\uB2F4 \uC2E0\uCCAD"))));
}
function Hero({
  onConsult
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      padding: '0 32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      position: 'relative',
      borderRadius: 'var(--radius-2xl)',
      overflow: 'hidden',
      marginTop: 24,
      minHeight: 460,
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: ph('hero', 1600, 900),
    alt: "",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(100deg, rgba(42,38,41,0.82) 0%, rgba(42,38,41,0.45) 52%, rgba(42,38,41,0.05) 100%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      padding: '56px 56px',
      maxWidth: 620,
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    variant: "solid",
    tone: "primary",
    style: {
      marginBottom: 18
    }
  }, "\uB300\uD55C\uBBFC\uAD6D \uC720\uD559 1\uBC88\uC9C0"), /*#__PURE__*/React.createElement("h1", {
    style: {
      font: 'var(--fw-black) var(--fs-display)/1.05 var(--font-display)',
      letterSpacing: '-0.02em',
      margin: 0
    }
  }, "\uC138\uACC4\uB85C \uD5A5\uD558\uB294", /*#__PURE__*/React.createElement("br", null), "\uAC00\uC7A5 \uD655\uC2E4\uD55C \uCCAB \uAC78\uC74C"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--fw-regular) var(--fs-body-lg)/1.6 var(--font-sans)',
      color: 'rgba(255,255,255,0.88)',
      marginTop: 18,
      maxWidth: 460
    }
  }, "38\uB144 \uB178\uD558\uC6B0\uC758 1:1 \uB9DE\uCDA4 \uCEE8\uC124\uD305\uC73C\uB85C \uC0C1\uB2F4\uBD80\uD130 \uCD9C\uAD6D, \uD604\uC9C0 \uC815\uCC29\uAE4C\uC9C0 \uD568\uAED8\uD569\uB2C8\uB2E4."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      marginTop: 28
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "cta",
    size: "lg",
    onClick: onConsult,
    iconRight: /*#__PURE__*/React.createElement("span", null, "\u2192")
  }, "\uBB34\uB8CC \uC0C1\uB2F4 \uC2E0\uCCAD"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "lg",
    style: {
      background: 'rgba(255,255,255,0.12)',
      color: '#fff',
      borderColor: 'rgba(255,255,255,0.4)'
    }
  }, "\uD504\uB85C\uADF8\uB7A8 \uB458\uB7EC\uBCF4\uAE30")))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '-34px auto 0',
      position: 'relative',
      display: 'flex',
      justifyContent: 'center',
      padding: '0 32px'
    }
  }, /*#__PURE__*/React.createElement(SearchBar, {
    segments: [{
      label: '어디로',
      value: '국가 · 도시'
    }, {
      label: '무엇을',
      value: '프로그램'
    }, {
      label: '언제',
      value: '출국 시기'
    }],
    style: {
      boxShadow: 'var(--shadow-lg)'
    }
  })));
}
function Categories() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '48px 32px 8px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(8, 1fr)',
      gap: 12
    }
  }, CATEGORIES.map((c, i) => /*#__PURE__*/React.createElement("button", {
    key: c.label,
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 8,
      padding: '16px 8px',
      background: 'var(--bg-base)',
      cursor: 'pointer',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-lg)',
      transition: 'all var(--duration-fast) var(--ease-out)'
    },
    onMouseEnter: e => {
      e.currentTarget.style.borderColor = 'var(--color-primary-300)';
      e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
      e.currentTarget.style.transform = 'translateY(-2px)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.borderColor = 'var(--border-default)';
      e.currentTarget.style.boxShadow = 'none';
      e.currentTarget.style.transform = 'none';
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 26,
      lineHeight: 1
    }
  }, c.ic), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--fw-medium) var(--fs-caption)/1.2 var(--font-sans)',
      color: 'var(--text-secondary)'
    }
  }, c.label)))));
}
function SectionHead({
  kicker,
  title,
  desc,
  action
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      gap: 16,
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement("div", null, kicker && /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--fw-bold) var(--fs-overline)/1 var(--font-sans)',
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: 'var(--color-primary-600)',
      marginBottom: 8
    }
  }, kicker), /*#__PURE__*/React.createElement("h2", {
    style: {
      font: 'var(--fw-bold) var(--fs-h1)/1.15 var(--font-display)',
      letterSpacing: '-0.015em',
      margin: 0
    }
  }, title), desc && /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--fw-regular) var(--fs-body-lg)/1.5 var(--font-sans)',
      color: 'var(--text-secondary)',
      marginTop: 8
    }
  }, desc)), action);
}
function Programs() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '40px 32px'
    }
  }, /*#__PURE__*/React.createElement(SectionHead, {
    kicker: "\uC778\uAE30 \uD504\uB85C\uADF8\uB7A8",
    title: "\uC9C0\uAE08 \uAC00\uC7A5 \uB9CE\uC774 \uCC3E\uB294 \uC720\uD559",
    desc: "\uD569\uACA9\uC0DD \uD6C4\uAE30\uC640 \uB9CC\uC871\uB3C4\uAC00 \uB192\uC740 \uCD94\uCC9C \uACFC\uC815\uC774\uC5D0\uC694.",
    action: /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      iconRight: /*#__PURE__*/React.createElement("span", null, "\u2192")
    }, "\uC804\uCCB4 \uBCF4\uAE30")
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 24
    }
  }, PROGRAMS.map(p => /*#__PURE__*/React.createElement(ListingCard, {
    key: p.seed,
    image: ph(p.seed),
    badge: p.badge,
    title: p.title,
    rating: p.rating,
    subtitle: p.subtitle,
    meta: p.meta,
    price: p.price,
    priceUnit: p.unit
  }))));
}
function Process({
  onConsult
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--bg-subtle)',
      borderTop: '1px solid var(--border-subtle)',
      borderBottom: '1px solid var(--border-subtle)',
      marginTop: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '64px 32px'
    }
  }, /*#__PURE__*/React.createElement(SectionHead, {
    kicker: "\uC9C4\uD589 \uACFC\uC815",
    title: "\uCC98\uC74C\uC774\uC5B4\uB3C4 \uAD1C\uCC2E\uC544\uC694",
    desc: "\uC0C1\uB2F4 \uD55C \uBC88\uC774\uBA74 \uCD9C\uAD6D\uAE4C\uC9C0 \uBAA8\uB4E0 \uB2E8\uACC4\uB97C \uD568\uAED8\uD569\uB2C8\uB2E4."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 20
    }
  }, STEPS.map(s => /*#__PURE__*/React.createElement(Card, {
    key: s.n,
    variant: "elevated",
    padding: "lg"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--fw-black) 30px/1 var(--font-display)',
      color: 'var(--color-primary-500)',
      marginBottom: 14
    }
  }, s.n), /*#__PURE__*/React.createElement("h3", {
    style: {
      font: 'var(--fw-bold) var(--fs-h3)/1.3 var(--font-sans)',
      margin: '0 0 6px'
    }
  }, s.t), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--fw-regular) var(--fs-body-sm)/1.55 var(--font-sans)',
      color: 'var(--text-secondary)',
      margin: 0
    }
  }, s.d)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: 32
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: onConsult
  }, "1:1 \uBB34\uB8CC \uC0C1\uB2F4 \uC608\uC57D\uD558\uAE30"))));
}
function Stats() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--bg-inverse)',
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '52px 32px',
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 24
    }
  }, STATS.map(s => /*#__PURE__*/React.createElement("div", {
    key: s.l,
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--fw-black) 44px/1 var(--font-display)',
      color: 'var(--color-primary-400)',
      letterSpacing: '-0.02em'
    }
  }, s.v), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--fw-medium) var(--fs-body)/1.4 var(--font-sans)',
      color: 'rgba(255,255,255,0.7)',
      marginTop: 8
    }
  }, s.l)))));
}
function Reviews() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '64px 32px'
    }
  }, /*#__PURE__*/React.createElement(SectionHead, {
    kicker: "\uD569\uACA9 \uD6C4\uAE30",
    title: "\uBA3C\uC800 \uB5A0\uB09C \uC120\uBC30\uB4E4\uC758 \uC774\uC57C\uAE30"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 24
    }
  }, REVIEWS.map(r => /*#__PURE__*/React.createElement(Card, {
    key: r.name,
    variant: "outlined",
    padding: "lg"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--color-warm-500)',
      fontSize: 16,
      letterSpacing: 2,
      marginBottom: 10
    }
  }, "\u2605\u2605\u2605\u2605\u2605"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--fw-regular) var(--fs-body)/1.6 var(--font-sans)',
      color: 'var(--text-primary)',
      margin: '0 0 18px'
    }
  }, "\u201C", r.text, "\u201D"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: r.name,
    size: 40
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--fw-bold) var(--fs-body-sm)/1.2 var(--font-sans)'
    }
  }, r.name), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--fw-regular) var(--fs-caption)/1.2 var(--font-sans)',
      color: 'var(--text-tertiary)',
      marginTop: 2
    }
  }, r.dest)))))));
}
function CtaBanner({
  onConsult
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '0 32px 64px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      borderRadius: 'var(--radius-2xl)',
      background: 'linear-gradient(120deg, var(--color-primary-600), var(--color-primary-500) 60%, var(--color-primary-400))',
      padding: '56px 56px',
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 24,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      font: 'var(--fw-black) var(--fs-h1)/1.15 var(--font-display)',
      letterSpacing: '-0.015em',
      margin: '0 0 10px'
    }
  }, "\uC624\uB298 \uC0C1\uB2F4\uD558\uBA74, \uB0B4\uB144\uC5D4 \uADF8\uACF3\uC5D0 \uC788\uC5B4\uC694"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--fw-regular) var(--fs-body-lg)/1.5 var(--font-sans)',
      color: 'rgba(255,255,255,0.9)',
      margin: 0
    }
  }, "\uC0C1\uB2F4\uC740 100% \uBB34\uB8CC\uC774\uBA70, \uBD80\uB2F4 \uC5C6\uC774 \uC9C4\uD589\uB429\uB2C8\uB2E4.")), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    onClick: onConsult,
    style: {
      background: '#fff',
      color: 'var(--color-primary-600)'
    }
  }, "\uBB34\uB8CC \uC0C1\uB2F4 \uC2E0\uCCAD\uD558\uAE30")));
}
function Footer() {
  const cols = [{
    h: '프로그램',
    items: ['어학연수', '대학진학', '워킹홀리데이', '취업·인턴']
  }, {
    h: '국가별',
    items: ['미국', '캐나다', '영국', '호주', '일본']
  }, {
    h: '고객지원',
    items: ['공지사항', '자주 묻는 질문', '상담 예약', '오시는 길']
  }];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--bg-subtle)',
      borderTop: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '48px 32px',
      display: 'grid',
      gridTemplateColumns: '1.6fr 1fr 1fr 1fr',
      gap: 32
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Logo, {
    height: 28
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--fw-regular) var(--fs-body-sm)/1.6 var(--font-sans)',
      color: 'var(--text-secondary)',
      marginTop: 14,
      maxWidth: 280
    }
  }, "38\uB144\uAC04 12\uB9CC \uBA85\uC758 \uAFC8\uC744 \uD568\uAED8\uD55C \uB300\uD55C\uBBFC\uAD6D \uC720\uD559 1\uBC88\uC9C0. \uC0C1\uB2F4\uBD80\uD130 \uC815\uCC29\uAE4C\uC9C0 \uD55C \uACF3\uC5D0\uC11C.")), cols.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.h
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--fw-bold) var(--fs-body-sm)/1 var(--font-sans)',
      marginBottom: 14
    }
  }, c.h), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, c.items.map(i => /*#__PURE__*/React.createElement("a", {
    key: i,
    href: "#",
    style: {
      font: 'var(--fw-regular) var(--fs-body-sm)/1 var(--font-sans)',
      color: 'var(--text-secondary)'
    }
  }, i)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '20px 32px',
      font: 'var(--fw-regular) var(--fs-caption)/1.5 var(--font-sans)',
      color: 'var(--text-tertiary)'
    }
  }, "\xA9 2026 \uC885\uB85C\uC720\uD559\uC6D0. \uC11C\uC6B8\uD2B9\uBCC4\uC2DC \uC885\uB85C\uAD6C \xB7 \uC0AC\uC5C5\uC790\uB4F1\uB85D\uBC88\uD638 000-00-00000 \xB7 \uB300\uD45C \uD64D\uAE38\uB3D9")));
}
function ConsultModal({
  open,
  onClose
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 100,
      background: 'var(--bg-overlay)',
      display: 'grid',
      placeItems: 'center',
      padding: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      width: 'min(460px, 100%)',
      background: 'var(--bg-base)',
      borderRadius: 'var(--radius-xl)',
      padding: 28,
      boxShadow: 'var(--shadow-xl)'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      font: 'var(--fw-bold) var(--fs-h2)/1.2 var(--font-display)',
      margin: '0 0 6px'
    }
  }, "\uBB34\uB8CC \uC0C1\uB2F4 \uC2E0\uCCAD"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--fw-regular) var(--fs-body-sm)/1.5 var(--font-sans)',
      color: 'var(--text-secondary)',
      margin: '0 0 20px'
    }
  }, "\uC5F0\uB77D\uCC98\uB97C \uB0A8\uACA8\uC8FC\uC2DC\uBA74 \uCEE8\uC124\uD134\uD2B8\uAC00 1\uC77C \uB0B4 \uC5F0\uB77D\uB4DC\uB824\uC694."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, window.Ds_cdd95a.Input ? /*#__PURE__*/React.createElement(window.Ds_cdd95a.Input, {
    label: "\uC774\uB984",
    placeholder: "\uD64D\uAE38\uB3D9"
  }) : null, window.Ds_cdd95a.Input ? /*#__PURE__*/React.createElement(window.Ds_cdd95a.Input, {
    label: "\uC5F0\uB77D\uCC98",
    placeholder: "010-0000-0000"
  }) : null, /*#__PURE__*/React.createElement(Button, {
    variant: "cta",
    size: "lg",
    fullWidth: true,
    onClick: onClose
  }, "\uC2E0\uCCAD \uC644\uB8CC"))));
}
function MarketingApp() {
  const [modal, setModal] = React.useState(false);
  const open = () => setModal(true);
  return /*#__PURE__*/React.createElement("div", {
    id: "mk-scroll",
    style: {
      height: '100vh',
      overflowY: 'auto',
      background: 'var(--bg-base)'
    }
  }, /*#__PURE__*/React.createElement(Header, {
    onConsult: open
  }), /*#__PURE__*/React.createElement(Hero, {
    onConsult: open
  }), /*#__PURE__*/React.createElement(Categories, null), /*#__PURE__*/React.createElement(Programs, null), /*#__PURE__*/React.createElement(Process, {
    onConsult: open
  }), /*#__PURE__*/React.createElement(Stats, null), /*#__PURE__*/React.createElement(Reviews, null), /*#__PURE__*/React.createElement(CtaBanner, {
    onConsult: open
  }), /*#__PURE__*/React.createElement(Footer, null), /*#__PURE__*/React.createElement(ConsultModal, {
    open: modal,
    onClose: () => setModal(false)
  }));
}
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/MarketingApp.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mobile/MobileApp.jsx
try { (() => {
// 종로유학원 — 모바일 앱 (phone-framed, tabbed)
const {
  Button,
  Badge,
  Card,
  Avatar
} = window.Ds_cdd95a;
const ASSET = '../../assets/';
const ph = (seed, w = 400, h = 300) => `https://picsum.photos/seed/jn-${seed}/${w}/${h}`;
const FEED = [{
  seed: 'usa',
  badge: '인기',
  title: '미국 어학연수',
  loc: '뉴욕 · LA',
  rating: 4.96,
  price: '₩4,200,000',
  unit: '학기'
}, {
  seed: 'canada',
  badge: '추천',
  title: '캐나다 Co-op',
  loc: '토론토 · 밴쿠버',
  rating: 4.92,
  price: '₩6,800,000',
  unit: '학기'
}, {
  seed: 'au',
  title: '호주 워킹홀리데이',
  loc: '시드니 · 멜번',
  rating: 4.94,
  price: '₩2,100,000',
  unit: '패키지'
}, {
  seed: 'malta',
  title: '몰타 어학연수',
  loc: '세인트줄리안스',
  rating: 4.88,
  price: '₩1,500,000',
  unit: '4주'
}];
const CATS = [{
  ic: '🎓',
  t: '대학진학'
}, {
  ic: '💬',
  t: '어학연수'
}, {
  ic: '✈️',
  t: '워홀'
}, {
  ic: '💼',
  t: '취업'
}, {
  ic: '🏫',
  t: '조기유학'
}, {
  ic: '🛂',
  t: '비자'
}];
const COUNTRIES = [{
  f: '🇺🇸',
  n: '미국',
  c: 1240
}, {
  f: '🇨🇦',
  n: '캐나다',
  c: 980
}, {
  f: '🇬🇧',
  n: '영국',
  c: 760
}, {
  f: '🇦🇺',
  n: '호주',
  c: 1120
}, {
  f: '🇯🇵',
  n: '일본',
  c: 640
}, {
  f: '🇳🇿',
  n: '뉴질랜드',
  c: 410
}];
function StatusBar({
  dark
}) {
  const col = dark ? '#fff' : 'var(--text-primary)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: 44,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 24px',
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--fw-bold) 14px/1 var(--font-sans)',
      color: col
    }
  }, "9:41"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      alignItems: 'center',
      color: col,
      fontSize: 12
    }
  }, /*#__PURE__*/React.createElement("span", null, "\u25CF\u25CF\u25CF\u25CF"), /*#__PURE__*/React.createElement("span", null, "\uD83D\uDCF6"), /*#__PURE__*/React.createElement("span", null, "\uD83D\uDD0B")));
}
function TabBar({
  tab,
  setTab
}) {
  const tabs = [{
    id: 'home',
    ic: '🏠',
    l: '홈'
  }, {
    id: 'explore',
    ic: '🔍',
    l: '탐색'
  }, {
    id: 'booking',
    ic: '📅',
    l: '상담'
  }, {
    id: 'mypage',
    ic: '👤',
    l: '마이'
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 'none',
      display: 'flex',
      borderTop: '1px solid var(--border-subtle)',
      background: 'var(--bg-base)',
      padding: '8px 0 22px'
    }
  }, tabs.map(t => {
    const on = tab === t.id;
    return /*#__PURE__*/React.createElement("button", {
      key: t.id,
      onClick: () => setTab(t.id),
      style: {
        flex: 1,
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 4
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 20,
        filter: on ? 'none' : 'grayscale(1)',
        opacity: on ? 1 : 0.5
      }
    }, t.ic), /*#__PURE__*/React.createElement("span", {
      style: {
        font: `${on ? 'var(--fw-bold)' : 'var(--fw-medium)'} 10px/1 var(--font-sans)`,
        color: on ? 'var(--color-primary-600)' : 'var(--text-tertiary)'
      }
    }, t.l));
  }));
}
function FeedCard({
  item
}) {
  const [liked, setLiked] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 'none',
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      aspectRatio: '4/3'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: ph(item.seed, 480, 360),
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }), item.badge && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 10,
      left: 10,
      background: 'rgba(255,255,255,0.95)',
      padding: '4px 10px',
      borderRadius: 'var(--radius-full)',
      font: 'var(--fw-bold) 11px/1 var(--font-sans)'
    }
  }, item.badge), /*#__PURE__*/React.createElement("button", {
    onClick: () => setLiked(v => !v),
    style: {
      position: 'absolute',
      top: 8,
      right: 8,
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      fontSize: 22,
      color: liked ? 'var(--color-primary-500)' : '#fff',
      textShadow: '0 1px 3px rgba(0,0,0,0.3)'
    }
  }, liked ? '♥' : '♡')), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '8px 2px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--fw-bold) var(--fs-body)/1.2 var(--font-sans)'
    }
  }, item.title), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--fw-medium) var(--fs-body-sm)/1 var(--font-sans)'
    }
  }, "\u2605 ", item.rating)), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--fw-regular) var(--fs-body-sm)/1.3 var(--font-sans)',
      color: 'var(--text-tertiary)',
      marginTop: 2
    }
  }, item.loc), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--fw-medium) var(--fs-body-sm)/1 var(--font-sans)',
      marginTop: 6
    }
  }, /*#__PURE__*/React.createElement("strong", null, item.price), " ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-tertiary)',
      fontWeight: 400
    }
  }, "/ ", item.unit))));
}
function HomeScreen({
  goBooking
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "app-scroll",
    style: {
      flex: 1,
      overflowY: 'auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '8px 20px 14px',
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: ASSET + 'logo-color.png',
    alt: "\uC885\uB85C\uC720\uD559\uC6D0",
    style: {
      height: 24
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 'auto',
      fontSize: 20
    }
  }, "\uD83D\uDD14")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 20px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      background: 'var(--bg-base)',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-full)',
      padding: '12px 18px',
      boxShadow: 'var(--shadow-sm)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-tertiary)'
    }
  }, "\uD83D\uDD0D"), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--fw-medium) var(--fs-body-sm)/1 var(--font-sans)',
      color: 'var(--text-tertiary)'
    }
  }, "\uAD6D\uAC00 \xB7 \uD504\uB85C\uADF8\uB7A8\uC744 \uAC80\uC0C9\uD558\uC138\uC694"))), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: '18px 20px',
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      position: 'relative',
      aspectRatio: '16/9'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: ph('hero', 600, 340),
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(90deg, rgba(42,38,41,0.78), rgba(42,38,41,0.1))',
      padding: 18,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--fw-black) 19px/1.25 var(--font-display)',
      color: '#fff'
    }
  }, "\uC5EC\uB984\uBC29\uD559", /*#__PURE__*/React.createElement("br", null), "\uC5BC\uB9AC\uBC84\uB4DC -20%"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--fw-medium) 12px/1 var(--font-sans)',
      color: 'rgba(255,255,255,0.85)',
      marginTop: 6
    }
  }, "6\uC6D4 \uD55C\uC815 \uD2B9\uAC00"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(6, 1fr)',
      gap: 6,
      padding: '0 16px',
      marginBottom: 8
    }
  }, CATS.map(c => /*#__PURE__*/React.createElement("button", {
    key: c.t,
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 5,
      padding: '6px 0'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 22
    }
  }, c.ic), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--fw-medium) 10px/1.1 var(--font-sans)',
      color: 'var(--text-secondary)'
    }
  }, c.t)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      padding: '14px 20px 10px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--fw-black) var(--fs-h3)/1 var(--font-display)'
    }
  }, "\uC778\uAE30 \uD504\uB85C\uADF8\uB7A8"), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--fw-medium) var(--fs-caption)/1 var(--font-sans)',
      color: 'var(--color-primary-600)'
    }
  }, "\uC804\uCCB4 \u2192")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 22,
      padding: '0 20px 20px'
    }
  }, FEED.map(f => /*#__PURE__*/React.createElement(FeedCard, {
    key: f.seed,
    item: f
  }))));
}
function ExploreScreen() {
  return /*#__PURE__*/React.createElement("div", {
    className: "app-scroll",
    style: {
      flex: 1,
      overflowY: 'auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '8px 20px 14px'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      font: 'var(--fw-black) var(--fs-h2)/1.1 var(--font-display)',
      margin: 0
    }
  }, "\uAD6D\uAC00\uBCC4 \uD0D0\uC0C9")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 12,
      padding: '0 20px 20px'
    }
  }, COUNTRIES.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.n,
    style: {
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      position: 'relative',
      aspectRatio: '1',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: ph(c.n, 300, 300),
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(0deg, rgba(42,38,41,0.7), transparent 60%)',
      padding: 14,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 24
    }
  }, c.f), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--fw-bold) var(--fs-body)/1 var(--font-sans)',
      color: '#fff',
      marginTop: 4
    }
  }, c.n), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--fw-regular) 11px/1 var(--font-sans)',
      color: 'rgba(255,255,255,0.8)',
      marginTop: 2
    }
  }, c.c, "\uAC1C \uD504\uB85C\uADF8\uB7A8"))))));
}
function BookingScreen() {
  const [done, setDone] = React.useState(false);
  const [sel, setSel] = React.useState({
    method: 'video',
    time: '14:00'
  });
  if (done) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 32,
        textAlign: 'center'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 72,
        height: 72,
        borderRadius: '50%',
        background: 'var(--color-success-bg)',
        color: 'var(--color-success-fg)',
        display: 'grid',
        placeItems: 'center',
        fontSize: 34,
        marginBottom: 18
      }
    }, "\u2713"), /*#__PURE__*/React.createElement("h2", {
      style: {
        font: 'var(--fw-black) var(--fs-h2)/1.2 var(--font-display)',
        margin: '0 0 8px'
      }
    }, "\uC608\uC57D \uC644\uB8CC!"), /*#__PURE__*/React.createElement("p", {
      style: {
        font: 'var(--fw-regular) var(--fs-body)/1.5 var(--font-sans)',
        color: 'var(--text-secondary)',
        margin: '0 0 24px'
      }
    }, "\uC624\uB298 14:00 \uD654\uC0C1 \uC0C1\uB2F4\uC73C\uB85C", /*#__PURE__*/React.createElement("br", null), "\uCEE8\uC124\uD134\uD2B8\uAC00 \uC5F0\uB77D\uB4DC\uB9B4\uAC8C\uC694."), /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      onClick: () => setDone(false)
    }, "\uB2E4\uC2DC \uC608\uC57D"));
  }
  return /*#__PURE__*/React.createElement("div", {
    className: "app-scroll",
    style: {
      flex: 1,
      overflowY: 'auto',
      padding: '8px 20px 20px'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      font: 'var(--fw-black) var(--fs-h2)/1.1 var(--font-display)',
      margin: '0 0 4px'
    }
  }, "\uBB34\uB8CC \uC0C1\uB2F4 \uC608\uC57D"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--fw-regular) var(--fs-body-sm)/1.4 var(--font-sans)',
      color: 'var(--text-tertiary)',
      margin: '0 0 20px'
    }
  }, "40\uBD84 \xB7 1:1 \uB9DE\uCDA4 \xB7 100% \uBB34\uB8CC"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--fw-bold) var(--fs-body-sm)/1 var(--font-sans)',
      margin: '0 0 10px'
    }
  }, "\uC0C1\uB2F4 \uBC29\uC2DD"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      marginBottom: 22
    }
  }, [['video', '💻', '화상'], ['call', '📞', '전화'], ['visit', '🏢', '방문']].map(([id, ic, l]) => /*#__PURE__*/React.createElement("button", {
    key: id,
    onClick: () => setSel(s => ({
      ...s,
      method: id
    })),
    style: {
      flex: 1,
      cursor: 'pointer',
      padding: '14px 0',
      borderRadius: 'var(--radius-md)',
      background: sel.method === id ? 'var(--color-primary-50)' : 'var(--bg-base)',
      border: `2px solid ${sel.method === id ? 'var(--color-primary-500)' : 'var(--border-default)'}`,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 22
    }
  }, ic), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--fw-bold) var(--fs-caption)/1 var(--font-sans)'
    }
  }, l)))), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--fw-bold) var(--fs-body-sm)/1 var(--font-sans)',
      margin: '0 0 10px'
    }
  }, "\uC624\uB298 \uAC00\uB2A5\uD55C \uC2DC\uAC04"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 8,
      marginBottom: 24
    }
  }, ['10:00', '11:00', '13:00', '14:00', '15:00', '16:00'].map(t => /*#__PURE__*/React.createElement("button", {
    key: t,
    onClick: () => setSel(s => ({
      ...s,
      time: t
    })),
    style: {
      cursor: 'pointer',
      padding: '9px 16px',
      borderRadius: 'var(--radius-full)',
      font: `${sel.time === t ? 'var(--fw-bold)' : 'var(--fw-medium)'} var(--fs-body-sm)/1 var(--font-sans)`,
      background: sel.time === t ? 'var(--color-primary-500)' : 'var(--bg-base)',
      color: sel.time === t ? '#fff' : 'var(--text-secondary)',
      border: `1px solid ${sel.time === t ? 'var(--color-primary-500)' : 'var(--border-default)'}`
    }
  }, t))), /*#__PURE__*/React.createElement(Card, {
    variant: "subtle",
    padding: "md",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: "\uC218\uBBFC",
    size: 44
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--fw-bold) var(--fs-body-sm)/1.2 var(--font-sans)'
    }
  }, "\uC774\uC218\uBBFC \uCEE8\uC124\uD134\uD2B8"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--fw-regular) var(--fs-caption)/1.2 var(--font-sans)',
      color: 'var(--text-tertiary)'
    }
  }, "\uBBF8\uC8FC \uC804\uB2F4 \xB7 \uACBD\uB825 12\uB144")), /*#__PURE__*/React.createElement(Badge, {
    variant: "subtle",
    tone: "primary",
    style: {
      marginLeft: 'auto'
    }
  }, "\uB9E4\uCE6D\uB428")), /*#__PURE__*/React.createElement(Button, {
    variant: "cta",
    size: "lg",
    fullWidth: true,
    onClick: () => setDone(true)
  }, "\uC608\uC57D \uD655\uC815\uD558\uAE30"));
}
function MyPageScreen() {
  const rows = [['📅', '내 상담 예약', '1건'], ['❤️', '찜한 프로그램', '8'], ['📄', '제출 서류', '진행중'], ['🎁', '유학 가이드북', 'PDF'], ['⚙️', '설정', '']];
  return /*#__PURE__*/React.createElement("div", {
    className: "app-scroll",
    style: {
      flex: 1,
      overflowY: 'auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--bg-inverse)',
      padding: '24px 20px 28px',
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: "\uC9C0\uC6D0",
    size: 56
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--fw-black) var(--fs-h3)/1.2 var(--font-display)'
    }
  }, "\uAE40\uC9C0\uC6D0\uB2D8"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--fw-regular) var(--fs-body-sm)/1 var(--font-sans)',
      color: 'rgba(255,255,255,0.7)',
      marginTop: 2
    }
  }, "\uCE90\uB098\uB2E4 Co-op \uC900\uBE44\uC911")))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '8px 12px'
    }
  }, rows.map(([ic, l, v], i) => /*#__PURE__*/React.createElement("button", {
    key: l,
    style: {
      width: '100%',
      background: 'none',
      border: 'none',
      borderBottom: i < rows.length - 1 ? '1px solid var(--border-subtle)' : 'none',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      padding: '16px 10px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 20
    }
  }, ic), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--fw-medium) var(--fs-body)/1 var(--font-sans)',
      color: 'var(--text-primary)'
    }
  }, l), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 'auto',
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, v && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--fw-bold) var(--fs-caption)/1 var(--font-sans)',
      color: 'var(--color-primary-600)'
    }
  }, v), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-tertiary)'
    }
  }, "\u203A"))))));
}
function MobileApp() {
  const [tab, setTab] = React.useState('home');
  const darkStatus = tab === 'mypage';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 390,
      height: 844,
      background: 'var(--bg-subtle)',
      borderRadius: 46,
      overflow: 'hidden',
      boxShadow: '0 0 0 11px #1a1719, 0 0 0 13px #2a2629, var(--shadow-xl)',
      display: 'flex',
      flexDirection: 'column',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 0,
      left: '50%',
      transform: 'translateX(-50%)',
      width: 130,
      height: 30,
      background: '#1a1719',
      borderRadius: '0 0 18px 18px',
      zIndex: 20
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      background: darkStatus ? 'var(--bg-inverse)' : 'var(--bg-base)',
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement(StatusBar, {
    dark: darkStatus
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
      background: tab === 'home' || tab === 'explore' ? 'var(--bg-base)' : 'var(--bg-base)'
    }
  }, tab === 'home' && /*#__PURE__*/React.createElement(HomeScreen, {
    goBooking: () => setTab('booking')
  }), tab === 'explore' && /*#__PURE__*/React.createElement(ExploreScreen, null), tab === 'booking' && /*#__PURE__*/React.createElement(BookingScreen, null), tab === 'mypage' && /*#__PURE__*/React.createElement(MyPageScreen, null)), /*#__PURE__*/React.createElement(TabBar, {
    tab: tab,
    setTab: setTab
  }));
}
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobile/MobileApp.jsx", error: String((e && e.message) || e) }); }

__ds_ns.ListingCard = __ds_scope.ListingCard;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.SearchBar = __ds_scope.SearchBar;

})();
